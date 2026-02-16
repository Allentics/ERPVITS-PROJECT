
"use client";

import { Users, Briefcase, Building2, Linkedin, MessageCircle, HeartHandshake } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';

const ICON_MAP: any = {
    Users, Briefcase, Building2, Linkedin, MessageCircle, HeartHandshake
};

const DEFAULT_CONTENT = {
    title: "Join Our Thriving Alumni Community",
    subtitle: "Connect with 8000+ SAP professionals worldwide for networking, mentorship, and career opportunities",
    stats: [
        {
            icon: "Users",
            value: "8,000+",
            label: "Alumni Members Worldwide"
        },
        {
            icon: "Briefcase",
            value: "1,200+",
            label: "Job Referrals Shared Monthly"
        },
        {
            icon: "Building2",
            value: "250+",
            label: "Companies Actively Hiring"
        }
    ],
    linkedin_url: "https://www.linkedin.com/company/13357826/",
    whatsapp_url: "https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X"
};

export default function AlumniCommunity() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchContent() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'alumni')
                    .single();

                if (data && !error) {
                    setContent({ ...DEFAULT_CONTENT, ...data.content });
                }
            } catch (err) {
                console.error('Error fetching Alumni content:', err);
            }
        }
        fetchContent();
    }, []);

    return (
        <section className="py-14 bg-orange-600 text-white">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Share Your Success Story"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <HeartHandshake className="w-8 h-8 text-white" />
                        {content.title}
                    </h2>
                    <p className="text-orange-100 max-w-2xl mx-auto font-medium">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                    {content.stats?.map((stat: any, index: number) => {
                        const Icon = ICON_MAP[stat.icon] || Users;
                        return (
                            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl border-t-4 border-orange-400 transform hover:-translate-y-1 transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-orange-50 p-3 rounded-full">
                                        <Icon className="w-8 h-8 text-orange-500" strokeWidth={2} />
                                    </div>
                                </div>
                                <div className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-8 text-white">Connect With Us</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a
                            href="https://www.linkedin.com/company/13357826/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#0077B5] hover:bg-[#006396] text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer border border-white/10"
                        >
                            <Linkedin className="w-5 h-5 text-white" />
                            Follow LinkedIn Page
                        </a>
                        <a
                            href="https://www.whatsapp.com/channel/0029Vb5u9luHwXb481Y1Dx1X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer border border-white/10"
                        >
                            <MessageCircle className="w-5 h-5 text-white" />
                            Join WhatsApp Channel
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
