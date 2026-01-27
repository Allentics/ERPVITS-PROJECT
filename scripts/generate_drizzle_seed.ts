
import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function generateSeed() {
    console.log('Fetching live data from Supabase...');

    // Fetch Courses
    const { data: coursesData, error: coursesError } = await supabase.from('courses').select('*').order('id');
    if (coursesError) {
        console.error('Error fetching courses:', coursesError);
        process.exit(1);
    }
    console.log(`Fetched ${coursesData.length} courses.`);

    // Fetch Blogs
    const { data: blogsData, error: blogsError } = await supabase.from('blog_posts').select('*').order('id');
    if (blogsError) {
        console.error('Error fetching blogs:', blogsError);
        // Continue without blogs if error (e.g. table doesn't exist)
    } else {
        console.log(`Fetched ${blogsData.length} blog posts.`);
    }

    // List all SQL files in the project for reference (as requested "all sql files")
    const sqlFiles = findSqlFiles(process.cwd());
    const sqlFileComment = sqlFiles.map(f => `// - ${path.relative(process.cwd(), f)}`).join('\n');

    // Generate output content
    const fileContent = `
/**
 * BACKUP SEED FILE - GENERATED FROM LIVE DATABASE
 * Date: ${new Date().toISOString()}
 * 
 * This file contains the data currently in the Supabase database.
 * It is formatted for use with Drizzle ORM.
 * 
 * Existing SQL Files found in project:
${sqlFileComment}
 */

import { db } from './db'; // Placeholder path
import { courses, blogPosts } from './db/schema'; // Placeholder path

// DATA DUMP
export const coursesData = ${JSON.stringify(coursesData, null, 2)};

export const blogsData = ${JSON.stringify(blogsData || [], null, 2)};

export async function seed() {
  console.log('Seeding database from backup...');

  // Seed Courses
  if (coursesData.length > 0) {
      console.log('Inserting courses...');
      // Note: adjust 'courses' table reference and fields as per your actual Drizzle schema
      try {
          await db.insert(courses).values(coursesData as any).onConflictDoUpdate({
              target: courses.id,
              set: {
                  title: sql\`excluded.title\`,
                  hero_heading: sql\`excluded.hero_heading\`,
                  hero_subheading: sql\`excluded.hero_subheading\`,
                  description: sql\`excluded.description\`,
                  sections: sql\`excluded.sections\`,
                  updated_at: new Date()
              }
          });
      } catch(e) { console.error('Error seeding courses', e); }
  }

  // Seed Blogs
  if (blogsData.length > 0) {
      console.log('Inserting blogs...');
      try {
          await db.insert(blogPosts).values(blogsData as any).onConflictDoNothing();
      } catch(e) { console.error('Error seeding blogs', e); }
  }
}

// Run if executed directly
if (require.main === module) {
    seed().then(() => console.log('Seed completed')).catch(console.error);
}
`;

    fs.writeFileSync('seed.ts', fileContent);
    console.log('Backup file "seed.ts" created successfully.');
}

function findSqlFiles(dir: string, fileList: string[] = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
                findSqlFiles(filePath, fileList);
            }
        } else {
            if (path.extname(file) === '.sql') {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

generateSeed();
