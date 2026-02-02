
import { blogPosts } from './blogData';
import { courses } from './courseData';
import fs from 'fs';
import path from 'path';

console.log('Imports successful');

let extractedBlogs: Record<string, string> = {};
try {
    const jsonPath = path.join(process.cwd(), 'extracted_blog_content.json');
    console.log('Reading extracted content from:', jsonPath);
    if (fs.existsSync(jsonPath)) {
        extractedBlogs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        console.log('Found content for', Object.keys(extractedBlogs).length, 'blogs');
    } else {
        console.warn('extracted_blog_content.json not found');
    }
} catch (e) {
    console.error('Failed to read extracted_blog_content.json', e);
}

function escapeSql(str: string) {
    if (typeof str !== 'string') return str;
    return str.replace(/'/g, "''");
}

function jsonToSql(obj: any) {
    return `'${escapeSql(JSON.stringify(obj))}'::jsonb`;
}

let output = '';
output += '-- Seeding Blogs\n';
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
VALUES ('${escapeSql(course.id)}', '${escapeSql(course.title)}', '${typeof course.heroHeading === 'string' ? escapeSql(course.heroHeading) : ''}', '${escapeSql(course.heroSubheading || '')}', '${escapeSql(course.description || '')}', '${escapeSql(course.category || '')}', '${escapeSql(course.duration || '')}', '${escapeSql(course.price || '')}', '${escapeSql(course.heroImage || '')}', ${jsonToSql(course.badges || [])}, ${jsonToSql(course.features || [])}, ${jsonToSql(course.curriculum || [])}, ${jsonToSql(course.faqs || [])}, ${jsonToSql(course.sections || [])}, '${escapeSql(course.metaTitle || '')}', '${escapeSql(course.metaDescription || '')}', '${escapeSql(course.schema || '')}')
ON CONFLICT (id) DO UPDATE SET
title = EXCLUDED.title, hero_heading = EXCLUDED.hero_heading, hero_subheading = EXCLUDED.hero_subheading, description = EXCLUDED.description, category = EXCLUDED.category, duration = EXCLUDED.duration, price = EXCLUDED.price, hero_image = EXCLUDED.hero_image, badges = EXCLUDED.badges, features = EXCLUDED.features, curriculum = EXCLUDED.curriculum, faqs = EXCLUDED.faqs, sections = EXCLUDED.sections, meta_title = EXCLUDED.meta_title, meta_description = EXCLUDED.meta_description, schema = EXCLUDED.schema;\n`;
});

fs.writeFileSync(path.join(process.cwd(), 'seed_data.sql'), output);
console.log('Generated seed_data.sql successfully');

