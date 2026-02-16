"use client";

import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

interface CourseEnrollmentCTAProps {
    courseTitle?: string;
}

export default function CourseEnrollmentCTA({ courseTitle }: CourseEnrollmentCTAProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="enroll" className="py-12 bg-slate-900 text-center text-white mt-12">
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Reserve Your Seat"
                defaultCourse={courseTitle}
            />
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Career?</h2>
                <p className="text-xl text-blue-200 mb-10">
                    Join our upcoming batch and get 100% placement assistance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block px-8 py-4 bg-[#ff4500] hover:bg-[#ff4500] text-white font-bold rounded-lg shadow-lg transition-colors"
                    >
                        Reserve Your Seat
                    </button>
                    <a href="tel:+918408878222" className="inline-block px-8 py-4 bg-transparent border border-white hover:bg-white/10 text-white font-bold rounded-lg transition-colors">
                        Call for Details
                    </a>
                </div>
            </div>
        </section>
    );
}
