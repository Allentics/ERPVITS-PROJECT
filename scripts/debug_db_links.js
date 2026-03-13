require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

supabase.from('blog_posts').select('id, content').then(r => {
    r.data.forEach(p => {
        const matches = p.content?.match(/href=["'][^"']*erpvits\.com\/blogs\/[^"']+["']/g);
        if (matches) {
            console.log(`Post ${p.id} has links:`, matches);
        }
    });
});
