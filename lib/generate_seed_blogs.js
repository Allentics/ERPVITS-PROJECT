
const fs = require('fs');
const path = require('path');

function escapeSql(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/'/g, "''");
}

const extractedBlogs = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'extracted_blog_content.json'), 'utf8'));

// Read blogData.ts as text and extract the array
const blogDataContent = fs.readFileSync(path.join(process.cwd(), 'lib/blogData.ts'), 'utf8');
// This is a bit hacky but should work for this specific file
const blogPostsMatch = blogDataContent.match(/export const blogPosts: BlogPost\[\] = (\[[\s\S]*?\]);/);
if (!blogPostsMatch) {
    console.error('Could not find blogPosts array in blogData.ts');
    process.exit(1);
}

// Clean up the match to be valid JSON (removing types like BlogPost[] and trailing commas if any)
let blogPostsJson = blogPostsMatch[1]
    .replace(/\/\/.*$/gm, '') // remove comments
    .replace(/,\s*\]/, ']') // remove trailing comma
    .replace(/id:/g, '"id":')
    .replace(/title:/g, '"title":')
    .replace(/description:/g, '"description":')
    .replace(/image:/g, '"image":')
    .replace(/date:/g, '"date":')
    .replace(/category:/g, '"category":')
    .replace(/author:/g, '"author":');

// Try a simpler approach if the above regex is too fragile
// Since we just need to generate SQL, maybe we can just use the already extracted titles etc. if we had them.
// Actually, I'll just use the JSON I already have if I can.

let blogPosts = [];
try {
    // Attempting to evaluate the string to get the array
    // This is safe since we just read it from our own file
    const evalStr = 'blogPosts = ' + blogPostsMatch[1];
    eval(evalStr);
} catch (e) {
    console.error('Failed to parse blogPosts', e);
    process.exit(1);
}

let output = '-- Seeding Blogs\n';
blogPosts.forEach(post => {
    const blogContent = extractedBlogs[post.id] || '';
    output += `INSERT INTO public.blog_posts (id, title, description, content, image, date, category, author) 
VALUES ('${escapeSql(post.id)}', '${escapeSql(post.title)}', '${escapeSql(post.description)}', '${escapeSql(blogContent)}', '${escapeSql(post.image || '')}', '${escapeSql(post.date)}', '${escapeSql(post.category)}', '${escapeSql(post.author)}')
ON CONFLICT (id) DO UPDATE SET 
title = EXCLUDED.title, description = EXCLUDED.description, content = EXCLUDED.content, image = EXCLUDED.image, date = EXCLUDED.date, category = EXCLUDED.category, author = EXCLUDED.author;\n`;
});

// For courses, I'll do something similar or just skip for now if blogs are the priority
// But let's try to get courses too if possible.
const courseDataContent = fs.readFileSync(path.join(process.cwd(), 'lib/courseData.ts'), 'utf8');
// Course data is much more complex with imports etc.
// For now, let's just focus on blogs as requested.

fs.writeFileSync(path.join(process.cwd(), 'seed_blogs.sql'), output);
console.log('Generated seed_blogs.sql successfully');
