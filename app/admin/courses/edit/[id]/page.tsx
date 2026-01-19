'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2, Link as LinkIcon, Plus, Trash2, ClipboardList, Target, BookOpen, Library, Laptop, Star, TrendingUp, Users, Trophy, Link as Link2, NotebookPen, AlarmClock, HelpCircle, MessageSquareQuote, FileText, Calendar, MessageSquare, Briefcase, Layers } from 'lucide-react';
import Link from 'next/link';

// Tab Definitions
const TABS = [
    { id: 'basic', label: 'Basic Info', icon: ClipboardList },
    { id: 'hero', label: 'Hero Section', icon: Target },
    { id: 'overview', label: 'Why Choose Us', icon: BookOpen },
    { id: 'course_overview', label: 'Course Overview (Python)', icon: BookOpen },
    { id: 'why_choose_us', label: 'Success Guarantee & Credibility', icon: Star },
    { id: 'whats_included', label: 'What\'s Included', icon: AlarmClock },
    { id: 'curriculum', label: 'Comprehensive Curriculum', icon: Library },
    { id: 'table_curriculum', label: 'Alternative Curriculum (Table)', icon: Library },
    { id: 'tools', label: 'Tools & Modules Covered', icon: Laptop },
    { id: 'audience', label: 'Who Should Enroll', icon: Users },
    { id: 'prerequisites', label: 'Prerequisites', icon: ClipboardList },
    { id: 'methodology', label: 'Training Methodology', icon: NotebookPen },
    { id: 'hands_on', label: 'Real-World Projects', icon: Laptop },
    { id: 'certification', label: 'Certification', icon: Trophy },
    { id: 'companies', label: 'Hiring Companies', icon: Users },
    { id: 'career', label: 'Career Growth', icon: TrendingUp },
    { id: 'jobs', label: 'Job Roles & Salaries', icon: Briefcase },
    { id: 'roadmap', label: 'Career Roadmap', icon: TrendingUp },
    { id: 'journey', label: 'Post-Training Journey', icon: Target },
    { id: 'batches', label: 'Upcoming Batches', icon: Calendar },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote },
    { id: 'demo', label: 'Demo Booking', icon: MessageSquare },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'integrations', label: 'SAP Integrations', icon: Link2 },
    { id: 'resources', label: 'Resources', icon: FileText },
];

export default function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('basic');
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

            // Ensure sections is an array
            if (!data.sections || !Array.isArray(data.sections)) {
                data.sections = [];
            }

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

    // Helper to find a section index by type
    const findSectionIndex = (type: string) => {
        return formData.sections.findIndex((s: any) => s.type === type);
    };

    // Helper to get section data safely
    const getSection = (type: string, defaultData: any = {}) => {
        const idx = findSectionIndex(type);
        if (idx === -1) return { type, ...defaultData };
        return formData.sections[idx];
    };

    // Helper to update a section
    const updateSection = (type: string, newData: any) => {
        const idx = findSectionIndex(type);
        const newSections = [...formData.sections];

        if (idx === -1) {
            newSections.push({ type, ...newData });
        } else {
            newSections[idx] = { ...newSections[idx], ...newData };
        }

        setFormData((prev: any) => ({ ...prev, sections: newSections }));
    };

    const insertHyperlink = (inputId: string) => {
        const textarea = document.getElementById(inputId) as HTMLTextAreaElement;
        if (!textarea) {
            alert("Markdown link template copied to clipboard! Paste it where needed.");
            navigator.clipboard.writeText("[link text](url)");
            return;
        }

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selection = text.substring(start, end);
        const linkText = selection || 'link text';
        const markdown = `[${linkText}](url)`;
        const newText = text.substring(0, start) + markdown + text.substring(end);

        // Update value using the native setter to ensure React picks it up
        const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
        if (setter) {
            setter.call(textarea, newText);
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }

        // Focus and select 'url' for easy replacement
        const urlStart = start + linkText.length + 3;
        textarea.focus();
        setTimeout(() => {
            textarea.setSelectionRange(urlStart, urlStart + 3);
        }, 10);
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
            // No redirect, just notify success
            alert('Course updated successfully!');
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

    // --- Tab Content Components ---

    const BasicInfoTab = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Module ID</label>
                <input name="id" disabled value={formData.id} className="w-full p-2 border rounded bg-gray-50" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Course Title</label>
                <input name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Type / Category</label>
                <select name="category" value={formData.category || 'Functional'} onChange={handleChange} className="w-full p-2 border rounded">
                    <option value="Functional">Functional</option>
                    <option value="Technical">Technical</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Page Title (SEO)</label>
                <input name="meta_title" value={formData.meta_title || ''} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-700">Meta Description</label>
                <textarea name="meta_description" rows={3} value={formData.meta_description || ''} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Price</label>
                <input name="price" value={formData.price || ''} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Duration</label>
                <input name="duration" value={formData.duration || ''} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-700">Schema Markup (JSON-LD)</label>
                <textarea
                    name="schema"
                    rows={6}
                    value={typeof formData.schema === 'object' ? JSON.stringify(formData.schema, null, 2) : (formData.schema || '')}
                    onChange={(e) => {
                        // Try to parse if it looks like JSON to store as object, otherwise string
                        try {
                            JSON.parse(e.target.value);
                            handleChange(e); // Let it save as string or whatever the backend expects
                        } catch (err) {
                            handleChange(e);
                        }
                    }}
                    className="w-full p-2 border rounded font-mono text-xs bg-slate-50"
                    placeholder='{"@context": "https://schema.org", "@type": "Course", ...}'
                />
                <p className="text-xs text-gray-500">Auto-generated if left blank. Override here to provide custom structured data.</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Theme Color</label>
                    <select
                        value={formData.themeColor || 'default'}
                        onChange={(e) => setFormData((p: any) => ({ ...p, themeColor: e.target.value }))}
                        className="w-full p-2 border rounded bg-white"
                    >
                        <option value="default">Default</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Course Badges (Comma sep)</label>
                    <input
                        value={formData.badges?.join(', ') || ''}
                        onChange={(e) => setFormData((p: any) => ({ ...p, badges: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) }))}
                        placeholder="Rated #1, Best Seller"
                        className="w-full p-2 border rounded"
                    />
                </div>
            </div>
        </div>
    );

    const HeroTab = () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Hero Heading</label>
                <input name="hero_heading" value={formData.hero_heading || ''} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Hero Subheading</label>
                <div className="relative">
                    <textarea
                        id="hero_subheading"
                        name="hero_subheading"
                        rows={4}
                        value={formData.hero_subheading || ''}
                        onChange={handleChange}
                        className="w-full p-2 border rounded pr-10"
                    />
                    <button type="button" onClick={() => insertHyperlink('hero_subheading')} className="absolute top-2 right-2 text-gray-400 hover:text-orange-500" title="Copy Markdown Link">
                        <LinkIcon size={16} />
                    </button>
                </div>
                <p className="text-xs text-gray-500">Supports Markdown. Use **bold** for bold text.</p>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Hero Image URL</label>
                <input name="hero_image" value={formData.hero_image || ''} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Hero Layout</label>
                    <select
                        value={formData.heroLayout || 'default'}
                        onChange={(e) => setFormData((p: any) => ({ ...p, heroLayout: e.target.value as any }))}
                        className="w-full p-2 border rounded bg-white"
                    >
                        <option value="default">Default (Left Aligned)</option>
                        <option value="centered">Centered</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Hero Stats (JSON)</label>
                    <textarea
                        value={JSON.stringify(formData.heroStats || [], null, 2)}
                        onChange={(e) => {
                            try { setFormData((p: any) => ({ ...p, heroStats: JSON.parse(e.target.value) })) } catch { }
                        }}
                        className="w-full p-2 border rounded font-mono text-xs h-24"
                        placeholder='[{"icon": "award", "label": "Certified"}, ...]'
                    />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700">Button Labels (JSON)</label>
                    <textarea
                        value={JSON.stringify(formData.buttonLabels || { primary: "Book Free Demo", secondary: "View Curriculum" }, null, 2)}
                        onChange={(e) => {
                            try { setFormData((p: any) => ({ ...p, buttonLabels: JSON.parse(e.target.value) })) } catch { }
                        }}
                        className="w-full p-2 border rounded font-mono text-xs h-24"
                    />
                </div>
            </div>
        </div>
    );

    const CourseOverviewTab = () => {
        const section = getSection('detailed_features', { items: [] });
        const items = section.items || [];

        const updateOverview = (newItems: any[]) => updateSection('detailed_features', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Section Title</label>
                    <input
                        value={section.title || ''}
                        onChange={(e) => updateSection('detailed_features', { ...section, title: e.target.value })}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Section Subtitle</label>
                    <div className="relative">
                        <textarea
                            id="overview_subtitle"
                            value={section.subtitle || ''}
                            onChange={(e) => updateSection('detailed_features', { ...section, subtitle: e.target.value })}
                            className="w-full p-2 border rounded pr-10"
                            rows={2}
                        />
                        <button type="button" onClick={() => insertHyperlink('overview_subtitle')} className="absolute top-2 right-2 text-gray-400 hover:text-orange-500" title="Copy Markdown Link">
                            <LinkIcon size={16} />
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 border-b pb-2 flex justify-between items-center">
                        Why Choose Us
                        <button type="button" onClick={() => updateOverview([...items, { title: 'New Feature', description: '' }])} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded hover:bg-orange-100 flex items-center gap-1">
                            <Plus size={14} /> Add Feature
                        </button>
                    </h4>
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100 relative group">
                            <button
                                type="button"
                                onClick={() => updateOverview(items.filter((_: any, i: number) => i !== idx))}
                                className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                            <div className="grid gap-3">
                                <input
                                    value={item.title || ''}
                                    onChange={(e) => {
                                        const newItems = [...items];
                                        newItems[idx].title = e.target.value;
                                        updateOverview(newItems);
                                    }}
                                    className="w-full p-2 border rounded text-sm font-bold"
                                    placeholder="Feature Title"
                                />
                                <div className="relative">
                                    <textarea
                                        id={`feature_desc_${idx}`}
                                        value={item.description || ''}
                                        onChange={(e) => {
                                            const newItems = [...items];
                                            newItems[idx].description = e.target.value;
                                            updateOverview(newItems);
                                        }}
                                        className="w-full p-2 border rounded text-sm pr-8"
                                        placeholder="Feature Description"
                                        rows={2}
                                    />
                                    <button type="button" onClick={() => insertHyperlink(`feature_desc_${idx}`)} className="absolute top-2 right-2 text-gray-400 hover:text-orange-500" title="Copy Markdown Link">
                                        <LinkIcon size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const CurriculumTab = () => {
        const section = getSection('detailed_curriculum', { modules: [] });
        const modules = section.modules || [];

        const updateModules = (newModules: any[]) => updateSection('detailed_curriculum', { ...section, modules: newModules });

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Comprehensive Curriculum ({modules.length})</h4>
                    <button type="button" onClick={() => updateModules([...modules, { title: 'New Module', duration: '5 hours', learning_points: [], hands_on: [] }])} className="text-sm bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <Plus size={16} /> Add Module
                    </button>
                </div>

                <div className="space-y-4">
                    {modules.map((module: any, idx: number) => (
                        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-start">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mr-8">
                                    <input
                                        value={module.title || ''}
                                        onChange={(e) => {
                                            const newMods = [...modules];
                                            newMods[idx].title = e.target.value;
                                            updateModules(newMods);
                                        }}
                                        className="p-2 border rounded font-bold"
                                        placeholder="Module Title"
                                    />
                                    <input
                                        value={module.duration || ''}
                                        onChange={(e) => {
                                            const newMods = [...modules];
                                            newMods[idx].duration = e.target.value;
                                            updateModules(newMods);
                                        }}
                                        className="p-2 border rounded w-32"
                                        placeholder="Duration"
                                    />
                                </div>
                                <button type="button" onClick={() => updateModules(modules.filter((_: any, i: number) => i !== idx))} className="text-red-400 hover:text-red-600">
                                    <Trash2 size={18} />
                                </button>
                            </div>

                            <div className="p-4 grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Learning Points (One per line)</label>
                                    <textarea
                                        value={Array.isArray(module.learning_points) ? module.learning_points.join('\n') : (module.learning_points || '')}
                                        onChange={(e) => {
                                            const newMods = [...modules];
                                            newMods[idx].learning_points = e.target.value.split('\n');
                                            updateModules(newMods);
                                        }}
                                        className="w-full p-2 border rounded text-sm h-32 font-mono"
                                        placeholder="- Point 1\n- Point 2"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Hands-On Activities (One per line)</label>
                                    <textarea
                                        value={Array.isArray(module.hands_on) ? module.hands_on.join('\n') : (module.hands_on || '')}
                                        onChange={(e) => {
                                            const newMods = [...modules];
                                            newMods[idx].hands_on = e.target.value.split('\n');
                                            updateModules(newMods);
                                        }}
                                        className="w-full p-2 border rounded text-sm h-32 font-mono"
                                        placeholder="- Activity 1\n- Activity 2"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const ResourcesTab = () => {
        const section = getSection('detailed_curriculum', {});

        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Syllabus PDF URL</label>
                    <input
                        value={section.syllabusUrl || ''}
                        onChange={(e) => updateSection('detailed_curriculum', { ...section, syllabusUrl: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="/syllabus/..."
                    />
                    <p className="text-xs text-gray-500">Path to the PDF file for curriculum download.</p>
                </div>
            </div>
        )
    }

    const WhyChooseUsTab = () => {
        const section = getSection('content_with_image', { items: [] });

        const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let val = e.target.value;
            // Auto-convert standard YouTube watch URLs to embed URLs to prevent white/empty box issues
            if (val.includes('youtube.com/watch?v=')) {
                val = val.replace('youtube.com/watch?v=', 'youtube.com/embed/');
                if (val.includes('&')) val = val.split('&')[0];
            } else if (val.includes('youtu.be/')) {
                val = val.replace('youtu.be/', 'youtube.com/embed/');
                if (val.includes('?')) val = val.split('?')[0];
            }
            updateSection('content_with_image', { ...section, videoSrc: val });
        };

        return (
            <div className="space-y-6">
                <h4 className="font-bold text-gray-900 border-b pb-2">Success Guarantee & Credibility</h4>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Title</label>
                    <input value={section.title || ''} onChange={(e) => updateSection('content_with_image', { ...section, title: e.target.value })} className="w-full p-2 border rounded" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Description</label>
                    <div className="relative">
                        <textarea
                            id="why_choose_desc"
                            value={section.description || ''}
                            onChange={(e) => updateSection('content_with_image', { ...section, description: e.target.value })}
                            className="w-full p-2 border rounded pr-10"
                            rows={3}
                        />
                        <button type="button" onClick={() => insertHyperlink('why_choose_desc')} className="absolute top-2 right-2 text-gray-400 hover:text-orange-500" title="Copy Markdown Link">
                            <LinkIcon size={16} />
                        </button>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Video Embed URL</label>
                    <input
                        value={section.videoSrc || ''}
                        onChange={handleVideoChange}
                        className="w-full p-2 border rounded"
                        placeholder="https://www.youtube.com/embed/..."
                    />
                    <p className="text-xs text-gray-500">Paste a YouTube link here. We'll automatically convert standard links to embed format.</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">List Items (One per line)</label>
                    <textarea
                        value={Array.isArray(section.items) ? section.items.join('\n') : (section.items || '')}
                        onChange={(e) => updateSection('content_with_image', { ...section, items: e.target.value.split('\n') })}
                        className="w-full p-2 border rounded font-mono h-32"
                    />
                </div>
            </div>
        );
    };

    const TargetAudienceTab = () => {
        const section = getSection('detailed_target_audience', { items: [] });
        const items = section.items || [];

        const defaultAudience = [
            {
                icon: "Laptop",
                title: "IT & ERP Professionals",
                description: ["SAP consultants", "System administrators", "Technical architects"],
                bg: "bg-blue-50", color: "text-blue-600"
            }
        ];

        const displayItems = items.length > 0 ? items : defaultAudience;

        const updateItems = (newItems: any[]) => {
            updateSection('detailed_target_audience', { ...section, items: newItems });
        };

        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Section Title</label>
                    <input
                        value={section.title || ''}
                        onChange={(e) => updateSection('detailed_target_audience', { ...section, title: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="Who Can Learn This Course?"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Subtitle</label>
                    <input
                        value={section.subtitle || ''}
                        onChange={(e) => updateSection('detailed_target_audience', { ...section, subtitle: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="Our training is designed..."
                    />
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900">Audience Cards ({displayItems.length})</h4>
                        <button type="button" onClick={() => updateItems([...displayItems, { title: 'New Audience', description: [], icon: 'Users' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                            <Plus size={16} /> Add Card
                        </button>
                    </div>

                    {displayItems.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative group">
                            <button
                                type="button"
                                onClick={() => updateItems(displayItems.filter((_: any, i: number) => i !== idx))}
                                className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500">Title</label>
                                    <input
                                        value={item.title || ''}
                                        onChange={(e) => {
                                            const newItems = [...displayItems];
                                            newItems[idx].title = e.target.value;
                                            updateItems(newItems);
                                        }}
                                        className="w-full p-2 border rounded font-bold"
                                        placeholder="Target Audience Title"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500">Icon Key (Lucide)</label>
                                    <select
                                        value={item.icon || 'Laptop'}
                                        onChange={(e) => {
                                            const newItems = [...displayItems];
                                            newItems[idx].icon = e.target.value;
                                            updateItems(newItems);
                                        }}
                                        className="w-full p-2 border rounded"
                                    >
                                        <option value="Laptop">Laptop</option>
                                        <option value="ShoppingCart">ShoppingCart (Procurement)</option>
                                        <option value="BarChart3">BarChart3 (Analytics)</option>
                                        <option value="GraduationCap">GraduationCap (Students)</option>
                                        <option value="Building2">Building2 (Corporate)</option>
                                        <option value="HelpCircle">HelpCircle</option>
                                        <option value="Wallet">Wallet (Finance)</option>
                                        <option value="Users">Users (HR/General)</option>
                                        <option value="Banknote">Banknote</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-gray-500">Points (One per line)</label>
                                    <textarea
                                        value={Array.isArray(item.description) ? item.description.join('\n') : (item.description || '')}
                                        onChange={(e) => {
                                            const newItems = [...displayItems];
                                            newItems[idx].description = e.target.value.split('\n');
                                            updateItems(newItems);
                                        }}
                                        className="w-full p-2 border rounded font-mono text-sm h-24"
                                        placeholder="- Point 1..."
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const PrerequisitesTab = () => {
        // Retrieve the simplified "items" object which contains "minimum" and "nicetohave" arrays
        // If it's undefined, initialize with empty structure
        const section = getSection('detailed_prerequisites', { items: { minimum: [], nicetohave: [] } });

        // Ensure items is an object, not an array or string
        const data = (section.items && typeof section.items === 'object' && !Array.isArray(section.items))
            ? section.items
            : { minimum: [], nicetohave: [] };

        const updateData = (newData: any) => {
            updateSection('detailed_prerequisites', { ...section, items: newData });
        };

        return (
            <div className="space-y-6">
                <h4 className="font-bold text-gray-900 border-b pb-2">Course Prerequisites</h4>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <h5 className="font-bold text-orange-800 mb-2 flex items-center gap-2"><Target size={18} /> Minimum Requirements</h5>
                    <textarea
                        value={data.minimum?.join('\n') || ''}
                        onChange={(e) => updateData({ ...data, minimum: e.target.value.split('\n') })}
                        className="w-full p-3 border rounded-lg h-40 font-mono text-sm bg-white"
                        placeholder="One requirement per line..."
                    />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h5 className="font-bold text-blue-800 mb-2 flex items-center gap-2"><Star size={18} /> Nice to Have (Optional)</h5>
                    <textarea
                        value={data.nicetohave?.join('\n') || ''}
                        onChange={(e) => updateData({ ...data, nicetohave: e.target.value.split('\n') })}
                        className="w-full p-3 border rounded-lg h-40 font-mono text-sm bg-white"
                        placeholder="One item per line..."
                    />
                </div>
            </div>
        );
    };

    const WhatsIncludedTab = () => {
        const section = getSection('whats_included', { features: [], stats: [] });
        const features = section.features || [];
        const stats = section.stats || [];

        const updateFeatures = (newFeatures: any[]) => updateSection('whats_included', { ...section, features: newFeatures });
        const updateStats = (newStats: any[]) => updateSection('whats_included', { ...section, stats: newStats });

        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Section Title</label>
                    <input
                        value={section.title || ''}
                        onChange={(e) => updateSection('whats_included', { ...section, title: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="What's Included..."
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Badge</label>
                    <input
                        value={section.badge || ''}
                        onChange={(e) => updateSection('whats_included', { ...section, badge: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="Complete Learning Package"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Description</label>
                    <textarea
                        value={section.description || ''}
                        onChange={(e) => updateSection('whats_included', { ...section, description: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="Subtitle description..."
                    />
                </div>

                <div className="space-y-4 pt-4 border-t">
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900">Features List</h4>
                        <button type="button" onClick={() => updateFeatures([...features, { title: 'New Feature', description: '' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                            <Plus size={16} /> Add Feature
                        </button>
                    </div>
                    <div className="grid gap-4">
                        {features.map((item: any, idx: number) => (
                            <div key={idx} className="bg-white p-4 border rounded-lg shadow-sm group relative">
                                <button type="button" onClick={() => updateFeatures(features.filter((_: any, i: number) => i !== idx))} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                                <div className="space-y-2">
                                    <input
                                        value={item.title || ''}
                                        onChange={(e) => {
                                            const newF = [...features];
                                            newF[idx].title = e.target.value;
                                            updateFeatures(newF);
                                        }}
                                        className="w-full p-2 border rounded font-bold text-sm"
                                        placeholder="Feature Title"
                                    />
                                    <textarea
                                        value={item.description || ''}
                                        onChange={(e) => {
                                            const newF = [...features];
                                            newF[idx].description = e.target.value;
                                            updateFeatures(newF);
                                        }}
                                        className="w-full p-2 border rounded text-xs"
                                        placeholder="Description"
                                        rows={2}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                    <h4 className="font-bold text-gray-900">Stats Cards</h4>
                    <textarea
                        value={JSON.stringify(stats, null, 2)}
                        onChange={(e) => {
                            try { updateStats(JSON.parse(e.target.value)) } catch { }
                        }}
                        className="w-full p-3 border rounded font-mono text-xs h-32 bg-gray-50"
                        placeholder='[{"value": "50+", "label": "Hours"}, ...]'
                    />
                    <p className="text-xs text-gray-500">Enter JSON for stats: val, label, color</p>
                </div>
            </div>
        )
    }

    const FAQTab = () => {
        // Handle FAQs which might be in sections OR top level
        let items = formData.faqs || [];
        const sectionMode = items.length === 0;
        if (sectionMode) {
            const section = getSection('detailed_faq', { items: [] });
            items = section.items || [];
        }

        const updateFAQs = (newItems: any[]) => {
            if (sectionMode) {
                updateSection('detailed_faq', { ...getSection('detailed_faq'), items: newItems });
            } else {
                setFormData((prev: any) => ({ ...prev, faqs: newItems }));
            }
        };

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold">Frequently Asked Questions</h4>
                    <button type="button" onClick={() => updateFAQs([...items, { question: 'New Question', answer: '' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                        <Plus size={16} /> Add FAQ
                    </button>
                </div>

                {items.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-4 border rounded-lg shadow-sm space-y-3 relative group">
                        <button
                            type="button"
                            onClick={() => updateFAQs(items.filter((_: any, i: number) => i !== idx))}
                            className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={16} />
                        </button>
                        <input
                            value={item.question || ''}
                            onChange={(e) => {
                                const newItems = [...items];
                                newItems[idx].question = e.target.value;
                                updateFAQs(newItems);
                            }}
                            className="w-full p-2 border rounded font-semibold"
                            placeholder="Question"
                        />
                        <textarea
                            value={item.answer || ''}
                            onChange={(e) => {
                                const newItems = [...items];
                                newItems[idx].answer = e.target.value;
                                updateFAQs(newItems);
                            }}
                            className="w-full p-2 border rounded text-sm"
                            placeholder="Answer"
                            rows={3}
                        />
                    </div>
                ))}
            </div>
        );
    };

    const CertificationTab = () => {
        const section = getSection('detailed_certification', { items: [] });

        // Default certs from DetailedCertification.tsx (hardcoded fallback)
        const defaultCerts = [
            {
                "title": "SAP Certified Application Associate - SAP Ariba Procurement",
                "code": "(C_ARP2P_2408)",
                "focus": "Procurement processes, master data, approval workflows, integration",
                "who": "End-to-end procurement expertise using SAP Ariba",
                "relevance": "Entry to mid-level consultant positions"
            },
            {
                "title": "SAP Certified Application Associate - SAP Ariba Sourcing",
                "code": "(C_ARSOR_2408)",
                "focus": "Strategic sourcing, supplier evaluation, event management, negotiation",
                "who": "Advanced sourcing strategy and supplier management skills",
                "relevance": "Sourcing consultant and strategic procurement roles"
            },
            {
                "title": "SAP Certified Application Associate - SAP Ariba Contracts",
                "code": "(C_ARCON_2408)",
                "focus": "Contract lifecycle management, compliance, risk management",
                "who": "Contract management expertise and compliance knowledge",
                "relevance": "Contract management and legal compliance roles"
            }
        ];

        const defaultSupportFeatures = [
            { "title": "Targeted Exam Preparation", "subtitle": "Study guides aligned to official exam blueprints" },
            { "title": "Practice Exams", "subtitle": "Timed practice tests mirroring real exam conditions" },
            { "title": "Exam Strategies", "subtitle": "Time management tips and common pitfalls to avoid" },
            { "title": "Registration Guidance", "subtitle": "Assistance with exam registration and scheduling" },
            { "title": "Retake Support", "subtitle": "Additional support if you don't pass on first attempt" }
        ];

        const defaultBenefits = [
            { "title": "Global Recognition", "desc": "SAP certifications recognized worldwide by employers and clients" },
            { "title": "Career Acceleration", "desc": "15-20% higher salaries for certified professionals" },
            { "title": "Competitive Edge", "desc": "Stand out in job applications and consulting proposals" },
            { "title": "Professional Credibility", "desc": "Validation of expertise with clients and employers" }
        ];

        // Use existing items or defaults if empty
        const itemsToDisplay = (section.items && section.items.length > 0) ? section.items : defaultCerts;
        const supportFeaturesDisplay = (section.supportFeatures && section.supportFeatures.length > 0) ? section.supportFeatures : defaultSupportFeatures;
        const benefitsDisplay = (section.benefits && section.benefits.length > 0) ? section.benefits : defaultBenefits;

        return (
            <div className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800 mb-4">
                    Edit Certification Section details below.
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Section Title</label>
                    <input
                        value={section.title || ''}
                        onChange={(e) => updateSection('detailed_certification', { ...section, title: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="SAP Certification – Your Global Career Credential"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Certification Image URL</label>
                    <input
                        value={section.imageSrc || ''}
                        onChange={(e) => updateSection('detailed_certification', { ...section, imageSrc: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="/images/..."
                    />
                    <p className="text-xs text-gray-500">URL to the side image (infographic)</p>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Certifications List (JSON)</label>
                    <textarea
                        rows={10}
                        value={JSON.stringify(itemsToDisplay, null, 2)}
                        onChange={(e) => {
                            try {
                                updateSection('detailed_certification', { ...section, items: JSON.parse(e.target.value) });
                            } catch (err) { }
                        }}
                        className="w-full p-4 border rounded font-mono text-xs bg-slate-50"
                    />
                    <p className="text-xs text-gray-500">List of certification cards. Defaults shown if empty.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Certification Support Features (JSON)</label>
                        <textarea
                            rows={8}
                            value={JSON.stringify(supportFeaturesDisplay, null, 2)}
                            onChange={(e) => {
                                try {
                                    updateSection('detailed_certification', { ...section, supportFeatures: JSON.parse(e.target.value) });
                                } catch (err) { }
                            }}
                            className="w-full p-4 border rounded font-mono text-xs bg-slate-50"
                        />
                        <p className="text-xs text-gray-500">Features included in support (e.g., Practice Exams).</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Benefits / Why It Matters (JSON)</label>
                        <textarea
                            rows={8}
                            value={JSON.stringify(benefitsDisplay, null, 2)}
                            onChange={(e) => {
                                try {
                                    updateSection('detailed_certification', { ...section, benefits: JSON.parse(e.target.value) });
                                } catch (err) { }
                            }}
                            className="w-full p-4 border rounded font-mono text-xs bg-slate-50"
                        />
                        <p className="text-xs text-gray-500">Benefits list (e.g., Global Recognition).</p>
                    </div>
                </div>

            </div>
        );
    };

    const HiringCompaniesTab = () => {
        const section = getSection('detailed_companies', { customData: undefined });

        // Initialize customData if it doesn't exist, using defaults structure
        const customData = section.customData || {
            tier1: { title: "Tier 1 - Global Consulting Firms", companies: [] },
            tier2: { title: "Tier 2 - Enterprise SAP Partners", companies: [] },
            tier3: { title: "Tier 3 - Fortune 500 Enterprises", companies: [] },
            tier4: { title: "Tier 4 - Mid-Market Leaders", companies: [] },
            hiringTrends: { title: "Hiring Trends", stats: [] }
        };

        const updateCompanySection = (key: string, field: string, value: any) => {
            const newCustomData = { ...customData };
            if (!newCustomData[key]) newCustomData[key] = {};
            newCustomData[key][field] = value;
            updateSection('detailed_companies', { ...section, customData: newCustomData });
        };

        const renderTierEditor = (tierKey: string, label: string) => (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-2">{label}</h5>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500">Tier Title</label>
                    <input
                        value={customData[tierKey]?.title || ''}
                        onChange={(e) => updateCompanySection(tierKey, 'title', e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="space-y-2 mt-2">
                    <label className="text-xs font-bold text-gray-500">Companies (Comma separated)</label>
                    <textarea
                        value={customData[tierKey]?.companies?.join(', ') || ''}
                        onChange={(e) => updateCompanySection(tierKey, 'companies', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))}
                        className="w-full p-2 border rounded h-20 bg-white"
                        placeholder="Company A, Company B..."
                    />
                </div>
            </div>
        );

        return (
            <div className="space-y-6">
                <h4 className="font-bold text-gray-900 border-b pb-2">Hiring Companies</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {renderTierEditor('tier1', 'Tier 1 Companies')}
                    {renderTierEditor('tier2', 'Tier 2 Companies')}
                    {renderTierEditor('tier3', 'Tier 3 Companies')}
                    {renderTierEditor('tier4', 'Tier 4 Companies')}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                    <h5 className="font-bold text-blue-800 mb-2">Hiring Trends Stats (JSON)</h5>
                    <textarea
                        value={JSON.stringify(customData.hiringTrends || {}, null, 2)}
                        onChange={(e) => {
                            try {
                                updateSection('detailed_companies', { ...section, customData: { ...customData, hiringTrends: JSON.parse(e.target.value) } });
                            } catch { }
                        }}
                        className="w-full p-3 border rounded font-mono text-sm h-32 bg-white"
                        placeholder='{"title": "Trends", "stats": [{"value": "200%", "label": "Growth"}]}'
                    />
                </div>
            </div>
        );
    };

    const MethodologyTab = () => {
        const section = getSection('detailed_learning_outcomes', { items: [] });
        const isTabbed = section.items && typeof section.items === 'object' && !Array.isArray(section.items) && section.items.tabs;

        const handleConvertToTabs = () => {
            const currentItems = Array.isArray(section.items) ? section.items : [];
            updateSection('detailed_learning_outcomes', {
                ...section,
                items: {
                    tabs: [
                        { name: "Functional Mastery", items: currentItems },
                        { name: "Technical Skills", items: [] }
                    ]
                }
            });
        };

        const updateTabItems = (tabIdx: number, newItems: any[]) => {
            const newTabs = [...section.items.tabs];
            newTabs[tabIdx].items = newItems;
            updateSection('detailed_learning_outcomes', {
                ...section,
                items: { ...section.items, tabs: newTabs }
            });
        };

        const updateTabName = (tabIdx: number, name: string) => {
            const newTabs = [...section.items.tabs];
            newTabs[tabIdx].name = name;
            updateSection('detailed_learning_outcomes', {
                ...section,
                items: { ...section.items, tabs: newTabs }
            });
        };

        const addTab = () => {
            updateSection('detailed_learning_outcomes', {
                ...section,
                items: {
                    ...section.items,
                    tabs: [...(section.items.tabs || []), { name: "New Category", items: [] }]
                }
            });
        };

        const removeTab = (idx: number) => {
            const newTabs = section.items.tabs.filter((_: any, i: number) => i !== idx);
            updateSection('detailed_learning_outcomes', {
                ...section,
                items: { ...section.items, tabs: newTabs }
            });
        };

        const renderSkillList = (list: any[], onUpdate: (newList: any[]) => void) => (
            <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100 mb-2">
                    <h5 className="text-sm font-bold text-gray-700">Outcomes ({list.length})</h5>
                    <button type="button" onClick={() => onUpdate([...list, { title: 'New Outcome', points: [] }])} className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg text-xs font-bold hover:bg-zinc-800 transition-all shadow-sm">
                        <Plus size={14} /> Add Skill
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map((item: any, idx: number) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100 relative group">
                            <button
                                type="button"
                                onClick={() => onUpdate(list.filter((_: any, i: number) => i !== idx))}
                                className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Skill Title</label>
                                <input
                                    value={item.title || ''}
                                    onChange={(e) => {
                                        const newList = [...list];
                                        newList[idx].title = e.target.value;
                                        onUpdate(newList);
                                    }}
                                    className="w-full p-2 border rounded text-sm font-bold"
                                    placeholder="e.g. Procurement Lifecycle"
                                />
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Points (One per line)</label>
                                <textarea
                                    value={Array.isArray(item.points) ? item.points.join('\n') : (item.points || '')}
                                    onChange={(e) => {
                                        const newList = [...list];
                                        newList[idx].points = e.target.value.split('\n');
                                        onUpdate(newList);
                                    }}
                                    className="w-full p-2 border rounded text-sm h-24 font-mono"
                                    placeholder="Enter points..."
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );

        return (
            <div className="space-y-6">
                <div className="space-y-2 border-b pb-4">
                    <label className="text-sm font-semibold text-gray-700">Section Title</label>
                    <input
                        value={section.title || ''}
                        onChange={(e) => updateSection('detailed_learning_outcomes', { ...section, title: e.target.value })}
                        className="w-full p-2 border rounded"
                        placeholder="What You'll Master..."
                    />
                    <label className="text-sm font-semibold text-gray-700">Subtitle</label>
                    <textarea
                        value={section.subtitle || ''}
                        onChange={(e) => updateSection('detailed_learning_outcomes', { ...section, subtitle: e.target.value })}
                        className="w-full p-2 border rounded"
                        rows={2}
                    />
                </div>

                {!isTabbed ? (
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                            <div>
                                <h4 className="font-bold text-blue-900">Standard Outcomes List</h4>
                                <p className="text-xs text-blue-700">Simple list of masteries</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={handleConvertToTabs}
                                    className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
                                >
                                    <Layers size={14} /> Setup Functional & Technical Tabs
                                </button>
                            </div>
                        </div>
                        {renderSkillList(Array.isArray(section.items) ? section.items : [], (newList) => updateSection('detailed_learning_outcomes', { ...section, items: newList }))}
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <div>
                                <h4 className="font-bold text-blue-900">Advanced Tabbed Mode</h4>
                                <p className="text-xs text-blue-700">Ideal for Functional & Technical separation</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={addTab}
                                    className="bg-white text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm flex items-center gap-2 hover:bg-blue-50"
                                >
                                    <Plus size={14} /> Add Category
                                </button>
                                <button
                                    type="button"
                                    onClick={() => updateSection('detailed_learning_outcomes', { ...section, items: [] })}
                                    className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-100"
                                >
                                    Reset to Simple
                                </button>
                            </div>
                        </div>

                        {section.items.tabs.map((tab: any, tIdx: number) => (
                            <div key={tIdx} className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm relative group/tab">
                                <button
                                    type="button"
                                    onClick={() => removeTab(tIdx)}
                                    className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover/tab:opacity-100 transition-opacity"
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div className="max-w-md">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Category Name</label>
                                    <input
                                        value={tab.name || ''}
                                        onChange={(e) => updateTabName(tIdx, e.target.value)}
                                        className="w-full text-xl font-bold border-none focus:ring-0 p-0 text-slate-800"
                                        placeholder="e.g. Functional Mastery"
                                    />
                                </div>
                                {renderSkillList(tab.items || [], (newList) => updateTabItems(tIdx, newList))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const RoadmapTab = () => {
        const section = getSection('detailed_career_roadmap', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('detailed_career_roadmap', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Roadmap Steps ({items.length})</h4>
                    <button type="button" onClick={() => updateItems([...items, { stage: 'Phase X', title: 'Title', description: '' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                        <Plus size={16} /> Add Step
                    </button>
                </div>
                <div className="space-y-4">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white p-4 border rounded-lg shadow-sm group relative grid md:grid-cols-3 gap-4">
                            <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                            <div><label className="text-xs font-bold text-gray-500">Stage / Year</label><input value={item.stage || ''} onChange={(e) => { const n = [...items]; n[idx].stage = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" placeholder="e.g. Year 1-2" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Role Title</label><input value={item.title || ''} onChange={(e) => { const n = [...items]; n[idx].title = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div className="md:col-span-3"><label className="text-xs font-bold text-gray-500">Description</label><textarea value={item.description || ''} onChange={(e) => { const n = [...items]; n[idx].description = e.target.value; updateItems(n); }} className="w-full p-2 border rounded h-16" /></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const JourneyTab = () => {
        const section = getSection('detailed_post_training_journey', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('detailed_post_training_journey', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="space-y-2 border-b pb-4">
                    <label className="text-sm font-semibold text-gray-700">Section Title</label>
                    <input value={section.title || ''} onChange={(e) => updateSection('detailed_post_training_journey', { ...section, title: e.target.value })} className="w-full p-2 border rounded" />
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Journey Steps ({items.length})</h4>
                    <button type="button" onClick={() => updateItems([...items, { title: 'Step Name', timeline: '', points: [] }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                        <Plus size={16} /> Add Step
                    </button>
                </div>
                <div className="space-y-4">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white p-4 border rounded-lg shadow-sm group relative space-y-3">
                            <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div><label className="text-xs font-bold text-gray-500">Step Title</label><input value={item.title || ''} onChange={(e) => { const n = [...items]; n[idx].title = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                                <div><label className="text-xs font-bold text-gray-500">Timeline</label><input value={item.timeline || ''} onChange={(e) => { const n = [...items]; n[idx].timeline = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500">Points (One per line)</label>
                                <textarea value={item.points?.join('\n') || ''} onChange={(e) => { const n = [...items]; n[idx].points = e.target.value.split('\n'); updateItems(n); }} className="w-full p-2 border rounded font-mono text-sm h-24" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const CareerGrowthTab = () => {
        const section = getSection('detailed_career_opportunities', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('detailed_career_opportunities', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Career Roles ({items.length})</h4>
                    <button type="button" onClick={() => updateItems([...items, { title: 'New Role', salary: '', responsibilities: '' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                        <Plus size={16} /> Add Role
                    </button>
                </div>
                {items.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-6 border rounded-xl shadow-sm group relative space-y-4">
                        <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div><label className="text-xs font-bold text-gray-500">Role Title</label><input value={item.title || ''} onChange={(e) => { const n = [...items]; n[idx].title = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Salary Range</label><input value={item.salary || ''} onChange={(e) => { const n = [...items]; n[idx].salary = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div className="md:col-span-2"><label className="text-xs font-bold text-gray-500">Responsibilities</label><textarea value={item.responsibilities || ''} onChange={(e) => { const n = [...items]; n[idx].responsibilities = e.target.value; updateItems(n); }} className="w-full p-2 border rounded h-16" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Employers</label><input value={item.employers || ''} onChange={(e) => { const n = [...items]; n[idx].employers = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Career Path</label><input value={item.path || ''} onChange={(e) => { const n = [...items]; n[idx].path = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const TestimonialsTab = () => {
        const section = getSection('detailed_testimonials', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('detailed_testimonials', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Student Testimonials ({items.length})</h4>
                    <button type="button" onClick={() => updateItems([...items, { text: '', author: '', role: '' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                        <Plus size={16} /> Add Review
                    </button>
                </div>
                <div className="grid gap-4">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white p-4 border rounded-lg shadow-sm group relative">
                            <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="text-xs font-bold text-gray-500">Review Text</label>
                                    <textarea value={item.text || ''} onChange={(e) => { const n = [...items]; n[idx].text = e.target.value; updateItems(n); }} className="w-full p-2 border rounded text-sm h-20" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500">Author Name</label>
                                    <input value={item.author || item.name || ''} onChange={(e) => { const n = [...items]; n[idx].author = e.target.value; updateItems(n); }} className="w-full p-2 border rounded text-sm" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500">Role / Job Title</label>
                                    <input value={item.role || ''} onChange={(e) => { const n = [...items]; n[idx].role = e.target.value; updateItems(n); }} className="w-full p-2 border rounded text-sm" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    const BatchesTab = () => {
        const section = getSection('detailed_upcoming_batches', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('detailed_upcoming_batches', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Upcoming Batches ({items.length})</h4>
                    <button type="button" onClick={() => updateItems([...items, { name: 'New Batch', date: '', schedule: '', duration: '10 Weeks' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                        <Plus size={16} /> Add Batch
                    </button>
                </div>
                {items.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-4 border rounded-lg shadow-sm group relative">
                        <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="md:col-span-2"><label className="text-xs font-bold text-gray-500">Batch Name</label><input value={item.name || ''} onChange={(e) => { const n = [...items]; n[idx].name = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Start Date</label><input value={item.date || ''} onChange={(e) => { const n = [...items]; n[idx].date = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Schedule</label><input value={item.schedule || ''} onChange={(e) => { const n = [...items]; n[idx].schedule = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Status</label><select value={item.status || 'Open'} onChange={(e) => { const n = [...items]; n[idx].status = e.target.value; updateItems(n); }} className="w-full p-2 border rounded"><option>Open</option><option>Filling Fast</option><option>Sold Out</option></select></div>
                            <div><label className="text-xs font-bold text-gray-500">Filled %</label><input type="number" value={item.seatsFilled || 0} onChange={(e) => { const n = [...items]; n[idx].seatsFilled = parseInt(e.target.value); updateItems(n); }} className="w-full p-2 border rounded" /></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const RealWorldProjectsTab = () => {
        const section = getSection('real_world_scenarios', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('real_world_scenarios', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Projects / Casestudies ({items.length})</h4>
                    <button type="button" onClick={() => updateItems([...items, { title: 'New Project', scenario: '', role: '', outcome: '' }])} className="text-sm bg-black text-white px-3 py-1.5 rounded flex items-center gap-2">
                        <Plus size={16} /> Add Project
                    </button>
                </div>
                {items.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-6 border rounded-xl shadow-sm group relative space-y-3">
                        <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                        <div><label className="text-xs font-bold text-gray-500">Project Title</label><input value={item.title || ''} onChange={(e) => { const n = [...items]; n[idx].title = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                        <div><label className="text-xs font-bold text-gray-500">Scenario Description</label><textarea value={item.scenario || ''} onChange={(e) => { const n = [...items]; n[idx].scenario = e.target.value; updateItems(n); }} className="w-full p-2 border rounded h-20" /></div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div><label className="text-xs font-bold text-gray-500">Your Role</label><input value={item.role || ''} onChange={(e) => { const n = [...items]; n[idx].role = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                            <div><label className="text-xs font-bold text-gray-500">Outcome</label><input value={item.outcome || ''} onChange={(e) => { const n = [...items]; n[idx].outcome = e.target.value; updateItems(n); }} className="w-full p-2 border rounded" /></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const PythonOverviewTab = () => {
        const section = getSection('course_overview', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('course_overview', { ...section, items: newItems });

        return (
            <div className="space-y-8">
                <div className="flex justify-between items-center bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <div>
                        <h4 className="font-bold text-purple-900 text-lg">Python Overview Blocks</h4>
                        <p className="text-sm text-purple-700">Flexible content blocks with text or lists</p>
                    </div>
                    <button type="button" onClick={() => updateItems([...items, { title: 'New Block', content: '', list: [] }])} className="bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-purple-100 transition-colors">
                        <Plus size={18} /> Add Block
                    </button>
                </div>

                {items.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-6 border border-gray-100 rounded-2xl shadow-sm relative group space-y-4">
                        <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={20} /></button>

                        <div className="max-w-xl">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Block Title</label>
                            <input value={item.title || ''} onChange={(e) => { const n = [...items]; n[idx].title = e.target.value; updateItems(n); }} className="w-full text-xl font-bold bg-transparent border-none focus:ring-0 p-0 text-slate-800" placeholder="Block Title..." />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Text Content</label>
                                <textarea value={item.content || ''} onChange={(e) => { const n = [...items]; n[idx].content = e.target.value; updateItems(n); }} className="w-full p-3 border rounded-xl text-sm h-40 leading-relaxed" placeholder="Detailed content..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">List Points (Optional, one per line)</label>
                                <textarea value={Array.isArray(item.list) ? item.list.join('\n') : (item.list || '')} onChange={(e) => { const n = [...items]; n[idx].list = e.target.value.split('\n'); updateItems(n); }} className="w-full p-3 border rounded-xl font-mono text-sm h-40 leading-relaxed" placeholder="**Bold Title:** Point description..." />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase">Footer Text (Optional)</label>
                            <input value={item.footer || ''} onChange={(e) => { const n = [...items]; n[idx].footer = e.target.value; updateItems(n); }} className="w-full p-2 border rounded-lg text-sm italic" placeholder="Closing sentence..." />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const TableCurriculumTab = () => {
        const section = getSection('table_curriculum', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('table_curriculum', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="bg-slate-900 text-white p-6 rounded-2xl flex justify-between items-center">
                    <div>
                        <h4 className="text-xl font-bold">Curriculum Table</h4>
                        <p className="text-slate-400 text-sm">Session-by-session breakdown</p>
                    </div>
                    <button type="button" onClick={() => updateItems([...items, { session: (items.length + 1).toString(), topic: '', hours: '2', description: '' }])} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
                        <Plus size={18} /> Add Session
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b">
                                <th className="p-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-20">No.</th>
                                <th className="p-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Topic / Session Name</th>
                                <th className="p-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-24">Hours</th>
                                <th className="p-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                                <th className="p-3 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {items.map((item: any, idx: number) => (
                                <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="p-3">
                                        <input value={item.session || ''} onChange={(e) => { const n = [...items]; n[idx].session = e.target.value; updateItems(n); }} className="w-full bg-transparent border-none p-0 font-mono text-sm" />
                                    </td>
                                    <td className="p-3">
                                        <input value={item.topic || ''} onChange={(e) => { const n = [...items]; n[idx].topic = e.target.value; updateItems(n); }} className="w-full bg-transparent border-none p-0 font-bold text-sm text-slate-800" placeholder="Session topic..." />
                                    </td>
                                    <td className="p-3">
                                        <input value={item.hours || ''} onChange={(e) => { const n = [...items]; n[idx].hours = e.target.value; updateItems(n); }} className="w-full bg-transparent border-none p-0 text-sm" />
                                    </td>
                                    <td className="p-3">
                                        <input value={item.description || ''} onChange={(e) => { const n = [...items]; n[idx].description = e.target.value; updateItems(n); }} className="w-full bg-transparent border-none p-0 text-sm text-slate-600" placeholder="Brief description..." />
                                    </td>
                                    <td className="p-3">
                                        <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const JobRolesTab = () => {
        const section = getSection('job_roles_table', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('job_roles_table', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="bg-emerald-600 text-white p-6 rounded-2xl flex justify-between items-center">
                    <div>
                        <h4 className="text-xl font-bold">Jobs & Career Opportunities</h4>
                        <p className="text-emerald-100 text-sm italic">Define roles, required skills, and salary expectations</p>
                    </div>
                    <button type="button" onClick={() => updateItems([...items, { role: 'Job Role', skills: '', companies: '', salary: '' }])} className="bg-white text-emerald-700 px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2">
                        <Plus size={18} /> Add Role
                    </button>
                </div>

                <div className="space-y-4">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group grid md:grid-cols-4 gap-6">
                            <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={18} /></button>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role Name</label>
                                <input value={item.role || ''} onChange={(e) => { const n = [...items]; n[idx].role = e.target.value; updateItems(n); }} className="w-full p-0 bg-transparent border-none font-bold text-lg text-slate-900 focus:ring-0" placeholder="Data Scientist..." />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Skills</label>
                                <textarea value={item.skills || ''} onChange={(e) => { const n = [...items]; n[idx].skills = e.target.value; updateItems(n); }} className="w-full p-2 border rounded-lg text-sm h-20" placeholder="Python, TensorFlow..." />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Top Companies</label>
                                <textarea value={item.companies || ''} onChange={(e) => { const n = [...items]; n[idx].companies = e.target.value; updateItems(n); }} className="w-full p-2 border rounded-lg text-sm h-20" placeholder="Google, Meta..." />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Est. Salary</label>
                                <input value={item.salary || ''} onChange={(e) => { const n = [...items]; n[idx].salary = e.target.value; updateItems(n); }} className="w-full p-2 border rounded-lg text-sm font-bold text-emerald-600" placeholder="₹8L - ₹12L" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const ListCheckerTab = () => {
        const section = getSection('list_checker', { items: [] });
        const items = section.items || [];
        const updateItems = (newItems: any[]) => updateSection('list_checker', { ...section, items: newItems });

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900">List of Tools / Modules</h4>
                        <p className="text-sm text-slate-500">Simple checkbox list of tools covered in the course</p>
                    </div>
                    <button type="button" onClick={() => updateItems([...items, ''])} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                        <Plus size={18} /> Add Item
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg border group">
                            <input
                                value={item}
                                onChange={(e) => { const n = [...items]; n[idx] = e.target.value; updateItems(n); }}
                                className="flex-1 bg-transparent border-none p-0 text-sm font-medium focus:ring-0"
                                placeholder="Tool name..."
                            />
                            <button type="button" onClick={() => updateItems(items.filter((_: any, i: number) => i !== idx))} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // Generic fallback for tabs not heavily customized yet
    const GenericJsonTab = ({ type, title }: { type: string, title?: string }) => {
        const section = getSection(type);
        return (
            <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                    Advanced Editor for section type: <b>{title || type}</b>
                </div>
                <textarea
                    rows={15}
                    value={JSON.stringify(section, null, 2)}
                    onChange={(e) => {
                        try {
                            const parsed = JSON.parse(e.target.value);
                            updateSection(type, parsed);
                        } catch (err) { }
                    }}
                    className="w-full p-4 border rounded font-mono text-xs bg-slate-50"
                />
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10 py-4 border-b">
                <div className="flex items-center gap-4">
                    <Link href="/admin/courses" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Edit: {formData.title}</h2>
                        <p className="text-xs text-gray-500">{formData.id}</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50"
                >
                    {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                    Update Module
                </button>
            </div>

            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide border-b bg-white sticky top-[73px] z-10">
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <Icon size={16} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[500px]">
                {activeTab === 'basic' && BasicInfoTab()}
                {activeTab === 'hero' && HeroTab()}
                {activeTab === 'overview' && CourseOverviewTab()}
                {activeTab === 'course_overview' && PythonOverviewTab()}
                {activeTab === 'curriculum' && CurriculumTab()}
                {activeTab === 'table_curriculum' && TableCurriculumTab()}
                {activeTab === 'tools' && ListCheckerTab()}
                {activeTab === 'hands_on' && RealWorldProjectsTab()}
                {activeTab === 'why_choose_us' && WhyChooseUsTab()}
                {activeTab === 'career' && CareerGrowthTab()}
                {activeTab === 'jobs' && JobRolesTab()}
                {activeTab === 'audience' && TargetAudienceTab()}
                {activeTab === 'prerequisites' && PrerequisitesTab()}
                {activeTab === 'certification' && CertificationTab()}
                {activeTab === 'integrations' && GenericJsonTab({ type: "detailed_sap_integrations", title: "SAP Integrations" })}
                {activeTab === 'methodology' && MethodologyTab()}
                {activeTab === 'whats_included' && WhatsIncludedTab()}
                {activeTab === 'roadmap' && RoadmapTab()}
                {activeTab === 'journey' && JourneyTab()}
                {activeTab === 'companies' && HiringCompaniesTab()}
                {activeTab === 'batches' && BatchesTab()}
                {activeTab === 'demo' && GenericJsonTab({ type: "detailed_demo_booking", title: "Demo Booking" })}
                {activeTab === 'faq' && FAQTab()}
                {activeTab === 'testimonials' && TestimonialsTab()}
                {activeTab === 'resources' && ResourcesTab()}
            </div>
        </div>
    );
}
