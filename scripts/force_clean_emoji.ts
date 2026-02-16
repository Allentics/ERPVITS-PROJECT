
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function forceClean() {
    console.log('Force cleaning success_stories sections...');
    const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .eq('section_key', 'success_stories');

    if (error) {
        console.error(error);
        return;
    }

    if (!data || data.length === 0) {
        console.log('No success_stories sections found. Trying direct update by type search...');
        // Try searching for any content that looks like success stories if key is different
        const { data: allData, error: allErr } = await supabase.from('site_content').select('*');
        if (allErr) return;
        const potentialRows = allData.filter(r => JSON.stringify(r.content).includes('Meet Our Success Stories'));
        if (potentialRows.length === 0) {
            console.log('Absolutely no matches found in DB.');
            return;
        }
        data.push(...potentialRows);
    }

    for (const row of data) {
        if (row.content && row.content.title && row.content.title.includes('🎉')) {
            row.content.title = row.content.title.replace('🎉', '').trim();
            console.log(`Cleaning row ${row.id}, new title: ${row.content.title}`);
            await supabase.from('site_content').update({ content: row.content }).eq('id', row.id);
        } else {
            console.log(`Row ${row.id} already clean.`);
        }
    }
}

forceClean();
