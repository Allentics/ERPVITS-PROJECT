'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2, Link as LinkIcon, Plus, Trash2, ClipboardList, Target, BookOpen, Library, Laptop, Star, TrendingUp, Users, Trophy, Link as Link2, NotebookPen, AlarmClock, HelpCircle, MessageSquareQuote, FileText } from 'lucide-react';
import Link from 'next/link';

// Tab Definitions
const TABS = [
    { id: 'basic', label: 'Basic Info', icon: ClipboardList },
    { id: 'hero', label: 'Hero Section', icon: Target },
    { id: 'overview', label: 'Course Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: Library },
    { id: 'hands_on', label: 'Hands-On', icon: Laptop },
    { id: 'why_choose_us', label: 'Why Choose Us', icon: Star },
    { id: 'career', label: 'Career Growth', icon: TrendingUp },
    { id: 'audience', label: 'Target Audience', icon: Users },
    { id: 'certification', label: 'Certification', icon: Trophy },
    { id: 'integrations', label: 'SAP Integrations', icon: Link2 },
    { id: 'methodology', label: 'Training Methodology', icon: NotebookPen },
    { id: 'formats', label: 'Training Formats', icon: AlarmClock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote },
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
                    <textarea
                        value={section.subtitle || ''}
                        onChange={(e) => updateSection('detailed_features', { ...section, subtitle: e.target.value })}
                        className="w-full p-2 border rounded"
                        rows={2}
                    />
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 border-b pb-2 flex justify-between items-center">
                        Key Features
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
                                <textarea
                                    value={item.description || ''}
                                    onChange={(e) => {
                                        const newItems = [...items];
                                        newItems[idx].description = e.target.value;
                                        updateOverview(newItems);
                                    }}
                                    className="w-full p-2 border rounded text-sm"
                                    placeholder="Feature Description"
                                    rows={2}
                                />
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
                    <h4 className="font-bold text-gray-900">Modules ({modules.length})</h4>
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
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Title</label>
                    <input value={section.title || ''} onChange={(e) => updateSection('content_with_image', { ...section, title: e.target.value })} className="w-full p-2 border rounded" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Description</label>
                    <textarea value={section.description || ''} onChange={(e) => updateSection('content_with_image', { ...section, description: e.target.value })} className="w-full p-2 border rounded" rows={3} />
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
                <h4 className="font-bold">Target Audience List</h4>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Items (One per line)</label>
                    <textarea
                        value={Array.isArray(section.items) ? section.items.join('\\n') : (section.items || '')}
                        onChange={(e) => updateSection('detailed_target_audience', { ...section, items: e.target.value.split('\\n') })}
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

    // Generic fallback for tabs not heavily customized yet
    const GenericJsonTab = ({ type }: { type: string }) => {
        const section = getSection(type);
        return (
            <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                    Advanced Editor for section type: <b>{type}</b>
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
                {activeTab === 'hands_on' && <GenericJsonTab type="real_world_scenarios" />}
                {activeTab === 'why_choose_us' && <WhyChooseUsTab />}
                {activeTab === 'career' && <GenericJsonTab type="detailed_career_opportunities" />}
                {activeTab === 'audience' && <TargetAudienceTab />}
                {activeTab === 'certification' && <GenericJsonTab type="detailed_certification" />}
                {activeTab === 'integrations' && <GenericJsonTab type="detailed_sap_integrations" />}
                {activeTab === 'methodology' && <GenericJsonTab type="detailed_learning_outcomes" />}
                {activeTab === 'formats' && <GenericJsonTab type="detailed_upcoming_batches" />}
                {activeTab === 'faq' && <FAQTab />}
                {activeTab === 'testimonials' && <GenericJsonTab type="detailed_testimonials" />}
                {activeTab === 'resources' && <ResourcesTab />}
            </div>
        </div>
    );
}
