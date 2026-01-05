"use client";

import { useState } from 'react';
import { User, CheckCircle, Clock } from 'lucide-react';
import ContactModal from '../ContactModal';

export default function CareerAdvisors() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [selectedAdvisor, setSelectedAdvisor] = useState("");

    const advisors = [
        {
            name: "Ramesh Sharma",
            role: "Functional Consultant Path Specialist",
            experience: "18 Years Experience",
            expertise: ["Career Planning", "Salary Negotiation", "Placement Strategy"],
            image: "👨‍💼"
        },
        {
            name: "Lisa Martinez",
            role: "Cloud & Development Specialist",
            experience: "16 Years Experience",
            expertise: ["Cloud Roles", "Technical Roles", "Architect Track"],
            image: "👩‍💻"
        },
        {
            name: "Priya Singh",
            role: "Finance & Analytics Expert",
            experience: "15 Years Experience",
            expertise: ["Finance Careers", "Analytics Path", "CFO Track"],
            image: "👩‍💼"
        },
        {
            name: "David Walker",
            role: "Corporate Training Specialist",
            experience: "20 Years Experience",
            expertise: ["Team Training", "ROI Programs", "B2B Planning"],
            image: "👨‍💻"
        }
    ];

    const handleBookConsultation = (advisorName?: string) => {
        setSelectedAdvisor(advisorName ? `Consultation with ${advisorName}` : "Free Career Consultation");
        setIsContactModalOpen(true);
    };

    return (
        <section className="py-16 bg-white">
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title={selectedAdvisor}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Speak With SAP Career Advisors - Free 30-Minute Consultation
                    </h2>
                    <p className="text-slate-500">
                        Get Expert Guidance on Your SAP Career Path from Industry Veterans
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {advisors.map((advisor, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-shadow">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl shadow-inner border border-slate-200">
                                    {advisor.image}
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{advisor.name}</h3>
                                        <p className="text-slate-600 text-xs font-semibold">{advisor.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-amber-600 text-xs font-medium mb-4">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    {advisor.experience}
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wider">Expertise Areas:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {advisor.expertise.map((skill, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-medium border border-slate-200 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center text-green-600 text-xs font-bold mb-4">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                    Available Now
                                </div>

                                <button
                                    onClick={() => handleBookConsultation(advisor.name)}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 rounded-md shadow-sm transition-colors"
                                >
                                    Book Free Consultation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => handleBookConsultation()}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-sm uppercase tracking-wider transition-transform hover:-translate-y-0.5"
                    >
                        SPEAK WITH AN ADVISOR - BOOK NOW
                    </button>
                </div>
            </div>
        </section>
    );
}
