const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

// Debug Env Vars
console.log('Available Env Vars:', Object.keys(process.env).filter(k => k.includes('SUPABASE')));

const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const usingServiceKey = !!serviceRoleKey;
console.log(`Using Service Role Key: ${usingServiceKey}`);

const supabaseKey = serviceRoleKey || anonKey;
const supabase = createClient(supabaseUrl, supabaseKey);

const TARGET_ID = 'top-7-sap-training-institutes';
const COMPONENT_FILE = 'Top7SapTrainingInstitutesContent.tsx';

const blogDataPath = path.join(process.cwd(), 'lib', 'blogData.ts');
const componentsDir = path.join(process.cwd(), 'components', 'blog');

function parseBlogData(content) {
    const posts = [];
    const lines = content.split('\n');
    let currentPost = null;

    for (let line of lines) {
        line = line.trim();
        if (line === '{') {
            currentPost = {};
        } else if (line === '},' || (line === '}' && currentPost)) {
            if (currentPost && currentPost.id) {
                posts.push(currentPost);
            }
            currentPost = null;
        } else if (currentPost) {
            const match = line.match(/^(\w+):\s*["'](.+)["'](,?)$/);
            if (match) {
                currentPost[match[1]] = match[2];
            }
        }
    }
    return posts;
}

function cleanJSX(content) {
    if (!content) return content;
    let cleaned = content.replace(/className=/g, 'class=');
    cleaned = cleaned.replace(/^\s*<>\s*/, '').replace(/\s*<\/>\s*$/, '');
    cleaned = cleaned.replace(/{\/\*[\s\S]*?\*\/}/g, '');
    cleaned = cleaned.replace(/<Link\s+([^>]*?)href=(["'])(.*?)\2([^>]*?)>(.*?)<\/Link>/gs, '<a $1href=$2$3$2$4>$5</a>');

    cleaned = cleaned.replace(/<BlogCallout\s*(?:title=(["'])(.*?)\1)?\s*>([\s\S]*?)<\/BlogCallout>/g, (match, quote, title, content) => {
        let titleHtml = title ? `<div class="font-bold text-gray-900 not-italic mb-2">${title}</div>` : '';
        return `<div class="mt-6 mb-6 italic bg-gray-50 p-6 border-l-4 border-orange-500 rounded-r-xl shadow-sm">
            ${titleHtml}
            <div class="text-gray-700">${content}</div>
        </div>`;
    });

    cleaned = cleaned.replace(/<BlogCTA\s+([\s\S]*?)\/>/g, (match, propsString) => {
        const getProp = (name) => {
            const propMatch = new RegExp(`${name}=(["'])(.*?)\\1`).exec(propsString);
            return propMatch ? propMatch[2] : null;
        };
        const title = getProp('title') || "Ready to Transform Your Career?";
        const description = getProp('description') || "Join ERPVITS today and discover why our graduates consistently secure positions at leading organizations worldwide.";
        const buttonText = getProp('buttonText') || "Join Today";
        const buttonLink = getProp('buttonLink') || "#enroll";

        return `<div class="mt-12 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white text-center shadow-xl">
            <h3 class="text-2xl font-bold mb-4 text-white !mt-0">${title}</h3>
            <p class="mb-6 opacity-90 text-white">${description}</p>
            <a href="${buttonLink}" class="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors no-underline">
                ${buttonText}
            </a>
        </div>`;
    });

    cleaned = cleaned.replace(/{\s*\[([\s\S]*?)\]\.map\(\(faq,\s*index\)\s*=>\s*\([\s\S]*?\)\)\s*}/g, (match, arrayBody) => {
        let output = '';
        const itemRegex = /{\s*q:\s*(["'])(.*?)\1,\s*a:\s*(["'])(.*?)\3\s*}/g;
        let itemMatch;
        while ((itemMatch = itemRegex.exec(arrayBody)) !== null) {
            const q = itemMatch[2];
            const a = itemMatch[4];
            output += `<div class="border-b border-slate-200 pb-4">
                <h4 class="font-bold text-slate-900">${q}</h4>
                <p class="text-slate-600 text-sm mt-1 mb-0">${a}</p>
            </div>\n`;
        }
        return output;
    });

    return cleaned;
}

function extractContentFromComponent(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const match = fileContent.match(/return\s*\(\s*([\s\S]*)\s*\)(?:;)?\s*}/);
        if (match && match[1]) {
            let content = match[1].trim();
            return cleanJSX(content);
        }
        return null;
    } catch (e) {
        console.error(`Error reading component ${filePath}:`, e);
        return null;
    }
}

async function main() {
    console.log(`Targeting blog ID: ${TARGET_ID}`);

    // 1. Get Metadata
    const blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');
    const posts = parseBlogData(blogDataContent);
    const post = posts.find(p => p.id === TARGET_ID);

    if (!post) {
        console.error(`❌ Metadata for ${TARGET_ID} not found in lib/blogData.ts`);
        return;
    }

    // 2. Get Content
    const fullPath = path.join(componentsDir, COMPONENT_FILE);
    if (!fs.existsSync(fullPath)) {
        console.error(`❌ Component file not found: ${fullPath}`);
        return;
    }

    let content = extractContentFromComponent(fullPath);
    if (!content) {
        console.error(`❌ Could not extract content from ${COMPONENT_FILE}`);
        return;
    }

    console.log(`Extracted content length: ${content.length} chars`);

    // 3. Check if exists
    const { data: existing, error: fetchError } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('id', TARGET_ID)
        .single();

    const exists = !!existing;
    console.log(`Record exists: ${exists}`);

    // Prepare payload
    const payload = {
        title: post.title,
        description: post.description,
        image: post.image || null,
        date: post.date,
        category: post.category,
        author: post.author,
        content: content
    };

    let error;
    if (exists) {
        console.log(`Updating ${TARGET_ID}...`);
        const { data, error: updateError } = await supabase
            .from('blog_posts')
            .update(payload)
            .eq('id', TARGET_ID)
            .select();

        error = updateError;
        if (data) {
            console.log(`Updated rows: ${data.length}`);
            if (data.length > 0) {
                console.log('Update returned data sample:', data[0].title);
            }
        }
    } else {
        console.log(`Inserting ${TARGET_ID}...`);
        const res = await supabase.from('blog_posts').insert({
            id: TARGET_ID,
            ...payload
        });
        error = res.error;
    }

    if (error) {
        console.error(`❌ Failed: ${error.message}`);
        console.error(`Details: ${JSON.stringify(error)}`);
    } else {
        console.log(`✅ Successfully restored ${TARGET_ID}`);
    }
}

main();
