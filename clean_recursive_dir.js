const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file, index) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // Recursive delete
                deleteFolderRecursive(curPath);
            } else {
                // Delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
}

const target = path.join(__dirname, 'public', 'images', 'blog', 'blog');
console.log('Deleting:', target);
try {
    deleteFolderRecursive(target);
    console.log('Successfully deleted recursive folder.');
} catch (err) {
    console.error('Error during deletion:', err.message);
}
