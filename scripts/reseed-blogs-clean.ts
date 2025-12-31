import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

function cleanJsxToHtml(jsxContent: string): string {
    if (!jsxContent) return '';

    let html = jsxContent;

    // Replace className= with class=
    html = html.replace(/className=/g, 'class=');

    // Remove JSX expressions like {' '} or {`...`}
    html = html.replace(/\{\s*'[^']*'\s*\}/g, '');
    html = html.replace(/\{\s*`[^`]*`\s*\}/g, '');
    html = html.replace(/\{\s*\}/g, '');

    // Remove React-specific attributes
    html = html.replace(/\s+onClick=\{[^}]*\}/g, '');
    html = html.replace(/\s+onChange=\{[^}]*\}/g, '');
    html = html.replace(/\s+onSubmit=\{[^}]*\}/g, '');

    // Remove JSX fragments
    html = html.replace(/<>/g, '');
    html = html.replace(/<\/>/g, '');
    html = html.replace(/^\s*\);\s*$/gm, '');
    html = html.replace(/^\s*\}\s*$/gm, '');
    html = html.replace(/^\s*return\s*\(\s*$/gm, '');
    html = html.replace(/if\s*\(slug\s*===?\s*'[^']*'\)\s*\{/g, '');

    // Remove Link component and replace with regular anchor
    html = html.replace(/<Link\s+href=/g, '<a href=');
    html = html.replace(/<\/Link>/g, '</a>');

    // Remove Share section and social icons (SVGs)
    // Find "Share:" and remove everything from there to the end if it's followed by social links
    const shareIndex = html.indexOf('Share:');
    if (shareIndex !== -1) {
        // Check if there are SVGs after Share:
        const afterShare = html.substring(shareIndex);
        if (afterShare.includes('<svg') || afterShare.includes('className=')) {
            html = html.substring(0, shareIndex);
        }
    }

    // Remove SVG elements entirely
    html = html.replace(/<svg[^>]*>[\s\S]*?<\/svg>/g, '');

    // Remove ERPVITS footer section (About ERPVITS...)
    const aboutIndex = html.lastIndexOf('About ERPVITS:');
    if (aboutIndex !== -1) {
        html = html.substring(0, aboutIndex);
    }

    // Clean up extra whitespace
    html = html.replace(/\n{3,}/g, '\n\n');
    html = html.replace(/\r\n/g, '\n');
    html = html.trim();

    return html;
}

async function reseedBlogs() {
    console.log('Starting blog reseed with cleaned content...\n');

    // Read the extracted blog content
    const extractedPath = path.join(process.cwd(), 'extracted_blog_content.json');
    const extractedContent = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));

    // Read blogData.ts for metadata
    const blogDataPath = path.join(process.cwd(), 'lib', 'blogData.ts');
    const blogDataContent = fs.readFileSync(blogDataPath, 'utf8');

    // Extract blog post IDs from blogData.ts
    const idMatches = blogDataContent.match(/id:\s*"([^"]+)"/g);
    const blogIds = idMatches ? idMatches.map(m => m.replace(/id:\s*"/, '').replace(/"/, '')) : [];

    console.log(`Found ${blogIds.length} blog IDs in blogData.ts`);
    console.log(`Found ${Object.keys(extractedContent).length} entries in extracted_blog_content.json\n`);

    for (const id of blogIds) {
        let content = extractedContent[id] || '';
        const originalLength = content.length;

        // Clean the JSX to HTML
        content = cleanJsxToHtml(content);

        console.log(`Processing: ${id}`);
        console.log(`  Original: ${originalLength} chars -> Cleaned: ${content.length} chars`);

        // Update the database
        const { error } = await supabase
            .from('blog_posts')
            .update({ content })
            .eq('id', id);

        if (error) {
            console.log(`  ❌ Error: ${error.message}`);
        } else {
            console.log(`  ✓ Updated successfully\n`);
        }
    }

    console.log('\n✓ Blog reseed complete!');
}

reseedBlogs();
