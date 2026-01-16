"use client";

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Database, FileText, ShoppingCart, BookOpen, CreditCard, Building, BarChart3, Cloud, Layout, Lock, Search } from 'lucide-react';
import { aribaLearningOutcomes } from '@/lib/contentHelpers';

const iconMap: Record<string, any> = {
    "ShoppingCart": ShoppingCart,
    "Database": Database,
    "ShieldCheck": ShieldCheck,
    "FileText": FileText,
    "BookOpen": BookOpen,
    "CreditCard": CreditCard,
    "Building": Building,
    "BarChart3": BarChart3,
    "Cloud": Cloud,
    "Layout": Layout,
    "Lock": Lock,
    "Search": Search
};

export default function DetailedLearningOutcomes({ items, title, subtitle }: { items?: any, title?: string, subtitle?: string }) {
    const isTabbed = items && !Array.isArray(items) && items.tabs;
    const [activeTab, setActiveTab] = useState(isTabbed ? 0 : -1);

    const outcomes = isTabbed ? items.tabs[activeTab].items : (Array.isArray(items) ? items : aribaLearningOutcomes);
    const tabs = isTabbed ? items.tabs : [];

    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-6">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Learning Outcomes
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        {title || "What You'll Master in This Course"}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        {subtitle || "Comprehensive competencies you'll acquire to excel as a professional"}
                    </p>
                </div>

                {/* Tabs */}
                {isTabbed && (
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 p-1 rounded-full flex w-full max-w-4xl mx-auto">
                            {tabs.map((tab: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === idx
                                        ? 'bg-white text-orange-600 shadow-md'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {outcomes.map((outcome: any, idx: number) => {
                        // Infer icon if missing
                        const inferredIcon = outcome.icon ||
                            (outcome.title.includes("Procurement") ? "ShoppingCart" :
                                outcome.title.includes("Sourcing") ? "Search" :
                                    outcome.title.includes("Master Data") ? "Database" :
                                        outcome.title.includes("Contract") ? "FileText" :
                                            outcome.title.includes("Integration") ? "Cloud" :
                                                outcome.title.includes("Reports") ? "BarChart3" : "CheckCircle2");

                        const Icon = iconMap[inferredIcon] || CheckCircle2;

                        return (
                            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    {/* Only show icon box if explicit icon provided or inferred implies a major section */}
                                    {inferredIcon !== "CheckCircle2" && (
                                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    )}
                                    {outcome.title}
                                </h3>
                                <ul className="space-y-4">
                                    {outcome.points.map((point: string, pIdx: number) => (
                                        <li key={pIdx} className="flex items-start gap-3">
                                            <div className="mt-1">
                                                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                            </div>
                                            <span className="text-slate-600 text-[15px] leading-relaxed">{point}</span>
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
