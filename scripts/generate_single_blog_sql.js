const fs = require('fs');
const path = require('path');

const TARGET_ID = 'master-sap-ariba-with-industry-leading-online-training';
const COMPONENT_FILE = 'MasterSapAribaIndustryContent.tsx';
const COMPONENTS_DIR = path.join(process.cwd(), 'components', 'blog');
const OUTPUT_FILE = path.join(process.cwd(), 'scripts', 'restore_ariba_training_blog.sql');

function cleanJSX(content) {
    if (!content) return content;
    let cleaned = content.replace(/className=/g, 'class=');
    cleaned = cleaned.replace(/^\s*<>\s*/, '').replace(/\s*<\/>\s*$/, '');
    cleaned = cleaned.replace(/{\/\*[\s\S]*?\*\/}/g, '');

    // SVG and common JSX attribute cleanup
    cleaned = cleaned.replace(/strokeWidth={([^}]*)}/g, 'stroke-width="$1"');
    cleaned = cleaned.replace(/strokeWidth="([^"]*)"/g, 'stroke-width="$1"');
    cleaned = cleaned.replace(/strokeLinecap="([^"]*)"/g, 'stroke-linecap="$1"');
    cleaned = cleaned.replace(/strokeLinejoin="([^"]*)"/g, 'stroke-linejoin="$1"');
    cleaned = cleaned.replace(/fillRule="([^"]*)"/g, 'fill-rule="$1"');
    cleaned = cleaned.replace(/clipRule="([^"]*)"/g, 'clip-rule="$1"');

    cleaned = cleaned.replace(/<Link\s+([^>]*?)href=(["'])(.*?)\2([^>]*?)>(.*?)<\/Link>/gs, '<a $1href=$2$3$2$4>$5</a>');

    // Simple regex for BlogCallout
    cleaned = cleaned.replace(/<BlogCallout\s*(?:title=(["'])(.*?)\1)?\s*>([\s\S]*?)<\/BlogCallout>/g, (match, quote, title, content) => {
        let titleHtml = title ? `<div class="font-bold text-gray-900 not-italic mb-2">${title}</div>` : '';
        return `<div class="mt-6 mb-6 italic bg-gray-50 p-6 border-l-4 border-orange-500 rounded-r-xl shadow-sm">
            ${titleHtml}
            <div class="text-gray-700">${content}</div>
        </div>`;
    });

    // Simple regex for BlogCTA
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

    // Simple regex for map
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

function extractContent(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const match = fileContent.match(/return\s*\(\s*([\s\S]*)\s*\)(?:;)?\s*}/);
        if (match && match[1]) {
            return cleanJSX(match[1].trim());
        }
        return null;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e);
        return null;
    }
}

function main() {
    const fullPath = path.join(COMPONENTS_DIR, COMPONENT_FILE);
    const content = extractContent(fullPath);

    if (!content) {
        console.error('Failed to extract content');
        return;
    }

    // Escape single quotes for SQL
    const escapedContent = content.replace(/'/g, "''");

    const sql = `UPDATE public.blog_posts
SET content = '${escapedContent}'
WHERE id = '${TARGET_ID}';
`;

    fs.writeFileSync(OUTPUT_FILE, sql);
    console.log(`✅ SQL script generated at ${OUTPUT_FILE}`);
}

main();
