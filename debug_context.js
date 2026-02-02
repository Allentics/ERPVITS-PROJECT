const fs = require("fs");
const html = fs.readFileSync("extracted_courses.html", "utf8");
const target = "Analytics Cloud";
let index = html.indexOf(target);
while (index !== -1) {
    console.log("--- MATCH ---");
    console.log(html.substring(Math.max(0, index - 200), Math.min(html.length, index + 200)));
    index = html.indexOf(target, index + 1);
}
