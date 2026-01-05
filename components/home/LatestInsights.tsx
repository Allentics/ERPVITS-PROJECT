"use client";

import { BookOpen, Briefcase, Rocket, BadgeDollarSign, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

export default function LatestInsights() {
    const insights = [
        {
            icon: Briefcase,
            tag: "Career Guide",
            title: "Top 10 SAP Modules to Learn in 2025 for High-Paying Jobs",
            description: "Discover which SAP modules are most in-demand and can command salaries of $100K+ in the current job market.",
            readTime: "8 min read",
            views: "2.5K views",
            tagColor: "text-orange-600 bg-orange-50"
        },
        {
            icon: Rocket,
            tag: "Industry News",
            title: "SAP S/4HANA Migration: What It Means for Your Career in 2025",
            description: "Companies are accelerating S/4HANA migrations. Learn how to position yourself for these high-value opportunities.",
            readTime: "6 min read",
            views: "1.8K views",
            tagColor: "text-blue-600 bg-blue-50"
        },
        {
            icon: BadgeDollarSign,
            tag: "Salary Insights",
            title: "SAP Consultant Salary Guide 2025: What You Can Expect to Earn",
            description: "Comprehensive salary breakdown by role, location, and experience level. Plus negotiation tips to maximize your earnings.",
            readTime: "10 min read",
            views: "3.2K views",
            tagColor: "text-green-600 bg-green-50"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <BookOpen className="w-8 h-8 text-green-600" />
                        Latest SAP Career Insights & Industry Trends
                    </h2>
                    <p className="text-slate-500">
                        Stay updated with expert articles, career guides, and SAP industry news
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {insights.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="h-48 bg-[#0056D2] flex items-center justify-center">
                                <item.icon className="w-16 h-16 text-white transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                            </div>
                            <div className="p-6">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${item.tagColor}`}>
                                    {item.tag}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{item.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-3 h-3" />
                                        <span>{item.views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        Read All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
