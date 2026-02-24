import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All SAP Courses | ERPVITS',
    description: 'Explore all SAP online training courses at ERPVITS — including SAP FICO, MM, SD, Ariba, TRM, ABAP, and more. Industry-leading programs with expert instructors.',
    alternates: {
        canonical: 'https://www.erpvits.com/courses',
    },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
