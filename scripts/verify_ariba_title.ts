
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTitle() {
    const { data: course, error } = await supabase
        .from('courses')
        .select('sections')
        .eq('id', 'ariba')
        .single();

    if (course && course.sections) {
        const sections = typeof course.sections === 'string' ? JSON.parse(course.sections) : course.sections;
        const cwi = sections.find((s: any) => s.type === 'content_with_image');
        if (cwi) {
            console.log('Title:', cwi.title);
            console.log('Subtitle:', cwi.subtitle);
            console.log('Items:', cwi.items.length);
        }
    }
}

checkTitle().catch(console.error);
