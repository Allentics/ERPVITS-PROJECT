
const { courses } = require('./lib/courseData');
const coursesJson = require('./courses.json');

console.log('Courses in JSON:', coursesJson.length);
const ariba = coursesJson.find(c => c.id === 'ariba');
console.log('Ariba in JSON:', ariba ? 'Found' : 'Not Found');

console.log('Courses exported:', courses.length);
const localAriba = courses.find(c => c.id === 'ariba');
console.log('Ariba in Export:', localAriba ? 'Found' : 'Not Found');
