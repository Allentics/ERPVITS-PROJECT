const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BLOG_DATA_PATH = path.join(__dirname, '../lib/blogData.ts');
const OUTPUT_SQL_PATH = path.join(__dirname, 'restore_all_blogs.sql');
const BASE_URL = 'http://localhost:3000/blog/';

// Function to extract slugs and metadata from blogData.ts text
function getBlogPosts() {
    const fileContent = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');
    const posts = [];

    // Regex to capture objects in the blogPosts array
    // This assumes specific formatting in blogData.ts
    // We look for { id: "...", ... } blocks
    const regex = /{\s*id:\s*["']([^"']+)["']\s*,\s*title:\s*["']([^"']+)["']\s*,\s*description:\s*["']([^"']+)["']\s*,\s*image:\s*["']([^"']+)["']\s*,\s*date:\s*["']([^"']+)["']\s*,\s*category:\s*["']([^"']+)["']\s*,\s*author:\s*["']([^"']+)["']\s*}/g;

    let match;
    while ((match = regex.exec(fileContent)) !== null) {
        posts.push({
            id: match[1],
            title: match[2],
            description: match[3],
            image: match[4],
            date: match[5],
            category: match[6],
            author: match[7]
        });
    }
    return posts;
}

// Function to fetch HTML and extract content
async function scrapeContent(slug) {
    try {
        const url = `${BASE_URL}${slug}`;
        console.log(`Fetching ${url}...`);
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Failed to fetch ${url}: ${response.statusText}`);
            return null;
        }
        const html = await response.text();
        const $ = cheerio.load(html);

        // Selector for the content. Based on SapBtpCockpitContent.tsx: <div className="blog-content ...">
        // In the rendered page it should be <div class="blog-content ...">
        let content = $('.blog-content').html();

        if (!content) {
            console.warn(`No .blog-content found for ${slug}`);
            // Fallback: try finding the article or something else?
            // If the legacy component renders something else, we might miss it.
            // But from my file views, they all use .blog-content or prose.
            content = $('.prose').html();
        }

        if (content) {
            return content.trim();
        }
        return null;
    } catch (e) {
        console.error(`Error scraping ${slug}:`, e);
        return null;
    }
}

// Main function
async function main() {
    const posts = getBlogPosts();
    console.log(`Found ${posts.length} blog posts in metadata.`);

    let sqlContent = `-- SQL Script to restore content for all blog posts (Scraped from Localhost)\n\n`;

    for (const post of posts) {
        const content = await scrapeContent(post.id);

        if (content) {
            console.log(`Successfully scraped content for ${post.id} (${content.length} chars)`);

            // Escape single quotes for SQL
            const safeTitle = post.title.replace(/'/g, "''");
            const safeDesc = post.description.replace(/'/g, "''");
            const safeContent = content.replace(/'/g, "''");
            const safeAuthor = post.author.replace(/'/g, "''");

            sqlContent += `-- ${post.title}\n`;
            sqlContent += `INSERT INTO public.blog_posts (id, title, description, content, image, date, category, author) \n`;
            sqlContent += `VALUES ('${post.id}', '${safeTitle}', '${safeDesc}', '${safeContent}', '${post.image}', '${post.date}', '${post.category}', '${safeAuthor}') \n`;
            sqlContent += `ON CONFLICT (id) DO UPDATE SET \n`;
            sqlContent += `    title = EXCLUDED.title,\n`;
            sqlContent += `    description = EXCLUDED.description,\n`;
            sqlContent += `    content = EXCLUDED.content,\n`;
            sqlContent += `    image = EXCLUDED.image,\n`;
            sqlContent += `    date = EXCLUDED.date,\n`;
            sqlContent += `    category = EXCLUDED.category,\n`;
            sqlContent += `    author = EXCLUDED.author;\n\n`;
        } else {
            console.warn(`Skipping ${post.id} due to missing content.`);
        }
    }

    fs.writeFileSync(OUTPUT_SQL_PATH, sqlContent);
    console.log(`Successfully generated ${OUTPUT_SQL_PATH}`);
}

main().catch(err => console.error(err));
