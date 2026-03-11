const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateLinks() {
  console.log('Starting comprehensive link update...');

  const { data: blogs, error: fetchError } = await supabase
    .from('blog_posts')
    .select('id, content')
    .like('content', '%localhost:3000%');

  if (fetchError) {
    console.error('Error fetching blogs:', fetchError);
    return;
  }

  if (blogs && blogs.length > 0) {
    console.log(`Found ${blogs.length} blogs with localhost links.`);
    for (const blog of blogs) {
      // Replace variations of localhost:3000 links
      let updatedContent = blog.content;
      
      // Define replacements
      const replacements = [
        { from: /http:\/\/localhost:3000\/courses\/sap-ewm/g, to: '/courses/sap-ewm' },
        { from: /http:\/\/localhost:3000\/courses\/sap-mdg/g, to: '/courses/sap-mdg' },
        { from: /http:\/\/localhost:3000\/courses\/sap-fieldglass/g, to: '/courses/sap-fieldglass' },
        { from: /http:\/\/localhost:3000\/courses\/ariba/g, to: '/courses/ariba' },
        // Catch-all for any other localhost:3000/courses/...
        { from: /http:\/\/localhost:3000\/courses\//g, to: '/courses/' },
        // Catch-all for root domain
        { from: /http:\/\/localhost:3000\//g, to: '/' }
      ];

      for (const r of replacements) {
        updatedContent = updatedContent.replace(r.from, r.to);
      }

      const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ content: updatedContent })
        .eq('id', blog.id);

      if (updateError) {
        console.error(`Error updating blog ${blog.id}:`, updateError);
      } else {
        console.log(`Successfully updated blog: ${blog.id}`);
      }
    }
  } else {
    console.log('No blogs found with localhost links.');
  }

  console.log('Finished comprehensive link update.');
}

updateLinks();
