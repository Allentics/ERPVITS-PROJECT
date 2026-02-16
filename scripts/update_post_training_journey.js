const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'restore_ewm_current_db_state.sql');
let content = fs.readFileSync(filePath, 'utf8');

// Extract the JSON content
const startMarker = "sections = '";
const endMarker = "'::jsonb";

const startIndex = content.indexOf(startMarker);
const endIndex = content.lastIndexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find sections JSON block in SQL file.");
    process.exit(1);
}

const sqlJsonString = content.substring(startIndex + startMarker.length, endIndex);
// Unescape single quotes for JSON parsing
const jsonString = sqlJsonString.replace(/''/g, "'");

let sections;
try {
    sections = JSON.parse(jsonString);
} catch (e) {
    console.error("Failed to parse JSON:", e);
    process.exit(1);
}

// New object to insert
const newJourney = {
    "type": "detailed_post_training_journey",
    "title": "What to Expect After Completing SAP EWM Training – <span class=\"text-orange-600\">Your Growth Roadmap</span>",
    "stats": [
        { "icon": "Clock", "label": "Average Time to First Role", "value": "2-3 Months" },
        { "icon": "Briefcase", "label": "Career support Provided", "value": "100%" },
        { "icon": "Headphones", "label": "Post-Training support", "value": "6 Months" },
        { "icon": "Users", "label": "Alumni Network Access", "value": "Lifetime" }
    ],
    "items": [
        {
            "icon": "CheckCircle2",
            "title": "Immediate Post-Training",
            "timeline": "Week 1-2",
            "color": "orange",
            "points": [
                "Receive course completion certificate",
                "Access lifetime course materials and recordings",
                "Join alumni network and community forum",
                "Begin resume updates highlighting SAP EWM expertise",
                "Start building your warehouse project portfolio"
            ]
        },
        {
            "icon": "Rocket",
            "title": "Certification & Job Search",
            "timeline": "Week 3-6",
            "color": "slate",
            "points": [
                "Apply for SAP EWM Certification exam (C_S4EWM_2023)",
                "Start job search with career services support",
                "Participate in alumni networking events and webinars",
                "Receive interview coaching and mock interview feedback",
                "Update LinkedIn profile with new certifications"
            ]
        },
        {
            "icon": "TrendingUp",
            "title": "Landing the Job",
            "timeline": "Month 2-3",
            "color": "orange",
            "points": [
                "Secure first SAP EWM consulting opportunity (typical timeline)",
                "Begin real-world warehouse project experience",
                "Continue post-training support from instructors",
                "Network with industry peers and warehouse professionals"
            ]
        },
        {
            "icon": "Briefcase",
            "title": "First Year in Role",
            "timeline": "Months 1-12",
            "color": "slate",
            "points": [
                "Months 1-3: Learn your client's warehouse operations, understand current processes, map out optimization opportunities, get hands-on experience with actual EWM implementations",
                "Months 4-6: Lead small configuration tasks, support warehouse planning, mentor other junior consultants, build reputation for reliability and quality work",
                "Months 7-12: Lead warehouse management components, drive process improvements, demonstrate business acumen alongside technical skills, contribute to larger implementation programs"
            ]
        },
        {
            "icon": "Award",
            "title": "Long-Term Growth",
            "timeline": "1-5 Years",
            "color": "orange",
            "points": [
                "Earn SAP EWM certifications and maintain credentials",
                "Build domain expertise in specific industries (Manufacturing, E-commerce, Pharma, Logistics)",
                "Develop leadership and project management capabilities",
                "Transition to senior consulting roles or warehouse management",
                "Explore specializations (warehouse automation, advanced analytics, optimization)",
                "Pursue SAP partnership or independent consulting opportunities"
            ]
        }
    ]
};

// Update the sections array
const index = sections.findIndex(s => s.type === 'detailed_post_training_journey');
if (index !== -1) {
    sections[index] = newJourney;
    console.log("Updated existing detailed_post_training_journey section.");
} else {
    sections.push(newJourney);
    console.log("Added new detailed_post_training_journey section.");
}

// Convert back to JSON string and escape for SQL
const newJsonString = JSON.stringify(sections);
const newSqlJsonString = newJsonString.replace(/'/g, "''");

// Reconstruct the file content
const newContent = content.substring(0, startIndex + startMarker.length) +
    newSqlJsonString +
    content.substring(endIndex);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully updated restore_ewm_current_db_state.sql");
