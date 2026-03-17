
/**
 * Utility to process blog content and ensure proper HTML structure.
 * Handles both raw HTML and plain text with auto-formatting.
 * 
 * @param content The raw blog content string
 * @param force If true, forces auto-formatting even if some HTML structure is detected
 */
export function formatBlogContent(content: string, force = false): string {
    if (!content) return '';

    // 1. Normalize image paths
    let processed = content.replace(/src=["']([^"']+)["']/g, (match, src) => {
        let normalized = src
            .replace(/\/images\/blog\/blog\//i, '/images/blogs/')
            .replace(/\/images\/blog\//i, '/images/blogs/');
        return `src="${normalized}"`;
    });

    // 2. Identification
    const hasStructure = /<h[1-6]\b|<section\b|<ul\b|<ol\b|<table\b|<blockquote\b/i.test(processed);
    const hasManyParagraphs = (processed.match(/<p\b/g) || []).length > 3;

    if (!force && (hasStructure || hasManyParagraphs)) {
        return processed.trim();
    }

    // 3. Normalization for auto-structuring
    let text = processed;
    if (force) {
        // Strip structural tags but preserve images/links/formatting tags (b, i, strong, em, a)
        text = text
            .replace(/<\/?(p|h[1-6]|section|div|br|header|footer|article|main)\b[^>]*>/gi, '\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
    }

    // Standardize header markers (H2:, ##, etc.) to a internal marker
    text = text.replace(/^\s*(H[1-6]|Heading\s*[1-6]):?\s*/gim, '## ');

    // Convert special bullet points to standard markers
    text = text.replace(/[•●▪∗]/g, '\n- ');

    // 4. State-Based Parsing
    // Group lines into blocks while joining lines that belong in the same paragraph.
    const lines = text.split('\n');
    const finalBlocks: { type: string, content: string }[] = [];
    let currentParagraphLines: string[] = [];

    const flush = () => {
        if (currentParagraphLines.length > 0) {
            const joined = currentParagraphLines.join(' ').replace(/\s+/g, ' ').trim();
            if (joined) finalBlocks.push({ type: 'p', content: joined });
            currentParagraphLines = [];
        }
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) {
            flush();
            continue;
        }

        // Detect high-confidence standalone types
        const isMarkdownHeader = /^#{1,6}\s/.test(line);
        const isListItem = /^([-*]|\d+\.)\s/.test(line);
        const isStandaloneTag = /^<(img|iframe|video|div|blockquote|script)/i.test(line);

        // Smart Header Heuristic:
        // Standalone lines that are short, title-cased, and have no sentence-ending punctuation.
        const prevEmpty = i === 0 || lines[i - 1].trim() === '';
        const nextEmpty = i === lines.length - 1 || lines[i + 1].trim() === '';
        const isHeaderCandidate = line.length < 90 && !/[.?!]/.test(line) && /^[A-Z]/.test(line);
        const isStandaloneHeader = isHeaderCandidate && (prevEmpty || nextEmpty || line.endsWith(':'));

        if (isMarkdownHeader || isListItem || isStandaloneTag || isStandaloneHeader) {
            flush();
            let type = 'p';
            let cleanContent = line;

            if (isMarkdownHeader) {
                const level = line.match(/^#+/)?.[0].length || 2;
                type = `h${Math.min(level, 4)}`;
                cleanContent = line.replace(/^#+\s*/, '');
            } else if (isListItem) {
                type = 'li';
                cleanContent = line.replace(/^([-*]|\d+\.)\s/, '');
            } else if (isStandaloneTag) {
                type = 'raw';
            } else if (isStandaloneHeader) {
                type = 'h2';
                cleanContent = line.replace(/:$/, '');
            }

            finalBlocks.push({ type, content: cleanContent });
        } else {
            // Continuation of a paragraph
            currentParagraphLines.push(line);
        }
    }
    flush();

    // 5. Build HTML with Premium Presentation
    let out = '';
    let inList = false;

    finalBlocks.forEach(block => {
        if (block.type === 'li') {
            if (!inList) {
                out += '<ul class="my-8 space-y-3">\n';
                inList = true;
            }
            out += `  <li class="flex items-start gap-3 text-slate-700"><span class="text-orange-500 mt-1">•</span><span>${block.content}</span></li>\n`;
            return;
        } else if (inList) {
            out += '</ul>\n\n';
            inList = false;
        }

        switch (block.type) {
            case 'h2':
                out += `<h2 class="mt-16 mb-8 text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">${block.content}</h2>\n`;
                break;
            case 'h3':
                out += `<h3 class="mt-12 mb-6 text-2xl font-bold text-slate-800">${block.content}</h3>\n`;
                break;
            case 'h4':
                out += `<h4 class="mt-10 mb-4 text-xl font-bold text-slate-800">${block.content}</h4>\n`;
                break;
            case 'p':
                out += `<p class="mb-8 text-lg leading-relaxed text-slate-600">${block.content}</p>\n`;
                break;
            case 'raw':
                out += `${block.content}\n`;
                break;
        }
    });

    if (inList) out += '</ul>\n';

    return out.trim();
}
