
import { createClient } from '@supabase/supabase-js';

/**
 * Helper to backup all blog posts from Supabase to a persistent Storage Bucket.
 * This is designed for Vercel compatibility where the filesystem is read-only.
 * 
 * Rules followed:
 * 1. Fetches full blog data AFTER the DB operation (triggered via API).
 * 2. Original naming format: blogs-backup-YYYY-MM-DD-HH-mm.json
 * 3. Never overwrites; each operation creates a new unique file.
 * 4. Uses Service Role Key (server-side only).
 * 5. Error handled to avoid breaking admin flow.
 */
export async function backupBlogs() {
    try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!supabaseUrl || !supabaseKey) {
            console.error('Backup failed: Missing environment credentials.');
            return { success: false, error: 'Missing credentials' };
        }

        // Initialize Admin Client (server-side only)
        const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
            auth: { persistSession: false },
        });

        // 1. Fetch latest FULL blog data
        const { data: blogs, error } = await supabaseAdmin
            .from('blog_posts')
            .select('*')
            .order('date', { ascending: false });

        if (error) {
            console.error('Backup failed: Error fetching data:', error.message);
            return { success: false, error: error.message };
        }

        // 2. Format backup content
        const backupContent = JSON.stringify(blogs || [], null, 2);

        // 3. Generate filename format: blogs-backup-YYYY-MM-DD-HH-mm.json
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        const filename = `blogs-backup-${year}-${month}-${day}-${hours}-${minutes}.json`;
        const storagePath = `blogs/${filename}`;

        // 4. Persistent Storage (Vercel Compatible)
        const BUCKET = 'backups';

        // Ensure bucket exists
        const { data: buckets } = await supabaseAdmin.storage.listBuckets();
        const exists = buckets?.some(b => b.name === BUCKET);

        if (!exists) {
            await supabaseAdmin.storage.createBucket(BUCKET, {
                public: false, // Keep backups private
                fileSizeLimit: 10 * 1024 * 1024, // 10MB limit
            });
        }

        // Upload new backup file (Never overwrites because of timestamped filename)
        const { error: uploadError } = await supabaseAdmin.storage
            .from(BUCKET)
            .upload(storagePath, backupContent, {
                contentType: 'application/json',
                upsert: false // Defensive: ensure we don't overwrite if timestamps collide
            });

        if (uploadError) {
            throw new Error(`Storage upload failed: ${uploadError.message}`);
        }

        console.log(`✅ Automated blog backup successful: ${storagePath}`);
        return { success: true, filename, location: 'Supabase Storage' };

    } catch (err: any) {
        // Rule: If backup fails, do NOT break admin operation. Log error only.
        console.error('⚠️ Blog backup system error (Non-blocking):', err.message);
        return { success: false, error: err.message };
    }
}
