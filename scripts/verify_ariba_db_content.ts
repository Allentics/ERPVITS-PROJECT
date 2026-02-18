
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkContent() {
    const { data: course, error } = await supabase
        .from('courses')
        .select('sections')
        .eq('id', 'ariba')
        .single();

    if (error) {
        console.error('Error fetching course:', error);
        return;
    }

    if (!course) {
        console.log('Course not found');
        return;
    }

    const sections = typeof course.sections === 'string' ? JSON.parse(course.sections) : course.sections;

    // Find content_with_image section
    const cwi = sections.find((s: any) => s.type === 'content_with_image');
    if (cwi) {
        console.log('Found content_with_image section:');
        console.log(JSON.stringify(cwi, null, 2));
    } else {
        console.log('content_with_image section NOT found');
    }

    // Find detailed_career_roadmap
    const roadmap = sections.find((s: any) => s.type === 'detailed_career_roadmap');
    if (roadmap) {
        console.log('Found detailed_career_roadmap section:');
        console.log('alumniCount:', roadmap.alumniCount);
    } else {
        console.log('detailed_career_roadmap section NOT found');
    }
}

checkContent().catch(console.error);
