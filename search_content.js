const fs = require("fs");
const html = fs.readFileSync("extracted_courses.html", "utf8");

function search(term) {
    let index = html.indexOf(term);
    if (index === -1) {
        console.log(`[${term}] NOT FOUND`);
        return;
    }
    console.log(`--- [${term}] FOUND ---`);
    console.log(html.substring(Math.max(0, index - 300), Math.min(html.length, index + 300)));
}

search("About Us");
search("Corporate Training");
search("Who Should Attend");
