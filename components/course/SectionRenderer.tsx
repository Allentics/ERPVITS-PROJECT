import React from 'react';
import Curriculum from './Curriculum';
import TargetAudience from './TargetAudience';
import Prerequisites from './Prerequisites';
import LearningOutcomes from './LearningOutcomes';
import FAQ from './FAQ';
import ContentWithImage from './ContentWithImage';
import WhatsIncluded from './WhatsIncluded';
import DetailedCurriculum from './DetailedCurriculum';
import DetailedPrerequisites from './DetailedPrerequisites';
import DetailedTargetAudience from './DetailedTargetAudience';
import DetailedLearningOutcomes from './DetailedLearningOutcomes';
import RealWorldScenarios from './RealWorldScenarios';
import DetailedCertification from './DetailedCertification';
import DetailedCareerOpportunities from './DetailedCareerOpportunities';
import DetailedCareerRoadmap from './DetailedCareerRoadmap';
import DetailedPostTrainingJourney from './DetailedPostTrainingJourney';
import DetailedTestimonials from './DetailedTestimonials';
import DetailedUpcomingBatches from './DetailedUpcomingBatches';
import DetailedFAQ from './DetailedFAQ';
import DetailedDemoBooking from './DetailedDemoBooking';
import DetailedCompanies from './DetailedCompanies';
import {
    Quote, CheckCircle2, UserCheck, Laptop, Briefcase, Clock,
    Award, Globe, BookOpen, Video, TrendingUp, Headphones,
    Users, Layers
} from 'lucide-react';

// specific icon mapping based on title keywords
const getIconForTitle = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('instructor') || t.includes('expert')) return UserCheck;
    if (t.includes('hands-on') || t.includes('practical')) return Laptop;
    if (t.includes('job') || t.includes('curriculum')) return Briefcase;
    if (t.includes('flexible') || t.includes('timings')) return Clock;
    if (t.includes('certification')) return Award;
    if (t.includes('lab') || t.includes('access')) return Globe;
    if (t.includes('study') || t.includes('material')) return BookOpen;
    if (t.includes('recording')) return Video;
    if (t.includes('career')) return TrendingUp;
    if (t.includes('support')) return Headphones;
    if (t.includes('batch')) return Users;
    if (t.includes('project')) return Layers;
    return CheckCircle2;
};

// Defined locally to avoid circular dependency
export function DetailedFeatures({ badge, title, subtitle, items }: any) {
    const renderTitle = (t: any) => {
        if (typeof t === 'string' && t.includes("100% Hands-On")) {
            const parts = t.split("100% Hands-On");
            return (
                <>
                    {parts[0]}
                    <span className="text-orange-600">100% Hands-On</span>
                    {parts[1]}
                </>
            );
        }
        return t;
    };

    return (
        <div className="py-12 detailed-features-section">
            <div className="text-center mb-12">
                {badge && <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-5 inline-block shadow-sm">{badge}</span>}
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{renderTitle(title)}</h2>
                {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {items?.map((item: any, i: number) => {
                    const isObject = typeof item === 'object' && item !== null;
                    const ItemIcon = isObject ? getIconForTitle(item.title) : CheckCircle2;

                    return (
                        <div key={i} className="flex flex-col p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                            <div className="w-14 h-14 rounded-xl bg-orange-50 group-hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center text-orange-500 group-hover:text-white mb-6">
                                <ItemIcon className="w-7 h-7" />
                            </div>
                            <div className="flex-1">
                                {isObject ? (
                                    <>
                                        <h3 className="font-bold text-slate-900 text-xl mb-3">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-[15px]">{item.description}</p>
                                    </>
                                ) : (
                                    <p className="text-slate-700 font-medium text-lg">{item}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function RichTextSection({ title, content }: any) {
    return (
        <div className="py-8 max-w-4xl mx-auto">
            {title && <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>}
            <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="whitespace-pre-line leading-relaxed text-gray-700">
                    {content && content.split('\n').map((line: string, i: number) => {
                        // Simple bold parsing for **text**
                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                            <p key={i} className="mb-2">
                                {parts.map((part, j) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={j} className="text-slate-900">{part.slice(2, -2)}</strong>;
                                    }
                                    return part;
                                })}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export function TestimonialsSection({ title, items }: any) {
    return (
        <div className="py-12 bg-slate-50 rounded-3xl my-8">
            <div className="text-center mb-10 px-4">
                <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
                {items?.map((item: any, i: number) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                        <Quote className="w-8 h-8 text-orange-200 mb-4" />
                        <p className="text-slate-600 italic mb-6 flex-1">"{item.quote}"</p>
                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold uppercase">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                                <div className="text-xs text-slate-500">{item.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function SectionRenderer({ sections, courseName }: { sections: any[]; courseName?: string }) {
    if (!sections) return null;

    return (
        <div className="space-y-24">
            {sections.map((section, idx) => {
                switch (section.type) {
                    case 'detailed_features':
                        return <DetailedFeatures key={idx} {...section} badge={section.badge || "Key Features"} items={section.items} />;
                    case 'target_audience':
                        return <DetailedTargetAudience key={idx} items={section.items} />;
                    case 'prerequisites':
                        return <DetailedPrerequisites key={idx} items={section.items} />;
                    case 'learning_outcomes':
                        return <LearningOutcomes key={idx} title={section.title} items={section.items} />;
                    case 'curriculum':
                        return <section key={idx} id="curriculum" className="scroll-mt-32">
                            <Curriculum modules={section.modules} />
                        </section>;
                    case 'detailed_curriculum':
                        return <section key={idx} id="curriculum" className="scroll-mt-32">
                            <DetailedCurriculum modules={section.modules} title={section.title} courseName={courseName || section.courseName} />
                        </section>;
                    case 'detailed_prerequisites':
                        return <DetailedPrerequisites key={idx} items={section.items} />;
                    case 'detailed_target_audience':
                        return <DetailedTargetAudience key={idx} items={section.items} title={section.title} subtitle={section.subtitle} />;
                    case 'detailed_learning_outcomes':
                        return <DetailedLearningOutcomes key={idx} items={section.items} />;
                    case 'real_world_scenarios':
                        return <RealWorldScenarios key={idx} items={section.items} />;
                    case 'detailed_certification':
                        return <DetailedCertification key={idx} items={section.items} title={section.title} subtitle={section.subtitle} badge={section.badge} stats={section.stats} courseName={courseName || section.courseName} description={section.description || section.content} imageSrc={section.imageSrc} />;
                    case 'detailed_career_opportunities':
                        return <DetailedCareerOpportunities key={idx} items={section.items} courseName={courseName || section.courseName} />;
                    case 'detailed_companies':
                        return <DetailedCompanies key={idx} courseName={courseName || section.courseName} customData={section.customData} />;
                    case 'detailed_career_roadmap':
                        return <DetailedCareerRoadmap key={idx} items={section.items} />;
                    case 'detailed_post_training_journey':
                        return <DetailedPostTrainingJourney key={idx} steps={section.items} title={section.title} courseName={section.courseName || courseName} />;
                    case 'detailed_testimonials':
                        return <DetailedTestimonials key={idx} items={section.items} courseName={courseName || section.courseName} />;
                    case 'detailed_upcoming_batches':
                        return <DetailedUpcomingBatches key={idx} batches={section.items} courseName={section.courseName || courseName} />;
                    case 'detailed_faq':
                        return <DetailedFAQ key={idx} items={section.items} />;
                    case 'detailed_demo_booking':
                        return <DetailedDemoBooking key={idx} courseName={courseName} />;
                    case 'features':
                        // Fallback replacement for features
                        return <DetailedFeatures key={idx} items={section.items} title={section.title || "Course Highlights"} />;
                    case 'list_checker':
                        return <DetailedFeatures key={idx} items={section.items} title={section.title} />;
                    case 'rich_text':
                        return <RichTextSection key={idx} title={section.title} content={section.content} />;
                    case 'testimonials':
                        return <TestimonialsSection key={idx} title={section.title} items={section.items} />;
                    case 'content_with_image':
                        return <ContentWithImage key={idx} {...section} />;
                    case 'whats_included':
                        return <WhatsIncluded key={idx} {...section} />;
                    case 'faq':
                        return <DetailedFAQ key={idx} items={section.items} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}
