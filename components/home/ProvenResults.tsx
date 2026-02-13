
"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Target, TrendingUp, Users, Globe, BookOpen, Clock } from 'lucide-react';

const ICON_MAP: any = {
    Target, TrendingUp, Users, Globe, BookOpen, Clock
};

const DEFAULT_CONTENT = {
    title: "Proven Results – Thousands of Success Stories",
    subtitle: "Industry-leading placement rates and career transformation outcomes",
    stats: [
        {
            icon: "Target",
            value: "95%+",
            label: "95%+ Placement Success Rate",
            color: "text-red-500"
        },
        {
            icon: "TrendingUp",
            value: "40%+",
            label: "30-80% Average Salary Increase",
            color: "text-yellow-500"
        },
        {
            icon: "Users",
            value: "8000+",
            label: "8000+ Professionals Trained",
            color: "text-slate-700"
        },
        {
            icon: "Globe",
            value: "15+",
            label: "Global Presence: 15+ Countries",
            color: "text-blue-500"
        },
        {
            icon: "BookOpen",
            value: "25+",
            label: "Expert Guidance on 25+ SAP Certifications",
            color: "text-green-600"
        },
        {
            icon: "Clock",
            value: "2 Weeks",
            label: "2-4 Weeks to Placement",
            color: "text-slate-500"
        }
    ]
};

export default function ProvenResults() {
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchContent() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'proven_results')
                    .single();

                if (data && !error) {
                    setContent({ ...DEFAULT_CONTENT, ...data.content });
                }
            } catch (err) {
                console.error('Error fetching ProvenResults content:', err);
            }
        }
        fetchContent();
    }, []);

    return (
        <section className="py-14 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {content.title}
                </h2>
                <p className="text-slate-500 mb-12">
                    {content.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.stats?.map((stat: any, index: number) => {
                        const Icon = ICON_MAP[stat.icon] || Target;
                        return (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <Icon className={`w-12 h-12 ${stat.color}`} strokeWidth={1.5} />
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-500 text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
