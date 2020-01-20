
const o = require('javascript-obfuscator');
const fs = require('fs');

// Get filename from argument
const x = process.argv[2];

// Read file
const b = fs.readFileSync(x, 'utf8');

// Obfuscate that file
const c = o.obfuscate(`${b}`);

// Get obfuscated result
const q = c.getObfuscatedCode();

// Write obfuscated code to same file
fs.writeFileSync(x, q);
