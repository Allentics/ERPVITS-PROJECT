"use client";

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { courses } from '@/lib/courseData';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';
import { countryCodes } from '@/lib/countryCodes';

export default function CourseContactForm({ courseName }: { courseName?: string }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        course: courseName || '',
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
            const fullPhone = `${formData.countryCode} ${formData.phone}`;
            const { error } = await supabase.from('contacts').insert([{
                first_name: formData.firstName,
                last_name: formData.lastName,
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: fullPhone,
                course: formData.course,
                message: formData.message,
            }]);

            if (error) throw error;
            submitToGoogleSheets(formData).catch(console.error);
            setStatus('success');
            setFormData({
                firstName: '', lastName: '', email: '', countryCode: '+91',
                phone: '', course: courseName || '', message: ''
            });
        } catch (error: any) {
            if (newTab) newTab.close();
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong.');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center p-4">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900">Thank you!</h4>
                <p className="text-sm text-slate-600">Our coordinator will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-xs font-bold text-[#ff4500] hover:underline">Send another request</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            {status === 'error' && (
                <div className="bg-red-50 border border-red-100 p-2 rounded text-[10px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase ml-0.5 tracking-wider">First Name</label>
                    <input
                        type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                        className="w-full px-3 py-2 text-[13px] rounded-lg border border-slate-200 outline-none focus:border-slate-400 transition-all placeholder:text-slate-300"
                        placeholder="First Name"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase ml-0.5 tracking-wider">Last Name</label>
                    <input
                        type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                        className="w-full px-3 py-2 text-[13px] rounded-lg border border-slate-200 outline-none focus:border-slate-400 transition-all placeholder:text-slate-300"
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-500 uppercase ml-0.5 tracking-wider">Email Address</label>
                <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-3 py-2 text-[13px] rounded-lg border border-slate-200 outline-none focus:border-slate-400 transition-all placeholder:text-slate-300"
                    placeholder="Email Address"
                />
            </div>

            <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-500 uppercase ml-0.5 tracking-wider">Phone Number</label>
                <div className="flex gap-2">
                    <div className="relative w-1/3">
                        <select
                            name="countryCode" value={formData.countryCode} onChange={handleChange}
                            className="w-full px-2 py-2 text-[13px] rounded-lg border border-slate-200 bg-white outline-none focus:border-slate-400"
                        >
                            {countryCodes.map(c => (
                                <option key={c.name} value={c.code}>{c.name} ({c.code})</option>
                            ))}
                        </select>
                    </div>
                    <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="flex-1 px-3 py-2 text-[13px] rounded-lg border border-slate-200 outline-none focus:border-slate-400 placeholder:text-slate-300"
                        placeholder="Phone Number"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-500 uppercase ml-0.5 tracking-wider">Interested Course</label>
                <select
                    name="course" value={formData.course} onChange={handleChange} required
                    className="w-full px-3 py-2 text-[13px] rounded-lg border border-slate-200 bg-white outline-none focus:border-slate-400 text-slate-600"
                >
                    <option value="">Select a course...</option>
                    {courses.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                </select>
            </div>

            <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-500 uppercase ml-0.5 tracking-wider">Message (Optional)</label>
                <textarea
                    name="message" value={formData.message} onChange={handleChange} rows={2}
                    className="w-full px-3 py-2 text-[13px] rounded-lg border border-slate-200 outline-none focus:border-slate-400 transition-all placeholder:text-slate-300 resize-none"
                    placeholder="Tell us about your requirements..."
                ></textarea>
            </div>

            <button
                type="submit" disabled={status === 'loading'}
                className="w-full py-3 bg-[#ff4500] text-white font-bold rounded-lg text-xs tracking-wider hover:bg-[#e63e00] transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg shadow-orange-200/50 uppercase"
            >
                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Submit <Send className="w-3.5 h-3.5" /></>}
            </button>
            <p className="text-[9px] text-center text-slate-400 mt-3 leading-relaxed">
                By submitting this form, you agree to our privacy policy.
            </p>
        </form>
    );
}
