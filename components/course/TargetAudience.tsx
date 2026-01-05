import React from 'react';
import { Target } from 'lucide-react';

export default function TargetAudience({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Target className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{title || "Who Should Attend?"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></div>
                        <p className="text-gray-600 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
