import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testUpdate() {
    console.log('Testing update on ariba course...\n');

    // First, try to read it
    const { data: readData, error: readError } = await supabase
        .from('courses')
        .select('id, title, price, duration')
        .eq('id', 'ariba')
        .single();

    if (readError) {
        console.error('Read error:', readError);
        return;
    }

    console.log('Found course:', readData);
    console.log('Current price:', readData.price);
    console.log('Current duration:', readData.duration);

    // Now try to update it
    console.log('\nAttempting update...');
    const { data: updateData, error: updateError } = await supabase
        .from('courses')
        .update({
            price: '45,000',
            duration: '45-50 hours'
        })
        .eq('id', 'ariba')
        .select();

    if (updateError) {
        console.error('Update error:', updateError);
    } else {
        console.log('Update result:', updateData);
    }
}

testUpdate();
