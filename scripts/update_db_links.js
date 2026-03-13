const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function main() {
    const { data: blogPosts, error } = await supabase.from('blog_posts').select('id, content');
    if (error) {
        console.error("Error fetching", error);
        return;
    }

    let updatedCount = 0;
    for (const post of blogPosts) {
        if (!post.content) continue;

        let newContent = post.content;
        let changed = false;

        const mappings = {
            '/sap-ewm': '/sap-ewm-training/',
            '/sap-mdg': '/sap-mdg-training/',
            '/sap-ppds': '/sap-ppds-training/',
            '/sap-tm': '/sap-tm-training/',
            '/sap-ibp': '/sap-ibp-training/',
            '/sap-c4c-functional': '/sap-c4c-functional-training/',
            '/sap-abap-on-hana': '/sap-abap-on-hana-training/',
            '/about': '/about-us/',
            '/contact': '/contact-us/',
            '/courses/sap-ewm': '/sap-ewm-training/',
            '/courses/sap-mdg': '/sap-mdg-training/',
            '/courses/sap-ppds': '/sap-ppds-training/',
            '/courses/sap-tm': '/sap-tm-training/',
            '/courses/sap-ibp': '/sap-ibp-training/',
            '/courses/sap-c4c-functional': '/sap-c4c-functional-training/',
            '/courses/sap-abap-on-hana': '/sap-abap-on-hana-training/',
        };

        for (const [oldUrl, newUrl] of Object.entries(mappings)) {
            // handle string variations
            const variations = [
                `href="${oldUrl}"`,
                `href="${oldUrl}/"`,
                `href='${oldUrl}'`,
                `href='${oldUrl}/'`,
                `href="https://www.erpvits.com${oldUrl}"`,
                `href="https://www.erpvits.com${oldUrl}/"`,
                `href='https://www.erpvits.com${oldUrl}'`,
                `href='https://www.erpvits.com${oldUrl}/'`,
                `href="https://erpvits.com${oldUrl}"`,
                `href="https://erpvits.com${oldUrl}/"`,
                `href='https://erpvits.com${oldUrl}'`,
                `href='https://erpvits.com${oldUrl}/'`,
            ];
            
            for (const v of variations) {
                if (newContent.includes(v)) {
                   let replacement = v.includes("'") ? `href='${newUrl}'` : `href="${newUrl}"`;
                   if (v.includes('https://www.erpvits.com')) {
                       replacement = v.includes("'") ? `href='https://www.erpvits.com${newUrl}'` : `href="https://www.erpvits.com${newUrl}"`;
                   } else if (v.includes('https://erpvits.com')) {
                       replacement = v.includes("'") ? `href='https://erpvits.com${newUrl}'` : `href="https://erpvits.com${newUrl}"`;
                   }
                   
                   newContent = newContent.split(v).join(replacement);
                   changed = true;
                }
            }
        }


        if (changed && newContent !== post.content) {
            console.log(`Updating ${post.id}`);
            const { error: updateError } = await supabase.from('blog_posts').update({ content: newContent }).eq('id', post.id);
            if (updateError) {
                console.error(`Error updating ${post.id}`, updateError);
            } else {
                updatedCount++;
            }
        }
    }
    console.log(`Updated ${updatedCount} posts`);
}

main();
