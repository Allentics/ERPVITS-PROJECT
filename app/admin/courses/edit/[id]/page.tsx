'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2, Link as LinkIcon, Plus, Trash2, ClipboardList, Target, BookOpen, Library, Laptop, Star, TrendingUp, Users, Trophy, Link as Link2, NotebookPen, AlarmClock, HelpCircle, MessageSquareQuote, FileText, Calendar, MessageSquare } from 'lucide-react';
import Link from 'next/link';

// Tab Definitions
const TABS = [
    { id: 'basic', label: 'Basic Info', icon: ClipboardList },
    { id: 'hero', label: 'Hero Section', icon: Target },
    { id: 'overview', label: 'Why Choose Us', icon: BookOpen },
    { id: 'why_choose_us', label: 'Success Guarantee & Credibility', icon: Star },
    { id: 'whats_included', label: 'What\'s Included', icon: AlarmClock },
    { id: 'curriculum', label: 'Comprehensive Curriculum', icon: Library },
    { id: 'audience', label: 'Who Should Enroll', icon: Users },
    { id: 'prerequisites', label: 'Prerequisites', icon: ClipboardList },
    { id: 'methodology', label: 'Training Methodology', icon: NotebookPen },
    { id: 'hands_on', label: 'Real-World Projects', icon: Laptop },
    { id: 'certification', label: 'Certification', icon: Trophy },
    { id: 'companies', label: 'Hiring Companies', icon: Users },
    { id: 'career', label: 'Career Growth', icon: TrendingUp },
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
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);
        const selection = text.substring(start, end);

        const linkText = selection || 'link text';
        const newText = before + `[${linkText}](url)` + after;

        // This is a simplified way to update the state, assuming the textarea has a name matching a state key
        // For distinct handlers, we'd need to pass the setter. 
        // For now, we'll try to trigger a change event or just update the value

        // React synthetic event trigger is tricky programmatically. 
        // We will just alert the user to use Markdown for now or rely on them typing it.
        // Or better: update the specific field if we know the path.

        // Let's copy to clipboard instead for reliability
        navigator.clipboard.writeText(`[${linkText}](url)`);
        alert("Markdown link template copied to clipboard! Paste it where needed.");
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
                                        value={Array.isArray(module.learning_points) ? module.learning_points.join('\\n') : (module.learning_points || '')}
                                        onChange={(e) => {
                                            const newMods = [...modules];
                                            newMods[idx].learning_points = e.target.value.split('\\n');
                                            updateModules(newMods);
                                        }}
                                        className="w-full p-2 border rounded text-sm h-32 font-mono"
                                        placeholder="- Point 1\n- Point 2"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Hands-On Activities (One per line)</label>
                                    <textarea
                                        value={Array.isArray(module.hands_on) ? module.hands_on.join('\\n') : (module.hands_on || '')}
                                        onChange={(e) => {
                                            const newMods = [...modules];
                                            newMods[idx].hands_on = e.target.value.split('\\n');
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
                    <input value={section.videoSrc || ''} onChange={(e) => updateSection('content_with_image', { ...section, videoSrc: e.target.value })} className="w-full p-2 border rounded" placeholder="https://www.youtube.com/embed/..." />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">List Items (One per line)</label>
                    <textarea
                        value={Array.isArray(section.items) ? section.items.join('\\n') : (section.items || '')}
                        onChange={(e) => updateSection('content_with_image', { ...section, items: e.target.value.split('\\n') })}
                        className="w-full p-2 border rounded font-mono h-32"
                    />
                </div>
            </div>
        );
    };

    const TargetAudienceTab = () => {
        const section = getSection('detailed_target_audience', { items: [] });
        return (
            <div className="space-y-6">
                <h4 className="font-bold">Who Should Enroll</h4>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Items (One per line)</label>
                    <textarea
                        value={Array.isArray(section.items) ? section.items.join('\n') : (section.items || '')}
                        onChange={(e) => updateSection('detailed_target_audience', { ...section, items: e.target.value.split('\n') })}
                        className="w-full p-2 border rounded font-mono h-64"
                    />
                </div>
            </div>
        );
    };

    const PrerequisitesTab = () => {
        const section = getSection('detailed_prerequisites', { items: [] });
        return (
            <div className="space-y-6">
                <h4 className="font-bold">Prerequisites</h4>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Items (One per line)</label>
                    <textarea
                        value={Array.isArray(section.items) ? section.items.join('\n') : (section.items || '')}
                        onChange={(e) => updateSection('detailed_prerequisites', { ...section, items: e.target.value.split('\n') })}
                        className="w-full p-2 border rounded font-mono h-64"
                    />
                </div>
            </div>
        );
    };

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
                        value={JSON.stringify(section.items || [], null, 2)}
                        onChange={(e) => {
                            try {
                                updateSection('detailed_certification', { ...section, items: JSON.parse(e.target.value) });
                            } catch (err) { }
                        }}
                        className="w-full p-4 border rounded font-mono text-xs bg-slate-50"
                    />
                    <p className="text-xs text-gray-500">List of certification cards.</p>
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
                {activeTab === 'basic' && <BasicInfoTab />}
                {activeTab === 'hero' && <HeroTab />}
                {activeTab === 'overview' && <CourseOverviewTab />}
                {activeTab === 'curriculum' && <CurriculumTab />}
                {activeTab === 'hands_on' && <GenericJsonTab type="real_world_scenarios" title="Hands-On" />}
                {activeTab === 'why_choose_us' && <WhyChooseUsTab />}
                {activeTab === 'career' && <GenericJsonTab type="detailed_career_opportunities" title="Career Growth" />}
                {activeTab === 'audience' && <TargetAudienceTab />}
                {activeTab === 'prerequisites' && <PrerequisitesTab />}
                {activeTab === 'certification' && <CertificationTab />}
                {activeTab === 'integrations' && <GenericJsonTab type="detailed_sap_integrations" title="SAP Integrations" />}
                {activeTab === 'methodology' && <GenericJsonTab type="detailed_learning_outcomes" title="Training Methodology / What You'll Master" />}
                {activeTab === 'whats_included' && <GenericJsonTab type="whats_included" title="What's Included" />}
                {activeTab === 'roadmap' && <GenericJsonTab type="detailed_career_roadmap" title="Career Roadmap" />}
                {activeTab === 'journey' && <GenericJsonTab type="detailed_post_training_journey" title="Post-Training Journey" />}
                {activeTab === 'companies' && <GenericJsonTab type="detailed_companies" title="Hiring Companies" />}
                {activeTab === 'batches' && <GenericJsonTab type="detailed_upcoming_batches" title="Upcoming Batches" />}
                {activeTab === 'demo' && <GenericJsonTab type="detailed_demo_booking" title="Demo Booking" />}
                {activeTab === 'faq' && <FAQTab />}
                {activeTab === 'testimonials' && <GenericJsonTab type="detailed_testimonials" title="Testimonials" />}
                {activeTab === 'resources' && <ResourcesTab />}
            </div>
        </div>
    );
}
