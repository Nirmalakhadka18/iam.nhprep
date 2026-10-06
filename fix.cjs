const fs = require('fs');
let c = fs.readFileSync('update_questions_v2.cjs', 'utf8');
let id = 1;
c = c.replace(/type: \"(linear|custom)\"/g, () => `layout: "q${id++}"`);
fs.writeFileSync('update_questions_v2.cjs', c);
console.log('Fixed update_questions_v2.cjs');
