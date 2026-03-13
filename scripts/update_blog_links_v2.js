require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateBlogLinks() {
    try {
        console.log('Fetching blog posts...');
        const { data: posts, error } = await supabase
            .from('blog_posts')
            .select('id, content');

        if (error) throw error;

        console.log(`Analyzing ${posts.length} posts for links...`);
        let updateCount = 0;

        for (const post of posts) {
            if (!post.content) continue;

            let newContent = post.content;
            let changed = false;

            // Pattern 1: Move /blogs/slug to /blog/slug
            // We look for erpvits.com/blogs/ followed by slug characters
            // Note: we must be careful not to match erpvits.com/blogs/ itself (the list page)
            const blogSlugPattern = /https:\/\/www\.erpvits\.com\/blogs\/([a-zA-Z0-9\-_]+)(\/)?/g;
            if (blogSlugPattern.test(newContent)) {
                newContent = newContent.replace(blogSlugPattern, 'https://www.erpvits.com/blog/$1/');
                changed = true;
            }

            // Pattern 2: Relative links /blogs/slug to /blog/slug/
            const relativePattern = /(href|src)=["']\/blogs\/([a-zA-Z0-9\-_]+)(\/)?["']/g;
            if (relativePattern.test(newContent)) {
                newContent = newContent.replace(relativePattern, '$1="/blog/$2/"');
                changed = true;
            }

            if (changed) {
                console.log(`Updating post: ${post.id}`);
                const { error: updateError } = await supabase
                    .from('blog_posts')
                    .update({ content: newContent })
                    .eq('id', post.id);

                if (updateError) {
                    console.error(`Error updating ${post.id}:`, updateError);
                } else {
                    updateCount++;
                }
            }
        }

        console.log(`Successfully updated links in ${updateCount} posts.`);
    } catch (err) {
        console.error('Migration failed:', err);
    }
}

updateBlogLinks();
