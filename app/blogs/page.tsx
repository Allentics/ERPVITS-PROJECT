import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { blogPosts as localPosts } from '@/lib/blogData';
import { Metadata } from 'next';
import '../blogs.css';

export const metadata: Metadata = {
    title: 'SAP Blog & Insights | ERPVITS',
    description: 'Stay ahead in the SAP ecosystem with expert insights, technical tutorials, and career guidance from ERPVITS.',
    alternates: {
        canonical: 'https://www.erpvits.com/blogs/',
    },
};


function formatDate(dateStr: string) {
    const isISODate = dateStr.includes('T');
    const parseableStr = isISODate ? dateStr : `${dateStr} UTC`;
    const date = new Date(parseableStr);

    if (isNaN(date.getTime())) {
        return { day: '00', month: 'JAN', weekday: 'MONDAY' };
    }

    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'long', timeZone: 'UTC' }).toUpperCase();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' }).toUpperCase();

    return { day, month, weekday };
}

export const revalidate = 60; // Revalidate every 60 seconds for fast Admin updates

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
    // Deduplicate by both ID (slug) and Title to prevent duplicates when slugs are changed in CMS
    const idMap = new Map();
    const titleMap = new Map();

    // 1. First, process DB posts as they are the source of truth
    if (dbPosts) {
        dbPosts.forEach((post: any) => {
            idMap.set(post.id, post);
            if (post.title) titleMap.set(post.title.toLowerCase().trim(), post.id);
        });
    }

    // 2. Add local posts only if they don't conflict with DB by ID or Title
    localPosts.forEach(post => {
        const idConflict = idMap.has(post.id);
        const titleKey = post.title?.toLowerCase().trim();
        const titleConflict = titleMap.has(titleKey);

        if (!idConflict && !titleConflict) {
            idMap.set(post.id, post);
            if (titleKey) titleMap.set(titleKey, post.id);
        } else if (idConflict) {
            const dbPost = idMap.get(post.id);
            const validDbProps = Object.fromEntries(Object.entries(dbPost).filter(([_, v]) => v !== null && v !== ''));
            idMap.set(post.id, { ...post, ...validDbProps });
        }
    });

    let allPosts = Array.from(idMap.values()).map((post: any) => {
        let rawImage = post.image || post.featured_image || post.displayImage;
        let displayImage = '/images/logo.webp';

        if (rawImage) {
            if (rawImage.startsWith('http')) {
                displayImage = rawImage;
            } else {
                // Internal paths: extract filename, normalize to lowercase kebab-case, and use /images/blogs/ folder
                const rawFileName = rawImage.split('/').pop() || '';
                const fileName = rawFileName
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/_+/g, '-');
                displayImage = `/images/blogs/${fileName}`;
            }
        }

        return {
            ...post,
            displayImage
        };
    }).sort((a, b) => {
        const getTimestamp = (dateStr: string) => {
            if (!dateStr) return 0;
            const isISODate = dateStr.includes('T');
            const parseableStr = isISODate ? dateStr : `${dateStr} UTC`;
            return new Date(parseableStr).getTime() || 0;
        };
        return getTimestamp(b.date) - getTimestamp(a.date);
    }).filter(post => post.id !== 'sap-trm-setup-essentials');

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

            {/* Header Section */}
            <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Insights & <span className="text-orange-500">{filterCategory || "Industry Guides"}</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Stay ahead in the SAP ecosystem with expert insights, technical tutorials, and career guidance.
                    </p>

                    {/* Stats */}
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
                            <div key={post.id} className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 pb-16 pt-8 border-b border-gray-100 last:border-0 group items-start">
                                {/* Date Section - Left Side */}
                                <div className="hidden md:flex flex-col items-center justify-start w-28 shrink-0 text-center uppercase" suppressHydrationWarning>
                                    <div className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#F58220] leading-none mb-1">
                                        {day}
                                    </div>
                                    <div className="text-[12px] md:text-[14px] lg:text-[15px] font-semibold text-gray-500 tracking-[1px]">
                                        {month}
                                    </div>
                                    <div className="text-[10px] md:text-[11px] lg:text-[12px] font-medium text-gray-400 tracking-[1px] mt-1 lowercase first-letter:uppercase">
                                        {weekday}
                                    </div>
                                </div>

                                {/* Content Section - Middle */}
                                <div className="flex-1 min-w-0 flex flex-col items-start px-2">
                                    {/* Mobile Date Header */}
                                    <div className="md:hidden flex items-center gap-3 mb-4" suppressHydrationWarning>
                                        <span className="text-3xl font-bold text-[#F58220]">{day}</span>
                                        <span className="text-sm font-semibold text-gray-500 uppercase">{month}</span>
                                        <span className="text-xs text-gray-400 uppercase">| {weekday}</span>
                                    </div>

                                    <Link href={`/blog/${post.id}/`}>
                                        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#222222] mb-4 leading-tight group-hover:text-[#F58220] transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-600 text-sm md:text-base mb-8 line-clamp-3 leading-relaxed font-normal text-left w-full">
                                        {post.description}
                                    </p>

                                    <div className="mt-2">
                                        <Link
                                            href={`/blog/${post.id}/`}
                                            className="inline-block border border-gray-200 bg-white text-[10px] md:text-[11px] font-bold px-4 md:px-6 py-[8px] md:py-[11px] uppercase tracking-wider text-[#333] hover:bg-gray-50 hover:border-gray-400 transition-all font-sans"
                                        >
                                            VIEW BLOG
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Section - Right Side */}
                                {post.displayImage && (
                                    <div className="w-full md:w-80 shrink-0 mt-6 md:mt-2">
                                        <Link href={`/blog/${post.id}/`} className="block group/img">
                                            <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm group-hover/img:shadow-lg transition-all duration-300 bg-gray-50">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={post.displayImage}
                                                    alt={post.title}
                                                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover/img:scale-105"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


