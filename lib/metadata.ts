import { supabase } from '@/lib/supabase';
import { Metadata } from 'next';
import { courses as localCourses } from './courseData';

export async function fetchPageMetadata(path: string): Promise<Metadata> {
    const { data } = await supabase
        .from('pages')
        .select('meta_title, meta_description')
        .eq('path', path)
        .single();

    if (!data) return {};

    return {
        title: data.meta_title,
        description: data.meta_description,
    };
}

export async function fetchPageSchema(path: string): Promise<string | null> {
    const { data } = await supabase
        .from('pages')
        .select('schema_markup')
        .eq('path', path)
        .single();

    return data?.schema_markup || null;
}

// Helper to map URL slugs to Database IDs (Same as in CoursePage)
const getDbId = (slug: string) => {
    if (slug === 'sap-ariba' || slug === 'ariba') return 'ariba';
    if (slug === 'sap-abap-on-cloud' || slug === 'abap-cloud') return 'abap-cloud';
    if (slug === 'sap-fico' || slug === 'fico' || slug === 'fico-training') return 'fico';
    if (slug === 'sap-mm' || slug === 'mm' || slug === 'sap-s4hana-mm') return 'mm';
    if (slug === 'sap-tm' || slug === 'tm' || slug === 'sap-transportation-management') return 'sap-tm';
    if (slug === 'sap-ewm' || slug === 'ewm' || slug === 'sap-extended-warehouse-management') return 'sap-ewm';
    if (slug === 'sap-ibp' || slug === 'ibp' || slug === 'sap-integrated-business-planning') return 'sap-ibp';
    if (slug === 'sap-mdg' || slug === 'mdg' || slug === 'sap-master-data-governance') return 'sap-mdg';
    if (slug === 'sap-c4c' || slug === 'c4c' || slug === 'sap-c4c-technical-training' || slug === 'sap-c4c-technical-online-training' || slug === 'c4c-technical') return 'c4c-technical';
    if (slug === 'sap-trm' || slug === 'trm' || slug === 'sap-treasury-and-risk-management-online-training') return 'trm';
    return slug;
};

export async function fetchCourseMetadata(slug: string, canonicalUrl?: string): Promise<Metadata> {
    const dbId = getDbId(slug);
    const { data: course } = await supabase.from('courses').select('title, meta_title, meta_description, hero_image').eq('id', dbId).single();

    // Fallback logic for local mapping
    const local = localCourses.find(c => c.id === slug) ||
        (slug === 'sap-abap-on-cloud' || slug === 'abap-cloud' ? localCourses.find(c => c.id === 'abap-cloud') : undefined) ||
        (slug === 'sap-fico' || slug === 'fico' ? localCourses.find(c => c.id === 'fico') : undefined) ||
        (slug === 'sap-ariba' || slug === 'ariba' ? localCourses.find(c => c.id === 'ariba') : undefined) ||
        (slug === 'sap-mm' || slug === 'mm' || slug === 'sap-s4hana-mm' ? localCourses.find(c => c.id === 'mm') : undefined) ||
        (slug === 'sap-tm' || slug === 'tm' || slug === 'sap-transportation-management' ? localCourses.find(c => c.id === 'sap-tm') : undefined) ||
        (slug === 'sap-ewm' || slug === 'ewm' || slug === 'sap-extended-warehouse-management' ? localCourses.find(c => c.id === 'sap-ewm') : undefined) ||
        (slug === 'sap-ibp' || slug === 'ibp' || slug === 'sap-integrated-business-planning' ? localCourses.find(c => c.id === 'sap-ibp') : undefined) ||
        (slug === 'sap-mdg' || slug === 'mdg' || slug === 'sap-master-data-governance' ? localCourses.find(c => c.id === 'sap-mdg') : undefined) ||
        (slug === 'sap-ppds' || slug === 'ppds' || slug === 'sap-ppds-training' ? localCourses.find(c => c.id === 'ppds') : undefined) ||
        (slug === 'sap-fieldglass' || slug === 'fieldglass' ? localCourses.find(c => c.id === 'fieldglass' || c.id === 'sap-fieldglass') : undefined) ||
        (slug === 'sap-sd' || slug === 'sd' || slug === 'sap-sales-and-distribution-training' ? localCourses.find(c => c.id === 'sd') : undefined) ||
        (slug === 'sap-trm' || slug === 'trm' || slug === 'sap-treasury-and-risk-management-online-training' ? localCourses.find(c => c.id === 'trm') : undefined) ||
        (slug === 'sap-c4c' || slug === 'c4c' || slug === 'sap-c4c-technical-training' || slug === 'c4c-technical' ? localCourses.find(c => c.id === 'c4c-technical') : undefined) ||
        (slug === 'sap-cpi' || slug === 'cpi' || slug === 'sap-cpi-training' ? localCourses.find(c => c.id === 'cpi' || c.id === 'sap-cpi') : undefined) ||
        (slug === 'sap-c4c-functional' || slug === 'c4c-functional' ? localCourses.find(c => c.id === 'sap-c4c-functional') : undefined) ||
        (slug === 'sap-abap-on-hana' || slug === 'abap-hana' || slug === 'abap-on-hana' ? localCourses.find(c => c.id === 'sap-abap-on-hana') : undefined) ||
        (slug === 'python-aiml' || slug === 'sap-python-aiml' || slug === 'python-ai-ml' ? localCourses.find(c => c.id === 'python-aiml') : undefined);

    const title = course?.meta_title ?? local?.metaTitle ?? `${course?.title ?? local?.title ?? ''} Online Training | ERPVITS`;
    const description = course?.meta_description ?? local?.metaDescription ?? `Master ${course?.title ?? local?.title ?? ''} with ERPVITS - Live online training, real projects, and placement assistance.`;
    const imageUrl = course?.hero_image || local?.heroImage || '/images/logo.webp';
    const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://www.erpvits.com${imageUrl}`;
    const url = canonicalUrl ?? `https://www.erpvits.com/courses/${slug}/`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            images: [{ url: absoluteImageUrl }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [absoluteImageUrl],
        },
        alternates: {
            canonical: url,
        },
    };
}
