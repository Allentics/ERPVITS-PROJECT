import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import BlogContactForm from '@/components/blog/BlogContactForm';
import SapTCodesContent from '@/components/blog/SapTCodesContent';
import SapSdProcessFlowContent from '@/components/blog/SapSdProcessFlowContent';
import SapFicoCashJournalContent from '@/components/blog/SapFicoCashJournalContent';
import SapS4HanaMmCareerContent from '@/components/blog/SapS4HanaMmCareerContent';
import HighPayingSapFicoJobsContent from '@/components/blog/HighPayingSapFicoJobsContent';
import SapAribaSupplierLoginContent from '@/components/blog/SapAribaSupplierLoginContent';
import SapFieldglassVmsContent from '@/components/blog/SapFieldglassVmsContent';
import SapCpiInterviewQuestionsContent from '@/components/blog/SapCpiInterviewQuestionsContent';
import SapC4cTechnicalScenariosContent from '@/components/blog/SapC4cTechnicalScenariosContent';
import Top7SapTrainingInstitutesContent from '@/components/blog/Top7SapTrainingInstitutesContent';
import SapAribaSourcingConfigContent from '@/components/blog/SapAribaSourcingConfigContent';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

// Blog hero images mapping
const blogHeroImages: Record<string, string> = {
    'sap-ariba-sourcing-configuration': '/images/sap-ariba-supplier-login-guide.png',
    'sap-fico-cash-journal-configuration': '/images/step-by-step-cash-journal-sap-fico.webp',
    'sap-tcodes-list-pdf': '/images/sap-tcodes-list-hero.webp',
    'sap-sd-process-flow': '/images/sap-sd-workflow.webp',
    'sap-s4hana-mm-career-opportunities': '/images/sap-s4hana-mm.webp',
    'sap-ariba-supplier-login-tutorial': '/images/sap-ariba-supplier-login.webp',
    'sap-fieldglass-vs-traditional-vms': '/images/sap-fieldglass-vs-vms.webp',
    'sap-cpi-interview-questions': '/images/sap-cpi-interview.webp',
    'top-10-sap-c4c-technical-scenarios': '/images/sap-c4c-technical.webp',
    'high-paying-sap-fico-jobs': '/images/sap-fico-jobs.webp',
    'top-7-sap-training-institutes': '/images/sap-training-institutes.webp',
};

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
        <div className="bg-gray-50 min-h-screen">
            {/* Compact Hero Section - Just Breadcrumb */}
            <div className="bg-slate-900 relative overflow-hidden py-6">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <nav className="text-sm font-medium flex items-center gap-2 text-slate-400">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-slate-600">/</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span className="text-slate-600">/</span>
                        <span className="text-slate-300 truncate max-w-[200px] sm:max-w-md">{post.title}</span>
                    </nav>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Card */}
                    <div className="lg:col-span-2">
                        <article className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 lg:p-12">
                            {/* Category Badge */}
                            <span className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                {post.category}
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                                {post.title}
                            </h1>

                            {/* Author/Meta */}
                            <div className="flex items-center gap-6 text-slate-500 text-sm border-b border-slate-200 pb-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                                        {post.author?.[0]}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">{post.author}</div>
                                        <div className="text-xs text-slate-400">Author</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    <span>8 min read</span>
                                </div>
                            </div>

                            {/* Hero Image */}
                            {blogHeroImages[slug] && (
                                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                                    <img
                                        src={blogHeroImages[slug]}
                                        alt={post.title}
                                        className="w-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Blog Content */}
                            {slug === 'sap-tcodes-list-pdf' && <SapTCodesContent />}
                            {slug === 'sap-sd-process-flow' && <SapSdProcessFlowContent />}
                            {slug === 'sap-fico-cash-journal-configuration' && <SapFicoCashJournalContent />}
                            {slug === 'sap-s4hana-mm-career-opportunities' && <SapS4HanaMmCareerContent />}
                            {slug === 'high-paying-sap-fico-jobs' && <HighPayingSapFicoJobsContent />}
                            {slug === 'sap-ariba-supplier-login-tutorial' && <SapAribaSupplierLoginContent />}
                            {slug === 'sap-fieldglass-vs-traditional-vms' && <SapFieldglassVmsContent />}
                            {slug === 'sap-cpi-interview-questions' && <SapCpiInterviewQuestionsContent />}
                            {slug === 'top-10-sap-c4c-technical-scenarios' && <SapC4cTechnicalScenariosContent />}
                            {slug === 'top-7-sap-training-institutes' && <Top7SapTrainingInstitutesContent />}
                            {slug === 'sap-ariba-sourcing-configuration' && <SapAribaSourcingConfigContent />}

                            {/* Fallback to database content for any other blogs */}
                            {![
                                'sap-tcodes-list-pdf',
                                'sap-sd-process-flow',
                                'sap-fico-cash-journal-configuration',
                                'sap-s4hana-mm-career-opportunities',
                                'high-paying-sap-fico-jobs',
                                'sap-ariba-supplier-login-tutorial',
                                'sap-fieldglass-vs-traditional-vms',
                                'sap-cpi-interview-questions',
                                'top-10-sap-c4c-technical-scenarios',
                                'top-7-sap-training-institutes',
                                'sap-ariba-sourcing-configuration'
                            ].includes(slug) && (
                                    <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:text-slate-900 prose-headings:font-bold 
                                    prose-a:text-orange-600 hover:prose-a:text-orange-700 
                                    prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
                                    prose-p:leading-relaxed prose-p:text-slate-600
                                    prose-li:text-slate-600 blog-content"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                )}
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="sticky top-24">
                            <BlogContactForm slug={slug} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
