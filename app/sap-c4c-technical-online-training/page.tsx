import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';

// Revalidate every 30 minutes to catch metadata updates from Admin Dashboard
export const revalidate = 1800;


export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('c4c-technical', 'https://www.erpvits.com/sap-c4c-technical-online-training/');
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'c4c-technical' })} />;
}
