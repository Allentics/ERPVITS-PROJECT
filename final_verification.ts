import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.SUPABASE_SERVICE_ROLE_KEY || '');

async function finalVerification() {
    const blogId = 'sap-ariba-interview-questions-answers-2026';
    const { data: blog, error } = await s.from('blog_posts').select('*').eq('id', blogId).single();
    
    if (error || !blog) {
        console.error('Blog not found');
        return;
    }

    const correctUrl = 'https://www.erpvits.com/blogs/ariba-supplier-login';
    
    let content = blog.content;
    const oldLink = 'sap-ariba-supplier-login-tutorial';
    
    if (content.includes(oldLink)) {
        console.log('Old link found. Correcting...');
        content = content.replaceAll(oldLink, 'ariba-supplier-login');
        content = content.replaceAll('https://erpvites-project.vercel.app', 'https://www.erpvits.com');
    }

    // Ensure the specific "supplier registration" link is correct
    // We look for any link containing that text and ensure it points to the correct URL
    const regex = /<a[^>]*>(.*?)supplier registration(.*?)<\/a>/gi;
    content = content.replace(regex, `<a href="${correctUrl}" style="color: #ea580c !important; font-weight: bold;">supplier registration</a>`);

    const { error: updateError } = await s
        .from('blog_posts')
        .update({ content: content })
        .eq('id', blogId);
        
    if (updateError) {
        console.error('Final update failed:', updateError);
    } else {
        console.log('Final update SUCCESSFUL.');
    }
}
finalVerification();
