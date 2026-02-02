
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

const updateFieldglassFeatures = async () => {
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

    const newFeaturesContent = {
        type: 'detailed_features',
        title: "Learn SAP Fieldglass from Certified Experts – 100% Hands-On, Job-Oriented Training",
        subtitle: "Unlike passive video courses or self-paced modules, our SAP Fieldglass Online Training offers direct training from a SAP certified trainer who has over 10 years of experience in contingent workforce management. Your training is interactive in real-time where trainers explain methodologies and work with you on complex workforce problems",
        items: [
            {
                title: "Certified Instructor Expertise",
                description: "Every one of our trainers has official SAP Fieldglass certifications and has managed numerous enterprise SAP Fieldglass implementations for Fortune 500 companies. Trainers are not just teaching theories; they bring real client stories, common implementation challenges, and industry best practices from live deployments of VMS systems that manage thousands of contingent workers. Having this real-world experience is a game-changer for your first SAP Fieldglass consulting assignment.",
                icon: "UserCheck"
            },
            {
                title: "100% Hands-On Learning Methodology",
                description: "Conventional training teaches Fieldglass System concepts through slide decks and classroom training. Our SAP Fieldglass Training does a lot more. Each of the training sessions has live demonstration and training using SAP Fieldglass systems and afterwards you are given real hands-on Fieldglass system training/labs to complete the exercises. At the end of the course, you will have configured and onboarded worker onboarding workflows, created and managed SOW project structures, handled contingent worker profile management, invoice processing, and risk analytic execution. All of these will be completed on live systems.",
                icon: "Laptop"
            },
            {
                title: "Job-Oriented Curriculum Design",
                description: "The course curriculum is designed to fit the real-world skills, tasks, responsibilities, and problem-solving challenges you will encounter in the field as an SAP Fieldglass consultant. Whether you are deploying processes for contingent workforce, configuring vendor portal, streamlined automation for invoicing, or compliance workflows, this training will provide you with actionable clarity that will help you.",
                icon: "Briefcase"
            },
            {
                title: "Interactive Q&A Sessions",
                description: "In addition to the primary teaching sessions, you have interactive Q&A sessions, as well as live office hours, during which you can post questions, receive clarifications on the more intricate VMS elements, and obtain guidance that is customized to your individual learning velocity and career aspirations.",
                icon: "HelpCircle"
            },
            {
                title: "Flexible Batch Timings",
                description: "Understanding that numerous professionals balance a job, a family, and studies, we provide evening sessions on the weekdays (Monday to Friday, 6 PM to 9 PM IST) and weekend classes (Saturday and Sunday). Sessions are recorded, so if you miss a live class, you can catch up asynchronously without losing continuity.",
                icon: "Clock"
            },
            {
                title: "Small Batch Sizes for Personalized Attention",
                description: "Unlike massive online courses, which may have thousands of anonymous learners, our classes are limited to 8-10 participants. This allows instructors to tailor their teaching to your particular learning and provide individual constructive attention.",
                icon: "Users"
            },
            {
                title: "Placement & Career Support",
                description: "Learning SAP Fieldglass is half the journey; for most learners, getting placed constitutes the goal of the course. Our career support team is focused on helping you construct a Fieldglass-centered resume, assists you with mock interviews, and provides you with Fieldglass interview questions based on recent hiring inquiries within the VMS and contingent workforce space. You will receive instruction on effectively framing your project experiences to make a positive impression during SAP Fieldglass job interviews.",
                icon: "TrendingUp"
            },
            {
                title: "Active Alumni Network & Community Forum",
                description: "Participate in the active and vibrant community of professionals using SAP Fieldglass. Network with professionals to gain insights and share job leads, ask questions, and create relationships that may result in referrals and partnerships in consulting for contingent work.",
                icon: "Globe"
            },
            {
                title: "Ongoing Support Post-Training",
                description: "The SAP Fieldglass course and training may mark the end of formal training, but the learning journey will not end there. For any challenge related to concept clarification, any real-world challenges related to the VMS project the participant is working on, and initial consulting work in the area, there will be instructor support for the participant for six months post training.",
                icon: "Headphones"
            }
        ],
        stats: [
            { value: "35+", label: "Hours of Live Training" },
            { value: "40+", label: "Hands-On Lab Exercises" },
            { value: "24/7", label: "SAP Fieldglass Lab Access" }
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

        // Find and replace the detailed_features section
        const index = sections.findIndex((s: any) => s.type === 'detailed_features');
        if (index !== -1) {
            sections[index] = newFeaturesContent;

            // Now update back to DB. We need to stringify it if the DB column expects JSONB but we are sending it via this client which handles it, 
            // but just to be safe with how we retrieved it. Actually Supabase JS client handles JSON automatically if the column is JSONB.
            // If the column is TEXT (which the parsing logic in page.tsx suggests it might be treated as string sometimes), we should be careful.
            // The previous code in page.tsx had defensive parsing: `if (typeof course.sections === 'string')`.
            // Let's assume standard JSON usage.

            const { error } = await supabase
                .from('courses')
                .update({
                    sections: sections
                })
                .eq('id', course.id);

            if (error) {
                console.error(`Error updating course ${course.id}:`, error);
            } else {
                console.log(`Successfully updated detailed_features for course ${course.id}`);
            }
        } else {
            console.log(`detailed_features section not found in course ${course.id}`);
        }
    }
};

updateFieldglassFeatures();
