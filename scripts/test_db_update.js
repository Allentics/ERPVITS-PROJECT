const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testUpdate() {
  const { data: blog } = await supabase.from('blog_posts').select('id, content').eq('id', 'sap-ewm-yard-management').single();
  const includesBefore = blog.content.includes('localhost:3000');
  console.log('Includes localhost before:', includesBefore);
  
  const updatedContent = blog.content.split('http://localhost:3000/courses/sap-ewm').join('/courses/sap-ewm');
  const includesAfter = updatedContent.includes('localhost:3000');
  console.log('Includes localhost after split/join:', includesAfter);

  const { data, error } = await supabase.from('blog_posts').update({ content: updatedContent }).eq('id', 'sap-ewm-yard-management').select();
  console.log('Update Error:', error);
  console.log('Update Result Includes localhost:', data[0].content.includes('localhost:3000'));
}
testUpdate();
