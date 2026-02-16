import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { renderRichText } from '@/lib/richText';

interface ContentWithImageProps {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    description: string | React.ReactNode;
    items?: any[];
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    layout?: 'left' | 'right';
    supportTitle?: string;
    supportText?: string;
    courseName?: string;
}

export default function ContentWithImage({ title, subtitle, description, items, imageSrc, imageAlt, videoSrc, layout = 'left', supportTitle, supportText, courseName }: ContentWithImageProps) {
    return (
        <div className="py-12 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <div className={`flex flex-col ${layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12 p-8 lg:p-12`}>
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    {(imageSrc || videoSrc) ? (
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full aspect-video">
                            {videoSrc ? (
                                <iframe
                                    className="w-full h-full"
                                    src={videoSrc}
                                    title={typeof title === 'string' ? title : "Course Video"}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={imageSrc}
                                    alt={imageAlt || (typeof title === 'string' ? title : "Course Overview")}
                                    className="object-cover w-full h-full"
                                />
                            )}
                        </div>
                    ) : (
                        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 w-full aspect-video bg-slate-100 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">Demo Video Coming Soon</span>
                        </div>
                    )}

                    {/* Embedded Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Book Your Free Demo</h3>
                        <ContactForm defaultCourse={courseName} />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-left space-y-6">
                    {subtitle && <span className="text-[#ff4500] font-bold tracking-widest uppercase text-sm block">{subtitle}</span>}
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">{renderRichText(title)}</h2>
                    <div className="text-lg text-slate-600 leading-relaxed">{renderRichText(description)}</div>

                    {items && items.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {items.map((item, idx) => {
                                const itemTitle = typeof item === 'object' && item !== null ? (item as any).title : item;
                                return (
                                    <div key={idx} className="flex gap-3 items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-[#ff4500] shrink-0 mt-1" />
                                        <span className="text-slate-700 font-medium">{renderRichText(itemTitle)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
}
