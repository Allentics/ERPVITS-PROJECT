const fs = require("fs");
const html = fs.readFileSync("extracted_courses.html", "utf8");
// Regex to find "✔️" and surrounding text
const regex = />([^<]*✔️[^<]*)<|✔️[^<]*/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log("Marker Found:", match[0].trim());
}
