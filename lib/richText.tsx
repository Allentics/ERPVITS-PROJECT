import React from 'react';

/**
 * Helper to render text with **bold**, _italic_, [links](url), and common HTML tags (a, b, i, strong, em)
 */
export const renderRichText = (text: string) => {
    if (!text) return null;

    // Regex for: 1. HTML links, 2. Markdown links, 3. Bold/Italic (Markdown & HTML), 4. Orange highlights
    const pattern = /(<a\s+[\s\S]*?href=["'][\s\S]*?["'][\s\S]*?>[\s\S]*?<\/a>|\[[^\]]+\]\([^)]+\)|\*\*[\s\S]*?\*\*|__[\s\S]*?__|<b>[\s\S]*?<\/b>|<strong>[\s\S]*?<\/strong>|<i>[\s\S]*?<\/i>|<em>[\s\S]*?<\/em>|<orange>[\s\S]*?<\/orange>)/g;
    const parts = text.split(pattern);

    return parts.map((part, index) => {
        if (!part) return null;

        // Orange Highlights (Custom tag <orange>)
        if (part.toLowerCase().startsWith('<orange>')) {
            const content = part.replace(/^<orange>|<\/orange>$/gi, '');
            return (
                <span
                    key={index}
                    className="text-[#ff4500] underline underline-offset-4 decoration-[#ff4500]/40 font-medium"
                >
                    {content}
                </span>
            );
        }

        // Check if it's an HTML link
        const htmlLinkMatch = part.match(/^<a\s+[\s\S]*?href=["']([\s\S]*?)["'][\s\S]*?>([\s\S]*?)<\/a>$/i);
        if (htmlLinkMatch) {
            return (
                <a
                    key={index}
                    href={htmlLinkMatch[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff4500] hover:text-[#ff4500] underline underline-offset-4 decoration-[#ff4500]/40 transition-colors"
                >
                    {htmlLinkMatch[2]}
                </a>
            );
        }

        // Check if it's a markdown link
        const mdLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (mdLinkMatch) {
            return (
                <a
                    key={index}
                    href={mdLinkMatch[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff4500] hover:text-[#ff4500] underline underline-offset-4 decoration-[#ff4500]/40 transition-colors"
                >
                    {mdLinkMatch[1]}
                </a>
            );
        }

        // Check for Bold/Strong (Markdown ** or <b>/<strong>)
        if (part.match(/^(\*\*|<b>|<strong>)[\s\S]*?(\*\*|<\/b>|<\/strong>)$/)) {
            const content = part.replace(/^(\*\*|<b>|<strong>)|(\*\*|<\/b>|<\/strong>)$/g, '');
            return <strong key={index} className="font-bold text-slate-900">{content}</strong>;
        }

        // Check for Italic/Em (Markdown _ or <i>/<em>)
        if (part.match(/^(_|<i>|<em>)[\s\S]*?(_|<\/i>|<\/em>)$/)) {
            const content = part.replace(/^(_|<i>|<em>)|(_|<\/i>|<\/em>)$/g, '');
            return <em key={index} className="italic">{content}</em>;
        }

        return part;
    });
};
