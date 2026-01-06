"use client";

import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';

export default function DetailedUpcomingBatches({ courseName = "SAP Ariba", batches: propBatches }: { courseName?: string, batches?: any[] }) {
    const scrollToBooking = () => {
        const element = document.getElementById('detailed-demo-booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const defaultBatches = [
        {
            name: "Batch 1: November 2024 (Weekday)",
            status: "Filling Fast",
            statusColor: "bg-red-100 text-red-600",
            date: "November 13, 2024",
            schedule: "Mon-Fri | 07:00 AM - 08:30 AM IST",
            duration: "10 Weeks",
            seatsFilled: 85
        },
        {
            name: "Batch 2: November 2024 (Weekend)",
            status: "Open",
            statusColor: "bg-blue-100 text-blue-600",
            date: "November 16, 2024",
            schedule: "Sat & Sun | 09:00 AM - 12:00 PM IST",
            duration: "12 Weeks",
            seatsFilled: 45
        },
        {
            name: "Batch 3: December 2024 (Flexible)",
            status: "New Batch",
            statusColor: "bg-green-100 text-green-600",
            date: "December 2, 2024",
            schedule: "Flexible timings | Customized per batch",
            duration: "10 Weeks",
            seatsFilled: 15
        }
    ];

    const batches = propBatches || defaultBatches;

    const features = [
        { icon: Zap, text: "Early-bird discounts for first registration" },
        { icon: Users, text: "Personal mentoring & path consultation" },
        { icon: ShieldCheck, text: "Lifetime support and networking" },
        { icon: CheckCircle2, text: "Networking with cohort members" },
        { icon: Users, text: "Access to current materials and videos" }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-lg shadow-orange-600/20">
                        Limited Seats Available
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Join Our Next Live Batch – <span className="text-orange-400">{courseName} Training</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Secure your spot in our upcoming batches with flexible timings designed for working professionals
                    </p>
                </div>

                {/* Batches Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {batches.map((batch, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 text-slate-900 shadow-xl border border-slate-200 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${batch.statusColor}`}>
                                    {batch.status}
                                </span>
                                {batch.seatsFilled > 80 && (
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 animate-pulse">
                                        <AlertCircle className="w-3 h-3" /> High Demand
                                    </span>
                                )}
                            </div>

                            <h3 className="font-bold text-lg mb-6 min-h-[56px]">{batch.name}</h3>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase">Start Date</div>
                                        <div className="font-medium text-sm">{batch.date}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase">Schedule</div>
                                        <div className="font-medium text-sm">{batch.schedule}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase">Duration</div>
                                        <div className="font-medium text-sm">{batch.duration}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                                    <span>Seats Available</span>
                                    <span className={batch.seatsFilled > 80 ? 'text-red-500' : 'text-green-500'}>
                                        {100 - batch.seatsFilled}% Left
                                    </span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${batch.seatsFilled > 80 ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${batch.seatsFilled}%` }}
                                    ></div>
                                </div>
                            </div>

                            <button
                                onClick={scrollToBooking}
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-sm uppercase tracking-wide"
                            >
                                Register Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Why Enroll Now Footer */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
                    <h3 className="text-center font-bold text-xl mb-8">Why Enroll Now?</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-green-400 flex-shrink-0">
                                    <feature.icon className="w-4 h-4" />
                                </div>
                                <span className="text-sm text-slate-300 font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-400">
                        * Limited intake ensuring personal mentoring. 45-day job support included with every batch.
                    </p>
                </div>

            </div>
        </section>
    );
}
