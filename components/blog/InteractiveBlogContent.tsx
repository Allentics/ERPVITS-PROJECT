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

    return (
        <>
            <div 
                className="blog-content blog-content-area"
                dangerouslySetInnerHTML={{ __html: content }} 
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
