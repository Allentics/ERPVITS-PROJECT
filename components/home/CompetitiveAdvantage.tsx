"use client";

import { Check, X, Trophy } from 'lucide-react';
import { useState } from 'react';
import ContactModal from '../ContactModal';

export default function CompetitiveAdvantage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const features = [
        { name: "Placement Rate", erpvits: "95%+", compA: "75%", compB: "68%", compC: "72%" },
        { name: "Live Instructor-Led", erpvits: true, compA: true, compB: false, compC: true },
        { name: "Hands-On Projects", erpvits: true, compA: true, compB: true, compC: false },
        { name: "Placement Guarantee", erpvits: true, compA: false, compB: false, compC: false },
        { name: "Instructor Experience", erpvits: "15+ Years", compA: "10 Years", compB: "6 Years", compC: "12 Years" },
        { name: "Flexible Formats", erpvits: "6 Options", compA: "5 Options", compB: "2 Options", compC: "3 Options" },
        { name: "24/7 Support", erpvits: true, compA: false, compB: false, compC: true },
        { name: "Money-Back Guarantee", erpvits: true, compA: false, compB: true, compC: false },
    ];

    const renderValue = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />;
        }
        return <span className={value === "95%+" || value === "15+ Years" || value === "6 Options" ? "font-bold text-orange-600" : "text-slate-600"}>{value}</span>;
    };

    return (
        <section className="py-14 bg-slate-50">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Enroll with ERPVITS"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <Trophy className="w-8 h-8 text-orange-500" />
                        Why ERPVITS Beats the Competition
                    </h2>
                    <p className="text-slate-500">
                        See how we stack up against other SAP training providers
                    </p>
                </div>

                <div className="overflow-x-auto shadow-xl rounded-xl border border-slate-200 bg-white">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-5 text-left text-sm font-bold bg-slate-900 rounded-tl-xl border-b border-slate-700">Feature</th>
                                <th className="p-5 text-sm font-bold bg-orange-50 text-orange-600 border-b border-orange-100 border-x border-slate-200 w-1/5">ERPVITS</th>
                                <th className="p-5 text-sm font-bold border-b border-slate-700 bg-slate-800 w-1/5">Competitor A</th>
                                <th className="p-5 text-sm font-bold border-b border-slate-700 bg-slate-800 w-1/5">Competitor B</th>
                                <th className="p-5 text-sm font-bold border-b border-slate-700 bg-slate-800 rounded-tr-xl w-1/5">Competitor C</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 text-left font-semibold text-slate-800 border-r border-slate-100">{feature.name}</td>
                                    <td className="p-4 bg-orange-50/30 font-bold border-x border-orange-100">{renderValue(feature.erpvits)}</td>
                                    <td className="p-4 text-slate-500 border-r border-slate-100">{renderValue(feature.compA)}</td>
                                    <td className="p-4 text-slate-500 border-r border-slate-100">{renderValue(feature.compB)}</td>
                                    <td className="p-4 text-slate-500">{renderValue(feature.compC)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg text-sm uppercase tracking-wider transition-transform hover:-translate-y-0.5"
                    >
                        CHOOSE THE BEST - ENROLL WITH ERPVITS
                    </button>
                </div>
            </div>
        </section>
    );
}
