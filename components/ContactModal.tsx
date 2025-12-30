"use client";

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

export default function ContactModal({ isOpen, onClose, title = "Get Started with SAP" }: ContactModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div
                ref={modalRef}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200"
            >
                <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-white/80 backdrop-blur-sm">
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="px-8 pb-8 pt-2">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                        <p className="text-gray-600 mt-2">Fill out the form below and our experts will get back to you shortly.</p>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
