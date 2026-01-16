import { CheckCircle, Globe, Users, Award } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { fetchPageMetadata, fetchPageSchema } from '@/lib/metadata';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    return fetchPageMetadata('/about');
}

const DEFAULT_HERO = {
    title: "About ERPVITS",
    description: "We are a global leader in SAP training, dedicated to transforming careers through expert-led education and real-world project experience."
};

const DEFAULT_MISSION = {
    title: "Our Mission",
    description: "At ERPVITS, our mission is to bridging the gap between theoretical knowledge and industry demands. We believe that true learning happens through doing, which is why our curriculum is centered around hands-on projects and real-time scenarios.",
    secondary_description: "With over a decade of experience, we have helped thousands of professionals and students master SAP technologies and secure high-paying roles in top multinational corporations.",
    stats: [
        { val: "6000+", label: "Students Trained" },
        { val: "95%", label: "Placement Rate" },
        { val: "20+", label: "Countries Reach" },
        { val: "500+", label: "Hiring Partners" }
    ]
};

export default async function AboutPage() {
    const schemaMarkup = await fetchPageSchema('/about');
    let hero = DEFAULT_HERO;
    let mission = DEFAULT_MISSION;

    try {
        const { data: heroData } = await supabase
            .from('site_content')
            .select('content')
            .eq('page_path', '/about')
            .eq('section_key', 'hero')
            .single();
        if (heroData) hero = heroData.content;

        const { data: missionData } = await supabase
            .from('site_content')
            .select('content')
            .eq('page_path', '/about')
            .eq('section_key', 'mission')
            .single();
        if (missionData) mission = missionData.content;
    } catch (err) {
        console.error('Error fetching About content:', err);
    }

    return (
        <div className="bg-white min-h-screen">
            {schemaMarkup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: schemaMarkup }}
                />
            )}
            {/* Hero */}
            {/* Hero */}
            <div className="bg-slate-50 text-slate-900 py-20 lg:py-28 relative overflow-hidden border-b border-slate-200">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100 opacity-50 transform -skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">{hero.title}</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {hero.description}
                    </p>
                </div>
            </div>

            {/* Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{mission.title}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {mission.description}
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {mission.secondary_description}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {mission.stats.map((stat: any, i: number) => {
                                const icons = [<Users key="u" />, <Award key="a" />, <Globe key="g" />, <CheckCircle key="c" />];
                                return (
                                    <div key={i} className="bg-blue-50 p-6 rounded-xl text-center">
                                        <div className="h-10 w-10 text-blue-600 mx-auto mb-4">
                                            {icons[i] || <CheckCircle />}
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 mb-1">{stat.val}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why We Are Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
                            <p className="text-gray-600">
                                Learn from certified SAP professionals with 15+ years of industry experience.
                                Our trainers don't just teach; they mentor.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Projects</h3>
                            <p className="text-gray-600">
                                Gain practical experience by working on live projects that mimic real-world business scenarios.
                                Build a portfolio that employers trust.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Career Support</h3>
                            <p className="text-gray-600">
                                From resume building to mock interviews, we provide end-to-end placement assistance
                                to help you land your dream job.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
