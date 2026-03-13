import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { courses } from '@/lib/courseData';
import { supabase } from '@/lib/supabase';

// Helper to get metadata directly since we know the slug
export async function generateMetadata(): Promise<Metadata> {
    const slug = 'sap-mdg';
    let courseData = null;
    try {
        const { data } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();
        courseData = data;
    } catch(e) {}
    
    const local = courses.find(c => c.id === 'sap-mdg' || c.id === 'mdg');

    return {
        title: courseData?.meta_title || local?.metaTitle || `${courseData?.title || local?.title || 'sap-mdg'} Online Training | ERPVITS`,
        description: courseData?.meta_description || local?.metaDescription || `Master ${courseData?.title || local?.title || 'sap-mdg'} with ERPVITS - Live online training, real projects, and placement assistance.`,
        alternates: {
            canonical: 'https://www.erpvits.com/sap-mdg-training/',
        },
    };
}

export default function Page() {
    return <CoursePage params={Promise.resolve({ slug: 'sap-mdg' })} />;
}
