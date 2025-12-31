'use client';

import { Building2 } from 'lucide-react';

const stats = [
    { label: "Placement Success Rate", val: "95%+" },
    { label: "Average Time to Job", val: "2-4 Weeks" },
    { label: "Salary Increase", val: "30-80%" },
    { label: "Placements in", val: "15+ Countries" },
    { label: "Active Hiring Partners", val: "300+" },
    { label: "New Positions Monthly", val: "40+" }
]

export default function PlacementSection() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm md:text-base font-bold text-slate-900/60 tracking-widest uppercase mb-12">OUR LEARNERS PLACED IN TOP COMPANIES</h2>

                {/* Company Cards Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20 text-slate-900 ">
                    {[
                        { name: "Deloitte", logo: "/images/partners/deloitte.png" },
                        { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png" },
                        { name: "PwC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png" },
                        { name: "EY", logo: "/images/partners/ey.png" },
                        { name: "SAP SE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png" },
                        { name: "Microsoft", logo: "/images/partners/microsoft.png" },
                        { name: "Google", logo: "/images/partners/google.png" },
                        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" },
                        { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png" },
                        { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/1200px-Morgan_Stanley_Logo_1.svg.png" },
                        { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1200px-Bosch-logo.svg.png" },
                        { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1200px-Siemens-logo.svg.png" }
                    ].map((company, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 transition-all hover:shadow-md hover:-translate-y-1 min-h-[120px]"
                        >
                            <div className="h-10 w-full flex items-center justify-center">
                                <img
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    className="max-h-full max-w-full object-contain transition-all duration-300"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.opacity = '0';
                                    }}
                                />
                            </div>
                            <span className="font-semibold text-xs md:text-sm text-center">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-xl md:text-2xl font-black text-orange-400 mb-1">{stat.val}</div>
                                <div className="text-[9px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
