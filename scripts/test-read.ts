import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testRead() {
    const ids = ['fico', 'mm', 'sd'];

    for (const id of ids) {
        const { data, error } = await supabase
            .from('courses')
            .select('id, title, price')
            .eq('id', id);

        console.log(`${id}:`, data, error);
    }
}

testRead();
