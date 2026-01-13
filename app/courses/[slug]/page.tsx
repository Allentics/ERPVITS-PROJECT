import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Curriculum from '@/components/course/Curriculum';
import FAQ from '@/components/course/FAQ';
import ComparisonTable from '@/components/home/ComparisonTable';
import SectionRenderer, { DetailedFeatures } from '@/components/course/SectionRenderer';
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

// Dynamic rendering only to avoid build OOM
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { data: course } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();

    // Fallback logic for local mapping
    const local = courses.find(c => c.id === slug) ||
        (slug === 'sap-abap-on-cloud' || slug === 'abap-cloud' ? courses.find(c => c.id === 'abap-cloud') : undefined) ||
        (slug === 'sap-fico' || slug === 'fico' ? courses.find(c => c.id === 'fico') : undefined) ||
        (slug === 'sap-ariba' || slug === 'ariba' ? courses.find(c => c.id === 'ariba') : undefined) ||
        (slug === 'sap-mm' || slug === 'mm' || slug === 'sap-s4hana-mm' ? courses.find(c => c.id === 'mm') : undefined) ||
        (slug === 'sap-tm' || slug === 'tm' || slug === 'sap-transportation-management' ? courses.find(c => c.id === 'sap-tm') : undefined) ||
        (slug === 'sap-ewm' || slug === 'ewm' || slug === 'sap-extended-warehouse-management' ? courses.find(c => c.id === 'sap-ewm') : undefined) ||
        (slug === 'sap-ibp' || slug === 'ibp' || slug === 'sap-integrated-business-planning' ? courses.find(c => c.id === 'sap-ibp') : undefined) ||
        (slug === 'sap-mdg' || slug === 'mdg' || slug === 'sap-master-data-governance' ? courses.find(c => c.id === 'sap-mdg') : undefined);

    return {
        title: course?.meta_title || local?.metaTitle || `${course?.title || local?.title} Online Training | ERPVITS`,
        description: course?.meta_description || local?.metaDescription || `Master ${course?.title || local?.title} with ERPVITS - Live online training, real projects, and placement assistance.`,
    };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const { data: course } = await supabase
        .from('courses')
        .select('*')
        .eq('id', slug)
        .single();

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

    // Map DB fields to component expectations if they differ (using snake_case in DB, camelCase in components)
    // Priority: DB values > Local file values
    const mappedCourse = {
        ...localCourse,
        ...course,
        heroHeading: (isAriba || isFieldglass || isMM || isFICO || isTRM || isSD || isC4C || isABAP || isCPI || isPPDS || isTM || isEWM || isIBP || isMDG || isC4CFunc || isABAPHana || isPython) ? localCourse?.heroHeading : (course?.hero_heading || localCourse?.heroHeading),
        heroSubheading: (isAriba || isFieldglass || isMM || isFICO || isTRM || isSD || isC4C || isABAP || isCPI || isPPDS || isTM || isEWM || isIBP || isMDG || isC4CFunc || isABAPHana || isPython) ? localCourse?.heroSubheading : (course?.hero_subheading || localCourse?.heroSubheading),
        heroImage: (isAriba || isFICO || isFieldglass || isMM || isTRM || isSD || isC4C || isABAP || isCPI || isPPDS || isTM || isEWM || isIBP || isMDG || isC4CFunc || isABAPHana || isPython) ? undefined : (localCourse?.heroImage || course?.hero_image),
        metaTitle: course?.meta_title || localCourse?.metaTitle,
        metaDescription: course?.meta_description || localCourse?.metaDescription,
        price: (course?.price && course.price.trim() !== '') ? course.price : localCourse?.price,
        duration: (course?.duration && course.duration.trim() !== '') ? course.duration : localCourse?.duration,
        sections: (isAriba || isFieldglass || isMM || isFICO || isTRM || isSD || isC4C || isABAP || isCPI || isPPDS || isTM || isEWM || isIBP || isMDG || isC4CFunc || isABAPHana || isPython) ? localCourse?.sections : ((course?.sections && course.sections.length > 0) ? course.sections : localCourse?.sections),
        features: (course?.features && course.features.length > 0) ? course.features : localCourse?.features,
        curriculum: (course?.curriculum && course.curriculum.length > 0) ? course.curriculum : localCourse?.curriculum,
        faqs: (course?.faqs && course.faqs.length > 0) ? course.faqs : (localCourse?.faqs && localCourse.faqs.length > 0 ? localCourse.faqs : defaultFaqs),
    };


    return (
        <main className="bg-white">
            {/* Schema Injection */}
            {mappedCourse.schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: mappedCourse.schema }}
                />
            )}

            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="bg-[#F2F6FD] text-slate-900 relative overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] blur-[100px] rounded-full opacity-50 pointer-events-none ${mappedCourse.themeColor === 'purple' ? 'bg-purple-100/40' : 'bg-orange-100/40'}`}></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                    {/* Premium Badge */}
                    <div className="flex justify-center mb-8">
                        <div className={`text-white text-sm font-bold px-6 py-2 rounded-full shadow-xl flex items-center gap-2 ${mappedCourse.themeColor === 'purple' ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-purple-500/20' : 'bg-gradient-to-r from-orange-500 to-red-600 shadow-orange-500/20'}`}>
                            <span className="text-yellow-200">★</span>
                            Rated #1 {mappedCourse.title} Training Program 2025
                            <span className="text-yellow-300">★</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
                        {mappedCourse.heroHeading ? (
                            mappedCourse.heroHeading
                        ) : (
                            <>Transform Your Career with <span className={`text-transparent bg-clip-text bg-gradient-to-r ${mappedCourse.themeColor === 'purple' ? 'from-blue-700 to-purple-700' : 'from-orange-600 to-red-600'}`}>{mappedCourse.title}</span></>
                        )}
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                        {mappedCourse.heroSubheading || mappedCourse.description?.substring(0, 150) + "..."}
                    </p>

                    {/* Buttons */}
                    <CourseHeroActionButtons
                        courseTitle={mappedCourse.title}
                        syllabusUrl={mappedCourse.syllabusUrl || ''}
                        themeColor={mappedCourse.themeColor}
                        enrollHref={(isAriba || isFieldglass || isMM || isFICO || isTRM || isSD || isC4C || isABAP || isTM || isEWM || isIBP || isMDG || isC4CFunc || isABAPHana) ? "#detailed-demo-booking" : "#enroll"}
                    />

                    {/* Features/Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-8 gap-y-4 text-sm font-semibold text-slate-600">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            SAP Certified Trainers
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className={`w-5 h-5 ${mappedCourse.themeColor === 'purple' ? 'text-blue-500' : 'text-orange-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            100% Job Assistance
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className={`w-5 h-5 ${mappedCourse.themeColor === 'purple' ? 'text-purple-500' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Lifetime Access
                        </div>
                        {(mappedCourse.price || mappedCourse.duration) && (
                            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
                                {mappedCourse.duration && (
                                    <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span className="font-bold text-slate-900">{mappedCourse.duration}</span>
                                    </div>
                                )}
                                {mappedCourse.price && (
                                    <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100 shadow-sm">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-3-3v3m-3 3h6m-3-3v3m-3 3h6m-3-3v3M5 12a7 7 0 1014 0 7 7 0 00-14 0z"></path></svg>
                                        <span className="font-bold text-green-700">{mappedCourse.price}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Content */}
                <div className="space-y-16">

                    {/* Main Content Area */}
                    {((mappedCourse.sections as Section[])?.some((s: Section) => s.type === 'detailed_features') || isAriba || isMM || isFICO || isFieldglass || isTRM || isSD || isC4C || isABAP || isCPI || isPPDS || isTM || isEWM || isIBP || isMDG || isC4CFunc || isABAPHana) ? (
                        <div id="overview" className="scroll-mt-32">
                            <SectionRenderer sections={mappedCourse.sections as Section[]} courseName={mappedCourse.title} />
                        </div>
                    ) : (
                        <div className="space-y-16">
                            <section id="overview" className="scroll-mt-32">
                                <DetailedFeatures
                                    badge="Why Choose Us"
                                    title={<span>Learn {mappedCourse.title} from Certified Experts – <span className="text-orange-500">100% Hands-On</span>, Job-Oriented Training</span>}
                                    subtitle="Expert-led learning with real-world experience and proven methodologies from actual enterprise implementations"
                                    items={getDefaultDetailedFeatures(mappedCourse.title)}
                                />
                            </section>

                            {/* Inject Prerequisites if missing */}
                            {!mappedCourse.sections?.some((s: any) => s.type === 'detailed_prerequisites' || s.type === 'prerequisites') && (
                                <DetailedPrerequisites items={getGenericPrerequisites(mappedCourse.title)} />
                            )}

                            {/* Inject Target Audience if missing */}
                            {!mappedCourse.sections?.some((s: any) => s.type === 'detailed_target_audience' || s.type === 'target_audience') && (
                                <DetailedTargetAudience items={getGenericTargetAudience(mappedCourse.title)} />
                            )}

                            {mappedCourse.sections && mappedCourse.sections.length > 0 && (
                                <SectionRenderer sections={mappedCourse.sections as Section[]} courseName={mappedCourse.title} />
                            )}
                        </div>
                    )}

                    {/* Check if standard flow (ariba/detailed) implies prerequisites are inside sections. If not, add them. */}
                    {((mappedCourse.sections as Section[])?.some((s: Section) => s.type === 'detailed_features') || isAriba || isMM || isFICO || isFieldglass || isTRM || isSD || isC4C || isABAP || isCPI || isPPDS || isTM || isEWM || isIBP || isMDG || isC4CFunc || isABAPHana) && (
                        <>
                            {!mappedCourse.sections?.some((s: any) => s.type === 'detailed_prerequisites' || s.type === 'prerequisites') && (
                                <DetailedPrerequisites items={getGenericPrerequisites(mappedCourse.title)} />
                            )}
                            {!mappedCourse.sections?.some((s: any) => s.type === 'detailed_target_audience' || s.type === 'target_audience') && (
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
                    {(!(mappedCourse.sections as Section[])?.some((s: Section) => s.type === 'faq' || s.type === 'detailed_faq')) && (
                        <div id="faq" className="scroll-mt-32">
                            <DetailedFAQ items={mappedCourse.faqs} />
                        </div>
                    )}

                    {(!(mappedCourse.sections as Section[])?.some((s: Section) => s.type === 'detailed_demo_booking')) && (
                        <div id="enroll" className="scroll-mt-32">
                            <DetailedDemoBooking courseName={mappedCourse.title} />
                        </div>
                    )}
                </div>
            </div>

            <CourseEnrollmentCTA />
        </main>
    );
}
