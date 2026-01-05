import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Curriculum from '@/components/course/Curriculum';
import FAQ from '@/components/course/FAQ';
import ComparisonTable from '@/components/home/ComparisonTable';
import SectionRenderer, { DetailedFeatures } from '@/components/course/SectionRenderer';
import CourseEnrollmentCTA from '@/components/course/CourseEnrollmentCTA';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { courses, defaultFaqs, getDefaultDetailedFeatures, Section } from '@/lib/courseData';

// Dynamic rendering only to avoid build OOM
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { data: course } = await supabase.from('courses').select('title, meta_title, meta_description').eq('id', slug).single();
    const local = courses.find(c => c.id === slug);

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

    const localCourse = courses.find(c => c.id === slug) || (slug === 'ariba' ? courses.find(c => c.id === 'sap-ariba') : undefined);
    if (!course && !localCourse) {
        notFound();
    }

    const isAriba = slug === 'sap-ariba' || slug === 'ariba';

    // Map DB fields to component expectations if they differ (using snake_case in DB, camelCase in components)
    // Priority: DB values > Local file values
    const mappedCourse = {
        ...localCourse,
        ...course,
        heroHeading: course?.hero_heading || localCourse?.heroHeading,
        heroSubheading: course?.hero_subheading || localCourse?.heroSubheading,
        heroImage: localCourse?.heroImage || course?.hero_image,
        metaTitle: course?.meta_title || localCourse?.metaTitle,
        metaDescription: course?.meta_description || localCourse?.metaDescription,
        sections: isAriba ? localCourse?.sections : ((course?.sections && course.sections.length > 0) ? course.sections : localCourse?.sections),
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
            <div className="bg-gradient-to-r from-white via-gray-50 to-gray-200 text-slate-900 relative overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-orange-100 blur-3xl rounded-full opacity-60"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Badge */}
                            <div className="flex gap-3 mb-6">
                                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">New Batch Starting Soon</span>
                                <span className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">100% Job Oriented</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
                                {mappedCourse.heroHeading || mappedCourse.title}
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl whitespace-pre-line">
                                {mappedCourse.description ? mappedCourse.description.split('\n')[0] : `Master ${mappedCourse.title} with expert-led training.`}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#enroll" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-orange-500/40 transition-all text-center">
                                    Book Your Free Demo Today
                                </a>
                                <a href="#curriculum" className="bg-white border-2 border-slate-200 hover:border-slate-400 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-lg font-bold transition-all text-center">
                                    View Curriculum
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 mt-10 pt-8 border-t border-slate-200">
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">500+</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold">Successful Students</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">98%</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold">Placement Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold">Student Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image / Form Placeholder */}
                        <div className="hidden lg:block relative text-gray-800">
                            <div className="bg-white rounded-2xl p-2 shadow-xl border border-slate-100">
                                {mappedCourse.heroImage ? (
                                    <div className="bg-slate-50 rounded-xl overflow-hidden shadow-inner flex items-center justify-center border border-slate-100">
                                        <img src={mappedCourse.heroImage} alt={`${mappedCourse.title} Preview`} className="w-full h-auto object-contain" />
                                    </div>
                                ) : (
                                    <div className="bg-slate-50 rounded-xl h-[400px] flex items-center justify-center border-2 border-dashed border-slate-300">
                                        <span className="text-slate-400 font-bold">Course Preview Image</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Content */}
                <div className="space-y-16">

                    {/* Main Content Area */}
                    {(mappedCourse.sections?.some((s: Section) => s.type === 'detailed_features') || isAriba) ? (
                        <div id="overview" className="scroll-mt-32">
                            <SectionRenderer sections={mappedCourse.sections} />
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

                            {mappedCourse.sections && mappedCourse.sections.length > 0 && (
                                <SectionRenderer sections={mappedCourse.sections} />
                            )}
                        </div>
                    )}

                    {/* Highlights Section (for local data courses that don't have it in sections) */}
                    {(!mappedCourse.sections || !mappedCourse.sections.some((s: Section) => s.type === 'features')) && mappedCourse.features && mappedCourse.features.length > 0 && (
                        <section id="why-us" className="bg-orange-50 rounded-2xl p-8 border border-orange-100 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Professionals Choose ERPVITS for {mappedCourse.title}</h2>
                            <p className="text-gray-600 mb-8">Trusted by 500+ successful SAP professionals worldwide.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {mappedCourse.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-start">
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Curriculum Section (rendered separately if not in sections) */}
                    {(!mappedCourse.sections || !mappedCourse.sections.some((s: Section) => s.type === 'curriculum')) && mappedCourse.curriculum && mappedCourse.curriculum.length > 0 && (
                        <section id="curriculum" className="scroll-mt-32">
                            <Curriculum modules={mappedCourse.curriculum} />
                        </section>
                    )}

                    {/* Common Bottom sections (FAQ and Form) */}
                    {(!mappedCourse.sections?.some((s: Section) => s.type === 'faq')) && (
                        <div id="faq" className="scroll-mt-32">
                            <FAQ course={mappedCourse as any} />
                        </div>
                    )}

                    <section id="enroll" className="scroll-mt-32 pt-16 border-t border-gray-100">
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-blue-50">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Enroll Now or Schedule a Free Demo</h2>
                                <p className="text-gray-600 mb-10 text-lg">
                                    Fill out the form below to get the latest course brochure, fee details, and schedule for upcoming batches.
                                </p>
                            </div>
                            <ContactForm showLabels={false} className="max-w-none shadow-sm bg-white p-6 md:p-10 rounded-2xl" />
                        </div>
                    </section>
                </div>
            </div>

            <CourseEnrollmentCTA />
        </main>
    );
}
