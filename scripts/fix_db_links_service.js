const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use Service Role Key for bypass RLS

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateLinks() {
  console.log('Starting comprehensive link update with Service Role Key...');

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
      
      const replacements = [
        { from: /http:\/\/localhost:3000\/courses\/sap-ewm/g, to: '/courses/sap-ewm' },
        { from: /http:\/\/localhost:3000\/courses\/sap-mdg/g, to: '/courses/sap-mdg' },
        { from: /http:\/\/localhost:3000\/courses\/sap-fieldglass/g, to: '/courses/sap-fieldglass' },
        { from: /http:\/\/localhost:3000\/courses\/ariba/g, to: '/courses/ariba' },
        { from: /http:\/\/localhost:3000\/courses\//g, to: '/courses/' },
        { from: /http:\/\/localhost:3000\//g, to: '/' }
      ];

      for (const r of replacements) {
        updatedContent = updatedContent.replace(r.from, r.to);
      }

      // Also handle any stray localhost without courses
      updatedContent = updatedContent.split('http://localhost:3000').join('');

      const { data, error: updateError } = await supabase
        .from('blog_posts')
        .update({ content: updatedContent })
        .eq('id', blog.id)
        .select();

      if (updateError) {
        console.error(`Error updating blog ${blog.id}:`, updateError);
      } else if (data && data.length > 0) {
        console.log(`Successfully updated blog: ${blog.id}`);
      } else {
        console.log(`Update call for ${blog.id} returned no data (possibly no change).`);
      }
    }
  } else {
    console.log('No blogs found with localhost links.');
  }

  console.log('Finished comprehensive link update.');
}

updateLinks();
