import React from 'react';
import { CheckCircle2, ShieldCheck, Database, FileText, ShoppingCart } from 'lucide-react';

export default function DetailedLearningOutcomes() {
    const outcomes = [
        {
            title: "Complete Procurement Lifecycle Management",
            icon: ShoppingCart,
            points: [
                "Integration strategies for P2P and S2P workflows",
                "Vendor requisitions, POs, receipts, and invoices",
                "Understand budget controls and check tracking",
                "Optimize procure-to-pay (P2P) cycle"
            ]
        },
        {
            title: "Master Data Configuration",
            icon: Database,
            points: [
                "Create user profiles with role-based access",
                "Onboard and manage suppliers with qualification tracking",
                "Configure accounting strictures and cost centers",
                "Ensure data accuracy across systems"
            ]
        },
        {
            title: "Strategic Sourcing & Supplier Management",
            icon: ShieldCheck,
            points: [
                "Execute sourcing events (RFI, RFP, Auctions)",
                "Evaluate supplier proposals and criteria",
                "Negotiate contracts and manage terms",
                "Monitor supplier performance with scorecards"
            ]
        },
        {
            title: "Contract Management & Compliance",
            icon: FileText,
            points: [
                "Manage contract lifecycle from creation to renewal",
                "Implement compliance checks in procurement",
                "Track contract utilization",
                "Ensure regulatory compliance"
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Learning Outcomes
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        What You'll Master in This SAP Ariba Course
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Comprehensive competencies you'll acquire to excel as an SAP Ariba professional
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {outcomes.map((outcome, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                    <outcome.icon className="w-6 h-6" />
                                </div>
                                {outcome.title}
                            </h3>
                            <ul className="space-y-4">
                                {outcome.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-[15px]">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
