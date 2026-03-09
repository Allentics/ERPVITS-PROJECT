const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.log('Missing env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixSAPIBP() {
    const { data, error } = await supabase.from('courses').select('id, sections').eq('id', 'sap-ibp').single();

    if (error) {
        console.error('Error fetching course:', error.message);
        return;
    }

    let sections = data.sections;
    if (typeof sections === 'string') {
        sections = JSON.parse(sections);
    }

    const whatsIncludedIndex = sections.findIndex((s) => s.type === 'whats_included');
    if (whatsIncludedIndex === -1) {
        console.error('whats_included section not found');
        return;
    }

    console.log('Before update:', sections[whatsIncludedIndex].stats);

    // Add the 3rd point
    sections[whatsIncludedIndex].stats = [
        { label: "Hours of Live Training", value: "35+" },
        { label: "Hands-On Lab Exercises", value: "65+" },
        { label: "SAP IBP Lab Access", value: "24/7" }
    ];

    console.log('After update:', sections[whatsIncludedIndex].stats);

    // Ensure sections is stringified back before saving depending on the type of column (jsonb or text)
    // According to CoursePage, it handles both but sending an object is standard for jsonb
    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections }) // jsonb is automatically stringified
        .eq('id', 'sap-ibp');

    if (updateError) {
        console.error('Error updating course:', updateError.message);
    } else {
        console.log('Successfully updated SAP IBP stats!');
    }
}

fixSAPIBP();
