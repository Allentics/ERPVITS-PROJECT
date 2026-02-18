
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function syncDbToLocal() {
    console.log('Fetching latest course data from Supabase...');

    const { data: dbCourses, error } = await supabase
        .from('courses')
        .select('*');

    if (error) {
        console.error('Error fetching from Supabase:', error.message);
        return;
    }

    console.log(`Found ${dbCourses.length} courses in database.`);

    // 1. Update courses.json
    const coursesJsonPath = path.resolve(process.cwd(), 'courses.json');
    let localCoursesJson = JSON.parse(fs.readFileSync(coursesJsonPath, 'utf8'));

    let updatedCount = 0;

    const newJson = localCoursesJson.map((localCourse: any) => {
        const dbCourse = dbCourses.find(c => c.id === localCourse.id);
        if (dbCourse) {
            updatedCount++;
            return {
                ...localCourse,
                title: dbCourse.title,
                category: dbCourse.category,
                price: dbCourse.price,
                duration: dbCourse.duration,
                description: dbCourse.description,
                metaTitle: dbCourse.meta_title,
                metaDescription: dbCourse.meta_description
            };
        }
        return localCourse;
    });

    fs.writeFileSync(coursesJsonPath, JSON.stringify(newJson, null, 2));
    console.log(`Updated ${updatedCount} courses in courses.json`);

    console.log('\nNOTE: Detailed sections (roadmap, curriculum, etc.) are complex to sync back into .tsx files automatically.');
    console.log('To make a specific course permanent, you should copy its "sections" from the DB into the respective lib/XXXContent.tsx file.');

    // Optional: Log the sections for easy copy-pasting if requested
    const targetId = process.argv[2];
    if (targetId) {
        const target = dbCourses.find(c => c.id === targetId);
        if (target) {
            console.log(`\n--- LATEST SECTIONS FOR ${targetId} ---`);
            console.log(JSON.stringify(target.sections, null, 2));
        }
    }
}

syncDbToLocal().catch(console.error);
