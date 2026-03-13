import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseRoleKey);

async function main() {
    const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', 'sap-fieldglass-login')
        .single();

    if (error || !post) {
        console.error("Error fetching:", error);
        return;
    }

    let modifiedContent = post.content;

    // Check if we need to replace /sap-fieldglass-training/
    modifiedContent = modifiedContent.replace(
        /href="\/sap-fieldglass-training\/"/g,
        'href="/courses/fieldglass/"'
    );

    const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ content: modifiedContent })
        .eq('id', 'sap-fieldglass-login');

    if (updateError) {
        console.error("Error updating:", updateError);
    } else {
        console.log("Successfully updated the SAP Fieldglass blog post content (v2).");
    }
}

main();
