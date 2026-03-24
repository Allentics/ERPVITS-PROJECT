import { Metadata } from 'next';

import { fetchPageMetadata } from '@/lib/metadata';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    const meta = await fetchPageMetadata('/courses');
    return {
        title: 'All SAP Courses | ERPVITS',
        description: 'Explore all SAP online training courses at ERPVITS — including SAP FICO, MM, SD, Ariba, TRM, ABAP, and more.',
        ...meta,
        alternates: {
            canonical: 'https://www.erpvits.com/courses/',
        },
    };
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
