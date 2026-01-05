'use server';

import { google } from 'googleapis';
import path from 'path';

export async function submitToGoogleSheets(formData: any) {
    try {
        // 1. Authenticate using the Service Account
        // This allows us to write to ANY sheet shared with the bot email.
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(process.cwd(), 'service-account.json'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // 2. The NEW Spreadsheet ID provided by the user
        // https://docs.google.com/spreadsheets/d/1uxfO33A_dHJNGZDxMjq_K1ZpMKSN1xgi_pBb_vMUy88/edit
        const spreadsheetId = '1uxfO33A_dHJNGZDxMjq_K1ZpMKSN1xgi_pBb_vMUy88';

        // 3. Prepare the data
        const row = [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Timestamp
            formData.firstName,
            formData.lastName,
            formData.email,
            `${formData.countryCode} ${formData.phone}`,
            formData.course,
            formData.message
        ];

        // 4. Append to the sheet
        // Note: If the sheet tab name is not 'Sheet1', this will fail. 
        // Most new sheets start with 'Sheet1'.
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:G',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [row],
            },
        });

        return { success: true };
    } catch (error: any) {
        console.error('Google Sheets API Error:', error);
        return { success: false, error: error.message };
    }
}
