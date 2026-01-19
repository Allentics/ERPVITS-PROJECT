import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAriba() {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'ariba')
        .single();

    if (error) {
        console.error('Error fetching Ariba:', error.message);
    } else {
        const outcomes = data.sections?.find((s: any) => s.type === 'detailed_learning_outcomes');
        console.log('Outcomes Section:');
        console.log(JSON.stringify(outcomes, null, 2));
    }
}

checkAriba();
