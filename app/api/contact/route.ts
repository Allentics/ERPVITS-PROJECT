import { NextResponse } from 'next/server';
import { submitToGoogleSheetsLogic, submitCurriculumDownloadLogic } from '@/lib/google-sheets-logic';
import { sendSyllabusEmailLogic, sendContactAutoReplyLogic, sendAdminNotificationLogic } from '@/lib/email-logic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, ...data } = body;
        const name = data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim();
        const courseTitle = data.course || data.courseTitle || 'Course';

        // 1. Log to Google Sheets (Data preservation)
        if (type === 'curriculum') {
            await submitCurriculumDownloadLogic(data);
        } else {
            await submitToGoogleSheetsLogic(data);
        }

        // 2. Send Emails from Next.js (Centralized Identity: vaishnavi.allentics@gmail.com)
        // This ensures the sender is always correct regardless of GAS settings
        if (type === 'syllabus-email' || (type === 'curriculum' && data.pdfUrl)) {
            await sendSyllabusEmailLogic({
                email: data.email,
                name: name,
                courseTitle: courseTitle,
                pdfUrl: data.pdfUrl
            });
        } else {
            // For general contact, send a generic thank you auto-reply
            await sendContactAutoReplyLogic({
                email: data.email,
                name: name,
                course: courseTitle
            });
        }

        // 3. Notify Admin (Vaishnavi) of the new lead
        await sendAdminNotificationLogic({
            ...data,
            name: name,
            course: courseTitle,
            type: type || 'Contact Form'
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('API Contact Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}


