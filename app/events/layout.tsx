import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SAP Training Events & Webinars | ERPVITS',
    description: 'Register for upcoming SAP training events, live webinars, and workshops hosted by ERPVITS experts. Stay updated on the latest SAP learning opportunities.',
    alternates: {
        canonical: 'https://www.erpvits.com/events',
    },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
