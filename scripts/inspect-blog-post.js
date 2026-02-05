const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchPost() {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', 'high-paying-sap-fico-jobs')
        .single();

    if (error) {
        console.error('Error fetching post:', error);
        return;
    }

    console.log('--- Content Start ---');
    console.log(data.content);
    console.log('--- Content End ---');
}

fetchPost();
