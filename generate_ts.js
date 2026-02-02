const fs = require("fs");
const courses = require("./courses.json");

const technicalIds = ['abap-cloud', 'abap-hana', 'cpi', 'btp', 'c4c-technical', 'analytics-cloud'];
const categorizedCourses = courses.map(c => ({
  ...c,
  category: technicalIds.includes(c.id) ? 'Technical' : 'Functional'
}));

const tsContent = `export interface FAQ {
  question: string;
  answer: string;
}

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  heroHeading: string;
  heroSubheading?: string;
  description?: string;
  features: string[];
  category: 'Functional' | 'Technical';
  curriculum: CurriculumModule[];
  faqs: FAQ[];
  inFaqSection?: boolean;
}

export const courses: Course[] = ${JSON.stringify(categorizedCourses, null, 2)};

export function getCourse(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}
`;

if (!fs.existsSync("lib")) fs.mkdirSync("lib");
fs.writeFileSync("lib/courseData.ts", tsContent);
console.log("lib/courseData.ts created");
