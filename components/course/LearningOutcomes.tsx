import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function LearningOutcomes({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-[#ff4500]/10">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#ff4500]/10 flex items-center justify-center text-[#ff4500]">
                    <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{title || "What You Will Learn"}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {items?.map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                        <span className="text-[#ff4500] font-bold">✓</span>
                        <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
