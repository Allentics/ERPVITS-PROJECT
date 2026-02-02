const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function check() {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'trm')
        .single();

    if (error) {
        console.error("Error fetching trm:", error.message);
        const { data: all } = await supabase.from('courses').select('id, title');
        console.log("All courses in DB:", all);
        return;
    }

    console.log("TRM Data:", JSON.stringify(data, null, 2));
}

check();
