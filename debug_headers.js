const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

$("p, h1, h2, h3, a").each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 5 && text.length < 100 && (text.includes("SAP") || text.includes("✔️"))) {
        console.log(text);
    }
});
