'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Save, Loader2, Layout, FileText, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ContentManagerPage() {
    const searchParams = useSearchParams();
    const pageFilter = searchParams.get('page');

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [contents, setContents] = useState<any[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        fetchContents();
    }, [pageFilter]);

    async function fetchContents() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('site_content')
                .select('*')
                .order('page_path')
                .order('order_index');

            if (error) throw error;

            let filteredData = data || [];
            if (pageFilter) {
                filteredData = filteredData.filter((c: any) => c.page_path === pageFilter);
            }

            setContents(filteredData);
            if (filteredData.length > 0) setSelectedId(filteredData[0].id);
        } catch (err: any) {
            alert('Error fetching content: ' + err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleJsonChange = (id: string, value: string) => {
        try {
            const parsed = JSON.parse(value);
            setContents(prev => prev.map((c: any) => c.id === id ? { ...c, content: parsed } : c));
        } catch (e) {
            // Invalid JSON, don't update state yet or handle error
        }
    };

    const handleSave = async (item: any) => {
        setSaving(true);
        try {
            const { error } = await supabase
                .from('site_content')
                .update({ content: item.content })
                .eq('id', item.id);

            if (error) throw error;
            alert(`${item.section_key} updated successfully!`);
        } catch (err: any) {
            alert('Error saving content: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
                <p className="text-gray-500 text-sm">Loading site content...</p>
            </div>
        );
    }

    const selectedItem = contents.find((c: any) => c.id === selectedId);

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Site Content Manager</h1>
                <p className="text-gray-500 text-sm">Manage modular sections across different pages of the website.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* List of Sections */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b font-bold text-sm text-gray-700">Sections</div>
                    <div className="divide-y divide-gray-100">
                        {contents.map((item: any) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedId(item.id)}
                                className={`w-full text-left p-4 hover:bg-blue-50 transition-colors flex items-center justify-between group ${selectedId === item.id ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
                            >
                                <div>
                                    <div className="text-xs font-bold text-gray-400 mb-1">{item.page_path}</div>
                                    <div className={`font-bold ${selectedId === item.id ? 'text-blue-700' : 'text-gray-700'}`}>{item.section_key.toUpperCase()}</div>
                                </div>
                                <ChevronRight size={18} className={`transition-transform ${selectedId === item.id ? 'text-blue-600 translate-x-1' : 'text-gray-300'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* JSON Editor */}
                <div className="lg:col-span-2 space-y-4">
                    {selectedItem ? (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                            <div className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">{selectedItem.section_key.toUpperCase()} Section</h2>
                                    <p className="text-xs text-gray-400">Page: {selectedItem.page_path}</p>
                                </div>
                                <button
                                    onClick={() => handleSave(selectedItem)}
                                    disabled={saving}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2 disabled:opacity-50"
                                >
                                    {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                    Save Changes
                                </button>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Content (JSON)</label>
                                <textarea
                                    className="w-full h-[500px] p-4 font-mono text-sm bg-gray-900 text-blue-300 rounded-xl outline-none border-2 border-transparent focus:border-blue-500/50 transition-all shadow-inner"
                                    value={JSON.stringify(selectedItem.content, null, 2)}
                                    onChange={(e: any) => handleJsonChange(selectedItem.id, e.target.value)}
                                    spellCheck={false}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 p-20 text-center">
                            <Layout size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500 font-medium">Select a section from the list to start editing.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
