const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseKey) { console.error('No service key'); process.exit(1); }
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
    const { data: post, error } = await supabase.from('blog_posts').select('content').eq('id', 'how-sap-fieldglass-transforming-global-contingent-workforce-market').single();
    if (error || !post) {
        console.error('Post not found or error:', error);
        return;
    }

    let modifiedContent = post.content;

    // Check if ERPVITS offers comprehensive is there
    if (modifiedContent && modifiedContent.includes('ERPVITS offers comprehensive SAP Fieldglass Online Training')) {
        modifiedContent = modifiedContent.replace(
            `ERPVITS offers comprehensive SAP Fieldglass Online Training`,
            `<a href="https://www.erpvits.com" target="_blank" rel="noopener noreferrer" class="text-cyan-500 hover:text-cyan-600 font-semibold no-underline">ERPVITS</a> offers comprehensive SAP Fieldglass Online Training`
        );

        const { error: updateError } = await supabase.from('blog_posts').update({
            content: modifiedContent
        }).eq('id', 'how-sap-fieldglass-transforming-global-contingent-workforce-market');

        if (updateError) {
            console.error('Update failed:', updateError);
        } else {
            console.log('Successfully updated the database content for how-sap-fieldglass-transforming-global-contingent-workforce-market.');
        }
    } else {
        console.log('Text not found in DB content, maybe it uses component or already updated.');
    }
})();
