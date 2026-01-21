import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface OverviewItem {
    title: string;
    content?: string;
    list?: string[];
    footer?: string;
}

export default function CourseOverview({ items }: { items: OverviewItem[] }) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
            {items.map((item, idx) => (
                <div key={idx} className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 bg-left-bottom bg-no-repeat pb-2">
                            {item.title}
                        </h2>
                        {/* Orange Underline */}
                        <div className="w-16 h-1 bg-[#ff4500] rounded-full"></div>
                    </div>

                    {item.content && (
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {item.content}
                        </p>
                    )}

                    {item.list && (
                        <ul className="space-y-4 mt-6">
                            {item.list.map((listItem, lIdx) => {
                                // Parse bold text formatted as **Text:**
                                const parts = listItem.split(/(\*\*.*?\*\*)/g);
                                return (
                                    <li key={lIdx} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-1" />
                                        <p className="text-slate-600 leading-relaxed text-[17px]">
                                            {parts.map((part, pIdx) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return (
                                                        <span key={pIdx} className="font-bold text-slate-900">
                                                            {part.slice(2, -2)}
                                                        </span>
                                                    );
                                                }
                                                return part;
                                            })}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {item.footer && (
                        <p className="text-slate-600 leading-relaxed text-lg mt-6">
                            {item.footer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
