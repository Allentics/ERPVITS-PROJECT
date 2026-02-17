import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Curriculum from '@/components/course/Curriculum';
import FAQ from '@/components/course/FAQ';
import ComparisonTable from '@/components/home/ComparisonTable';
import SectionRenderer, { DetailedFeatures } from '@/components/course/SectionRenderer';
import { renderRichText } from '@/lib/richText';
import DetailedDemoBooking from '@/components/course/DetailedDemoBooking';
import DetailedFAQ from '@/components/course/DetailedFAQ';
import DetailedPrerequisites from '@/components/course/DetailedPrerequisites';
import DetailedTargetAudience from '@/components/course/DetailedTargetAudience';
import CourseEnrollmentCTA from '@/components/course/CourseEnrollmentCTA';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { courses, defaultFaqs, getDefaultDetailedFeatures, Section } from '@/lib/courseData';
import { getGenericPrerequisites, getGenericTargetAudience } from '@/lib/contentHelpers';
import CourseHeroActionButtons from '@/components/course/CourseHeroActionButtons';
import JsonLd from '@/components/JsonLd';

// Dynamic rendering only to avoid build OOM
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching - always fetch fresh data

// Helper to map URL slugs to Database IDs
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
    return slug;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const dbId = getDbId(slug);
    const { data: course } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', dbId).single();

    // Fallback logic for local mapping
    const local = courses.find(c => c.id === slug) ||
        (slug === 'sap-abap-on-cloud' || slug === 'abap-cloud' ? courses.find(c => c.id === 'abap-cloud') : undefined) ||
        (slug === 'sap-fico' || slug === 'fico' ? courses.find(c => c.id === 'fico') : undefined) ||
        (slug === 'sap-ariba' || slug === 'ariba' ? courses.find(c => c.id === 'ariba') : undefined) ||
        (slug === 'sap-mm' || slug === 'mm' || slug === 'sap-s4hana-mm' ? courses.find(c => c.id === 'mm') : undefined) ||
        (slug === 'sap-tm' || slug === 'tm' || slug === 'sap-transportation-management' ? courses.find(c => c.id === 'sap-tm') : undefined) ||
        (slug === 'sap-ewm' || slug === 'ewm' || slug === 'sap-extended-warehouse-management' ? courses.find(c => c.id === 'sap-ewm') : undefined) ||
        (slug === 'sap-ibp' || slug === 'ibp' || slug === 'sap-integrated-business-planning' ? courses.find(c => c.id === 'sap-ibp') : undefined) ||
        (slug === 'sap-mdg' || slug === 'mdg' || slug === 'sap-master-data-governance' ? courses.find(c => c.id === 'sap-mdg') : undefined) ||
        (slug === 'sap-ppds' || slug === 'ppds' || slug === 'sap-ppds-training' ? courses.find(c => c.id === 'ppds') : undefined) ||
        (slug === 'sap-fieldglass' || slug === 'fieldglass' ? courses.find(c => c.id === 'fieldglass' || c.id === 'sap-fieldglass') : undefined) ||
        (slug === 'sap-sd' || slug === 'sd' || slug === 'sap-sales-and-distribution-training' ? courses.find(c => c.id === 'sd') : undefined) ||
        (slug === 'sap-trm' || slug === 'trm' || slug === 'sap-treasury-and-risk-management-online-training' ? courses.find(c => c.id === 'trm') : undefined) ||
        (slug === 'sap-c4c' || slug === 'c4c' || slug === 'sap-c4c-technical-training' || slug === 'c4c-technical' ? courses.find(c => c.id === 'c4c-technical') : undefined) ||
        (slug === 'sap-cpi' || slug === 'cpi' || slug === 'sap-cpi-training' ? courses.find(c => c.id === 'cpi' || c.id === 'sap-cpi') : undefined) ||
        (slug === 'sap-c4c-functional' || slug === 'c4c-functional' ? courses.find(c => c.id === 'sap-c4c-functional') : undefined) ||
        (slug === 'sap-abap-on-hana' || slug === 'abap-hana' || slug === 'abap-on-hana' ? courses.find(c => c.id === 'sap-abap-on-hana') : undefined) ||
        (slug === 'python-aiml' || slug === 'sap-python-aiml' || slug === 'python-ai-ml' ? courses.find(c => c.id === 'python-aiml') : undefined);

    return {
        title: course?.meta_title ?? local?.metaTitle ?? `${course?.title ?? local?.title ?? ''} Online Training | ERPVITS`,
        description: course?.meta_description ?? local?.metaDescription ?? `Master ${course?.title ?? local?.title ?? ''} with ERPVITS - Live online training, real projects, and placement assistance.`,
    };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Map slugs to their correct database IDs
    const dbId = getDbId(slug);

    const { data: course } = await supabase
        .from('courses')
        .select('*')
        .eq('id', dbId)
        .single();

    // Defensive parsing for fields that might be strings due to incorrect updates
    if (course) {
        try {
            if (typeof course.sections === 'string') course.sections = JSON.parse(course.sections);
            if (typeof course.features === 'string') course.features = JSON.parse(course.features);
            if (typeof course.curriculum === 'string') course.curriculum = JSON.parse(course.curriculum);
            if (typeof course.faqs === 'string') course.faqs = JSON.parse(course.faqs);
        } catch (e) {
            console.error("Error parsing JSON fields for course:", course.id, e);
        }
    }


    const localCourse = courses.find(c => c.id === slug) ||
        (slug === 'sap-ariba' || slug === 'ariba' ? courses.find(c => c.id === 'ariba' || c.id === 'sap-ariba') : undefined) ||
        (slug === 'c4c-technical' || slug === 'sap-c4c' || slug === 'c4c' || slug === 'sap-c4c-technical-training' || slug === 'sap-c4c-technical-online-training' ? courses.find(c => c.id === 'c4c-technical') : undefined) ||
        (slug === 'sap-fieldglass' || slug === 'fieldglass' ? courses.find(c => c.id === 'fieldglass' || c.id === 'sap-fieldglass') : undefined) ||
        (slug === 'sap-mm' || slug === 'mm' || slug === 'sap-s4hana-mm' ? courses.find(c => c.id === 'mm' || c.id === 'sap-mm') : undefined) ||
        (slug === 'sap-fico' || slug === 'fico' || slug === 'fico-training' ? courses.find(c => c.id === 'fico') : undefined) ||
        (slug === 'sap-trm' || slug === 'trm' || slug === 'sap-treasury-and-risk-management-online-training' ? courses.find(c => c.id === 'trm') : undefined) ||
        (slug === 'sap-sd' || slug === 'sd' || slug === 'sap-sales-and-distribution-training' ? courses.find(c => c.id === 'sd') : undefined) ||
        (slug === 'sap-abap' || slug === 'abap' || slug === 'sap-abap-on-cloud' || slug === 'abap-cloud' || slug === 'sap-abap-training' ? courses.find(c => c.id === 'abap-cloud') : undefined) ||
        (slug === 'sap-cpi' || slug === 'cpi' || slug === 'sap-cpi-training' ? courses.find(c => c.id === 'cpi' || c.id === 'sap-cpi') : undefined) ||
        (slug === 'sap-ppds' || slug === 'ppds' || slug === 'sap-ppds-training' ? courses.find(c => c.id === 'ppds') : undefined) ||
        (slug === 'sap-tm' || slug === 'tm' || slug === 'sap-transportation-management' ? courses.find(c => c.id === 'sap-tm') : undefined) ||
        (slug === 'sap-ewm' || slug === 'ewm' || slug === 'sap-extended-warehouse-management' ? courses.find(c => c.id === 'sap-ewm') : undefined) ||
        (slug === 'sap-ibp' || slug === 'ibp' || slug === 'sap-integrated-business-planning' ? courses.find(c => c.id === 'sap-ibp') : undefined) ||
        (slug === 'sap-mdg' || slug === 'mdg' || slug === 'sap-master-data-governance' ? courses.find(c => c.id === 'sap-mdg') : undefined) ||
        (slug === 'sap-c4c-functional' || slug === 'c4c-functional' ? courses.find(c => c.id === 'sap-c4c-functional') : undefined) ||
        (slug === 'sap-abap-on-hana' || slug === 'abap-hana' || slug === 'abap-on-hana' ? courses.find(c => c.id === 'sap-abap-on-hana') : undefined) ||
        (slug === 'python-aiml' || slug === 'sap-python-aiml' || slug === 'python-ai-ml' ? courses.find(c => c.id === 'python-aiml') : undefined);
    if (!course && !localCourse) {
        notFound();
    }

    const isAriba = slug === 'sap-ariba' || slug === 'ariba';
    const isFieldglass = slug === 'sap-fieldglass' || slug === 'fieldglass';
    const isMM = slug === 'sap-mm' || slug === 'mm' || slug === 'sap-s4hana-mm';
    const isFICO = slug === 'sap-fico' || slug === 'fico' || slug === 'fico-training';
    const isTRM = slug === 'sap-trm' || slug === 'trm' || slug === 'sap-treasury-and-risk-management-online-training';
    const isSD = slug === 'sap-sd' || slug === 'sd' || slug === 'sap-sales-and-distribution-training';
    const isC4C = slug === 'sap-c4c' || slug === 'c4c' || slug === 'sap-c4c-technical-training' || slug === 'sap-c4c-technical-online-training' || slug === 'c4c-technical';
    const isABAP = slug === 'sap-abap' || slug === 'abap' || slug === 'sap-abap-on-cloud' || slug === 'abap-cloud' || slug === 'sap-abap-training';
    const isCPI = slug === 'sap-cpi' || slug === 'cpi' || slug === 'sap-cpi-training';
    const isPPDS = slug === 'sap-ppds' || slug === 'ppds' || slug === 'sap-ppds-training';
    const isTM = slug === 'sap-tm' || slug === 'tm' || slug === 'sap-transportation-management';
    const isEWM = slug === 'sap-ewm' || slug === 'ewm' || slug === 'sap-extended-warehouse-management';
    const isIBP = slug === 'sap-ibp' || slug === 'ibp' || slug === 'sap-integrated-business-planning';
    const isMDG = slug === 'sap-mdg' || slug === 'mdg' || slug === 'sap-master-data-governance';
    const isC4CFunc = slug === 'sap-c4c-functional' || slug === 'c4c-functional';
    const isABAPHana = slug === 'sap-abap-on-hana' || slug === 'abap-hana' || slug === 'abap-on-hana';
    const isPython = slug === 'python-aiml' || slug === 'sap-python-aiml' || slug === 'python-ai-ml';
    const is40Rating = isABAP || isC4C || isEWM || isTM || isMDG || isPPDS || isC4CFunc || isIBP || isABAPHana;



    // Map DB fields to component expectations if they differ (using snake_case in DB, camelCase in components)
    // Priority: DB values (CMS) > Local file values (Hardcoded) 
    const effectiveLocalCourse = localCourse;

    const mappedCourse = {
        ...effectiveLocalCourse,
        ...course,
        // Basic Info - Priority to DB (CMS)
        title: (course?.title ?? effectiveLocalCourse?.title) ?? undefined,
        heroHeading: (course?.hero_heading ?? effectiveLocalCourse?.heroHeading) ?? undefined,
        heroSubheading: (course?.hero_subheading ?? effectiveLocalCourse?.heroSubheading) ?? undefined,
        heroImage: (course?.hero_image ?? effectiveLocalCourse?.heroImage) ?? undefined,
        metaTitle: (course?.meta_title ?? effectiveLocalCourse?.metaTitle) ?? undefined,
        metaDescription: (course?.meta_description ?? effectiveLocalCourse?.metaDescription) ?? undefined,
        price: (course?.price ?? effectiveLocalCourse?.price) ?? undefined,
        duration: (course?.duration ?? effectiveLocalCourse?.duration) ?? undefined,
        syllabusUrl: ((course?.sections?.find((s: Section) => s.type === 'detailed_curriculum')?.syllabusUrl || course?.syllabus_url || effectiveLocalCourse?.syllabusUrl)) ?? undefined,

        // Content Sections - Priority: DB (CMS) > Local (Code)
        sections: ((course?.sections && course.sections.length > 0) ? course.sections : effectiveLocalCourse?.sections),
        features: ((course?.features && course.features.length > 0) ? course.features : effectiveLocalCourse?.features),
        curriculum: ((course?.curriculum && course.curriculum.length > 0) ? course.curriculum : effectiveLocalCourse?.curriculum),
        faqs: ((course?.faqs && course.faqs.length > 0) ? course.faqs : (effectiveLocalCourse?.faqs || defaultFaqs)),
    };


    return (
        <main className="bg-white">
            {/* Schema Injection */}
            {(() => {
                let schemaMarkup = "";
                if (mappedCourse.schema) {
                    if (typeof mappedCourse.schema === 'string') {
                        schemaMarkup = mappedCourse.schema;
                    } else {
                        schemaMarkup = JSON.stringify(mappedCourse.schema);
                    }
                } else {
                    schemaMarkup = JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": mappedCourse.title,
                        "description": mappedCourse.metaDescription || mappedCourse.description,
                        "provider": {
                            "@type": "Organization",
                            "name": "ERPVITS",
                            "sameAs": "https://erpvits.com"
                        }
                    });
                }

                // Clean schema: strip script tags if present (case-insensitive) - handled by dangerouslySetInnerHTML, but careful strip can be useful
                let cleanSchema = schemaMarkup;
                try {
                    const parsed = JSON.parse(schemaMarkup);
                    cleanSchema = parsed;
                } catch (e) {
                    // if it's not valid json, we might have issues
                }

                // If it's a string, we need to parse it back to object for JsonLd component
                let schemaObj = {};
                if (typeof cleanSchema === 'string') {
                    try {
                        schemaObj = JSON.parse(cleanSchema);
                    } catch (e) {
                        // fallback to basic object if string is invalid
                        schemaObj = {
                            "@context": "https://schema.org",
                            "@type": "Course",
                            "name": mappedCourse.title,
                            "description": mappedCourse.metaDescription || mappedCourse.description
                        };
                    }
                } else {
                    schemaObj = cleanSchema;
                }

                return (
                    <JsonLd data={schemaObj} />
                );
            })()}

            {/* Hero Section */}
            <div className="bg-[#F2F6FD] text-slate-900 relative overflow-hidden pt-10 lg:pt-16 pb-12 lg:pb-16">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] blur-[100px] rounded-full opacity-50 pointer-events-none ${mappedCourse.themeColor === 'purple' ? 'bg-purple-100/40' : 'bg-orange-100/40'}`}></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Content Side */}
                        <div className="lg:col-span-7 text-left">
                            {/* Heading */}
                            <h1 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
                                {mappedCourse.heroHeading ? (
                                    renderRichText(mappedCourse.heroHeading)
                                ) : (
                                    <>Transform Your Career with <span className={`text-transparent bg-clip-text bg-gradient-to-r ${mappedCourse.themeColor === 'purple' ? 'from-blue-700 to-purple-700' : 'from-orange-600 to-red-600'}`}>{mappedCourse.title}</span></>
                                )}
                            </h1>

                            {/* Subheading */}
                            <div className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                {renderRichText(mappedCourse.heroSubheading || (mappedCourse.description ? (mappedCourse.description.length > 250 ? mappedCourse.description.substring(0, 250) + "..." : mappedCourse.description) : ""))}
                            </div>



                            {/* Features/Trust Indicators */}
                            <div className="flex flex-wrap justify-start gap-x-4 md:gap-x-6 gap-y-3 text-[13px] md:text-sm font-semibold text-slate-600 mb-8">
                                {mappedCourse.heroStats && mappedCourse.heroStats.length > 0 ? (
                                    mappedCourse.heroStats.map((stat: any, i: number) => (
                                        <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                                            <svg className={`w-5 h-5 ${mappedCourse.themeColor === 'purple' ? 'text-blue-500' : 'text-orange-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            {stat.label}
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            SAP Certified Trainers
                                        </div>
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                            <svg className={`w-5 h-5 ${mappedCourse.themeColor === 'purple' ? 'text-blue-500' : 'text-orange-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                            100% Job Assistance
                                        </div>
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                            <svg className={`w-5 h-5 ${mappedCourse.themeColor === 'purple' ? 'text-purple-500' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            Lifetime Access
                                        </div>
                                    </>
                                )}
                                {mappedCourse.duration && (
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <svg className={`w-5 h-5 ${mappedCourse.themeColor === 'purple' ? 'text-blue-500' : 'text-orange-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {mappedCourse.duration}
                                    </div>
                                )}
                            </div>

                            {/* Review Ratings - Integrated into Hero */}
                            <div className="mt-4 overflow-x-auto lg:overflow-visible no-scrollbar">
                                <div className="flex flex-nowrap items-center gap-4 lg:gap-6 min-w-max lg:min-w-0">
                                    {/* Trustpilot Review Block */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900 text-xs mb-1">Trustpilot</h4>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-bold text-slate-900 text-sm leading-none">4.0</span>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className="relative w-3 h-3">
                                                            <svg className="absolute inset-0 w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <div className="absolute inset-0 overflow-hidden" style={{ width: i < 4 ? '100%' : '0%' }}>
                                                                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SiteJabber Review Block */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 shrink-0 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center p-1">
                                            <img
                                                src="/images/sitejabber-logo.png"
                                                alt="SiteJabber"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900 text-xs mb-1">SiteJabber</h4>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-bold text-slate-900 text-sm leading-none">4.5</span>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className="relative w-3 h-3">
                                                            <svg className="absolute inset-0 w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <div className="absolute inset-0 overflow-hidden" style={{ width: i < 4 ? '100%' : '50%' }}>
                                                                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Google Review Block */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900 text-sm mb-1">Google</h4>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-bold text-slate-900 text-sm leading-none">4.5</span>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className="relative w-3 h-3">
                                                            <svg className="absolute inset-0 w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <div className="absolute inset-0 overflow-hidden" style={{ width: i < 4 ? '100%' : '50%' }}>
                                                                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Overall Reviews Block */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900 text-xs text-nowrap mb-1">Overall Ratings</h4>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="font-bold text-slate-900 text-sm leading-none">
                                                        {is40Rating ? '4.0' : '4.5'}
                                                    </span>
                                                    <a href="#reviews" className="text-slate-500 hover:text-orange-500 hover:underline transition-colors font-medium text-[10px]">
                                                        ({isTRM ? '2894' : isMM ? '3018' : isSD ? '1118' : isFICO ? '1330' : isFieldglass ? '2665' : isCPI ? '885' : isC4C ? '946' : isABAP ? '421' : isEWM ? '1109' : isTM ? '945' : isMDG ? '1089' : isPPDS ? '896' : isC4CFunc ? '948' : isIBP ? '1069' : isABAPHana ? '865' : '5489'} Reviews)
                                                    </a>
                                                </div>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className="relative w-3 h-3">
                                                            <svg className="absolute inset-0 w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <div className="absolute inset-0 overflow-hidden" style={{ width: i < 4 ? '100%' : (is40Rating ? '0%' : '50%') }}>
                                                                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Side */}
                        <div className="lg:col-span-5 lg:-mt-12">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-full h-1.5 ${mappedCourse.themeColor === 'purple' ? 'bg-blue-600' : 'bg-orange-500'}`}></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6">
                                    Enquiry more about {mappedCourse.title} Training
                                </h3>
                                <ContactForm defaultCourse={mappedCourse.title} className="!space-y-4" showLabels={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16">
                {/* Main Content */}
                <div className="space-y-8">

                    {/* Main Content Area */}
                    {mappedCourse.sections && mappedCourse.sections.length > 0 ? (
                        <div id="overview" className="scroll-mt-32">
                            <SectionRenderer sections={mappedCourse.sections as Section[]} courseName={mappedCourse.title} syllabusUrl={mappedCourse.syllabusUrl} />
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <section id="overview" className="scroll-mt-32">
                                <DetailedFeatures
                                    badge="Why Choose Us"
                                    title={<span>Learn {mappedCourse.title} from Certified Experts – <span className="text-orange-500">100% Hands-On</span>, Job-Oriented Training</span>}
                                    subtitle="Expert-led learning with real-world experience and proven methodologies from actual enterprise implementations"
                                    items={getDefaultDetailedFeatures(mappedCourse.title)}
                                />
                            </section>

                            {/* Inject Prerequisites if missing from both DB and local */}
                            {!mappedCourse.sections?.some((s: Section) => s.type === 'detailed_prerequisites' || s.type === 'prerequisites') && !course && (
                                <DetailedPrerequisites items={getGenericPrerequisites(mappedCourse.title)} />
                            )}

                            {/* Inject Target Audience if missing from both DB and local */}
                            {!mappedCourse.sections?.some((s: Section) => s.type === 'detailed_target_audience' || s.type === 'target_audience') && !course && (
                                <DetailedTargetAudience items={getGenericTargetAudience(mappedCourse.title)} />
                            )}
                        </div>
                    )}


                    {/* Inject Prerequisites/Target Audience only if page has sections but missing these specific types */}
                    {mappedCourse.sections && mappedCourse.sections.length > 0 && (
                        <>
                            {!mappedCourse.sections?.some((s: Section) => s.type === 'detailed_prerequisites' || s.type === 'prerequisites') && !course && (
                                <DetailedPrerequisites items={getGenericPrerequisites(mappedCourse.title)} />
                            )}
                            {!mappedCourse.sections?.some((s: Section) => s.type === 'detailed_target_audience' || s.type === 'target_audience') && !course && (
                                <DetailedTargetAudience items={getGenericTargetAudience(mappedCourse.title)} />
                            )}
                        </>
                    )}


                    {/* Highlights Section (for local data courses that don't have it in sections) */}
                    {(!(mappedCourse.sections as Section[]) || !(mappedCourse.sections as Section[]).some((s: Section) => s.type === 'features')) && (!isAriba && !isMM && !isFICO && !isFieldglass && !isTRM && !isSD && !isC4C && !isABAP && !isCPI && !isPPDS && !isTM && !isEWM && !isIBP && !isMDG && !isC4CFunc && !isABAPHana) && mappedCourse.features && mappedCourse.features.length > 0 && (
                        <section id="why-us" className="bg-orange-50 rounded-2xl p-8 border border-orange-100 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Professionals Choose ERPVITS for {mappedCourse.title}</h2>
                            <p className="text-gray-600 mb-8">Trusted by 500+ successful SAP professionals worldwide.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {mappedCourse.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-start">
                                        <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Curriculum Section (rendered separately if not in sections) */}
                    {(!(mappedCourse.sections as Section[]) || !(mappedCourse.sections as Section[]).some((s: Section) => s.type === 'curriculum' || s.type === 'detailed_curriculum')) && mappedCourse.curriculum && mappedCourse.curriculum.length > 0 && (
                        <section id="curriculum" className="scroll-mt-32">
                            <Curriculum modules={mappedCourse.curriculum} />
                        </section>
                    )}

                    {/* Common Bottom sections (FAQ and Form) */}
                    {(!(mappedCourse.sections as Section[])?.some((s: Section) => s.type === 'detailed_demo_booking')) && (
                        <div id="enroll" className="scroll-mt-32">
                            <DetailedDemoBooking courseName={mappedCourse.title} />
                        </div>
                    )}

                    {(!(mappedCourse.sections as Section[])?.some((s: Section) => s.type === 'faq' || s.type === 'detailed_faq')) && (
                        <div id="faq" className="scroll-mt-32">
                            <DetailedFAQ items={mappedCourse.faqs} />
                        </div>
                    )}
                </div>
            </div>

            <CourseEnrollmentCTA courseTitle={mappedCourse.title} />
        </main >
    );
}
