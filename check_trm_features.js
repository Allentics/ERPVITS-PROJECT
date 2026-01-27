const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function check() {
    const { data: course, error } = await supabase
        .from('courses')
        .select('id, sections')
        .eq('id', 'trm')
        .single();

    if (error) {
        console.error(error);
        return;
    }

    const sections = Array.isArray(course.sections) ? course.sections : JSON.parse(course.sections || '[]');
    const featuresSection = sections.find(s => s.type === 'detailed_features');

    if (featuresSection) {
        console.log("Detailed Features Section Found in DB for TRM:");
        console.log("Title:", featuresSection.title);
        console.log("Items Count:", featuresSection.items ? featuresSection.items.length : 0);
    } else {
        console.log("Detailed Features Section NOT Found in DB for TRM");
    }
}

check();
