"use client";

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import ContactModal from '../ContactModal';

export default function UrgencySection() {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 22, seconds: 0 });
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [nextBatchDate, setNextBatchDate] = useState("");

    useEffect(() => {
        // Timer logic
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        // Date logic: Get next Monday
        const getNextMonday = () => {
            const d = new Date();
            d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7 || 7);
            // If today is Sunday (0) -> 1+7-0 = 8 % 7 = 1 (Monday) | If today is Monday(1) -> 1+7-1 = 7 % 7 = 0 || 7 (Next Monday)
            // Correction for "Next Monday":
            const today = new Date();
            const dayOfWeek = today.getDay();
            const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7; // If today is Monday (1), 7 days later. 
            // Note: If today is Monday, do we show today or next week? User said "19th Jan" which is next Monday (today is 13th).
            // 13 + (8-2)%7 = 13 + 6 = 19. Correct.

            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + daysUntilNextMonday);

            return nextDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        };

        setNextBatchDate(getNextMonday());

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
                    Next Live Batch Starting Soon!
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
                        <span>📅</span> Date: {nextBatchDate}
                    </div>
                    <div className="flex items-center gap-2">
                        <span>⏰</span> Time: 7:00 AM
                    </div>
                    <div className="flex items-center gap-2">
                        <span>👨‍🏫</span> Format: Instructor-Led (Online)
                    </div>
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
                        SECURE SPOT WITH 60% Fees Now - PAY REST LATER
                    </button>
                </div>
            </div>
        </section>
    );
}
