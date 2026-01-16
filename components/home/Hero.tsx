"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';
import { Trophy, Users, Headset, Briefcase } from 'lucide-react';

const DEFAULT_CONTENT = {
    heading: "Empower Your Career with Expert SAP Online Training",
    highlight_text: "SAP Online Training",
    subheading: "Industry-Leading SAP Online Training Institute with 95%+ Placement Success",
    description: "Transform your career with ERPVITS, your trusted online SAP training partner. Learn from industry experts with over 15 years of experience in SAP. Get your certification, achieve your dream job and boost your earnings with instructor SAP courses with hands-on projects and placement assistance.",
    cta_primary: "Start Your SAP Training Journey Today",
    cta_secondary: "Explore SAP Courses",
    stats: [
        { val: "12+ Years", label: "In SAP Industry" },
        { val: "8000+", label: "Professionals Trained" },
        { val: "24/7", label: "Team Support" },
        { val: "8+", label: "SAP Solution Architects" }
    ]
};

const Hero = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchHero() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'hero')
                    .single();

                if (data && !error) {
                    setContent({
                        ...data.content,
                        stats: DEFAULT_CONTENT.stats
                    });
                }
            } catch (err) {
                console.error('Error fetching Hero content:', err);
            }
        }
        fetchHero();
    }, []);

    return (
        <div className="bg-white text-slate-900 relative overflow-hidden h-[90vh] min-h-[600px] flex items-center">
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title="Start Your SAP Journey"
            />

            {/* Background Image & Gradient Mask */}
            <div className="absolute inset-0 z-0">
                {/* Responsive background positioning: Center to cover all spaces as requested */}
                <div className="absolute inset-0 bg-[url('/images/erpvitsBG.webp')] bg-cover bg-center bg-no-repeat"></div>

                {/* Gradient: Lighter overlay to make the image look 'darker' (more visible) while keeping text readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40"></div>

                {/* Additional white blur at the bottom for smooth transition to stats/next section */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-2xl lg:max-w-3xl text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-md"
                    >
                        ★ Rated #1 SAP Training Program 2025 ★
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
                    >
                        {content.heading.split(content.highlight_text)[0]}
                        <br className="hidden lg:block" />
                        <span className="text-orange-600 inline-block">{content.highlight_text}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-800 font-medium mb-8 leading-relaxed max-w-xl"
                    >
                        {content.subheading}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
                        >
                            {content.cta_primary}
                        </button>
                        <Link
                            href="/courses"
                            className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-orange-200 hover:bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
                        >
                            {content.cta_secondary}
                        </Link>
                    </motion.div>
                </div>

                {/* Stats Section - Floating at bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-4xl"
                >
                    {content.stats.map((stat, i) => {
                        const icons = [Trophy, Users, Headset, Briefcase];
                        const Icon = icons[i] || Trophy;
                        return (
                            <div key={i} className="flex items-center gap-3 bg-white/60 backdrop-blur-md rounded-lg p-4 border border-slate-100 shadow-sm">
                                <Icon className="w-8 h-8 text-orange-600 flex-shrink-0" />
                                <div>
                                    <div className="font-bold text-slate-900 text-lg leading-none mb-1">{stat.val}</div>
                                    <div className="text-slate-600 text-xs font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
