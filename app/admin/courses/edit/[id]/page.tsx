'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState<any>(null);

    useEffect(() => {
        fetchCourse();
    }, [id]);

    async function fetchCourse() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('courses')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            setFormData(data);
        } catch (err: any) {
            alert('Error fetching course: ' + err.message);
            router.push('/admin/courses');
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleJsonChange = (name: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const { error } = await supabase
                .from('courses')
                .update(formData)
                .eq('id', id);

            if (error) throw error;
            router.push('/admin/courses');
        } catch (err: any) {
            alert('Error updating course: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-orange-600 mb-2" size={32} />
                <p className="text-gray-500 text-sm">Loading course data...</p>
            </div>
        );
    }

    if (!formData) return null;

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/courses" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <h2 className="text-2xl font-bold text-gray-900">Edit Course: {formData.title}</h2>
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
                                disabled
                                value={formData.id}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Course Title</label>
                            <input
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-white"
                            >
                                <option value="Functional">Functional</option>
                                <option value="Technical">Technical</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Price</label>
                            <input
                                name="price"
                                value={formData.price || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Duration</label>
                            <input
                                name="duration"
                                value={formData.duration || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
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
                                value={formData.hero_heading || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Hero Subheading</label>
                            <textarea
                                name="hero_subheading"
                                rows={2}
                                value={formData.hero_subheading || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none resize-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Hero Image URL</label>
                            <input
                                name="hero_image"
                                value={formData.hero_image || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
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
                                value={formData.meta_title || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Meta Description</label>
                            <textarea
                                name="meta_description"
                                rows={2}
                                value={formData.meta_description || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* JSON Data */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Content Structures (JSON)</h3>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Curriculum (JSON Array)</label>
                            <textarea
                                rows={8}
                                value={JSON.stringify(formData.curriculum, null, 2)}
                                onChange={(e) => {
                                    try {
                                        handleJsonChange('curriculum', JSON.parse(e.target.value));
                                    } catch (err) { }
                                }}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-mono text-xs"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">FAQs (JSON Array)</label>
                            <textarea
                                rows={8}
                                value={JSON.stringify(formData.faqs, null, 2)}
                                onChange={(e) => {
                                    try {
                                        handleJsonChange('faqs', JSON.parse(e.target.value));
                                    } catch (err) { }
                                }}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-mono text-xs"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Page Sections (JSON Array)</label>
                            <textarea
                                rows={15}
                                value={JSON.stringify(formData.sections, null, 2)}
                                onChange={(e) => {
                                    try {
                                        handleJsonChange('sections', JSON.parse(e.target.value));
                                    } catch (err) { }
                                }}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-mono text-xs"
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
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-colors shadow-lg disabled:opacity-50 ring-2 ring-orange-500/50"
                    >
                        {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                        Update Course
                    </button>
                </div>
            </form>
        </div>
    );
}
