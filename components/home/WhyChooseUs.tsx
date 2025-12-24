import { Monitor, Calculator, Briefcase, Award, Clock, Users, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
    {
        icon: Monitor,
        title: "Expert SAP Training with Industry Leaders",
        desc: "Instructors with 15+ years of practical SAP experience. Learn from experts who have undertaken SAP projects in Fortune 500 companies."
    },
    {
        icon: Zap,
        title: "Real-Time, Instructor-Led SAP Courses",
        desc: "Interactive live sessions with real-time Q&A. No pre-recorded content. Engage in discussions and receive prompt responses."
    },
    {
        icon: Briefcase,
        title: "Hands-On Project-Based SAP Learning",
        desc: "Practice with live SAP environments. Complete end-to-end projects from requirement gathering to implementation."
    },
    {
        icon: Award,
        title: "Job Placement Support & Career Support",
        desc: "Placement success rate of >95%. Comprehensive support including resume prep, mock interviews, and hiring partner connections."
    },
    {
        icon: ShieldCheck,
        title: "Guidance for Multiple SAP Certifications",
        desc: "Support for global certifications (Ariba, FICO, S/4HANA, etc.). Align coursework with exam requirements."
    },
    {
        icon: Clock,
        title: "Flexible SAP Learning Formats for Your Schedule",
        desc: "Instructor-Led, Self-Paced, and Corporate options. Weekend and evening batches available for working professionals."
    },
    {
        icon: Calculator,
        title: "Affordable SAP Course Charges",
        desc: "Competitive pricing with flexible installment plans. High quality training that doesn't break the bank."
    },
    {
        icon: Users,
        title: "Lifetime Career Support & Mentorship",
        desc: "Lifetime access to mentors, alumni network, and professional development resources even after course completion."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ERPVITS for Your SAP Online Training?</h2>
                    <p className="text-lg text-gray-600">
                        Transform Your Career with Certified SAP Online Training – 6000+ Professionals Trained & Successfully Placed Globally
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <b.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-3 text-lg">{b.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
