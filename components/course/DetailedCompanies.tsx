/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const companiesData: CompaniesData = {
    tier1: {
        title: "Tier 1 - Global Consulting Firms",
        companies: ["Accenture", "Deloitte", "Solution Consulting", "PWC", "EY", "IBM Consulting"],
        color: "bg-slate-600",
        lightColor: "bg-slate-50"
    },
    tier2: {
        title: "Tier 2 - Enterprise SAP Implementation Partners",
        companies: ["Infosys", "Wipro", "Capgemini", "TCS", "HCL Tech", "Tech Mahindra"],
        color: "bg-orange-500",
        lightColor: "bg-orange-50"
    },
    tier3: {
        title: "Tier 3 - Fortune 500 Enterprises",
        companies: ["Amazon", "Microsoft", "Apple", "Google", "P&G", "Unilever", "Volkswagen", "Pfizer", "J&J"],
        color: "bg-slate-600",
        lightColor: "bg-slate-50"
    },
    tier4: {
        title: "Tier 4 - Mid-Market & Regional Leaders",
        companies: ["Regional consulting firms", "Industry specific service providers", "In-house procurement teams", "SAP system integrators"],
        color: "bg-orange-500",
        lightColor: "bg-orange-50"
    },
    tier5: {
        title: "Tier 5 - Niche Players",
        companies: ["Specialized firms"],
        color: "bg-slate-600",
        lightColor: "bg-slate-50"
    }
};

export interface CompanyTier {
    title: string;
    companies: string[];
    color: string;
    lightColor?: string;
}

export interface CompaniesData {
    tier1: CompanyTier;
    tier2: CompanyTier;
    tier3: CompanyTier;
    tier4: CompanyTier;
    tier5?: CompanyTier;
    hiringTrends?: {
        title: string;
        trends?: string[];
        stats?: {
            value: string;
            label: string;
            subLabel?: string;
            color: 'blue' | 'green' | 'purple' | 'orange';
        }[];
    };
}

export default function DetailedCompanies({ courseName = "SAP", customData }: { courseName?: string, customData?: CompaniesData }) {
    const data = customData || companiesData;

    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">TOP EMPLOYERS</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Top Companies Hiring {courseName} Professionals
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Our alumni work at the world&apos;s leading consulting firms and Fortune 500 companies
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Tier 1 */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={`${data.tier1.color} text-white p-6 md:w-80 rounded-lg flex items-center justify-center md:justify-start font-bold text-lg shadow-sm`}>
                            {data.tier1.title}
                        </div>
                        <div className="flex-1 flex flex-wrap gap-3 items-center bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                            {data.tier1.companies.map((company, idx) => (
                                <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-200 transition-colors">
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tier 2 */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={`${data.tier2.color} text-white p-6 md:w-80 rounded-lg flex items-center justify-center md:justify-start font-bold text-lg shadow-sm`}>
                            {data.tier2.title}
                        </div>
                        <div className="flex-1 flex flex-wrap gap-3 items-center bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                            {data.tier2.companies.map((company, idx) => (
                                <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-200 transition-colors">
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tier 3 */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={`${data.tier3.color} text-white p-6 md:w-80 rounded-lg flex items-center justify-center md:justify-start font-bold text-lg shadow-sm`}>
                            {data.tier3.title}
                        </div>
                        <div className="flex-1 flex flex-wrap gap-3 items-center bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                            {data.tier3.companies.map((company, idx) => (
                                <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-200 transition-colors">
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tier 4 */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={`${data.tier4.color} text-white p-6 md:w-80 rounded-lg flex items-center justify-center md:justify-start font-bold text-lg shadow-sm`}>
                            {data.tier4.title}
                        </div>
                        <div className="flex-1 flex flex-wrap gap-3 items-center bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                            {data.tier4.companies.map((company, idx) => (
                                <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-200 transition-colors">
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tier 5 */}
                    {data.tier5 && (
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className={`${data.tier5.color} text-white p-6 md:w-80 rounded-lg flex items-center justify-center md:justify-start font-bold text-lg shadow-sm`}>
                                {data.tier5.title}
                            </div>
                            <div className="flex-1 flex flex-wrap gap-3 items-center bg-white border border-slate-100 p-4 rounded-lg shadow-sm">
                                {data.tier5.companies.map((company, idx) => (
                                    <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-200 transition-colors">
                                        {company}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
