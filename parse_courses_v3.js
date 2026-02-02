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

    // Marker Detection: Look for "✔️" and a keyword
    if (text.includes("✔️") && (text.includes("Page") || text.includes("Training"))) {
        let matchedKey = null;
        let matchedTitle = text.replace(/✔️/g, "").replace(/Page/g, "").trim();

        for (const ck of courseKeywords) {
            // Check if text matches the keyword
            // We want to map it to the correct key to detect which course it is
            if (ck.match.test(text)) {
                matchedKey = ck.key;
                break;
            }
        }

        // If we found a key, or even if we didn't (generic course?), start new
        // Ideally we only start if matchedKey is found to map to ID correctly.
        if (matchedKey) {
            if (currentCourse) courses.push(currentCourse);

            // Format ID and Title
            // Ensure title has proper casing or generic
            if (!matchedTitle.toLowerCase().includes("sap")) matchedTitle = "SAP " + matchedTitle;

            currentCourse = {
                id: matchedKey, // Use our standardized key as ID
                title: matchedTitle,
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

    // --- Content Extraction ---
    // Hero Heading
    if ((block.tag === "H1" || text.startsWith("H1:")) && !currentCourse.heroHeading) {
        currentCourse.heroHeading = text.replace(/^H1[:\s]*/, "");
        continue;
    }

    // Curriculum
    const moduleMatch = text.match(/(Module\s+\d+|H3[:\s]*Module\s+\d+)/i) || (block.tag === "H3" && text.toLowerCase().includes("module"));
    if (moduleMatch) {
        const modTitle = text.replace(/^H3[:\s]*/, "").trim();
        currentCourse.curriculum.push({ title: modTitle, topics: [] });
        currentCourse.inFaqSection = false;
        continue;
    }

    // Topics
    if (currentCourse.curriculum.length > 0 && !currentCourse.inFaqSection) {
        if (!["H1", "H2", "H3"].includes(block.tag)) {
            const lastMod = currentCourse.curriculum[currentCourse.curriculum.length - 1];
            // Simple heuristic to avoid adding module title again
            if (text !== lastMod.title && text.length > 5 && !text.includes("FAQs")) {
                lastMod.topics.push(text);
            }
        }
    }

    // FAQ Section
    if (text.toLowerCase().includes("frequently asked questions") || text.includes("H6: Frequently Asked Questions")) {
        currentCourse.inFaqSection = true;
        continue;
    }

    // FAQs
    if (currentCourse.inFaqSection) {
        if (text.includes("?") && text.length > 10) {
            currentCourse.faqs.push({ question: text, answer: "" });
        } else if (currentCourse.faqs.length > 0) {
            const lastFaq = currentCourse.faqs[currentCourse.faqs.length - 1];
            if (!lastFaq.answer && text.length > 10) lastFaq.answer = text;
        }
    }
}

if (currentCourse) courses.push(currentCourse);

fs.writeFileSync("courses.json", JSON.stringify(courses, null, 2));
console.log(`Parsed ${courses.length} courses: ` + courses.map(c => c.id).join(", "));
