/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2, ShieldCheck, Users, Zap, X, PlayCircle, Send, Loader2 } from 'lucide-react';
import ContactModal from '@/components/ContactModal';
import { supabase } from '@/lib/supabase';
import { courses } from '@/lib/courseData';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';
import { countryCodes } from '@/lib/countryCodes';

export default function DetailedUpcomingBatches({ courseName = "SAP Ariba", batches: propBatches, features: propFeatures }: { courseName?: string, batches?: any[], features?: any[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isSelfPacedOpen, setIsSelfPacedOpen] = useState(false);
    const [selfPacedStatus, setSelfPacedStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [selfPacedForm, setSelfPacedForm] = useState({ name: '', phone: '', email: '', course: courseName || '' });
    const [selfPacedError, setSelfPacedError] = useState('');

    const handleRegisterClick = () => {
        const title = `Register for Next ${courseName} Batch`;
        setModalTitle(title);
        setIsModalOpen(true);
    };

    const handleSelfPacedChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSelfPacedForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSelfPacedSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newTab = window.open('/thank-you', '_blank');
        setSelfPacedStatus('loading');
        setSelfPacedError('');
        try {
            const { error } = await supabase.from('contacts').insert([{
                name: selfPacedForm.name,
                first_name: selfPacedForm.name,
                email: selfPacedForm.email,
                phone: selfPacedForm.phone,
                course: selfPacedForm.course,
                message: 'Self-Paced Learning Enrollment',
            }]);
            if (error) throw error;
            submitToGoogleSheets({
                firstName: selfPacedForm.name, lastName: '', email: selfPacedForm.email,
                countryCode: '', phone: selfPacedForm.phone, course: selfPacedForm.course, message: 'Self-Paced'
            }).catch(console.error);
            setSelfPacedStatus('success');
        } catch (err: any) {
            if (newTab) newTab.close();
            setSelfPacedStatus('error');
            setSelfPacedError(err.message || 'Something went wrong. Please try again.');
        }
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

                {/* Self-Paced Learning Option Section */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4500]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#ff4500]/20 border border-[#ff4500]/30 flex items-center justify-center shadow-lg">
                            <PlayCircle className="w-8 h-8 text-[#ff4500]" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                                Self-Paced Learning Option
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-2">
                                Prefer flexibility? Choose our <span className="text-[#ff4500] font-semibold">Self-Paced Learning Program</span> and master SAP at your own speed. Get lifetime access to high-quality recorded sessions.
                            </p>
                            <p className="text-slate-400 text-sm italic">
                                Start anytime. Learn anywhere. Upgrade your career on your schedule.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex-shrink-0">
                            <button
                                onClick={() => { setIsSelfPacedOpen(true); setSelfPacedStatus('idle'); setSelfPacedError(''); }}
                                className="inline-flex items-center gap-2 px-7 py-4 bg-[#ff4500] hover:bg-[#cc3700] text-white font-bold rounded-xl shadow-lg shadow-[#ff4500]/30 transition-all hover:scale-105 active:scale-95 text-sm whitespace-nowrap"
                            >
                                <PlayCircle className="w-5 h-5" />
                                Get Instant Access to Full Course
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-500">
                        * Limited intake ensuring personal mentoring. 45-day job support included with every batch.
                    </p>
                </div>

            </div>

            {/* Register Batch Modal */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
                defaultCourse={courseName}
            />

            {/* Self-Paced Enrollment Modal */}
            {isSelfPacedOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-200">
                        {/* Top accent */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-[#ff4500] to-orange-400"></div>

                        {/* Close button */}
                        <button
                            onClick={() => setIsSelfPacedOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                        >
                            <X className="w-4 h-4 text-slate-600" />
                        </button>

                        <div className="p-7">
                            {/* Form Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center">
                                    <PlayCircle className="w-5 h-5 text-[#ff4500]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-extrabold text-slate-900">Enroll for Self-Paced Learning</h3>
                                    <p className="text-xs text-slate-500">Get instant lifetime access to all recorded sessions</p>
                                </div>
                            </div>

                            {selfPacedStatus === 'success' ? (
                                <div className="text-center py-8">
                                    <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">You&apos;re Enrolled!</h4>
                                    <p className="text-slate-600 text-sm mb-6">Our team will contact you shortly with your access details.</p>
                                    <button
                                        onClick={() => setIsSelfPacedOpen(false)}
                                        className="px-6 py-2.5 bg-[#ff4500] text-white font-bold rounded-xl hover:bg-[#cc3700] transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSelfPacedSubmit} className="space-y-4">
                                    {selfPacedStatus === 'error' && (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700 text-xs">
                                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                            {selfPacedError}
                                        </div>
                                    )}

                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name <span className="text-[#ff4500]">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={selfPacedForm.name}
                                            onChange={handleSelfPacedChange}
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4500]/20 focus:border-[#ff4500] outline-none transition-all text-sm"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number <span className="text-[#ff4500]">*</span></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={selfPacedForm.phone}
                                            onChange={handleSelfPacedChange}
                                            required
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4500]/20 focus:border-[#ff4500] outline-none transition-all text-sm"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address <span className="text-[#ff4500]">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={selfPacedForm.email}
                                            onChange={handleSelfPacedChange}
                                            required
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4500]/20 focus:border-[#ff4500] outline-none transition-all text-sm"
                                        />
                                    </div>

                                    {/* Select Module */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Select Module <span className="text-[#ff4500]">*</span></label>
                                        <select
                                            name="course"
                                            value={selfPacedForm.course}
                                            onChange={handleSelfPacedChange}
                                            required
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4500]/20 focus:border-[#ff4500] outline-none transition-all text-sm appearance-none cursor-pointer"
                                        >
                                            <option value="">Select SAP Module</option>
                                            {courses
                                                .filter(c => c.title !== 'Other' && c.id !== 'other')
                                                .filter((c, index, self) => index === self.findIndex((t) => t.title === c.title))
                                                .map((course) => (
                                                    <option key={course.id} value={course.title}>{course.title}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={selfPacedStatus === 'loading'}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#ff4500] hover:bg-[#cc3700] text-white font-bold rounded-xl shadow-lg shadow-[#ff4500]/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                                    >
                                        {selfPacedStatus === 'loading' ? (
                                            <><Loader2 className="animate-spin w-4 h-4" /> Enrolling...</>
                                        ) : (
                                            <><Send className="w-4 h-4" /> Get Instant Access</>
                                        )}
                                    </button>
                                    <p className="text-[10px] text-center text-slate-400">By submitting, you agree to our privacy policy.</p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

