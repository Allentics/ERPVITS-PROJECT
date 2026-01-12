'use server';

export async function submitToGoogleSheets(formData: any) {
    try {
        const scriptUrlBase = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyb0yoRjzH6mJBu8PcyI-N3uwzBczE7BrciNVaTkFtsXUbPfZdgHB8T0tXNrlzftrGS1Q/exec';
        const scriptUrl = `${scriptUrlBase}?sheet=erpvits&tab=erpvits`;

        // Prepare the data
        // Prepare the data with multiple key formats to ensure script compatibility
        // The script might be looking for specific keys or matching headers dynamically
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        const name = `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
        const email = formData.email || '';
        const phone = formData.phone || '';
        const course = formData.course || '';
        const countryCode = formData.countryCode || '91';

        const data = {
            // Meta properties for script configuration
            sheet: 'Table1',
            tab: 'Table1',
            sheetName: 'Table1',
            SheetName: 'Table1',
            SHEET: 'Table1',

            // Expected Header matches (Title Case)
            Timestamp: timestamp,
            Name: name,
            Email: email,
            Country_Code: countryCode,
            Phone: phone,
            Course: course,

            // Lowercase fallbacks (Common script default)
            timestamp: timestamp,
            name: name,
            email: email,
            country_code: countryCode,
            countryCode: countryCode,
            phone: phone,
            course: course
        };

        // Prepare data as URLSearchParams (standard Form Data)
        // This is safer for Scripts that don't parse JSON body
        const formBody = new URLSearchParams();

        // Add all variations of keys to formBody
        Object.entries(data).forEach(([key, value]) => {
            formBody.append(key, value as string);
        });

        console.log('Submitting to Google Sheets (Form Data):', scriptUrl, Object.fromEntries(formBody));

        // Send to Google Apps Script as Form Data
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody.toString(),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Google Sheets response error:', response.status, errorText);
            throw new Error(`Failed to submit to Google Sheets: ${response.status}`);
        }

        const resultText = await response.text();
        console.log('Google Sheets submission success:', resultText);

        return { success: true };
    } catch (error: any) {
        console.error('Google Sheets submission error:', error);
        return { success: false, error: error.message };
    }
}

// Function for curriculum downloads
// Function for curriculum downloads
export async function submitCurriculumDownload(formData: any) {
    try {
        const scriptUrl = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyb0yoRjzH6mJBu8PcyI-N3uwzBczE7BrciNVaTkFtsXUbPfZdgHB8T0tXNrlzftrGS1Q/exec';

        const phoneWithCode = formData.phone || '';
        const countryCode = formData.countryCode || (phoneWithCode.includes('+') ? phoneWithCode.split(' ')[0].replace('+', '') : '91');
        const phoneNumber = phoneWithCode.includes('+') ? phoneWithCode.split(' ').slice(1).join(' ') : phoneWithCode;

        // Prepare the data with multiple key formats to ensure script compatibility
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        const name = formData.name || '';
        const email = formData.email || '';
        const course = formData.course || formData.courseName || '';

        const data = {
            // Meta properties for script configuration
            sheet: 'erpvits',
            tab: 'erpvits',
            sheetName: 'erpvits',
            SheetName: 'erpvits',
            SHEET: 'erpvits',

            // Expected Header matches (Title Case)
            Timestamp: timestamp,
            Name: name,
            Email: email,
            Country_Code: countryCode,
            Phone: phoneNumber,
            Course: course,

            // Lowercase fallbacks (Common script default)
            timestamp: timestamp,
            name: name,
            email: email,
            country_code: countryCode,
            countryCode: countryCode,
            phone: phoneNumber,
            course: course
        };

        // Prepare data as URLSearchParams (standard Form Data)
        const formBody = new URLSearchParams();

        // Add all variations of keys to formBody
        Object.entries(data).forEach(([key, value]) => {
            formBody.append(key, value as string);
        });

        console.log('Submitting curriculum download to Google Sheets (Form Data):', scriptUrl, Object.fromEntries(formBody));

        // Send to Google Apps Script as Form Data
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody.toString(),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Google Sheets response error:', response.status, errorText);
            throw new Error(`Failed to submit to Google Sheets: ${response.status}`);
        }

        const resultText = await response.text();
        console.log('Google Sheets submission success:', resultText);

        return { success: true };
    } catch (error: any) {
        console.error('Google Sheets submission error:', error);
        return { success: false, error: error.message };
    }
}

