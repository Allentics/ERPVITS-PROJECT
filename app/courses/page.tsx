import React from 'react';
import { courses } from '@/lib/courseData';
import CourseFilters from '@/components/CourseFilters';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Explore Our SAP Courses | ERPVITS',
    description: 'Industry-leading SAP training programs designed to launch your career. Expert-led, hands-on certification courses.',
};

export default function AllCoursesPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-10 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Explore Our SAP Courses</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Industry-leading training programs designed to launch your career.
                    </p>
                </div>

                <CourseFilters courses={courses} />
            </div>
        </div>
    );
}
