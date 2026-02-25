/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function DetailedUpcomingBatches({ courseName = "SAP Ariba", batches: propBatches, features: propFeatures }: { courseName?: string, batches?: any[], features?: any[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const handleRegisterClick = () => {
        const title = `Register for Next ${courseName} Batch`;
        setModalTitle(title);
        setIsModalOpen(true);
    };

    // Helper to get a date X days from now
    const getFutureDate = (daysToAdd: number) => {
        const date = new Date();
        date.setDate(date.getDate() + daysToAdd);
        return date;
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    const formatMonthYear = (date: Date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const batch1Date = getFutureDate(2);
    const batch2Date = getFutureDate(5);
    const batch3Date = getFutureDate(12);

    const dynamicBatches = [
        {
            name: `Batch 1: ${formatMonthYear(batch1Date)} (Weekdays)`,
            status: "Filling Fast",
            statusColor: "bg-red-100 text-red-600",
            date: formatDate(batch1Date),
            schedule: "Mon-Fri | 07:00 AM | 08:00 PM IST",
            duration: "45-50 Hours",
            seatsFilled: 85,
            seatsText: "2/10 Seats Available"
        },
        {
            name: `Batch 2: ${formatMonthYear(batch2Date)} (Weekends)`,
            status: "Registration Open",
            statusColor: "bg-green-100 text-green-600",
            date: formatDate(batch2Date),
            schedule: "Sat-Sun | 08:30 AM | 07:00 PM IST",
            duration: "45-50 Hours",
            seatsFilled: 40,
            seatsText: "6/10 Seats Available"
        },
        {
            name: `Batch 3: ${formatMonthYear(batch3Date)} (Flexible)`,
            status: "Registration Open",
            statusColor: "bg-blue-100 text-blue-600",
            date: formatDate(batch3Date),
            schedule: "Flexible timings – customized per batch",
            duration: "45-50 Hours (accelerated)",
            seatsFilled: 20,
            seatsText: "8/10 Seats Available"
        }
    ];

    // Priority to dynamic batches to ensure dates are always current/upcoming, 
    // overriding potential stale data from DB props.
    const batches = dynamicBatches.map(batch => ({
        ...batch,
        // Ensure name is dynamic if it wasn't already
        seatsFilledNormalized: batch.seatsFilled
    }));

    const defaultFeatures = [
        { icon: Zap, text: "Early-bird discounts for first registration" },
        { icon: Users, text: "Personal mentoring & path consultation" },
        { icon: ShieldCheck, text: "Lifetime support and networking" },
        { icon: CheckCircle2, text: "Networking with cohort members" },
        { icon: Users, text: "Access to current materials and videos" }
    ];

    const features = propFeatures || defaultFeatures;

    return (
        <section id="upcoming-batches" className="py-12 bg-[#ff4500]/10 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4500]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff4500]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-[#ff4500] text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-lg shadow-orange-600/20">
                        Limited Seats Available
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                        Join Our Next Live Batch – <span className="text-[#ff4500]">
                            {courseName.toLowerCase().includes('training') ? courseName : `${courseName} Training`}
                        </span>
                    </h2>
                    <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                        Secure your spot in our upcoming batches with flexible timings designed for working professionals
                    </p>
                </div>

                {/* Batches Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {batches.map((batch, idx) => {
                        const statusColor = batch.status === 'filling-fast' ? 'bg-red-100 text-red-600' : 'bg-[#ff4500]/10 text-[#ff4500]';

                        return (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-slate-900 shadow-xl border border-[#ff4500]/10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${batch.statusColor || statusColor}`}>
                                        {batch.status?.replace('-', ' ')}
                                    </span>
                                    {(batch.seatsFilledNormalized > 80 || batch.status === 'filling-fast') && (
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 animate-pulse">
                                            <AlertCircle className="w-3 h-3" /> High Demand
                                        </span>
                                    )}
                                </div>

                                <h3 className="font-bold text-sm mb-6 min-h-[56px]">{batch.name}</h3>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Start Date</div>
                                            <div className="font-medium text-xs">{batch.date}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Schedule</div>
                                            <div className="font-medium text-xs">{batch.schedule}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Duration</div>
                                            <div className="font-medium text-xs">{batch.duration}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex justify-between text-[10px] font-medium text-slate-500 mb-2">
                                        <span>Seats Available</span>
                                        <span className={batch.status === 'filling-fast' ? 'text-red-500 font-bold' : 'text-[#ff4500]'}>
                                            {batch.seatsText}
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${batch.status === 'filling-fast' ? 'bg-red-500' : 'bg-[#ff4500]'}`}
                                            style={{ width: `${batch.seatsFilledNormalized}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleRegisterClick}
                                    className="w-full bg-[#ff4500] hover:bg-[#cc3700] text-white font-bold py-3 rounded-lg shadow-md transition-all text-sm uppercase tracking-wide"
                                >
                                    Register Now
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Why Enroll Now Footer */}
                <div className="bg-[#ff4500] text-white rounded-2xl p-8 border border-[#ff4500] shadow-2xl max-w-4xl mx-auto">
                    <h3 className="text-center font-bold text-lg mb-8">Why Enroll Now?</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature: any, idx) => {
                            const Icon = typeof feature.icon === 'string' ? (
                                feature.icon === 'Zap' ? Zap :
                                    feature.icon === 'Users' ? Users :
                                        feature.icon === 'ShieldCheck' ? ShieldCheck :
                                            feature.icon === 'CheckCircle2' ? CheckCircle2 : ShieldCheck
                            ) : (feature.icon || ShieldCheck);

                            return (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#ff4500] flex-shrink-0 shadow-sm">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs text-white font-bold">{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-500">
                        * Limited intake ensuring personal mentoring. 45-day job support included with every batch.
                    </p>
                </div>

            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
                defaultCourse={courseName}
            />
        </section>
    );
}
