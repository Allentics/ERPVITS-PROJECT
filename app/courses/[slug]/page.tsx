import { getCourse, courses } from '@/lib/courseData';
import { notFound } from 'next/navigation';
import Curriculum from '@/components/course/Curriculum';
import FAQ from '@/components/course/FAQ';
import ComparisonTable from '@/components/home/ComparisonTable';
import SectionRenderer from '@/components/course/SectionRenderer';
import CourseEnrollmentCTA from '@/components/course/CourseEnrollmentCTA';
import { Metadata } from 'next';

// Dynamic rendering only to avoid build OOM
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourse(slug);

    if (!course) return { title: 'Course Not Found' };

    return {
        title: course.metaTitle || `${course.title} Training | Expert Online Course | ERPVITS`,
        description: course.metaDescription || course.heroHeading,
    };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = getCourse(slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="bg-white">
            {/* Schema Injection */}
            {course.schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: course.schema }}
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
                                {course.heroHeading}
                            </h1>

                            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl whitespace-pre-line">
                                {course.description ? course.description.split('\n')[0] : `Master ${course.title} with expert-led training.`}
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
                                {course.heroImage ? (
                                    <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border-2 border-gray-100">
                                        <img src={course.heroImage} alt={`${course.title} Preview`} className="w-full h-auto object-contain" />
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
                        {['Overview', 'Curriculum', 'Highlights', 'FAQ', 'Enroll'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="py-4 hover:text-orange-600 border-b-2 border-transparent hover:border-orange-500 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Overview (Fallback or First Section) */}
                    {/* Only show default overview if no sections, OR if sections exist, we let SectionRenderer handle it. 
                  However, standard courses rely on this.
                  Strategy: If sections exist, assume they COVER the overview. 
                  Wait, aribaContent.sections[0] IS the overview 'Learn SAP Ariba...'.
                  So if sections exist, I should output them ALL here.
              */}

                    {course.sections ? (
                        <SectionRenderer sections={course.sections} />
                    ) : (
                        <>
                            <section id="overview" className="scroll-mt-32">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
                                <div className="prose max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                                    {course.description}
                                </div>
                            </section>

                            <section id="highlights" className="bg-orange-50 rounded-2xl p-8 border border-orange-100 scroll-mt-32">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Professionals Choose ERPVITS for {course.title}</h2>
                                <p className="text-gray-600 mb-8">Trusted by 500+ successful SAP professionals.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {course.features.map((feature, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="curriculum" className="scroll-mt-32">
                                <Curriculum course={course} />
                            </section>

                            {!course.features?.length && (
                                <section className="py-8 bg-blue-50">
                                    <ComparisonTable />
                                </section>
                            )}

                            <section id="faq" className="scroll-mt-32">
                                <FAQ course={course} />
                            </section>
                        </>
                    )}
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
                                    <span className="font-bold text-gray-900">{course.duration || '40-45 Hours'}</span>
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
