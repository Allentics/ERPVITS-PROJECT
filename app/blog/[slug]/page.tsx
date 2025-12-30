import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { data: post } = await supabase
        .from('blog_posts')
        .select('title, description')
        .eq('id', slug)
        .single();

    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | ERPVITS Blog`,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const { data: post } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', slug)
        .single();

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Simple Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="text-sm font-medium flex items-center gap-2">
                        <Link href="/" className="text-gray-500 hover:text-orange-500 transition-colors">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/blog" className="text-gray-500 hover:text-orange-500 transition-colors">Blog</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 truncate max-w-[200px] sm:max-w-md">{post.title}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <article className="prose prose-lg prose-slate max-w-none prose-headings:text-blue-900 prose-headings:font-bold prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-img:rounded-2xl prose-img:shadow-lg">
                            <header className="mb-12">
                                <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                                    {post.category}
                                </span>
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
                                    {post.title}
                                </h1>
                                <div className="flex items-center gap-6 text-gray-500 text-sm border-y border-gray-100 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                            {post.author?.[0]}
                                        </div>
                                        <span className="font-medium text-gray-900">{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                        8 min read
                                    </div>
                                </div>
                            </header>

                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlogContactForm slug={slug} />

                        {/* Related Courses or Categories can go here later */}
                    </div>
                </div>
            </div>
        </div>
    );
}
