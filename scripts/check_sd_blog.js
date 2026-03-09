const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    const { data: blog, error } = await supabase
        .from('blog_posts')
        .select('id, content')
        .eq('id', 'sap-sd-listing-exclusion')
        .single();

    if (error) {
        console.error("Error fetching blog:", error);
        return;
    }

    console.log("Current content preview:");
    console.log(blog.content.substring(0, 1000));
}

main();
