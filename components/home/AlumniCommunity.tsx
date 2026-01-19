
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
    linkedin_url: "https://linkedin.com",
    whatsapp_url: "https://whatsapp.com"
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
        <section className="py-20 bg-[#0B1727] text-white">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Share Your Success Story"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <HeartHandshake className="w-8 h-8 text-yellow-500" />
                        {content.title}
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                    {content.stats?.map((stat: any, index: number) => {
                        const Icon = ICON_MAP[stat.icon] || Users;
                        return (
                            <div key={index} className="bg-[#162231] rounded-xl p-8 text-center border border-slate-700 hover:border-slate-500 transition-colors">
                                <div className="flex justify-center mb-4">
                                    <Icon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
                                </div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-300">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-8">Connect With Us</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a
                            href={content.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0077B5] hover:bg-[#006396] text-white font-bold rounded-lg transition-colors cursor-pointer"
                        >
                            <Linkedin className="w-5 h-5" />
                            Follow LinkedIn Page
                        </a>
                        <a
                            href={content.whatsapp_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Join WhatsApp Channel
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
