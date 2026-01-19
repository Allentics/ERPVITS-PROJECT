const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function checkAriba() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data: allCourses, error: allErr } = await supabase.from('courses').select('id, title');
    console.log('--- ALL COURSES ---');
    console.log(allCourses);

    const { data, error } = await supabase.from('courses').select('id, sections').eq('title', 'SAP Ariba').single();
    if (error) {
        console.error('Error fetching course by title:', error);
        return;
    }
    console.log('--- FOUND SAP ARIBA ---');
    console.log('ID:', data.id);
    const section = data.sections.find(s => s.type === 'detailed_features');
    if (section && section.items) {
        section.items.forEach((item, i) => {
            console.log(`Item ${i}: ${item.title}`);
            console.log(`Description: ${item.description}`);
            console.log('---');
        });
    }
}

checkAriba();
