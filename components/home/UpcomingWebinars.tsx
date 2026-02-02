"use client";

import { Calendar, Clock, Users, GraduationCap } from 'lucide-react';

import { useState } from 'react';
import ContactModal from '../ContactModal';

export default function UpcomingWebinars() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWebinar, setSelectedWebinar] = useState("");

    const demos = [
        {
            label: "Weekend",
            date: "Jan 18, 2025",
            time: "7:00 PM",
            registered: "10 Registered",
            status: "Limited Spots Remaining"
        },
        {
            label: "Weekday",
            date: "Jan 19, 2025",
            time: "7:30 AM",
            registered: "7 Registered",
            status: "Limited Spots Remaining"
        }
    ];

    const handleRegister = (batchLabel: string) => {
        setSelectedWebinar(`Enroll for: ${batchLabel} Demo`);
        setIsModalOpen(true);
    };

    return (
        <section className="py-20 bg-slate-50">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedWebinar}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="w-8 h-8 text-slate-800" />
                        Enroll in Free Upcoming Demos
                    </h2>
                    <p className="text-slate-500 max-w-3xl mx-auto">
                        Join our free upcoming live demos to get an exclusive walkthrough of key topics, interactive session highlights, and real-world applications—all guided by expert instructors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                    {demos.map((demo, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-colors">
                            <div className="p-8">
                                <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                                    <Calendar className="w-4 h-4" />
                                    {demo.label}
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-slate-700 font-medium">
                                        <Calendar className="w-5 h-5 text-orange-500" />
                                        <span className="text-lg">Date: {demo.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700 font-medium">
                                        <Clock className="w-5 h-5 text-orange-500" />
                                        <span className="text-lg">Time: {demo.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500 text-sm mt-4 pt-4 border-t border-slate-100">
                                        <Users className="w-4 h-4" />
                                        <span>{demo.registered} | <span className="text-orange-600 font-semibold">{demo.status}</span></span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleRegister(demo.label)}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg text-sm uppercase tracking-wide transition-colors shadow-sm hover:shadow-md"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
