"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play,
    BookOpen,
    TrendingUp,
    Award,
    Users,
    ChevronRight,
    Zap,
    Star,
    Share2,
    Smartphone,
    HelpCircle,
    Settings,
    Code,
    Cloud,
    Search,
    DollarSign,
    GitCompare,
    FileText,
    UserPlus
} from 'lucide-react';

import StoryViewer from './StoryViewer';

// --- Mock Data ---

const STORIES = [
    {
        id: 1,
        title: "How to Crack SAP Interviews",
        category: "Interview Questions",
        author: "Amit Kumar",
        role: "SAP Consultant @ Siemens",
        image: "/images/stories/sap_consultant_amit.png",
        views: "12.5k",
        type: "featured"
    },
    {
        id: 2,
        title: "SAP S/4HANA vs ECC: Key Differences",
        category: "Module Comparison",
        author: "Tech Team",
        role: "ERPVITS",
        image: "/images/stories/sap_tech_dashboard.png",
        views: "8.2k",
        type: "featured"
    },
    {
        id: 3,
        title: "My Journey: Fresher to Architect",
        category: "Success Stories",
        author: "Priya Singh",
        role: "Senior Manager",
        image: "/images/stories/success_story_priya.png",
        views: "15k",
        type: "featured"
    },
    {
        id: 4,
        title: "Top 5 ABAP Tricks for 2025",
        category: "SAP Technical",
        author: "Vikram Patel",
        role: "ABAP Lead",
        image: "/images/stories/sap_training_classroom.png",
        views: "5.4k",
        type: "standard"
    },
    {
        id: 5,
        title: "Understanding SAP Fiori UX",
        category: "SAP Functional",
        author: "Ananya Desai",
        role: "UX Specialist",
        image: "/images/stories/sap_tech_dashboard.png",
        views: "6.1k",
        type: "standard"
    },
    {
        id: 6,
        title: "SAP Salary Trends in USA & India",
        category: "SAP Salary",
        author: "ERPVITS Research",
        role: "Analytics Team",
        image: "/images/stories/sap_tech_dashboard.png",
        views: "22k",
        type: "standard"
    },
    {
        id: 7,
        title: "Placement Success: Zero to Hero",
        category: "Success Stories",
        author: "Sneha Reddy",
        role: "Analyst @ Infosys",
        image: "/images/stories/success_story_priya.png",
        views: "9.8k",
        type: "standard"
    },
    {
        id: 8,
        title: "Cloud vs On-Premise: A Guide",
        category: "SAP Cloud",
        author: "Sanjay Verma",
        role: "Solutions Architect",
        image: "/images/stories/sap_consultant_amit.png",
        views: "4.3k",
        type: "standard"
    },
    {
        id: 9,
        title: "SAP Certification Path 2025",
        category: "Certification Tips",
        author: "Rahul Mehta",
        role: "SAP Certified Trainer",
        image: "/images/stories/sap_training_classroom.png",
        views: "3.2k",
        type: "standard"
    },
    {
        id: 10,
        title: "Future of SAP: AI & BTP",
        category: "SAP Trends",
        author: "ERPVITS Labs",
        role: "R&D Team",
        image: "/images/stories/sap_tech_dashboard.png",
        views: "7.1k",
        type: "standard"
    },
    {
        id: 11,
        title: "Resume Tips for SAP Freshers",
        category: "Resume Prep",
        author: "Kavita Rao",
        role: "HR Expert",
        image: "/images/stories/sap_consultant_amit.png",
        views: "4.5k",
        type: "standard"
    }
];

const CATEGORIES = [
    { id: 'all', label: 'All Stories', icon: Zap },
    { id: 'Success Stories', label: 'Success Stories', icon: Star },
    { id: 'Certification Tips', label: 'Certification Tips', icon: Award },
    { id: 'Career Tips', label: 'Career Tips', icon: BriefcaseIcon },
    { id: 'Interview Questions', label: 'Interview Questions', icon: HelpCircle },
    { id: 'SAP Functional', label: 'SAP Functional', icon: Settings },
    { id: 'SAP Technical', label: 'SAP Technical', icon: Code },
    { id: 'SAP Cloud', label: 'SAP Cloud', icon: Cloud },
    { id: 'SAP Jobs', label: 'SAP Jobs', icon: Search },
    { id: 'SAP Salary', label: 'SAP Salary', icon: DollarSign },
    { id: 'SAP Trends', label: 'SAP Trends', icon: TrendingUp },
    { id: 'Module Comparison', label: 'Module Comparison', icon: GitCompare },
    { id: 'Resume Prep', label: 'Resume Prep', icon: FileText },
    { id: 'SAP Hiring', label: 'SAP Hiring', icon: UserPlus },
];

function BriefcaseIcon(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="6" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
}


// --- Components ---

const StoryCard = ({ story, featured = false, onClick }: { story: any, featured?: boolean, onClick?: () => void }) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={onClick}
            className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group ${featured ? 'w-full h-[450px] md:h-[500px]' : 'w-full h-[350px]'}`}
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${story.image})` }}
            >
                {/* Fallback Gradient if image fails */}
                <div className="absolute inset-0 bg-slate-200 -z-10 bg-gradient-to-br from-slate-400 to-slate-500 opacity-50"></div>
                {/* Placeholder Pattern to make images look nicer */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>

            {/* Top Tag */}
            <div className="absolute top-4 left-4 z-10">
                <span className="bg-black/40 backdrop-blur-md text-white text-[9px] uppercase font-black px-2.5 py-1 rounded-sm border border-white/10 tracking-[0.1em]">
                    {story.category}
                </span>
            </div>

            {/* Top Right Views (Optional) */}
            <div className="absolute top-4 right-4 z-10 text-white/80 text-xs font-medium flex items-center gap-1">
                <Play className="h-3 w-3 fill-white/80" /> {story.views}
            </div>


            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="mb-3">
                    <h3 className={`${featured ? 'text-2xl' : 'text-lg'} font-bold text-white leading-tight mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors`}>
                        {story.title}
                    </h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/10">
                        {story.author.charAt(0)}
                    </div>
                    <div>
                        <p className="text-white text-xs font-bold">{story.author}</p>
                        <p className="text-white/60 text-[10px]">{story.role}</p>
                    </div>
                </div>

                {/* Watch Button appearing on hover */}
                <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <button className="flex items-center text-xs font-bold text-white mb-1">
                        Watch Now <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                    {/* Simple progress bar visual */}
                    <div className="h-1 bg-white/20 rounded-full w-full overflow-hidden">
                        <div className="h-full bg-cyan-400 w-2/3"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


const WebStoriesFeed = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

    const filteredStories = activeCategory === 'all'
        ? STORIES
        : STORIES.filter(s => s.category === activeCategory);

    const featuredStories = STORIES.filter(s => s.type === 'featured');

    const handleStoryClick = (storyId: number) => {
        const index = STORIES.findIndex(s => s.id === storyId);
        if (index !== -1) {
            setSelectedStoryIndex(index);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* --- Story Viewer Modal --- */}
            <AnimatePresence>
                {selectedStoryIndex !== null && (
                    <StoryViewer
                        stories={STORIES}
                        initialStoryIndex={selectedStoryIndex}
                        onClose={() => setSelectedStoryIndex(null)}
                    />
                )}
            </AnimatePresence>

            {/* --- Hero Section (Restored) --- */}
            <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white py-12 px-4 overflow-hidden">
                {/* Radial Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl ring-1 ring-white/10">
                            <Smartphone className="h-14 w-14 text-white" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        SAP Web Stories
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed font-medium drop-shadow-md">
                        Bite-sized success stories, tips, and insights from the SAP world. Swipe through inspiring journeys and quick learning moments.
                    </p>

                    {/* Stats */}


                    {/* Button */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => {
                                document.getElementById('featured-stories')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-bold py-4 px-10 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(249,_115,_22,_0.4)] ring-4 ring-orange-500/20"
                        >
                            <div className="bg-orange-100 rounded-full p-1">
                                <Play className="h-5 w-5 fill-orange-600" />
                            </div>
                            <span className="tracking-wide">Watch Featured Story</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* --- Featured Stories Section --- */}
            <section id="featured-stories" className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        <Star className="h-4 w-4 fill-orange-600" /> KEY HIGHLIGHTS
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase">Featured Stories</h2>
                    <p className="text-slate-500 font-medium">Hand-picked stories that inspire and educate.</p>
                </div>

                {/* Featured Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {featuredStories.map(story => (
                        <StoryCard
                            key={story.id}
                            story={story}
                            featured={true}
                            onClick={() => handleStoryClick(story.id)}
                        />
                    ))}
                </div>
            </section>

            {/* --- Filter Section --- */}
            <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md py-6 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto custom-scrollbar pb-4 group">
                    <div className="flex items-center gap-4 min-w-max">
                        {CATEGORIES.map(cat => {
                            const Icon = cat.icon;
                            const isActive = activeCategory === cat.id;
                            // Calculate count for each category
                            const count = cat.id === 'all'
                                ? STORIES.length
                                : STORIES.filter(s => s.category === cat.id).length;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 transform
                                ${isActive
                                            ? 'bg-slate-900 text-white shadow-xl scale-105 ring-2 ring-slate-900'
                                            : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300'}`}
                                >
                                    <Icon className={`h-4 w-4 ${isActive ? 'text-yellow-400' : 'text-slate-400'}`} />
                                    <span className="whitespace-nowrap uppercase tracking-wider">{cat.label}</span>
                                    <span className={`flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-md text-[10px] font-black
                                        ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {count}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Custom Stylable Scrollbar CSS */}
                <style jsx global>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        height: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #f1f5f9;
                        border-radius: 10px;
                        margin: 0 1rem;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #94a3b8;
                        border-radius: 10px;
                        transition: background 0.3s ease;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #64748b;
                    }
                `}</style>
            </div>

            {/* --- All Stories Grid --- */}
            <section className="py-20 px-4 max-w-7xl mx-auto min-h-[500px]">
                <div className="mb-12">
                    <h3 className="text-3xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
                        {activeCategory === 'all' ? 'All Stories' : activeCategory}
                        <span className="bg-slate-200 text-slate-600 text-sm px-3 py-1 rounded-full font-bold">{filteredStories.length}</span>
                    </h3>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredStories.map(story => (
                            <motion.div
                                key={story.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <StoryCard
                                    story={story}
                                    onClick={() => handleStoryClick(story.id)}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredStories.length === 0 && (
                    <div className="text-center py-32 text-slate-400 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-xl font-medium">Coming Soon!</p>
                        <p className="text-sm">We are busy curating more {activeCategory} stories for you.</p>
                    </div>
                )}
            </section>

            {/* --- Share Your Story CTA --- */}
            <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white py-24 px-4 overflow-hidden mt-12">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block p-4 rounded-full bg-white/10 mb-6 backdrop-blur-md border border-white/20">
                        <Smartphone className="h-10 w-10 text-white" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-md">
                        Share Your SAP Success Story
                    </h2>

                    <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Inspire others with your SAP journey. Create your own web story and help the community grow.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">

                        <a
                            href="https://www.linkedin.com/company/13357826/admin/dashboard/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all"
                        >
                            <Share2 className="h-5 w-5" />
                            <span>SHARE ON LINKEDIN</span>
                        </a>
                    </div>

                    <p className="mt-8 text-white/60 text-xs uppercase tracking-widest font-semibold">
                        Join 500+ professionals who shared their stories
                    </p>
                </div>
            </section>
        </div>
    );
};


export default WebStoriesFeed;
