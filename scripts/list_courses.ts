
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function listCourses() {
    console.log('Fetching courses from Supabase...');

    const { data, error } = await supabase
        .from('courses')
        .select('id, title, category')
        .order('title');

    if (error) {
        console.error('Error fetching courses:', error);
    } else {
        console.log('Courses in DB:');
        data.forEach(c => console.log(`- [${c.id}] ${c.title} (${c.category})`));
    }
}

listCourses();
