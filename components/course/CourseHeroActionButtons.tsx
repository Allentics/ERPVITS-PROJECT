"use client";


import Link from 'next/link';
import { useState } from 'react';
import SyllabusDownloadModal from './SyllabusDownloadModal';


interface CourseHeroActionButtonsProps {
    courseTitle: string;
    syllabusUrl: string;
    themeColor?: string;
    enrollHref: string;
    primaryLabel?: string;
    secondaryLabel?: string;
}

export default function CourseHeroActionButtons({
    courseTitle,
    syllabusUrl,
    themeColor = 'purple',
    enrollHref,
    primaryLabel = "Book Free Demo Class",
    secondaryLabel = "View Curriculum"
}: CourseHeroActionButtonsProps) {
    const isPurple = themeColor === 'purple';
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
                <Link
                    href={enrollHref}
                    className={`text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 text-base ${isPurple
                        ? 'bg-gradient-to-r from-[#ff4500] to-red-600 hover:from-[#cc3700] hover:to-red-700 shadow-[#ff4500]/25'
                        : 'bg-gradient-to-r from-[#ff4500] to-red-600 hover:from-[#cc3700] hover:to-red-700 shadow-[#ff4500]/25'
                        }`}
                >
                    {primaryLabel}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </Link>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white border text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-lg font-bold transition-all shadow-sm text-base block text-center cursor-pointer"
                >
                    {secondaryLabel}
                </button>
            </div>

            <SyllabusDownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseTitle={courseTitle}
                syllabusUrl={syllabusUrl}
            />
        </>
    );
}
