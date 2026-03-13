import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseRoleKey);

async function main() {
    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*');

    if (error) {
        console.error("Error fetching:", error);
        return;
    }

    const post = posts.find(p => p.id === 'sap-fieldglass-login' || p.url?.includes('sap-fieldglass-login') || p.slug === 'sap-fieldglass-login');
    if (post) {
        fs.writeFileSync('fieldglass_blog.json', JSON.stringify(post, null, 2));
        console.log("Saved to fieldglass_blog.json. Actual ID:", post.id);
    } else {
        console.log("Post not found. Total posts:", posts.length);
        console.log("Available IDs:", posts.map(p => p.id).join(', '));
    }
}

main();
