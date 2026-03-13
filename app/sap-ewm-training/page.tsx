import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { courses } from '@/lib/courseData';
import { supabase } from '@/lib/supabase';

// Helper to get metadata directly since we know the slug
export async function generateMetadata(): Promise<Metadata> {
    const slug = 'sap-ewm';
    let courseData = null;
    try {
        const { data } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();
        courseData = data;
    } catch(e) {}
    
    const local = courses.find(c => c.id === 'sap-ewm' || c.id === 'ewm');

    return {
        title: courseData?.meta_title || local?.metaTitle || `${courseData?.title || local?.title || 'sap-ewm'} Online Training | ERPVITS`,
        description: courseData?.meta_description || local?.metaDescription || `Master ${courseData?.title || local?.title || 'sap-ewm'} with ERPVITS - Live online training, real projects, and placement assistance.`,
        alternates: {
            canonical: 'https://www.erpvits.com/sap-ewm-training/',
        },
    };
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'sap-ewm' })} />;
}
