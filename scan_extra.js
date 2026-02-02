const fs = require("fs");
const html = fs.readFileSync("extracted_courses.html", "utf8");

const terms = [
    "Prerequisites",
    "Who Should Attend",
    "Certification",
    "Key Features",
    "Course Highlights",
    "About the Course",
    "Salary",
    "Market Trends"
];

terms.forEach(term => {
    const count = (html.match(new RegExp(term, "gi")) || []).length;
    console.log(`[${term}]: Found ${count} times`);
    if (count > 0) {
        // Show snippet
        const idx = html.toLowerCase().indexOf(term.toLowerCase());
        console.log(`Snippet: ${html.substring(idx, idx + 100).replace(/\n/g, " ")}`);
    }
});
