'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function NewCoursePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        category: 'Functional',
        price: 'Contact for Pricing',
        duration: '40 Hours',
        hero_heading: '',
        hero_subheading: '',
        hero_image: '',
        meta_title: '',
        meta_description: '',
        curriculum: [] as any[],
        faqs: [] as any[],
        sections: [] as any[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleJsonChange = (name: string, value: any) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('courses')
                .insert([formData]);

            if (error) throw error;
            router.push('/admin/courses');
        } catch (err: any) {
            alert('Error creating course: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/courses" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <h2 className="text-2xl font-bold text-gray-900">Create New Course</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Course ID (Slug)</label>
                            <input
                                name="id"
                                required
                                value={formData.id}
                                onChange={handleChange}
                                placeholder="sap-ariba"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Course Title</label>
                            <input
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="SAP Ariba Training"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none bg-white"
                            >
                                <option value="Functional">Functional</option>
                                <option value="Technical">Technical</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Price</label>
                            <input
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Duration</label>
                            <input
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Hero Section</h3>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Hero Heading</label>
                            <input
                                name="hero_heading"
                                value={formData.hero_heading}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Hero Subheading</label>
                            <textarea
                                name="hero_subheading"
                                rows={2}
                                value={formData.hero_subheading}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Hero Image URL</label>
                            <input
                                name="hero_image"
                                value={formData.hero_image}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* SEO Info */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2">SEO Settings</h3>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Meta Title</label>
                            <input
                                name="meta_title"
                                value={formData.meta_title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Meta Description</label>
                            <textarea
                                name="meta_description"
                                rows={2}
                                value={formData.meta_description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* JSON Data - Simplified for now with Textareas */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Content Structures (JSON)</h3>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Curriculum (JSON Array)</label>
                            <textarea
                                rows={5}
                                value={JSON.stringify(formData.curriculum, null, 2)}
                                onChange={(e) => {
                                    try {
                                        handleJsonChange('curriculum', JSON.parse(e.target.value));
                                    } catch (err) { }
                                }}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none font-mono text-xs"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">FAQs (JSON Array)</label>
                            <textarea
                                rows={5}
                                value={JSON.stringify(formData.faqs, null, 2)}
                                onChange={(e) => {
                                    try {
                                        handleJsonChange('faqs', JSON.parse(e.target.value));
                                    } catch (err) { }
                                }}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none font-mono text-xs"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Page Sections (JSON Array)</label>
                            <textarea
                                rows={10}
                                value={JSON.stringify(formData.sections, null, 2)}
                                onChange={(e) => {
                                    try {
                                        handleJsonChange('sections', JSON.parse(e.target.value));
                                    } catch (err) { }
                                }}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none font-mono text-xs"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 pb-10">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                        Save Course
                    </button>
                </div>
            </form>
        </div>
    );
}
