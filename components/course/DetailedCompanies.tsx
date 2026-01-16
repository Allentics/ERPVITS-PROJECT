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
        color: "bg-orange-600",
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
        color: "bg-orange-600",
        lightColor: "bg-orange-50"
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
    hiringTrends?: {
        title: string;
        stats: {
            value: string;
            label: string;
            subLabel?: string;
            color: 'blue' | 'green' | 'purple' | 'orange';
        }[];
    };
}

export default function DetailedCompanies({ courseName = "SAP Ariba", customData }: { courseName?: string, customData?: CompaniesData }) {
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
                        Our alumni work at the world's leading consulting firms and Fortune 500 companies
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
                </div>

                {/* Hiring Trends */}
                {data.hiringTrends && (
                    <div className="mt-20">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-slate-900">{data.hiringTrends.title}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {data.hiringTrends.stats.map((stat, idx) => {
                                const colorClasses =
                                    stat.color === 'blue' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                                        stat.color === 'green' ? 'bg-orange-50 border-orange-100 text-orange-600' :
                                            stat.color === 'purple' ? 'bg-purple-50 border-purple-100 text-purple-600' :
                                                'bg-orange-50 border-orange-100 text-orange-600';

                                return (
                                    <div key={idx} className={`${colorClasses} border p-6 rounded-2xl text-center hover:shadow-md transition-all`}>
                                        <div className={`text-3xl font-bold mb-2 ${stat.color === 'blue' ? 'text-blue-600' :
                                            stat.color === 'green' ? 'text-orange-600' :
                                                stat.color === 'purple' ? 'text-purple-600' :
                                                    'text-orange-600'
                                            }`}>
                                            {stat.value}
                                        </div>
                                        <div className="font-bold text-slate-800 text-sm mb-1">{stat.label}</div>
                                        {stat.subLabel && <div className="text-xs text-slate-500">{stat.subLabel}</div>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
