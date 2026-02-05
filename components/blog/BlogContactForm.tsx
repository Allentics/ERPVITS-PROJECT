'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { courses } from '@/lib/courseData';

interface BlogContactFormProps {
    slug: string;
    isPreview?: boolean;
}

export default function BlogContactForm({ slug, isPreview = false }: BlogContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        course: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Open the thank you page immediately to ensure it opens and avoid blank page
        const newTab = window.open('/thank-you', '_blank');

        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: formData.name,
                        first_name: formData.name.split(' ')[0],
                        last_name: formData.name.split(' ').slice(1).join(' ') || '',
                        email: formData.email,
                        phone: `${formData.countryCode} ${formData.phone}`,
                        course: formData.course || `Blog: ${slug}`,
                        message: formData.message,
                    }
                ]);

            if (error) throw error;

            setStatus('success');

            // Note: newTab is already at /thank-you, no need to redirect.

            setFormData({
                name: '',
                email: '',
                countryCode: '+91',
                phone: '',
                course: '',
                message: ''
            });

            setTimeout(() => setStatus('idle'), 5000);

        } catch (error: any) {
            // Close the pre-opened tab if there's an error
            if (newTab) newTab.close();

            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const FormTag = isPreview ? 'div' : 'form';

    return (
        <div className="bg-[#FFF7ED] rounded-2xl shadow-lg border border-orange-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Request More Info</h3>
            <p className="text-gray-600 text-sm mb-5">Get expert guidance on your SAP career path.</p>

            {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-5 rounded-lg mb-4 text-center">
                    <h4 className="font-bold text-base mb-1">Thank you!</h4>
                    <p className="text-sm mb-3">Our expert will contact you shortly.</p>
                    <a href="/" className="inline-block px-5 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm text-sm">
                        Back to Home
                    </a>
                </div>
            ) : (
                <FormTag onSubmit={isPreview ? undefined : handleSubmit} className="space-y-3" role={isPreview ? 'form' : undefined}>
                    <div>
                        <input
                            type="text"
                            // ... inputs
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="w-24 px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white text-sm"
                        >
                            <option value="+91">IN (+91)</option>
                            <option value="+1">US (+1)</option>
                            <option value="+44">UK (+44)</option>
                            <option value="+971">UAE (+971)</option>
                            <option value="+61">AU (+61)</option>
                            <option value="+65">SG (+65)</option>
                            <option value="+1">CA (+1)</option>
                            <option value="+49">DE (+49)</option>
                        </select>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="flex-1 min-w-0 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white text-sm"
                        />
                    </div>
                    <div>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white text-sm"
                        >
                            <option value="">Interested Course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.title}>{course.title}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows={3}
                            placeholder="Tell us about your requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none bg-white text-sm"
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="text-red-600 text-xs">{errorMessage}</div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg shadow-md hover:shadow-orange-500/40 transition-all disabled:opacity-50 text-base"
                    >
                        {status === 'loading' ? 'Submitting...' : 'Schedule Free Counseling'}
                    </button>
                    <p className="text-center text-[10px] text-gray-400">By submitting, you agree to our privacy policy.</p>
                </FormTag>
            )}
        </div>
    );
}
