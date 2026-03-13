import { NextResponse } from 'next/server';
import { submitToGoogleSheetsLogic, submitCurriculumDownloadLogic } from '@/lib/google-sheets-logic';
import { sendSyllabusEmailLogic } from '@/lib/email-logic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, ...data } = body;

        if (type === 'curriculum') {
            await submitCurriculumDownloadLogic(data);
        } else if (type === 'syllabus-email') {
            await sendSyllabusEmailLogic(data);
        } else {
            await submitToGoogleSheetsLogic(data);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('API Contact Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
