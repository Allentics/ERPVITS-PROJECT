"use client";

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import ContactModal from '../ContactModal';

export default function UrgencySection() {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 22, seconds: 0 });
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white py-10 border-b border-slate-200">
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title="Reserve Your SAP Training Spot"
            />
            <div className="max-w-5xl mx-auto px-6 py-10 text-center border-2 border-orange-500 rounded-2xl shadow-xl bg-white relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-2">
                    <span>🔥</span> Next Live Batch Starting Soon!
                </h2>

                <div className="flex justify-center gap-4 mb-10">
                    {[
                        { label: 'DAYS', val: timeLeft.days },
                        { label: 'HOURS', val: timeLeft.hours },
                        { label: 'MINUTES', val: timeLeft.minutes },
                        { label: 'SECONDS', val: timeLeft.seconds }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-100 rounded-xl w-20 md:w-28 py-4">
                            <div className="text-3xl md:text-5xl font-bold text-orange-500 font-mono mb-1">
                                {String(item.val).padStart(2, '0')}
                            </div>
                            <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">{item.label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8 font-medium">
                    <div className="flex items-center gap-2">
                        <span>📅</span> Start Date: November 4, 2025
                    </div>
                    <div className="flex items-center gap-2">
                        <span>👨‍🏫</span> Format: Instructor-Led (Live)
                    </div>
                    <div className="flex items-center gap-2">
                        <span>🗓️</span> Schedule: Tuesday-Thursday & Saturday
                    </div>
                    <div className="flex items-center gap-2">
                        <span>⭐</span> Rating: 4.9/5.0
                    </div>
                </div>

                <div className="text-red-600 font-bold mb-8 animate-pulse flex items-center justify-center gap-2">
                    <span>🎯</span> Seats Left: Only 5 of 15 Remaining!
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg text-lg flex-1 uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                    >
                        RESERVE YOUR SEAT NOW - LIMITED SPOTS!
                    </button>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-white hover:bg-gray-50 text-slate-900 border-2 border-slate-900 px-8 py-4 rounded-lg font-bold shadow-lg text-lg flex-1 uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                    >
                        SECURE SPOT WITH $99 - PAY REST LATER
                    </button>
                </div>

                {/* Social Proof - Optional based on screenshot, keeping subtle */}
                <div className="mt-8 text-xs text-gray-400">
                    <div className="flex items-center justify-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>Recent enrollment: Satish Kumar (5 mins ago)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
