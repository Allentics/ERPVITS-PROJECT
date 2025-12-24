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
        <div className="bg-yellow-400 text-black text-sm py-2 px-4 relative z-50">
            <div className="max-w-7xl mx-auto flex justify-center items-center text-center pr-8">
                <span className="font-bold mr-2">🎉 LIMITED TIME:</span>
                <span className="hidden sm:inline">Early Bird Special - Save 10% (Only 48 Hours Left!) - </span>
                <span className="font-mono font-bold bg-black text-white px-2 py-0.5 rounded ml-2">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}
