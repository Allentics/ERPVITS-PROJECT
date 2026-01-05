"use client";

import { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp } from 'lucide-react';
import ContactModal from '../ContactModal';

export default function ROICalculator() {
    const [currentSalary, setCurrentSalary] = useState<string>('45000');
    const [targetRole, setTargetRole] = useState({ title: 'SAP Consultant', salary: 95000 });
    const [years, setYears] = useState(5);
    const [result, setResult] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roles = [
        { title: 'SAP Consultant ($85K - $120K)', value: 95000 },
        { title: 'SAP FICO Expert ($90K - $135K)', value: 115000 },
        { title: 'SAP Architect ($130K - $180K)', value: 155000 },
        { title: 'SAP Project Manager ($100K - $160K)', value: 130000 }
    ];

    const calculateROI = () => {
        const current = parseInt(currentSalary) || 0;
        const diff = targetRole.salary - current;
        const totalGain = diff * years;
        // Simple ROI for demo: (Total Gain / Course Cost (~$1000 avg)) * 100
        // Or just display the potential gain
        setResult(totalGain);
    };

    return (
        <section className="py-20 bg-slate-900 text-white">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Get Detailed ROI Analysis"
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Calculate Your Personal ROI - See Your Return on Investment
                    </h2>
                    <p className="text-slate-400">
                        Discover how SAP training can transform your earning potential
                    </p>
                </div>

                <div className="bg-white rounded-xl p-8 text-slate-900 shadow-2xl max-w-4xl mx-auto mb-16">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">Enter Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Current Annual Salary ($)</label>
                            <input
                                type="number"
                                value={currentSalary}
                                onChange={(e) => setCurrentSalary(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="e.g. 50000"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Target SAP Role</label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                onChange={(e) => {
                                    const role = roles.find(r => r.title === e.target.value);
                                    if (role) setTargetRole({ title: role.title, salary: role.value });
                                }}
                            >
                                {roles.map((role, i) => (
                                    <option key={i} value={role.title}>{role.title}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Months to Job Placement</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                <option>3 months</option>
                                <option>6 months</option>
                                <option>9 months</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Years in Role (for projection)</label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                value={years}
                                onChange={(e) => setYears(parseInt(e.target.value))}
                            >
                                <option value={1}>1 Year</option>
                                <option value={3}>3 Years</option>
                                <option value={5}>5 Years</option>
                            </select>
                        </div>
                    </div>

                    {result !== null && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center animate-in fade-in slide-in-from-bottom-4">
                            <p className="text-green-800 font-medium mb-1">Estimated Additional Earnings over {years} years</p>
                            <p className="text-4xl font-bold text-green-600">+${result.toLocaleString()}</p>
                        </div>
                    )}

                    <button
                        onClick={calculateROI}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg text-lg uppercase tracking-wide transition-all hover:scale-[1.01]"
                    >
                        CALCULATE MY ROI
                    </button>
                </div>

                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-white">Example ROI Scenarios</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            from: "IT Support", to: "SAP Consultant",
                            start: "$45K", end: "$95K",
                            roi: "1,233% over 5 years", payback: "3.5 months"
                        },
                        {
                            from: "Analyst", to: "SAP FICO Expert",
                            start: "$60K", end: "$125K",
                            roi: "1,450% over 5 years", payback: "2.8 months"
                        },
                        {
                            from: "Developer", to: "SAP Architect",
                            start: "$75K", end: "$160K",
                            roi: "1,850% over 5 years", payback: "2.1 months"
                        }
                    ].map((scenario, i) => (
                        <div key={i} className="bg-white rounded-lg p-6 text-left">
                            <div className="text-sm font-bold text-slate-500 mb-4">
                                {scenario.from} <ArrowRight className="inline w-4 h-4 mx-1" /> {scenario.to}
                            </div>
                            <div className="space-y-1 mb-6">
                                <div className="text-slate-400 text-sm">From: <span className="line-through">{scenario.start}</span></div>
                                <div className="text-orange-500 text-2xl font-bold">To: {scenario.end}</div>
                            </div>
                            <div className="space-y-2 text-xs font-semibold text-slate-600 border-t pt-4">
                                <div className="flex justify-between">
                                    <span>ROI:</span>
                                    <span className="text-green-600">{scenario.roi}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Payback:</span>
                                    <span className="text-slate-900">{scenario.payback}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
