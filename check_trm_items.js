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
        console.log("Detailed Features Section for TRM:");
        console.log(JSON.stringify(featuresSection.items, null, 2));
    }
}

check();
