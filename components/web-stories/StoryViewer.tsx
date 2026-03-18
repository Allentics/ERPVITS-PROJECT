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
        duration: 5000
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

    // Reset progress when slide changes
    useEffect(() => {
        setProgress(0);
    }, [currentSlideIndex, currentStoryIndex]);

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


            {/* Story Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-[420px] h-full md:h-[90vh] md:max-h-[800px] bg-black md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
                {/* Background Image/Media with Blurred Fallback */}
                <div className="absolute inset-0 z-0 bg-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Blurred Background to fill space */}
                    <img
                        src={currentSlide.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                    />

                    {/* Main Image - Now using object-contain to avoid cropping */}
                    <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="relative z-10 w-full h-full object-contain pointer-events-none"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
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
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 p-[2px]">
                                <div className="w-full h-full bg-black rounded-full overflow-hidden">
                                    {/* Placeholder Avatar */}
                                    <div className="w-full h-full bg-gray-600 flex items-center justify-center text-xs font-bold text-white">
                                        {currentStory.author.charAt(0)}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white text-sm font-bold shadow-black drop-shadow-md">{currentStory.author}</h4>
                                <span className="text-white/70 text-xs">2h ago</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="text-white/80 hover:text-white">
                                <MoreHorizontal size={20} />
                            </button>
                            <button onClick={onClose} className="text-white hover:text-red-400 transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 pb-32">
                    <motion.h2
                        key={currentSlide.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-black text-white mb-4 leading-tight drop-shadow-lg"
                    >
                        {currentSlide.title}
                    </motion.h2>
                    <motion.p
                        key={currentSlide.content}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-base font-medium leading-relaxed drop-shadow-md"
                    >
                        {currentSlide.content}
                    </motion.p>
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
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 z-20 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between gap-4">
                    <a
                        href="/"
                        className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full h-12 flex items-center justify-center px-4 border border-white/20 text-white font-bold transition-colors"
                    >
                        Visit Website
                    </a>
                    <button className="text-white hover:text-blue-400 transition-colors">
                        <Send size={28} />
                    </button>
                </div>

            </motion.div>
        </div>
    );
}
