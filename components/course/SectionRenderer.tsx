/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { renderRichText } from '@/lib/richText';
export { renderRichText };
import Curriculum from './Curriculum';
import VideoSection from './VideoSection';
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
import CourseOverview from './CourseOverview';
import JobRolesTable from './JobRolesTable';
import CurriculumTable from './CurriculumTable';
import {
    Quote, CheckCircle2, UserCheck, Laptop, Briefcase, Clock,
    Award, Globe, BookOpen, Video, TrendingUp, Headphones,
    Users, Layers
} from 'lucide-react';

// specific icon mapping based on title keywords
const getIconForTitle = (title: string | null | undefined) => {
    if (typeof title !== 'string') return CheckCircle2;
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

// Helper to render text with **bold**, _italic_, [links](url), and common HTML tags (a, b, i, strong, em, span)
// Moved to @/lib/richText

// Defined locally to avoid circular dependency
interface FeatureItem {
    title: string;
    description: string;
}

export function DetailedFeatures({ badge, title, subtitle, items, textAlign = 'center' }: { badge?: string; title?: string | React.ReactNode; subtitle?: string | React.ReactNode; items: (string | FeatureItem)[]; textAlign?: 'center' | 'left' }) {
    return (
        <div className="py-8 detailed-features-section bg-white">
            <div className={`mb-6 max-w-7xl mx-auto px-4 ${textAlign === 'left' ? 'text-left' : 'text-center'}`}>
                {badge && <span className="bg-[#ff4500] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-5 inline-block shadow-sm">{badge}</span>}
                <H2Heading title={title} />
                {subtitle && (
                    <div className={`text-gray-600 text-base leading-relaxed ${textAlign === 'center' ? 'max-w-3xl mx-auto' : 'max-w-5xl'}`}>
                        {renderRichText(subtitle)}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {items?.map((item, i: number) => {
                    const isObject = typeof item === 'object' && item !== null && 'title' in item;
                    const ItemIcon = isObject ? getIconForTitle((item as FeatureItem).title) : CheckCircle2;

                    return (
                        <div key={i} className="flex flex-col p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                            <div className="w-14 h-14 rounded-xl bg-[#ff4500]/10 group-hover:bg-[#ff4500] transition-colors duration-300 flex items-center justify-center text-[#ff4500] group-hover:text-white mb-6">
                                <ItemIcon className="w-7 h-7" />
                            </div>
                            <div className="flex-1">
                                {isObject ? (
                                    <>
                                        <h3 className="font-bold text-slate-900 text-lg mb-3">{renderRichText((item as FeatureItem).title)}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{renderRichText((item as FeatureItem).description)}</p>
                                    </>
                                ) : (
                                    <p className="text-slate-700 font-medium text-base">{renderRichText(item as string)}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function H2Heading({ title }: { title?: string | React.ReactNode }) {
    if (!title) return null;
    return <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight">{renderRichText(title)}</h2>;
}

export function RichTextSection({ title, content }: { title?: string | React.ReactNode; content: string }) {
    return (
        <div className="py-8 max-w-4xl mx-auto">
            {title && <h2 className="text-xl font-bold text-slate-900 mb-6">{renderRichText(title)}</h2>}
            <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="whitespace-pre-line leading-relaxed text-gray-700">
                    {content && content.split('\n').map((line, i: number) => (
                        <p key={i} className="mb-2">
                            {renderRichText(line)}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

interface TestimonialItem {
    quote: string;
    name: string;
    role: string;
}

export function TestimonialsSection({ title, items }: { title: string; items: TestimonialItem[] }) {
    return (
        <div className="py-12 bg-slate-50 rounded-3xl my-8">
            <div className="text-center mb-10 px-4">
                <h2 className="text-2xl font-bold text-slate-900">{renderRichText(title)}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
                {items?.map((item, i: number) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                        <Quote className="w-8 h-8 text-[#ff4500]/30 mb-4" />
                        <p className="text-slate-600 italic mb-6 flex-1">&quot;{item.quote}&quot;</p>
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

interface Section {
    type: string;
    [key: string]: any;
}

export default function SectionRenderer({ sections, courseName, syllabusUrl }: { sections: any[]; courseName?: string | React.ReactNode; syllabusUrl?: string }) {
    if (!sections) return null;

    return (
        <div className="space-y-8">
            {sections.map((section, idx) => {
                switch (section.type) {
                    case 'detailed_features':
                        return <DetailedFeatures key={idx} {...section} badge={section.badge || "Why Choose Us"} items={section.items} />;
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
                            <DetailedCurriculum modules={section.modules} title={section.title} subtitle={section.subtitle} courseName={courseName || section.courseName} syllabusUrl={section.syllabusUrl || syllabusUrl} duration={section.duration} />
                        </section>;
                    case 'detailed_prerequisites':
                        return <DetailedPrerequisites key={idx} items={section.items} />;
                    case 'detailed_target_audience':
                        return <DetailedTargetAudience key={idx} items={section.items} title={section.title} subtitle={section.subtitle} />;
                    case 'detailed_learning_outcomes':
                        return <DetailedLearningOutcomes key={idx} items={section.items} title={section.title} subtitle={section.subtitle} />;
                    case 'real_world_scenarios':
                        return <RealWorldScenarios key={idx} items={section.items} title={section.title} subtitle={section.subtitle} portfolioNote={section.portfolioNote} />;
                    case 'course_overview':
                        return <CourseOverview key={idx} items={section.items} />;
                    case 'job_roles_table':
                        return <JobRolesTable key={idx} items={section.items} title={section.title} description={section.description || section.content} />;
                    case 'table_curriculum':
                        return <CurriculumTable key={idx} items={section.items} title={section.title} />;
                    case 'detailed_certification':
                        return <DetailedCertification key={idx} {...section} courseName={courseName || section.courseName} />;
                    case 'detailed_career_opportunities':
                        return <DetailedCareerOpportunities key={idx} {...section} courseName={courseName || section.courseName} />;
                    case 'detailed_companies':
                        return <DetailedCompanies key={idx} {...section} courseName={courseName || section.courseName} />;
                    case 'detailed_career_roadmap':
                        return <DetailedCareerRoadmap key={idx} {...section} />;
                    case 'detailed_post_training_journey':
                        return <DetailedPostTrainingJourney key={idx} {...section} courseName={courseName || section.courseName} />;
                    case 'detailed_testimonials':
                        return <section key={idx} id="reviews" className="scroll-mt-32">
                            <DetailedTestimonials key={idx} {...section} courseName={courseName || section.courseName} />
                        </section>;
                    case 'detailed_upcoming_batches':
                        return <DetailedUpcomingBatches key={idx} {...section} courseName={courseName || section.courseName} />;
                    case 'detailed_faq':
                        return <DetailedFAQ key={idx} items={section.items} title={section.title} subtitle={section.subtitle} />;
                    case 'detailed_demo_booking':
                        return <DetailedDemoBooking key={idx} courseName={courseName} {...section} />;
                    case 'features':
                        // Fallback replacement for features
                        return <DetailedFeatures key={idx} items={section.items} title={section.title || "Course Highlights"} />;
                    case 'list_checker':
                        return <DetailedFeatures key={idx} items={section.items} title={section.title} />;
                    case 'rich_text':
                        return <RichTextSection key={idx} title={section.title} content={section.content} />;
                    case 'testimonials':
                        return <section key={idx} id="reviews" className="scroll-mt-32">
                            <TestimonialsSection title={section.title} items={section.items} />
                        </section>;
                    case 'detailed_sap_integrations':
                        return <DetailedFeatures key={idx} items={section.items} title={section.title || "SAP Integrations"} />;
                    case 'content_with_image':
                        return <ContentWithImage key={idx} {...section} courseName={courseName || section.courseName} />;
                    case 'whats_included':
                        return <WhatsIncluded key={idx} {...section} />;
                    case 'faq':
                        return <DetailedFAQ key={idx} items={section.items} />;
                    case 'video':
                        return <VideoSection key={idx} videoUrl={section.videoUrl} title={section.title} description={section.description} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}
