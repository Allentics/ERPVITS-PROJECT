"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Download, User, Mail, Briefcase, Calendar, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';

interface TestimonialItem {
    name: string;
    role: string;
    quote: string;
    image?: string;
}

interface TestimonialStats {
    rating: string;
    reviews: string;
    label: string;
}

export default function DetailedTestimonials({ items, stats, courseName = "SAP" }: { items?: TestimonialItem[], stats?: TestimonialStats, courseName?: string }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: '',
        experience: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const scrollToBooking = () => {
        const element = document.getElementById('detailed-demo-booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const names = formData.fullName.trim().split(' ');
            const firstName = names[0] || '';
            const lastName = names.slice(1).join(' ') || '';

            const fullMessage = `Desired Role: ${formData.role}\nYears Experience: ${formData.experience}\n\n(Requested Interview Guide)`;

            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: formData.fullName,
                        first_name: firstName,
                        last_name: lastName,
                        email: formData.email,
                        phone: '', // Not collected in this form
                        course: `${courseName} - Interview Guide`,
                        message: fullMessage,
                    }
                ]);

            if (error) throw error;

            await submitToGoogleSheets({
                firstName,
                lastName,
                email: formData.email,
                countryCode: '',
                phone: '',
                course: `${courseName} - Interview Guide`,
                message: fullMessage
            });

            setStatus('success');
            setFormData({ fullName: '', email: '', role: '', experience: '' });

        } catch (error: any) {
            console.error(error);
            setStatus('error');
            setErrorMessage(error.message || 'Submission failed.');
        }
    };

    const defaultReviews = [
        {
            text: "Outstanding training and real project exposure. I landed a consulting role at Accenture within 2 weeks of completing the course. The hands-on approach and expert instructors made all the difference.",
            author: "Rahul Mehta",
            role: "SAP Ariba Consultant at Accenture",
            initial: "R",
            color: "bg-[#ff4500]"
        },
        {
            text: "The weekend flexibility allowed me to learn while working. My employer was so impressed with my skills that they promoted me to Procurement Manager. The course accelerated my career by 2 years.",
            author: "Priya Sharma",
            role: "Procurement Manager",
            initial: "P",
            color: "bg-blue-500"
        },
        {
            text: "Best decision I made. The capstone projects were exactly like real client work. I walked into my first consulting role feeling confident and job-ready. The continuous support was exceptional!",
            author: "Rajesh S.",
            role: "Senior SAP Consultant",
            initial: "R",
            color: "bg-[#ff4500]"
        }
    ];

    const rawReviews = items || defaultReviews;

    // Normalize reviews to ensure they have color/initial
    const reviewsArray = rawReviews.map((r: any, i: number) => {
        const colors = ["bg-[#ff4500]", "bg-blue-500", "bg-[#ff4500]", "bg-purple-500", "bg-red-500", "bg-indigo-500"];
        return {
            text: r.quote || r.text || r.content, // Fallback to r.content if quote/text are missing
            author: r.name || r.author,
            role: r.role,
            initial: r.initial || (r.name || r.author || "U").charAt(0).toUpperCase(),
            color: r.color || colors[i % colors.length]
        };
    });

    const ratingValue = stats?.rating || "4.9/5";
    const reviewsCountLabel = stats?.reviews || "500+ student reviews";

    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Testimonials Header */}
                <div className="text-center mb-6">
                    <span className="bg-[#ff4500]/10 text-[#ff4500] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Student Success Stories
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                        Hear from Our Successful <span className="text-[#ff4500]">{courseName} Learners</span>
                    </h2>
                    <p className="text-gray-600 text-sm">Real reviews, real results from professionals who transformed their careers</p>

                </div>

            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {reviewsArray.map((review, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                        <Quote className="w-8 h-8 text-[#ff4500]/20 absolute top-6 right-6 fill-orange-50" />
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed mb-6 italic">&quot;{review.text}&quot;</p>
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-xs`}>
                                {review.initial}
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 text-xs">{review.author}</div>
                                <div className="text-[10px] text-slate-500">{review.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
