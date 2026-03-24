import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('python-aiml', 'https://www.erpvits.com/ai-and-machine-learning-with-python/');
}

export default function Page() {
    return <CoursePage isCustomProxy params={Promise.resolve({ slug: 'python-aiml' })} />;
}
