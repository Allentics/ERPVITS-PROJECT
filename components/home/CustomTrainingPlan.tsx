"use client";

import { ClipboardList, Target, Award, Calendar } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function CustomTrainingPlan() {
    const [countryCode, setCountryCode] = useState('+91');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        background: ''
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
                        first_name: formData.fullName.split(' ')[0],
                        last_name: formData.fullName.split(' ').slice(1).join(' ') || '',
                        name: formData.fullName,
                        email: formData.email,
                        phone: `${countryCode} ${formData.phone}`,
                        course: 'Custom Training Plan Request',
                        message: `Background: ${formData.background}`,
                    }
                ]);

            if (error) throw error;
            setStatus('success');
            setFormData({ fullName: '', email: '', phone: '', background: '' });
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error?.message || error?.error_description || JSON.stringify(error) || 'Unknown error occurred');
        }
    };

    return (
        <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Get Your Personalized <span className="text-orange-400">SAP Training Plan</span> – It's FREE!
                        </h2>
                        <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                            Every professional's journey to proficiency in SAP is unique. We will design a personalized training program just for you based on your background, career objectives, and timeline.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: ClipboardList, text: "Customized curriculum based on your background" },
                                { icon: Target, text: "Career roadmap with salary projections" },
                                { icon: Award, text: "Recommended certifications for your target role" },
                                { icon: Calendar, text: "Flexible scheduling options to fit your life" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                                        <item.icon className="h-5 w-5 text-orange-400" />
                                    </div>
                                    <span className="font-medium text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-2xl text-gray-800">
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ClipboardList className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                                <p className="text-gray-600">Our team will analyze your profile and send your custom roadmap shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-orange-500 font-bold hover:underline"
                                >
                                    Submit another request
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Request Your Custom Plan</h3>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Phone Number</label>
                                        <div className="flex gap-3">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="w-[140px] px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white text-gray-700"
                                            >
                                                <option value="+91">🇮🇳 +91</option>
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+44">🇬🇧 +44</option>
                                                <option value="+971">🇦🇪 +971</option>
                                                <option value="+65">🇸🇬 +65</option>
                                                <option value="+61">🇦🇺 +61</option>
                                                <option value="+49">🇩🇪 +49</option>
                                                <option value="+33">🇫🇷 +33</option>
                                                <option value="+1">🇨🇦 +1</option>
                                                <option value="">Other</option>
                                            </select>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                                placeholder="98765 43210"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Current Role / Background</label>
                                        <select
                                            required
                                            value={formData.background}
                                            onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-4 disabled:bg-orange-300"
                                    >
                                        {status === 'loading' ? 'Submitting...' : 'Get My Free Career Roadmap'}
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
        </section>
    );
}
