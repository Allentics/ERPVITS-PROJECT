import React from 'react';
import Link from 'next/link';
import BlogContactForm from '@/components/blog/BlogContactForm';

interface BlogPreviewProps {
    data: {
        id: string; // slug
        title: string;
        content: string;
        image?: string;
        author?: string;
        date?: string;
        category?: string;
        description?: string;
    };
}

export default function BlogPreview({ data }: BlogPreviewProps) {
    // Fallback values if data is missing during editing
    const {
        id = 'preview-slug',
        title = 'Untitled Post',
        content = '<p>No content...</p>',
        image,
        author = 'ERPVITS Expert',
        date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        category = 'Uncategorized',
    } = data;

    return (
        <div className="bg-white min-h-full rounded-lg border border-gray-200 shadow-inner overflow-y-auto max-h-[800px] relative">
            <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-bl-lg z-50">
                Live Preview Mode
            </div>

            {/* Header / Breadcrumb Section (Simplified for Preview) */}
            <div className="bg-white border-b border-gray-100 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center text-sm font-medium text-gray-500 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <span className="hover:text-orange-500 transition-colors cursor-pointer">Home</span>
                        <span className="mx-2 text-gray-400">›</span>
                        <span className="hover:text-orange-500 transition-colors cursor-pointer">Blogs</span>
                        <span className="mx-2 text-gray-400">›</span>
                        <span className="text-gray-900 truncate max-w-[200px] sm:max-w-md">{title}</span>
                    </nav>
                    <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                        {title}
                    </h1>
                </div>
            </div>

            {/* Main Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Main Content (Left) */}
                    <div className="lg:col-span-8">
                        <article className="blog-container">
                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-gray-100 mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl shadow-inner">
                                        {author?.[0] || 'E'}
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-bold">{author}</div>
                                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Author</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 text-gray-500 text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-medium">{date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="font-medium">Read Time</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            {image && (
                                <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 group">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/800x400?text=Image+Not+Found';
                                        }}
                                    />
                                </div>
                            )}

                            {/* Content Rendering */}
                            <div className="prose prose-lg prose-slate max-w-none 
                                prose-headings:text-slate-900 prose-headings:font-bold 
                                prose-a:text-orange-600 hover:prose-a:text-orange-700 
                                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                                prose-p:leading-relaxed prose-p:text-slate-600
                                prose-li:text-slate-600 prose-strong:text-slate-900 blog-content-area
                                [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl">

                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        </article>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 h-fit mb-12">
                            {/* We use the real contact form component here */}
                            <div className="pointer-events-none opacity-90">
                                {/* Disabled pointer events to prevent accidental submission ensuring preview functionality */}
                                <BlogContactForm slug={id} isPreview={true} />
                            </div>
                            <div className="mt-4 text-center text-xs text-gray-400">
                                (Form disabled in preview)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
