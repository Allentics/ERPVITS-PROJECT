
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { c4cContent } from '../lib/c4cContent';

console.log('Successfully imported content!');
console.log('Title:', c4cContent.title);

if (c4cContent.heroHeading) {
    try {
        const html = renderToStaticMarkup(c4cContent.heroHeading as any);
        console.log('Hero Heading HTML:', html);
    } catch (e) {
        console.error('Error rendering JSX:', e);
    }
}
