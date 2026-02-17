"use client";

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ContactModal from '../ContactModal';

const DEFAULT_CONTENT = {
    title: "Affordable SAP Training – Flexible Pricing",
    subtitle: "Choose the program that fits your budget with flexible payment options available",
    plans: [
        {
            name: "Self-Paced Program",
            desc: "Ideal for independent learners",
            price: "Lifetime Access",
            features: [
                "Lifetime access to recordings",
                "Learning materials included",
                "Self-study assistance",
                "Flexible learning timeline",
                "24/7 Team support"
            ],
            cta: "Start Learning Now",
            color: "blue",
            popular: false
        },
        {
            name: "Instructor-Led Program",
            desc: "Best for career switchers",
            price: "Live Batches",
            features: [
                "Live classes with expert trainers",
                "Access to study materials & recordings",
                "Job support included",
                "Real SAP system access",
                "Project-based learning",
                "Resume Prep & Certification Guidance"
            ],
            cta: "Join Upcoming Batch",
            color: "orange",
            popular: true
        },
        {
            name: "One-to-One Training",
            desc: "Personalized mentoring & flexible learning",
            price: "Personalized",
            features: [
                "Daily customized session schedule",
                "Live Q&A with experts",
                "Full project lab access",
                "1-on-1 mentoring support",
                "Resume Preparation"
            ],
            cta: "Get Custom Plan",
            color: "purple",
            popular: false
        },
        {
            name: "Corporate Training",
            desc: "For teams and organizations",
            price: "Custom",
            features: [
                "Tailored curriculum for team needs",
                "Dedicated trainer for your organization",
                "Team coordination & project alignment",
                "Flexible training schedule",
                "Post-training support & reports"
            ],
            cta: "Request Corporate Quote",
            color: "gray",
            popular: false
        }
    ]
};

export default function PricingPlans() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Get Started with SAP");
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchPricing() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'pricing')
                    .single();

                if (data && !error) {
                    const dbContent = data.content as any;

                    // Intelligent merge: 
                    // 1. Start with DEFAULT_CONTENT plans
                    // 2. Overwrite with DB versions if they exist (by name)
                    // 3. Keep any default plans that aren't in the DB yet
                    const mergedPlans = DEFAULT_CONTENT.plans.map(defaultPlan => {
                        const dbPlan = dbContent.plans?.find((p: any) => p.name === defaultPlan.name);
                        if (!dbPlan) return defaultPlan;

                        // Merge features: combination of default and DB features, removing duplicates
                        const mergedFeatures = Array.from(new Set([
                            ...(defaultPlan.features || []),
                            ...(dbPlan.features || [])
                        ]));

                        return {
                            ...defaultPlan,
                            ...dbPlan,
                            features: mergedFeatures
                        };
                    });

                    // 4. Add any plans from DB that aren't in defaults
                    dbContent.plans?.forEach((dbPlan: any) => {
                        if (!mergedPlans.some(p => p.name === dbPlan.name)) {
                            mergedPlans.push(dbPlan);
                        }
                    });

                    setContent({
                        ...DEFAULT_CONTENT,
                        ...dbContent,
                        plans: mergedPlans
                    });
                }
            } catch (err) {
                console.error('Error fetching Pricing content:', err);
            }
        }
        fetchPricing();
    }, []);

    const openModal = (planName: string) => {
        setModalTitle(`Inquire about ${planName}`);
        setIsContactModalOpen(true);
    };

    return (
        <section className="py-14 bg-white scroll-mt-20" id="pricing">
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title={modalTitle}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
                    <p className="text-lg text-gray-600">{content.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {content.plans?.map((plan: any, i: number) => (
                        <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border relative ${plan.popular ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-200'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-6 h-10">{plan.desc}</p>

                            <div className="text-2xl font-extrabold text-blue-900 mb-8">{plan.price}</div>

                            <ul className="space-y-4 mb-8 min-h-[200px]">
                                {plan.features?.map((f: string, idx: number) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-orange-500' : 'text-blue-500'}`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => openModal(plan.name)}
                                className={`block w-full text-center py-4 rounded-lg font-bold transition-colors ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
