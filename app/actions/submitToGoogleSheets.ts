'use server';

export async function submitToGoogleSheets(formData: any) {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyb0yoRjzH6mJBu8PcyI-N3uwzBczE7BrciNVaTkFtsXUbPfZdgHB8T0tXNrlzftrGS1Q/exec';

    try {
        const payload = new FormData();
        payload.append('Date', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
        payload.append('First Name', formData.firstName);
        payload.append('Last Name', formData.lastName);
        payload.append('Email', formData.email);
        payload.append('Phone', `${formData.countryCode} ${formData.phone}`);
        payload.append('Course', formData.course);
        payload.append('Message', formData.message);

        // Google Apps Scripts often follow redirects using fetch
        const response = await fetch(scriptUrl, {
            method: 'POST',
            body: payload,
        });

        if (!response.ok) {
            // Apps Script sometimes returns 302/redirects which fetch follows automatically, 
            // but if we get here with a 404 or 500, it failed.
            throw new Error(`Script returned ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        return { success: true, result };

    } catch (error: any) {
        console.error('Google Apps Script Error:', error);
        // Many scripts don't return valid JSON on success (just text "Success"), so JSON parse might fail.
        // If specific error needed, we can refine. For now, assume simple success if fetch worked.
        return { success: false, error: error.message };
    }
}
