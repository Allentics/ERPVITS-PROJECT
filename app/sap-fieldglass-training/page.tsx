
import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { courses } from '@/lib/courseData';
import { supabase } from '@/lib/supabase';

// Helper to get metadata directly since we know the slug
export async function generateMetadata(): Promise<Metadata> {
    const slug = 'sap-fieldglass';
    const { data: course } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();
    const local = courses.find(c => c.id === 'fieldglass' || c.id === 'sap-fieldglass');

    return {
        title: course?.meta_title || local?.metaTitle || `${course?.title || local?.title} Online Training | ERPVITS`,
        description: course?.meta_description || local?.metaDescription || `Master ${course?.title || local?.title} with ERPVITS - Live online training, real projects, and placement assistance.`,
        alternates: {
            canonical: 'https://www.erpvits.com/sap-fieldglass-training/',
        },
    };
}

export default function Page() {
    return <CoursePage params={Promise.resolve({ slug: 'sap-fieldglass' })} />;
}
