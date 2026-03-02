/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Briefcase, MessageSquare, ArrowRight, CheckCircle2, Video, Calendar, HelpCircle, Gift, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';
import { courses, Section } from '@/lib/courseData';
import ContactForm from '@/components/ContactForm';

export default function DetailedDemoBooking({ title, subtitle, courseName = "this course", benefits, features, syllabusUrl }: { title?: string | React.ReactNode, subtitle?: string | React.ReactNode, courseName?: string, benefits?: any[], features?: any[], syllabusUrl?: string }) {
    const defaultBenefits = [
        { icon: Video, title: `Insightful Live ${courseName.includes('Consultant') ? 'SAP' : ''} Session`, desc: "Observe real training and instructor methodology" },
        { icon: Calendar, title: "30 Min Career Consultation", desc: "Personalized guidance based on your background" },
        { icon: HelpCircle, title: "Q&A with Instructor", desc: "Ask questions about course, certification, and career" },
        { icon: Gift, title: "Special Discount Offer", desc: "Exclusive discount pass for demo attendees" }
    ];

    const displayBenefits = (benefits || features || []) as any[];

    return (
        <section id="detailed-demo-booking" className="py-8 bg-orange-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-900/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-6">
                    <span className="bg-white text-slate-900 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2 inline-block">
                        Get Started
                    </span>
                    <h2 className="text-xl font-bold text-white mb-2">
                        {title || <>Ready to Become an <span className="text-white underline decoration-white/30">{courseName} Consultant?</span></>}
                    </h2>
                    <p className="text-orange-50 max-w-xl mx-auto text-[11px]">
                        {subtitle || `Book your free demo today and take the first step towards a lucrative ${courseName} career`}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-bold text-white mb-3">What You'll Get With Your Free Demo</h3>
                            <div className="space-y-2">
                                {displayBenefits.map((itemValue: string | { title: string; desc?: string; description?: string; icon?: React.ElementType }, i: number) => {
                                    const isString = typeof itemValue === 'string';
                                    const itemTitle = isString ? itemValue.split(' – ')[0] : itemValue.title;
                                    const itemDesc = isString ? itemValue.split(' – ')[1] : (itemValue.desc || itemValue.description);
                                    const Icon = !isString && itemValue.icon ? itemValue.icon : CheckCircle2;

                                    return (
                                        <div key={i} className="bg-white/10 border border-white/20 p-2.5 rounded-lg flex items-start gap-3">
                                            <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-slate-900 shrink-0">
                                                <Icon className="w-3.5 h-3.5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-0 text-[11px]">{itemTitle}</h4>
                                                {itemDesc && <p className="text-[9px] text-orange-50">{itemDesc}</p>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white rounded-xl p-4 lg:p-5 shadow-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-t-xl"></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Book Your <span className="text-slate-900">Free Demo</span></h3>

                        <ContactForm
                            defaultCourse={courseName !== "this course" ? courseName : ""}
                            showLabels={true}
                            className="text-slate-900"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

