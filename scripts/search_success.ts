
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function searchSuccess() {
    const { data, error } = await supabase
        .from('site_content')
        .select('*');

    if (error) {
        console.error(error);
        return;
    }

    const matches = data.filter(row => {
        const contentStr = JSON.stringify(row.content);
        return contentStr.toLowerCase().includes('success');
    });

    fs.writeFileSync('success_matches.json', JSON.stringify(matches, null, 2));
    console.log('Saved to success_matches.json');
}

searchSuccess();
