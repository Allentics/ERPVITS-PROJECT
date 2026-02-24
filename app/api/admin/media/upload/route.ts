import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Uses SERVICE ROLE KEY (server-only) so it can create buckets and bypass RLS
const getAdminClient = () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceKey) {
        throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment variables.');
    }

    return createClient(url, serviceKey, {
        auth: { persistSession: false },
    });
};

const BUCKET = 'media-library';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function ensureBucketExists(supabaseAdmin: any) {
    try {
        const { data: bucket } = await supabaseAdmin.storage.getBucket(BUCKET);
        if (!bucket) {
            await supabaseAdmin.storage.createBucket(BUCKET, {
                public: true,
                fileSizeLimit: 5 * 1024 * 1024, // 5MB
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
            });
        }
    } catch {
        // Bucket might already exist — attempt creation anyway
        try {
            await supabaseAdmin.storage.createBucket(BUCKET, {
                public: true,
                fileSizeLimit: 5 * 1024 * 1024,
                allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
            });
        } catch {
            // Already exists — proceed
        }
    }
}

export async function POST(request: NextRequest) {
    try {
        const supabaseAdmin = getAdminClient();

        const formData = await request.formData();
        const file = formData.get('file') as File | null;
        const folder = (formData.get('folder') as string) || 'general';

        if (!file) {
            return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
        }

        // Validate type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json({ error: 'Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG' }, { status: 400 });
        }

        // Validate size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: 'File too large. Max size is 5MB.' }, { status: 400 });
        }

        // Ensure bucket exists (auto-create if not)
        await ensureBucketExists(supabaseAdmin);

        // Build sanitised filename with timestamp
        const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
        const base = file.name
            .replace(/\.[^/.]+$/, '')
            .replace(/[^a-z0-9]/gi, '-')
            .toLowerCase()
            .slice(0, 60);
        const fileName = `${base}-${Date.now()}.${ext}`;
        const storagePath = `${folder}/${fileName}`;

        // Convert File → ArrayBuffer → Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const { error: uploadError } = await supabaseAdmin.storage
            .from(BUCKET)
            .upload(storagePath, buffer, {
                contentType: file.type,
                cacheControl: '3600',
                upsert: false,
            });

        if (uploadError) {
            return NextResponse.json({ error: uploadError.message }, { status: 500 });
        }

        const { data: urlData } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(storagePath);

        return NextResponse.json({
            success: true,
            path: storagePath,
            url: urlData.publicUrl,
            name: fileName,
            folder,
        });
    } catch (err: any) {
        console.error('[Media Upload Error]', err);
        return NextResponse.json({ error: err.message || 'Upload failed.' }, { status: 500 });
    }
}
