import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function listCourseIds() {
    const { data, error } = await supabase
        .from('courses')
        .select('id, title')
        .order('id');

    if (error) {
        console.error('Error:', error);
    } else {
        console.log('\nCourse IDs in database:\n');
        data?.forEach(c => console.log(`  ${c.id.padEnd(30)} - ${c.title}`));
    }
}

listCourseIds();
