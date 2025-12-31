import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function cleanBlogContent() {
    console.log('Starting blog content cleanup...');

    // Get all blog posts
    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*');

    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    console.log(`Found ${posts?.length} blog posts`);

    for (const post of posts || []) {
        let content = post.content || '';
        let needsUpdate = false;

        // Remove JSX/code fragments - aggressive patterns based on user report
        const patternsToRemove = [
            // Target the specific "Share:" block and the following code block logic
            /Share:\s*[\r\n]*\);\s*\}\s*if\s*\(slug\s*={2,3}\s*['"][^'"]+['"]\)\s*\{\s*return\s*\(\s*<>/g,
            // Generic fallback for similar patterns if slug varies
            /Share:\s*[\r\n]*\);\s*\}\s*if/g,
            // The specific trailing artifacts
            /\);\s*\}\s*if\s*\(slug\s*={2,3}\s*['"][^'"]+['"]\)\s*\{\s*return\s*\(\s*<>/g,
            /<>\);\s*$/g,
            /^\);\s*$/gm,

            // Remove the Share: text and anything looking like the code block after it
            /Share:\s*$/gmi,

            // Remove empty JS object/JSX artifacts
            /\{\s*''\s*\}/g,             // Remove {' '}
            /\{\s*'\\s'\s*\}/g,          // Variations of space
            /\{\s*\}\s*/g,               // Empty brackets

            // Clean up empty tags and weird spacing
            /<p>\s*<\/p>/g,
            /<div>\s*<\/div>/g,

            // The user mentioned "empty quotes and everything"
            /''/g,
            /""/g,

            // Remove standalone < > artifacts not part of valid tags
            /(?<!<)\s*<\s*(?![a-z/])/gi,
            /(?<!")\s*>\s*(?!")/gi,
        ];

        const originalContent = content;
        let hasChange = false;

        // Apply replacements
        for (const pattern of patternsToRemove) {
            const newContent = content.replace(pattern, '');
            if (newContent !== content) {
                content = newContent;
                hasChange = true;
            }
        }

        // Special check for the "Share:" line at the end of content
        // If content ends with "Share:", remove it.
        if (content.trim().endsWith('Share:')) {
            content = content.replace(/Share:\s*$/, '');
            hasChange = true;
        }

        // Final cleanup of whitespace
        content = content
            .replace(/\n{3,}/g, '\n\n')
            .replace(/\s+$/gm, '')
            .replace(/<p>\s*<\/p>/g, '')
            .trim();

        if (hasChange || content !== originalContent) {
            needsUpdate = true;
            console.log(`\nCleaning post: ${post.title}`);
            console.log(`Removed ${originalContent.length - content.length} characters`);

            // Update the post
            const { error: updateError } = await supabase
                .from('blog_posts')
                .update({ content })
                .eq('id', post.id);

            if (updateError) {
                console.error(`Error updating post ${post.id}:`, updateError);
            } else {
                console.log(`✓ Successfully cleaned: ${post.title}`);
            }
        }
    }

    console.log('\n✓ Blog content cleanup complete!');
}

cleanBlogContent();
