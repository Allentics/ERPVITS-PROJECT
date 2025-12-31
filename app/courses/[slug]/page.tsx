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

    const localCourse = courses.find(c => c.id === slug);
    if (!course && !localCourse) {
        notFound();
    }

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
        sections: (course?.sections && course.sections.length > 0) ? course.sections : localCourse?.sections,
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
            <div className="bg-slate-900 text-white relative overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-orange-600/10 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Badge */}
                            <div className="flex gap-3 mb-6">
                                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">New Batch Starting Soon</span>
                                <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-white/20">100% Job Oriented</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                {mappedCourse.heroHeading || mappedCourse.title}
                            </h1>

                            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl whitespace-pre-line">
                                {mappedCourse.description ? mappedCourse.description.split('\n')[0] : `Master ${mappedCourse.title} with expert-led training.`}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#enroll" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-orange-500/40 transition-all text-center">
                                    Book Your Free Demo Today
                                </a>
                                <a href="#curriculum" className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all text-center">
                                    View Curriculum
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-xs text-blue-200 uppercase">Successful Students</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">98%</div>
                                    <div className="text-xs text-blue-200 uppercase">Placement Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">4.9/5</div>
                                    <div className="text-xs text-blue-200 uppercase">Student Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image / Form Placeholder */}
                        <div className="hidden lg:block relative text-gray-800">
                            <div className="bg-white rounded-2xl p-2 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-500">
                                {mappedCourse.heroImage ? (
                                    <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border-2 border-gray-100">
                                        <img src={mappedCourse.heroImage} alt={`${mappedCourse.title} Preview`} className="w-full h-auto object-contain" />
                                    </div>
                                ) : (
                                    <div className="bg-gray-100 rounded-xl h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300">
                                        <span className="text-gray-400 font-bold">Course Preview Image</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Sub-Nav */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 text-sm font-bold text-gray-500 overflow-x-auto whitespace-nowrap">
                        {['Overview', 'Curriculum', 'Why Us', 'FAQ', 'Enroll'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="py-4 hover:text-orange-600 border-b-2 border-transparent hover:border-orange-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Main Content Area */}
                    {mappedCourse.sections?.some((s: Section) => s.type === 'detailed_features') ? (
                        <div id="overview" className="scroll-mt-32">
                            <SectionRenderer sections={mappedCourse.sections} />
                        </div>
                    ) : (
                        <div className="space-y-16">
                            <section id="overview" className="scroll-mt-32">
                                <DetailedFeatures
                                    title={`Learn ${mappedCourse.title} from Certified Experts – 100% Hands-On, Job-Oriented Training`}
                                    subtitle={mappedCourse.description}
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

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-40 space-y-8">
                        {/* Enrollment Card */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Next Batch Starting</h3>

                            <div className="flex items-center text-gray-600 mb-6">
                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm font-bold">Nov 16, 2025</span>
                                <span className="mx-2">•</span>
                                <span className="text-sm">Weekend Batch</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Duration:</span>
                                    <span className="font-bold text-gray-900">{mappedCourse.duration || '40-45 Hours'}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Mode:</span>
                                    <span className="font-bold text-gray-900">Online Live</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Placement:</span>
                                    <span className="font-bold text-green-600">Assistance Included</span>
                                </div>
                            </div>

                            <a href="#enroll" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center py-4 rounded-lg shadow-lg transition-colors mb-4">
                                Secure Your Seat
                            </a>
                            <p className="text-xs text-center text-gray-400">Limited seats available. Group discounts applicable.</p>
                        </div>

                        {/* Advisor Card */}
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex items-center">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                                <span className="text-xl">📞</span>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-blue-900">Have questions?</div>
                                <div className="text-xs text-blue-600 mb-1">Talk to our SAP Advisor</div>
                                <a href="tel:+918408878222" className="text-blue-800 font-bold hover:underline">+91 84088 78222</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CourseEnrollmentCTA />
        </main>
    );
}
