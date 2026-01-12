"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, Briefcase, MessageSquare, ArrowRight, CheckCircle2, Video, Calendar, HelpCircle, Gift, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';

export default function DetailedDemoBooking({ courseName = "SAP Consultant" }: { courseName?: string }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // Parse Name
            const names = formData.fullName.trim().split(' ');
            const firstName = names[0] || '';
            const lastName = names.slice(1).join(' ') || '';

            // 1. Insert into Supabase
            // Note: Storing experience in the message body for now as 'experience_level' column status is unverified
            const fullMessage = `Experience: ${formData.experience}\n\n${formData.message}`;

            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: formData.fullName,
                        first_name: firstName,
                        last_name: lastName,
                        email: formData.email,
                        phone: formData.phone,
                        course: courseName,
                        message: fullMessage,
                    }
                ]);

            if (error) throw error;

            // 2. Send to Google Sheets
            // Adapted to match the ContactForm structure expected by the server action
            await submitToGoogleSheets({
                firstName,
                lastName,
                email: formData.email,
                countryCode: '', // Form input includes full number usually
                phone: formData.phone,
                course: courseName,
                message: fullMessage
            });

            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                experience: '',
                message: ''
            });

        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section id="detailed-demo-booking" className="py-20 bg-[#0B1120] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Get Started
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Ready to Become an <span className="text-orange-500">{courseName} Consultant?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Book your free demo today and take the first step towards a lucrative {courseName} career
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Benefits & Contact */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">What You'll Get With Your Free Demo</h3>
                            <div className="space-y-4">
                                <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                                        <Video className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Insightful Live Ariba Session</h4>
                                        <p className="text-sm text-gray-400">Observe real training and instructor methodology</p>
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">30 Min Career Consultation</h4>
                                        <p className="text-sm text-gray-400">Personalized guidance based on your background</p>
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                                        <HelpCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Q&A with Instructor</h4>
                                        <p className="text-sm text-gray-400">Ask questions about course, certification, and career</p>
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                                        <Gift className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Special Discount Offer</h4>
                                        <p className="text-sm text-gray-400">Exclusive discount pass for demo attendees</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Box */}
                        <div className="bg-orange-600 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4" />
                                        <span>+91 84088 78222</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4" />
                                        <span>info@erpvits.com</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 mt-0.5" />
                                        <span>ERPVITS Training Center<br />Pune, Maharashtra, India</span>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-10 w-24 h-24 bg-white/10 rounded-full translate-y-1/2"></div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-2xl"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your <span className="text-orange-600">Free Demo</span></h3>

                        {status === 'success' ? (
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                                <CheckCircle2 className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-orange-900 mb-2">Registration Confirmed!</h3>
                                <p className="text-orange-700 mb-6">
                                    Thank you for your interest. Our training coordinator will contact you shortly to schedule your demo.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-orange-600 font-semibold hover:underline"
                                >
                                    Book another demo
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center text-red-800 text-sm">
                                        <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                                        {errorMessage}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Full Name *</label>
                                    <div className="relative">
                                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Email Address *</label>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Phone Number *</label>
                                    <div className="relative">
                                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 9999999999"
                                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Current Experience Level</label>
                                    <div className="relative">
                                        <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none text-slate-700"
                                        >
                                            <option value="">Select your experience level</option>
                                            <option value="Student / Fresher">Student / Fresher</option>
                                            <option value="1-3 Years">1-3 Years</option>
                                            <option value="3-5 Years">3-5 Years</option>
                                            <option value="5+ Years">5+ Years</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Message (Optional)</label>
                                    <div className="relative">
                                        <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your career goals..."
                                            rows={3}
                                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 mt-2 disabled:bg-orange-400 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Book Free Demo Now <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center text-slate-400 mt-4 leading-tight">
                                    By submitting, you agree to our privacy policy and consent to receive updates about our training programs via email/phone.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
