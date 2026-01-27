
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Import Content
import { abapContent } from '../lib/abapContent';
import { abapHanaContent } from '../lib/abapHanaContent';
import { aribaContent } from '../lib/aribaContent';
import { c4cContent } from '../lib/c4cContent';
import { c4cFunctionalContent } from '../lib/c4cFunctionalContent';
import { cpiContent } from '../lib/cpiContent';
import { ewmContent } from '../lib/ewmContent';
import { ficoContent } from '../lib/ficoContent';
import { fieldglassContent } from '../lib/fieldglassContent';
import { ibpContent } from '../lib/ibpContent';
import { mdgContent } from '../lib/mdgContent';
import { mmContent } from '../lib/mmContent';
import { ppdsContent } from '../lib/ppdsContent';
import { pythonAimlContent } from '../lib/pythonAimlContent';
import { sdContent } from '../lib/sdContent';
import { tmContent } from '../lib/tmContent';
import { trmContent } from '../lib/trmContent';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Mapping
const courseMappings = [
    { id: 'abap-cloud', content: abapContent },
    { id: 'sap-abap-on-hana', content: abapHanaContent },
    { id: 'ariba', content: aribaContent },
    { id: 'c4c-technical', content: c4cContent },
    { id: 'sap-c4c-functional', content: c4cFunctionalContent },
    { id: 'cpi', content: cpiContent },
    { id: 'sap-ewm', content: ewmContent },
    { id: 'fico', content: ficoContent },
    { id: 'fieldglass', content: fieldglassContent },
    { id: 'sap-ibp', content: ibpContent },
    { id: 'sap-mdg', content: mdgContent },
    { id: 'mm', content: mmContent },
    { id: 'ppds', content: ppdsContent },
    { id: 'python-aiml', content: pythonAimlContent },
    { id: 'sd', content: sdContent },
    { id: 'sap-tm', content: tmContent },
    { id: 'trm', content: trmContent },
];

function serialize(obj: any): any {
    if (React.isValidElement(obj)) {
        return renderToStaticMarkup(obj);
    }
    if (Array.isArray(obj)) {
        return obj.map(serialize);
    }
    if (typeof obj === 'object' && obj !== null) {
        const newObj: any = {};
        for (const key in obj) {
            newObj[key] = serialize(obj[key]);
        }
        return newObj;
    }
    return obj;
}

async function syncCourses() {
    console.log('Starting sync of all courses from code locally to Supabase...');

    for (const item of courseMappings) {
        const { id, content } = item;
        console.log(`Processing ${id}...`);

        try {
            // Serialize content to handle JSX
            const serializedContent = serialize(content);

            const updatePayload: any = {
                title: serializedContent.title,
                updated_at: new Date().toISOString()
            };

            // Optional fields - only update if they exist in content to avoid overwriting with null
            if (serializedContent.heroHeading) updatePayload.hero_heading = serializedContent.heroHeading;
            if (serializedContent.heroSubheading) updatePayload.hero_subheading = serializedContent.heroSubheading;
            if (serializedContent.description) updatePayload.description = serializedContent.description;
            if (serializedContent.features) updatePayload.features = serializedContent.features; // JSONB
            if (serializedContent.curriculum) updatePayload.curriculum = serializedContent.curriculum; // JSONB
            if (serializedContent.faqs) updatePayload.faqs = serializedContent.faqs; // JSONB
            if (serializedContent.sections) updatePayload.sections = serializedContent.sections; // JSONB
            if (serializedContent.price) updatePayload.price = serializedContent.price;
            if (serializedContent.duration) updatePayload.duration = serializedContent.duration;
            if (serializedContent.heroImage) updatePayload.hero_image = serializedContent.heroImage;

            // Meta tags
            if (serializedContent.metaTitle) updatePayload.meta_title = serializedContent.metaTitle;
            if (serializedContent.metaDescription) updatePayload.meta_description = serializedContent.metaDescription;

            const { error } = await supabase
                .from('courses')
                .update(updatePayload)
                .eq('id', id);

            if (error) {
                console.error(`Failed to update ${id}:`, error.message);
            } else {
                console.log(`Successfully updated ${id}`);
            }

        } catch (e) {
            console.error(`Error processing ${id}:`, e);
        }
    }

    console.log('Sync completed.');
}

syncCourses().catch(console.error);
