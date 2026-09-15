const fs = require('fs');

const data = require('./figma_data_raw.json');
const rootFrame = Object.values(data.nodes)[0].document;

let originX = rootFrame.absoluteBoundingBox.x;
let originY = rootFrame.absoluteBoundingBox.y;

const results = [];

function traverse(node) {
  if (node.type === 'RECTANGLE' && node.fills && node.fills.some(f => f.type === 'IMAGE')) {
     if (node.absoluteBoundingBox) {
         results.push({
           name: node.name,
           x: Math.round(node.absoluteBoundingBox.x - originX),
           y: Math.round(node.absoluteBoundingBox.y - originY),
           width: Math.round(node.absoluteBoundingBox.width),
           height: Math.round(node.absoluteBoundingBox.height),
           type: 'image'
         });
     }
  }

  if (node.children) {
    for (const child of node.children) {
      traverse(child);
    }
  }
}

traverse(rootFrame);

results.sort((a, b) => a.y - b.y);
console.log(JSON.stringify(results, null, 2));
