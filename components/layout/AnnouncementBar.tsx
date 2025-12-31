"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="bg-[#fbc02d] text-black text-[13px] py-1.5 px-4 relative z-50 border-b border-black/5">
            <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
                <span className="font-extrabold mr-2">🔥 EARLY BIRD SPECIAL:</span>
                <span className="font-bold">Save 10% on all SAP Online Courses! (Limited Slots)</span>
            </div>
        </div>
    );
}
