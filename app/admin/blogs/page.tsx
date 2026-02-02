'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit,
    Trash2,
    ExternalLink,
    Loader2,
    AlertCircle,
    Calendar,
    FileText,
    RefreshCw
} from 'lucide-react';
import { blogPosts as localPosts } from '@/lib/blogData';

export default function BlogsPage() {
    const router = useRouter();
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [syncing, setSyncing] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    async function fetchBlogs() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('date', { ascending: false });

            if (error) throw error;
            setBlogs(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteBlog(id: string) {
        if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) return;

        try {
            const { error } = await supabase
                .from('blog_posts')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setBlogs(blogs.filter(b => b.id !== id));
        } catch (err: any) {
            alert('Error deleting blog: ' + err.message);
        }
    }

    async function syncBlogs() {
        if (!confirm('This will sync missing blogs from the local code to the database. Continue?')) return;

        setSyncing(true);
        try {
            // Check authentication status first
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                alert('Session expired or not logged in. Please log in again.');
                router.push('/admin/login');
                return;
            }

            let count = 0;
            let errors = [];
            for (const post of localPosts) {
                // Check if blog already exists in our current state (which represents the DB)
                const exists = blogs.some(b => b.id === post.id);

                if (!exists) {
                    console.log(`Syncing missing blog: ${post.id}`);
                    const { error } = await supabase
                        .from('blog_posts')
                        .upsert({
                            id: post.id,
                            title: post.title,
                            description: post.description,
                            image: post.image,
                            date: new Date(post.date).toISOString().split('T')[0],
                            category: post.category,
                            author: post.author,
                            content: "" // Website uses fallback to React component if content is empty
                        }, { onConflict: 'id' });

                    if (error) {
                        console.error(`Error syncing ${post.id}:`, error.message, error);
                        errors.push(`${post.id}: ${error.message}`);
                    } else {
                        count++;
                    }
                }
            }

            if (count > 0) {
                alert(`Successfully synced ${count} missing blog posts!`);
                await fetchBlogs();
            } else if (errors.length > 0) {
                alert(`Failed to sync blogs due to database permissions (RLS). Please follow the instructions to fix your Supabase settings.`);
            } else {
                alert('All local blogs are already in the database.');
            }
        } catch (err: any) {
            alert('Error syncing blogs: ' + err.message);
        } finally {
            setSyncing(false);
        }
    }

    const filteredBlogs = blogs.filter(blog =>
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Blog Management</h2>
                    <p className="text-gray-500 text-sm">Publish and edit blog posts for your audience.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={syncBlogs}
                        disabled={syncing}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
                        title="Sync missing blogs from code"
                    >
                        {syncing ? <Loader2 size={18} className="animate-spin" /> : <RefreshCw size={18} />}
                        Sync Missing
                    </button>
                    <Link
                        href="/admin/blogs/new"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        <Plus size={18} />
                        New Post
                    </Link>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Blog List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
                        <p className="text-gray-500 text-sm">Loading posts...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                        <div className="bg-red-50 text-red-600 p-3 rounded-full mb-4">
                            <AlertCircle size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Failed to load posts</h3>
                        <p className="text-gray-500 text-sm mt-1 max-w-xs">{error}</p>
                        <button
                            onClick={fetchBlogs}
                            className="mt-6 text-blue-600 font-medium hover:underline text-sm"
                        >
                            Try Again
                        </button>
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                        <div className="bg-gray-50 text-gray-400 p-3 rounded-full mb-4">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No posts found</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            {searchTerm ? "No posts match your search criteria." : "You haven't written any blog posts yet."}
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Post Details</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredBlogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4 max-w-md">
                                            <div className="min-w-0">
                                                <p className="text-sm font-bold text-gray-900 truncate" title={blog.title}>{blog.title}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Calendar size={12} />
                                                        {blog.date}
                                                    </span>
                                                    <span className="text-xs text-gray-400">•</span>
                                                    <span className="text-xs text-gray-500">{blog.author}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                {blog.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={`/admin/blogs/edit/${blog.id}`}
                                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => deleteBlog(blog.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                                <Link
                                                    href={`/blog/${blog.id}`}
                                                    target="_blank"
                                                    className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                                                    title="View Live"
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

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
