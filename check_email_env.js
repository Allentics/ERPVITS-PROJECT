
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

console.log('--- Environment Variable Check ---');
console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
if (process.env.EMAIL_USER) {
    console.log('EMAIL_USER value (masked):', process.env.EMAIL_USER.replace(/(.{2})(.*)(@.*)/, '$1***$3'));
} else {
    console.log('EMAIL_USER is NOT set.');
}
console.log('--------------------------------');
