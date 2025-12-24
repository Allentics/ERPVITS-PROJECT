const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

const courses = [];
let currentCourse = null;

const clean = (text) => text?.replace(/\s+/g, " ").trim();

// Get all text nodes or paragraphs to iterate linearly?
// Cheerio traversal is DOM based.
// Let's flatten the document to a list of text blocks with tags.
const blocks = [];
$("body").find("*").each((i, el) => {
    // Only leaf nodes or specific block tags
    // Better: iterate over direct children of Body if mammoth produces flat structure
    // Mammoth usually produces <p>, <table>, <h1> etc as siblings.
    // If nested, we might duplicate text.
    // Let's iterate body children.
    if ($(el).parent().is("body")) {
        blocks.push({
            tag: $(el).prop("tagName"),
            text: clean($(el).text()),
            html: $(el).html()
        });
    }
});

for (const block of blocks) {
    const text = block.text;

    // 1. Detect Course Start
    if (text.includes("✔️") && (text.includes("Page") || text.includes("Training") || text.length < 50)) {
        // New Course
        // Save previous
        if (currentCourse) {
            courses.push(currentCourse);
        }

        let titleRaw = text.replace(/✔️/g, "").replace(/Page/g, "").trim();

        if (titleRaw.toLowerCase().includes("home")) {
            currentCourse = null;
        } else {
            const id = titleRaw.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            currentCourse = {
                id,
                title: titleRaw,
                heroHeading: "",
                heroSubheading: "",
                description: "",
                features: [],
                curriculum: [],
                faqs: [],
                inFaqSection: false,
                inModule: false
            };
        }
        continue;
    }

    if (!currentCourse) continue;

    // 2. Detect Hero H1
    if ((block.tag === "H1" || text.startsWith("H1:") || text.startsWith("H1 ")) && !currentCourse.heroHeading) {
        currentCourse.heroHeading = text.replace(/^H1[:\s]*/, "").trim();
        continue;
    }

    // 3. Detect Modules
    // Patterns: "Module 1:", "H3: Module 1", "<h3>Module 1"
    const isModuleHeader = (
        (block.tag === "H3" && text.toLowerCase().includes("module")) ||
        text.match(/^Module\s+\d+:/i) ||
        text.match(/^H3[:\s]*Module\s+\d+/i)
    );

    if (isModuleHeader) {
        const modTitle = text.replace(/^H3[:\s]*/, "").trim();
        currentCourse.curriculum.push({
            title: modTitle,
            topics: []
        });
        currentCourse.inFaqSection = false;
        continue;
    }

    // 4. Capture Module Topics
    if (currentCourse.curriculum.length > 0 && !currentCourse.inFaqSection) {
        // If list, add items
        if (block.tag === "UL" || block.tag === "OL") {
            // Parse list items from HTML
            const listItems = $(block.html).find("li").map((i, li) => clean($(li).text())).get();
            // If empty (maybe plain text UL?), use regex
            // Cheerio on string
            const $ul = cheerio.load(block.html || "");
            $ul("li").each((i, li) => {
                currentCourse.curriculum[currentCourse.curriculum.length - 1].topics.push(clean($(li).text()));
            });
        }
        // If P, maybe description? Ignore for now to keep it clean, or add as topic?
    }

    // 5. Detect FAQ Section
    if (text.toLowerCase().includes("frequently asked questions") || text.includes("H6: Frequently Asked Questions")) {
        currentCourse.inFaqSection = true;
        continue;
    }

    // 6. Capture FAQs
    if (currentCourse.inFaqSection) {
        if (text.includes("?") && (block.tag === "P" || block.tag === "H6" || text.match(/^\d+\./))) {
            // Question
            currentCourse.faqs.push({
                question: text,
                answer: ""
            });
        } else if (currentCourse.faqs.length > 0) {
            // Answer
            const lastFaq = currentCourse.faqs[currentCourse.faqs.length - 1];
            if (!lastFaq.answer) {
                lastFaq.answer = text;
            } else {
                // Append if multi-paragraph?
                // lastFaq.answer += " " + text;
            }
        }
    }
}

// Push last
if (currentCourse) courses.push(currentCourse);

fs.writeFileSync("courses.json", JSON.stringify(courses, null, 2));
console.log(`Parsed ${courses.length} courses.`);
