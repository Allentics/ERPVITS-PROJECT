import { Section, Testimonial, FAQ as FAQType } from '@/lib/courseData';
import Curriculum from './Curriculum';
import FAQ from './FAQ';
import { Check, Star, ShieldCheck } from 'lucide-react';

const RichText = ({ content }: { content: string }) => {
    // Simple bold parser: **text** -> <strong>text</strong>
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return (
        <div className="prose max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
                }
                return part;
            })}
        </div>
    );
};

const FeaturesGrid = ({ items, title }: { items: string[], title?: string }) => (
    <div className="py-12">
        {title && <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, i) => (
                <div key={i} className="flex items-start bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                </div>
            ))}
        </div>
    </div>
);

const ListChecker = ({ items, title }: { items: string[], title?: string }) => (
    <div className="py-12 bg-gray-50 -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-2xl my-8">
        {title && <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
                <div key={i} className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                        <RichText content={item} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Testimonials = ({ items, title }: { items: Testimonial[], title?: string }) => (
    <div className="py-16">
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 font-bold text-blue-600">
                            {t.name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                            <div className="text-xs text-blue-600 font-medium">{t.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function SectionRenderer({ sections }: { sections: Section[] }) {
    if (!sections) return null;

    return (
        <div className="space-y-4">
            {sections.map((section, idx) => {
                switch (section.type) {
                    case 'rich_text':
                        return (
                            <section key={idx} className="py-8 scroll-mt-24" id={`section-${idx}`}>
                                {section.title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>}
                                {section.content && <RichText content={section.content} />}
                            </section>
                        );
                    case 'features':
                        return <FeaturesGrid key={idx} items={section.items as string[]} title={section.title} />;
                    case 'list_checker':
                        return <ListChecker key={idx} items={section.items as string[]} title={section.title} />;
                    case 'curriculum':
                        return <div key={idx} className="-mx-4 sm:-mx-8"><Curriculum modules={section.modules} /></div>;
                    case 'testimonials':
                        return <Testimonials key={idx} items={section.items as Testimonial[]} title={section.title} />;
                    case 'faq':
                        return <div key={idx} className="-mx-4 sm:-mx-8"><FAQ items={section.items as FAQType[]} /></div>;
                    case 'detailed_features':
                        return <DetailedFeatures key={idx} title={section.title} subtitle={section.subtitle} items={section.items as any[]} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}

const DetailedFeatures = ({ title, subtitle, items }: { title?: string, subtitle?: string, items: { title: string, description: string }[] }) => (
    <div className="py-12 scroll-mt-24" id="detailed-features">
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{title}</h2>}
        {subtitle && <div className="prose max-w-none text-gray-600 mb-10 leading-relaxed whitespace-pre-line text-lg">{subtitle}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <Star className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
);
