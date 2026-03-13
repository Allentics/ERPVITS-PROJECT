import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { courses } from '@/lib/courseData';
import { supabase } from '@/lib/supabase';

// Helper to get metadata directly since we know the slug
export async function generateMetadata(): Promise<Metadata> {
    const slug = 'sap-tm';
    let courseData = null;
    try {
        const { data } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();
        courseData = data;
    } catch(e) {}
    
    const local = courses.find(c => c.id === 'sap-tm' || c.id === 'tm');

    return {
        title: courseData?.meta_title || local?.metaTitle || `${courseData?.title || local?.title || 'sap-tm'} Online Training | ERPVITS`,
        description: courseData?.meta_description || local?.metaDescription || `Master ${courseData?.title || local?.title || 'sap-tm'} with ERPVITS - Live online training, real projects, and placement assistance.`,
        alternates: {
            canonical: 'https://www.erpvits.com/sap-tm-training/',
        },
    };
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'sap-tm' })} />;
}
