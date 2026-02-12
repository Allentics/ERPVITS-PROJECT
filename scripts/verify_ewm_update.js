const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'restore_ewm_current_db_state.sql');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = "sections = '";
const endMarker = "'::jsonb";
const startIndex = content.indexOf(startMarker);
const endIndex = content.lastIndexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find sections JSON block.");
    process.exit(1);
}

const sqlJsonString = content.substring(startIndex + startMarker.length, endIndex);
const jsonString = sqlJsonString.replace(/''/g, "'");

try {
    const sections = JSON.parse(jsonString);
    const journey = sections.find(s => s.type === 'detailed_post_training_journey');
    if (journey) {
        console.log(JSON.stringify(journey, null, 2));
    } else {
        console.log("detailed_post_training_journey NOT FOUND in sections.");
    }
} catch (e) {
    console.error("Failed to parse JSON:", e);
}
