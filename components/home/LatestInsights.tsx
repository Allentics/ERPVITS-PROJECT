"use client";

import React, { useEffect, useState } from 'react';
import { Clock, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { blogPosts as localPosts } from '@/lib/blogData';

export default function LatestInsights() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                // Fetch latest posts from DB
                const { data: dbPosts } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .order('date', { ascending: false })
                    .limit(5); // Fetch slightly more to ensure we have enough even after filtering/merging

                // Merge with local posts
                let combined = [...localPosts];

                if (dbPosts && dbPosts.length > 0) {
                    // Create a map of DB posts for easy lookup
                    const dbPostMap = new Map(dbPosts.map(p => [p.id, p]));

                    // Update local posts with DB data if ID matches, or add new ones
                    // This simple merge strategy prioritizes DB existence but keeps local structure if needed
                    // For homepage, we just want the latest content. 

                    // Actually, let's just combine distinct lists
                    const dbIds = new Set(dbPosts.map(p => p.id));
                    const uniqueLocal = localPosts.filter(p => !dbIds.has(p.id));
                    combined = [...dbPosts, ...uniqueLocal];
                }

                // Sort by date descending
                combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                // Take top 3
                setPosts(combined.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch posts", error);
                // Fallback to local
                setPosts(localPosts.slice(0, 3));
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const tagColors = [
        "text-orange-600 bg-orange-50",
        "text-blue-600 bg-blue-50",
        "text-green-600 bg-green-50"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <BookOpen className="w-8 h-8 text-green-600" />
                        Latest SAP Career Insights & Industry Trends
                    </h2>
                    <p className="text-slate-500">
                        Stay updated with expert articles, career guides, and SAP industry news
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {loading ? (
                        // Skeleton Loading State
                        [1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-[400px] animate-pulse">
                                <div className="h-48 bg-slate-200"></div>
                                <div className="p-6 space-y-4">
                                    <div className="h-4 bg-slate-200 w-1/3 rounded"></div>
                                    <div className="h-6 bg-slate-200 w-full rounded"></div>
                                    <div className="h-4 bg-slate-200 w-full rounded"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        posts.map((post, index) => (
                            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                                <Link href={`/blog/${post.id}`} className="block h-48 overflow-hidden relative">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                            <BookOpen className="w-12 h-12" />
                                        </div>
                                    )}
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${tagColors[index % tagColors.length]}`}>
                                            {post.category || "SAP Insights"}
                                        </span>
                                        <Link href={`/blog/${post.id}`}>
                                            <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 hover:text-orange-600 transition-colors">
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{Math.ceil(post.description.split(' ').length / 200) + 2} min read</span>
                                        </div>
                                        {/* Views removed as requested */}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        Read All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
