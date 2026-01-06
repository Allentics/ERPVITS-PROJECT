import React from 'react';
import { Factory, ShoppingBag, Laptop2 } from 'lucide-react';

export default function RealWorldScenarios() {
    const scenarios = [
        {
            title: "Global Manufacturing Company's Procurement Transformation",
            icon: Factory,
            bg: "bg-blue-50",
            iconColor: "text-blue-600",
            scenario: "A multinational manufacturer with operations in 15 countries wants to centralize procurement across regional entities.",
            role: "Select Lead SAP Ariba Consultant",
            responsibilities: [
                "Map current procurement processes",
                "Configure user hierarchies for regional approval flows",
                "Set up approval workflows for capital equipment",
                "Implement compliance checks for hazardous materials"
            ],
            outcome: "Unified process, cost savings visibility, global compliance audit trail."
        },
        {
            title: "Retail Organization's Supplier Onboarding Automation",
            icon: ShoppingBag,
            bg: "bg-green-50",
            iconColor: "text-green-600",
            scenario: "A retail chain with 500+ suppliers wants to automate supplier onboarding and reduce manual data entry errors.",
            role: "SAP Ariba Implementation Consultant",
            responsibilities: [
                "Design self-service supplier onboarding portal",
                "Configure automated qualification workflows",
                "Set up integration with ERP for vendor data",
                "Create expiration alerts for supplier certificates"
            ],
            outcome: "Reduced onboarding time by 60%, improved data accuracy, automated reminders."
        },
        {
            title: "Enterprise Guided Buying for Tech Company",
            icon: Laptop2,
            bg: "bg-purple-50",
            iconColor: "text-purple-600",
            scenario: "A 5,000-employee tech company wants to streamline IT, office supplies, and professional services procurement.",
            role: "Solution Architect / Functional Lead",
            responsibilities: [
                "Design intuitive Guided Buying landing pages",
                "Configure punched-out catalogs for laptops",
                "Implement policies for preferred vendors",
                "Set up tactical sourcing for non-catalog items"
            ],
            outcome: "90% user adoption, compliant spend, reduced maverick spending."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Real-World Projects
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Experience Real-World SAP Ariba Scenarios & Business Case Studies
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Work on authentic Fortune 500 projects derived from actual client implementations
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scenarios.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 flex flex-col h-full">
                            <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.iconColor} flex items-center justify-center mb-6`}>
                                <item.icon className="w-7 h-7" />
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
                    ))}
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
