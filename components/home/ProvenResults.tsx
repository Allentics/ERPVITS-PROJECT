"use client";

import { Target, TrendingUp, Users, Globe, BookOpen, Clock } from 'lucide-react';

export default function ProvenResults() {
    const stats = [
        {
            icon: Target,
            value: "95%+",
            label: "95%+ Placement Success Rate",
            color: "text-red-500"
        },
        {
            icon: TrendingUp,
            value: "30%+",
            label: "30-50% Average Salary Increase",
            color: "text-yellow-500"
        },
        {
            icon: Users,
            value: "5000+",
            label: "5000+ Professionals Trained",
            color: "text-slate-700"
        },
        {
            icon: Globe,
            value: "15+",
            label: "Global Presence: 15+ Countries",
            color: "text-blue-500"
        },
        {
            icon: BookOpen,
            value: "25+",
            label: "25+ SAP Certifications",
            color: "text-green-600"
        },
        {
            icon: Clock,
            value: "2M+",
            label: "2-4 Months to Placement",
            color: "text-slate-500"
        }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Proven Results – Thousands of Success Stories
                </h2>
                <p className="text-slate-500 mb-12">
                    Industry-leading placement rates and career transformation outcomes
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                <stat.icon className={`w-12 h-12 ${stat.color}`} strokeWidth={1.5} />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-500 text-sm font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
