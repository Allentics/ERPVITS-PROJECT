import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function renameId() {
    const oldId = 'sap-ariba-interview-questions-and-answers';
    const newId = 'sap-ariba-interview-questions-answers-2026';

    console.log(`Renaming ${oldId} to ${newId}...`);

    // Fetch the old data
    const { data: oldPost, error: fetchError } = await s
        .from('blog_posts')
        .select('*')
        .eq('id', oldId)
        .single();

    if (fetchError || !oldPost) {
        console.error('Old post not found');
        return;
    }

    // Insert as new ID
    const { error: insertError } = await s
        .from('blog_posts')
        .insert({ ...oldPost, id: newId });

    if (insertError) {
        console.error('Insert failed:', insertError);
        // If it failed because it already exists, that's fine too.
    } else {
        console.log('Insert successful.');
    }

    // Delete the old one (optional, but good for cleanup)
    const { error: deleteError } = await s
        .from('blog_posts')
        .delete()
        .eq('id', oldId);
    
    if (deleteError) {
        console.error('Delete failed:', deleteError);
    } else {
        console.log('Delete successful.');
    }
}
renameId();
