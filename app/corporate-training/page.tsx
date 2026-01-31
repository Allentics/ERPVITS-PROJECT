
import Link from 'next/link';
import { Briefcase, BarChart, Users, Target } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { fetchPageMetadata, fetchPageSchema } from '@/lib/metadata';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    return fetchPageMetadata('/corporate-training');
}

const DEFAULT_HERO = {
    title: "Empower Your Workforce with SAP Excellence",
    highlight: "SAP Excellence",
    description: "Customized corporate training solutions designed to upskill your teams, optimize business processes, and drive digital transformation.",
    cta: "Get a Corporate Quote"
};

const DEFAULT_OFFERINGS = {
    title: "Corporate Training Solutions",
    subtitle: "Tailored programs to meet your organization''s specific needs.",
    items: [
        {
            icon: "Briefcase",
            title: "Custom Curriculum",
            description: "Training modules designed around your industry verticals and business processes."
        },
        {
            icon: "Users",
            title: "Flexible Delivery",
            description: "On-site, virtual, or hybrid training options to suit your team''s schedule."
        },
        {
            icon: "Target",
            title: "Skill Assessment",
            description: "Pre and post-training assessments to measure ROI and skill gap closure."
        },
        {
            icon: "BarChart",
            title: "Project Mentoring",
            description: "Expert guidance on live projects to ensure successful implementation."
        }
    ]
};

const DEFAULT_CTA = {
    title: "Partner with ERPVITS",
    description: "Join hundreds of companies that trust us for their SAP training needs. Let''s discuss how we can help your team succeed.",
    primary_cta: "Contact Us",
    secondary_cta: "View Catalog"
};

const ICON_MAP: any = {
    Briefcase, BarChart, Users, Target
};

export default async function CorporateTrainingPage() {
    const schemaMarkup = await fetchPageSchema('/corporate-training');
    let hero = DEFAULT_HERO;
    let offerings = DEFAULT_OFFERINGS;
    let ctaSection = DEFAULT_CTA;

    try {
        const { data: contentData } = await supabase
            .from('site_content')
            .select('section_key, content')
            .eq('page_path', '/corporate-training');

        if (contentData) {
            const heroSection = contentData.find((s: any) => s.section_key === 'hero');
            if (heroSection) hero = heroSection.content;

            const offeringsSection = contentData.find((s: any) => s.section_key === 'offerings');
            if (offeringsSection) offerings = offeringsSection.content;

            const ctaSec = contentData.find((s: any) => s.section_key === 'cta');
            if (ctaSec) ctaSection = ctaSec.content;
        }
    } catch (err) {
        console.error('Error fetching Corporate Training content:', err);
    }

    const titleParts = hero.title.split(hero.highlight);

    return (
        <div className="bg-white min-h-screen">
            {schemaMarkup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: schemaMarkup }}
                />
            )}

            {/* Hero */}
            <div className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                            {titleParts[0]}<span className="text-blue-400">{hero.highlight}</span>{titleParts[1]}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {hero.description}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                        >
                            {hero.cta}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Offerings */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{offerings.title}</h2>
                        <p className="mt-4 text-lg text-gray-600">{offerings.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offerings.items?.map((item: any, i: number) => {
                            const Icon = ICON_MAP[item.icon] || Briefcase;
                            return (
                                <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{ctaSection.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        {ctaSection.description}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {ctaSection.primary_cta}
                        </Link>
                        <Link
                            href="/courses"
                            className="px-8 py-3 bg-white text-blue-600 font-bold border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            {ctaSection.secondary_cta}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
