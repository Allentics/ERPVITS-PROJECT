import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAdminLoad() {
    console.log('Fetching from Supabase with ID: ariba');
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'ariba')
        .single();

    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Course ID:', data.id);
        console.log('Course Title:', data.title);
        console.log('Sections count:', data.sections?.length);

        const outcomesSection = data.sections?.find((s: any) => s.type === 'detailed_learning_outcomes');
        if (outcomesSection) {
            console.log('\n=== Outcomes Section ===');
            console.log('Has items:', !!outcomesSection.items);
            console.log('Items is object:', typeof outcomesSection.items === 'object');
            console.log('Items is array:', Array.isArray(outcomesSection.items));
            if (outcomesSection.items && typeof outcomesSection.items === 'object' && !Array.isArray(outcomesSection.items)) {
                console.log('Has tabs:', !!outcomesSection.items.tabs);
                console.log('Tabs count:', outcomesSection.items.tabs?.length);
            }
        } else {
            console.log('No outcomes section found!');
        }
    }
}

checkAdminLoad();
