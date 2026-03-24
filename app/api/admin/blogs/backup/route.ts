
import { NextResponse } from 'next/server';
import { backupBlogs } from '@/lib/blog-backup-logic';

export async function POST() {
    try {
        // Trigger the backup after a successful admin operation
        const result = await backupBlogs();
        return NextResponse.json(result);
    } catch (err: any) {
        // Rule 9: If backup fails, do NOT break admin operation
        console.error('API Backup Route failed:', err.message);
        return NextResponse.json({ success: false, error: err.message });
    }
}
