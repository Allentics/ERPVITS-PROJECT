import React from 'react';
import { Award, CheckCircle2, BookOpen, Trophy, TrendingUp, FileCheck } from 'lucide-react';

export default function DetailedCertification({ items, title, subtitle, badge, stats, courseName = "SAP Ariba", description, imageSrc, imageSrc2, supportFeatures, benefits, whyMattersTitle, targetAudienceLabel }: {
    items?: any[],
    title?: string,
    subtitle?: string,
    badge?: string,
    stats?: { value: string, label: string }[],
    courseName?: string,
    description?: string,
    imageSrc?: string,
    imageSrc2?: string,
    supportFeatures?: any[],
    benefits?: any[],
    whyMattersTitle?: string,
    targetAudienceLabel?: string
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

    const defaultSupportFeatures = [
        {
            title: "Targeted Exam Preparation",
            subtitle: "Study guides aligned to official exam blueprints"
        },
        {
            title: "Practice Exams",
            subtitle: "Timed practice tests mirroring real exam conditions"
        },
        {
            title: "Exam Strategies",
            subtitle: "Time management tips and common pitfalls to avoid"
        },
        {
            title: "Registration Guidance",
            subtitle: "Assistance with exam registration and scheduling"
        },
        {
            title: "Retake Support",
            subtitle: "Additional support if you don't pass on first attempt"
        }
    ];

    // Use prop or default
    const featuresToDisplay = supportFeatures || defaultSupportFeatures;

    const defaultBenefits = [
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

    // Use prop or default
    const benefitsToDisplay = benefits || defaultBenefits;

    return (
        <section className="pt-8 pb-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-slate-900 leading-tight">
                    {title || `SAP ${courseName} Certification – Your Global Career Credential`}
                </h2>

                {subtitle && (
                    <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                        {subtitle}
                    </p>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - Certifications & Benefits */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* Cert Cards */}
                        {certs.map((cert, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border border-[#ff4500]/10 shadow-lg shadow-orange-500/5 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-[#ff4500]/10 p-3 rounded-xl border border-[#ff4500]/10">
                                        <Award className="w-6 h-6 text-[#ff4500]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col mb-2">
                                            <h3 className="font-bold text-xl text-slate-900">{cert.title}</h3>
                                            {cert.code && <span className="text-[#ff4500] text-sm font-semibold mt-1">Exam Code: {cert.code}</span>}
                                        </div>

                                        <div className="space-y-3 text-sm text-slate-600">
                                            <div className="flex gap-2">
                                                <span className="font-bold text-slate-900 whitespace-nowrap">Focus:</span>
                                                <span className="leading-relaxed">{cert.focus || cert.description}</span>
                                            </div>
                                            {cert.who && (
                                                <div className="flex gap-2">
                                                    <span className="font-bold text-slate-900 whitespace-nowrap">{targetAudienceLabel || "Target Audience"}:</span>
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
                        <div className="bg-gradient-to-br from-[#ff4500] to-red-600 rounded-xl p-5 text-white shadow-xl shadow-orange-500/20 mt-2">
                            <div className="flex items-center gap-3 mb-4 border-b border-white/20 pb-3">
                                <Trophy className="w-5 h-5 text-white" />
                                <h3 className="font-bold text-lg text-white">{whyMattersTitle || "Why SAP Certification Matters"}</h3>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                {benefitsToDisplay.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-2 items-start">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                        <span className="text-sm">
                                            <strong className="text-white font-bold block">{benefit.title}</strong>
                                            <span className="text-orange-50 block leading-relaxed text-xs">{benefit.desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Image & Support */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Image - Improved fitting for Infographics */}
                        {imageSrc && (
                            <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-100 group p-4 flex flex-col gap-4">
                                <img
                                    src={imageSrc}
                                    alt="SAP Certification Professional"
                                    className="w-full h-auto object-contain"
                                />
                                {imageSrc2 && (
                                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center">
                                        <img
                                            src={imageSrc2}
                                            alt="Certification Logo"
                                            className="h-16 w-auto object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Support Card (White) */}
                        <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-lg border border-slate-100">
                            <h3 className="text-lg font-bold mb-4 text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-[#ff4500]" />
                                Our Certification Support:
                            </h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {featuresToDisplay.map((feature: any, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm items-start group">
                                        <div className="mt-0.5 bg-white p-1 rounded-full border border-[#ff4500]/20 shadow-sm group-hover:bg-[#ff4500]/10 transition-colors">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4500]" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-900 block text-sm mb-0.5">
                                                {feature.title}
                                            </span>
                                            <span className="text-slate-600 text-[11px] block leading-snug">
                                                {feature.subtitle}
                                            </span>
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
