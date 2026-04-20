
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
const supabaseUrl = envConfig.NEXT_PUBLIC_SUPABASE_URL.replace(/['"\s]/g, '').trim();
const supabaseAnonKey = envConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY.replace(/['"\s]/g, '').trim();

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
    console.log('Checking specific row...');
    const { data, error, status } = await supabase
        .from('site_content')
        .select('content')
        .eq('page_path', '/')
        .eq('section_key', 'success_stories')
        .single();

    if (error) {
        console.error('Error:', error);
        console.error('Status:', status);
    } else {
        console.log('Success! Data:', data);
    }
}

check();
