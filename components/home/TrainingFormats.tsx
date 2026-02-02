"use client";

import { Video, MonitorPlay, Users, Building2, GraduationCap, Repeat } from 'lucide-react';

export default function TrainingFormats() {
    const formats = [
        {
            icon: Video,
            title: "Real-Time Instructor-Led",
            description: "Live interactive sessions with expert trainers, real-time Q&A, and structured curriculum",
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            icon: MonitorPlay,
            title: "Self-Paced Online",
            description: "Learn at your own pace with 24/7 access to recorded content and downloadable resources",
            color: "text-red-500",
            bg: "bg-red-50"
        },
        {
            icon: Users,
            title: "Group-Based Training",
            description: "Cohort-based learning with collaborative projects and peer networking opportunities",
            color: "text-slate-800",
            bg: "bg-slate-50"
        },
        {
            icon: Building2,
            title: "Corporate Solutions",
            description: "Customized training programs for organizations with tailored curriculum and volume discounts",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: GraduationCap,
            title: "One-on-One Mentoring",
            description: "Personalized training sessions with dedicated expert mentor and flexible scheduling",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Repeat,
            title: "Hybrid Learning",
            description: "Combination of live and self-paced learning for maximum flexibility and engagement",
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Flexible SAP Online Training Formats – Learn Your Way
                    </h2>
                    <p className="text-slate-600">
                        Choose the learning format that best fits your schedule and career goals
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {formats.map((format, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className={`w-14 h-14 ${format.bg} rounded-lg flex items-center justify-center mb-6`}>
                                <format.icon className={`w-8 h-8 ${format.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{format.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {format.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
