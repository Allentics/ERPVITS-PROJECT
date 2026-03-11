
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

const DEFAULT_CONTENT = {
    title: "OUR LEARNERS PLACED IN TOP COMPANIES",
    stats: [
        { label: "Placement Success Rate", val: "95%+" },
        { label: "Average Time to Job", val: "2-4 Weeks" },
        { label: "Salary Increase", val: "30-80%" },
        { label: "Placements in", val: "15+ Countries" },
        { label: "Active Hiring Partners", val: "300+" },
        { label: "New Positions Monthly", val: "40+" }
    ],
    companies: [
        { name: "Deloitte", logo: "/images/partners/deloitte.png" },
        { name: "Accenture", logo: "/images/partners/accenture.png" },
        { name: "PwC", logo: "/images/partners/pwc.png" },
        { name: "EY", logo: "/images/partners/ey.png" },
        { name: "SAP SE", logo: "/images/partners/sap.png" },
        { name: "Microsoft", logo: "/images/partners/microsoft.png" },
        { name: "Google", logo: "/images/partners/google.png" },
        { name: "Amazon", logo: "/images/partners/amazon.png" },
        { name: "Goldman Sachs", logo: "/images/partners/goldman-sachs.png" },
        { name: "Morgan Stanley", logo: "/images/partners/morgan-stanley.png" },
        { name: "Bosch", logo: "/images/partners/bosch.png" },
        { name: "Siemens", logo: "/images/partners/siemens.png" }
    ]
};

export default function PlacementSection() {
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchContent() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'placement')
                    .single();

                if (data && !error) {
                    setContent({ ...DEFAULT_CONTENT, ...data.content });
                }
            } catch (err) {
                console.error('Error fetching Placement content:', err);
            }
        }
        fetchContent();
    }, []);

    return (
        <section className="py-14 bg-white relative overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm md:text-base font-bold text-slate-900/60 tracking-widest uppercase mb-12">{content.title}</h2>

                {/* Company Cards Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20 text-slate-900 ">
                    {content.companies?.map((company: any, i: number) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 transition-all hover:shadow-md hover:-translate-y-1 min-h-[120px]"
                        >
                            <div className="h-14 w-full flex items-center justify-center relative">
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={120}
                                    height={56}
                                    className="max-h-full max-w-full object-contain transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {content.stats?.map((stat: any, i: number) => (
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
