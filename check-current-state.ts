import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCurrentState() {
    const { data, error } = await supabase
        .from('courses')
        .select('sections')
        .eq('id', 'ariba')
        .single();

    if (error) {
        console.error('Error:', error.message);
        return;
    }

    const whyUs = data.sections?.find((s: any) => s.type === 'detailed_features');
    const instructorFeature = whyUs?.items?.find((item: any) =>
        item.title?.includes('Instructor')
    );

    console.log('\n=== CURRENT DATABASE STATE ===\n');
    console.log('Full description:');
    console.log(instructorFeature?.description);
    console.log('\n');
    console.log('Last 100 characters:');
    console.log(instructorFeature?.description?.slice(-100));
    console.log('\n');
    console.log('Contains "expertise." at end?',
        instructorFeature?.description?.trim().endsWith('expertise.') ? '❌ YES (not updated)' : '✅ NO (updated!)');
}

checkCurrentState();
