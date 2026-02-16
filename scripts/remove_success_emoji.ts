
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function removeEmoji() {
    console.log('Fetching success stories content...');
    const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .eq('page_path', '/')
        .eq('section_key', 'success_stories')
        .single();

    if (error) {
        console.error('Error fetching content:', error);
        return;
    }

    if (data) {
        const content = data.content;
        if (content.title.includes('🎉')) {
            content.title = content.title.replace('🎉', '').trim();
            console.log('Updating title to:', content.title);

            const { error: updateError } = await supabase
                .from('site_content')
                .update({ content })
                .eq('id', data.id);

            if (updateError) {
                console.error('Error updating content:', updateError);
            } else {
                console.log('Successfully updated title in database.');
            }
        } else {
            console.log('Emoji not found in title.');
        }
    }
}

removeEmoji();
