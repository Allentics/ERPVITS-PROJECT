
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// We need to read tmContent.tsx to get the data, but it's a TS file with imports.
// Instead of complex parsing, I will just hardcode the heroHeading update which is the request.
// Or even better, I'll update it to use the new gradient format directly.

const courseId = 'sap-tm';
const heroHeading = "Transform Your Logistics Career with the <gradient>#1 SAP TM Online Training Program</gradient>";

// We can also update other fields if we really want to sync full content, but the user specifically asked for "restore tm page hero heading".
// Syncing everything from a TS file without executing it is hard in a JS script without tools.
// So I will just patch the hero_heading.

async function syncCourse() {
    console.log(`Syncing course: ${courseId}`);

    const { error } = await supabase
        .from('courses')
        .update({
            hero_heading: heroHeading
        })
        .eq('id', courseId);

    if (error) {
        console.error('Error updating course:', error);
    } else {
        console.log('Successfully updated course hero heading!');
    }
}

syncCourse();
