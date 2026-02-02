"use client";

import { CheckCircle2, UserCheck } from 'lucide-react';
import { useState } from 'react';
import ContactModal from '../ContactModal';

export default function TrainerExpertise() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-white">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Connect with SAP Expert Trainers"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-bold text-sm mb-6">World-Class Faculty</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Learn from Industry's Best – <span className="text-orange-600">15+ Years of SAP Expertise</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our trainers bring real-world experience from Fortune 500 companies and global implementations. They don't just teach theory; they prepare you for the actual job.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                { title: "15+ Years Average Experience", desc: "Hands-on implementation and consulting experience across multiple industries." },
                                { title: "Industry Certifications", desc: "All trainers hold multiple SAP certifications and stay current with latest tech." },
                                { title: "Fortune 500 Project Experience", desc: "Direct experience with IBM, Accenture, Deloitte, and more." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors"
                        >
                            Meet Our Expert SAP Trainers
                        </button>
                    </div>

                    <div className="lg:col-span-4 relative flex justify-center items-center">
                        <img
                            src="/images/sap-expert-trainers.jpg"
                            alt="SAP Expert Trainers with Industry Experience"
                            className="relative w-full max-w-md h-auto rounded-xl shadow-2xl z-10 block border border-gray-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
