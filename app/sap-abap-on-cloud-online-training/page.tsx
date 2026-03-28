import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';

// Revalidate every 30 minutes to catch metadata updates from Admin Dashboard
export const revalidate = 1800;


export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('abap-cloud', 'https://www.erpvits.com/sap-abap-on-cloud-online-training/');
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'abap-cloud' })} />;
}
