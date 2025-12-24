"use client";

import Link from 'next/link';
import { courses } from '@/lib/courseData';
import { Clock, IndianRupee, ArrowRight } from 'lucide-react';

export default function FeaturedCourses() {
    // Select the 6 featured courses: Ariba, FICO, MM, TRM, BTP, SAC
    const featuredIds = ['ariba', 'fico', 'mm', 'trm', 'btp', 'analytics-cloud'];
    const featuredCourses = featuredIds.map(id => courses.find(c => c.id === id)).filter(Boolean);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Master In-Demand SAP Online Training Courses</h2>
                    <p className="text-lg text-gray-600">
                        Choose from comprehensive SAP online training programs with industry-leading curriculum and certification
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.map((course: any) => (
                        <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                            {/* Card Header */}
                            <div className="h-48 bg-slate-900 p-6 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{course.title} Training</h3>
                                <div className="w-12 h-1 bg-orange-500 rounded"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                {/* Metrics */}
                                <div className="flex justify-between items-center mb-6 text-sm">
                                    <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1 rounded">
                                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                                        <span>{course.duration || '40-45 hours'}</span>
                                    </div>
                                    <div className="flex items-center font-bold text-gray-900">
                                        <IndianRupee className="w-4 h-4 mr-1 text-green-600" />
                                        <span>{course.price ? course.price.replace('/- INR', '') : '45,000'}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-4 leading-relaxed">
                                    {course.description ? course.description.split('\n')[0] : `Master ${course.title} with real-world projects and expert mentorship.`}
                                </p>

                                <div className="space-y-3 mt-auto">
                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <button className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-orange-600 font-medium rounded-lg transition-colors text-sm">
                                        View Current Fee Offers
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center gap-6">
                    <Link href="/all-courses" className="text-blue-600 font-bold hover:text-blue-800 underline decoration-2 underline-offset-4">
                        [VIEW ALL 15 COURSES]
                    </Link>
                    <Link href="/contact" className="text-orange-600 font-bold hover:text-orange-800 underline decoration-2 underline-offset-4">
                        [CONSULT US TO FIND YOUR PERFECT SAP COURSE]
                    </Link>
                </div>
            </div>
        </section>
    );
}
