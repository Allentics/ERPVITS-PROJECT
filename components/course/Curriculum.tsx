"use client";

import { useState } from 'react';
import { Course, CurriculumModule } from '@/lib/courseData';
import { ChevronDown, Book, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface CurriculumProps {
    course?: Course;
    modules?: CurriculumModule[];
}

const Curriculum = ({ course, modules }: CurriculumProps) => {
    // Open first module by default? Or none.
    const [openModule, setOpenModule] = useState<number | null>(0);

    const data = modules || course?.curriculum || [];

    const toggle = (idx: number) => {
        setOpenModule(openModule === idx ? null : idx);
    };

    return (
        <section className="py-16 bg-white" id="curriculum">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Curriculum</h2>

                <div className="space-y-4">
                    {data.map((module, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <button
                                onClick={() => toggle(idx)}
                                className={cn(
                                    "w-full flex justify-between items-center p-5 text-left transition-colors",
                                    openModule === idx ? "bg-blue-50 text-blue-900" : "bg-white text-gray-800 hover:bg-gray-50"
                                )}
                            >
                                <div className="flex items-center">
                                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                                        {idx + 1}
                                    </span>
                                    <span className="font-semibold text-lg">{module.title}</span>
                                </div>
                                <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", openModule === idx && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {openModule === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden bg-white"
                                    >
                                        <div className="p-5 pl-16 border-t border-gray-100">
                                            <ul className="space-y-3">
                                                {module.topics.map((topic, tIdx) => (
                                                    <li key={tIdx} className="flex items-start text-gray-600 text-sm">
                                                        <PlayCircle className="h-4 w-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                                {module.topics.length === 0 && (
                                                    <li className="text-gray-400 italic text-sm">Detailed topics covered in live session.</li>
                                                )}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    {data.length === 0 && (
                        <p className="text-center text-gray-500">Curriculum details are being updated. Please contact support.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
