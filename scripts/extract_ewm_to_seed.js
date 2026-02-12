
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

async function extractEwmData() {
    console.log('Fetching SAP EWM course data...');
    const { data: course, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'sap-ewm')
        .single();

    if (error) {
        console.error('Error fetching course:', error);
        return;
    }

    if (!course) {
        console.error('Course sap-ewm not found');
        return;
    }

    console.log('Data fetched successfully. Generating SQL...');

    // Helper to escape single quotes for SQL
    const escapeSql = (str) => {
        if (str === null || str === undefined) return 'NULL';
        return `'${str.replace(/'/g, "''")}'`;
    };

    // Helper for JSON fields
    const formatJson = (json) => {
        if (json === null || json === undefined) return 'NULL';
        // If it's already a string, try to parse it first to ensure valid JSON, then stringify
        let obj = json;
        if (typeof json === 'string') {
            try {
                obj = JSON.parse(json);
            } catch (e) {
                console.warn('Warning: Could not parse JSON string, using as is.');
            }
        }
        return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
    };

    const sqlContent = `-- Restore SAP EWM Course Data (Generated from DB state)
UPDATE courses
SET
    title = ${escapeSql(course.title)},
    meta_title = ${escapeSql(course.meta_title)},
    meta_description = ${escapeSql(course.meta_description)},
    meta_keywords = ${escapeSql(course.meta_keywords)},
    hero_heading = ${escapeSql(course.hero_heading)},
    hero_subheading = ${escapeSql(course.hero_subheading)},
    description = ${escapeSql(course.description)},
    features = ${formatJson(course.features)},
    sections = ${formatJson(course.sections)},
    curriculum = ${formatJson(course.curriculum)},
    faqs = ${formatJson(course.faqs)},
    updated_at = NOW()
WHERE id = 'sap-ewm';
`;

    const outputPath = path.join(__dirname, 'restore_ewm_current_db_state.sql');
    fs.writeFileSync(outputPath, sqlContent);

    console.log(`SQL seed script saved to: ${outputPath}`);
}

extractEwmData();
