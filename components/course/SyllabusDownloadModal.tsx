"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { sendSyllabusEmail } from '@/app/actions/sendSyllabus';
import { submitCurriculumDownload } from '@/app/actions/submitToGoogleSheets';


interface SyllabusDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    syllabusUrl: string;
}

export default function SyllabusDownloadModal({ isOpen, onClose, courseTitle, syllabusUrl }: SyllabusDownloadModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isOpen || !mounted) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');

        // 1. Sync Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
            return; // Stop here, don't open tab
        }
        if (formData.phone.length < 10) {
            setErrorMessage('Please enter a valid phone number.');
            return; // Stop here, don't open tab
        }

        // 2. Open thank you page immediately (Sync)
        // This ensures the browser treats it as a direct user action
        window.open('/thank-you', '_blank');

        // 3. Update UI to Success immediately
        setStatus('success');

        // 4. Background Processing (Fire & Forget)
        // We explicitly do NOT await this in the main interaction flow
        const performBackgroundWork = async () => {
            try {
                // Send Email
                await sendSyllabusEmail({
                    email: formData.email,
                    name: formData.name,
                    courseTitle: courseTitle,
                    pdfUrl: syllabusUrl
                });

                // Save to Google Sheets
                await submitCurriculumDownload({
                    name: formData.name,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    course: courseTitle
                });
            } catch (err) {
                // Log error silently, user is already seeing success
                console.error('Background task failed:', err);
            }
        };

        // Trigger background work
        performBackgroundWork();

        // 5. Cleanup Form
        setTimeout(() => {
            setFormData({ name: '', email: '', countryCode: '+91', phone: '' });
        }, 5000);
    };

    return createPortal(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="text-lg font-bold text-gray-900">Download Syllabus</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    {status === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-[#ff4500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-[#ff4500]" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
                            <p className="text-gray-600 mb-4">
                                The syllabus has been sent to <strong>{formData.email}</strong>
                            </p>
                            <p className="text-sm text-gray-500 mb-6">Please check your inbox.</p>

                            <a href="/" className="inline-block px-6 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                                Back to Home
                            </a>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm text-gray-600 mb-6">
                                Please enter your details below to download the complete curriculum for <strong>{courseTitle}</strong>.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start text-red-800 text-sm">
                                        <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <div className="flex gap-2">
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            className="px-2 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] outline-none bg-white text-sm"
                                        >
                                            <option value="+91">+91</option>
                                            <option value="+1">+1</option>
                                            <option value="+44">+44</option>
                                            <option value="+971">+971</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] outline-none transition-all"
                                            placeholder="Phone number"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full mt-2 bg-gradient-to-r from-[#ff4500] to-red-600 text-white font-bold py-3 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Download Syllabus
                                            <Download className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-center text-gray-500">
                                    Your information is safe with us.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
