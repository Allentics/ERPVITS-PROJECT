
"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DEFAULT_FAQS = [
    { q: "What is SAP training?", a: "An SAP training course is professional training to understand the SAP integrated software used in enterprise resource planning (ERP). It includes training in modules such as SAP FICO, MM, SD, HCM, and Ariba, etc." },
    { q: "How to learn SAP online?", a: "Learning SAP online is possible through self-paced and instructor-led AU classes and project work as well as certification prep through training institutes like ERPVITS." },
    { q: "What is the price of SAP training?", a: "SAP training price ranges based on the training module and methodology. In general, self-paced training is priced around ₹15,000–₹25,000 and instructor-led training is priced around ₹40,000–₹50,000." },
    { q: "What is SAP Certification and why is it necessary?", a: "SAP certification signifies your proficiency in one of the SAP modules. It is beneficial for your credentials and the stature of your employment in various organizations globally; it also increases your career and salary potential." },
    { q: "How do I receive SAP certification after the course?", a: "Once you have completed your SAP training, you can schedule your official SAP certification test through the SAP Learning Hub or authorized SAP training institutes." },
    { q: "Which SAP course is for beginners?", a: "SAP FICO, SAP MM, and SAP SD are popular for beginners because they are easier to comprehend for people new to SAP ERP systems and offer good career prospects." },
    { q: "How many types of SAP certifications are there?", a: "SAP certification consists of the Associate, Professional, and Specialist levels, which range to cover SAP S/4HANA, SAP Ariba, SAP SuccessFactors, and SAP Analytics Cloud modules." },
    { q: "Are there SAP training institutes in my area?", a: "Absolutely. You can locate high-rated SAP institutes in your area or enroll in SAP online courses, which offer flexible hours, hands-on live projects, and job placement support." },
    { q: "How long is SAP training?", a: "Generally, most SAP online courses are between 6 and 10 weeks, depending on the module, pace of learning and the training method, which could be either self-paced or instructor-led." },
    { q: "After SAP training and certification, what job roles can one take on?", a: "After training and obtaining certification, one can hold roles such as SAP consultant, SAP developer, SAP functional analyst, or even ERP specialist in large corporations in various industries." },
    { q: "What is SAP ERP training?", a: "SAP ERP training enables learners to learn enterprise resource planning within SAP software, along with various disciplines such as finance, materials, supply chain, and human resource management." },
    { q: "What factors can help me in selecting an institute offering an SAP course?", a: "Consider the availability of SAP training academies or institutes with certified trainers, documented flexible learning approaches, career placement assistance, and real-time project practices." },
    { q: "After completing the SAP course, will I get any job?", a: "Of course, numerous SAP training and placement services offer comprehensive career assistance, including job candidate portfolio development, mock interviews, and direct access to employers." },
    { q: "What are the advantages of learning SAP online?", a: "Online learning around SAP is highly flexible, and in most cases, offers unlimited resource access and the chance to learn directly with SAP certified trainers, regardless of the distance." },
    { q: "What does the SAP course entail, and how is it different from SAP certification?", a: "An SAP course is the preceding discipline required for learners to complete to sit for SAP certification. Certification is accreditation that SAP gives to candidates who successfully complete the certification exam." }
];

export default function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [content, setContent] = useState({ title: "Frequently Asked Questions", subtitle: "Common questions about SAP Training & Certification", faqs: DEFAULT_FAQS });

    useEffect(() => {
        async function fetchContent() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'faq')
                    .single();

                if (data && !error) {
                    setContent({ ...content, ...data.content });
                }
            } catch (err) {
                console.error('Error fetching FAQ content:', err);
            }
        }
        fetchContent();
    }, []);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    const displayedFaqs = showAll ? content.faqs : content.faqs.slice(0, 6);

    return (
        <section className="py-14 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
                    <p className="text-gray-600">{content.subtitle}</p>
                </div>

                <div className="space-y-4 mb-8">
                    {displayedFaqs.map((faq: any, i: number) => (
                        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left text-gray-900 font-semibold"
                            >
                                <span className="pr-4">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
                            </button>
                            {openIndex === i && (
                                <div className="p-4 bg-white text-gray-600 leading-relaxed border-t border-gray-200">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {content.faqs.length > 6 && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                        >
                            {showAll ? 'Show Less' : 'Show More FAQs'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
