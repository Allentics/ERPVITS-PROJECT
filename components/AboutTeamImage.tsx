"use client";

import React, { useState } from 'react';

export default function AboutTeamImage() {
    // Default to the online placeholder if the local file isn't ready
    // Once you save 'public/assets/images/about-team.jpg', change this back to:
    // const [imgSrc, setImgSrc] = useState('/assets/images/about-team.jpg');
    const [imgSrc, setImgSrc] = useState('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=100');
    const [hasError, setHasError] = useState(false);

    return (
        <div className="rounded-2xl overflow-hidden shadow-2xl skew-y-1 border-4 border-white">
            <img
                src={imgSrc}
                alt="ERPVITS Team"
                className="w-full h-auto object-cover"
                onError={() => {
                    // Try to fallback only once to prevent loops
                    if (!hasError) {
                        setHasError(true);
                        // Using a high-quality Unsplash fallback
                        setImgSrc('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=100');
                    }
                }}
            />
        </div>
    );
}
