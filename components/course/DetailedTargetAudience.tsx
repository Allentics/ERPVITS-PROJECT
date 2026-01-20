"use client";

import React from 'react';
import { Laptop, ShoppingCart, BarChart3, GraduationCap, Building2, HelpCircle, Wallet, Users, Banknote, TrendingUp, Globe } from 'lucide-react';
import { aribaTargetAudience } from '@/lib/contentHelpers';

const iconMap: Record<string, any> = {
    "Laptop": Laptop,
    "ShoppingCart": ShoppingCart,
    "BarChart3": BarChart3,
    "GraduationCap": GraduationCap,
    "Building2": Building2,
    "HelpCircle": HelpCircle,
    "Wallet": Wallet,
    "Users": Users,
    "Banknote": Banknote,
    "TrendingUp": TrendingUp,
    "Globe": Globe
};

export default function DetailedTargetAudience({ items, title, subtitle }: { items?: any[], title?: string, subtitle?: string }) {
    const scrollToBooking = () => {
        const element = document.getElementById('detailed-demo-booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const audienceList = items || aribaTargetAudience;

    const renderTitle = (t: string) => {
        if (!t) return "Who Can Learn This Course? – Perfect for Diverse Career Paths";

        if (t.includes("–")) {
            const parts = t.split("–");
            return (
                <>
                    {parts[0]} – <span className="text-orange-500">{parts[1]}</span>
                </>
            );
        }
        return t;
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Who Should Enroll
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        {renderTitle(title || "Who Can Learn This Course? – Perfect for Diverse Career Paths")}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {subtitle || "Our training is designed for professionals from various backgrounds aiming to excel"}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {audienceList.map((item: any, idx: number) => {
                        const Icon = iconMap[item.icon] || Laptop;
                        return (
                            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.description.map((point: string, pIdx: number) => (
                                        <li key={pIdx} className="flex items-start gap-2 text-slate-600 text-[14px] leading-relaxed">
                                            <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Box */}
                <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Not Sure If this course Is Right For You?</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                        Book a free demo session and speak with our career counselors to get personalized guidance based on your background and goals.
                    </p>
                    <button
                        onClick={scrollToBooking}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto"
                    >
                        Schedule Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
