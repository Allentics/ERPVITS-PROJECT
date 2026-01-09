"use client";

import Link from 'next/link';
import { courses } from '@/lib/courseData';
import { Clock, IndianRupee, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';

export default function FeaturedCourses() {
    const [featuredCourses, setFeaturedCourses] = useState<any[]>(courses);
    const [visibleCount, setVisibleCount] = useState(3);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Get Started with SAP");

    useEffect(() => {
        async function fetchFeatured() {
            try {
                // Fetch all courses to ensure we have the latest data/images if needed
                const { data, error } = await supabase
                    .from('courses')
                    .select('*');

                if (data && !error) {
                    const enriched = courses.map((localCourse) => {
                        const dbCourse = data.find((c: any) => c.id === localCourse.id);
                        return {
                            ...localCourse,
                            ...dbCourse, // Merge DB data
                            // Prioritize local heroImage if it exists, otherwise DB hero_image
                            heroImage: localCourse.heroImage || dbCourse?.hero_image
                        };
                    });
                    // Sort or filter if necessary, for now we keep the order from courses.json/lib
                    setFeaturedCourses(enriched);
                }
            } catch (err) {
                console.error('Error in FeaturedCourses:', err);
            }
        }
        fetchFeatured();
    }, []);

    const openModal = (title: string) => {
        setModalTitle(title);
        setIsContactModalOpen(true);
    };

    const showAllCourses = () => {
        setVisibleCount(featuredCourses.length);
    };

    return (
        <section className="py-20 bg-gray-50">
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title={modalTitle}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Master In-Demand SAP Online Training Courses</h2>
                    <p className="text-lg text-gray-600">
                        Choose from comprehensive SAP online training programs with industry-leading curriculum and certification
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.slice(0, visibleCount).map((course: any) => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                                    <div className="w-12 h-1 bg-orange-500 rounded mt-2"></div>
                                </div>

                                {/* Metrics */}
                                <div className="flex justify-between items-center mb-6 text-sm">
                                    <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full font-medium">
                                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                                        <span>{course.duration || '40-45 hours'}</span>
                                    </div>
                                    <div className="flex items-center font-bold text-gray-900 bg-green-50 px-3 py-1.5 rounded-full">
                                        <IndianRupee className="w-4 h-4 mr-1 text-green-600" />
                                        <span>{course.price ? course.price.replace('/- INR', '') : '45,000'}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed">
                                    {course.description ? course.description.split('\n')[0] : `Master ${course.title} with real-world projects and expert mentorship.`}
                                </p>

                                <div className="space-y-3 mt-auto">
                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="w-full flex items-center justify-center px-4 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                                    >
                                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                    <button
                                        onClick={() => openModal(`Fee Offers for ${course.title}`)}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-orange-600 font-bold rounded-xl transition-colors text-sm"
                                    >
                                        View Current Fee Offers
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row justify-center gap-4">
                    {visibleCount < featuredCourses.length && (
                        <button
                            onClick={showAllCourses}
                            className="px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-center"
                        >
                            View All {featuredCourses.length} Courses
                        </button>
                    )}
                    <button
                        onClick={() => openModal("Course Consultation")}
                        className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-md text-center"
                    >
                        Find Your Perfect SAP Course - Get Free Skills Assessment
                    </button>
                </div>
            </div>
        </section>
    );
}
