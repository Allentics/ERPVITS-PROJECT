const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function checkColumns() {
    const { data, error } = await supabase
        .from('web_stories')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error fetching web_stories:', error);
        return;
    }

    if (data && data.length > 0) {
        console.log('Columns in web_stories:', Object.keys(data[0]));
    } else {
        console.log('No data in web_stories to check columns.');
    }
}

checkColumns();
