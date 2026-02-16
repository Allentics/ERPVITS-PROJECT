
"use client";

import { ClipboardList, Target, Award, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';

import { courses } from '@/lib/courseData';
import { countryCodes } from '@/lib/countryCodes';

const ICON_MAP: any = {
    ClipboardList, Target, Award, Calendar
};

const DEFAULT_CONTENT = {
    title: "Get Your Personalized SAP Training Plan – It's FREE!",
    highlight_word: "SAP Training Plan",
    description: "Every professional's journey to proficiency in SAP is unique. We will design a personalized training program just for you based on your background, career objectives, and timeline.",
    benefits: [
        { icon: "ClipboardList", text: "Customized curriculum based on your background" },
        { icon: "Target", text: "Career roadmap with salary projections" },
        { icon: "Award", text: "Recommended certifications for your target role" },
        { icon: "Calendar", text: "Flexible scheduling options to fit your life" }
    ],
    career_paths_title: "Popular Career Paths:",
    career_paths: [
        { role: "SAP Consultant", salary: "$85K → $150K" },
        { role: "Technical Architect", salary: "$110K → $180K" },
        { role: "Analytics Specialist", salary: "$75K → $135K" },
        { role: "Project Manager", salary: "$95K → $160K" }
    ],
    form_title: "Get Free Career Guidance",
    cta_text: "Get My Free Career Roadmap"
};

export default function CustomTrainingPlan() {
    const [countryCode, setCountryCode] = useState('+91');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        background: '',
        interestedCourse: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [content, setContent] = useState(DEFAULT_CONTENT);

    useEffect(() => {
        async function fetchContent() {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('page_path', '/')
                    .eq('section_key', 'custom_plan')
                    .single();

                if (data && !error) {
                    setContent({ ...DEFAULT_CONTENT, ...data.content });
                }
            } catch (err) {
                console.error('Error fetching CustomPlan content:', err);
            }
        }
        fetchContent();
    }, []);

    // Get unique course titles for dropdown
    const uniqueCourses = Array.from(new Set(courses.map(c => c.title)))
        .filter(t => t !== 'Other' && Boolean(t))
        .sort((a, b) => a.localeCompare(b));

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
            // Send to Google Sheets (Fire and forget)
            submitToGoogleSheets(formData).catch((err: any) => console.error('Google Sheet Error:', err));

            setStatus('success');
            // newTab is already at /thank-you

            setFormData({ fullName: '', email: '', phone: '', background: '', interestedCourse: '', message: '' });
        } catch (error: any) {
            if (newTab) newTab.close();
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error?.message || error?.error_description || JSON.stringify(error) || 'Unknown error occurred');
        }
    };

    const titleParts = content.title.split(content.highlight_word);

    return (
        <section className="py-14 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            {titleParts[0]}<span className="text-orange-600">{content.highlight_word}</span>{titleParts[1]}
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            {content.description}
                        </p>

                        <div className="space-y-6">
                            {(content.benefits || DEFAULT_CONTENT.benefits).map((item: any, i: number) => {
                                const Icon = ICON_MAP[item.icon] || ClipboardList;
                                return (
                                    <div key={i} className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4">
                                            <Icon className="h-5 w-5 text-orange-400" />
                                        </div>
                                        <span className="font-medium text-lg">{item.text || item}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Popular Career Paths Section */}
                        <div className="bg-white text-slate-900 rounded-xl p-6 mt-10 shadow-lg border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-5">{content.career_paths_title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {content.career_paths?.map((path: any, i: number) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <div className="font-bold text-slate-900 text-sm">{path.role}</div>
                                        <div className="text-xs text-slate-500 font-medium mt-1">{path.salary}</div>
                                    </div>
                                ))}
                            </div>
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
                                <div className="flex flex-col gap-3 mt-6 items-center">
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-orange-500 font-bold hover:underline"
                                    >
                                        Submit another request
                                    </button>
                                    <a href="/" className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                        Back to Home
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">{content.form_title}</h3>
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
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">SAP Module *</label>
                                        <select
                                            value={formData.interestedCourse}
                                            onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                                        <label className="block text-sm font-semibold mb-1">Your Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            placeholder="Tell us about your goals or questions..."
                                            rows={3}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-4 disabled:bg-orange-300"
                                    >
                                        {status === 'loading' ? 'Submitting...' : content.cta_text}
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
