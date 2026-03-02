/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Target, Flag, Rocket, Briefcase, Award, TrendingUp, ChevronRight, CheckCircle2, Building2, Globe } from 'lucide-react';
import { renderRichText } from '@/lib/richText';
export default function DetailedCareerRoadmap({ items, stats, alumniCount = "800+" }: { items?: any[], stats?: any, alumniCount?: string }) {
    const defaultSteps = [
        {
            stage: "Start (1-3)",
            title: "Jr. Ariba Consultant",
            description: "support projects, process design, configuration basics."
        },
        {
            stage: "Mid-Level (4-6)",
            title: "Sr. Ariba Consultant / Architect",
            description: "Lead projects, solution design, client interaction."
        },
        {
            stage: "Senior (7-10+)",
            title: "Principal Consultant / Manager",
            description: "Multi-regional accounts, thought leadership, strategic contributions."
        }
    ];

    const defaultStats = [
        { value: "200%+", label: "Increase in Job Earnings" },
        { value: "500+", label: "Companies Hiring" },
        { value: "$110K", label: "Average Starting Salary" }
    ];

    const steps = items || defaultSteps;
    const currentStats = stats || defaultStats;

    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                {/* 1. Career Progression Roadmap */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Career Progression Roadmap (5-10 Years)</h2>
                    </div>

                    <div className={`grid gap-6 mb-12 ${steps.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">{idx + 1}</div>
                                <h3 className="font-bold text-slate-900 mt-4 mb-1">{step.stage || step.year}</h3>
                                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{step.title || step.role}</div>
                                <p className="text-sm text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {currentStats.map((stat: any, idx: number) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center">
                                <div className={`text-2xl font-bold mb-1 ${idx === 0 ? 'text-[#ff4500]' : idx === 1 ? 'text-blue-600' : 'text-purple-600'}`}>{stat.value}</div>
                                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>



                {/* 3. Hiring Trends */}

                {/* 4. Alumni Network Banner */}
                <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Join Our Successful Alumni Network</h3>
                        <p className="text-orange-50 mb-8 max-w-2xl mx-auto text-sm">Our graduates are working at top companies worldwide. Fast-track your career with ERPVITS training and join this elite network of professionals.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white/20 pt-8 mt-4">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold mb-1 text-green-400">{alumniCount}</div>
                                <div className="text-xs md:text-sm text-orange-50/90 font-medium">Alumni Placed</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold mb-1 text-green-400">98%</div>
                                <div className="text-xs md:text-sm text-orange-50/90 font-medium">Success Rate</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold mb-1 text-green-400">3 Months</div>
                                <div className="text-xs md:text-sm text-orange-50/90 font-medium">Average Job Time</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
