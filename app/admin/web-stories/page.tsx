'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
    Plus,
    Search,
    MoreVertical,
    Edit,
    Trash2,
    ExternalLink,
    Loader2,
    AlertCircle,
    Calendar,
    Smartphone,
    RefreshCw,
    Star,
    Zap
} from 'lucide-react';

export default function WebStoriesAdminPage() {
    const router = useRouter();
    const [stories, setStories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [syncing, setSyncing] = useState(false);

    useEffect(() => {
        fetchStories();
    }, []);

    async function fetchStories() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('web_stories')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setStories(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function syncStories() {
        if (!confirm('This will import initial mock stories into the database. Continue?')) return;

        setSyncing(true);
        try {
            const mockStories = [
                {
                    title: "How to Crack SAP Interviews",
                    category: "Interview Questions",
                    author: "ERPVITS",
                    role: "SAP Consultant @ Siemens",
                    image: "/images/stories/sap_consultant_amit.png",
                    views: "12.5k",
                    type: "featured",
                    slides: [
                        { id: 101, image: "/images/stories/generated/story_interview_modern.png", title: "Cracking the SAP Interview", content: "It's not just about technical skills. It's about showing you understand the VALUE of SAP.", duration: 5000 },
                        { id: 102, image: "/images/stories/generated/story_interview_resume.png", title: "1. Know Your Career Path", content: "Interviewers love candidates who have a clear vision of their growth from Junior Consultant to Architect.", duration: 5000 },
                        { id: 103, image: "/images/stories/generated/story_interview_whiteboard.png", title: "2. Talk About Progression", content: "Don't just discuss what you did. Discuss how you improved process efficiency in your previous projects.", duration: 5000 },
                        { id: 104, image: "/images/stories/generated/story_interview_handshake.png", title: "3. Real World Scenarios", content: "Be prepared to whiteboard a solution. Show them how you solve complex procurement problems.", duration: 5000 },
                        { id: 105, image: "/images/stories/generated/story_interview_cross_module.png", title: "4. Cross-Module Knowledge", content: "Specialists are good. Generalists who understand integration points (MM-FI, SD-FI) are hired instantly.", duration: 5000 }
                    ]
                },
                {
                    title: "SAP S/4HANA vs ECC: Key Differences",
                    category: "Module Comparison",
                    author: "ERPVITS",
                    role: "SAP Architect",
                    image: "/images/stories/sap_tech_dashboard.png",
                    views: "8.2k",
                    type: "featured",
                    slides: [
                        { id: 201, image: "/images/stories/generated/story_erp_dashboard_futuristic.png", title: "S/4HANA: The New Core", content: "Why are companies migrating? It's not just an upgrade; it's a complete business transformation.", duration: 5000 },
                        { id: 202, image: "/images/stories/generated/story_hana_server.png", title: "1. In-Memory Computing", content: "With HANA, reports that took hours now run in seconds. This changes how businesses make decisions.", duration: 5000 },
                        { id: 203, image: "/images/stories/generated/story_hana_cloud.png", title: "2. The Cloud Advantage", content: "BTP (Business Technology Platform) allows for rapid innovation and extension without touching the core.", duration: 5000 },
                        { id: 204, image: "/images/stories/generated/story_erp_dashboard_futuristic.png", title: "3. Simplified Processes", content: "Complex workflows are streamlined. External workforce management becomes seamless.", duration: 5000 },
                        { id: 205, image: "/images/stories/generated/story_hana_server.png", title: "4. Intelligent Procurement", content: "Integration with Ariba Network automates the entire procure-to-pay lifecycle.", duration: 5000 }
                    ]
                },
                {
                    title: "My Journey: Fresher to Architect",
                    category: "Success Stories",
                    author: "ERPVITS",
                    role: "Senior Manager",
                    image: "/images/stories/success_story_priya.png",
                    views: "15k",
                    type: "featured",
                    slides: [
                        { id: 301, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D", title: "My Career Roadmap", content: "I didn't start as an expert. I started with a willingness to learn and travel.", duration: 5000 },
                        { id: 302, image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Going Global", content: "My first big break was a rollout project in Germany. Understanding local localization rules is a super power.", duration: 5000 },
                        { id: 303, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Adapting to Markets", content: "Worked in APAC markets? You learn flexibility. Every region has unique compliance needs.", duration: 5000 },
                        { id: 304, image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Deep Functional Dive", content: "I spent 2 years mastering Shipping Points. Sounds boring? It made me indispensable for logistics projects.", duration: 5000 }
                    ]
                }
            ];

            const { error } = await supabase
                .from('web_stories')
                .upsert(mockStories, { onConflict: 'title' });

            if (error) throw error;
            alert('Successfully synced initial stories!');
            fetchStories();
        } catch (err: any) {
            alert('Error syncing stories: ' + err.message);
        } finally {
            setSyncing(false);
        }
    }

    async function deleteStory(id: string) {
        if (!confirm('Are you sure you want to delete this web story? This action cannot be undone.')) return;

        try {
            const { error } = await supabase
                .from('web_stories')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setStories(stories.filter(s => s.id !== id));
        } catch (err: any) {
            alert('Error deleting story: ' + err.message);
        }
    }

    const filteredStories = stories.filter(story =>
        story.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Web Stories Management</h2>
                    <p className="text-gray-500 text-sm">Create and manage bite-sized visual stories.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={syncStories}
                        disabled={syncing}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
                        title="Sync initial mock stories"
                    >
                        {syncing ? <Loader2 size={18} className="animate-spin" /> : <RefreshCw size={18} />}
                        Sync Initial
                    </button>
                    <Link
                        href="/admin/web-stories/new"
                        className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm"
                    >
                        <Plus size={18} />
                        New Story
                    </Link>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search stories..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Stories List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="animate-spin text-orange-600 mb-2" size={32} />
                        <p className="text-gray-500 text-sm">Loading stories...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                        <div className="bg-red-50 text-red-600 p-3 rounded-full mb-4">
                            <AlertCircle size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Failed to load stories</h3>
                        <p className="text-gray-500 text-sm mt-1 max-w-xs">{error}</p>
                        <button
                            onClick={fetchStories}
                            className="mt-6 text-orange-600 font-medium hover:underline text-sm"
                        >
                            Try Again
                        </button>
                    </div>
                ) : filteredStories.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                        <div className="bg-gray-50 text-gray-400 p-3 rounded-full mb-4">
                            <Smartphone size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No stories found</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            {searchTerm ? "No stories match your search criteria." : "You haven't created any web stories yet."}
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Story Details</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredStories.map((story) => (
                                    <tr key={story.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4 max-w-md">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-10 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                                                    {story.image ? (
                                                        <img src={story.image} alt="" className="h-full w-full object-cover" />
                                                    ) : (
                                                        <div className="h-full w-full flex items-center justify-center text-gray-400">
                                                            <Smartphone size={16} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-bold text-gray-900 truncate" title={story.title}>{story.title}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                                            <Calendar size={12} />
                                                            {new Date(story.created_at).toLocaleDateString()}
                                                        </span>
                                                        <span className="text-xs text-gray-400">•</span>
                                                        <span className="text-xs text-gray-500">{story.slides?.length || 0} Slides</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                                {story.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {story.type === 'featured' ? (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                                                    <Star size={12} className="fill-amber-700" />
                                                    Featured
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                                    <Zap size={12} />
                                                    Standard
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={`/admin/web-stories/edit/${story.id}`}
                                                    className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => deleteStory(story.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                                <Link
                                                    href={`/web-stories/`}
                                                    target="_blank"
                                                    className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                                                    title="View Stories"
                                                >
                                                    <ExternalLink size={18} />
                                                </Link>
                                            </div>
                                            <button className="p-2 text-gray-400 md:hidden">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
                }
            </div>
        </div>
    );
}
