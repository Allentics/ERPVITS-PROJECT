import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseRoleKey);

async function main() {
    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('id, content');

    if (error || !posts) {
        console.error("Error fetching:", error);
        return;
    }

    for (const post of posts) {
        if (!post.content) continue;

        // Let's modify occurrences of buttonLink="#" for the Whatsapp CTA just in case it's hardcoded in the content HTML in the DB.
        // Or if it's there as an HTML string
        let modifiedContent = post.content;

        if (modifiedContent.includes('Never Miss an SAP Update') || modifiedContent.includes('Join WhatsApp Channel')) {
            console.log(`Found WhatsApp CTA in blog: ${post.id}`);

            // For HTML content in DB (if CTA is rendered as HTML string)
            modifiedContent = modifiedContent.replace(
                /<a href="#"[^>]*>[\s\S]*?Join WhatsApp Channel[\s\S]*?<\/a>/ig,
                (match: string) => match.replace('href="#"', 'href="https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X" target="_blank" rel="noopener noreferrer"')
            );

            // For JSX components in DB content if any
            modifiedContent = modifiedContent.replace(
                /buttonLink="#"/g,
                'buttonLink="https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X"'
            );

            if (modifiedContent !== post.content) {
                console.log(`Updating ${post.id}`);
                await supabase
                    .from('blog_posts')
                    .update({ content: modifiedContent })
                    .eq('id', post.id);
            }
        }
    }
    console.log("Done checking and updating DB.");
}

main();
