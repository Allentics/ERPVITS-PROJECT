
import { NextResponse } from 'next/server';
import { backupBlogs } from '@/lib/blog-backup-logic';

/**
 * One-time manual backup trigger for all existing blogs.
 * Endpoint: /api/backup/run-full-backup
 * 
 * This endpoint can be called manually (e.g., via browser or Postman) 
 * to generate a full backup of all current blog posts into Supabase Storage.
 */
export async function GET() {
    try {
        console.log('🔄 Manual full backup requested...');

        // Use the existing, refined backup logic
        const result = await backupBlogs();

        if (result.success) {
            return NextResponse.json({
                message: 'Full blog backup completed successfully.',
                filename: result.filename,
                storage: 'Supabase backups/blogs/'
            });
        } else {
            return NextResponse.json({
                message: 'Backup failed.',
                error: result.error
            }, { status: 500 });
        }
    } catch (err: any) {
        console.error('Manual backup error:', err.message);
        return NextResponse.json({
            error: 'An unexpected error occurred during manual backup.',
            details: err.message
        }, { status: 500 });
    }
}
