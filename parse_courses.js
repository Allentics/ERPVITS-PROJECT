const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

const courses = [];
let currentCourse = null;

// Helper to clean text
const clean = (text) => text?.replace(/\s+/g, " ").trim();

// Iterate through all root elements
$("body").children().each((i, el) => {
    const text = $(el).text();
    const isMarker = text.includes("✔️") && (text.includes("Page") || text.includes("Training")); // e.g., "✔️ Ariba Page"

    if (isMarker) {
        if (currentCourse) {
            courses.push(currentCourse);
        }
        const titleRaw = text.replace(/✔️/g, "").replace(/Page/g, "").trim();
        // Skip Homepage
        if (titleRaw.toLowerCase().includes("home")) {
            currentCourse = null; // Ignore home section storage in courses array
        } else {
            currentCourse = {
                id: titleRaw.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                title: titleRaw,
                heroHeading: "",
                heroSubheading: "",
                description: "",
                features: [],
                curriculum: [],
                faqs: [],
                temp_modules_text: "", // Accumulator to parse modules later
            };
        }
    } else if (currentCourse) {
        const tagName = $(el).prop("tagName");
        const content = clean($(el).text());

        // Hero Heading (First H1)
        if (tagName === "H1" && !currentCourse.heroHeading) {
            currentCourse.heroHeading = content;
        }

        // Curriculum (H3 Module X or similar)
        if (tagName === "H3" && content.toLowerCase().includes("module")) {
            currentCourse.curriculum.push({
                title: content,
                topics: [] // We should grab following UL/P as topics
            });
        }

        // Add topics to last module
        if ((tagName === "UL" || tagName === "P") && currentCourse.curriculum.length > 0) {
            const lastModule = currentCourse.curriculum[currentCourse.curriculum.length - 1];
            // If it's a list, add items
            if (tagName === "UL") {
                $(el).find("li").each((j, li) => {
                    lastModule.topics.push(clean($(li).text()));
                });
            }
        }

        // FAQ (H2/H6 FAQ)
        if (content.includes("Frequently Asked Questions")) {
            currentCourse.inFaqSection = true;
        }

        if (currentCourse.inFaqSection) {
            // Rough FAQ extraction
            if (content.endsWith("?")) {
                currentCourse.faqs.push({ question: content, answer: "" });
            } else if (currentCourse.faqs.length > 0) {
                const lastFaq = currentCourse.faqs[currentCourse.faqs.length - 1];
                if (!lastFaq.answer) lastFaq.answer = content;
            }
        }
    }
});

// Push last course
if (currentCourse) courses.push(currentCourse);

// Save
fs.writeFileSync("courses.json", JSON.stringify(courses, null, 2));
console.log(`Parsed ${courses.length} courses.`);
