const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

console.log("--- H1 Tags ---");
$("h1").each((i, el) => console.log($(el).text().trim()));

console.log("\n--- H2 Tags ---");
$("h2").each((i, el) => console.log($(el).text().trim()));

console.log("\n--- Potential Page Markers (text containing 'Page') ---");
$("p, h1, h2, h3").each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes("Page") && text.length < 50) {
        console.log(text);
    }
});
