const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
    const { data } = await supabase.from('blog_posts').select('id, content');
    let updates = 0;
    
    for (let post of data) {
        if (!post.content) continue;
        let content = post.content;
        let modified = false;

        // Replace all remaining occurrences of /contact-us or /contact (when it's linked to something like Contact ERPVITS)
        // with the absolute URL https://www.erpvits.com/contact/
        
        // Match exact "/contact-us" in hrefs
        const regex1 = /href=["'](\/contact-us)["']/g;
        if (regex1.test(content)) {
            content = content.replace(regex1, 'href="https://www.erpvits.com/contact/"');
            modified = true;
        }

        // Just blindly replace any absolute contact-us links just in case
        const regex2 = /href=["']https?:\/\/(?:www\.)?erpvits\.com\/contact-us["']/g;
        if (regex2.test(content)) {
            content = content.replace(regex2, 'href="https://www.erpvits.com/contact/"');
            modified = true;
        }

        // What about just /contact? Let's assume some use /contact but are relative, we'll replace them with absolute to be safe
        const regex3 = /href=["'](\/contact)["']/g;
        if (regex3.test(content)) {
            content = content.replace(regex3, 'href="https://www.erpvits.com/contact/"');
            modified = true;
        }

        if (modified) {
            const { error } = await supabase.from('blog_posts').update({ content }).eq('id', post.id);
            if (error) {
                console.error('Error updating ' + post.id + ':', error);
            } else {
                console.log('Updated ' + post.id);
                updates++;
            }
        }
    }
    
    console.log('Total blogs updated: ' + updates);
}

run();
