
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get('path');

    if (path) {
        revalidatePath(path);
        return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    return NextResponse.json({
        revalidated: false,
        now: Date.now(),
        message: 'Missing path to revalidate',
    });
}

// Support POST for better security/conventions if needed
export async function POST(request: NextRequest) {
    try {
        const { path } = await request.json();
        if (path) {
            revalidatePath(path);
            // Also revalidate the parent list
            if (path.startsWith('/blog/')) {
                revalidatePath('/blogs');
            }
            return NextResponse.json({ revalidated: true, now: Date.now() });
        }
    } catch (e) {
        return NextResponse.json({ revalidated: false, error: 'Invalid body' }, { status: 400 });
    }

    return NextResponse.json({
        revalidated: false,
        message: 'Missing path to revalidate',
    }, { status: 400 });
}
