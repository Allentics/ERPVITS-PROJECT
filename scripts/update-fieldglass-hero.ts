
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env from root .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const updateFieldglass = async () => {
    const idsToUpdate = ['fieldglass', 'sap-fieldglass'];

    // Check which IDs exist
    const { data: courses, error: fetchError } = await supabase
        .from('courses')
        .select('id')
        .in('id', idsToUpdate);

    if (fetchError) {
        console.error('Error fetching courses:', fetchError);
        return;
    }

    if (!courses || courses.length === 0) {
        console.log('No Fieldglass courses found in DB.');
        return;
    }

    console.log('Found courses:', courses.map(c => c.id));

    const heroHeading = "Become a Leader in Managing a Contingent Workforce with SAP Fieldglass Training";
    const heroSubheading = "This SAP Fieldglass training course is specifically tailored for HR professionals, procurement professionals, IT consultants, work program managers, and other professionals who aspire to work in global contingent workforce and services procurement consulting. This SAP Fieldglass course combines hands-on system training, expert instruction with real-world application, and a curriculum designed to a certification.";

    for (const course of courses) {
        const { error } = await supabase
            .from('courses')
            .update({
                hero_heading: heroHeading,
                hero_subheading: heroSubheading
            })
            .eq('id', course.id);

        if (error) {
            console.error(`Error updating course ${course.id}:`, error);
        } else {
            console.log(`Successfully updated course ${course.id}`);
        }
    }
};

updateFieldglass();
