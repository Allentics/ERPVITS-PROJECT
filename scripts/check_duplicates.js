
const fs = require('fs');
const courses = require('../courses.json');

const abapCourses = courses.filter(c => c.title.includes('ABAP') || c.id.includes('abap'));
const analyticsCourses = courses.filter(c => c.title.includes('Analytics') || c.id.includes('analytics'));

console.log('--- ABAP Courses ---');
abapCourses.forEach(c => console.log(`ID: ${c.id}, Title: ${c.title}`));

console.log('\n--- Analytics Courses ---');
analyticsCourses.forEach(c => console.log(`ID: ${c.id}, Title: ${c.title}`));
