const fs = require("fs");
const fd = fs.openSync("extracted_courses.html", "r");
const stat = fs.statSync("extracted_courses.html");
const buffer = Buffer.alloc(500);
fs.readSync(fd, buffer, 0, 500, stat.size - 500);
console.log(buffer.toString());
fs.closeSync(fd);
