'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
    ArrowLeft,
    Save,
    Loader2,
    Plus,
    Trash2,
    Image as ImageIcon,
    Type,
    Clock,
    Layout,
    Smartphone,
    Star,
    Zap,
    AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function EditWebStoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState<any>({
        title: '',
        category: 'SAP Success Stories',
        author: 'ERPVITS',
        role: 'SAP Expert',
        image: '',
        type: 'standard',
        slides: []
    });

    useEffect(() => {
        fetchStory();
    }, [id]);

    async function fetchStory() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('web_stories')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            if (data) {
                setFormData(data);
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSlideChange = (index: number, field: string, value: any) => {
        const updatedSlides = [...formData.slides];
        updatedSlides[index] = { ...updatedSlides[index], [field]: value };
        setFormData((prev: any) => ({ ...prev, slides: updatedSlides }));
    };

    const addSlide = () => {
        setFormData((prev: any) => ({
            ...prev,
            slides: [
                ...prev.slides,
                {
                    id: Date.now(),
                    title: '',
                    content: '',
                    image: '',
                    duration: 5000
                }
            ]
        }));
    };

    const removeSlide = (index: number) => {
        if (formData.slides.length === 1) return;
        const updatedSlides = formData.slides.filter((_: any, i: number) => i !== index);
        setFormData((prev: any) => ({ ...prev, slides: updatedSlides }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const { error } = await supabase
                .from('web_stories')
                .update({
                    title: formData.title,
                    category: formData.category,
                    author: formData.author,
                    role: formData.role,
                    image: formData.image,
                    type: formData.type,
                    slides: formData.slides,
                    updated_at: new Date().toISOString()
                })
                .eq('id', id);

            if (error) throw error;
            router.push('/admin/web-stories');
        } catch (err: any) {
            alert('Error updating web story: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-orange-600 mb-2" size={32} />
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Loading Story Data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="bg-red-50 text-red-600 p-3 rounded-full mb-4">
                    <AlertCircle size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Failed to load story</h3>
                <p className="text-gray-500 text-sm mt-1 max-w-xs">{error}</p>
                <Link href="/admin/web-stories" className="mt-6 text-orange-600 font-medium hover:underline text-sm uppercase font-black tracking-widest">
                    Back to List
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4">
                <Link href="/admin/web-stories" className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
                    <ArrowLeft size={20} />
                </Link>
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Edit Web Story</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Story Settings */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
                    <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
                        <div className="bg-orange-100 p-2 rounded-lg">
                            <Smartphone className="text-orange-600" size={20} />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Story Meta Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Story Title</label>
                            <input
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="How to Master SAP FICO"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all appearance-none font-medium bg-white"
                            >
                                <option value="Success Stories">Success Stories</option>
                                <option value="Certification Tips">Certification Tips</option>
                                <option value="Career Tips">Career Tips</option>
                                <option value="Interview Questions">Interview Questions</option>
                                <option value="SAP Functional">SAP Functional</option>
                                <option value="SAP Technical">SAP Technical</option>
                                <option value="SAP Cloud">SAP Cloud</option>
                                <option value="SAP Jobs">SAP Jobs</option>
                                <option value="SAP Salary">SAP Salary</option>
                                <option value="SAP Trends">SAP Trends</option>
                                <option value="Module Comparison">Module Comparison</option>
                                <option value="Resume Prep">Resume Prep</option>
                                <option value="SAP Hiring">SAP Hiring</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Author Name</label>
                            <input
                                name="author"
                                required
                                value={formData.author}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Author Role</label>
                            <input
                                name="role"
                                required
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Cover Image URL</label>
                            <div className="relative">
                                <input
                                    name="image"
                                    required
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-medium"
                                />
                                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-50">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 block">Story Type</label>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setFormData((prev: any) => ({ ...prev, type: 'standard' }))}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl border-2 transition-all font-bold ${formData.type === 'standard'
                                        ? 'bg-orange-50 border-orange-500 text-orange-700'
                                        : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                                    }`}
                            >
                                <Zap size={18} />
                                Standard Story
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData((prev: any) => ({ ...prev, type: 'featured' }))}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl border-2 transition-all font-bold ${formData.type === 'featured'
                                        ? 'bg-amber-50 border-amber-500 text-amber-700 shadow-sm'
                                        : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                                    }`}
                            >
                                <Star size={18} className={formData.type === 'featured' ? 'fill-amber-700' : ''} />
                                Featured Story
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slides Section */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                <Layout size={20} />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">Story Slides ({formData.slides?.length || 0})</h3>
                        </div>
                        <button
                            type="button"
                            onClick={addSlide}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            <Plus size={18} />
                            Add Slide
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {formData.slides?.map((slide: any, index: number) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
                                <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 flex justify-between items-center">
                                    <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Slide #{index + 1}</span>
                                    {formData.slides.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeSlide(index)}
                                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                            <Type size={10} /> Slide Title
                                        </label>
                                        <input
                                            value={slide.title}
                                            onChange={(e) => handleSlideChange(index, 'title', e.target.value)}
                                            placeholder="Slide Headline"
                                            required
                                            className="w-full px-0 py-2 border-b border-gray-100 focus:border-blue-500 focus:outline-none transition-colors font-bold text-gray-800"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Slide Content</label>
                                        <textarea
                                            value={slide.content}
                                            onChange={(e) => handleSlideChange(index, 'content', e.target.value)}
                                            placeholder="Tell your story..."
                                            rows={2}
                                            required
                                            className="w-full px-0 py-2 border-b border-gray-100 focus:border-blue-500 focus:outline-none transition-colors text-sm text-gray-600 resize-none font-medium"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                <ImageIcon size={10} /> Image URL
                                            </label>
                                            <input
                                                value={slide.image}
                                                onChange={(e) => handleSlideChange(index, 'image', e.target.value)}
                                                placeholder="https://..."
                                                required
                                                className="w-full px-0 py-2 border-b border-gray-100 focus:border-blue-500 focus:outline-none transition-colors text-xs text-blue-600 font-medium"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                <Clock size={10} /> Duration (ms)
                                            </label>
                                            <input
                                                type="number"
                                                value={slide.duration}
                                                onChange={(e) => handleSlideChange(index, 'duration', parseInt(e.target.value))}
                                                className="w-full px-0 py-2 border-b border-gray-100 focus:border-blue-500 focus:outline-none transition-colors text-sm font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Preview Small Image */}
                                    {slide.image && (
                                        <div className="mt-4 rounded-xl overflow-hidden h-32 relative group">
                                            <img src={slide.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white font-black text-[10px] uppercase tracking-widest">Slide Preview</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-between items-center bg-gray-900 p-6 rounded-3xl shadow-2xl">
                    <p className="text-gray-400 text-sm font-medium">Be sure to check all slides before saving changes.</p>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-white font-bold transition-all border border-white/10"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex items-center gap-2 px-10 py-3 bg-orange-600 text-white rounded-xl font-black hover:bg-orange-700 transition-all shadow-[0_15px_30px_rgba(249,_115,_22,_0.3)] disabled:opacity-50 uppercase tracking-wider"
                        >
                            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
