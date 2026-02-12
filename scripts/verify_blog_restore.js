const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
    console.log('Verifying blog content...');
    // Check a few key blogs
    const idsToCheck = [
        'sap-btp-cockpit-guide',
        'sap-consultant-salary-guide-2026',
        'sap-ariba-sourcing-configuration'
    ];

    for (const id of idsToCheck) {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('id, title, content')
            .eq('id', id)
            .single();

        if (error) {
            console.error(`❌ Error fetching ${id}: ${error.message}`);
        } else if (!data) {
            console.error(`❌ Blog ${id} not found in DB`);
        } else {
            const contentLength = data.content ? data.content.length : 0;
            console.log(`✅ ${id}: Found. Content length: ${contentLength}`);
            if (contentLength < 100) {
                console.warn(`⚠️ Warning: Content length for ${id} is suspiciously low.`);
            }
        }
    }
}

verify();
