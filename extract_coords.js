const fs = require('fs');

const data = require('./figma_data_raw.json');
const rootFrame = Object.values(data.nodes)[0].document;

let originX = rootFrame.absoluteBoundingBox.x;
let originY = rootFrame.absoluteBoundingBox.y;

const targetImages = ['powai 1', '3d 1', 'tn3 1', 'tel 1', 'part 3 1', 'storytelling 1', 'ignite-02 1', 'Group 259', 'dd 1', 'Vector 61', 'tower 1', 'pbl 1', 'sant 1'];
const targetYears = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];

const results = {};

function traverse(node) {
  // Check if it's a Text node containing a year
  if (node.type === 'TEXT' && node.characters && targetYears.includes(node.characters) && node.absoluteBoundingBox) {
    if (!results[node.characters]) {
       results[node.characters] = {
         x: Math.round(node.absoluteBoundingBox.x - originX),
         y: Math.round(node.absoluteBoundingBox.y - originY),
         width: Math.round(node.absoluteBoundingBox.width),
         height: Math.round(node.absoluteBoundingBox.height),
         type: 'text'
       };
    }
  }

  // Check if it's one of the target image layers
  if (node.name && targetImages.includes(node.name) && node.absoluteBoundingBox) {
    if (!results[node.name]) {
       results[node.name] = {
         x: Math.round(node.absoluteBoundingBox.x - originX),
         y: Math.round(node.absoluteBoundingBox.y - originY),
         width: Math.round(node.absoluteBoundingBox.width),
         height: Math.round(node.absoluteBoundingBox.height),
         type: 'image'
       };
    }
  }

  if (node.children) {
    for (const child of node.children) {
      traverse(child);
    }
  }
}

traverse(rootFrame);

// Save to src/data/timeline-coords.json
const outputDir = 'src/data';
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}
fs.writeFileSync(`${outputDir}/timeline-coords.json`, JSON.stringify(results, null, 2));
console.log('Saved coordinates to src/data/timeline-coords.json');
console.log(JSON.stringify(results, null, 2));
