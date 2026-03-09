const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    const { data: blog, error } = await supabase
        .from('blog_posts')
        .select('id, content')
        .eq('id', 'listing-and-exclusion-in-sap-sd')
        .single();

    if (error) {
        console.error("Error fetching blog:", error);
        return;
    }

    let content = blog.content;
    const regex = />SAP SD</g;
    const matches = content.match(regex);
    console.log("Found matches with link:", matches ? matches.length : 0);

    const rawRegex = /(?<!>)(SAP SD)(?!<)/g;
    const regexMatches = content.match(rawRegex);
    console.log("Unlinked matches:", regexMatches ? regexMatches.length : 0);
}

main();
