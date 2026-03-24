import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { blogPosts as localPosts } from '@/lib/blogData';
import BlogContactForm from '@/components/blog/BlogContactForm';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Suspense } from 'react';
import InteractiveBlogContent from '@/components/blog/InteractiveBlogContent';
import '../../blogs.css';

// ISR: Cache blog posts for 60 seconds
export const revalidate = 60;

// Lazy-load all legacy blog components — only the one matching the slug is ever loaded
const SapTCodesContent = dynamic(() => import('@/components/blog/SapTCodesContent'));
const SapSdProcessFlowContent = dynamic(() => import('@/components/blog/SapSdProcessFlowContent'));
const SapFicoCashJournalContent = dynamic(() => import('@/components/blog/SapFicoCashJournalContent'));
const SapS4HanaMmCareerContent = dynamic(() => import('@/components/blog/SapS4HanaMmCareerContent'));
const HighPayingSapFicoJobsContent = dynamic(() => import('@/components/blog/HighPayingSapFicoJobsContent'));
const SapAribaSupplierLoginContent = dynamic(() => import('@/components/blog/SapAribaSupplierLoginContent'));
const SapFieldglassVmsContent = dynamic(() => import('@/components/blog/SapFieldglassVmsContent'));
const SapCpiInterviewQuestionsContent = dynamic(() => import('@/components/blog/SapCpiInterviewQuestionsContent'));
const SapC4cTechnicalScenariosContent = dynamic(() => import('@/components/blog/SapC4cTechnicalScenariosContent'));
const Top7SapTrainingInstitutesContent = dynamic(() => import('@/components/blog/Top7SapTrainingInstitutesContent'));
const SapAribaSourcingConfigContent = dynamic(() => import('@/components/blog/SapAribaSourcingConfigContent'));
const SapMmCourseCompleteContent = dynamic(() => import('@/components/blog/SapMmCourseCompleteContent'));
const HowSapAribaPoweringContent = dynamic(() => import('@/components/blog/HowSapAribaPoweringContent'));
const TopTenAbapCloudToolsContent = dynamic(() => import('@/components/blog/TopTenAbapCloudToolsContent'));
const HowSapFieldglassTransformingContent = dynamic(() => import('@/components/blog/HowSapFieldglassTransformingContent'));
const SapSdShippingPointContent = dynamic(() => import('@/components/blog/SapSdShippingPointContent'));
const SapTrainingMalaysiaContent = dynamic(() => import('@/components/blog/SapTrainingMalaysiaContent'));
const SapHanaMasterclassContent = dynamic(() => import('@/components/blog/SapHanaMasterclassContent'));
const AribaGuidedBuyingContent = dynamic(() => import('@/components/blog/AribaGuidedBuyingContent'));
const MtoAndStoProcessContent = dynamic(() => import('@/components/blog/MtoAndStoProcessContent'));
const MasterSapAribaIndustryContent = dynamic(() => import('@/components/blog/MasterSapAribaIndustryContent'));
const SapTrmMasterDataContent = dynamic(() => import('@/components/blog/SapTrmMasterDataContent'));
const SapTrmComplementaryContent = dynamic(() => import('@/components/blog/SapTrmComplementaryContent'));
const SapFieldglassLoginGuideContent = dynamic(() => import('@/components/blog/SapFieldglassLoginGuideContent'));
const SapConsultantSalaryGuideContent = dynamic(() => import('@/components/blog/SapConsultantSalaryGuideContent'));
const SapFioriAppsLibraryContent = dynamic(() => import('@/components/blog/SapFioriAppsLibraryContent'));
const SapBtpCockpitContent = dynamic(() => import('@/components/blog/SapBtpCockpitContent'));


// Blog hero images mapping
const blogHeroImages: Record<string, string> = {
    // Legacy / Shorter Slugs
    'sap-fieldglass-jobs': '/images/sap-fieldglass-jobs-2026.png',
    'what-is-ppds-in-sap-apo': '/images/sap-apo-ppds.png',
    'sap-ariba-spend-management': '/images/sap-ariba-spend-management.webp',
    'top-ten-abap-cloud-tools': '/images/top-10-tools-abap-cloud.webp',
    'master-sap-ariba': '/images/master-sap-ariba.webp',
    'sap-mm-course': '/images/master-sap-mm-materials-management.webp',
    'mto-sto-process': '/images/mto-sto-process.webp',
    'sap-sd-shipping-point': '/images/sap-sd-shipping-point.png',
    'sap-finance-career-path': '/images/sap-finance-career-guide.png',
    'sap-modules-list': '/images/sap-modules-guide.png',
    'sap-ariba-interview-questions': '/images/sap-ariba-interview-questions.png',
    'sap-courses-germany': '/images/sap-courses-germany.png',
    'sap-fieldglass-login-guide': '/images/sap-fieldglass-login-guide.png',

    // Full / Long Slugs
    'sap-ariba-sourcing-configuration': '/images/sap-ariba-sourcing-config.png',
    'sap-fico-cash-journal-configuration': '/assets/sap-fico-cash-journal-header.png',
    'sap-tcodes-list-pdf': '/images/sap-tcodes-list-hero.webp',
    'sap-sd-process-flow': '/images/sap-sd-workflow.webp',
    'sap-s4hana-mm-career-opportunities': '/images/sap-s4hana-mm.webp',
    'sap-ariba-supplier-login-tutorial': '/images/sap-ariba-supplier-login.webp',
    'sap-fieldglass-vs-traditional-vms': '/images/sap-fieldglass-vs-vms.webp',
    'sap-cpi-interview-questions': '/images/sap-cpi-interview.webp',
    'top-10-sap-c4c-technical-scenarios': '/images/sap-c4c-technical.webp',
    'top-7-sap-training-institutes': '/images/sap-training-institutes.webp',
    'sap-mm-course-complete-guide': '/images/master-sap-mm-materials-management.webp',
    'how-sap-ariba-is-powering-intelligent-spend-management': '/images/sap-ariba-spend-management.webp',
    'top-ten-tools-techniques-for-efficient-abap-on-cloud-programming': '/images/top-10-tools-abap-cloud.webp',
    'how-sap-fieldglass-transforming-global-contingent-workforce-market': '/images/sap-fieldglass-transformation.webp',
    'mto-and-sto-process-in-sap': '/images/mto-sto-process.webp',
    'master-sap-ariba-with-industry-leading-online-training': '/images/master-sap-ariba.webp',
    'sap-trm-master-data-essentials': '/images/sap-trm-master-data.webp',
    'sap-trm-complementary-technologies': '/images/sap-trm-complementary.webp',
    'ultimate-guide-to-sap-fieldglass-login-access-setup': '/images/sap-fieldglass-login-guide.png',
    'how-to-get-an-sap-fieldglass-job-in-2026': '/images/sap-fieldglass-jobs-2026.png',
    'what-is-ppds-in-sap-apo-features-benefits-real-time-business-scenarios': '/images/sap-apo-ppds.png',
    'sap-ibp-certification-questions': '/images/ERPVITS - SAP IBP Infographic.webp',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Resolve image path helper for metadata (Internal to generateMetadata to avoid closure issues)
    const resolveMetadataImage = (img: string | null | undefined) => {
        const SITE_URL = 'https://www.erpvits.com';

        // 1. If explicit image provided by DB, use it
        if (img) {
            if (img.startsWith('http')) return img;
            const rawFileName = img.split('/').pop() || '';
            const fileName = rawFileName.toLowerCase().replace(/\s+/g, '-').replace(/_+/g, '-');
            return `${SITE_URL}/images/blogs/${fileName}`;
        }

        // 2. Check hardcoded mapping
        if (blogHeroImages[slug]) {
            return `${SITE_URL}${blogHeroImages[slug]}`;
        }

        // 3. Last resort fallback (Global High-Res Logo for LinkedIn)
        return `${SITE_URL}/logo.webp`;
    };

    const { data: post } = await supabase
        .from('blog_posts')
        .select('title, description, meta_title, meta_description, image')
        .eq('id', slug)
        .single();

    if (!post) {
        // Fallback to local posts if DB post is missing
        const local = localPosts.find((p: any) => p.id === slug);
        if (!local) return { title: 'Post Not Found' };

        const title = local.title;
        const description = local.description;
        const imageUrl = resolveMetadataImage(local.image);

        return {
            title: `${title} | ERPVITS Blog`,
            description: description,
            openGraph: {
                title: `${title} | ERPVITS Blog`,
                description: description,
                url: `https://www.erpvits.com/blog/${slug}/`,
                type: 'article',
                images: [{ url: imageUrl, width: 1200, height: 630 }],
            },
            twitter: {
                card: 'summary_large_image',
                title: `${title} | ERPVITS Blog`,
                description: description,
                images: [imageUrl],
            },
            alternates: {
                canonical: `https://www.erpvits.com/blog/${slug}/`,
            },
        };
    }

    const title = post.meta_title || post.title;
    const description = post.meta_description || post.description;
    const imageUrl = resolveMetadataImage(post.image);

    return {
        title: `${title} | ERPVITS Blog`,
        description: description,
        openGraph: {
            title: `${title} | ERPVITS Blog`,
            description: description,
            url: `https://www.erpvits.com/blog/${slug}/`,
            type: 'article',
            images: [{ url: imageUrl, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ERPVITS Blog`,
            description: description,
            images: [imageUrl],
        },
        alternates: {
            canonical: `https://www.erpvits.com/blog/${slug}/`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Run both DB queries in parallel instead of sequentially
    const [{ data: dbPost }, { data: allPosts }] = await Promise.all([
        supabase.from('blog_posts').select('*').eq('id', slug).single(),
        supabase.from('blog_posts').select('id, title, category, date, image').order('date', { ascending: false }),
    ]);

    let post = null;
    const localPost = localPosts.find((p: any) => p.id === slug);

    if (dbPost) {
        const validDbProps = Object.fromEntries(Object.entries(dbPost).filter(([_, v]) => v !== null && v !== ''));
        post = localPost ? { ...localPost, ...validDbProps } : dbPost;
    } else {
        post = localPost;
    }

    // Merge DB posts with local posts, prioritising DB posts
    const idMap = new Map();
    const titleMap = new Map();

    if (allPosts) {
        allPosts.forEach((p: any) => {
            idMap.set(p.id, p);
            if (p.title) titleMap.set(p.title.toLowerCase().trim(), p.id);
        });
    }

    localPosts.forEach(p => {
        const idConflict = idMap.has(p.id);
        const titleKey = p.title.toLowerCase().trim();
        const titleConflict = titleMap.has(titleKey);

        if (!idConflict && !titleConflict) {
            idMap.set(p.id, p);
            titleMap.set(titleKey, p.id);
        } else if (idConflict) {
            const dbP = idMap.get(p.id);
            const validDbProps = Object.fromEntries(Object.entries(dbP).filter(([_, v]) => v !== null && v !== ''));
            idMap.set(p.id, { ...p, ...validDbProps });
        }
    });

    const resolveImagePath = (img: string | null | undefined) => {
        if (!img) return '/images/logo.webp';
        if (img.startsWith('http')) return img;

        // Internal paths: extract filename, normalize to lowercase kebab-case, and use /images/blogs/ folder
        const rawFileName = img.split('/').pop() || '';
        const fileName = rawFileName
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/_+/g, '-');
        return `/images/blogs/${fileName}`;
    };

    const mergedPosts = Array.from(idMap.values()).map((p: any) => ({
        ...p,
        image: resolveImagePath(p.image)
    }));

    if (post) {
        post.image = resolveImagePath(post.image);
    }

    if (!post) {
        notFound();
    }

    const recentPosts = mergedPosts.filter((p: any) => p.id !== slug).slice(0, 5);
    const relatedPosts = mergedPosts.filter((p: any) => p.id !== slug && p.category === post.category).slice(0, 4);

    // Calculate category counts
    const categoryCounts: Record<string, number> = {};
    mergedPosts.forEach((p: any) => {
        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });
    const categories = Object.entries(categoryCounts).map(([name, count]) => ({ name, count }));

    const useDbContent = post.content && post.content.length > 50;

    // Check if it's one of the legacy component paths
    // Check if it's one of the legacy component paths
    const LegacyComponent = (() => {
        if (useDbContent) return null; // Prioritize DB content over legacy components

        switch (slug) {
            case 'sap-tcodes-list-pdf': return SapTCodesContent;
            case 'sap-sd-process-flow': return SapSdProcessFlowContent;
            case 'sap-fico-cash-journal-configuration': return SapFicoCashJournalContent;
            case 'sap-s4hana-mm-career-opportunities': return SapS4HanaMmCareerContent;
            case 'high-paying-sap-fico-jobs': return HighPayingSapFicoJobsContent;
            case 'sap-ariba-supplier-login-tutorial': return SapAribaSupplierLoginContent;
            case 'sap-fieldglass-vs-traditional-vms': return SapFieldglassVmsContent;
            case 'sap-cpi-interview-questions': return SapCpiInterviewQuestionsContent;
            case 'top-10-sap-c4c-technical-scenarios': return SapC4cTechnicalScenariosContent;
            case 'top-7-sap-training-institutes': return Top7SapTrainingInstitutesContent;
            case 'sap-ariba-sourcing-configuration': return SapAribaSourcingConfigContent;
            case 'sap-mm-course-complete-guide': return SapMmCourseCompleteContent;
            case 'how-sap-ariba-is-powering-intelligent-spend-management': return HowSapAribaPoweringContent;
            case 'top-ten-tools-techniques-for-efficient-abap-on-cloud-programming': return TopTenAbapCloudToolsContent;
            case 'how-sap-fieldglass-transforming-global-contingent-workforce-market': return HowSapFieldglassTransformingContent;
            case 'mto-and-sto-process-in-sap': return MtoAndStoProcessContent;
            case 'master-sap-ariba-with-industry-leading-online-training': return MasterSapAribaIndustryContent;
            case 'sap-trm-master-data-essentials': return SapTrmMasterDataContent;
            case 'sap-trm-complementary-technologies': return SapTrmComplementaryContent;
            case 'ultimate-guide-to-sap-fieldglass-login-access-setup': return SapFieldglassLoginGuideContent;
            case 'sap-consultant-salary-guide-2026': return SapConsultantSalaryGuideContent;
            case 'sap-fiori-apps-library-explained': return SapFioriAppsLibraryContent;
            case 'sap-btp-cockpit-guide': return SapBtpCockpitContent;
            case 'sap-sd-shipping-point-determination': return SapSdShippingPointContent;
            case 'sap-training-malaysia-2026': return SapTrainingMalaysiaContent;
            case 'sap-hana-course-masterclass': return SapHanaMasterclassContent;
            case 'ariba-guided-buying-guide': return AribaGuidedBuyingContent;
            default: return null;
        }
    })();

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            {/* Inject Schema Markup */}
            {post.schema_markup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: post.schema_markup }}
                />
            )}

            {/* Header / Breadcrumb Section */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <span className="mx-2 text-gray-400 dark:text-gray-600">›</span>
                        <Link href="/blogs/" className="hover:text-orange-500 transition-colors">Blogs</Link>
                        <span className="mx-2 text-gray-400 dark:text-gray-600">›</span>
                        <span className="text-gray-900 dark:text-gray-100 truncate max-w-[200px] sm:max-w-md">{post.title}</span>
                    </nav>
                    <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">
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
                            <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-gray-100 dark:border-gray-700 mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xl shadow-inner">
                                        {post.author?.[0] || 'E'}
                                    </div>
                                    <div>
                                        <div className="text-gray-900 dark:text-gray-100 font-bold">{post.author || 'ERPVITS Expert'}</div>
                                        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">Author</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 text-gray-500 dark:text-gray-400 text-sm">
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
                                <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 group bg-gray-50">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={blogHeroImages[slug] || post.image}
                                        alt={post.title}
                                        className="w-full h-auto max-h-[500px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                </div>
                            )}

                            {/* Content Rendering */}
                            <div className="prose prose-lg prose-slate max-w-none 
                                prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-headings:font-bold 
                                [&_a]:!text-[#F58220] [&_a_strong]:!text-[#F58220] [&_a]:!font-semibold [&_a]:!no-underline hover:[&_a]:!text-[#e57a1e] hover:[&_a_strong]:!text-[#e57a1e]
                                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                                prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-300
                                prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 blog-content-area
                                [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl
                                dark:prose-invert">

                                {LegacyComponent ? (
                                    <LegacyComponent />
                                ) : (
                                    <InteractiveBlogContent content={post.content} title={post.title} />
                                )}
                            </div>
                        </article>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* All Categories Section */}
                        {categories && categories.length > 0 && (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-gray-700 p-8">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-6 relative inline-block">
                                    ALL CATEGORIES
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
                                </h3>
                                <ul className="space-y-4 mt-4">
                                    {categories.slice(0, 8).map((category: any) => (
                                        <li key={category.name} className="flex justify-between items-center border-b border-slate-50 dark:border-gray-700 last:border-0 pb-3 last:pb-0">
                                            <Link
                                                href={`/blogs/?category=${encodeURIComponent(category.name)}`}
                                                className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors"
                                            >
                                                {category.name}
                                            </Link>
                                            <span className="bg-slate-100 dark:bg-gray-700 text-slate-500 dark:text-slate-300 text-xs px-2 py-1 rounded-full font-bold">
                                                {category.count}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* RELATED BLOGS Section */}
                        {relatedPosts && relatedPosts.length > 0 && (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-gray-700 p-8">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-6 relative inline-block">
                                    RELATED BLOGS
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
                                </h3>
                                <ul className="space-y-4 mt-4">
                                    {relatedPosts.map((related: any) => (
                                        <li key={related.id} className="border-b border-slate-50 dark:border-gray-700 last:border-0 pb-3 last:pb-0">
                                            <Link
                                                href={`/blog/${related.id}/`}
                                                className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors leading-tight block"
                                            >
                                                {related.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="sticky top-32">
                            <BlogContactForm slug={slug} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
