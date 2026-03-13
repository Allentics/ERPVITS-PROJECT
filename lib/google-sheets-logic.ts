export async function submitToGoogleSheetsLogic(formData: any) {
    const scriptUrlBase = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxgG0blfi1o34OS6kuy4_byR5zOqW0b6BLb1N_Bx-g1FSeY12OZ-oZvhHpINdGC_23iTw/exec';
    const scriptUrl = `${scriptUrlBase}?sheet=erpvits&tab=erpvits`;

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const name = `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
    const email = formData.email || '';
    const phone = formData.phone || '';
    const course = formData.course || '';
    const countryCode = formData.countryCode || '91';

    const data = {
        sheet: 'erpvits',
        tab: 'erpvits',
        sheetName: 'erpvits',
        SheetName: 'erpvits',
        SHEET: 'erpvits',
        Timestamp: timestamp,
        Name: name,
        Email: email,
        Country_Code: countryCode,
        Phone: phone,
        Course: course,
        timestamp: timestamp,
        name: name,
        email: email,
        country_code: countryCode,
        countryCode: countryCode,
        phone: phone,
        course: course
    };

    const formBody = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
        formBody.append(key, value as string);
    });

    const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
    });

    if (!response.ok) {
        throw new Error(`Failed to submit to Google Sheets: ${response.status}`);
    }

    return await response.text();
}

export async function submitCurriculumDownloadLogic(formData: any) {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxgG0blfi1o34OS6kuy4_byR5zOqW0b6BLb1N_Bx-g1FSeY12OZ-oZvhHpINdGC_23iTw/exec';

    const phoneWithCode = formData.phone || '';
    const countryCode = formData.countryCode || (phoneWithCode.includes('+') ? phoneWithCode.split(' ')[0].replace('+', '') : '91');
    const phoneNumber = phoneWithCode.includes('+') ? phoneWithCode.split(' ').slice(1).join(' ') : phoneWithCode;

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const name = formData.name || '';
    const email = formData.email || '';
    const course = formData.course || formData.courseName || '';

    const data = {
        sheet: 'erpvits',
        tab: 'erpvits',
        sheetName: 'erpvits',
        SheetName: 'erpvits',
        SHEET: 'erpvits',
        Timestamp: timestamp,
        Name: name,
        Email: email,
        Country_Code: countryCode,
        Phone: phoneNumber,
        Course: course,
        timestamp: timestamp,
        name: name,
        email: email,
        country_code: countryCode,
        countryCode: countryCode,
        phone: phoneNumber,
        course: course
    };

    const formBody = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
        formBody.append(key, value as string);
    });

    const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
    });

    if (!response.ok) {
        throw new Error(`Failed to submit to Google Sheets: ${response.status}`);
    }

    return await response.text();
}
