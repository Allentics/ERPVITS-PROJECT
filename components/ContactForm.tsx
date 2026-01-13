"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { courses } from '@/lib/courseData';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';
import { countryCodes } from '@/lib/countryCodes';

interface ContactFormProps {
    className?: string;
    showLabels?: boolean;
    successMessage?: string;
}

export default function ContactForm({ className = "", showLabels = true, successMessage = "Thank you for reaching out. Our team will contact you shortly." }: ContactFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        course: '',
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
            const fullPhone = `${formData.countryCode} ${formData.phone}`;

            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                        phone: fullPhone,
                        course: formData.course,
                        message: formData.message,
                    }
                ]);

            if (error) throw error;

            // Send to Google Sheets
            await submitToGoogleSheets(formData);

            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                countryCode: '+91',
                phone: '',
                course: '',
                message: ''
            });
        } catch (error: any) {
            console.error('Submission payload:', {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone: `${formData.countryCode} ${formData.phone}`,
                course: formData.course,
                message: formData.message,
            });
            console.error('Submission error full object:', JSON.stringify(error, null, 2));
            console.error('Submission error message:', error.message);
            console.error('Submission error details:', error.details);
            console.error('Submission error hint:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300 ${className}`}>
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">{successMessage}</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-semibold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center text-red-800 text-sm">
                    <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <p>{errorMessage}</p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    {showLabels && <label className="block text-xs font-semibold text-gray-700 mb-0.5">First Name</label>}
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                        placeholder="First Name"
                    />
                </div>
                <div>
                    {showLabels && <label className="block text-xs font-semibold text-gray-700 mb-0.5">Last Name</label>}
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div>
                {showLabels && <label className="block text-xs font-semibold text-gray-700 mb-0.5">Email Address</label>}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                    placeholder="Email Address"
                />
            </div>

            <div>
                {showLabels && <label className="block text-xs font-semibold text-gray-700 mb-0.5">Phone Number</label>}
                <div className="flex gap-2">
                    <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-[120px] px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-gray-700 text-sm"
                    >
                        {countryCodes.map((country) => (
                            <option key={country.name} value={country.code}>
                                {country.name} ({country.code})
                            </option>
                        ))}
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                        placeholder="Phone Number"
                    />
                </div>
            </div>

            <div>
                {showLabels && <label className="block text-xs font-semibold text-gray-700 mb-0.5">Interested Course</label>}
                <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-gray-900 text-sm"
                >
                    <option value="">Select a course...</option>
                    {courses.filter(c => c.title !== 'Other' && c.id !== 'other').map((course) => (
                        <option key={course.id} value={course.title}>{course.title}</option>
                    ))}
                </select>
            </div>

            <div>
                {showLabels && <label className="block text-xs font-semibold text-gray-700 mb-0.5">Message</label>}
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                    placeholder="Tell us about your requirements..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg disabled:bg-orange-300 disabled:cursor-not-allowed text-sm"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Submitting...
                    </>
                ) : (
                    <>
                        Submit
                        <Send className="ml-2 h-5 w-5" />
                    </>
                )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">By submitting this form, you agree to our privacy policy.</p>
        </form>
    );
}
