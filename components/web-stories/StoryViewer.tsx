"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Send, MoreHorizontal } from 'lucide-react';

const getSlidesForStory = (story: any) => {
    // If the story has slides already (from DB), use them
    if (story.slides && Array.isArray(story.slides) && story.slides.length > 0) {
        return story.slides;
    }

    // Fallback: Generate varied slides for other stories using thematic external images
    const slideCount = 4;
    const uniqueThemeImages = [
        [
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2070&auto=format&fit=crop"
        ],
        [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop"
        ],
        [
            "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
        ]
    ];

    // Simple deterministic theme selection
    const themeIndex = typeof story.id === 'number' ? story.id % uniqueThemeImages.length : 0;
    const selectedTheme = uniqueThemeImages[themeIndex];

    return Array.from({ length: slideCount }).map((_, i) => ({
        id: i,
        type: i === 0 ? 'cover' : 'content',
        image: selectedTheme[i % selectedTheme.length],
        title: i === 0 ? story.title : `${story.title} - Insight ${i}`,
        content: i === 0
            ? `Deep dive into ${story.title}.`
            : `Expert Insight #${i}: This concept is fundamental to mastering the module.`,
        duration: 5000,
        isBold: false,
        textColor: '#ffffff',
        textBackground: false
    }));
};


interface StoryViewerProps {
    stories: any[];
    initialStoryIndex: number;
    onClose: () => void;
}

export default function StoryViewer({ stories, initialStoryIndex, onClose }: StoryViewerProps) {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const currentStory = stories[currentStoryIndex];
    // Memoize slides to prevent regeneration on every render
    const slides = React.useMemo(() => getSlidesForStory(currentStory), [currentStory]);
    const currentSlide = slides[currentSlideIndex];

    const PROGRESS_INTERVAL = 50; // Update every 50ms

    // Navigation Logic
    const nextStory = useCallback(() => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(prev => prev + 1);
            setCurrentSlideIndex(0);
            setProgress(0);
        } else {
            onClose();
        }
    }, [currentStoryIndex, stories.length, onClose]);

    const prevStory = useCallback(() => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(prev => prev - 1);
            setCurrentSlideIndex(0);
            setProgress(0);
        }
    }, [currentStoryIndex]);

    const nextSlide = useCallback(() => {
        if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex(prev => prev + 1);
            setProgress(0);
        } else {
            nextStory();
        }
    }, [currentSlideIndex, slides.length, nextStory]);

    const prevSlide = useCallback(() => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(prev => prev - 1);
            setProgress(0);
        } else {
            prevStory();
        }
    }, [currentSlideIndex, prevStory]);

    // A ref to signal that the current slide has finished and we should advance.
    // Using a ref avoids triggering re-renders and prevents setState-during-render errors.
    const shouldAdvanceRef = React.useRef(false);

    // Timer Logic — only updates progress; sets a flag when the slide is complete.
    useEffect(() => {
        if (isPaused || !currentSlide) return;

        shouldAdvanceRef.current = false; // reset on each slide/story change

        const timer = setInterval(() => {
            setProgress(prev => {
                const effectiveDuration = currentSlide?.duration || 5000;
                const step = (PROGRESS_INTERVAL / effectiveDuration) * 100;
                const newProgress = prev + step;
                if (newProgress >= 100) {
                    // Signal that we need to advance — do NOT call nextSlide() here,
                    // as that would be a setState call inside another setState updater.
                    shouldAdvanceRef.current = true;
                    return 100; // clamp at 100
                }
                return newProgress;
            });
        }, PROGRESS_INTERVAL);

        return () => clearInterval(timer);
    }, [currentSlideIndex, currentStoryIndex, isPaused, currentSlide]);

    // Navigation trigger — watches the shouldAdvance flag and advances the slide
    // outside the setState updater to avoid the "update during render" React error.
    useEffect(() => {
        if (progress >= 100 && shouldAdvanceRef.current) {
            shouldAdvanceRef.current = false;
            nextSlide();
        }
    }, [progress, nextSlide]);

    // Reset progress and update URL when story changes
    useEffect(() => {
        setProgress(0);
        // Sync URL with story slug
        if (currentStory && currentStory.slug) {
            window.history.pushState(null, '', `/web-stories/${currentStory.slug}/`);
        }
    }, [currentStoryIndex, currentStory]);

    useEffect(() => {
        setProgress(0);
    }, [currentSlideIndex]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, onClose]);

    const handleShare = () => {
        const shareUrl = window.location.href;
        const shareText = `Check out this SAP Web Story: ${currentStory.title}`;

        if (navigator.share) {
            navigator.share({
                title: currentStory.title,
                text: shareText,
                url: shareUrl,
            }).catch(() => { });
        } else {
            // Fallback
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    if (!currentStory || !currentSlide) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center">
            {/* Desktop Navigation Arrows (Outside Mobile View) */}
            <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 lg:left-32 text-white/50 hover:text-white transition-colors p-4"
            >
                <ChevronLeft size={48} />
            </button>
            <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 lg:right-32 text-white/50 hover:text-white transition-colors p-4"
            >
                <ChevronRight size={48} />
            </button>


            {/* Story Container (Correct 9:16 Aspect Ratio) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative h-full w-full md:w-auto md:aspect-[9/16] bg-black overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] mx-auto"
            >


                {/* Background Image/Media with Blurred Fallback */}
                <div className="absolute inset-0 z-0 bg-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Blurred Background to fill space */}
                    <img
                        src={currentSlide.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                    />

                    {/* Main Image - Now using object-cover for webstory ratio */}
                    <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="relative z-10 w-full h-full object-cover pointer-events-none"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
                </div>

                {/* Top Tools: Progress, Profile, Close */}
                <div className="absolute top-0 left-0 right-0 p-4 z-20 bg-gradient-to-b from-black/80 to-transparent pt-6">

                    {/* Progress Bars */}
                    <div className="flex gap-1.5 mb-4">
                        {slides.map((_: any, idx: number) => (
                            <div key={idx} className="h-0.5 bg-white/30 flex-1 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-white transition-all duration-100 ease-linear ${idx < currentSlideIndex ? 'w-full' :
                                        idx === currentSlideIndex ? 'w-full origin-left' : 'w-0'
                                        }`}
                                    style={{
                                        width: idx === currentSlideIndex ? `${progress}%` : undefined
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* Header Info */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 p-[1.5px] shadow-lg">
                                <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center">
                                    <img
                                        src="/favicon.png"
                                        alt="ERPVITS"
                                        className="w-[85%] h-[85%] object-contain rounded-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white text-[13px] font-bold shadow-black drop-shadow-md">
                                    {currentStory.author}
                                </h4>
                            </div>
                        </div>


                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleShare}
                                className="text-white/80 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                title="Share"
                            >
                                <Send size={20} />
                            </button>
                            <button onClick={onClose} className="text-white hover:text-red-400 transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Layer (Improved Spacing and Font Sizes) */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 pt-24 pb-28 items-center text-center pointer-events-none">
                    <div className="max-w-[100%] w-full">
                        {/* Title Box */}
                        <motion.div
                            key={currentSlide.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`${currentSlide.textBackground ? 'bg-black/60 p-5 rounded-xl backdrop-blur-md border border-white/10' : ''} mb-4 shadow-xl`}
                        >
                            <h2
                                style={{
                                    color: currentSlide.textColor || '#ffffff',
                                    fontWeight: currentSlide.isBold ? '900' : '700'
                                }}
                                className="text-xl md:text-2xl leading-[1.1] drop-shadow-xl tracking-tight"
                            >
                                {currentSlide.title}
                            </h2>
                        </motion.div>

                        {/* Slide Content Meta */}
                        <div className="space-y-4">
                            {currentSlideIndex === 0 ? (
                                <>
                                    {/* Restored Content Text on Cover */}
                                    {currentSlide.content && (
                                        <motion.p
                                            key={currentSlide.content}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-white/90 text-xs md:text-sm font-medium leading-normal drop-shadow-lg mb-4 px-2 line-clamp-4"
                                        >
                                            {currentSlide.content}
                                        </motion.p>
                                    )}

                                    {/* Author & Date Box */}
                                    <div className="flex flex-col items-center gap-2 mt-2">
                                        {/* Author Tag */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="inline-block bg-[#9c8421] px-4 py-1.5 rounded shadow-lg"
                                        >
                                            <p className="text-white text-[11px] font-black tracking-widest whitespace-nowrap">
                                                {currentSlide.customAuthor || `By ${currentStory.author}`}
                                            </p>
                                        </motion.div>

                                        {/* Date */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-white font-bold text-[10px] drop-shadow-lg tracking-wider"
                                        >
                                            {currentSlide.customDate || (currentStory.created_at ? new Date(currentStory.created_at).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            }) : '')}
                                        </motion.p>
                                    </div>
                                </>
                            ) : (
                                /* Internal Slide Content */
                                <motion.p
                                    key={currentSlide.content}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-white/95 text-base md:text-lg font-medium leading-relaxed drop-shadow-lg px-2"
                                >
                                    {currentSlide.content}
                                </motion.p>
                            )}
                        </div>
                    </div>
                </div>






                {/* Tap Navigation Zones (Invisible) */}
                <div className="absolute inset-0 z-10 flex">
                    <div
                        className="w-1/3 h-full cursor-pointer"
                        onClick={prevSlide}
                        onMouseDown={() => setIsPaused(true)}
                        onMouseUp={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    ></div>
                    <div
                        className="w-2/3 h-full cursor-pointer"
                        onClick={nextSlide}
                        onMouseDown={() => setIsPaused(true)}
                        onMouseUp={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    ></div>
                </div>

                {/* Footer Engagement (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 z-20 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-center">
                    <a
                        href="/"
                        className="w-full max-w-[280px] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full h-12 flex items-center justify-center px-6 border border-white/20 text-white font-bold transition-colors"
                    >
                        Visit Website
                    </a>
                </div>

            </motion.div>
        </div>
    );
}
