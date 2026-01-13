import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateCoursePrices() {
    console.log('Updating course prices and durations...');

    // Import courses from courseData
    const { courses } = await import('../lib/courseData');

    let updated = 0;
    let errors = 0;

    for (const course of courses) {
        try {
            const { data, error } = await supabase
                .from('courses')
                .update({
                    price: course.price || '',
                    duration: course.duration || ''
                })
                .eq('id', course.id)
                .select();

            if (error) {
                console.error(`Error updating ${course.id}:`, error.message);
                errors++;
            } else if (!data || data.length === 0) {
                console.log(`⚠️  No course found with id: ${course.id}`);
                errors++;
            } else {
                console.log(`✓ Updated ${course.id}: price=${course.price}, duration=${course.duration}`);
                updated++;
            }
        } catch (err: any) {
            console.error(`Exception updating ${course.id}:`, err.message);
            errors++;
        }
    }

    console.log(`\n✅ Updated ${updated} courses`);
    if (errors > 0) {
        console.log(`❌ ${errors} errors`);
    }
}

updateCoursePrices()
    .then(() => {
        console.log('\nDone!');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Fatal error:', err);
        process.exit(1);
    });
