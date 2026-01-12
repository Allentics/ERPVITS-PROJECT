'use client';

import React from 'react';
import Link from 'next/link';
import {
    Users,
    BookOpen,
    FileText,
    MessageSquare,
    ArrowUpRight,
    TrendingUp,
    Clock
} from 'lucide-react';

const stats = [
    { name: 'Total Courses', value: '12', icon: BookOpen, color: 'bg-orange-500', href: '/admin/courses' },
    { name: 'Blog Posts', value: '18', icon: FileText, color: 'bg-green-500', href: '/admin/blogs' },
    { name: 'New Inquiries', value: '45', icon: MessageSquare, color: 'bg-yellow-500', href: '/admin/forms' },
    { name: 'Active Users', value: '1.2k', icon: Users, color: 'bg-purple-500', href: '#' },
];

const recentActivities = [
    { id: 1, type: 'course', message: 'Updated SAP FICO course content', time: '2 hours ago' },
    { id: 2, type: 'blog', message: 'Published new blog post: SAP S/4HANA vs ECC', time: '5 hours ago' },
    { id: 3, type: 'form', message: 'New inquiry received from Raj Patel', time: 'Yesterday' },
    { id: 4, type: 'course', message: 'Added "New Batch" badge to SAP MM', time: '2 days ago' },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Welcome back, Admin!</h2>
                    <p className="text-gray-500 text-sm mt-1">Here's a quick overview of what's happening with ERPVITS today.</p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href="/admin/courses/new"
                        className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-zinc-900 transition-colors shadow-sm"
                    >
                        Add New Course
                    </Link>
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group">
                        <div className="flex items-center justify-between">
                            <div className={cn("p-2 rounded-lg text-white", stat.color)}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                                <TrendingUp size={12} />
                                +12%
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm font-medium">{stat.name}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                        </div>
                        <Link
                            href={stat.href}
                            className="mt-4 flex items-center text-xs text-orange-600 font-bold hover:underline group-hover:gap-1 transition-all"
                        >
                            View More <ArrowUpRight size={12} />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="font-bold text-gray-900">Recent Activity</h3>
                        <button className="text-xs text-orange-600 font-bold hover:underline">View All</button>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                                <div className="mt-1">
                                    {activity.type === 'course' && <BookOpen size={16} className="text-orange-500" />}
                                    {activity.type === 'blog' && <FileText size={16} className="text-zinc-700" />}
                                    {activity.type === 'form' && <MessageSquare size={16} className="text-orange-400" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-800 line-clamp-1">{activity.message}</p>
                                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                        <Clock size={10} />
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Tips / Info */}
                <div className="bg-gradient-to-br from-black to-zinc-800 rounded-xl shadow-lg p-6 text-white relative overflow-hidden border border-white/10">
                    <div className="relative z-10">
                        <h3 className="font-bold text-lg mb-2 text-orange-400">Pro Tip</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Always add meta titles and descriptions to your courses and blogs to improve SEO and ranking on search engines.
                        </p>
                        <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
                            Read SEO Guide
                        </button>
                    </div>
                    <TrendingUp className="absolute -right-6 -bottom-6 text-white opacity-5 w-48 h-48" />
                </div>
            </div>
        </div>
    );
}

// Helper function duplicate for simplicity since it's a new file
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
