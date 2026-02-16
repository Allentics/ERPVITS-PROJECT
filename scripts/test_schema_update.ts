
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSchemaUpdate() {
    const id = 'c4c-technical';

    // Test 1: Update as Object
    console.log('Testing Object update...');
    const { error: err1 } = await supabase
        .from('courses')
        .update({ schema: { test: "object" } })
        .eq('id', id);
    if (err1) console.error('Object Update Error:', err1);

    const { data: data1 } = await supabase.from('courses').select('schema').eq('id', id).single();
    console.log('Data after Object update:', typeof data1?.schema, data1?.schema);

    // Test 2: Update as String
    console.log('Testing String update...');
    const { error: err2 } = await supabase
        .from('courses')
        .update({ schema: '{"test": "string"}' }) // Sending as string
        .eq('id', id);
    if (err2) console.error('String Update Error:', err2);

    const { data: data2 } = await supabase.from('courses').select('schema').eq('id', id).single();
    console.log('Data after String update:', typeof data2?.schema, data2?.schema);
}

testSchemaUpdate();
