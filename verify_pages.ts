import { courses } from "./lib/courseData";
console.log("--- Generated Course Pages ---");
courses.forEach(c => {
    console.log(`- /courses/${c.id} (${c.title}) [Category: ${c.category}]`);
    console.log(`  > Description Length: ${c.description ? c.description.length : 0} chars`);
    console.log(`  > Modules: ${c.curriculum?.length || 0}`);
});
console.log(`Total: ${courses.length} pages ready.`);
