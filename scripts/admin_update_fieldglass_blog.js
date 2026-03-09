const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseKey) { console.error('No service key'); process.exit(1); }
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
    const { data: post } = await supabase.from('blog_posts').select('content').eq('id', 'sap-fieldglass-vs-traditional-vms').single();
    if (!post) {
        console.error('Post not found');
        return;
    }

    let modifiedContent = post.content;

    // 1. Add hyperlink to "SAP fieldglass training" in the intro
    modifiedContent = modifiedContent.replace(
        /SAP fieldglass training(,| )/g,
        function (match) {
            if (match.includes('<a')) return match;
            return '<a href="/courses/fieldglass">SAP fieldglass training</a>' + match.slice(-1);
        }
    );

    // 2. Replace the Conclusion format to match screenshot exactly
    const oldConclusionRegex = /<h2>Conclusion: SAP Fieldglass Should be Your Go-To for Vendor & Workforce Management<\/h2>[\s\S]*?<\/div>\s*<\/div>/;

    const newConclusion = `<h2>Conclusion: SAP Fieldglass Should Be Your Go-To For Vendor & Workforce Management</h2>
            <p>
                Though traditional VMS platforms met workforce management needs in the past, SAP Fieldglass is equipped to meet the needs of modern organizations in the following areas:
            </p>
            <ul>
                <li>Cloud scalability</li>
                <li>Complete lifecycle management</li>
                <li>Smart compliance</li>
                <li>Unified integrations</li>
                <li>Predictive analytics</li>
                <li>User experience</li>
            </ul>
            <p>
                Because of these strengths, SAP Fieldglass is trusted by hundreds of organizations to manage their external workforce.
            </p>
            <p>
                If you are looking to be future-ready with a workforce management career, and want to distinguish yourself in the SAP community, this is the time to learn new skills:
            </p>
            <p>
                👉 Start Your <a href="/courses/fieldglass">SAP Fieldglass Online Training</a>
            </p>
        </div>`;

    modifiedContent = modifiedContent.replace(oldConclusionRegex, newConclusion);

    const { error } = await supabase.from('blog_posts').update({
        content: modifiedContent
    }).eq('id', 'sap-fieldglass-vs-traditional-vms');

    if (error) {
        console.error('Update failed:', error);
    } else {
        console.log('Successfully updated the SAP Fieldglass VMS blog post format and hyperlinks.');
    }
})();
