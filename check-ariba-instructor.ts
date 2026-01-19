import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAribaFeature() {
    const { data, error } = await supabase
        .from('courses')
        .select('sections')
        .eq('id', 'ariba')
        .single();

    if (error) {
        console.error('Error:', error.message);
    } else {
        const whyUs = data.sections?.find((s: any) => s.type === 'detailed_features');
        const instructorFeature = whyUs?.items?.find((item: any) =>
            item.title?.includes('Instructor')
        );

        console.log('Certified Instructor Experience - Description:');
        console.log(instructorFeature?.description || 'Not found');
        console.log('\nDoes it end with "expertise."?',
            instructorFeature?.description?.trim().endsWith('expertise.') ? 'YES (old version)' : 'NO (updated!)');
    }
}

checkAribaFeature();
