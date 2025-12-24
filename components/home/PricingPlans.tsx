import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: "Self-Paced Program",
        desc: "Ideal for independent learners",
        price: "Lifetime Access",
        features: [
            "Lifetime access to recordings",
            "Learning materials included",
            "Self-study assistance",
            "Flexible learning timeline"
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
            "Project-based learning"
        ],
        cta: "Join Upcoming Batch",
        color: "orange",
        popular: true
    },
    {
        name: "Corporate Training",
        desc: "For teams and organizations",
        price: "Custom",
        features: [
            "Tailored curriculum for team needs",
            "Dedicated trainer for your organization",
            "Team coordination & project alignment",
            "Flexible training schedule"
        ],
        cta: "Request Corporate Quote",
        color: "gray",
        popular: false
    }
];

export default function PricingPlans() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Affordable SAP Training – Flexible Pricing</h2>
                    <p className="text-lg text-gray-600">Choose the program that fits your budget with flexible payment options available</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <div key={i} className={`bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 relative hover:-translate-y-2 hover:shadow-xl ${plan.popular ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-200'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>

                            <div className="text-3xl font-extrabold text-blue-900 mb-8">{plan.price}</div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((f, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-orange-500' : 'text-blue-500'}`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className={`block w-full text-center py-4 rounded-lg font-bold transition-colors ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
