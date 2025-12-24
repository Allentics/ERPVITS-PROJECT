"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    { q: "What is SAP training?", a: "An SAP training course is professional training to understand the SAP integrated software used in enterprise resource planning (ERP). It includes training in modules such as SAP FICO, MM, SD, HCM, and Ariba, etc." },
    { q: "How to learn SAP online?", a: "Learning SAP online is possible through self-paced and instructor-led AU classes and project work as well as certification prep through training institutes like ERPVITS." },
    { q: "What is the price of SAP training?", a: "SAP training price ranges based on the training module and methodology. In general, self-paced training is priced around ₹15,000–₹25,000 and instructor-led training is priced around ₹40,000–₹50,000." },
    { q: "What is SAP Certification and why is it necessary?", a: "SAP certification signifies your proficiency in one of the SAP modules. It is beneficial for your credentials and the stature of your employment in various organizations globally; it also increases your career and salary potential." },
    { q: "How do I receive SAP certification after the course?", a: "Once you have completed your SAP training, you can schedule your official SAP certification test through the SAP Learning Hub or authorized SAP training institutes." },
    { q: "Which SAP course is for beginners?", a: "SAP FICO, SAP MM, and SAP SD are popular for beginners because they are easier to comprehend for people new to SAP ERP systems and offer good career prospects." }
];

export default function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Common questions about SAP Training & Certification</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left text-gray-900 font-semibold"
                            >
                                <span>{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                            </button>
                            {openIndex === i && (
                                <div className="p-4 bg-white text-gray-600 leading-relaxed border-t border-gray-200">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
