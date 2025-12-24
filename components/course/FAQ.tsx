"use client";

import { useState } from 'react';
import { Course, FAQ as FAQType } from '@/lib/courseData';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
    course?: Course;
    items?: FAQType[];
}

const FAQ = ({ course, items }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const data = items || course?.faqs || [];

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    if (data.length === 0) return null;

    return (
        <section className="py-16 bg-gray-50" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-center mb-10">Common questions about {course?.title || 'SAP'} Training</p>

                <div className="space-y-4">
                    {data.map((faq, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
