import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkEWM() {
    const { data, error } = await supabase
        .from('courses')
        .select('id, title, updated_at')
        .eq('id', 'sap-ewm')
        .single();

    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('EWM Course in Database:');
        console.log('ID:', data.id);
        console.log('Title:', data.title);
        console.log('Last Updated:', data.updated_at);
    }
}

checkEWM();
