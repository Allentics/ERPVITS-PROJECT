"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    bg_image: "/images/home_hero_bg_v11.jpg",
    stats: [
        { val: "15+ Years", label: "In SAP Industry" },
        { val: "8000+", label: "Professionals Trained" },
        { val: "24/7", label: "Team support" },
        { val: "8+", label: "SAP Solution Architects" }
    ]
};

const Hero = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [mounted, setMounted] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        setIsMobile(window.innerWidth < 768);
    }, []);

    const content = DEFAULT_CONTENT;

    const headingParts = content.heading.split(content.highlight_text);

    return (
        <div className="bg-white text-slate-900 relative overflow-hidden min-h-[88vh] flex items-center hero-container-inline">
            {/* Background Image: Optimized for instant desktop load via CSS */}
            <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
                <Image
                    src={content.bg_image || "/images/home_hero_bg_v11.jpg"}
                    alt="Expert SAP Trainer"
                    fill
                    className="object-cover object-[95%_10%]"
                    loading="eager"
                    fetchPriority="high"
                    sizes="100vw"
                />
                <div className="absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[60%] bg-gradient-to-r from-rose-50/80 via-rose-50/40 to-transparent z-10 pointer-events-none" />
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title="Start Your SAP Journey"
            />

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10 pb-8 relative z-10 w-full">
                <div className="max-w-3xl text-center lg:text-left">

                    {/* Heading */}
                    <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-950 drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,1)]">
                        {headingParts[0]}
                        <span className="text-[#FF5722]">{content.highlight_text}</span>
                        {headingParts[1]}
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-lg lg:text-xl text-slate-950 font-black mb-6 max-w-3xl drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,1)]">
                        {content.subheading}
                    </h2>

                    {/* Description */}
                    <p className="text-base lg:text-lg text-slate-950 font-black mb-10 leading-relaxed max-w-3xl drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,1)]">
                        {content.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="bg-[#FF5722] hover:bg-[#F4511E] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {content.cta_primary}
                        </button>
                        <Link
                            href="/courses/"
                            className="bg-white text-slate-900 border-2 border-slate-200 hover:border-[#FF5722] hover:text-[#FF5722] px-8 py-4 rounded-md font-bold text-lg transition-all"
                        >
                            {content.cta_secondary}
                        </Link>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24">
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
                </div>
            </div>
        </div>
    );
};

export default Hero;
