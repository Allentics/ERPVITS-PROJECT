import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testUpdatePermission() {
    console.log('Testing if we can UPDATE the database...\n');

    // Try to add " practical expertise." back
    const { data: course, error: fetchError } = await supabase
        .from('courses')
        .select('sections')
        .eq('id', 'ariba')
        .single();

    if (fetchError) {
        console.error('❌ Cannot fetch:', fetchError.message);
        return;
    }

    const sections = JSON.parse(JSON.stringify(course.sections));
    const whyUsIdx = sections.findIndex((s: any) => s.type === 'detailed_features');
    const items = sections[whyUsIdx].items;
    const instructorIdx = items.findIndex((item: any) =>
        item.title && item.title.toLowerCase().includes('instructor')
    );

    const currentDesc = items[instructorIdx].description;
    console.log('Current text ends with:', currentDesc.slice(-50));

    // Add " practical expertise." back
    const newDesc = currentDesc.trim() + ' practical expertise.';
    items[instructorIdx].description = newDesc;
    sections[whyUsIdx].items = items;

    console.log('\nAttempting to UPDATE...');
    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', 'ariba');

    if (updateError) {
        console.error('\n❌ UPDATE FAILED!');
        console.error('Error:', updateError.message);
        console.error('\n🔧 FIX: You need to add an RLS policy in Supabase');
        console.error('   Go to: https://supabase.com/dashboard');
        console.error('   SQL Editor → Run this:');
        console.error('\n   CREATE POLICY "Enable UPDATE for all users"');
        console.error('   ON "public"."courses"');
        console.error('   FOR UPDATE TO public');
        console.error('   USING (true) WITH CHECK (true);');
    } else {
        console.log('\n✅ UPDATE SUCCESSFUL!');
        console.log('New text ends with:', newDesc.slice(-50));
    }
}

testUpdatePermission();
