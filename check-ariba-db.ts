import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

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
        console.log('Ariba Course in DB:');
        console.log('Title:', data.title);
        console.log('Sections Length:', data.sections?.length);
        if (data.sections) {
            console.log('Section Types:', data.sections.map((s: any) => s.type));
        }
    }
}

checkAriba();
