import React from 'react';
import { Laptop, ShoppingCart, BarChart3, GraduationCap, Building2, HelpCircle } from 'lucide-react';

export default function DetailedTargetAudience() {
    const audienceList = [
        {
            icon: Laptop,
            color: "text-blue-600",
            bg: "bg-blue-50",
            title: "IT & ERP Professionals",
            description: [
                "SAP consultants, system administrators, technical architects, and solution consultants.",
                "Moving from SAP MM/SD/SRM/FICO",
                "ABAP Developers moving to functional",
                "Technical team delivering solutions"
            ]
        },
        {
            icon: ShoppingCart,
            color: "text-green-600",
            bg: "bg-green-50",
            title: "Procurement & Supply Chain Specialists",
            description: [
                "Procurement managers, analysts, coordinators, and vendor managers.",
                "Purchasing managers leading digital transformation",
                "Supply chain coordinators seeking automation skills",
                "Vendor managers focusing on performance metrics"
            ]
        },
        {
            icon: BarChart3,
            color: "text-purple-600",
            bg: "bg-purple-50",
            title: "Finance & Operations Leaders",
            description: [
                "Financial managers, operations directors, and internal audit teams.",
                "Finance managers automating procurement spend",
                "Operations directors optimizing efficiency",
                "Audit teams ensuring compliance"
            ]
        },
        {
            icon: GraduationCap,
            color: "text-orange-600",
            bg: "bg-orange-50",
            title: "Fresh Graduates & Career Changers",
            description: [
                "Engineering/MBA graduates and professionals pivoting to SAP careers.",
                "Appearing in Interviews and requiring core",
                "Transcendental ability to navigate software",
                "Business mature ability for consulting"
            ]
        },
        {
            icon: Building2,
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            title: "SAP Ariba Customer Employees",
            description: [
                "Employees at organizations using or implementing SAP Ariba.",
                "Super users learning power uses",
                "Process owners managing SAP Ariba",
                "End users seeking advanced knowledge"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Who Should Enroll
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Who Can Learn SAP Ariba? – Perfect for Diverse Career Paths
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our training is designed for professionals from various backgrounds aiming to excel in SAP Ariba
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {audienceList.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.description.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2 text-slate-600 text-[14px] leading-relaxed">
                                        <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Not Sure If This Course Is Right For You?</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                        Book a free demo session and speak with our career counselors to get personalized guidance based on your background and goals.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto">
                        Schedule Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
