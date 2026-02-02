const mammoth = require("mammoth");
const fs = require("fs");

const options = {
    convertImage: mammoth.images.imgElement(function(image) {
        return Promise.resolve({ src: "IMAGE_PLACEHOLDER" });
    })
};

mammoth.convertToHtml({path: "raw_assets/ERPVITS New Website Content.docx"}, options)
    .then(function(result){
        fs.writeFileSync("extracted_courses.html", result.value);
        console.log("Extraction complete.");
    })
    .catch(console.error);
