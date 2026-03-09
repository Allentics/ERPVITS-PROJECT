import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateIbpWhatsIncluded() {
    console.log('Fetching sap-ibp from Supabase...');
    const { data: dbCourse, error: fetchError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', 'sap-ibp')
        .single();

    if (fetchError) {
        console.error('Error fetching course:', fetchError.message);
        return;
    }

    if (!dbCourse) {
        console.error('Course not found');
        return;
    }

    const sections = dbCourse.sections;
    const whatsIncludedIndex = sections.findIndex((s: any) => s.type === 'whats_included');

    if (whatsIncludedIndex === -1) {
        console.error('whats_included section not found');
        return;
    }

    // Update the stats
    sections[whatsIncludedIndex].stats = [
        {
            "label": "Hours of Live Training",
            "value": "35+"
        },
        {
            "label": "Hands-On Lab Exercises",
            "value": "65+"
        },
        {
            "label": "SAP IBP Lab Access",
            "value": "24/7"
        }
    ];

    console.log('Updating Supabase...');
    const { error: updateError } = await supabase
        .from('courses')
        .update({ sections: sections })
        .eq('id', 'sap-ibp');

    if (updateError) {
        console.error('Error updating course:', updateError.message);
    } else {
        console.log('✅ Successfully updated SAP IBP stats in Supabase');
    }
}

updateIbpWhatsIncluded().catch(console.error);
