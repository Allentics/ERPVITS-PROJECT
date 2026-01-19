
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const checkCourses = async () => {
    const { data, error } = await supabase.from('courses').select('id, title');
    if (error) console.error(error);
    else console.log(JSON.stringify(data, null, 2));
};

checkCourses();
