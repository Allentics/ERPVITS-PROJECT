/**
 * Script to find and replace "support" with "support" (fixing typos/truncations)
 * This will update TypeScript, TSX, JavaScript, and SQL files
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.sql', '.json'];
const EXCLUDE_DIRS = ['node_modules', '.next', '.git', 'public'];

// Track changes
let filesChanged = 0;
let totalReplacements = 0;

/**
 * Recursively search and replace in files
 */
function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Skip excluded directories
            if (!EXCLUDE_DIRS.includes(entry.name)) {
                processDirectory(fullPath);
            }
        } else if (entry.isFile()) {
            // Process files with matching extensions
            const ext = path.extname(entry.name);
            if (EXTENSIONS.includes(ext)) {
                processFile(fullPath);
            }
        }
    }
}

/**
 * Process a single file
 */
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Count occurrences of "support" (not followed by "t")
        // Using regex to match "support" but not "support"
        const regex = /support(?!t)/gi;
        const matches = content.match(regex);

        if (matches && matches.length > 0) {
            // Replace "support" with "support"
            const newContent = content.replace(regex, 'support');

            // Write back to file
            fs.writeFileSync(filePath, newContent, 'utf8');

            const relativePath = path.relative(ROOT_DIR, filePath);
            console.log(`✅ Fixed ${matches.length} occurrence(s) in: ${relativePath}`);

            filesChanged++;
            totalReplacements += matches.length;
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

/**
 * Main execution
 */
console.log('🔍 Searching for "support" typos...\n');

processDirectory(ROOT_DIR);

console.log('\n' + '='.repeat(60));
console.log(`✨ Complete!`);
console.log(`📝 Files changed: ${filesChanged}`);
console.log(`🔄 Total replacements: ${totalReplacements}`);
console.log('='.repeat(60));

if (filesChanged === 0) {
    console.log('\n✅ No "support" typos found. All instances are already "support"!');
}
