const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const REPLACEMENTS = [
  { from: /\/courses\/sap-fieldglass/g, to: '/sap-fieldglass-training' },
  { from: /\/courses\/fieldglass/g, to: '/sap-fieldglass-training' },
  { from: /\/courses\/sap-ariba/g, to: '/sap-ariba-training' },
  { from: /\/courses\/ariba/g, to: '/sap-ariba-training' },
  { from: /\/courses\/sap-fico/g, to: '/sap-fico-course' },
  { from: /\/courses\/fico/g, to: '/sap-fico-course' },
  { from: /\/courses\/sap-mm/g, to: '/sap-s4hana-mm-training' },
  { from: /\/courses\/mm/g, to: '/sap-s4hana-mm-training' },
  { from: /\/courses\/sap-s4hana-mm/g, to: '/sap-s4hana-mm-training' },
  { from: /\/courses\/sap-sd/g, to: '/sap-sd-training' },
  { from: /\/courses\/sd/g, to: '/sap-sd-training' },
  { from: /\/courses\/sap-trm/g, to: '/sap-treasury-and-risk-management-online-training' },
  { from: /\/courses\/trm/g, to: '/sap-treasury-and-risk-management-online-training' },
  { from: /\/courses\/sap-abap-on-cloud/g, to: '/sap-abap-on-cloud-online-training' },
  { from: /\/courses\/abap-cloud/g, to: '/sap-abap-on-cloud-online-training' },
  { from: /\/courses\/sap-abap-on-hana/g, to: '/sap-abap-on-hana' },
  { from: /\/courses\/abap-hana/g, to: '/sap-abap-on-hana' },
  { from: /\/courses\/sap-cpi/g, to: '/sap-cpi-training' },
  { from: /\/courses\/cpi/g, to: '/sap-cpi-training' },
  { from: /\/courses\/sap-c4c-technical/g, to: '/sap-c4c-technical-online-training' },
  { from: /\/courses\/c4c-technical/g, to: '/sap-c4c-technical-online-training' },
  { from: /\/courses\/sap-python-aiml/g, to: '/ai-and-machine-learning-with-python' },
  { from: /\/courses\/python-aiml/g, to: '/ai-and-machine-learning-with-python' }
];

async function updateAllInternalLinks() {
  console.log('Starting internal link update for all blog posts...');

  const { data: blogs, error: fetchError } = await supabase
    .from('blog_posts')
    .select('id, content');

  if (fetchError) {
    console.error('Error fetching blogs:', fetchError);
    return;
  }

  console.log(`Checking ${blogs.length} blogs...`);

  for (const blog of blogs) {
    let updatedContent = blog.content;
    let changed = false;

    for (const r of REPLACEMENTS) {
      if (r.from.test(updatedContent)) {
        updatedContent = updatedContent.replace(r.from, r.to);
        changed = true;
      }
    }

    if (changed) {
      const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ content: updatedContent })
        .eq('id', blog.id);

      if (updateError) {
        console.error(`Error updating blog ${blog.id}:`, updateError);
      } else {
        console.log(`Successfully updated blog links: ${blog.id}`);
      }
    }
  }

  console.log('Finished updating internal links.');
}

updateAllInternalLinks();
