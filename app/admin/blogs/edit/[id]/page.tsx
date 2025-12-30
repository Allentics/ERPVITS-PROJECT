'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';

// Helper for Lucide imports if used via string (but we import directly)
import { Edit, Trash2, Calendar, FileText, ArrowLeft as ArrowIcon, Save as SaveIcon, Loader2 as LoaderIcon } from 'lucide-react';

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState<any>(null);

    useEffect(() => {
        fetchBlog();
    }, [id]);

    async function fetchBlog() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            setFormData(data);
        } catch (err: any) {
            alert('Error fetching blog post: ' + err.message);
            router.push('/admin/blogs');
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const { error } = await supabase
                .from('blog_posts')
                .update(formData)
                .eq('id', id);

            if (error) throw error;
            router.push('/admin/blogs');
        } catch (err: any) {
            alert('Error updating blog post: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <LoaderIcon className="animate-spin text-blue-600 mb-2" size={32} />
                <p className="text-gray-500 text-sm">Loading post data...</p>
            </div>
        );
    }

    if (!formData) return null;

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/blogs" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowIcon size={20} />
                </Link>
                <h2 className="text-2xl font-bold text-gray-900 truncate">Edit Post: {formData.title}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Post ID (Slug)</label>
                            <input
                                name="id"
                                required
                                disabled
                                value={formData.id}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <input
                                name="category"
                                required
                                value={formData.category || ''}
                                onChange={handleChange}
                                placeholder="SAP Certification"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Title</label>
                        <input
                            name="title"
                            required
                            value={formData.title || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Description (Short Excerpt)</label>
                        <textarea
                            name="description"
                            required
                            rows={2}
                            value={formData.description || ''}
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
                                value={formData.date || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Author</label>
                            <input
                                name="author"
                                required
                                value={formData.author || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Featured Image URL</label>
                            <input
                                name="image"
                                value={formData.image || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Post Content (HTML)</label>
                        <textarea
                            name="content"
                            required
                            rows={15}
                            value={formData.content || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none font-mono text-sm shadow-inner bg-gray-50"
                        />
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
                        className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50"
                    >
                        {saving ? <LoaderIcon className="animate-spin" size={20} /> : <SaveIcon size={20} />}
                        Update Post
                    </button>
                </div>
            </form>
        </div>
    );
}
