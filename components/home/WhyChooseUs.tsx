"use client";

import React, { useState, useEffect } from 'react';
import { Monitor, Calculator, Briefcase, Award, Clock, Users, ShieldCheck, Zap } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const ICON_MAP: any = {
    Monitor, Calculator, Briefcase, Award, Clock, Users, ShieldCheck, Zap
};

const DEFAULT_CONTENT = {
    title: "Why Choose ERPVITS for Your SAP Online Training?",
    subtitle: "Transform Your Career with Certified SAP Online Training – 8000+ Professionals Trained & Successfully Placed Globally",
    benefits: [
        {
            icon: "Monitor",
            title: "Expert SAP Training with Industry Leaders",
            desc: "Instructors with 15+ years of practical SAP experience. Learn from experts who have undertaken SAP projects in Fortune 500 companies."
        },
        {
            icon: "Zap",
            title: "Real-Time, Instructor-Led SAP Courses",
            desc: "Interactive live sessions with real-time Q&A. No pre-recorded content. Engage in discussions and receive prompt responses."
        },
        {
            icon: "Briefcase",
            title: "Hands-On Project-Based SAP Learning",
            desc: "Practice with live SAP environments. Complete end-to-end projects from requirement gathering to implementation."
        },
        {
            icon: "Award",
            title: "Job Placement support & Career support",
            desc: "Placement success rate of >95%. Comprehensive support including resume prep, mock interviews, and hiring partner connections."
        },
        {
            icon: "ShieldCheck",
            title: "Guidance for Multiple SAP Certifications",
            desc: "support for global certifications (Ariba, FICO, S/4HANA, etc.). Align coursework with exam requirements."
        },
        {
            icon: "Clock",
            title: "Flexible SAP Learning Formats for Your Schedule",
            desc: "Instructor-Led, Self-Paced, and Corporate options. Weekend and evening batches available for working professionals."
        },
        {
            icon: "Calculator",
            title: "Affordable SAP Course Charges",
            desc: "Competitive pricing with flexible installment plans. High quality training that doesn't break the bank."
        },
        {
            icon: "Users",
            title: "Lifetime Career support & Mentorship",
            desc: "Lifetime access to mentors, alumni network, and professional development resources even after course completion."
        }
    ]
};

export default function WhyChooseUs() {
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchContent() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'why_choose_us')
                    .single();

                if (data && !error) {
                    const merged = { ...DEFAULT_CONTENT, ...data.content };
                    // Force the 8000+ update locally
                    if (merged.subtitle) {
                        merged.subtitle = merged.subtitle.replace(/6000\+/g, "8000+");
                    }
                    setContent(merged);
                }
            } catch (err) {
                console.error('Error fetching WhyChooseUs content:', err);
            }
        }
        fetchContent();
    }, []);

    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
                    <p className="text-lg text-gray-600">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.benefits.map((b: any, i: number) => {
                        const IconComponent = ICON_MAP[b.icon] || ShieldCheck;
                        return (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                    <IconComponent className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{b.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
