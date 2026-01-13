"use client";

import { Users, Briefcase, Building2, Linkedin, MessageCircle, HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import ContactModal from '../ContactModal';

export default function AlumniCommunity() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const stats = [
        {
            icon: Users,
            value: "8,000+",
            label: "Alumni Members Worldwide"
        },
        {
            icon: Briefcase,
            value: "1,200+",
            label: "Job Referrals Shared Monthly"
        },
        {
            icon: Building2,
            value: "250+",
            label: "Companies Actively Hiring"
        }
    ];

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
                        Join Our Thriving Alumni Community
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Connect with 8000+ SAP professionals worldwide for networking, mentorship, and career opportunities
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#162231] rounded-xl p-8 text-center border border-slate-700 hover:border-slate-500 transition-colors">
                            <div className="flex justify-center mb-4">
                                <stat.icon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
                            </div>
                            <div className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</div>
                            <div className="text-sm text-slate-300">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-8">Connect With Us</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0077B5] hover:bg-[#006396] text-white font-bold rounded-lg transition-colors cursor-pointer"
                        >
                            <Linkedin className="w-5 h-5" />
                            Join LinkedIn Group (3.2K Members)
                        </a>
                        <a
                            href="https://whatsapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Community (1.8K Members)
                        </a>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-sm uppercase tracking-wider transition-transform hover:-translate-y-0.5 shadow-lg"
                    >
                        SHARE YOUR SUCCESS STORY
                    </button>
                </div>
            </div>
        </section>
    );
}
