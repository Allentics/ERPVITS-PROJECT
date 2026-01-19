import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fixAribaInstructor() {
    // First, get the current data
    const { data: course, error: fetchError } = await supabase
        .from('courses')
        .select('sections')
        .eq('id', 'ariba')
        .single();

    if (fetchError) {
        console.error('Fetch error:', fetchError.message);
        return;
    }

    // Find and update the section
    const sections = course.sections || [];
    const whyUsIndex = sections.findIndex((s: any) => s.type === 'detailed_features');

    if (whyUsIndex === -1) {
        console.log('detailed_features section not found');
        return;
    }

    const items = sections[whyUsIndex].items || [];
    const instructorIndex = items.findIndex((item: any) => item.title?.includes('Instructor'));

    if (instructorIndex === -1) {
        console.log('Instructor item not found');
        return;
    }

    // Remove "expertise." from the end
    const oldDesc = items[instructorIndex].description;
    const newDesc = oldDesc.replace(/\s*expertise\.\s*$/, '');

    console.log('Old description ends with:', oldDesc.slice(-50));
    console.log('New description will end with:', newDesc.slice(-50));

    items[instructorIndex].description = newDesc;
    sections[whyUsIndex].items = items;

    // Update the database
    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections })
        .eq('id', 'ariba');

    if (updateError) {
        console.error('Update error:', updateError.message);
    } else {
        console.log('✅ Successfully updated! "expertise." has been removed.');
    }
}

fixAribaInstructor();
