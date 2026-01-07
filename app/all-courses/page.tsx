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
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our SAP Courses</h1>
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
                                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col group"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    {course.heroImage ? (
                                        <img
                                            src={course.heroImage}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-900 flex items-center justify-center p-6 text-center">
                                            <h3 className="text-xl font-bold text-white relative z-10">{course.title}</h3>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                        {course.category}
                                    </div>
                                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white truncate right-4">{course.title}</h3>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            <span>45 Hours</span>
                                        </div>
                                        <div className="flex items-center">
                                            <BookOpen className="h-4 w-4 mr-1" />
                                            <span>{course.curriculum?.length || 0} Modules</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                                        {course.description || (course.heroHeading && !course.heroHeading.startsWith("H1:")
                                            ? course.heroHeading
                                            : `Comprehensive training for ${course.title} with real-time projects.`)}
                                    </p>

                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="w-full inline-flex items-center justify-center py-3 px-4 bg-gray-50 text-gray-900 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all group-hover:bg-blue-600 group-hover:text-white"
                                    >
                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
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
