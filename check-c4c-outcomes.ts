import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCourse(id: string) {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(`Error fetching ${id}:`, error.message);
    } else {
        const outcomes = data.sections?.find((s: any) => s.type === 'detailed_learning_outcomes');
        console.log(`Outcomes Section for ${id}:`);
        console.log(JSON.stringify(outcomes, null, 2));
    }
}

checkCourse('c4c-technical');
