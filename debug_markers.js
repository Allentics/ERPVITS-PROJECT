const fs = require("fs");
const html = fs.readFileSync("extracted_courses.html", "utf8");
// Print context around all ✔️
const regex = /.{0,50}✔️.{0,50}/g;
const matches = html.match(regex);
console.log(matches ? matches.map(m => m.trim()).join("\n") : "No matches");
