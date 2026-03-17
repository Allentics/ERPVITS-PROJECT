
/**
 * Utility to process blog content and ensure proper HTML structure.
 * Handles both raw HTML and plain text with auto-formatting.
 */
export function formatBlogContent(content: string): string {
    if (!content) return '';

    // 1. Normalize image paths (fix common nesting issues in the DB/Local files)
    let processed = content.replace(/src=["']([^"']+)["']/g, (match, src) => {
        let normalized = src
            .replace(/\/images\/blog\/blog\//i, '/images/blogs/')
            .replace(/\/images\/blog\//i, '/images/blogs/');
        return `src="${normalized}"`;
    });

    // 2. Identify if the content is already structured HTML.
    // We check for common structural tags like <p>, <h2>, <section>, <ul>.
    // Basic detection like <[a-z]> is too sensitive and can fail on single tags like <img>.
    const hasStructure = /<p>|<h1|<h2|<h3|<section|<ul/i.test(processed);

    if (hasStructure) {
        return processed;
    }

    // 3. Auto-Format Plain Text into clean HTML
    // Split by double newlines or single newlines that are clearly separated
    const fragments = processed.split(/\n\s*\n/).map(f => f.trim()).filter(f => f.length > 0);

    return fragments.map((block, index) => {
        // --- Heuristic for Heading Detection ---
        const isShort = block.length < 120;
        const noFinalPeriod = !block.endsWith('.') && !block.endsWith(',');
        const endsInColon = block.endsWith(':');
        const isTitleCase = /^[A-Z]/.test(block); // Likely starts with uppercase
        const isNumericHeader = /^\d+\.?\s/.test(block); // e.g. "1. Introduction"

        // --- Heuristic for List Detection ---
        const hasBullets = block.includes('\n- ') || block.includes('\n* ') || block.startsWith('- ') || block.startsWith('* ');

        if (hasBullets) {
            const listItems = block
                .split(/\n?[-*]\s/)
                .map(item => item.trim())
                .filter(item => item.length > 0);

            if (listItems.length > 1) {
                return `<ul>\n${listItems.map(item => `  <li>${item}</li>`).join('\n')}\n</ul>`;
            }
        }

        // Apply Heading tag if it looks like a header
        if (isShort && (noFinalPeriod || endsInColon || isNumericHeader) && isTitleCase) {
            // First header is probably the main one, but <h2> is safer inside an article
            return `<h2>${block.replace(/:$/, '')}</h2>`;
        }

        // Default to Paragraph
        return `<p>${block}</p>`;
    }).join('\n\n');
}
