'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';
import RichTextEditor from '@/components/admin/RichTextEditor';

export default function NewBlogPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        content: '',
        image: '',
        date: new Date().toISOString().split('T')[0],
        category: 'SAP Career',
        author: 'ERPVITS Team',
        meta_title: '',
        meta_description: '',
        schema_markup: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (value: string) => {
        setFormData(prev => ({ ...prev, content: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('blog_posts')
                .insert([formData]);

            if (error) throw error;
            router.push('/admin/blogs');
        } catch (err: any) {
            alert('Error creating blog post: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    // Auto-generate ID from title
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        setFormData(prev => ({ ...prev, title, id: slug }));
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4">
                <Link href="/admin/blogs" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <h2 className="text-2xl font-bold text-gray-900">Create New Blog Post</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Core Content</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Title</label>
                            <input
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleTitleChange}
                                placeholder="Why SAP C4C Certification Matters in 2024"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Post ID (Slug)</label>
                            <input
                                name="id"
                                required
                                value={formData.id}
                                onChange={handleChange}
                                placeholder="sap-c4c-certification-guide"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Category</label>
                        <input
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="SAP Certification"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Description (Short Excerpt)</label>
                        <textarea
                            name="description"
                            required
                            rows={2}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Date</label>
                            <input
                                name="date"
                                type="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Author</label>
                            <input
                                name="author"
                                required
                                value={formData.author}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Featured Image URL</label>
                            <input
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <RichTextEditor
                            label="Post Content"
                            value={formData.content}
                            onChange={handleContentChange}
                        />
                    </div>
                </div>

                {/* SEO & Metadata Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2">SEO & Schema Metadata</h3>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Meta Title</label>
                            <p className="text-xs text-gray-400">Leave blank to use the post title.</p>
                            <input
                                name="meta_title"
                                value={formData.meta_title}
                                onChange={handleChange}
                                placeholder="Custom SEO Title"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Meta Description</label>
                            <p className="text-xs text-gray-400">Leave blank to use the short excerpt.</p>
                            <textarea
                                name="meta_description"
                                rows={2}
                                value={formData.meta_description}
                                onChange={handleChange}
                                placeholder="Custom SEO Description"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Schema Markup (JSON-LD)</label>
                            <p className="text-xs text-gray-400">Paste valid JSON-LD code here. It will be injected into the &lt;head&gt;.</p>
                            <textarea
                                name="schema_markup"
                                rows={5}
                                value={formData.schema_markup}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none font-mono text-xs bg-gray-50"
                                placeholder='{ "@context": "https://schema.org", "@type": "Article", ... }'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
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
                        Publish Post
                    </button>
                </div>
            </form>
        </div>
    );
}
