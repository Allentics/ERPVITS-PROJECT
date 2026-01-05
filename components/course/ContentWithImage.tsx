import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface ContentWithImageProps {
    title: string;
    subtitle?: string;
    description: string;
    items?: string[];
    imageSrc?: string;
    imageAlt?: string;
    layout?: 'left' | 'right';
}

export default function ContentWithImage({ title, subtitle, description, items, imageSrc, imageAlt, layout = 'left' }: ContentWithImageProps) {
    return (
        <div className="py-12 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm my-16">
            <div className={`flex flex-col ${layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 p-8 lg:p-12`}>
                {imageSrc && (
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            {/* Assuming imageSrc is a valid path. If remote, width/height mandatory. Using safe defaults or standard img tag if local. */}
                            <img
                                src={imageSrc}
                                alt={imageAlt || title}
                                className="object-cover w-full h-auto max-h-[500px]"
                            />
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
                                <div className="text-4xl font-bold text-orange-500">98%</div>
                                <div className="text-sm font-medium text-slate-600">Placement Success Rate</div>
                            </div>
                        </div>
                    </div>
                )}

                <div className={`w-full ${imageSrc ? 'lg:w-1/2 text-left' : 'w-full max-w-5xl mx-auto text-center'} space-y-6`}>
                    {subtitle && <span className="text-orange-500 font-bold tracking-widest uppercase text-sm block">{subtitle}</span>}
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">{title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{description}</p>

                    {items && items.length > 0 && (
                        <div className={`grid grid-cols-1 ${imageSrc ? 'md:grid-cols-2' : 'md:grid-cols-2 text-left max-w-3xl mx-auto'} gap-4 pt-4`}>
                            {items.map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="pt-6">
                        <div className={`bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-4 items-center ${!imageSrc ? 'max-w-3xl mx-auto text-left' : ''}`}>
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                                <span className="font-bold text-lg">i</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900">Complete Support Ecosystem</h4>
                                <p className="text-sm text-blue-700 mt-1">Join our extensive alumni/learning support ecosystem to guide you through every step of your SAP Ariba learning journey and career transition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
