'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function DetailedFAQ({ items }: { items?: any[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);


    const scrollToBooking = () => {
        const element = document.getElementById('detailed-demo-booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const defaultFaqs = [
        // ... (Existing Ariba FAQs)
        {
            question: "What is SAP Ariba and how does ERPVITS help me learn it?",
            answer: "SAP Ariba is a cloud-based procurement solution that connects buyers and suppliers. ERPVITS provides comprehensive, hands-on training covering the entire Ariba suite (Upstream & Downstream), ensuring you gain practical skills for real-world implementations."
        },
        {
            question: "What will I learn in the SAP Ariba Sourcing module?",
            answer: "You will learn to create and manage sourcing events (RFI, RFP, Auctions), evaluate supplier responses, award contracts, and manage the entire sourcing lifecycle to drive cost savings."
        },
        {
            question: "What is the SAP Ariba Supplier Network?",
            answer: "The Ariba Network is the world's largest B2B marketplace. You'll learn how to onboard suppliers, manage catalogs, transact purchase orders and invoices electronically, and collaborate efficiently."
        },
        {
            question: "What are Ariba Services and Ariba Spend Management?",
            answer: "We cover Ariba's strategic services for spend analysis and category management, helping organizations visualize spend data and identify savings opportunities."
        },
        {
            question: "How does SAP Ariba support modern procurement?",
            answer: "It digitizes the procurement process, offers guided buying for compliance, automates approval workflows, and provides real-time visibility into spend, reducing cycle times and maverick spending."
        },
        {
            question: "Why should I join SAP Ariba Training at ERPVITS?",
            answer: "ERPVITS offers expert-led live training, lifetime access to materials, real-world capstone projects, and dedicated career support including resume building and interview prep."
        },
        {
            question: "Who can enroll in the SAP Ariba Course?",
            answer: "Anyone with a background in supply chain, procurement, or MBA graduates can enroll. SAP MM/SD consultants looking to upskill to the cloud are also ideal candidates."
        },
        {
            question: "What is the SAP Ariba Certification and why is it valuable?",
            answer: "Certification validates your expertise globally. It significantly increases your marketability, earning potential, and credibility with top employers and clients."
        },
        {
            question: "What are the SAP Ariba course fees at ERPVITS?",
            answer: "We offer competitive pricing with flexible installment options. Please contact our admissions team or download the brochure for the latest fee structure and scholarship details."
        },
        {
            question: "How much does SAP Ariba Certification cost?",
            answer: "The certification exam fee is set by SAP (typically around $500), but our training includes guidance on how to register and prepare effectively to pass on your first attempt."
        },
        {
            question: "How can I become an SAP Ariba Consultant through ERPVITS?",
            answer: "Our structured path takes you from basics to advanced configuration. After training, our placement team helps you find opportunities with our network of hiring partners."
        },
        {
            question: "What career options are available after completing the Ariba course?",
            answer: "Roles include SAP Ariba Consultant, Solution Architect, Procurement Analyst, Sourcing Manager, and functional leads in major consulting firms."
        },
        {
            question: "How does SAP Ariba integrate with SAP S/4HANA?",
            answer: "We teach the integration via CIG (Cloud Integration Gateway), covering master data synchronization and transactional data flows between Ariba and S/4HANA."
        },
        {
            question: "What are the main SAP Ariba Solutions covered in the course?",
            answer: "We cover Ariba Buying & Invoicing (P2P), Sourcing, Contracts, SLP (Supplier Lifecycle & Performance), and Ariba Network collaboration."
        },
        {
            question: "What is SAP Ariba Pricing and how does it work for companies?",
            answer: "While we focus on the functional consulting aspect, we provide an overview of Ariba's subscription and transaction fee models to help you advise clients."
        },
        {
            question: "Does ERPVITS provide SAP Ariba Training with Placement Support?",
            answer: "Yes, we offer 100% placement assistance, including mock interviews, resume workshops, and direct referrals to our hiring partners upon course completion."
        },
        {
            question: "Can I take SAP Ariba Online Training from anywhere?",
            answer: "Absolutely! Our training is 100% online and instructor-led, accessible globally. Class recordings are available if you miss a live session."
        },
        {
            question: "Is SAP Ariba Training available near me?",
            answer: "Since it's online, it's available right at your desk! We have students joining from the USA, India, UK, Australia, and the Middle East."
        },
        {
            question: "How does ERPVITS help in Ariba Careers?",
            answer: "Beyond training, we provide mentorship, job market insights, and ongoing support even after you land your first project, ensuring your long-term success."
        }
    ];

    const faqs = (items || defaultFaqs).map((item: any) => ({
        question: item.question || item.q,
        answer: item.answer || item.a
    }));

    return (
        <section className="py-8 bg-white">
            <div className="max-w-4xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-6">
                    <span className="bg-[#ff4500]/10 text-[#ff4500] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        FAQ
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked <span className="text-[#ff4500]">Questions</span>
                    </h2>
                    <p className="text-gray-600">
                        SAP Ariba Training at ERPVITS - Everything you need to know
                    </p>
                </div>

                {/* FAQ List */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-slate-100 last:border-0">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-slate-50 transition-colors"
                            >
                                <div className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                                    ${openIndex === idx ? 'bg-[#ff4500] text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {idx + 1}
                                </div>
                                <div className="flex-grow">
                                    <div className={`font-bold text-[15px] ${openIndex === idx ? 'text-[#ff4500]' : 'text-slate-800'}`}>
                                        {faq.question}
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-slate-600 text-sm leading-relaxed pr-8">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 text-[#ff4500] flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 mb-4">Still have questions?</p>
                    <button
                        onClick={scrollToBooking}
                        className="bg-[#ff4500] hover:bg-[#cc3700] text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                    >
                        <HelpCircle className="w-5 h-5" /> Get Free SAP Career Guidance
                    </button>
                </div>

            </div>
        </section>
    );
}
