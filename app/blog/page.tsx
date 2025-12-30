import Link from 'next/link';
import { supabase } from '@/lib/supabase';

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const monthShort = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    return { day, monthShort };
}

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    const { data: blogPosts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="text-sm text-gray-500 flex items-center">
                    <Link href="/" className="hover:text-orange-500">Home</Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-900">Blogs</span>
                </nav>
            </div>

            {/* Header Section */}
            <div className="bg-[#FFFBF5] py-16 px-4 sm:px-6 lg:px-8 text-center mb-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Master <span className="text-orange-500">SAP</span> With Expert-Led Training
                    </h1>
                    <p className="text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Accelerate your career with comprehensive SAP training courses, hands-on projects, and industry-recognized certifications from experienced professionals.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-24 mb-10 text-center">
                        <div>
                            <div className="text-3xl font-bold text-gray-900">5000+</div>
                            <div className="text-sm text-gray-500 mt-1">Students Trained</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900">95%</div>
                            <div className="text-sm text-gray-500 mt-1">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900">50+</div>
                            <div className="text-sm text-gray-500 mt-1">Partner Companies</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="space-y-8">
                    {blogPosts?.map((post: any) => {
                        const { day, monthShort } = formatDate(post.date);
                        return (
                            <div key={post.id} className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0">
                                {/* Date Section */}
                                <div className="flex-shrink-0 text-center">
                                    <div className="text-5xl font-bold text-orange-500">{day}</div>
                                    <div className="text-sm text-gray-500 uppercase mt-1">
                                        {monthShort}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-grow">
                                    <h2 className="text-2xl font-bold text-blue-900 mb-3 hover:text-blue-700 transition-colors">
                                        <Link href={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {post.description}
                                    </p>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="inline-block border border-gray-400 text-gray-700 text-sm px-6 py-2 rounded hover:bg-gray-50 transition-colors uppercase tracking-wide"
                                    >
                                        View Blog
                                    </Link>
                                </div>


                            </div>
                        );
                    })}
                </div>


            </div>
        </div>
    )
}
