import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { blogPosts as localPosts } from '@/lib/blogData';
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
import SapMmCourseCompleteContent from '@/components/blog/SapMmCourseCompleteContent';
import HowSapAribaPoweringContent from '@/components/blog/HowSapAribaPoweringContent';
import TopTenAbapCloudToolsContent from '@/components/blog/TopTenAbapCloudToolsContent';
import HowSapFieldglassTransformingContent from '@/components/blog/HowSapFieldglassTransformingContent';

import MtoAndStoProcessContent from '@/components/blog/MtoAndStoProcessContent';
import MasterSapAribaIndustryContent from '@/components/blog/MasterSapAribaIndustryContent';
import SapTrmComplementaryContent from '@/components/blog/SapTrmComplementaryContent';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

// Blog hero images mapping
const blogHeroImages: Record<string, string> = {
    'sap-ariba-sourcing-configuration': '/images/sap-ariba-sourcing.webp',


    'sap-fico-cash-journal-configuration': '/images/step-by-step-cash-journal-sap-fico.webp',
    'sap-tcodes-list-pdf': '/images/sap-tcodes-list-hero.webp',
    'sap-sd-process-flow': '/images/sap-sd-workflow.webp',
    'sap-s4hana-mm-career-opportunities': '/images/sap-s4hana-mm.webp',
    'sap-ariba-supplier-login-tutorial': '/images/sap-ariba-supplier-login.webp',
    'sap-fieldglass-vs-traditional-vms': '/images/sap-fieldglass-vs-vms.webp',
    'sap-cpi-interview-questions': '/images/sap-cpi-interview.webp',
    'top-10-sap-c4c-technical-scenarios': '/images/sap-c4c-technical.webp',
    'sap-training-institutes': '/images/sap-training-institutes.webp',
    'sap-mm-course-complete-guide': '/images/blog/master-sap-mm-materials-management.webp',
    'how-sap-ariba-is-powering-intelligent-spend-management': '/images/blog/sap-ariba-spend-management.webp',
    'top-ten-tools-techniques-for-efficient-abap-on-cloud-programming': '/images/blog/top-10-tools-abap-cloud.webp',
    'how-sap-fieldglass-transforming-global-contingent-workforce-market': '/images/blog/sap-fieldglass-transformation.webp',

    'mto-and-sto-process-in-sap': '/images/blog/mto-sto-process.webp',
    'master-sap-ariba-with-industry-leading-online-training': '/images/blog/master-sap-ariba.webp',
    'sap-trm-complementary-technologies': '/images/blog/sap-trm-complementary.webp',
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

    // Fetch all posts for sidebar (related and recent)
    const { data: allPosts } = await supabase
        .from('blog_posts')
        .select('id, title, category, date, image')
        .order('date', { ascending: false });

    const mergedPosts = allPosts || localPosts;
    const recentPosts = mergedPosts.filter((p: any) => p.id !== slug).slice(0, 5);
    const relatedPosts = mergedPosts.filter((p: any) => p.id !== slug && p.category === post.category).slice(0, 3);

    // Calculate category counts
    const categoryCounts: Record<string, number> = {};
    mergedPosts.forEach((p: any) => {
        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });
    const categories = Object.entries(categoryCounts).map(([name, count]) => ({ name, count }));

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Breadcrumb Section */}
            <div className="bg-white border-b border-gray-100 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center text-sm font-medium text-gray-500 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <span className="mx-2 text-gray-400">›</span>
                        <Link href="/blog" className="hover:text-orange-500 transition-colors">Blogs</Link>
                        <span className="mx-2 text-gray-400">›</span>
                        <span className="text-gray-900 truncate max-w-[200px] sm:max-w-md">{post.title}</span>
                    </nav>
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                        {post.title}
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
                                        {post.author?.[0] || 'E'}
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-bold">{post.author || 'ERPVITS Expert'}</div>
                                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Author</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 text-gray-500 text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-medium">{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="font-medium">8 min read</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            {(blogHeroImages[slug] || post.image) && (
                                <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 group">
                                    <img
                                        src={blogHeroImages[slug] || post.image}
                                        alt={post.title}
                                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                </div>
                            )}

                            {/* Content Component Mapping */}
                            <div className="prose prose-lg prose-slate max-w-none 
                                prose-headings:text-slate-900 prose-headings:font-bold 
                                prose-a:text-orange-600 hover:prose-a:text-orange-700 
                                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                                prose-p:leading-relaxed prose-p:text-slate-600
                                prose-li:text-slate-600 prose-strong:text-slate-900 blog-content-area">

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
                                {slug === 'sap-mm-course-complete-guide' && <SapMmCourseCompleteContent />}
                                {slug === 'how-sap-ariba-is-powering-intelligent-spend-management' && <HowSapAribaPoweringContent />}
                                {slug === 'top-ten-tools-techniques-for-efficient-abap-on-cloud-programming' && <TopTenAbapCloudToolsContent />}
                                {slug === 'how-sap-fieldglass-transforming-global-contingent-workforce-market' && <HowSapFieldglassTransformingContent />}

                                {slug === 'mto-and-sto-process-in-sap' && <MtoAndStoProcessContent />}
                                {slug === 'master-sap-ariba-with-industry-leading-online-training' && <MasterSapAribaIndustryContent />}
                                {slug === 'sap-trm-complementary-technologies' && <SapTrmComplementaryContent />}

                                {![
                                    'sap-tcodes-list-pdf', 'sap-sd-process-flow', 'sap-fico-cash-journal-configuration',
                                    'sap-s4hana-mm-career-opportunities', 'high-paying-sap-fico-jobs', 'sap-ariba-supplier-login-tutorial',
                                    'sap-fieldglass-vs-traditional-vms', 'sap-cpi-interview-questions', 'top-10-sap-c4c-technical-scenarios',
                                    'top-7-sap-training-institutes', 'sap-ariba-sourcing-configuration', 'sap-mm-course-complete-guide',
                                    'how-sap-ariba-is-powering-intelligent-spend-management', 'top-ten-tools-techniques-for-efficient-abap-on-cloud-programming',

                                    'how-sap-fieldglass-transforming-global-contingent-workforce-market',
                                    'mto-and-sto-process-in-sap', 'master-sap-ariba-with-industry-leading-online-training',
                                    'sap-trm-complementary-technologies'
                                ].includes(slug) && (
                                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                    )}
                            </div>
                        </article>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-4 space-y-12">



                        {/* Contact Form Card */}
                        <div className="sticky top-24">
                            <BlogContactForm slug={slug} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

