const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

$("body").find("*").each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 3 && text.length < 60 && text.toLowerCase().includes("sap")) {
        console.log(`POSSIBLE HEADER: "${text}"`);
    }
});
