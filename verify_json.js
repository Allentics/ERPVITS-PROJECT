const courses = require("./courses.json");
console.log(`\nVerified ${courses.length} Module Pages:`);
courses.forEach(c => {
    console.log(`[${c.category}] /courses/${c.id} - ${c.title}`);
    console.log(`   - Description: ${c.description ? "✅ Present (" + c.description.length + " chars)" : "❌ Missing"}`);
    console.log(`   - Modules: ${c.curriculum.length}`);
});
