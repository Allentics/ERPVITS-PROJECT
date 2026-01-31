"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Calendar, Clock, User, Phone, Send, Globe, Monitor } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { countryCodes } from '@/lib/countryCodes';

const WebinarPopup = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        country: ''
    });

    const excludedPaths = ['/privacy', '/terms-conditions', '/refund-policy', '/privacy-policy'];

    useEffect(() => {
        if (excludedPaths.includes(pathname) || isVisible || isSubmitted) {
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 20000); // 20 seconds

        return () => clearTimeout(timer);
    }, [pathname, isVisible, isSubmitted]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('webinar_registrations')
                .insert([{
                    ...formData,
                    page_url: pathname,
                    source: 'Global Popup'
                }]);

            if (error) throw error;
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
                        onClick={() => setIsVisible(false)}
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
                                        className="object-contain object-bottom scale-[1.15] origin-bottom z-10"
                                        priority
                                    />
                                </div>

                                {/* Info Column */}
                                <div className="w-[62%] flex flex-col justify-between pt-2 pb-6 relative z-20">
                                    {/* Orange Header Card */}
                                    <div className="bg-[#f39c12] rounded-[24px] p-4 shadow-[0_10px_25px_rgba(243,156,18,0.25)]">
                                        <p className="text-white italic font-serif text-base leading-none mb-1 text-center">Learn</p>
                                        <h3 className="text-white font-black text-[20px] uppercase font-sans leading-tight tracking-tighter text-center">Fundamentals</h3>
                                        <h3 className="text-white font-black text-[20px] uppercase font-sans leading-tight tracking-tighter text-center mb-1.5">of SAP</h3>
                                        <p className="text-white text-[11px] font-bold text-center opacity-90 leading-none mb-3">with Prof. Dilip Sadh</p>

                                        <div className="flex items-center gap-2 justify-center pt-2.5 border-t border-white/20">
                                            <svg className="w-3.5 h-3.5 text-orange-900/50 fill-current" viewBox="0 0 24 24">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L11.017 3L11.017 21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C5.91243 8 5.017 7.10457 5.017 6V3L2.017 3L2.017 21H5.017Z" />
                                            </svg>
                                            <p className="text-white text-[9px] font-black uppercase tracking-tight">sap training since 2008</p>
                                        </div>
                                    </div>

                                    {/* Date/Time Buttons */}
                                    <div className="flex flex-col gap-2.5 px-1">
                                        <div className="bg-[#e67e22] text-white rounded-[18px] py-3 px-5 flex items-center gap-4 shadow-lg border-b-2 border-[#d35400]">
                                            <div className="bg-white/90 p-1 rounded-md">
                                                <Calendar className="w-4.5 h-4.5 text-[#e67e22]" />
                                            </div>
                                            <span className="font-black text-[17px] uppercase tracking-tighter">Thursday</span>
                                        </div>
                                        <div className="bg-[#e67e22] text-white rounded-[18px] py-3 px-5 flex items-center gap-4 shadow-lg border-b-2 border-[#d35400]">
                                            <div className="bg-white/90 p-1 rounded-md">
                                                <Clock className="w-4.5 h-4.5 text-[#e67e22]" />
                                            </div>
                                            <span className="font-black text-[17px] uppercase tracking-tighter whitespace-nowrap">12:00 PM (EST)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Label card */}
                        <div className="bg-white rounded-[28px] p-3 text-center shadow-lg h-[110px] flex flex-col justify-center border-b-4 border-[#e67e22]">
                            <h4 className="text-[#e67e22] font-black text-[24px] leading-none uppercase tracking-tighter">Free SAP Training</h4>
                            <h4 className="text-[#e67e22] font-black text-[30px] leading-none uppercase tracking-tighter mb-2">Webinar</h4>
                            <div className="flex justify-center items-center">
                                <div className="border border-[#e67e22] px-5 py-0.5 rounded-full bg-white">
                                    <span className="text-[#e67e22] text-[9px] font-black uppercase tracking-tight">Register to Join!</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - 50% split */}
                    <div className="w-full md:w-1/2 bg-[#F8F8F8] p-5 md:p-8 flex flex-col justify-center relative">
                        {/* Close Button Desktop */}
                        <button
                            onClick={() => setIsVisible(false)}
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
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Enter your contact number *"
                                            className="w-full py-2 outline-none text-gray-800 text-sm font-medium placeholder:text-gray-400 bg-transparent"
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

                                    <div className="flex items-center border border-gray-200 rounded-[12px] px-3.5 py-0.5 bg-white shadow-sm focus-within:border-orange-500 transition-colors relative">
                                        <Globe className="w-4.5 h-4.5 text-gray-400 mr-2.5" />
                                        <select
                                            required
                                            className="w-full py-2 outline-none text-gray-800 text-sm font-medium appearance-none bg-transparent cursor-pointer"
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        >
                                            <option value="">Select Country</option>
                                            {countryCodes.map((country) => (
                                                <option key={country.name} value={country.name}>{country.name}</option>
                                            ))}
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
                                        Book a Free Webinar
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default WebinarPopup;
