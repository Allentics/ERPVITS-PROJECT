
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const tmContent = {
    id: "trm", // Wait, is it 'tm' or 'trm'? The file is tmContent, but in courseData.ts: 'tm': tmContent. 
    // In tmContent.tsx, the title is "SAP TM".
    // I need to check the ID used in courses.json or DB.
    // In lib/tmContent.tsx: it doesn't specify 'id'.
    // In courses.json, there was 'trm' (Treasury), but I missed 'tm'.
    // Let's assume 'tm' or search for it.
    // But commonly 'sap-tm' or 'tm'.
    // I will use 'sap-transportation-management' or 'tm' based on what I find.
};

// I need to be sure about the ID.
// Let's look at lib/courseData.ts mapping again.
// 'sap-tm': tmContent, 'tm': tmContent.
// The DB usually uses one ID.
// I will check what ID the user navigates to: /courses/sap-tm usually.
