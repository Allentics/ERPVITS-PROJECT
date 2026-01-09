import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { blogPosts as localPosts } from '@/lib/blogData';

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
    return { day, month, weekday };
}

export const dynamic = 'force-dynamic';

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const { category: filterCategory } = await searchParams;

    const { data: dbPosts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
    }

    // Merge DB posts with local posts, prioritizing DB posts if they exist
    const mergedPostsMap = new Map();

    // Add local posts first
    localPosts.forEach(post => {
        mergedPostsMap.set(post.id, {
            ...post,
        });
    });

    // Overwrite with DB posts if they exist
    if (dbPosts) {
        dbPosts.forEach((post: any) => {
            mergedPostsMap.set(post.id, post);
        });
    }

    let allPosts = Array.from(mergedPostsMap.values()).sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Apply category filter if present
    if (filterCategory) {
        allPosts = allPosts.filter(post => post.category === filterCategory);
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-gray-50 border-b border-gray-100">
                <nav className="text-sm font-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-500 hover:text-orange-500 transition-colors">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900 font-semibold">Blogs</span>
                </nav>
            </div>

            {/* Header Section - More premium look */}
            <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Insights & <span className="text-orange-500">{filterCategory || "Industry Guides"}</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Stay ahead in the SAP ecosystem with expert insights, technical tutorials, and career guidance.
                    </p>

                    {/* Stats - Refined */}
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-gray-200 pt-8 mt-4">
                        <div className="text-center group">
                            <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">5k+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Learners</div>
                        </div>
                        <div className="text-center border-x border-gray-200 group">
                            <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">95%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Success</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">50+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Partners</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog List Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-12">
                <div className="grid grid-cols-1 gap-12 lg:gap-16">
                    {allPosts.map((post: any) => {
                        const { day, month, weekday } = formatDate(post.date);
                        return (
                            <div key={post.id} className="flex flex-col md:flex-row gap-8 lg:gap-12 pb-12 border-b border-gray-100 last:border-0 group">
                                {/* Date Section - Desktop Sidebar Style */}
                                <div className="hidden md:flex flex-col items-center justify-start w-24 pt-2">
                                    <div className="text-[42px] font-bold text-[#F58220] leading-none mb-1">
                                        {day}
                                    </div>
                                    <div className="text-[14px] font-medium text-gray-400 uppercase tracking-[2px]">
                                        {month}
                                    </div>
                                    <div className="text-[12px] font-medium text-gray-400 uppercase tracking-[1px] mt-1">
                                        {weekday}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-grow flex flex-col md:flex-row gap-8 lg:gap-12">
                                    <div className="flex-grow order-2 md:order-1">
                                        <div className="md:hidden flex items-center gap-3 mb-4">
                                            <span className="text-3xl font-bold text-[#F58220]">{day}</span>
                                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{month}</span>
                                            <span className="text-xs text-gray-400 uppercase">| {weekday}</span>
                                        </div>

                                        <Link href={`/blog/${post.id}`} className="group-hover:text-orange-600 transition-colors">
                                            <h2 className="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#F58220] transition-colors">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <p className="text-[#666666] text-base mb-8 line-clamp-3 leading-relaxed max-w-2xl">
                                            {post.description}
                                        </p>

                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="inline-block bg-white text-[#222222] border-2 border-[#e8e8e8] text-[12px] font-bold px-4 py-[8px] rounded-none uppercase transition-all hover:bg-[#e6e6e6] hover:border-[#c9c9c9]"
                                        >
                                            View Blog
                                        </Link>
                                    </div>

                                    {/* Featured Image - Right side on desktop */}
                                    {(post.image || post.featured_image) && (
                                        <div className="w-full md:w-64 lg:w-72 flex-shrink-0 order-1 md:order-2 overflow-hidden rounded-none shadow-sm group-hover:shadow-md transition-all duration-300">
                                            <Link href={`/blog/${post.id}`}>
                                                <div className="aspect-[1.6/1] relative">
                                                    <img
                                                        src={post.image || post.featured_image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

