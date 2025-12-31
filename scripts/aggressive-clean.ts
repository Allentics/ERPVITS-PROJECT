import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function aggressiveClean() {
    console.log('Starting AGGRESSIVE cleanup...\n');

    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*');

    if (error) {
        console.error('Error:', error);
        return;
    }

    for (const post of posts || []) {
        let content = post.content || '';
        const originalLength = content.length;

        // AGGRESSIVE: Remove everything from first occurrence of these JSX-specific markers
        const jxsMarkers = [
            'className=',
            'strokeLinecap=',
            'strokeLinejoin=',
            'strokeWidth=',
            'viewBox=',
            'fillRule=',
            'clipRule='
        ];

        for (const marker of jxsMarkers) {
            const idx = content.indexOf(marker);
            if (idx !== -1) {
                // Find start of tag
                let tagStart = content.lastIndexOf('<', idx);
                if (tagStart === -1) tagStart = idx;

                // Cut everything from this point
                content = content.substring(0, tagStart).trim();
                console.log(`Found "${marker}" in "${post.title}", cutting at position ${tagStart}`);
                break;
            }
        }

        // Remove trailing Share:
        content = content.replace(/Share:\s*$/i, '').trim();

        // Remove trailing ); and other artifacts
        content = content
            .replace(/\);\s*$/g, '')
            .replace(/<\/>\s*$/g, '')
            .replace(/<>\s*$/g, '')
            .replace(/<p>\s*<\/p>/g, '')
            .replace(/<div>\s*<\/div>/g, '')
            .trim();

        if (content.length !== originalLength) {
            console.log(`Updating "${post.title}": ${originalLength} -> ${content.length} chars\n`);

            const { error: updateError } = await supabase
                .from('blog_posts')
                .update({ content: content })
                .eq('id', post.id);

            if (updateError) {
                console.error(`Update error:`, updateError);
            } else {
                console.log(`✓ Updated successfully`);
            }
        }
    }

    console.log('\nDone!');
}

aggressiveClean();
