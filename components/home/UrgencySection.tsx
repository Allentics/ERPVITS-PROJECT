"use client";

import { useState, useEffect } from 'react';

export default function UrgencySection() {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 22, seconds: 0 });

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
        <section className="bg-orange-50 py-10 border-b border-orange-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                    <span className="mr-2">⏱️</span> NEXT SAP BATCH STARTS IN:
                </h2>

                <div className="flex justify-center gap-4 mb-8">
                    {[
                        { label: 'DAYS', val: timeLeft.days },
                        { label: 'HOURS', val: timeLeft.hours },
                        { label: 'MINUTES', val: timeLeft.minutes },
                        { label: 'SECONDS', val: timeLeft.seconds }
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-sm w-20 md:w-24 py-3 border border-orange-100">
                            <div className="text-2xl md:text-4xl font-bold text-orange-600 font-mono">
                                {String(item.val).padStart(2, '0')}
                            </div>
                            <div className="text-xs font-bold text-gray-400 mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 mb-8 max-w-2xl mx-auto">
                    <div className="grid grid-cols-2 gap-4 text-left text-sm">
                        <div>
                            <span className="font-semibold text-gray-500 block mb-1">Start Date:</span>
                            <span className="font-bold text-gray-900">November 16, 2025</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-500 block mb-1">Format:</span>
                            <span className="font-bold text-gray-900">Instructor-Led (Live)</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-500 block mb-1">Schedule:</span>
                            <span className="font-bold text-gray-900">Every Saturday & Sunday</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-500 block mb-1">Seats Available:</span>
                            <span className="font-bold text-orange-600">5 of 10 remaining</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold shadow-md animate-pulse">
                        🎯 RESERVE YOUR SEAT NOW - ONLY 5 SPOTS LEFT
                    </a>
                    <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold shadow-md">
                        💳 SECURE SPOT WITH 60% Fees
                    </a>
                </div>

                <div className="mt-8 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                        <span className="text-green-500">✅</span>
                        <span>"Just now: Satish Kumar enrolled in SAP FICO Training!"</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
