import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const BUCKET = 'media-library';

export async function POST(request: NextRequest) {
    try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!url || !serviceKey) {
            return NextResponse.json({ error: 'Server configuration error: missing Supabase keys.' }, { status: 500 });
        }

        const supabaseAdmin = createClient(url, serviceKey, { auth: { persistSession: false } });

        const { path } = await request.json();
        if (!path) {
            return NextResponse.json({ error: 'No path provided.' }, { status: 400 });
        }

        const { error } = await supabaseAdmin.storage.from(BUCKET).remove([path]);
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('[Media Delete Error]', err);
        return NextResponse.json({ error: err.message || 'Delete failed.' }, { status: 500 });
    }
}
