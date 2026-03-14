"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function InteractiveBlogContent({ content, title }: { content: string, title?: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');

        if (link && link.getAttribute('href') === '#open-enquiry-modal') {
            e.preventDefault();
            setIsModalOpen(true);
        }
    };

    const formattedContent = (() => {
        if (!content) return '';
        // Fix image paths in HTML content (normalize all variants to /images/blogs/)
        let processed = content;
        processed = processed.replace(/src=["']([^"']+)["']/g, (match, src) => {
            let normalized = src
                .replace(/\/images\/blog\/blog\//i, '/images/blogs/')  // fix double-nested
                .replace(/\/images\/blog\//i, '/images/blogs/');        // normalize blog -> blogs
            return `src="${normalized}"`;
        });

        // If it already has HTML tags, respect them
        if (/<[a-z][\s\S]*>/i.test(processed)) return processed;

        // Otherwise, convert newlines to paragraphs for plain text
        return processed
            .split(/\n\s*\n/)
            .map(p => p.trim())
            .filter(p => p.length > 0)
            .map(p => `<p>${p}</p>`)
            .join('\n');
    })();

    return (
        <>
            <div
                className="blog-content blog-content-area"
                dangerouslySetInnerHTML={{ __html: formattedContent }}
                onClick={handleClick}
            />
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title ? `Enquire about: ${title}` : "Course Enquiry Form"}
                subtitle="Fill out the form below and our experts will get back to you shortly."
            />
        </>
    );
}
