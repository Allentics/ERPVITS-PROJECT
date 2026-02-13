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
                    .limit(5);

                // Merge with local posts logic
                let combined = [...localPosts];

                if (dbPosts && dbPosts.length > 0) {
                    // Merge local data into DB posts to ensure consistent dates/images
                    const mergedDbPosts = dbPosts.map((p: any) => {
                        const local = localPosts.find(lp => lp.id === p.id);
                        return local ? { ...p, ...local } : p;
                    });

                    const dbIds = new Set(mergedDbPosts.map((p: any) => p.id));
                    const uniqueLocal = localPosts.filter(p => !dbIds.has(p.id));
                    combined = [...mergedDbPosts, ...uniqueLocal];
                }

                // Sort by date descending (safeguard date parsing)
                combined.sort((a, b) => {
                    const dateA = a.date ? new Date(a.date).getTime() : 0;
                    const dateB = b.date ? new Date(b.date).getTime() : 0;
                    // Handle invalid dates (NaN results in false for comparisons, keep original order or push down)
                    if (isNaN(dateA)) return 1;
                    if (isNaN(dateB)) return -1;
                    return dateB - dateA;
                });

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
        <section className="py-14 bg-white">
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
                        posts.map((post, index) => {
                            const description = post.description || "";
                            const wordCount = description.split(/\s+/).length; // Split by whitespace safe
                            const readTime = Math.ceil(wordCount / 200) + 2;

                            return (
                                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                                    <Link href={`/blog/${post.id}`} className="block h-48 overflow-hidden relative">
                                        {post.image ? (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img
                                                src={post.image}
                                                alt={post.title || "Blog Post"}
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
                                                {description}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{readTime} min read</span>
                                            </div>
                                            {/* Views removed as requested */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
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
