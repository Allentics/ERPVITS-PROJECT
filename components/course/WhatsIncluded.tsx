import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function WhatsIncluded() {
    const features = [
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

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block border border-emerald-100">
                        Complete Learning Package
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        What's Included in the SAP Ariba Training
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Everything you need to become a certified SAP Ariba professional—from live training to career support
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Blue Card */}
                    <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 flex flex-col items-center justify-center text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">45-50</div>
                        <div className="text-blue-800 font-medium">Hours of Live Training</div>
                    </div>

                    {/* Purple Card */}
                    <div className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100 flex flex-col items-center justify-center text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                        <div className="text-purple-800 font-medium">Hands On Lab Exercises</div>
                    </div>

                    {/* Green Card */}
                    <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                        <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                        <div className="text-emerald-800 font-medium">SAP Ariba Lab Access</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
