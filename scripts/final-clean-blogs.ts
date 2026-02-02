import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function finalCleanBlogContent() {
    console.log('Starting FINAL blog content cleanup...');

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
        const originalContent = content;

        // Find "className=" which is a clear indicator of JSX code (not valid HTML)
        // Cut off everything from the first occurrence of className
        const classNameIdx = content.indexOf('className=');
        if (classNameIdx !== -1) {
            // Go back to find the start of the tag or line
            let cutPoint = classNameIdx;
            // Look for < before this point
            for (let i = classNameIdx - 1; i >= 0; i--) {
                if (content[i] === '<') {
                    cutPoint = i;
                    break;
                }
                if (content[i] === '\n') {
                    cutPoint = i;
                    break;
                }
            }
            content = content.substring(0, cutPoint).trim();
        }

        // Also remove trailing Share: if present
        content = content.replace(/Share:\s*$/gim, '').trim();

        // Remove trailing SVG path data if any
        // SVG paths have lots of numbers and letters like "M12.05 0C5.495"
        const svgPathPattern = /[0-9.-]+[a-zA-Z][0-9.-]+\s*$/;
        while (svgPathPattern.test(content)) {
            content = content.replace(svgPathPattern, '').trim();
        }

        // Clean up any remaining artifacts
        content = content
            .replace(/<p>\s*<\/p>/g, '')
            .replace(/<div>\s*<\/div>/g, '')
            .replace(/\{'\s*'\}/g, '')
            .replace(/\{\s*\}/g, '')
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        if (content !== originalContent) {
            console.log(`\nCleaning post: ${post.title}`);
            console.log(`Removed ${originalContent.length - content.length} characters`);

            const { error: updateError } = await supabase
                .from('blog_posts')
                .update({ content })
                .eq('id', post.id);

            if (updateError) {
                console.error(`Error updating post ${post.id}:`, updateError);
            } else {
                console.log(`✓ Successfully cleaned: ${post.title}`);
            }
        } else {
            console.log(`Post "${post.title}" - no changes needed`);
        }
    }

    console.log('\n✓ Final blog content cleanup complete!');
}

finalCleanBlogContent();
