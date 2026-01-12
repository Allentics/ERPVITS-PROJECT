import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Prerequisites({ title, subtitle, items }: { title: string, subtitle?: string, items: string[] }) {
    return (
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{title || "Prerequisites"}</h2>
            {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

            <div className="space-y-4">
                {items?.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
