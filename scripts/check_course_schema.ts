
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
    const { data: course, error } = await supabase
        .from('courses')
        .select('id, schema')
        .eq('id', 'c4c-technical')
        .single();

    if (error) {
        console.error('Error fetching course:', error);
        return;
    }

    console.log('Course ID:', course.id);
    console.log('Schema:', JSON.stringify(course.schema, null, 2));
}

checkSchema();
