import CoursePage from '../courses/[slug]/page';
import { Metadata } from 'next';
import { fetchCourseMetadata } from '@/lib/metadata';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
    return fetchCourseMetadata('ariba', 'https://www.erpvits.com/sap-ariba-training/');
}

// Optimization: Lightweight skeleton to improve TTFB and visual stability
const CourseSkeleton = () => (
    <div className="bg-white min-h-screen">
        <div className="h-[450px] bg-slate-50 animate-pulse border-b border-slate-100" />
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="h-12 bg-slate-100 rounded-lg w-3/4 mb-6 animate-pulse" />
            <div className="h-4 bg-slate-50 rounded-lg w-1/2 mb-12 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-40 bg-slate-50 rounded-xl animate-pulse" />
                <div className="h-40 bg-slate-50 rounded-xl animate-pulse" />
                <div className="h-40 bg-slate-50 rounded-xl animate-pulse" />
            </div>
        </div>
    </div>
);

export default function Page() {
    return (
        <>
            {/* Surgical Optimization: Inline Above-the-Fold Styles for LCP fix on Mobile */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 767px) {
                    .hero-course-inline { 
                        background: #F2F6FD !important; 
                        padding-top: 2.5rem !important; 
                        padding-bottom: 3rem !important; 
                        min-height: 400px;
                    }
                    .course-h1-inline { 
                        font-size: 1.5rem !important; 
                        line-height: 1.25 !important; 
                        font-weight: 800 !important; 
                        color: #0F172A !important; 
                        margin-bottom: 2rem !important; 
                        display: block !important;
                    }
                }
            `}} />

            <Suspense fallback={<CourseSkeleton />}>
                {/* Optimization: Static object params allows for pre-rendering instead of dynamic Promise.resolve */}
                <CoursePage isCustomProxy params={{ slug: 'ariba' } as any} />
            </Suspense>
        </>
    );
}
