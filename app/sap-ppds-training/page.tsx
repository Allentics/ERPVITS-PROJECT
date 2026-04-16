import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';

// Revalidate every 0 seconds (Dynamic Rendering) to catch metadata updates immediately
export const revalidate = 0;


export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('sap-ppds', 'https://www.erpvits.com/sap-ppds-training/');
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'sap-ppds' })} />;
}
