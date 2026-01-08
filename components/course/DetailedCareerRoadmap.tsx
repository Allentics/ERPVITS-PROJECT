import React from 'react';
import { Briefcase, Building2, TrendingUp, Globe, CheckCircle2, Users } from 'lucide-react';

export default function DetailedCareerRoadmap({ items }: { items?: any[] }) {
    const defaultSteps = [
        {
            stage: "Start (1-3)",
            title: "Jr. Ariba Consultant",
            description: "Support projects, process design, configuration basics."
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

    const steps = items || defaultSteps;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* 1. Career Progression Roadmap */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Career Progression Roadmap (5-10 Years)</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white">{idx + 1}</div>
                                <h3 className="font-bold text-slate-900 mt-4 mb-1">{step.stage}</h3>
                                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{step.title}</div>
                                <p className="text-sm text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-6 rounded-xl text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">200%+</div>
                            <div className="text-xs text-slate-500 font-medium">Increase in Job Earnings</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                            <div className="text-xs text-slate-500 font-medium">Companies Hiring</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">$110K</div>
                            <div className="text-xs text-slate-500 font-medium">Average Starting Salary</div>
                        </div>
                    </div>
                </div>



                {/* 3. Hiring Trends */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-slate-900">Hiring Trends (2025)</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                            <div className="text-xl font-bold text-blue-600 mb-1">200%+</div>
                            <div className="text-xs text-slate-600">Increase in Consultant Earnings</div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
                            <div className="text-xl font-bold text-green-600 mb-1">High</div>
                            <div className="text-xs text-slate-600">Demand for S-Market Innovation</div>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl text-center border border-purple-100">
                            <div className="text-xl font-bold text-purple-600 mb-1">Premium</div>
                            <div className="text-xs text-slate-600">Salaries for Certified Pros</div>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-xl text-center border border-orange-100">
                            <div className="text-xl font-bold text-orange-600 mb-1">Global</div>
                            <div className="text-xs text-slate-600">Remote Opportunities</div>
                        </div>
                    </div>
                </div>

                {/* 4. Alumni Network Banner */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Join Our Successful Alumni Network</h3>
                        <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-sm">Our graduates are working at top companies worldwide. Fast-track your career with ERPVITS SAP Ariba training and join this elite network of professionals.</p>

                        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-orange-400/30 pt-8">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                                <div className="text-xs md:text-sm text-orange-100">Alumni Placed</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
                                <div className="text-xs md:text-sm text-orange-100">Success Rate</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold mb-1">3 Months</div>
                                <div className="text-xs md:text-sm text-orange-100">Average Job Time</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
