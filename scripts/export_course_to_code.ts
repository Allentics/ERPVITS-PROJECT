
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function exportCourse() {
    const courseId = process.argv[2];
    if (!courseId) {
        console.error('Please specify a course ID (e.g., trm, fico)');
        return;
    }

    console.log(`Fetching ${courseId} from Supabase...`);
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

    if (error || !data) {
        console.error('Error fetching course:', error?.message || 'Not found');
        return;
    }

    // Prepare the content for the .tsx file
    const content = {
        title: data.title,
        heroHeading: data.hero_heading,
        heroSubheading: data.hero_subheading,
        heroImage: data.hero_image,
        description: data.description,
        metaTitle: data.meta_title,
        metaDescription: data.meta_description,
        features: data.features,
        sections: data.sections,
        curriculum: data.curriculum,
        faqs: data.faqs,
        price: data.price,
        duration: data.duration,
        category: data.category
    };

    // Save to a temporary JSON file for the user to review/merge
    const outputPath = path.resolve(process.cwd(), `temp_${courseId}_content.json`);
    fs.writeFileSync(outputPath, JSON.stringify(content, null, 2));

    console.log(`\nSuccess! The latest course data (including admin changes) has been saved to:`);
    console.log(outputPath);
    console.log(`\nYou can now copy the "sections" from this JSON file into your lib/${courseId}Content.tsx file to make them permanent.`);
}

exportCourse().catch(console.error);
