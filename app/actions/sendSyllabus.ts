'use server';

import { sendSyllabusEmailLogic } from '@/lib/email-logic';

export async function sendSyllabusEmail(params: any) {
    return await sendSyllabusEmailLogic(params);
}
