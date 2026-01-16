'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Save, Loader2, Globe, Plus, Trash2, Search } from 'lucide-react';

export default function PagesManager() {
    const [pages, setPages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // New Page Form
    const [showAddForm, setShowAddForm] = useState(false);
    const [newPagePath, setNewPagePath] = useState('');
    const [newPageName, setNewPageName] = useState('');

    useEffect(() => {
        fetchPages();
    }, []);

    async function fetchPages() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('pages')
                .select('*')
                .order('path');

            if (error) throw error;
            setPages(data || []);
            if (data && data.length > 0 && !selectedPath) {
                setSelectedPath(data[0].path);
            }
        } catch (err: any) {
            // If table doesn't exist yet, we might get an error.
            if (err.message.includes('relation "public.pages" does not exist')) {
                console.warn("Pages table missing. Waiting for migration.");
            } else {
                alert('Error fetching pages: ' + err.message);
            }
        } finally {
            setLoading(false);
        }
    }

    const handleSave = async (page: any) => {
        setSaving(true);
        try {
            const { error } = await supabase
                .from('pages')
                .update({
                    meta_title: page.meta_title,
                    meta_description: page.meta_description,
                    schema_markup: page.schema_markup,
                    name: page.name
                })
                .eq('path', page.path);

            if (error) throw error;
            alert('Page metadata updated successfully!');
        } catch (err: any) {
            alert('Error updating page: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleAddPage = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('pages')
                .insert([{ path: newPagePath, name: newPageName }]);

            if (error) throw error;

            await fetchPages();
            setSelectedPath(newPagePath);
            setShowAddForm(false);
            setNewPagePath('');
            setNewPageName('');
        } catch (err: any) {
            alert('Error adding page: ' + err.message);
        }
    };

    const handleDelete = async (path: string) => {
        if (!confirm(`Are you sure you want to delete settings for ${path}?`)) return;
        try {
            const { error } = await supabase.from('pages').delete().eq('path', path);
            if (error) throw error;
            setPages(pages.filter(p => p.path !== path));
            if (selectedPath === path) setSelectedPath(null);
        } catch (err: any) {
            alert('Error deleting page: ' + err.message);
        }
    };

    const updateSelectedPage = (field: string, value: string) => {
        setPages(prev => prev.map(p => p.path === selectedPath ? { ...p, [field]: value } : p));
    };

    const filteredPages = pages.filter(p =>
        p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.path?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedPage = pages.find(p => p.path === selectedPath);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
                <p className="text-gray-500 text-sm">Loading pages...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Pages & SEO Manager</h1>
                    <p className="text-gray-500 text-sm">Manage meta tags, schema, and settings for static pages.</p>
                </div>
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-zinc-900 transition-colors"
                >
                    <Plus size={16} />
                    Add Page
                </button>
            </div>

            {/* Add Page Form */}
            {showAddForm && (
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-top-2">
                    <form onSubmit={handleAddPage} className="flex gap-4 items-end">
                        <div className="flex-1 space-y-1">
                            <label className="text-xs font-bold text-gray-500">Page Path (e.g. /contact)</label>
                            <input
                                required
                                value={newPagePath}
                                onChange={e => setNewPagePath(e.target.value)}
                                placeholder="/my-new-page"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                            />
                        </div>
                        <div className="flex-1 space-y-1">
                            <label className="text-xs font-bold text-gray-500">Page Name</label>
                            <input
                                required
                                value={newPageName}
                                onChange={e => setNewPageName(e.target.value)}
                                placeholder="My New Page"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700">
                            Save
                        </button>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">
                    <div className="p-4 border-b">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search pages..."
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                        {filteredPages.map((page) => (
                            <button
                                key={page.path}
                                onClick={() => setSelectedPath(page.path)}
                                className={`w-full text-left p-4 hover:bg-gray-50 transition-colors group ${selectedPath === page.path ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className={`font-bold text-sm ${selectedPath === page.path ? 'text-blue-700' : 'text-gray-900'}`}>{page.name}</div>
                                        <div className="text-xs text-gray-400 mt-1 font-mono">{page.path}</div>
                                    </div>
                                    <Globe size={14} className={selectedPath === page.path ? 'text-blue-400' : 'text-gray-300'} />
                                </div>
                            </button>
                        ))}
                        {filteredPages.length === 0 && (
                            <div className="p-8 text-center text-gray-400 text-sm">
                                No pages found.
                            </div>
                        )}
                    </div>
                </div>

                {/* Editor */}
                <div className="lg:col-span-2">
                    {selectedPage ? (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                            <div className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">{selectedPage.name}</h2>
                                    <a href={selectedPage.path} target="_blank" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                                        {selectedPage.path} <Globe size={10} />
                                    </a>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleDelete(selectedPage.path)}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Delete Page Settings"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleSave(selectedPage)}
                                        disabled={saving}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2 disabled:opacity-50 text-sm"
                                    >
                                        {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Display Name</label>
                                    <input
                                        value={selectedPage.name || ''}
                                        onChange={(e) => updateSelectedPage('name', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Meta Title</label>
                                    <input
                                        value={selectedPage.meta_title || ''}
                                        onChange={(e) => updateSelectedPage('meta_title', e.target.value)}
                                        placeholder="Best SAP Training in India..."
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                                    />
                                    <p className="text-xs text-gray-400 text-right">{selectedPage.meta_title?.length || 0}/60</p>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Meta Description</label>
                                    <textarea
                                        rows={3}
                                        value={selectedPage.meta_description || ''}
                                        onChange={(e) => updateSelectedPage('meta_description', e.target.value)}
                                        placeholder="Learn SAP from experts..."
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                                    />
                                    <p className="text-xs text-gray-400 text-right">{selectedPage.meta_description?.length || 0}/160</p>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Schema Markup (JSON-LD)</label>
                                    <textarea
                                        rows={8}
                                        value={selectedPage.schema_markup || ''}
                                        onChange={(e) => updateSelectedPage('schema_markup', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none font-mono text-xs bg-gray-50"
                                        placeholder='{ "@context": "https://schema.org", ... }'
                                        spellCheck={false}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 p-20 text-center flex flex-col items-center justify-center h-full">
                            <Globe size={48} className="text-gray-300 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900">Select a Page</h3>
                            <p className="text-gray-500">Choose a page from the sidebar to edit SEO settings.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
