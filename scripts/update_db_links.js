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
  console.log('Starting link update...');

  // Update EWM
  const { data: ewmData, error: ewmError } = await supabase.rpc('replace_blog_content', {
    target_str: 'http://localhost:3000/courses/sap-ewm',
    replacement_str: '/courses/sap-ewm'
  });

  if (ewmError) {
    // If RPC doesn't exist, try manual update
    console.log('RPC failed, trying manual update for EWM...');
    const { data: blogs, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id, content')
      .like('content', '%http://localhost:3000/courses/sap-ewm%');

    if (blogs) {
      for (const blog of blogs) {
        const updatedContent = blog.content.replace(/http:\/\/localhost:3000\/courses\/sap-ewm/g, '/courses/sap-ewm');
        await supabase
          .from('blog_posts')
          .update({ content: updatedContent })
          .eq('id', blog.id);
        console.log(`Updated blog: ${blog.id}`);
      }
    }
  }

  // Update MDG
  const { data: mdgBlogs } = await supabase
    .from('blog_posts')
    .select('id, content')
    .like('content', '%http://localhost:3000/courses/sap-mdg%');
  
  if (mdgBlogs) {
    for (const blog of mdgBlogs) {
      const updatedContent = blog.content.replace(/http:\/\/localhost:3000\/courses\/sap-mdg/g, '/courses/sap-mdg');
      await supabase
        .from('blog_posts')
        .update({ content: updatedContent })
        .eq('id', blog.id);
      console.log(`Updated blog: ${blog.id}`);
    }
  }

  // Update Fieldglass
  const { data: fgBlogs } = await supabase
    .from('blog_posts')
    .select('id, content')
    .like('content', '%http://localhost:3000/courses/sap-fieldglass%');
  
  if (fgBlogs) {
    for (const blog of fgBlogs) {
      const updatedContent = blog.content.replace(/http:\/\/localhost:3000\/courses\/sap-fieldglass/g, '/courses/sap-fieldglass');
      await supabase
        .from('blog_posts')
        .update({ content: updatedContent })
        .eq('id', blog.id);
      console.log(`Updated blog: ${blog.id}`);
    }
  }

  // Update Ariba
  const { data: aribaBlogs } = await supabase
    .from('blog_posts')
    .select('id, content')
    .like('content', '%http://localhost:3000/courses/ariba%');
  
  if (aribaBlogs) {
    for (const blog of aribaBlogs) {
      const updatedContent = blog.content.replace(/http:\/\/localhost:3000\/courses\/ariba/g, '/courses/ariba');
      await supabase
        .from('blog_posts')
        .update({ content: updatedContent })
        .eq('id', blog.id);
      console.log(`Updated blog: ${blog.id}`);
    }
  }

  console.log('Finished link update.');
}

updateLinks();
