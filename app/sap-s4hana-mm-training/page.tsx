import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('mm', 'https://www.erpvits.com/sap-s4hana-mm-training/');
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'mm' })} />;
}
