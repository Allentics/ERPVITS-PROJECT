const fs = require('fs');
const path = require('path');

function escapeSql(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/'/g, "''");
}

function jsonToSql(obj) {
    return `'${escapeSql(JSON.stringify(obj))}'::jsonb`;
}

// 1. Read extracted blog content
let extractedBlogs = {};
try {
    const jsonPath = path.join(process.cwd(), 'extracted_blog_content.json');
    if (fs.existsSync(jsonPath)) {
        extractedBlogs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    }
} catch (e) {
    console.error('Failed to read extracted_blog_content.json', e);
}

// 2. Parse blogData.ts
const blogDataContent = fs.readFileSync(path.join(process.cwd(), 'lib/blogData.ts'), 'utf8');
const blogPostsMatch = blogDataContent.match(/export const blogPosts: BlogPost\[] = (\[[\s\S]*?\]);/);
let blogPosts = [];
if (blogPostsMatch) {
    try {
        // Simple eval for the array
        const cleaned = blogPostsMatch[1]
            .replace(/export /g, '')
            .replace(/: BlogPost/g, '');
        eval('blogPosts = ' + cleaned);
    } catch (e) {
        console.error('Failed to parse blogPosts', e);
    }
}

// 3. Parse courseData.ts and its dependencies
const courseFiles = {
    ariba: 'lib/aribaContent.ts',
    fieldglass: 'lib/fieldglassContent.ts',
    mm: 'lib/mmContent.ts',
    fico: 'lib/ficoContent.ts',
    sd: 'lib/sdContent.ts',
    'c4c-technical': 'lib/c4cContent.ts',
    cpi: 'lib/cpiContent.ts',
    trm: 'lib/trmContent.ts'
};

const contents = {};
for (const [id, filePath] of Object.entries(courseFiles)) {
    const content = fs.readFileSync(path.join(process.cwd(), filePath), 'utf8');
    const match = content.match(/export const \w+ = (\{[\s\S]*?\});/);
    if (match) {
        try {
            let obj;
            // Clean up possible TS-only things like type assertions
            let cleanStr = match[1].replace(/ as \w+\[\]/g, '').replace(/ as \w+/g, '');
            eval('obj = ' + cleanStr);
            contents[id] = obj;
        } catch (e) {
            console.error(`Failed to parse ${id} content:`, e);
        }
    }
}

// Reconstruct courses similarly to courseData.ts
const courseDataFile = fs.readFileSync(path.join(process.cwd(), 'lib/courseData.ts'), 'utf8');
const coursesMatch = courseDataFile.match(/export const courses: Course\[] = (\[[\s\S]*?\]);/);
let courses = [];
if (coursesMatch) {
    try {
        let cleanCoursesStr = coursesMatch[1]
            .replace(/aribaContent/g, 'contents["ariba"]')
            .replace(/fieldglassContent/g, 'contents["fieldglass"]')
            .replace(/mmContent/g, 'contents["mm"]')
            .replace(/ficoContent/g, 'contents["fico"]')
            .replace(/sdContent/g, 'contents["sd"]')
            .replace(/c4cContent/g, 'contents["c4c-technical"]')
            .replace(/cpiContent/g, 'contents["cpi"]')
            .replace(/trmContent/g, 'contents["trm"]')
            .replace(/Section\[\]/g, '')
            .replace(/ as /g, ' '); // simple removal

        eval('courses = ' + cleanCoursesStr);
    } catch (e) {
        console.error('Failed to parse courses', e);
    }
}

// 4. Generate SQL
let output = '-- Seeding Blogs\n';
blogPosts.forEach(post => {
    const blogContent = extractedBlogs[post.id] || '';
    output += `INSERT INTO public.blog_posts (id, title, description, content, image, date, category, author) 
VALUES ('${escapeSql(post.id)}', '${escapeSql(post.title)}', '${escapeSql(post.description)}', '${escapeSql(blogContent)}', '${escapeSql(post.image || '')}', '${escapeSql(post.date)}', '${escapeSql(post.category)}', '${escapeSql(post.author)}')
ON CONFLICT (id) DO UPDATE SET 
title = EXCLUDED.title, description = EXCLUDED.description, content = EXCLUDED.content, image = EXCLUDED.image, date = EXCLUDED.date, category = EXCLUDED.category, author = EXCLUDED.author;\n`;
});

output += '\n-- Seeding Courses\n';
courses.forEach(course => {
    output += `INSERT INTO public.courses (id, title, hero_heading, hero_subheading, description, category, duration, price, hero_image, badges, features, curriculum, faqs, sections, meta_title, meta_description, schema)
VALUES ('${escapeSql(course.id)}', '${escapeSql(course.title)}', '${escapeSql(course.heroHeading || '')}', '${escapeSql(course.heroSubheading || '')}', '${escapeSql(course.description || '')}', '${escapeSql(course.category)}', '${escapeSql(course.duration || '')}', '${escapeSql(course.price || '')}', '${escapeSql(course.heroImage || '')}', ${jsonToSql(course.badges || [])}, ${jsonToSql(course.features || [])}, ${jsonToSql(course.curriculum || [])}, ${jsonToSql(course.faqs || [])}, ${jsonToSql(course.sections || [])}, '${escapeSql(course.metaTitle || '')}', '${escapeSql(course.metaDescription || '')}', '${escapeSql(course.schema || '')}')
ON CONFLICT (id) DO UPDATE SET
title = EXCLUDED.title, hero_heading = EXCLUDED.hero_heading, hero_subheading = EXCLUDED.hero_subheading, description = EXCLUDED.description, category = EXCLUDED.category, duration = EXCLUDED.duration, price = EXCLUDED.price, hero_image = EXCLUDED.hero_image, badges = EXCLUDED.badges, features = EXCLUDED.features, curriculum = EXCLUDED.curriculum, faqs = EXCLUDED.faqs, sections = EXCLUDED.sections, meta_title = EXCLUDED.meta_title, meta_description = EXCLUDED.meta_description, schema = EXCLUDED.schema;\n`;
});

fs.writeFileSync(path.join(process.cwd(), 'seed_all.sql'), output);
console.log('Generated seed_all.sql successfully');
