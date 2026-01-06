import React from 'react';
import { Award, CheckCircle2, BookOpen, Trophy, TrendingUp, FileCheck } from 'lucide-react';

export default function DetailedCertification({ items, title, subtitle, badge, stats, courseName = "SAP Ariba", description }: {
    items?: any[],
    title?: string,
    subtitle?: string,
    badge?: string,
    stats?: { value: string, label: string }[],
    courseName?: string,
    description?: string
}) {
    const defaultCerts = [
        {
            title: "SAP Certified Application Associate - SAP Ariba Procurement",
            code: "(C_ARP2P_2408)",
            focus: "Procurement processes, master data, approval workflows, integration",
            who: "End-to-end procurement expertise using SAP Ariba",
            relevance: "Entry to mid-level consultant positions"
        },
        {
            title: "SAP Certified Application Associate - SAP Ariba Sourcing",
            code: "(C_ARSOR_2408)",
            focus: "Strategic sourcing, supplier evaluation, event management, negotiation",
            who: "Advanced sourcing strategy and supplier management skills",
            relevance: "Sourcing consultant and strategic procurement roles"
        },
        {
            title: "SAP Certified Application Associate - SAP Ariba Contracts",
            code: "(C_ARCON_2408)",
            focus: "Contract lifecycle management, compliance, risk management",
            who: "Contract management expertise and compliance knowledge",
            relevance: "Contract management and legal compliance roles"
        }
    ];

    const certs = items || defaultCerts;

    const supportFeatures = [
        "Targeted exam preparation aligned to official blueprints",
        "Timed practice tests mirroring real exam conditions",
        "Time management and question-solving strategies",
        "Exam registration and scheduling guidance",
        "Re-take support if needed"
    ];

    const benefits = [
        {
            title: "Global Recognition",
            desc: "SAP certifications recognized worldwide by employers and clients",
            icon: GlobeIcon
        },
        {
            title: "Career Acceleration",
            desc: "15-20% higher salaries for certified professionals",
            icon: TrendingUp
        },
        {
            title: "Competitive Edge",
            desc: "Stand out in job applications and consulting proposals",
            icon: Trophy
        }
    ];

    const defaultStats = [
        { value: "3", label: "Certification Tracks" },
        { value: "95%", label: "First-Time Pass Rate" },
        { value: "30%", label: "Salary Premium" }
    ];

    const displayStats = stats || defaultStats;

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        {badge || "SAP Certification"}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        {title || `SAP ${courseName} Certification from ERPVITS – Global Credential Recognition`}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {description || (courseName === 'SAP Ariba' ? "Complete preparation for all three official SAP Ariba certification tracks" : `Comprehensive preparation for official SAP ${courseName} certification`)}
                    </p>
                    {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
                </div>

                {/* Cert Cards */}
                <div className="space-y-6 mb-16">
                    {certs.map((cert, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                <Award className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                                    <h3 className="font-bold text-slate-900 text-lg">{cert.title}</h3>
                                    {cert.code && <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded border border-blue-100">{cert.code}</span>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                                    <div>
                                        <p className="font-bold text-slate-700 mb-1">Exam Focus:</p>
                                        <p className="text-slate-600 leading-relaxed">{cert.focus || cert.description}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-700 mb-1">Who It's For:</p>
                                        <p className="text-slate-600 leading-relaxed">{cert.who || "Aspiring Consultants"}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-700 mb-1">Job Relevance:</p>
                                        <p className="text-slate-600 leading-relaxed">{cert.relevance || "High Demand Roles"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support & Benefits Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Certification Support</h3>
                        <ul className="space-y-4">
                            {supportFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                                    <benefit.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">{benefit.title}</h4>
                                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-yellow-50 rounded-xl p-8 text-center border border-yellow-100">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">{displayStats[0]?.value}</div>
                        <div className="text-sm font-medium text-slate-700">{displayStats[0]?.label}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-8 text-center border border-green-100">
                        <div className="text-3xl font-bold text-green-600 mb-2">{displayStats[1]?.value}</div>
                        <div className="text-sm font-medium text-slate-700">{displayStats[1]?.label}</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{displayStats[2]?.value}</div>
                        <div className="text-sm font-medium text-slate-700">{displayStats[2]?.label}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GlobeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}
