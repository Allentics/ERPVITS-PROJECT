"use client";

import { Lock, Target, RefreshCcw, ThumbsUp, Wallet, CheckSquare, Award, ShieldCheck, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import ContactModal from '../ContactModal';

export default function RiskFreeGuarantee() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const guarantees = [
        {
            icon: Target,
            title: "95%+ Placement Guarantee",
            description: "We guarantee job placement within 6 months or full refund. Our placement team works with you until you're hired.",
            color: "text-red-500"
        },
        {
            icon: RefreshCcw,
            title: "30-Day Risk-Free Trial",
            description: "Try any course risk-free for 30 days. Not satisfied? Get a full refund, no questions asked.",
            color: "text-blue-500"
        },
        {
            icon: ThumbsUp,
            title: "7-Day Satisfaction Guarantee",
            description: "If you're not completely satisfied within 7 days, we'll work with you to make it right or provide a full refund.",
            color: "text-yellow-500"
        },
        {
            icon: Wallet,
            title: "Money-Back Guarantee",
            description: "If you don't achieve your career goals after completing our program, we'll refund your investment.",
            color: "text-green-500"
        }
    ];

    return (
        <section className="py-20 bg-[#FFF9F0]">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Start Your Risk-Free Journey"
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <Lock className="w-8 h-8 text-slate-800" fill="gold" />
                        Our Ironclad Guarantees - Learn Risk-Free
                    </h2>
                    <p className="text-slate-500">
                        We stand behind our training with industry leading guarantees and commitments
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {guarantees.map((item, index) => (
                        <div key={index} className="bg-white border-2 border-orange-300 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <item.icon className={`w-12 h-12 ${item.color}`} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-12 text-xs font-bold text-slate-700">
                    <div className="flex flex-col items-center gap-1">
                        <CheckSquare className="w-5 h-5 text-green-600" />
                        <span>SAP Partner</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <BadgeCheck className="w-5 h-5 text-yellow-600" />
                        <span>ISO Certified</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                        <span>GDPR Compliant</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Award className="w-5 h-5 text-orange-500" />
                        <span>Award Winning</span>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg text-sm uppercase tracking-wider transition-transform hover:-translate-y-0.5"
                    >
                        START RISK-FREE TODAY
                    </button>
                </div>
            </div>
        </section>
    );
}
