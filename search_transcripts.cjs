const fs = require('fs');
const path = require('path');
const root = 'C:/Users/DELL 3511 (243597)/.gemini/antigravity-ide/brain';
const dirs = fs.readdirSync(root);
for (const dir of dirs) {
  const p = path.join(root, dir, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    if (c.includes('const Q1Visual =')) {
      console.log('FOUND IN', dir);
      const lines = c.split('\n');
      for (const line of lines) {
        if (line.includes('const Q1Visual =')) {
          const m = line.match(/"content":"([\s\S]*?)"/);
          if (m) {
             const unescaped = m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
             if (unescaped.includes('export const CustomVisual =')) {
               console.log('Got a chunk, size:', unescaped.length);
               if (unescaped.length > 50000) {
                 fs.writeFileSync('d:/NHREP/RESTORED.tsx', unescaped);
                 console.log('Wrote to RESTORED.tsx');
                 process.exit(0);
               }
             }
          }
        }
      }
    }
  }
}
