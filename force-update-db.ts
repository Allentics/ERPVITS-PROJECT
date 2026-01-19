import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function forceUpdate() {
    console.log('Step 1: Fetching current data...');
    const { data: course, error: fetchError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'ariba')
        .single();

    if (fetchError) {
        console.error('❌ Fetch failed:', fetchError);
        return;
    }

    console.log('✅ Fetched successfully');
    console.log(`Sections count: ${course.sections?.length || 0}`);

    // Find the section
    const sections = JSON.parse(JSON.stringify(course.sections || [])); // Deep clone
    const whyUsIdx = sections.findIndex((s: any) => s.type === 'detailed_features');

    if (whyUsIdx === -1) {
        console.error('❌ detailed_features section not found');
        return;
    }

    console.log(`✅ Found detailed_features section at index ${whyUsIdx}`);

    const items = sections[whyUsIdx].items || [];
    const instructorIdx = items.findIndex((item: any) =>
        item.title && item.title.toLowerCase().includes('instructor')
    );

    if (instructorIdx === -1) {
        console.error('❌ Instructor item not found');
        return;
    }

    console.log(`✅ Found Instructor item at index ${instructorIdx}`);
    console.log('Current description (last 80 chars):', items[instructorIdx].description.slice(-80));

    // Update it
    const oldDesc = items[instructorIdx].description;
    const newDesc = oldDesc.replace(/\s*practical\s+expertise\.\s*$/, ' practical');

    items[instructorIdx].description = newDesc;
    sections[whyUsIdx].items = items;

    console.log('\nStep 2: Updating database...');
    console.log('New description (last 80 chars):', newDesc.slice(-80));

    const { data: updateData, error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', 'ariba')
        .select();

    if (updateError) {
        console.error('❌ Update failed:', updateError);
        return;
    }

    console.log('✅ DATABASE UPDATED SUCCESSFULLY!');
    console.log('Updated record:', updateData);
}

forceUpdate();
