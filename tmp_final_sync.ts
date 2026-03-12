import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function finalSync() {
    const oldPath = 'sap-ariba-supplier-login-tutorial';
    const newPath = 'ariba-supplier-login';

    const { data: blogs, error } = await supabase
        .from('blog_posts')
        .select('id, content')
        .ilike('content', `%${oldPath}%`);

    if (error) {
        console.error(error);
        return;
    }

    if (blogs && blogs.length > 0) {
        console.log(`Found ${blogs.length} posts to update.`);
        for (const blog of blogs) {
            const updatedContent = blog.content
                .replaceAll(`https://erpvites-project.vercel.app/blogs/${oldPath}`, `https://www.erpvits.com/blogs/${newPath}`)
                .replaceAll(`/blogs/${oldPath}`, `/blogs/${newPath}`);
            
            await supabase
                .from('blog_posts')
                .update({ content: updatedContent })
                .eq('id', blog.id);
            
            console.log(`Updated ${blog.id}`);
        }
    } else {
        console.log('No more posts found with the old link.');
    }
}

finalSync();
