import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import { renderRichText } from './SectionRenderer';

interface Feature {
    title: string;
    description: string;
}

interface Stat {
    value: string;
    label: string;
    color: 'blue' | 'purple' | 'emerald' | 'orange';
}

interface WhatsIncludedProps {
    features?: Feature[];
    stats?: Stat[];
    title?: string;
    badge?: string;
    description?: string;
    subtitle?: string;
}

export default function WhatsIncluded({ features: customFeatures, stats: customStats, title, badge, description, subtitle }: WhatsIncludedProps) {
    const defaultFeatures = [
        {
            title: "Live Interactive Classes",
            description: "45-50 hours of instructor led training over 8-12 weeks via video conference with real-time Q&A"
        },
        {
            title: "Real-World Projects",
            description: "Fortune 500 case studies: supplier onboarding, approval workflows, guided buying, S/4HANA integration"
        },
        {
            title: "Hands-On Lab Environment",
            description: "Full access to SAP Ariba systems for requisitions, master data, workflows, sourcing, and contracts"
        },
        {
            title: "Certification Exam Prep",
            description: "Practice exams, study guides, and bootcamp for all three SAP Ariba certification tracks"
        },
        {
            title: "Resume & Interview Coaching",
            description: "Resume optimization, technical interview prep, mock consulting interviews with feedback"
        },
        {
            title: "Complete Study Materials",
            description: "PDFs, presentations, checklists, interview question banks, and official SAP documentation links"
        },
        {
            title: "Lifetime Recording Access",
            description: "All sessions professionally recorded, transcribed, and indexed for easy search and revision"
        },
        {
            title: "Expert Q&A Sessions",
            description: "Weekly 60 minute live sessions for concept clarification, career advice, and peer learning"
        }
    ];

    const defaultStats: Stat[] = [
        { value: "45-50", label: "Hours of Live Training", color: "orange" },
        { value: "50+", label: "Hands On Lab Exercises", color: "orange" },
        { value: "24/7", label: "SAP Ariba Lab Access", color: "orange" }
    ];

    const features = customFeatures || defaultFeatures;
    const stats = customStats || defaultStats;

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-[#ff4500]/10 text-[#ff4500] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block border border-[#ff4500]/10">
                        {badge || "Complete Learning Package"}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        {title || "What's Included in the Training"}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        {renderRichText(subtitle || description || "Everything you need to become a certified professional—from live training to career support")}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-[#ff4500]/10 hover:border-[#ff4500]/20 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-[#ff4500]/10 flex items-center justify-center text-[#ff4500]">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                                <div className="text-slate-600 text-[15px] leading-relaxed">
                                    {renderRichText(feature.description)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Cards */}
                <div className={`grid grid-cols-1 md:grid-cols-${Math.max(stats.length, 3)} gap-6`}>
                    {stats.map((stat, idx) => {
                        // Force orange styling regardless of stat.color for consistency as requested
                        const colorClass = 'bg-[#ff4500]/10/50 border-[#ff4500]/10 text-[#ff4500]';
                        const textClass = 'text-orange-800';

                        return (
                            <div key={idx} className={`${colorClass} p-8 rounded-2xl border flex flex-col items-center justify-center text-center`}>
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className={`${textClass} font-medium`}>{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
