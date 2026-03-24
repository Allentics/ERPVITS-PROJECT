import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('fico', 'https://www.erpvits.com/sap-fico-course/');
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'fico' })} />;
}
