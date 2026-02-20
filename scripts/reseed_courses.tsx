
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Import the merged courses from the app's own data file
// This ensures we sync exactly what the app sees
import { courses } from '../lib/courseData';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Recursively converts React elements (JSX) to static HTML strings
 */
function serialize(obj: any): any {
    if (React.isValidElement(obj)) {
        try {
            return renderToStaticMarkup(obj);
        } catch (e) {
            console.error('Error rendering JSX:', e);
            return obj;
        }
    }
    if (Array.isArray(obj)) {
        return obj.map(serialize);
    }
    if (typeof obj === 'object' && obj !== null) {
        const newObj: any = {};
        for (const key in obj) {
            newObj[key] = serialize(obj[key]);
        }
        return newObj;
    }
    return obj;
}

async function reseedCourses() {
    console.log('Starting Proper Reseed of Courses to Supabase...');
    console.log(`Found ${courses.length} courses to process.`);

    for (const course of courses) {
        console.log(`\n--- Processing Course: ${course.id} (${course.title}) ---`);

        try {
            // Serialize to handle any JSX in heroHeading, etc.
            const s = serialize(course);

            // Filter out specific sections if needed (per user request)
            if (s.id === 'ppds' && s.sections) {
                s.sections = s.sections.filter((section: any) =>
                    section.title !== "Download the Most Asked SAP PPDS Interview Questions"
                );
            }

            // Globally move 'detailed_upcoming_batches' before 'detailed_testimonials'
            if (s.sections && Array.isArray(s.sections)) {
                const testimonialsIndex = s.sections.findIndex((sec: any) => sec.type === 'detailed_testimonials');
                const batchesIndex = s.sections.findIndex((sec: any) => sec.type === 'detailed_upcoming_batches');

                if (testimonialsIndex !== -1 && batchesIndex !== -1 && batchesIndex > testimonialsIndex) {
                    const [batchesSection] = s.sections.splice(batchesIndex, 1);
                    s.sections.splice(testimonialsIndex, 0, batchesSection);
                }

                // Globally move 'detailed_demo_booking' before 'detailed_faq' or 'faq'
                const faqIndex = s.sections.findIndex((sec: any) => sec.type === 'detailed_faq' || sec.type === 'faq');
                const demoIndex = s.sections.findIndex((sec: any) => sec.type === 'detailed_demo_booking');

                if (faqIndex !== -1 && demoIndex !== -1 && demoIndex > faqIndex) {
                    const [demoSection] = s.sections.splice(demoIndex, 1);
                    s.sections.splice(faqIndex, 0, demoSection);
                }

            }

            const payload: any = {
                title: s.title,
                category: s.category || null,
                price: s.price || null,
                duration: s.duration || null,
                hero_heading: s.heroHeading || null,
                hero_subheading: s.heroSubheading || null,
                hero_image: s.heroImage || null,
                description: s.description || null,
                meta_title: s.metaTitle || null,
                meta_description: s.metaDescription || null,
                features: s.features || [],
                sections: s.sections || [],
                curriculum: s.curriculum || [],
                faqs: s.faqs || [],
                updated_at: new Date().toISOString()
            };

            // Remove nulls to avoid overwriting existing data if field is missing in code
            Object.keys(payload).forEach(key => {
                if (payload[key] === null) {
                    delete payload[key];
                }
            });

            // Use upsert with ignoreDuplicates to ensure we do NOT overwrite admin-modified data
            // This satisfies the requirement: "Seed should only insert missing default records."
            const { error } = await supabase
                .from('courses')
                .upsert(payload, { onConflict: 'id', ignoreDuplicates: true });

            if (error) {
                console.error(`Error updating ${s.id}:`, error.message);
            } else {
                console.log(`Successfully reseeded ${s.id}`);
            }

        } catch (err) {
            console.error(`Failed to process ${course.id}:`, err);
        }
    }

    console.log('\nReseed completed successfully.');
}

reseedCourses().catch(console.error);
