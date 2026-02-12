const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'scripts', 'restore_ewm_current_db_state.sql');

try {
    const content = fs.readFileSync(filePath, 'utf8');

    console.log("File size:", content.length);
    console.log("Has 'Week 1-2'?", content.includes("Week 1-2"));
    console.log("Has 'Week 1-4'?", content.includes("Week 1-4"));
    console.log("Has 'detailed_post_training_journey'?", content.includes("detailed_post_training_journey"));

} catch (err) {
    console.error("Error reading file:", err);
}
