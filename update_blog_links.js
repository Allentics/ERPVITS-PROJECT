const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
    const { data } = await supabase.from('blog_posts').select('id, content');
    let updates = 0;
    
    for (let post of data) {
        let content = post.content;
        let modified = false;

        // The exact current structure for whatsapp: 
        // <a href="/whatsapp" class="text-cyan-600 hover:underline font-medium">WhatsApp Channel</a>
        // Or similar with another color class.
        
        // Use a generic regex for the WhatsApp link:
        const whatsappRegex = /<a href="\/whatsapp(?:[^"]*)?"[^>]*>WhatsApp Channel<\/a>/g;
        if (whatsappRegex.test(content)) {
            content = content.replace(whatsappRegex, '<a href="https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X" class="text-orange-500 hover:text-orange-600 font-semibold underline">WhatsApp Channel</a>');
            modified = true;
        }

        // For the newsletter link, remove the hyperlink:
        const newsletterRegex = /<a href="\/newsletter"[^>]*>newsletter<\/a>/gi;
        if (newsletterRegex.test(content)) {
            content = content.replace(newsletterRegex, 'newsletter');
            modified = true;
        }

        // We should also replace the text-cyan-600 for LinkedIn to match the orange theme
        const linkedinRegex = /<a href="https:\/\/linkedin.com\/company\/erpvits" class="text-cyan-600 hover:underline font-medium">LinkedIn<\/a>/gi;
        if (linkedinRegex.test(content)) {
            content = content.replace(linkedinRegex, '<a href="https://linkedin.com/company/erpvits" class="text-orange-500 hover:text-orange-600 font-semibold underline">LinkedIn</a>');
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
