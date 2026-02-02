
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkColumns() {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error fetching course:', error);
    } else {
        if (data && data.length > 0) {
            console.log('Column names:', Object.keys(data[0]));
        } else {
            console.log('No data found, cannot infer columns.');
        }
    }
}

checkColumns();
