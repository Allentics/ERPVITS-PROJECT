import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function deepCleanBlogContent() {
    console.log('Starting DEEP blog content cleanup...');

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

        // AGGRESSIVE: Find and remove everything after specific markers
        const cutOffMarkers = [
            'Share:',
            '{\'',
            '{ \'',
            '</>',
            ');',
            'className=',
            '<svg',
            'viewBox=',
            '<a href=',
            '</div>',
            '</>'
        ];

        // Find the earliest occurrence of any cut-off marker that appears to be code
        let earliestCutoff = content.length;

        for (const marker of cutOffMarkers) {
            // Look for the marker, but only if it seems like code context
            const idx = content.indexOf(marker);
            if (idx !== -1) {
                // Check if this looks like code (has JSX/HTML patterns nearby)
                const surrounding = content.substring(Math.max(0, idx - 50), Math.min(content.length, idx + 100));
                const looksLikeCode =
                    surrounding.includes('className=') ||
                    surrounding.includes('<svg') ||
                    surrounding.includes('</div>') ||
                    surrounding.includes(');') ||
                    surrounding.includes('</>') ||
                    surrounding.includes('href=') ||
                    surrounding.includes('viewBox');

                if (looksLikeCode && idx < earliestCutoff) {
                    earliestCutoff = idx;
                }
            }
        }

        // If we found a cutoff point, truncate there
        if (earliestCutoff < content.length) {
            content = content.substring(0, earliestCutoff).trim();
        }

        // Also remove any remaining artifacts
        content = content
            .replace(/\{'\s*'\}/g, '')
            .replace(/\{\s*\}/g, '')
            .replace(/<p>\s*<\/p>/g, '')
            .replace(/<div>\s*<\/div>/g, '')
            .replace(/Share:\s*$/gim, '')
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
        }
    }

    console.log('\n✓ Deep blog content cleanup complete!');
}

deepCleanBlogContent();
