"use client";

import React from 'react';
import { ChevronDown, BookOpen, Clock } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

interface Topic {
    title: string;
    topics: string[];
}

export default function Curriculum({ modules }: { modules: Topic[] }) {
    if (!modules || modules.length === 0) return null;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <span className="text-[#ff4500] font-bold uppercase tracking-widest text-sm">Course Syllabus</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">Comprehensive Curriculum</h2>
                <p className="text-gray-600 mt-4">Designed by industry experts to make you job-ready</p>
            </div>

            <Accordion.Root type="single" collapsible className="space-y-4">
                {modules.map((module, i) => (
                    <Accordion.Item key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <Accordion.Header className="flex">
                            <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 w-full text-left group bg-white hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#ff4500]/10 text-[#ff4500] flex items-center justify-center font-bold text-lg group-hover:bg-[#ff4500] group-hover:text-white transition-colors">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">{module.title}</h3>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {module.topics?.length || 0} Topics</span>
                                        </div>
                                    </div>
                                </div>
                                <ChevronDown className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                            <div className="p-6 pt-0 bg-gray-50/50 border-t border-gray-100">
                                <ul className="space-y-3 mt-4">
                                    {module.topics?.map((topic, j) => (
                                        <li key={j} className="flex items-start gap-3 text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                                            <span className="leading-relaxed">{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    );
}
