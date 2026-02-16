
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function listSections() {
    const { data, error } = await supabase
        .from('site_content')
        .select('page_path, section_key, content');

    if (error) {
        console.error(error);
        return;
    }

    fs.writeFileSync('sections_debug.json', JSON.stringify(data, null, 2));
    console.log('Saved to sections_debug.json');
}

listSections();
