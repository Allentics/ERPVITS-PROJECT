"use client";

import { FileText, Target, Briefcase, BadgeDollarSign, Globe, Users, Rocket, Linkedin, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import ContactModal from '../ContactModal';

export default function PlacementSupport() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            icon: FileText,
            title: "Resume Optimization",
            description: "Professional resume review and optimization tailored for SAP roles with ATS compatibility"
        },
        {
            icon: Target,
            title: "Interview Preparation",
            description: "Mock interviews, technical Q&A practice, and behavioral interview coaching"
        },
        {
            icon: Briefcase,
            title: "Job Matching",
            description: "Direct connections with hiring partners and personalized job matching based on your skills"
        },
        {
            icon: BadgeDollarSign,
            title: "Salary Negotiation",
            description: "Expert guidance on salary negotiations to maximize your earning potential"
        },
        {
            icon: Globe,
            title: "Global Job Portal",
            description: "Access to exclusive job postings from our network of 500+ hiring partners worldwide"
        },
        {
            icon: Users,
            title: "Networking Community",
            description: "Join our alumni network of 5000+ SAP professionals for ongoing support and opportunities"
        },
        {
            icon: Rocket,
            title: "Career Mentorship",
            description: "One-on-one career mentorship to guide your long-term SAP career trajectory"
        },
        {
            icon: Linkedin,
            title: "LinkedIn Profile Building",
            description: "Complete LinkedIn profile overhaul to attract recruiters and build your personal brand"
        },
        {
            icon: MessageSquare,
            title: "Soft Skills Training",
            description: "Communication and presentation skills workshops to excel in client-facing roles"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Get Started with Placement Support"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Career Transformation Guaranteed – Placement Support Included
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Comprehensive career services to ensure your success in landing your dream SAP role
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                                <service.icon className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5"
                    >
                        Get Started with Placement Support
                    </button>
                </div>
            </div>
        </section>
    );
}
