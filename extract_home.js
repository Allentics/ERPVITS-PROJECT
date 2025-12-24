const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

// Find Home Page section
let isHome = false;
let homeBuffer = [];

$("body").find("*").each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes("✔️ Home Page")) {
        isHome = true;
    } else if (text.includes("✔️") && text.includes("Page") && !text.includes("Home")) {
        isHome = false;
    }

    if (isHome) {
        if (text.length > 0) homeBuffer.push(text);
    }
});

console.log(homeBuffer.join("\n"));
