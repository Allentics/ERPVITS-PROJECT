
import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { courses } from '@/lib/courseData';
import { supabase } from '@/lib/supabase';

export async function generateMetadata(): Promise<Metadata> {
    const slug = 'trm';
    const { data: course } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();
    const local = courses.find(c => c.id === 'trm');

    return {
        title: course?.meta_title || local?.metaTitle || `${course?.title || local?.title} Online Training | ERPVITS`,
        description: course?.meta_description || local?.metaDescription || `Master ${course?.title || local?.title} with ERPVITS - Live online training, real projects.`,
        alternates: {
            canonical: 'https://www.erpvits.com/sap-treasury-and-risk-management-online-training/',
        },
    };
}

export default function Page() {
    return <CoursePage params={Promise.resolve({ slug: 'sap-trm' })} />;
}
