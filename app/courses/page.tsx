"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { courses } from '@/lib/courseData';
import { ArrowRight, Clock, BookOpen, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function AllCoursesPage() {
    const [filter, setFilter] = useState<'All' | 'Functional' | 'Technical'>('All');

    const filteredCourses = filter === 'All'
        ? courses
        : courses.filter(c => c.category === filter);

    return (
        <div className="bg-gray-50 min-h-screen pt-10 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Explore Our SAP Courses</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Industry-leading training programs designed to launch your career.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
                        {['All', 'Functional', 'Technical'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as any)}
                                className={cn(
                                    "px-6 py-2.5 rounded-lg text-sm font-medium transition-all",
                                    filter === cat
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-gray-600 hover:bg-gray-100"
                                )}
                            >
                                {cat === 'All' ? 'All Courses' : `SAP ${cat}`}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredCourses.map((course) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={course.id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group p-6"
                            >
                                {/* Title Section */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ff7a3d] transition-colors duration-300">
                                        {course.title}
                                    </h3>
                                    <div className="h-1 w-12 bg-[#ff7a3d] mt-2 rounded-full"></div>
                                </div>

                                {/* Metadata Section (Duration & Price) */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center text-sm text-gray-600 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
                                        <Clock className="h-4 w-4 mr-2 text-[#ff7a3d]" />
                                        <span>{course.duration || '40-45 hours'}</span>
                                    </div>
                                    {/* Price Removed */}
                                </div>

                                {/* Description */}
                                <div className="flex-1 mb-6">
                                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                        {course.description || ((typeof course.heroHeading === 'string' && course.heroHeading && !course.heroHeading.startsWith("H1:"))
                                            ? course.heroHeading
                                            : `Comprehensive training for ${course.title} with real-time projects and certification support.`)}
                                    </p>
                                </div>

                                {/* Button */}
                                <Link
                                    href={`/courses/${course.id}`}
                                    className="w-full inline-flex items-center justify-center py-3 px-4 bg-[#ff7a3d] text-white font-bold rounded-lg hover:bg-[#e06932] transition-colors duration-200"
                                >
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No courses found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
