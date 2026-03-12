import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, serviceRoleKey);

async function globalFix() {
    const { data: blogs, error } = await supabase
        .from('blog_posts')
        .select('id, content');

    if (error) {
        console.error(error);
        return;
    }

    const oldPath = 'sap-ariba-supplier-login-tutorial';
    const newFullUrl = 'https://www.erpvits.com/blogs/ariba-supplier-login';
    const newRelativePath = '/blogs/ariba-supplier-login';

    console.log(`Scanning ${blogs.length} blogs...`);

    for (const blog of blogs) {
        if (!blog.content) continue;

        let content = blog.content;
        let modified = false;

        // Replace any absolute URL matching the old path
        const absoluteRegex = new RegExp(`https?://[^\\s"']+${oldPath}`, 'g');
        if (absoluteRegex.test(content)) {
            content = content.replace(absoluteRegex, newFullUrl);
            modified = true;
        }

        // Replace any relative URL matching the old path
        const relativeRegex = new RegExp(`/blogs/${oldPath}`, 'g');
        if (relativeRegex.test(content)) {
            content = content.replace(relativeRegex, newRelativePath);
            modified = true;
        }

        if (modified) {
            console.log(`Updating blog: ${blog.id}`);
            const { error: updateError } = await supabase
                .from('blog_posts')
                .update({ content: content })
                .eq('id', blog.id);
            
            if (updateError) {
                console.error(`Error updating ${blog.id}:`, updateError);
            } else {
                console.log(`Successfully updated ${blog.id}`);
            }
        }
    }
    console.log('Global fix complete.');
}

globalFix();
