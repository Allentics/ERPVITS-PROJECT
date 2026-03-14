'use server';

// HMR Refresh
import { submitToGoogleSheetsLogic, submitCurriculumDownloadLogic } from '@/lib/google-sheets-logic';

export async function submitToGoogleSheets(formData: any) {
    return await submitToGoogleSheetsLogic(formData);
}

export async function submitCurriculumDownload(formData: any) {
    return await submitCurriculumDownloadLogic(formData);
}
