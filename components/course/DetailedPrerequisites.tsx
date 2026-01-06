import React from 'react';
import { CheckCircle2, Star, Info } from 'lucide-react';

interface PrerequisiteItem {
    type: 'required' | 'optional';
    title: string;
    items: string[];
}

export default function DetailedPrerequisites() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Prerequisites
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        SAP Ariba Training Prerequisites – Who Should Enroll?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Designed for professionals with varied backgrounds – from complete beginners to experienced SAP consultants
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-5xl mx-auto">

                    {/* Minimum Requirements Card */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Minimum Requirements</h3>
                        <ul className="space-y-4">
                            {[
                                "Basic understanding of procurement processes",
                                "Familiarity with supply chain concepts",
                                "Comfortable with web applications",
                                "Ability to learn complex tools"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-[15px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nice to Have Card */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                            <Star className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Nice to Have (Not Required)</h3>
                        <ul className="space-y-4">
                            {[
                                "Prior SAP experience (MM, SD, SRM, FICO)",
                                "Procurement or finance work experience",
                                "Exposure to ERP systems",
                                "Intermediate Excel skills"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 fill-blue-50" />
                                    <span className="text-slate-600 text-[15px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Blue Info Banner */}
                <div className="max-w-5xl mx-auto bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-blue-900 text-[15px] leading-relaxed">
                            <span className="font-bold">Good to Know:</span> If you're completely new to SAP, we provide foundational modules to get you started. If you're transitioning from SAP ERP or MM, we can accelerate you to advanced topics faster. Our personalized pre-assessment ensures you get the right learning path.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
