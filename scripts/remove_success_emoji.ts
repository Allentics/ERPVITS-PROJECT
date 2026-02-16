
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function removeEmoji() {
    console.log('Checking site_content for success_stories...');
    const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .eq('section_key', 'success_stories');

    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    if (!data || data.length === 0) {
        console.log('No success_stories section found in DB.');
        return;
    }

    for (const row of data) {
        const content = row.content;
        if (content && content.title && content.title.includes('🎉')) {
            const oldTitle = content.title;
            content.title = content.title.replace('🎉', '').trim();
            console.log(`Updating title: "${oldTitle}" -> "${content.title}"`);

            const { error: updateError } = await supabase
                .from('site_content')
                .update({ content })
                .eq('id', row.id);

            if (updateError) {
                console.error(`Error updating row ${row.id}:`, updateError);
            } else {
                console.log(`Successfully updated row ${row.id}.`);
            }
        } else {
            console.log(`Row ${row.id} already clean or no title.`);
        }
    }
}

removeEmoji();
