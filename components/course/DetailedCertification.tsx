import React from 'react';
import { Award, CheckCircle2, BookOpen, Trophy, TrendingUp, FileCheck } from 'lucide-react';

export default function DetailedCertification({ items, title, subtitle, badge, stats, courseName = "SAP Ariba", description, imageSrc }: {
    items?: any[],
    title?: string,
    subtitle?: string,
    badge?: string,
    stats?: { value: string, label: string }[],
    courseName?: string,
    description?: string,
    imageSrc?: string
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
        },
        {
            title: "Professional Credibility",
            desc: "Validation of expertise with clients and employers",
            icon: Award
        }
    ];

    return (
        <section className="py-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-slate-900 leading-tight">
                    {title || `SAP ${courseName} Certification – Your Global Career Credential`}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Certifications & Benefits */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Cert Cards */}
                        {certs.map((cert, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border border-orange-100 shadow-lg shadow-orange-500/5 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-orange-50 p-3 rounded-xl border border-orange-100">
                                        <Award className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col mb-2">
                                            <h3 className="font-bold text-xl text-slate-900">{cert.title}</h3>
                                            {cert.code && <span className="text-orange-600 text-sm font-semibold mt-1">Exam Code: {cert.code}</span>}
                                        </div>

                                        <div className="space-y-3 text-sm text-slate-600">
                                            <div className="flex gap-2">
                                                <span className="font-bold text-slate-900 whitespace-nowrap">Focus:</span>
                                                <span className="leading-relaxed">{cert.focus || cert.description}</span>
                                            </div>
                                            {cert.who && (
                                                <div className="flex gap-2">
                                                    <span className="font-bold text-slate-900 whitespace-nowrap">Target Audience:</span>
                                                    <span className="leading-relaxed">{cert.who}</span>
                                                </div>
                                            )}
                                            <div className="flex gap-2">
                                                <span className="font-bold text-slate-900 whitespace-nowrap">Job Relevance:</span>
                                                <span className="leading-relaxed">{cert.relevance}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Why Matters Card - Orange Theme */}
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 text-white shadow-xl shadow-orange-500/20 mt-8">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
                                <Trophy className="w-7 h-7 text-white" />
                                <h3 className="font-bold text-xl text-white">Why SAP Certification Matters</h3>
                            </div>
                            <ul className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-3 items-start">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                        <span>
                                            <strong className="text-white font-bold block sm:inline">{benefit.title}</strong>
                                            <span className="mx-1 hidden sm:inline">–</span>
                                            <span className="text-orange-50 block sm:inline leading-relaxed">{benefit.desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Image & Support */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Image - Increased Size */}
                        {imageSrc && (
                            <div className="rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-[500px] relative bg-slate-50 border border-slate-100 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                                <img
                                    src={imageSrc}
                                    alt="SAP Certification Professional"
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </div>
                        )}

                        {/* Support Card (White) */}
                        <div className="bg-slate-50 text-slate-900 rounded-2xl p-8 shadow-inner border border-slate-200 flex-1">
                            <h3 className="text-xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-4 flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-orange-600" />
                                Our Certification Support Includes:
                            </h3>
                            <ul className="space-y-5">
                                {supportFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex gap-4 text-sm items-start group">
                                        <div className="mt-0.5 bg-white p-1 rounded-full border border-green-200 shadow-sm group-hover:bg-green-50 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            {feature.includes('Study guides') || feature.includes('real exam') || feature.includes('tips') || feature.includes('Assistance') || feature.includes('Additional support') ? (
                                                <>
                                                    <span className="font-bold text-slate-900 block text-base mb-0.5">
                                                        {feature.split(/(?=[A-Z])/).slice(0, 3).join('')} {feature.includes('Targeted') ? 'Preparation' : feature.includes('Practice') ? 'Exams' : feature.includes('Strategies') ? '' : ''}
                                                    </span>
                                                    <span className="text-slate-600 text-xs block leading-relaxed">{feature}</span>
                                                </>
                                            ) : (
                                                <span className="font-bold text-slate-800 block text-base mb-0.5">{feature}</span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
