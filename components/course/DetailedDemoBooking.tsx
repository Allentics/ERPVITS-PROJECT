"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, Briefcase, MessageSquare, ArrowRight, CheckCircle2, Video, Calendar, HelpCircle, Gift, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';

export default function DetailedDemoBooking({ courseName = "SAP Consultant", title, subtitle, benefits }: { courseName?: string, title?: string, subtitle?: string, benefits?: any[] }) {
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
        const newTab = window.open('/thank-you', '_blank');
        setStatus('loading');
        setErrorMessage('');

        try {
            const names = formData.fullName.trim().split(' ');
            const firstName = names[0] || '';
            const lastName = names.slice(1).join(' ') || '';
            const fullMessage = `Experience: ${formData.experience}\n\n${formData.message}`;

            const { error } = await supabase.from('contacts').insert([{
                name: formData.fullName, first_name: firstName, last_name: lastName,
                email: formData.email, phone: formData.phone, course: courseName, message: fullMessage
            }]);

            if (error) throw error;
            submitToGoogleSheets({ firstName, lastName, email: formData.email, countryCode: '', phone: formData.phone, course: courseName, message: fullMessage }).catch(console.error);

            setStatus('success');
            setFormData({ fullName: '', email: '', phone: '', experience: '', message: '' });
        } catch (error: any) {
            if (newTab) newTab.close();
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const defaultBenefits = [
        { icon: Video, title: "Insightful Live Ariba Session", desc: "Observe real training and instructor methodology" },
        { icon: Calendar, title: "30 Min Career Consultation", desc: "Personalized guidance based on your background" },
        { icon: HelpCircle, title: "Q&A with Instructor", desc: "Ask questions about course, certification, and career" },
        { icon: Gift, title: "Special Discount Offer", desc: "Exclusive discount pass for demo attendees" }
    ];

    const displayBenefits = benefits && benefits.length > 0 ? benefits : defaultBenefits;

    return (
        <section id="detailed-demo-booking" className="py-8 bg-orange-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-900/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-6">
                    <span className="bg-white text-slate-900 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2 inline-block">
                        Get Started
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {title || <>Ready to Become an <span className="text-white underline decoration-white/30">{courseName} Consultant?</span></>}
                    </h2>
                    <p className="text-orange-50 max-w-xl mx-auto text-xs">
                        {subtitle || `Book your free demo today and take the first step towards a lucrative ${courseName} career`}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-base font-bold text-white mb-3">What You'll Get With Your Free Demo</h3>
                            <div className="space-y-2">
                                {displayBenefits.map((item: any, i: number) => {
                                    const Icon = item.icon || CheckCircle2; // Fallback icon
                                    // if benefit comes from admin (JSON), icon might be string name, hard to map dynamically here without map logic. 
                                    // simpler: support title/desc only for dynamic items, use fixed icon.
                                    return (
                                        <div key={i} className="bg-white/10 border border-white/20 p-2.5 rounded-lg flex items-start gap-3">
                                            <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-slate-900 shrink-0">
                                                <Icon className="w-3.5 h-3.5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-0 text-xs">{item.title}</h4>
                                                <p className="text-[10px] text-orange-50">{item.desc || item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Contact Box */}
                        <div className="bg-white rounded-xl p-4 text-slate-900 relative overflow-hidden shadow-lg">
                            <div className="relative z-10">
                                <h3 className="font-bold text-sm mb-2">Contact Information</h3>
                                <div className="space-y-1.5 text-xs">
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-3.5 h-3.5 text-orange-600" />
                                        <span>+91 84088 78222</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-3.5 h-3.5 text-orange-600" />
                                        <span>info@erpvits.com</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-3.5 h-3.5 mt-0.5 text-orange-600" />
                                        <span>ERPVITS Training Center, Pune, India</span>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-8 w-16 h-16 bg-orange-50 rounded-full translate-y-1/2"></div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white rounded-xl p-4 lg:p-5 shadow-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-t-xl"></div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Book Your <span className="text-slate-900 underline decoration-orange-500 decoration-2 underline-offset-2">Free Demo</span></h3>

                        {status === 'success' ? (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-in fade-in zoom-in duration-300">
                                <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-3" />
                                <h3 className="text-lg font-bold text-green-900 mb-1">Registration Confirmed!</h3>
                                <p className="text-green-700 text-sm mb-4">
                                    Our training coordinator will contact you shortly.
                                </p>
                                <div className="flex flex-col gap-2 items-center">
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-slate-900 text-sm font-semibold hover:underline"
                                    >
                                        Book another demo
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-2">
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 rounded p-1.5 flex items-center text-red-800 text-[10px]">
                                        <AlertCircle className="h-3 w-3 mr-1.5 flex-shrink-0" />
                                        {errorMessage}
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-700 mb-0.5 ml-1">Full Name *</label>
                                        <div className="relative">
                                            <User className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                placeholder="Name"
                                                className="w-full pl-7 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-slate-900 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-700 mb-0.5 ml-1">Phone *</label>
                                        <div className="relative">
                                            <Phone className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91..."
                                                className="w-full pl-7 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-slate-900 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5 ml-1">Email *</label>
                                    <div className="relative">
                                        <Mail className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email"
                                            className="w-full pl-7 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-slate-900 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5 ml-1">Experience</label>
                                    <div className="relative">
                                        <Briefcase className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full pl-7 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-slate-900 transition-colors appearance-none text-slate-700"
                                        >
                                            <option value="">Select Level</option>
                                            <option value="Student / Fresher">Student / Fresher</option>
                                            <option value="1-3 Years">1-3 Years</option>
                                            <option value="3-5 Years">3-5 Years</option>
                                            <option value="5+ Years">5+ Years</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5 ml-1">Message</label>
                                    <div className="relative">
                                        <MessageSquare className="w-3 h-3 text-slate-400 absolute left-2.5 top-2.5" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Optional..."
                                            rows={2}
                                            className="w-full pl-7 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-slate-900 transition-colors resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-900/10 font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-1 disabled:bg-slate-100 disabled:text-slate-400 text-sm"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-3 h-3 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Book Demo Now <ArrowRight className="w-3 h-3 text-orange-600" />
                                        </>
                                    )}
                                </button>

                                <p className="text-[9px] text-center text-slate-400 mt-1 leading-tight">
                                    By submitting, you agree to our privacy policy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
