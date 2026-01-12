'use server';

import { google } from 'googleapis';

export async function submitToGoogleSheets(formData: any) {
    try {
        // Authenticate using environment variables
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1uxfO33A_dHJNGZDxMjq_K1ZpMKSN1xgi_pBb_vMUy88';

        // Prepare the data to match existing sheet structure
        // Columns: Timestamp | Name | Email | Country_Code | Phone | Course
        const row = [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Timestamp
            `${formData.firstName || ''} ${formData.lastName || ''}`.trim(), // Name
            formData.email || '', // Email
            formData.countryCode || '91', // Country_Code
            formData.phone || '', // Phone
            formData.course || '' // Course
        ];

        // Append to Table1 (the main sheet)
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Table1!A:F',
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

// Function for curriculum downloads
export async function submitCurriculumDownload(formData: any) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1uxfO33A_dHJNGZDxMjq_K1ZpMKSN1xgi_pBb_vMUy88';

        // Prepare the data to match existing sheet structure
        // Columns: Timestamp | Name | Email | Country_Code | Phone | Course
        const phoneWithCode = formData.phone || '';
        const countryCode = formData.countryCode || (phoneWithCode.includes('+') ? phoneWithCode.split(' ')[0].replace('+', '') : '91');
        const phoneNumber = phoneWithCode.includes('+') ? phoneWithCode.split(' ').slice(1).join(' ') : phoneWithCode;

        const row = [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Timestamp
            formData.name || '', // Name
            formData.email || '', // Email
            countryCode, // Country_Code
            phoneNumber, // Phone
            formData.course || formData.courseName || '' // Course
        ];

        // Append to Table1 (same sheet as contact forms)
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Table1!A:F',
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
