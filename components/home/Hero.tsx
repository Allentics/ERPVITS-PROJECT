"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';
import { Trophy, Users, Headset, Briefcase } from 'lucide-react';

const DEFAULT_CONTENT = {
    heading: "Empower Your Career with Expert SAP Online Training",
    highlight_text: "SAP Online Training",
    subheading: "Industry-Leading SAP Online Training Institute with 95%+ Placement Success",
    description: "Transform your career with ERPVITS, your trusted online SAP training partner. Learn from industry experts with over 15 years of experience in SAP. Get your certification, achieve your dream job and boost your earnings with instructor SAP courses with hands-on projects and placement assistance.",
    badge: "★ RATED #1 SAP TRAINING PROGRAM 2025 ★",
    cta_primary: "Start Your SAP Training Journey Today",
    cta_secondary: "Explore SAP Courses",
    bg_image: "/images/home_hero_bg_v10.png",
    stats: [
        { val: "15+ Years", label: "In SAP Industry" },
        { val: "8000+", label: "Professionals Trained" },
        { val: "24/7", label: "Team Support" },
        { val: "8+", label: "SAP Solution Architects" }
    ]
};

const Hero = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        // Optional: Fetch dynamic content if needed, but defaulting to screenshot matching for now.
        async function fetchHero() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'hero')
                    .single();

                if (data && !error) {
                    const merged = { ...DEFAULT_CONTENT, ...data.content };
                    // Force the new statistics and image locally even if DB has old ones
                    merged.bg_image = "/images/home_hero_bg_v10.png";
                    if (merged.stats) {
                        merged.stats = merged.stats.map((s: any) => {
                            if (s.label === "Professionals Trained") return { ...s, val: "8000+" };
                            if (s.label === "In SAP Industry") return { ...s, val: "15+ Years" };
                            return s;
                        });
                    }
                    setContent(merged);
                }
            } catch (err) {
                console.error('Error fetching Hero content:', err);
            }
        }
        fetchHero();
    }, []);

    const headingParts = content.heading.split(content.highlight_text);

    return (
        <div className="bg-white text-slate-900 relative overflow-hidden min-h-[85vh] flex items-center">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={content.bg_image || "/images/home_hero_bg_v10.png"}
                    alt="Modern Professional Workspace"
                    fill
                    className="object-cover brightness-[1.15] contrast-[1.05]"
                    priority
                    quality={100}
                    unoptimized
                />
                {/* Multi-layered overlay for perfect readability */}
                <div className="absolute inset-0 bg-white/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title="Start Your SAP Journey"
            />

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-16 relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">



                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
                    >
                        {headingParts[0]}
                        <span className="text-[#FF5722]">{content.highlight_text}</span>
                        {headingParts[1]}
                    </motion.h1>

                    {/* Subheading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg lg:text-xl text-slate-900 font-extrabold mb-6 max-w-3xl mx-auto drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
                    >
                        {content.subheading}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-base lg:text-lg text-slate-900 font-extrabold mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
                    >
                        {content.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="bg-[#FF5722] hover:bg-[#F4511E] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {content.cta_primary}
                        </button>
                        <Link
                            href="/courses"
                            className="bg-white text-slate-900 border-2 border-slate-200 hover:border-[#FF5722] hover:text-[#FF5722] px-8 py-4 rounded-md font-bold text-lg transition-all"
                        >
                            {content.cta_secondary}
                        </Link>
                    </motion.div>
                </div>

                {/* Stats Section - Cards at Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24"
                >
                    {content.stats.map((stat, i) => {
                        const icons = [Trophy, Users, Headset, Briefcase];
                        const Icon = icons[i] || Trophy;
                        return (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <Icon className="w-8 h-8 text-[#FF5722] mb-3" strokeWidth={1.5} />
                                <div className="font-bold text-slate-900 text-xl md:text-2xl mb-1">{stat.val}</div>
                                <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
