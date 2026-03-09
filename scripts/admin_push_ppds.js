const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseKey) { console.error('No service key'); process.exit(1); }
const supabase = createClient(supabaseUrl, supabaseKey);

const sqlContent = fs.readFileSync('scripts/add_sap_apo_ppds_blog.sql', 'utf8');
const match = sqlContent.match(/VALUES \('([^']+)', '([^']+)', '([^']+)', '([\s\S]+?)', '([^']+)', '([^']+)', '([^']+)', '([^']+)'\)/);
if (!match) { console.error('Regex failed to match'); process.exit(1); }
let [_, id, title, description, content, image, date, category, author] = match;
content = content.replace(/''/g, "'"); // extract content properly

(async () => {
    const res = await supabase.from('blog_posts').upsert({
        id, title, description, content, image, date, category, author
    });
    console.log('Result:', res.statusText, res.error ? res.error : 'Success');
})();
