const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

const courseKeywords = [
    { key: "ariba", match: /Ariba/i },
    { key: "fieldglass", match: /Fieldglass/i },
    { key: "trm", match: /TRM|Treasury/i },
    { key: "mm", match: /MM|Material Management/i },
    { key: "fico", match: /FICO|Financial Accounting/i },
    { key: "sd", match: /SD|Sales and Distribution/i },
    { key: "c4c-technical", match: /C4C Technical/i },
    { key: "cpi", match: /CPI/i },
    { key: "abap-cloud", match: /ABAP on Cloud/i },
    { key: "analytics-cloud", match: /Analytics Cloud|SAC/i },
    { key: "btp", match: /BTP/i },
    { key: "brim", match: /BRIM/i },
    { key: "ppds", match: /PPDS/i },
    { key: "tm", match: /TM|Transportation Management/i },
    { key: "ewm", match: /EWM/i },
    { key: "ibp", match: /IBP/i },
    { key: "mdg", match: /MDG/i },
    { key: "c4c-functional", match: /C4C Functional/i },
    { key: "abap-hana", match: /ABAP on HANA/i }
];

const courses = [];
let currentCourse = null;

const clean = (text) => text?.replace(/\s+/g, " ").trim();

const blocks = [];
$("body").find("*").each((i, el) => {
    const tag = $(el).prop("tagName");
    if (["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "TD"].includes(tag)) {
        blocks.push({
            tag: tag,
            text: clean($(el).text()),
            html: $(el).html()
        });
    }
});

for (const block of blocks) {
    const text = block.text;

    // Aggressive Marker Detection
    // 1. Checkmark
    // 2. Numbered like "18. SAP ..."
    // 3. Just the name in a Header tag

    let matchedKey = null;
    let rank = 0; // Confidence rank

    for (const ck of courseKeywords) {
        if (ck.match.test(text)) {
            // Check context
            if (text.includes("✔️") && (text.includes("Page") || text.includes("Training"))) {
                matchedKey = ck.key; rank = 3;
            } else if (/^\d+\.\s*SAP/.test(text) && text.length < 50) {
                matchedKey = ck.key; rank = 3;
            } else if (["H1", "H2"].includes(block.tag) && text.length < 50) {
                matchedKey = ck.key; rank = 2; // Medium confidence
            } else if (text.length < 40 && text.includes("Page")) {
                matchedKey = ck.key; rank = 2;
            }
            if (matchedKey) break;
        }
    }

    if (matchedKey && rank >= 2) {
        // Only switch if we haven't just switched or if it's clearly a new section
        // Avoid duplicate triggers on same title
        const lastId = courses.length > 0 ? courses[courses.length - 1].id : "";
        if (lastId !== matchedKey) {
            if (currentCourse) courses.push(currentCourse);

            let cleanTitle = text.replace(/✔️/g, "").replace(/^\d+\.\s*/, "").replace(/Page/g, "").trim();
            if (!cleanTitle.toLowerCase().includes("sap")) cleanTitle = "SAP " + cleanTitle;

            currentCourse = {
                id: matchedKey,
                title: cleanTitle,
                heroHeading: "",
                heroSubheading: "",
                features: [],
                curriculum: [],
                faqs: [],
                inFaqSection: false
            };
            continue;
        }
    }

    if (!currentCourse) continue;

    // --- Content Extraction (Same as before) ---
    if ((block.tag === "H1" || text.startsWith("H1:")) && !currentCourse.heroHeading) {
        currentCourse.heroHeading = text.replace(/^H1[:\s]*/, "");
        continue;
    }

    const moduleMatch = text.match(/(Module\s+\d+|H3[:\s]*Module\s+\d+)/i) || (block.tag === "H3" && text.toLowerCase().includes("module"));
    if (moduleMatch) {
        const modTitle = text.replace(/^H3[:\s]*/, "").trim();
        currentCourse.curriculum.push({ title: modTitle, topics: [] });
        currentCourse.inFaqSection = false;
        continue;
    }

    if (currentCourse.curriculum.length > 0 && !currentCourse.inFaqSection) {
        if (!["H1", "H2", "H3"].includes(block.tag)) {
            const lastMod = currentCourse.curriculum[currentCourse.curriculum.length - 1];
            if (text !== lastMod.title && text.length > 5 && !text.includes("FAQs")) {
                lastMod.topics.push(text);
            }
        }
    }

    if (text.toLowerCase().includes("frequently asked questions") || text.includes("H6: Frequently Asked Questions")) {
        currentCourse.inFaqSection = true;
        continue;
    }

    if (currentCourse.inFaqSection) {
        if (text.includes("?") && text.length > 10) {
            currentCourse.faqs.push({ question: text, answer: "" });
        } else if (currentCourse.faqs.length > 0) {
            const lastFaq = currentCourse.faqs[currentCourse.faqs.length - 1];
            if (!lastFaq.answer && text.length > 10) lastFaq.answer = text;
        }
    }
}

if (currentCourse && courses[courses.length - 1] !== currentCourse) courses.push(currentCourse);

// Deduplicate by ID (keep first or last? implied order is sequential)
const uniqueCourses = [];
const seenIds = new Set();
for (const c of courses) {
    if (!seenIds.has(c.id)) {
        uniqueCourses.push(c);
        seenIds.add(c.id);
    }
}

fs.writeFileSync("courses.json", JSON.stringify(uniqueCourses, null, 2));
console.log(`Parsed ${uniqueCourses.length} courses: ` + uniqueCourses.map(c => c.id).join(", "));
