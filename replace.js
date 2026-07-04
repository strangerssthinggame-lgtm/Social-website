const fs = require('fs');
const path = require('path');

const exts = ['.tsx', '.ts', '.json', '.js', '.html', '.css'];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        if (file === 'node_modules' || file === '.next' || file === '.git') return;
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (exts.includes(path.extname(file))) {
                results.push(file);
            }
        }
    });
    return results;
}

const webPath = "c:/Users/ajay/Projects/Realer Web/bondly-web";
const appPath = "c:/Users/ajay/Projects/Social app";

const allFiles = [...walk(webPath), ...walk(appPath)];

let changedFiles = 0;
allFiles.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let newContent = content.replace(/Flame/g, 'Flame').replace(/flame/g, 'flame');
        if (content !== newContent) {
            fs.writeFileSync(file, newContent, 'utf8');
            changedFiles++;
            console.log('Updated', file);
        }
    } catch (e) {
        console.error('Error reading', file, e);
    }
});
console.log('Total files changed:', changedFiles);
