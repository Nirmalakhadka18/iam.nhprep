import fs from 'fs';

const questionsFile = 'src/data/questions2.ts';
const visualsFile = 'src/components/visualizations/CustomVisuals.tsx';

let qContent = fs.readFileSync(questionsFile, 'utf8');
let vContent = fs.readFileSync(visualsFile, 'utf8');

const missingQs = [];
for (let i = 21; i <= 50; i++) {
  if (i === 23) continue; // Already has custom Q23Visual
  if (i === 50) continue; // Already has custom Q50Visual
  missingQs.push(i);
}

// 1. Update questions2.ts to use layout: "qXX"
missingQs.forEach(id => {
  const regex = new RegExp(`(id:\\s*${id},[\\s\\S]*?visualization:\\s*\\{\\s*layout:\\s*)"[^"]*"`, 'g');
  qContent = qContent.replace(regex, `$1"q${id}"`);
});
fs.writeFileSync(questionsFile, qContent);

// Helper to extract steps from questions2.ts
const extractSteps = (id) => {
  const regex = new RegExp(`id:\\s*${id},[\\s\\S]*?steps:\\s*\\[(.*?)\\]`);
  const match = qContent.match(regex);
  if (!match) return ["Step 1", "Step 2", "Step 3"];
  return match[1].split(',').map(s => s.trim().replace(/^"/, '').replace(/"$/, '').replace(/^'/, '').replace(/'$/, ''));
};

let generatedComponents = '\n// --- PROCEDURALLY GENERATED VISUALS FOR Q21-Q49 ---\n';
let switchCases = '';

const layouts = ['flex-row', 'flex-col', 'flex-row-reverse', 'flex-col-reverse'];
const sizes = ['small', 'medium', 'large'];
const gaps = ['gap-4', 'gap-8', 'gap-12'];
const connectorColors = ['blue', 'green', 'red'];

missingQs.forEach((id, index) => {
  switchCases += `    case 'q${id}': return <Q${id}Visual currentStep={currentStep} isMobile={isMobile} />;\n`;

  const steps = extractSteps(id);
  
  // Seed logic for randomness
  const seed = id * 73;
  const isRow = (seed % 2) === 0;
  const layout = isRow ? 'flex-row' : 'flex-col';
  const size = sizes[seed % sizes.length];
  const gap = gaps[(seed >> 1) % gaps.length];
  const color = connectorColors[(seed >> 2) % connectorColors.length];
  
  const containerClass = `w-full h-full flex ${layout} flex-wrap items-center justify-center p-4 lg:p-8 ${gap}`;
  
  let comp = `\nconst Q${id}Visual = ({ currentStep, isMobile }: any) => {\n`;
  comp += `  const steps = ${JSON.stringify(steps)};\n`;
  comp += `  return (\n`;
  comp += `    <div className="${containerClass}">\n`;
  
  steps.forEach((step, idx) => {
    const isLast = idx === steps.length - 1;
    comp += `      <GIcon active={currentStep >= ${idx}} label="${step}" size="${size}" color="${color}" />\n`;
    
    if (!isLast) {
      if (isRow) {
        comp += `      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">\n`;
        comp += `        <Packet active={currentStep >= ${idx + 1}} color="${color}" />\n`;
        comp += `      </div>\n`;
      } else {
        comp += `      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">\n`;
        comp += `        <Packet active={currentStep >= ${idx + 1}} color="${color}" vertical={true} />\n`;
        comp += `      </div>\n`;
      }
    }
  });
  
  comp += `    </div>\n`;
  comp += `  );\n};\n`;
  
  generatedComponents += comp;
});

// Write to a temporary file so we can inspect it and append
fs.writeFileSync('generated_visuals.tsx', generatedComponents);
fs.writeFileSync('generated_switch.txt', switchCases);
console.log('Generated components for ' + missingQs.length + ' questions.');
