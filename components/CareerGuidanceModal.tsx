"use client";

import { X, ClipboardList } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';
import { courses } from '@/lib/courseData';
import { countryCodes } from '@/lib/countryCodes';

interface CareerGuidanceModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultCourse?: string;
}

const DEFAULT_CONTENT = {
    form_title: "Get Free Career Guidance",
    cta_text: "Get My Free Career Roadmap"
};

export default function CareerGuidanceModal({ isOpen, onClose, defaultCourse = "" }: CareerGuidanceModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [countryCode, setCountryCode] = useState('+91');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        background: '',
        interestedCourse: defaultCourse,
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (defaultCourse) {
                setFormData(prev => ({ ...prev, interestedCourse: defaultCourse }));
            }
        } else {
            document.body.style.overflow = 'unset';
            // Optional: Reset form when closed? No, keep it.
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, defaultCourse]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Get unique course titles for dropdown
    const uniqueCourses = Array.from(new Set(courses.map(c => c.title)))
        .filter(t => t !== 'Other' && Boolean(t))
        .sort((a, b) => a.localeCompare(b));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Open the thank you page immediately
        const newTab = window.open('/thank-you', '_blank');

        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        first_name: formData.fullName.split(' ')[0],
                        last_name: formData.fullName.split(' ').slice(1).join(' ') || '',
                        name: formData.fullName,
                        email: formData.email,
                        phone: `${countryCode} ${formData.phone}`,
                        course: formData.interestedCourse || 'Custom Training Plan Request',
                        message: `Background: ${formData.background}\nMessage: ${formData.message}`,
                    }
                ]);

            if (error) throw error;

            // Send to Google Sheets
            const googleSheetData = {
                firstName: formData.fullName.split(' ')[0],
                lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
                email: formData.email,
                phone: formData.phone,
                countryCode: countryCode,
                course: formData.interestedCourse
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            submitToGoogleSheets(googleSheetData).catch((err: any) => console.error('Google Sheet Error:', err));

            setStatus('success');
            setFormData({ fullName: '', email: '', phone: '', background: '', interestedCourse: '', message: '' });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (newTab) newTab.close();
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error?.message || error?.error_description || JSON.stringify(error) || 'Unknown error occurred');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div
                ref={modalRef}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-y-auto animate-in fade-in zoom-in duration-200"
            >
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-4 md:p-5">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ClipboardList className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                            <p className="text-gray-600">Our team will analyze your profile and send your custom roadmap shortly.</p>
                            <div className="flex flex-col gap-3 mt-6 items-center">
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-orange-500 font-bold hover:underline"
                                >
                                    Submit another request
                                </button>
                                <button onClick={onClose} className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-xl font-bold mb-3 text-center text-slate-900">{DEFAULT_CONTENT.form_title}</h3>
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-xs font-semibold mb-0.5 text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-0.5 text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-0.5 text-slate-700">Phone Number</label>
                                    <div className="flex gap-2">
                                        <select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            className="w-[110px] px-2 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white text-gray-700"
                                        >
                                            {countryCodes.map((country) => (
                                                <option key={country.name} value={country.code}>
                                                    {country.name} ({country.code})
                                                </option>
                                            ))}
                                        </select>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                            placeholder="98765 43210"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-0.5 text-slate-700">Current Role / Background</label>
                                    <select
                                        required
                                        value={formData.background}
                                        onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">Select your background...</option>
                                        <option value="Student / Fresher">Student / Fresher</option>
                                        <option value="Finance Professional">Finance Professional</option>
                                        <option value="Supply Chain Professional">Supply Chain Professional</option>
                                        <option value="HR Professional">HR Professional</option>
                                        <option value="IT / Developer">IT / Developer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-0.5 text-slate-700">SAP Module *</label>
                                    <select
                                        value={formData.interestedCourse}
                                        onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
                                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">Select SAP Module</option>
                                        {uniqueCourses.map((course, index) => (
                                            <option key={index} value={course}>
                                                {course}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-0.5 text-slate-700">Your Message</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Tell us about your goals or questions..."
                                        rows={2}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 text-sm rounded-lg shadow-lg hover:shadow-xl transition-all mt-2 disabled:bg-orange-300"
                                >
                                    {status === 'loading' ? 'Submitting...' : DEFAULT_CONTENT.cta_text}
                                </button>
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 rounded p-4 mt-4">
                                        <p className="text-red-700 font-bold mb-1">Submission Failed</p>
                                        <p className="text-red-600 text-sm">{errorMessage}</p>
                                    </div>
                                )}
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
