"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Send, MoreHorizontal } from 'lucide-react';

// --- Mock Data: Detailed Story Content ---
const STORY_CONTENT: Record<number, any[]> = {
    1: [ // How to Crack SAP Interviews
        {
            id: 101,
            image: "/images/stories/generated/story_interview_modern.png",
            title: "Cracking the SAP Interview",
            content: "It's not just about technical skills. It's about showing you understand the VALUE of SAP.",
            duration: 5000
        },
        {
            id: 102,
            image: "/images/stories/generated/story_interview_resume.png",
            title: "1. Know Your Career Path",
            content: "Interviewers love candidates who have a clear vision of their growth from Junior Consultant to Architect.",
            duration: 5000
        },
        {
            id: 103,
            image: "/images/stories/generated/story_interview_whiteboard.png",
            title: "2. Talk About Progression",
            content: "Don't just discuss what you did. Discuss how you improved process efficiency in your previous projects.",
            duration: 5000
        },
        {
            id: 104,
            image: "/images/stories/generated/story_interview_handshake.png",
            title: "3. Real World Scenarios",
            content: "Be prepared to whiteboard a solution. Show them how you solve complex procurement problems.",
            duration: 5000
        },
        {
            id: 105,
            image: "/images/stories/generated/story_interview_cross_module.png",
            title: "4. Cross-Module Knowledge",
            content: "Specialists are good. Generalists who understand integration points (MM-FI, SD-FI) are hired instantly.",
            duration: 5000
        }
    ],
    2: [ // SAP S/4HANA vs ECC
        {
            id: 201,
            image: "/images/stories/generated/story_erp_dashboard_futuristic.png",
            title: "S/4HANA: The New Core",
            content: "Why are companies migrating? It's not just an upgrade; it's a complete business transformation.",
            duration: 5000
        },
        {
            id: 202,
            image: "/images/stories/generated/story_hana_server.png",
            title: "1. In-Memory Computing",
            content: "With HANA, reports that took hours now run in seconds. This changes how businesses make decisions.",
            duration: 5000
        },
        {
            id: 203,
            image: "/images/stories/generated/story_hana_cloud.png",
            title: "2. The Cloud Advantage",
            content: "BTP (Business Technology Platform) allows for rapid innovation and extension without touching the core.",
            duration: 5000
        },
        {
            id: 204,
            image: "/images/stories/generated/story_erp_dashboard_futuristic.png",
            title: "3. Simplified Processes",
            content: "Complex workflows are streamlined. External workforce management becomes seamless.",
            duration: 5000
        },
        {
            id: 205,
            image: "/images/stories/generated/story_hana_server.png",
            title: "4. Intelligent Procurement",
            content: "Integration with Ariba Network automates the entire procure-to-pay lifecycle.",
            duration: 5000
        }
    ],
    3: [ // My Journey: Fresher to Architect
        {
            id: 301,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
            title: "My Career Roadmap",
            content: "I didn't start as an expert. I started with a willingness to learn and travel.",
            duration: 5000
        },
        {
            id: 302,
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Going Global",
            content: "My first big break was a rollout project in Germany. Understanding local localization rules is a super power.",
            duration: 5000
        },
        {
            id: 303,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Adapting to Markets",
            content: "Worked in APAC markets? You learn flexibility. Every region has unique compliance needs.",
            duration: 5000
        },
        {
            id: 304,
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Deep Functional Dive",
            content: "I spent 2 years mastering Shipping Points. Sounds boring? It made me indispensable for logistics projects.",
            duration: 5000
        }
    ],
    4: [ // ABAP Tricks
        { id: 401, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "ABAP on Cloud", content: "The game has changed. Classic ABAP is evolving into a cloud-native language.", duration: 5000 },
        { id: 402, image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Code Pushdown", content: "Move logic to the database layer (CDS Views, AMDP). Let HANA do the heavy lifting.", duration: 5000 },
        { id: 403, image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Essential Tools", content: "Eclipse ADT is your new home. Forget SE80 if you want to be a modern developer.", duration: 5000 },
        { id: 404, image: "https://images.unsplash.com/photo-1607799275518-d58665d099db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Integration is Key", content: "Modern ABAP developers must understand CPI and OData services.", duration: 5000 },
    ],
    5: [ // Fiori UX
        { id: 501, image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Customer Experience", content: "CX is the new battleground. SAP C4C provides a 360-degree view of the customer.", duration: 5000 },
        { id: 502, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Technical Architecture", content: "Understanding the underlying nodes and BOs in Cloud Applications is crucial.", duration: 5000 },
        { id: 503, image: "https://images.unsplash.com/photo-1555421689-492a8048ae22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Intelligent Planning", content: "Fiori UI makes complex supply chain planning look like a simple dashboard.", duration: 5000 },
    ],
    6: [ // Salary Trends
        { id: 601, image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Finance Leads the Way", content: "FICO consultants remain the highest paid due to the critical nature of financial data.", duration: 5000 },
        { id: 602, image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Niche Skills Pay More", content: "Treasury and Risk Management (TRM) is a rare skill. Less competition, higher rates.", duration: 5000 },
        { id: 603, image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Master Data Matters", content: "Governance and accuracy in master data can save millions. Experts here are valued.", duration: 5000 },
    ],
    7: [ // Resume Tips (Missing Story Fix)
        { id: 701, image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Resume that Hires", content: "Recruiters spend 6 seconds on a resume. Make yours count with clear formatting.", duration: 5000 },
        { id: 702, image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Keywords are Key", content: "Use standard SAP terminology. 'Order to Cash', not 'Sales Process'.", duration: 5000 },
        { id: 703, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Project Highlights", content: "List your specific contributions. 'Configured APP' is better than 'Worked in FICO'.", duration: 5000 },
    ]
};

const getSlidesForStory = (story: any) => {
    // Check if we have specific content for this story
    if (STORY_CONTENT[story.id]) {
        return STORY_CONTENT[story.id];
    }

    // Fallback: Generate varied slides for other stories using thematic external images
    const slideCount = 4;

    // Expanded unique theme images to avoid repetition
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

    // Deterministic selection based on ID, ensuring modulo correlates to a valid index
    const selectedTheme = uniqueThemeImages[story.id % uniqueThemeImages.length] || uniqueThemeImages[0];

    return Array.from({ length: slideCount }).map((_, i) => ({
        id: i,
        type: i === 0 ? 'cover' : 'content',
        // Ensure we don't go out of bounds and cycle through the 4 unique images in the selected theme
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

    // Timer Logic
    useEffect(() => {
        if (isPaused || !currentSlide) return;

        const timer = setInterval(() => {
            setProgress(prev => {
                const effectiveDuration = currentSlide?.duration || 5000;
                const step = (PROGRESS_INTERVAL / effectiveDuration) * 100;
                const newProgress = prev + step;
                if (newProgress >= 100) {
                    nextSlide();
                    return 0;
                }
                return newProgress;
            });
        }, PROGRESS_INTERVAL);

        return () => clearInterval(timer);
    }, [currentSlideIndex, currentStoryIndex, isPaused, nextSlide, currentSlide]);

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
                {/* Background Image/Media */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
                </div>

                {/* Top Tools: Progress, Profile, Close */}
                <div className="absolute top-0 left-0 right-0 p-4 z-20 bg-gradient-to-b from-black/80 to-transparent pt-6">

                    {/* Progress Bars */}
                    <div className="flex gap-1.5 mb-4">
                        {slides.map((_, idx) => (
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
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 z-20 bg-gradient-to-t from-black/90 to-transparent flex items-center gap-4">
                    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-full h-12 flex items-center px-4 border border-white/20">
                        <input
                            type="text"
                            placeholder="Send a message..."
                            className="bg-transparent text-white placeholder-white/50 text-sm w-full outline-none"
                            onFocus={() => setIsPaused(true)}
                            onBlur={() => setIsPaused(false)}
                        />
                    </div>
                    <button className="text-white hover:text-pink-500 transition-colors">
                        <Heart size={28} />
                    </button>
                    <button className="text-white hover:text-blue-400 transition-colors">
                        <Send size={28} />
                    </button>
                </div>

            </motion.div>
        </div>
    );
}
