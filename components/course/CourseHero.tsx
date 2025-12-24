import Link from 'next/link';
import { Course } from '@/lib/courseData';
import { Clock, Star, Users, CheckCircle } from 'lucide-react';

const CourseHero = ({ course }: { course: Course }) => {
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

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            {course.heroHeading && !course.heroHeading.startsWith("H1:")
                                ? course.heroHeading
                                : `Master ${course.title} & Get Certified`}
                        </h1>

                        <p className="text-lg text-slate-300 max-w-2xl">
                            Detailed, hands-on training for {course.title}.
                            Learn from industry experts, work on real projects, and launch your consulting career.
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm font-medium pt-4">
                            <div className="flex items-center text-yellow-400">
                                <Star className="h-4 w-4 mr-1 fill-current" />
                                <span>4.8 (320+ Reviews)</span>
                            </div>
                            <div className="flex items-center text-slate-300">
                                <Users className="h-4 w-4 mr-1" />
                                <span>6000+ Enrolled</span>
                            </div>
                            <div className="flex items-center text-slate-300">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>45 Hours Live</span>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#enroll"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg"
                            >
                                Enroll Now
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Download Syllabus
                            </Link>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white text-gray-800 rounded-xl p-6 shadow-2xl border-t-4 border-orange-500">
                            <h3 className="text-xl font-bold mb-4">Course Highlights</h3>
                            <ul className="space-y-4 text-sm font-medium">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>100% Hands-on Practical Training</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Real-time Project Scenarios</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Certification Guidance Included</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Placement Support & Resumes</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
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
