
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

const updateFieldglassWhatsIncluded = async () => {
    const idsToUpdate = ['fieldglass', 'sap-fieldglass'];

    // Check which IDs exist
    const { data: courses, error: fetchError } = await supabase
        .from('courses')
        .select('*')
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

    const newWhatsIncludedContent = {
        type: 'whats_included',
        title: "What's Included in the SAP Fieldglass Training – Complete Learning Package",
        description: "A complete SAP Fieldglass online training program that includes live expert sessions, real VMS projects, practical labs, mock interviews, and career guidance. This helps to position you as a job-ready SAP Fieldglass consultant.",
        items: [
            {
                title: "Live Interactive Classes",
                description: "35+ hours of instructor-led sessions via live video conferencing with real-time Q&A and interactive discussions for 8–10 weeks on the topic of contingent workforce management."
            },
            {
                title: "Real-World Projects",
                description: "Work on projects inspired by Fortune 500 companies that cover contingent worker onboarding, vendor management, SOW project setup, invoicing automation, and S/4HANA integration."
            },
            {
                title: "Hands-On Lab Environment",
                description: "SAP VMS Fieldglass Systems ensures that you will be able to onboard workers into SAP Fieldglass, configure vendors, process SOW workflows, process timesheets, manage invoices and create analytics dashboards."
            },
            {
                title: "Certification Exam Prep",
                description: "ERPVITS prepares you for the SAP certified application associate exam for Fieldglass services and external workforce management. You will get dedicated study guides, practice exams, and bootcamp sessions."
            },
            {
                title: "Resume & Interview Coaching",
                description: "Get personalized VMS tailored resume optimization, mock consulting interviews and SAP Fieldglass technical interview preparation guidance."
            },
            {
                title: "Complete Study Materials",
                description: "Access interview question banks, SAP certified vertical Fieldglass documentation links, PDF's, presentations, VMS configuration checklists and VMS documentation."
            },
            {
                title: "Lifetime Recording Access",
                description: "You will obtain lifetime access to the recorded, transcribed and indexed sessions. You will be able to revise the materials on contingent workforce topics, at your convenience."
            },
            {
                title: "Expert Q&A Sessions",
                description: "Participate in the weekly Expert Q&A Session on VMS and Fieldglass to get guided mentorship on your career in contingent workforce consulting."
            }
        ],
        stats: [
            { value: "35+", label: "Hours of Live Training", color: "orange" },
            { value: "40+", label: "Hands-On Lab Exercises", color: "orange" },
            { value: "24/7", label: "SAP Fieldglass Lab Access", color: "orange" }
        ],
        // Use default map in Component for features or pass as items
        features: [
            {
                title: "Live Interactive Classes",
                description: "35+ hours of instructor-led sessions via live video conferencing with real-time Q&A and interactive discussions for 8–10 weeks on the topic of contingent workforce management."
            },
            {
                title: "Real-World Projects",
                description: "Work on projects inspired by Fortune 500 companies that cover contingent worker onboarding, vendor management, SOW project setup, invoicing automation, and S/4HANA integration."
            },
            {
                title: "Hands-On Lab Environment",
                description: "SAP VMS Fieldglass Systems ensures that you will be able to onboard workers into SAP Fieldglass, configure vendors, process SOW workflows, process timesheets, manage invoices and create analytics dashboards."
            },
            {
                title: "Certification Exam Prep",
                description: "ERPVITS prepares you for the SAP certified application associate exam for Fieldglass services and external workforce management. You will get dedicated study guides, practice exams, and bootcamp sessions."
            },
            {
                title: "Resume & Interview Coaching",
                description: "Get personalized VMS tailored resume optimization, mock consulting interviews and SAP Fieldglass technical interview preparation guidance."
            },
            {
                title: "Complete Study Materials",
                description: "Access interview question banks, SAP certified vertical Fieldglass documentation links, PDF's, presentations, VMS configuration checklists and VMS documentation."
            },
            {
                title: "Lifetime Recording Access",
                description: "You will obtain lifetime access to the recorded, transcribed and indexed sessions. You will be able to revise the materials on contingent workforce topics, at your convenience."
            },
            {
                title: "Expert Q&A Sessions",
                description: "Participate in the weekly Expert Q&A Session on VMS and Fieldglass to get guided mentorship on your career in contingent workforce consulting."
            }
        ]
    };

    for (const course of courses) {
        let sections = course.sections;
        if (typeof sections === 'string') {
            try {
                sections = JSON.parse(sections);
            } catch (e) {
                console.error(`Failed to parse sections for course ${course.id}`, e);
                continue;
            }
        }

        if (!Array.isArray(sections)) {
            console.error(`Sections is not an array for course ${course.id}`);
            continue;
        }

        // We want to insert this NEW section AFTER the 'content_with_image' section (Why Professionals Choose...).
        // Or if detailed_features is the first section, maybe it is the second?
        // Let's find index of 'content_with_image'
        const cwIndex = sections.findIndex((s: any) => s.type === 'content_with_image');

        // Also check if we already have this 'whats_included' section to avoid duplicates
        const existingWIIndex = sections.findIndex((s: any) => s.type === 'whats_included');

        if (existingWIIndex !== -1) {
            // Update existing
            sections[existingWIIndex] = newWhatsIncludedContent;
            console.log(`Updated existing whats_included for course ${course.id}`);
        } else if (cwIndex !== -1) {
            // Insert after content_with_image
            sections.splice(cwIndex + 1, 0, newWhatsIncludedContent);
            console.log(`Inserted whats_included after content_with_image for course ${course.id}`);
        } else {
            // Append if not found
            // Try to find the first detailed_features and put it after that?
            const dfIndex = sections.findIndex((s: any) => s.type === 'detailed_features');
            if (dfIndex !== -1) {
                sections.splice(dfIndex + 1, 0, newWhatsIncludedContent);
                console.log(`Inserted whats_included after detailed_features for course ${course.id}`);
            } else {
                sections.push(newWhatsIncludedContent);
                console.log(`Appended whats_included for course ${course.id}`);
            }
        }

        const { error } = await supabase
            .from('courses')
            .update({
                sections: sections
            })
            .eq('id', course.id);

        if (error) {
            console.error(`Error updating course ${course.id}:`, error);
        } else {
            console.log(`Successfully updated sections for course ${course.id}`);
        }
    }
};

updateFieldglassWhatsIncluded();
