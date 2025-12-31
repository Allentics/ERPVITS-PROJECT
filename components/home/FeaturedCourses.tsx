"use client";

import Link from 'next/link';
import { courses } from '@/lib/courseData';
import { Clock, IndianRupee, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';

export default function FeaturedCourses() {
    const featuredIds = ['sap-ariba', 'fico', 'sap-mm', 'trm', 'sd', 'sap-fieldglass'];
    const [featuredCourses, setFeaturedCourses] = useState<any[]>(
        featuredIds.map(id => courses.find(c => c.id === id)).filter(Boolean)
    );
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Get Started with SAP");

    useEffect(() => {
        async function fetchFeatured() {
            try {
                const { data, error } = await supabase
                    .from('courses')
                    .select('*')
                    .in('id', featuredIds);

                if (data && !error) {
                    const enriched = data.map((c: any) => {
                        const local = courses.find(lc => lc.id === c.id);
                        return {
                            ...c,
                            // Always use local heroImage path to ensure we have the correct module-specific branded images
                            heroImage: local?.heroImage || c.hero_image
                        };
                    });
                    const ordered = featuredIds
                        .map(id => enriched.find((c: any) => c.id === id))
                        .filter(Boolean);
                    setFeaturedCourses(ordered);
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
                    {featuredCourses.map((course: any) => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
                            {/* Card Header with Image */}
                            <div className="h-56 relative overflow-hidden">
                                {course.hero_image || course.heroImage ? (
                                    <img
                                        src={course.hero_image || course.heroImage}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-900 flex flex-col justify-center p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 relative z-10">{course.title} Training</h3>
                                        <div className="w-12 h-1 bg-orange-500 rounded"></div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-bold">{course.title}</h3>
                                    <div className="w-8 h-1 bg-orange-500 rounded mt-1"></div>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
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

                <div className="mt-16 flex justify-center gap-6">
                    <Link href="/all-courses" className="text-orange-600 font-bold hover:text-orange-800 underline decoration-2 underline-offset-4">
                        [VIEW ALL COURSES]
                    </Link>
                    <button
                        onClick={() => openModal("Course Consultation")}
                        className="text-orange-600 font-bold hover:text-orange-800 underline decoration-2 underline-offset-4"
                    >
                        [CONSULT US TO FIND YOUR PERFECT SAP COURSE]
                    </button>
                </div>
            </div>
        </section>
    );
}
