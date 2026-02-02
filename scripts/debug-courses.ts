import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function debugCourses() {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .ilike('title', '%ABAP%')
        .limit(1);

    if (error) {
        console.error('Error fetching courses:', error);
    } else {
        if (data && data.length > 0) {
            console.log('Course found:', data[0].title);
            console.log('price:', data[0].price);
            console.log('duration:', data[0].duration);
        } else {
            console.log('Course not found');
        }
    }
}

debugCourses();
