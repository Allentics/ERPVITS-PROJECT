const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function check() {
    const { data: courses, error } = await supabase
        .from('courses')
        .select('id', 'title', 'sections');

    if (error) {
        console.error(error);
        return;
    }

    courses.forEach(course => {
        console.log(`Course: ${course.id} - ${course.title}`);
        const sections = course.sections || [];
        if (sections.length === 0) {
            console.log("  No sections");
            return;
        }
        sections.forEach(sec => {
            if (sec.type === 'detailed_features' || (sec.title && sec.title.includes('Features'))) {
                console.log(`  Section Type: ${sec.type} | Badge: ${sec.badge} | Title: ${sec.title}`);
            }
        });
    });
}

check();
