"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { CheckCircle2, Award, Rocket, Target, BookOpen, Clock, Users, ShieldCheck, TrendingUp, Briefcase, Headphones, Star, Search, Zap, MessageSquare } from 'lucide-react';
import { renderRichText } from '@/lib/richText';

interface Step {
    title: string;
    timeline: string;
    points: string[];
    icon?: any;
    color?: string;
}

interface StepsData {
    items?: Step[];
    stats?: {
        value: string;
        label: string;
        icon: string;
    }[];
    // Allow array access for legacy support if needed, or better, change the component to handle object structure
    [key: string]: any;
}

export default function DetailedPostTrainingJourney({ title, steps: propSteps, items, stats: propStats, courseName = "this course" }: { title?: string | React.ReactNode, steps?: any[], items?: any[], stats?: any[], courseName?: string }) {
    const scrollToBooking = () => {
        const element = document.getElementById('detailed-demo-booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const iconMap: Record<string, any> = {
        "CheckCircle2": CheckCircle2,
        "Rocket": Rocket,
        "TrendingUp": TrendingUp,
        "Award": Award,
        "Briefcase": Briefcase,
        "Clock": Clock,
        "Headphones": Headphones,
        "Users": Users
    };

    const defaultSteps = [
        {
            title: "Immediate Post-Training",
            timeline: "Week 1-4",
            color: "orange",
            icon: CheckCircle2,
            points: [
                "Receive course completion certificate",
                "Access lifetime review materials and recordings",
                "Join alumni network and community forum",
                `Begin resume updates highlighting ${courseName} expertise`,
                `Apply for ${courseName} Certification exam`,
                "Start job search with career services support",
                "Participate in alumni networking events",
                "Receive interview coaching and mock interview feedback"
            ]
        },
        {
            title: "Month 2-3",
            timeline: "Job Search & Success",
            color: "slate",
            icon: Rocket,
            points: [
                `Secure first ${courseName} consulting opportunity (typical timeline)`,
                "Begin real-world project experience",
                "Continue post-training support from instructors"
            ]
        },
        {
            title: "First Year in Role",
            timeline: "On The Job",
            color: "orange",
            icon: TrendingUp,
            points: [
                "Start your client's business and understand current procurement processes",
                "Get hands-on experience with actual implementations",
                "Lead small configuration tasks",
                "Mentor other junior consultants",
                "Build reputation for reliability and quality work",
                "Lead components of implementation projects",
                "Drive process improvements",
                "Demonstrate business acumen alongside technical skills"
            ]
        },
        {
            title: "Long-Term Growth",
            timeline: "2-5 Years",
            color: "slate",
            icon: Award,
            points: [
                `Earn ${courseName} certifications`,
                "Build domain expertise in specific industries",
                "Develop leadership and project management capabilities",
                "Transition to senior consulting roles",
                "Explore specializations"
            ]
        }
    ];

    const steps = propSteps || items || defaultSteps;

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-[#ff4500]/10 text-[#ff4500] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Your Career Journey
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                        {title ? (
                            <span dangerouslySetInnerHTML={{ __html: title }} />
                        ) : (
                            `What to Expect After Completing ${courseName} Training`
                        )}
                    </h2>
                    <p className="text-gray-600 text-base">
                        Your comprehensive growth roadmap from certification to career excellence
                    </p>
                </div>

                {/* Timeline Cards */}
                <div className="space-y-6 mb-20 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block"></div>

                    {steps.map((step: any, idx: number) => {
                        const Icon = typeof step.icon === 'string' ? (iconMap[step.icon] || CheckCircle2) : (step.icon || CheckCircle2);

                        return (
                            <div key={idx} className="relative pl-0 md:pl-20">
                                {/* Icon Marker */}
                                <div className={`hidden md:flex absolute left-0 w-12 h-12 rounded-full border-4 border-white shadow-sm items-center justify-center z-10 
                                    ${step.color === 'orange' ? 'bg-[#ff4500] text-white' : 'bg-slate-800 text-white'}`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Card content */}
                                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white
                                                ${step.color === 'orange' ? 'bg-[#ff4500]' : 'bg-slate-800'}`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                                        </div>
                                        {step.timeline && (
                                            <span className="text-xs font-bold text-[#ff4500] bg-[#ff4500]/10 px-3 py-1 rounded-full border border-[#ff4500]/10 inline-block w-fit">
                                                {step.timeline}
                                            </span>
                                        )}
                                    </div>

                                    <ul className="space-y-3">
                                        {step.points.map((point: string, pIdx: number) => (
                                            <li key={pIdx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                                                <span className="text-slate-600 text-sm leading-relaxed">{renderRichText(point)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Stats & CTA */}
                {propStats && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {propStats.map((stat: any, idx: number) => {
                            const Icon = iconMap[stat.icon] || CheckCircle2;
                            const isDark = idx % 2 !== 0; // Alternating style based on index or prop

                            return (
                                <div key={idx} className={`${isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#ff4500]/10 border-[#ff4500]/10'} p-6 rounded-xl text-center border`}>
                                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm ${isDark ? 'bg-white/10 text-white' : 'bg-white text-[#ff4500]'}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                                    <div className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {!propStats && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        <div className="bg-[#ff4500]/10 p-6 rounded-xl text-center border border-[#ff4500]/10">
                            <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-[#ff4500] mb-3 shadow-sm">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div className="text-lg font-bold text-slate-900 mb-1">2-3 Months</div>
                            <div className="text-[10px] text-slate-500">Average Time to First Role</div>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-800">
                            <div className="w-10 h-10 mx-auto bg-white/10 rounded-full flex items-center justify-center text-white mb-3">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <div className="text-lg font-bold text-white mb-1">100%</div>
                            <div className="text-[10px] text-slate-400">Career support</div>
                        </div>
                        <div className="bg-[#ff4500]/10 p-6 rounded-xl text-center border border-[#ff4500]/10">
                            <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-[#ff4500] mb-3 shadow-sm">
                                <Headphones className="w-5 h-5" />
                            </div>
                            <div className="text-lg font-bold text-slate-900 mb-1">6 Months</div>
                            <div className="text-[10px] text-slate-500">Post-Training support</div>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-800">
                            <div className="w-10 h-10 mx-auto bg-white/10 rounded-full flex items-center justify-center text-white mb-3">
                                <Users className="w-5 h-5" />
                            </div>
                            <div className="text-lg font-bold text-white mb-1">Lifetime</div>
                            <div className="text-[10px] text-slate-400">Alumni Network Access</div>
                        </div>
                    </div>
                )}

                <div className="text-center">
                    <p className="text-slate-500 text-sm mb-6">Ready to start your {courseName} career journey?</p>
                    <button
                        onClick={scrollToBooking}
                        className="bg-[#ff4500] hover:bg-[#cc3700] text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        Enroll in Next Batch
                    </button>
                </div>
            </div>
        </section>
    );
}


