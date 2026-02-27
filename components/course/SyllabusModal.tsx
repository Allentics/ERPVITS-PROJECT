"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Download, Loader2, CheckCircle } from 'lucide-react';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';
import { sendSyllabusEmail } from '@/app/actions/sendSyllabus';
import { countryCodes } from '@/lib/countryCodes';


interface SyllabusModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    pdfUrl: string;
}

export default function SyllabusModal({ isOpen, onClose, courseTitle, pdfUrl }: SyllabusModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91'
    });

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // 1. Sync Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return; // Stop here
        }

        // 2. Open thank you page immediately
        window.open('/thank-you', '_blank');

        // 3. UI Success
        setIsSuccess(true);
        setIsSubmitting(true); // Keep submitting true to show spinner/success state

        // 4. Background Processing
        const performBackgroundWork = async () => {
            try {
                // Send Email
                await sendSyllabusEmail({
                    email: formData.email,
                    name: formData.name,
                    courseTitle,
                    pdfUrl
                });

                // Supabase
                const { supabase } = await import('@/lib/supabase');
                await supabase.from('contacts').insert([{
                    first_name: formData.name,
                    name: formData.name,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    course: courseTitle,
                    message: 'Downloaded Syllabus via Modal'
                }]);

                // Google Sheets
                await submitToGoogleSheets({
                    firstName: formData.name,
                    lastName: '',
                    email: formData.email,
                    phone: formData.phone,
                    countryCode: formData.countryCode,
                    course: courseTitle,
                    message: 'Downloaded Syllabus'
                });
            } catch (err) {
                console.error('Background task error:', err);
            } finally {
                setIsSubmitting(false);
            }
        };

        performBackgroundWork();

        // 5. Cleanup
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', countryCode: '+91' });
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div
                ref={modalRef}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200"
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-lg text-gray-900">Download Curriculum</h3>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6">
                    {isSuccess ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-[#ff4500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-[#ff4500]" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
                            <p className="text-gray-600 mb-6">
                                The syllabus has been sent to your email.
                            </p>
                            <a href="/" className="inline-block px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                Back to Home
                            </a>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm text-gray-600 mb-6">
                                Please enter your details below. We will send the <strong>{courseTitle}</strong> detailed curriculum to your email immediately.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] outline-none transition-all"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] outline-none transition-all"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <div className="flex gap-2">
                                        <select
                                            className="w-[120px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4500] outline-none bg-gray-50"
                                            value={formData.countryCode}
                                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
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
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] outline-none transition-all"
                                            placeholder="9876543210"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center py-3 px-4 bg-[#ff4500] hover:bg-[#cc3700] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <Download className="w-5 h-5 mr-2" />
                                            Download Syllabus
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Your information is safe with us. We don't spam.
                                </p>

                                <div className="text-center pt-2 border-t border-gray-100">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            window.open(pdfUrl, '_blank');
                                            onClose();
                                        }}
                                        className="text-xs text-slate-400 hover:text-slate-600 underline"
                                    >
                                        Skip verification and view PDF directly
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
