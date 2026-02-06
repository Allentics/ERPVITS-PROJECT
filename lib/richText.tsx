import React from 'react';

// Helper to render text with **bold**, _italic_, [links](url), and common HTML tags (a, b, i, strong, em, span)
export const renderRichText = (text: any) => {
    if (!text) return null;
    if (typeof text !== 'string') return text;

    // Decode HTML entities (specifically &amp; which is showing up in some strings)
    let processedText = text.replace(/&amp;/g, '&');
    if (processedText.includes("100% Hands-On") && !processedText.includes("<span") && !processedText.includes("<orange>")) {
        processedText = processedText.replace("100% Hands-On", '<span class="text-[#ff4500]">100% Hands-On</span>');
    }

    // Regex for: 1. HTML links, 2. Markdown links, 3. Bold/Italic (Markdown & HTML), 4. Orange highlights, 5. Spans with classes, 6. Line breaks
    // Using [\s\S]*? to handle multi-line content correctly
    const pattern = /(<a\s+[\s\S]*?href=["'][\s\S]*?["'][\s\S]*?>[\s\S]*?<\/a>|\[[^\]]+\]\([^)]+\)|\*\*[\s\S]*?\*\*|__[\s\S]*?__|<b>[\s\S]*?<\/b>|<strong>[\s\S]*?<\/strong>|<i>[\s\S]*?<\/i>|<em>[\s\S]*?<\/em>|<orange>[\s\S]*?<\/orange>|<span[\s\S]*?class=["'][\s\S]*?["'][\s\S]*?>[\s\S]*?<\/span>|<br\s*\/?>)/gi;
    const parts = processedText.split(pattern);

    return parts.map((part, index) => {
        if (!part) return null;

        // Line breaks
        if (part.toLowerCase().match(/^<br\s*\/?>$/)) {
            return <br key={index} />;
        }

        // Check for span with classes
        const spanMatch = part.match(/^<span\s+[\s\S]*?class=["']([\s\S]*?)["'][\s\S]*?>([\s\S]*?)<\/span>$/i);
        if (spanMatch) {
            return (
                <span key={index} className={spanMatch[1]}>
                    {spanMatch[2]}
                </span>
            );
        }

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

        // Bold (Markdown: ** or __, HTML: <b> or <strong>)
        if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('__') && part.endsWith('__'))) {
            return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        if (part.toLowerCase().startsWith('<b>') || part.toLowerCase().startsWith('<strong>')) {
            const content = part.replace(/^<[^>]+>|<\/[^>]+>$/gi, '');
            return <strong key={index} className="font-bold text-slate-900">{content}</strong>;
        }

        // Italic (HTML: <i> or <em>) - Markdown italic (_) not explicitly handled to avoid conflict with links/snake_case
        if (part.toLowerCase().startsWith('<i>') || part.toLowerCase().startsWith('<em>')) {
            const content = part.replace(/^<[^>]+>|<\/[^>]+>$/gi, '');
            return <em key={index} className="italic text-slate-800">{content}</em>;
        }

        return <span key={index}>{part}</span>;
    });
};
