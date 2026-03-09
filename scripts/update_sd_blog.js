const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    const { data: blog, error } = await supabase
        .from('blog_posts')
        .select('id, content')
        .eq('id', 'listing-and-exclusion-in-sap-sd')
        .single();

    if (error) {
        console.error("Error fetching blog:", error);
        return;
    }

    let content = blog.content;
    const targetText = "mechanisms within SAP SD that work together";
    // Using the URL the user requested minus the typo 'z'
    const replacementText = 'mechanisms within <a href="https://erpvites-project.vercel.app/courses/sd" style="color: #ea580c !important; font-weight: bold;">SAP SD</a> that work together';

    // We already accidentally used relative /courses/sap-sd-training in the previous step?
    // Let's check what we did
    const prevReplacement = 'mechanisms within <a href="/courses/sap-sd-training" style="color: #ea580c !important; font-weight: bold;">SAP SD</a> that work together';

    if (content.includes(targetText)) {
        content = content.replace(targetText, replacementText);
    } else if (content.includes(prevReplacement)) {
        content = content.replace(prevReplacement, replacementText);
    } else {
        console.log("Could not find text to replace!");
    }

    const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ content })
        .eq('id', 'listing-and-exclusion-in-sap-sd');

    if (updateError) {
        console.error("Error updating:", updateError);
    } else {
        console.log("Successfully updated the SAP SD hyperlink!");
    }
}

main();
