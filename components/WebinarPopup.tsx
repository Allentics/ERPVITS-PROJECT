"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Calendar, Clock, User, Phone, Send, Globe, Monitor } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { countryCodes } from '@/lib/countryCodes';
import { courses } from '@/lib/courseData';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';

const WebinarPopup = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        countryCode: '+91',
        phone: '',
        email: '',
        module: '',
        preferredTiming: ''
    });

    const excludedPaths = ['/privacy', '/terms-conditions', '/refund-policy', '/privacy-policy'];

    useEffect(() => {
        // Reset state on path change
        setIsVisible(false);
        setIsSubmitted(false);

        if (pathname.startsWith('/admin') || excludedPaths.includes(pathname)) {
            return;
        }

        // Check if popup was already closed for this specific page
        const isClosedForPage = sessionStorage.getItem(`webinar_popup_closed_${pathname}`);
        if (isClosedForPage) {
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 20000); // 20 seconds

        return () => clearTimeout(timer);
    }, [pathname]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const fullPhone = `${formData.countryCode} ${formData.phone}`;
            const { error } = await supabase
                .from('webinar_registrations')
                .insert([{
                    name: formData.name,
                    phone: fullPhone,
                    email: formData.email,
                    module: formData.module,
                    preferred_timing: formData.preferredTiming,
                    page_url: pathname,
                    source: 'Global Popup'
                }]);

            if (error) throw error;

            // Send to Google Sheets (Fire and forget to speed up UI)
            submitToGoogleSheets({
                firstName: formData.name.split(' ')[0] || '',
                lastName: formData.name.split(' ').slice(1).join(' ') || '',
                email: formData.email,
                countryCode: formData.countryCode,
                phone: formData.phone,
                course: formData.module
            }).catch((err: any) => console.error('Google Sheet Error:', err));

            setIsSubmitted(true);
            setTimeout(() => setIsVisible(false), 3000);
        } catch (err) {
            console.error('Error submitting webinar registration:', err);
            setIsSubmitted(true);
            setTimeout(() => setIsVisible(false), 3000);
        }
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full max-w-[850px] bg-[#222222] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[480px]"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => {
                            setIsVisible(false);
                            // Store that popup was closed for this specific page
                            sessionStorage.setItem(`webinar_popup_closed_${pathname}`, 'true');
                        }}
                        className="absolute top-3 right-3 z-[110] p-1 text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8 md:text-gray-300" />
                    </button>

                    {/* Left Panel - 50% split */}
                    <div className="w-full md:w-1/2 bg-[#222222] p-2 md:p-3 flex flex-col gap-2 relative border-r-2 border-dashed border-white/10">
                        {/* Top Branding Card */}
                        <div className="bg-white rounded-[28px] p-3 flex-1 relative flex flex-col justify-end overflow-hidden">
                            <div className="flex flex-row h-full">
                                {/* Woman Column */}
                                <div className="w-[38%] relative h-full flex items-end">
                                    <Image
                                        src="/images/webinar_woman.png"
                                        alt="Professional"
                                        fill
                                        className="object-contain object-bottom scale-[1.45] origin-bottom z-10"
                                        priority
                                    />
                                </div>

                                {/* Info Column */}
                                <div className="w-[62%] flex flex-col justify-between pt-2 pb-6 relative z-20">
                                    {/* Orange Header Card */}
                                    <div className="bg-[#f39c12] rounded-[24px] p-4 shadow-[0_10px_25px_rgba(243,156,18,0.25)]">
                                        <h3 className="text-white font-black text-[20px] uppercase font-sans leading-tight tracking-tighter text-center mb-0.5">Attend SAP Upcoming Demo</h3>
                                        <h4 className="text-black font-black text-[16px] uppercase font-sans leading-tight tracking-tighter text-center mb-2">Special Demo Offer</h4>
                                        <p className="text-white text-[14px] font-bold text-center opacity-100 leading-snug mb-3">Attend Demo Session & Get 10% OFF on Course Fees!</p>

                                        <div className="flex items-center gap-2 justify-center pt-2.5 border-t border-white/20">
                                            <svg className="w-3.5 h-3.5 text-orange-900/50 fill-current" viewBox="0 0 24 24">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L11.017 3L11.017 21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C5.91243 8 5.017 7.10457 5.017 6V3L2.017 3L2.017 21H5.017Z" />
                                            </svg>
                                            <p className="text-white text-[9px] font-black uppercase tracking-tight">sap training since 2008</p>
                                        </div>
                                    </div>

                                    {/* Feature Points */}
                                    <div className="flex flex-col gap-1.5 px-0.5 mt-1">
                                        {[
                                            "Live SAP demonstration",
                                            "Expert instructor guidance",
                                            "Q&A session included",
                                            "Course roadmap overview"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-1.5">
                                                <div className="bg-orange-100 p-0.5 rounded-full flex-shrink-0">
                                                    <svg className="w-2.5 h-2.5 text-[#e67e22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-800 text-[11px] font-black uppercase leading-tight tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Label card */}
                        <div className="bg-white rounded-[28px] p-3 text-center shadow-lg h-[110px] flex flex-col justify-center border-b-4 border-[#e67e22]">
                            <h4 className="text-[#e67e22] font-black text-[28px] leading-none uppercase tracking-tighter mb-1.5">Book Your Slot</h4>
                            <div className="flex justify-center items-center">
                                <span className="text-black text-[11px] font-bold uppercase tracking-tight bg-gray-100 px-2 py-0.5 rounded-full">Offer valid for first 10 candidates only</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - 50% split */}
                    <div className="w-full md:w-1/2 bg-[#F8F8F8] p-5 md:p-8 flex flex-col justify-center relative">
                        {/* Close Button Desktop */}
                        <button
                            onClick={() => {
                                setIsVisible(false);
                                // Store that popup was closed for this specific page
                                sessionStorage.setItem(`webinar_popup_closed_${pathname}`, 'true');
                            }}
                            className="absolute top-4 right-4 z-50 p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-black transition-all hidden md:block"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        {isSubmitted ? (
                            <div className="text-center py-6">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                                </motion.div>
                                <h3 className="text-2xl font-black text-gray-900 uppercase">You're Registered!</h3>
                            </div>
                        ) : (
                            <div className="w-full">
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl md:text-3xl font-black text-black uppercase leading-tight mb-0.5">Book Your Slot</h2>
                                    <p className="text-red-600 font-bold text-base">Few slots are left!</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <div className="flex items-center border border-gray-200 rounded-[12px] px-3.5 py-0.5 bg-white shadow-sm focus-within:border-orange-500 transition-colors">
                                        <User className="w-4.5 h-4.5 text-gray-400 mr-2.5" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter your name *"
                                            className="w-full py-2 outline-none text-gray-800 text-sm font-medium placeholder:text-gray-400 bg-transparent"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center border border-gray-200 rounded-[12px] px-3.5 py-0.5 bg-white shadow-sm focus-within:border-orange-500 transition-colors">
                                        <Phone className="w-4.5 h-4.5 text-gray-400 mr-2.5" />
                                        <select
                                            required
                                            className="w-[110px] py-2 outline-none text-gray-800 text-sm font-medium bg-transparent cursor-pointer border-r border-gray-200 pr-2 mr-2"
                                            value={formData.countryCode}
                                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                        >
                                            {countryCodes.map((country) => (
                                                <option key={country.name} value={country.code}>
                                                    {country.name} ({country.code})
                                                </option>
                                            ))}
                                        </select>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Enter your contact number *"
                                            className="flex-1 py-2 outline-none text-gray-800 text-sm font-medium placeholder:text-gray-400 bg-transparent"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center border border-gray-200 rounded-[12px] px-3.5 py-0.5 bg-white shadow-sm focus-within:border-orange-500 transition-colors">
                                        <Send className="w-4.5 h-4.5 text-gray-400 mr-2.5" />
                                        <input
                                            required
                                            type="email"
                                            placeholder="Enter your email *"
                                            className="w-full py-2 outline-none text-gray-800 text-sm font-medium placeholder:text-gray-400 bg-transparent"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    {/* Module Selection */}
                                    <div className="flex items-center border border-gray-200 rounded-[12px] px-3.5 py-0.5 bg-white shadow-sm focus-within:border-orange-500 transition-colors relative">
                                        <Monitor className="w-4.5 h-4.5 text-gray-400 mr-2.5" />
                                        <select
                                            required
                                            className="w-full py-2 outline-none text-gray-800 text-sm font-medium appearance-none bg-transparent cursor-pointer"
                                            value={formData.module}
                                            onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                                        >
                                            <option value="">Choose Module</option>
                                            {courses.map((course) => (
                                                <option key={course.id} value={course.title}>{course.title}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-3.5 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>

                                    {/* Timing Selection */}
                                    <div className="flex items-center border border-gray-200 rounded-[12px] px-3.5 py-0.5 bg-white shadow-sm focus-within:border-orange-500 transition-colors relative">
                                        <Clock className="w-4.5 h-4.5 text-gray-400 mr-2.5" />
                                        <select
                                            required
                                            className="w-full py-2 outline-none text-gray-800 text-sm font-medium appearance-none bg-transparent cursor-pointer"
                                            value={formData.preferredTiming}
                                            onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                                        >
                                            <option value="">Choose Your Preferred Timing</option>
                                            <option value="Weekend Morning Session">Weekend Morning Session</option>
                                            <option value="Weekend Evening Session">Weekend Evening Session</option>
                                            <option value="Weekday Morning Session">Weekday Morning Session</option>
                                            <option value="Weekday Evening Session">Weekday Evening Session</option>
                                        </select>
                                        <div className="absolute right-3.5 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#f4511e] hover:bg-orange-600 text-white font-black py-3 rounded-full text-base shadow-md transition-all flex items-center justify-center gap-2.5 mt-2"
                                    >
                                        <Monitor className="w-5 h-5" />
                                        Register for Demo
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div >
        </AnimatePresence >
    );
};

export default WebinarPopup;
