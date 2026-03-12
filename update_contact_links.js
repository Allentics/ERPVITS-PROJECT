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

        // Common patterns for the Contact ERPVITS button links:
        // Could be <a href="/contact-us"...>Contact ERPVITS</a>
        // Or simply checking for href="/contact-us"
        // Let's replace any relative or wrong URL associated with Contact ERPVITS.

        const regexes = [
            /(<a[^>]*href=["'])\/contact-us(["'][^>]*>Contact ERPVITS<\/a>)/g,
            /(<a[^>]*href=["'])\/contact(["'][^>]*>Contact ERPVITS<\/a>)/g,
            /(<a[^>]*href=["'])https?:\/\/(?:www\.)?erpvits\.com\/contact-us(["'][^>]*>Contact ERPVITS<\/a>)/g,
        ];

        for (let regex of regexes) {
            if (regex.test(content)) {
                content = content.replace(regex, '$1https://www.erpvits.com/contact/$2');
                modified = true;
            }
        }
        
        // Let's also replace any other occurrences of /contact-us with the correct absolute or matching relative URL,
        // but since the user specifically asked for "replace Contact ERPVITS button url with this",
        // the above regexes match the exact text. However, what if the button text is "Contact ERPVITS Today"?
        
        const generalRegex = /(<a[^>]*href=["'])(?:\/contact-us|\/contact)(["'][^>]*>[^<]*Contact ERPVITS[^<]*<\/a>)/ig;
        if (generalRegex.test(content)) {
            content = content.replace(generalRegex, '$1https://www.erpvits.com/contact/$2');
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
