"use client";

import React from 'react';
import { ChevronDown, Clock, BookOpen, CheckCircle2, ChevronRight, Download } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export interface DetailedModule {
    title: string;
    duration?: string;
    learning_points?: string[];
    hands_on?: string[];
    topics?: string[];
}

interface DetailedCurriculumProps {
    modules: DetailedModule[];
    title?: string;
    courseName?: string;
    syllabusUrl?: string;
}

export default function DetailedCurriculum({ modules, title, courseName = "SAP Ariba", syllabusUrl }: DetailedCurriculumProps) {
    if (!modules || modules.length === 0) return null;

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <span className="bg-[#ff4500] text-white px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6 shadow-sm">
                    Comprehensive Curriculum
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 max-w-3xl mx-auto leading-tight">
                    {title || `${courseName} Course Curriculum – From Basics to Advanced Projects`}
                </h2>
                <p className="text-gray-600 text-lg">
                    {modules.length} comprehensive modules covering every aspect of {courseName} with extensive hands-on labs
                </p>
            </div>

            {/* Summary Cards */}
            <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto mb-16 justify-center">
                <div className="flex-1 bg-[#ff4500]/10 rounded-2xl p-5 border border-[#ff4500]/10 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#ff4500] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-900">50 Hours</div>
                        <div className="text-sm font-medium text-slate-600">Total Training Duration</div>
                    </div>
                </div>

                <a
                    href={syllabusUrl || '#'}
                    target={syllabusUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 rounded-2xl p-5 border border-slate-800 flex items-center gap-4 shadow-sm hover:shadow-md hover:bg-slate-800 transition-all cursor-pointer group"
                    onClick={(e) => {
                        if (!syllabusUrl) {
                            e.preventDefault();
                            // Optional: Alert user or scroll to contact form?
                            // alert("Syllabus download coming soon!");
                        }
                    }}
                >
                    <div className="w-12 h-12 rounded-xl bg-[#ff4500] flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Download className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">Download</div>
                        <div className="text-sm font-medium text-slate-400">Curriculum PDF</div>
                    </div>
                </a>
            </div>

            {/* Accordion Modules */}
            <Accordion.Root type="single" collapsible className="space-y-4">
                {modules.map((module, i) => {
                    // Extract duration from title if not strictly provided
                    let displayTitle = module.title;
                    let displayDuration = module.duration;

                    if (!displayDuration && module.title.includes('(')) {
                        const parts = module.title.match(/(.*)\((.*)\)$/);
                        if (parts) {
                            displayTitle = parts[1].trim();
                            displayDuration = parts[2].trim();
                        }
                    }

                    // Handle legacy "topics" array by splitting into points and labs
                    let points = module.learning_points;
                    let labs = module.hands_on;

                    if ((!points || points.length === 0) && module.topics) {
                        points = module.topics.filter(t => !t.toLowerCase().includes('hands-on'));
                        labs = module.topics.filter(t => t.toLowerCase().includes('hands-on'))
                            .map(t => t.replace(/Hands-On[:\s\-]*/i, ''));
                    }

                    return (
                        <Accordion.Item
                            key={i}
                            value={`item-${i}`}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <Accordion.Header className="flex">
                                <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 w-full text-left group bg-white hover:bg-gray-50/80 transition-colors cursor-pointer outline-none">
                                    <div className="flex items-center gap-5">
                                        <div className="w-10 h-10 rounded-full bg-[#ff4500] text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg md:text-xl group-hover:text-[#ff4500] transition-colors">
                                                {displayTitle}
                                            </h3>
                                            {displayDuration && (
                                                <div className="flex items-center gap-2 mt-1.5 text-sm font-medium text-[#ff4500]">
                                                    <Clock className="w-4 h-4" />
                                                    {displayDuration}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 rounded-full p-2 group-hover:bg-[#ff4500]/10 transition-colors">
                                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#ff4500] group-data-[state=open]:rotate-180 transition-transform duration-300" />
                                    </div>
                                </Accordion.Trigger>
                            </Accordion.Header>

                            <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp border-t border-gray-100">
                                <div className="p-8 bg-gray-50/30">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        {/* Learning Points */}
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base">
                                                <span className="w-1.5 h-6 bg-[#ff4500] rounded-full inline-block"></span>
                                                What You'll Learn:
                                            </h4>
                                            <ul className="space-y-3">
                                                {points?.map((point, j) => (
                                                    <li key={j} className="flex items-start gap-3 text-slate-600 text-[15px] leading-relaxed group/item">
                                                        <ChevronRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Hands On Activities */}
                                        {labs && labs.length > 0 && (
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base">
                                                    <span className="w-1.5 h-6 bg-[#ff4500] rounded-full inline-block"></span>
                                                    Hands On Activities:
                                                </h4>
                                                <ul className="space-y-3">
                                                    {labs.map((activity, k) => (
                                                        <li key={k} className="flex items-start gap-3 text-slate-600 text-[15px] leading-relaxed group/item">
                                                            <CheckCircle2 className="w-4 h-4 text-[#ff4500] mt-1 flex-shrink-0" />
                                                            <span>{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    );
                })}
            </Accordion.Root>

            {syllabusUrl && (
                <div className="mt-12 text-center">
                    <a
                        href={syllabusUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#ff4500] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ff4500] transition-colors shadow-lg hover:shadow-orange-200"
                    >
                        <Download className="w-6 h-6" />
                        Download Full {courseName} Curriculum
                    </a>
                </div>
            )}
        </div>
    );
}
