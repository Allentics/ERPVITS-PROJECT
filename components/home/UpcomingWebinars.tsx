"use client";

import { Calendar, Clock, User, Users, GraduationCap } from 'lucide-react';

import { useState } from 'react';
import ContactModal from '../ContactModal';

export default function UpcomingWebinars() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWebinar, setSelectedWebinar] = useState("");

    const webinars = [
        {
            date: "Nov 8, 2025 | 6:00 PM EST",
            title: "SAP Career Roadmap 2025: From Zero to $120K+",
            speaker: "Speaker: Ramesh Sharma, Career Advisor (18 years exp)",
            attendees: "387 Registered | Limited spots remaining",
            image: "👨‍🏫"
        },
        {
            date: "Nov 12, 2025 | 7:00 PM EST",
            title: "SAP S/4HANA Migration Trends & Career Opportunities",
            speaker: "Speaker: Arun Kumar, S/4HANA Expert (16 years exp)",
            attendees: "412 Registered | Join the waitlist",
            image: "👨‍💻"
        }
    ];

    const handleRegister = (webinarTitle: string) => {
        setSelectedWebinar(`Register for: ${webinarTitle}`);
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
                        Free Upcoming Webinars & Events
                    </h2>
                    <p className="text-slate-500">
                        Join our expert-led webinars and networking sessions to advance your SAP career
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                    {webinars.map((webinar, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-colors">
                            <div className="p-6">
                                <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold mb-4">
                                    <Calendar className="w-3 h-3" />
                                    {webinar.date}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{webinar.title}</h3>
                                <div className="flex items-center gap-2 text-slate-600 text-xs mb-2">
                                    <User className="w-3 h-3" />
                                    <span>{webinar.speaker}</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
                                    <Users className="w-3 h-3" />
                                    <span>{webinar.attendees}</span>
                                </div>
                                <button
                                    onClick={() => handleRegister(webinar.title)}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wide transition-colors"
                                >
                                    REGISTER FREE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => {
                            setSelectedWebinar("Inquire about Upcoming Events");
                            setIsModalOpen(true);
                        }}
                        className="inline-block px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        View All Upcoming Events
                    </button>
                </div>
            </div>
        </section>
    );
}
