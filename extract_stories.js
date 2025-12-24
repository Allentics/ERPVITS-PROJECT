const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("extracted_courses.html", "utf8");
const $ = cheerio.load(html);

let isStories = false;
let storiesBuffer = [];

$("body").find("*").each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes("Web Stories Page")) {
        isStories = true;
    } else if (text.includes("✔️") && !text.includes("Web Stories")) {
        isStories = false;
    }

    if (isStories && text.length > 0) {
        storiesBuffer.push(text);
    }
});

console.log(storiesBuffer.join("\n"));
