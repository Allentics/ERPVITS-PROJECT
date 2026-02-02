import React from 'react';

interface VideoSectionProps {
    videoUrl: string;
    title?: string;
    description?: string;
}

export default function VideoSection({ videoUrl, title, description }: VideoSectionProps) {
    const getEmbedUrl = (url: string) => {
        if (!url) return '';
        let videoId = '';
        // Handle youtu.be/ID
        if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1];
        }
        // Handle youtube.com/watch?v=ID
        else if (url.includes('youtube.com/watch')) {
            const urlParams = new URLSearchParams(url.split('?')[1]);
            videoId = urlParams.get('v') || '';
        }

        // Clean up video ID (remove additional params like &t=)
        if (videoId.includes('&')) {
            videoId = videoId.split('&')[0];
        }
        if (videoId.includes('?')) {
            videoId = videoId.split('?')[0];
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    };

    const embedUrl = getEmbedUrl(videoUrl);

    if (!embedUrl) return null;

    return (
        <section className="py-16 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || description) && (
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        {title && <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>}
                        {description && <p className="text-lg text-slate-600 leading-relaxed">{description}</p>}
                    </div>
                )}
                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-900/5 group">
                    <iframe
                        src={embedUrl}
                        title={title || "Course Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
