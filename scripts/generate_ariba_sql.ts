
import fs from 'fs';
import path from 'path';
import { aribaContent } from '../lib/aribaContent';

const courseId = 'sap-ariba';

const escapeSql = (str: string | undefined) => {
    if (!str) return 'NULL';
    return `'${str.replace(/'/g, "''")}'`;
};

const jsonSql = (obj: any) => {
    if (!obj) return `'[]'::jsonb`;
    return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
};

const sql = `
INSERT INTO courses (
    id,
    title,
    hero_heading,
    hero_subheading,
    hero_image,
    description,
    meta_title,
    meta_description,
    features,
    sections,
    updated_at
) VALUES (
    '${courseId}',
    ${escapeSql(aribaContent.title)},
    ${escapeSql(aribaContent.heroHeading)},
    ${escapeSql(aribaContent.heroSubheading)},
    ${escapeSql(aribaContent.heroImage)},
    ${escapeSql(aribaContent.description)},
    ${escapeSql(aribaContent.metaTitle)},
    ${escapeSql(aribaContent.metaDescription)},
    ${jsonSql(aribaContent.features)},
    ${jsonSql(aribaContent.sections)},
    NOW()
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    hero_heading = EXCLUDED.hero_heading,
    hero_subheading = EXCLUDED.hero_subheading,
    hero_image = EXCLUDED.hero_image,
    description = EXCLUDED.description,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    features = EXCLUDED.features,
    sections = EXCLUDED.sections,
    updated_at = NOW();
`;

const outputPath = path.resolve(process.cwd(), 'scripts', 'update_ariba_generated.sql');
fs.writeFileSync(outputPath, sql);

console.log(`Generated SQL to: ${outputPath}`);
