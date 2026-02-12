const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('content, title')
        .eq('id', 'top-7-sap-training-institutes')
        .single();

    if (error) {
        console.error('Error:', error);
        return;
    }

    if (!data) {
        console.log('No data found for this ID.');
        return;
    }

    console.log('Title:', data.title);
    console.log('Content Start:', data.content.substring(0, 500));

    // Check if the specific wrong string exists
    const wrongString = "ERPVITS focuses on high-demand SAP technologies";
    if (data.content.includes(wrongString)) {
        console.log('❌ ALERT: Content contains the WRONG string!');
    } else {
        console.log('✅ Content does NOT contain the wrong string.');
    }
}

main();
