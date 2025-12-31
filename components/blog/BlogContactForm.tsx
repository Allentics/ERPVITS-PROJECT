'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { courses } from '@/lib/courseData';

interface BlogContactFormProps {
    slug: string;
}

export default function BlogContactForm({ slug }: BlogContactFormProps) {
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

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request More Info</h3>
            <p className="text-gray-600 mb-8">Get expert guidance on your SAP career path.</p>

            {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                    Thank you! Our expert will contact you shortly.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
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
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="w-24 px-2 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white text-sm"
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
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                        />
                    </div>
                    <div>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white"
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
                            rows={4}
                            placeholder="Tell us about your requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none"
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="text-red-600 text-sm">{errorMessage}</div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-orange-500/40 transition-all disabled:opacity-50"
                    >
                        {status === 'loading' ? 'Submitting...' : 'Schedule Free Counseling'}
                    </button>
                    <p className="text-center text-xs text-gray-400">By submitting, you agree to our privacy policy.</p>
                </form>
            )}
        </div>
    );
}
