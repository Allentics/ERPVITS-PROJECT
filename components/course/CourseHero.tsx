import Link from 'next/link';
import { Course } from '@/lib/courseData';
import { Clock, Star, Users, CheckCircle } from 'lucide-react';

const CourseHero = ({ course }: { course: Course }) => {
    // Centered Layout (Light Theme)
    if (course.heroLayout === 'centered') {
        const isOrange = course.themeColor === 'orange' || course.themeColor === 'purple';
        const gradientText = isOrange ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-[#cc3700]" : "text-slate-900";
        const badgeClass = isOrange
            ? "bg-gradient-to-r from-[#ff4500] to-[#cc3700] text-white shadow-lg shadow-[#ff4500]/20"
            : "bg-[#ff4500]/10 text-[#cc3700]";
        const buttonClass = isOrange
            ? "bg-gradient-to-r from-[#ff4500] to-[#cc3700] hover:from-[#cc3700] hover:to-[#b03000] text-white shadow-lg shadow-[#ff4500]/30"
            : "bg-blue-600 text-white hover:bg-blue-700";

        return (
            <div className="bg-slate-50 pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden text-center border-b border-slate-100">
                {/* Subtle Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff4500]/10/40 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {course.badges && course.badges.length > 0 && (
                        <div className="flex justify-center mb-8">
                            {course.badges.map((badge, idx) => (
                                <span key={idx} className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide bg-[#ff4500] text-white shadow-lg shadow-[#ff4500]/20">
                                    <Star className="w-4 h-4 mr-2 fill-current" />
                                    {badge}
                                    <Star className="w-4 h-4 ml-2 fill-current" />
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-[#0F172A] mb-6">
                        {typeof course.heroHeading === 'string' ? (
                            course.heroHeading.split(course.title).map((part, i, arr) => (
                                <span key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span className="text-[#ff4500]">{course.title}</span>}
                                </span>
                            ))
                        ) : (
                            course.heroHeading
                        )}
                    </h1>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {course.heroSubheading}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="#enroll"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl transition-all bg-[#ff4500] hover:bg-[#cc3700] text-white shadow-lg shadow-[#ff4500]/30"
                        >
                            {course.buttonLabels?.primary || "Book Free Demo Class"}
                        </Link>
                        <Link
                            href={course.syllabusUrl || "#curriculum"}
                            target={course.syllabusUrl ? "_blank" : undefined}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                        >
                            {course.buttonLabels?.secondary || "View Curriculum"}
                        </Link>
                    </div>

                    {/* Stats */}
                    {course.heroStats && (
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm font-medium text-slate-500 pt-8 border-t border-slate-200/60">
                            {course.heroStats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="text-[#ff4500]">
                                        {stat.icon === 'award' ? <CheckCircle className="w-5 h-5" /> :
                                            stat.icon === 'infinity' ? <Clock className="w-5 h-5" /> :
                                                <Users className="w-5 h-5" />}
                                    </div>
                                    <span className="font-semibold text-slate-700">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-900 pt-10 pb-16 md:py-20 text-white relative overflow-hidden">
            {/* Abstract BG */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 opacity-20 transform -skew-x-12"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center space-x-2 text-blue-300 font-semibold uppercase text-xs tracking-wider">
                            <span>SAP Training</span>
                            <span>/</span>
                            <span>{course.id.toUpperCase().replace("-", " ")}</span>
                        </div>

                        {course.badges && course.badges.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {course.badges.map((badge, idx) => (
                                    <span key={idx} className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight">
                            {(typeof course.heroHeading === 'string' && !course.heroHeading.startsWith("H1:"))
                                ? course.heroHeading
                                : (typeof course.heroHeading !== 'string' ? course.heroHeading : `Master ${course.title} & Get Certified`)}
                        </h1>

                        <p className="text-base text-slate-300 max-w-2xl">
                            {course.heroSubheading || `Detailed, hands-on training for ${course.title}. Learn from industry experts, work on real projects, and launch your consulting career.`}
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm font-medium pt-4">
                            {course.heroStats ? (
                                course.heroStats.map((stat, idx) => (
                                    <div key={idx} className="flex items-center text-slate-300">
                                        <CheckCircle className="h-4 w-4 mr-1 text-[#ff4500]" />
                                        <span>{stat.label}</span>
                                    </div>
                                ))
                            ) : (
                                <>
                                    <div className="flex items-center text-yellow-400">
                                        <Star className="h-4 w-4 mr-1 fill-current" />
                                        <span>4.8 (320+ Reviews)</span>
                                    </div>
                                    <div className="flex items-center text-slate-300">
                                        <Users className="h-4 w-4 mr-1" />
                                        <span>8000+ Enrolled</span>
                                    </div>
                                    <div className="flex items-center text-slate-300">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>45 Hours Live</span>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#enroll"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff4500] hover:bg-[#ff4500] text-white font-bold rounded-lg transition-colors shadow-lg"
                            >
                                {course.buttonLabels?.primary || "Enroll Now"}
                            </Link>
                            <Link
                                href={course.buttonLabels?.secondary === "View Curriculum" ? "#curriculum" : "/contact"}
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                {course.buttonLabels?.secondary || "Download Syllabus"}
                            </Link>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white text-gray-800 rounded-xl p-6 shadow-2xl border-t-4 border-[#ff4500]">
                            <h3 className="text-xl font-bold mb-4">Course Highlights</h3>
                            <ul className="space-y-4 text-sm font-medium">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-[#ff4500] mr-3 flex-shrink-0" />
                                    <span>100% Hands-on Practical Training</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-[#ff4500] mr-3 flex-shrink-0" />
                                    <span>Real-time Project Scenarios</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-[#ff4500] mr-3 flex-shrink-0" />
                                    <span>Certification Guidance Included</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-[#ff4500] mr-3 flex-shrink-0" />
                                    <span>Placement support & Resumes</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-[#ff4500] mr-3 flex-shrink-0" />
                                    <span>Lifetime Video Access</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="text-center">
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Next Batch Starts</p>
                                    <p className="text-2xl font-bold text-blue-900 mt-1">Tomorrow</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseHero;
