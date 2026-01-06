import React from 'react';
import { Factory, ShoppingBag, Laptop2, Globe, Clock, Database } from 'lucide-react';
import { aribaRealWorldScenarios } from '@/lib/contentHelpers';

const iconMap: Record<string, any> = {
    "Factory": Factory,
    "ShoppingBag": ShoppingBag,
    "Laptop2": Laptop2,
    "Globe": Globe,
    "Clock": Clock,
    "Database": Database
};

export default function RealWorldScenarios({ items }: { items?: any[] }) {
    const scenarios = items || aribaRealWorldScenarios;

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Real-World Projects
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Experience Real-World Scenarios & Business Case Studies
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Work on authentic Fortune 500 projects derived from actual client implementations
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scenarios.map((item: any, idx: number) => {
                        const Icon = iconMap[item.icon] || Factory;
                        return (
                            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.iconColor} flex items-center justify-center mb-6`}>
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 min-h-[56px]">{item.title}</h3>


                                <div className="flex-grow space-y-5">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Scenario</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.scenario}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Your Role</h4>
                                        <p className="text-sm font-semibold text-blue-600">{item.role}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Responsibilities</h4>
                                        <ul className="space-y-2">
                                            {item.responsibilities.map((resp, rIdx) => (
                                                <li key={rIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Outcome</h4>
                                    <p className="text-sm text-emerald-700 font-medium bg-emerald-50 p-2 rounded-lg inline-block w-full">
                                        {item.outcome}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Disclaimer/Note */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
                        <p className="text-slate-600 text-[15px] leading-relaxed">
                            <span className="font-bold text-blue-600">Portfolio-Ready Projects:</span> These capstone projects ensure you graduate with real-world problem-solving experience and portfolio pieces—invaluable for your first consulting engagement and job interviews.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
