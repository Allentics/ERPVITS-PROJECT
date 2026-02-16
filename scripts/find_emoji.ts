
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function findEmoji() {
    const { data, error } = await supabase
        .from('site_content')
        .select('*');

    if (error) {
        console.error(error);
        return;
    }

    const matches = data.filter(row => JSON.stringify(row.content).includes('Meet Our Success Stories'));
    console.log(JSON.stringify(matches, null, 2));
}

findEmoji();
