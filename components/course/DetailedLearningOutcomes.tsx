import React from 'react';
import { CheckCircle2, ShieldCheck, Database, FileText, ShoppingCart, BookOpen, CreditCard, Building, BarChart3 } from 'lucide-react';
import { aribaLearningOutcomes } from '@/lib/contentHelpers';

const iconMap: Record<string, any> = {
    "ShoppingCart": ShoppingCart,
    "Database": Database,
    "ShieldCheck": ShieldCheck,
    "FileText": FileText,
    "BookOpen": BookOpen,
    "CreditCard": CreditCard,
    "Building": Building,
    "BarChart3": BarChart3
};

export default function DetailedLearningOutcomes({ items }: { items?: any }) {
    const outcomes = items || aribaLearningOutcomes;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Learning Outcomes
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        What You'll Master in This Course
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Comprehensive competencies you'll acquire to excel as a professional
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {outcomes.map((outcome: any, idx: number) => {
                        const Icon = iconMap[outcome.icon] || Database;
                        return (
                            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    {outcome.title}
                                </h3>
                                <ul className="space-y-4">
                                    {outcome.points.map((point: string, pIdx: number) => (
                                        <li key={pIdx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-[15px]">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
