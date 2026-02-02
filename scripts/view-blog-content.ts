import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function viewBlogContent() {
    const { data: post } = await supabase
        .from('blog_posts')
        .select('content')
        .eq('id', 'top-7-sap-training-institutes')
        .single();

    if (post) {
        // Show last 2000 characters to see what's at the end
        const content = post.content || '';
        console.log('=== LAST 2000 CHARACTERS OF BLOG CONTENT ===');
        console.log(content.slice(-2000));
        console.log('\n=== END ===');
    }
}

viewBlogContent();
