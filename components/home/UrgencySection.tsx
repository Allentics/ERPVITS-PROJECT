
"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';

const DEFAULT_CONTENT = {
    title: "Next Live Batch Starting Soon!",
    days: 2,
    hours: 14,
    minutes: 22,
    batch_details: [
        { icon: "📅", label: "Date", value: "" }, // Date will be calculated
        { icon: "⏰", label: "Time", value: "7:00 AM" },
        { icon: "👨‍🏫", label: "Format", value: "Instructor-Led (Online)" }
    ],
    cta_primary: "RESERVE YOUR SEAT NOW - LIMITED SPOTS!",
    cta_secondary: "SECURE SPOT WITH 30% Fees Now - PAY REST LATER"
};

const UrgencySection = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [nextBatchDateStr, setNextBatchDateStr] = useState("");
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchContent() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'urgency')
                    .single();

                if (data && !error) {
                    setContent({ ...DEFAULT_CONTENT, ...data.content });
                }
            } catch (err) {
                console.error('Error fetching Urgency content:', err);
            }
        }
        fetchContent();
    }, []);

    useEffect(() => {
        const getTargetDate = () => {
            const now = new Date();
            const target = new Date();

            // Set target to next Monday at 7:00 AM
            const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday
            let daysUntilMonday = (1 - dayOfWeek + 7) % 7;

            // If it's Monday but past 7:00 AM, target the next Monday
            if (daysUntilMonday === 0 && (now.getHours() > 7 || (now.getHours() === 7 && now.getMinutes() > 0))) {
                daysUntilMonday = 7;
            }

            target.setDate(now.getDate() + daysUntilMonday);
            target.setHours(7, 0, 0, 0);

            return target;
        };

        const targetDate = getTargetDate();
        setNextBatchDateStr(targetDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }));

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                // If we hit zero, force a re-calculation of the target date
                window.location.reload(); // Simplest way to reset everything for the next cycle
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        const timer = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call

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
                    {content.title}
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
                    {content.batch_details?.map((detail: any, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                            <span>{detail.icon}</span> {detail.label}: {detail.label === 'Date' ? nextBatchDateStr : detail.value}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg text-lg flex-1 uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                    >
                        {content.cta_primary}
                    </button>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-white hover:bg-gray-50 text-slate-900 border-2 border-slate-900 px-8 py-4 rounded-lg font-bold shadow-lg text-lg flex-1 uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                    >
                        {content.cta_secondary}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default UrgencySection;
