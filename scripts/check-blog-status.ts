import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBlogStatus() {
    const { data: posts } = await supabase
        .from('blog_posts')
        .select('id, title, content');

    console.log('=== BLOG CONTENT STATUS ===\n');

    for (const post of posts || []) {
        const contentLength = (post.content || '').length;
        const status = contentLength < 100 ? '❌ NEEDS CONTENT' : `✓ ${contentLength} chars`;
        console.log(`${status.padEnd(20)} | ${post.title}`);
    }
}

checkBlogStatus();
