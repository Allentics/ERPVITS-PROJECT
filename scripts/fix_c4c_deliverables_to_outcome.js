const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.log('Missing env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateC4C() {
    const courseId = 'c4c-technical';
    console.log(`Fetching ${courseId}...`);
    const { data: fetchResult, error: fetchErr } = await supabase.from('courses').select('sections').eq('id', courseId).single();

    if (fetchErr || !fetchResult) {
        console.error('Course not found or error fetching:', fetchErr?.message);
        return;
    }

    let sections = typeof fetchResult.sections === 'string' ? JSON.parse(fetchResult.sections) : fetchResult.sections;

    // Update real_world_scenarios
    let rwsIndex = sections.findIndex(s => s.type === 'real_world_scenarios');
    if (rwsIndex !== -1) {
        sections[rwsIndex].items = sections[rwsIndex].items.map(item => {
            const newItem = { ...item };
            if (newItem.deliverables) {
                newItem.outcome = newItem.deliverables;
                delete newItem.deliverables;
            }
            return newItem;
        });
    }

    console.log('Sending update...');
    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', courseId);

    if (updateError) {
        console.error('Error updating:', updateError.message);
    } else {
        console.log('Successfully updated Deliverables -> Business Impact in DB!');
    }
}

updateC4C();
