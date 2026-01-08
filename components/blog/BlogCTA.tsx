import React from 'react';

interface BlogCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

const BlogCTA = ({
    title = "Ready to Transform Your Career?",
    description = "Join ERPVITS today and discover why our graduates consistently secure positions at leading organizations worldwide.",
    buttonText = "Join Today",
    buttonLink = "#enroll"
}: BlogCTAProps) => {
    return (
        <div className="mt-12 p-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-white !mt-0">{title}</h3>
            <p className="mb-6 opacity-90 text-white">{description}</p>
            <a
                href={buttonLink}
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors no-underline"
            >
                {buttonText}
            </a>
        </div>
    );
};

export default BlogCTA;
