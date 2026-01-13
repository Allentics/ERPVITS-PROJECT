'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit,
    Trash2,
    ExternalLink,
    Loader2,
    AlertCircle,
    BookOpen
} from 'lucide-react';

export default function CoursesPage() {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCourses();
    }, []);

    async function fetchCourses() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('courses')
                .select('*')
                .order('title', { ascending: true });

            if (error) throw error;
            setCourses(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteCourse(id: string) {
        if (!confirm('Are you sure you want to delete this course? This action cannot be undone.')) return;

        try {
            const { error } = await supabase
                .from('courses')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setCourses(courses.filter(c => c.id !== id));
        } catch (err: any) {
            alert('Error deleting course: ' + err.message);
        }
    }

    const filteredCourses = courses.filter(course =>
        course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.id?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Manage Courses</h2>
                    <p className="text-gray-500 text-sm">Create, edit and manage your training programs.</p>
                </div>
                <Link
                    href="/admin/courses/new"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-zinc-900 transition-colors shadow-sm"
                >
                    <Plus size={18} />
                    Add Course
                </Link>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        <Filter size={18} />
                        Filter
                    </button>
                </div>
            </div>

            {/* Course List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="animate-spin text-orange-500 mb-2" size={32} />
                        <p className="text-gray-500 text-sm">Loading courses...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                        <div className="bg-red-50 text-red-600 p-3 rounded-full mb-4">
                            <AlertCircle size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Failed to load courses</h3>
                        <p className="text-gray-500 text-sm mt-1 max-w-xs">{error}</p>
                        <button
                            onClick={fetchCourses}
                            className="mt-6 text-orange-600 font-bold hover:underline text-sm"
                        >
                            Try Again
                        </button>
                    </div>
                ) : filteredCourses.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                        <div className="bg-gray-50 text-gray-400 p-3 rounded-full mb-4">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No courses found</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            {searchTerm ? "No courses match your search criteria." : "You haven't added any courses yet."}
                        </p>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="mt-6 text-orange-600 font-bold hover:underline text-sm"
                            >
                                Clear Search
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Course</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Price/Duration</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredCourses.map((course) => (
                                    <tr key={course.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0 shadow-sm border border-orange-200">
                                                    {course.title?.charAt(0)}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-bold text-gray-900 truncate">{course.title}</p>
                                                    <p className="text-xs text-gray-500 truncate">{course.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "inline-flex items-center px-2 py-1 rounded-full text-xs font-bold",
                                                course.category === 'Technical' ? "bg-orange-100 text-orange-700 border border-orange-200" :
                                                    course.category === 'Functional' ? "bg-blue-100 text-blue-700 border border-blue-200" :
                                                        "bg-gray-100 text-gray-700 border border-gray-200"
                                            )}>
                                                {course.category || 'Uncategorized'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="text-sm text-gray-900 font-medium">{course.price || 'Contact for Pricing'}</p>
                                            <p className="text-xs text-gray-500">{course.duration || '40-50 Hours'}</p>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={`/admin/courses/edit/${course.id}`}
                                                    className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => deleteCourse(course.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                                <Link
                                                    href={`/courses/${course.id}`}
                                                    target="_blank"
                                                    className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                                                    title="View Live"
                                                >
                                                    <ExternalLink size={18} />
                                                </Link>
                                            </div>
                                            {/* Mobile menu - simplified */}
                                            <button className="p-2 text-gray-400 md:hidden">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
                }
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
