import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('sap-abap-on-hana', 'https://www.erpvits.com/sap-abap-on-hana-training/');
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'sap-abap-on-hana' })} />;
}
