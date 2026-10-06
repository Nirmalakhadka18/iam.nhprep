const fs = require('fs');
const questionsFile = 'src/data/questions.ts';
const visualsFile = 'src/components/visualizations/CustomVisuals.tsx';

let qContent = fs.readFileSync(questionsFile, 'utf8');
let current = fs.readFileSync(visualsFile, 'utf8');

const extractSteps = (id) => {
  const regex = new RegExp('id:\\s*' + id + ',[\\s\\S]*?steps:\\s*\\[([\\s\\S]*?)\\]');
  const match = qContent.match(regex);
  if (!match) return ['Step 1', 'Step 2', 'Step 3'];
  return match[1].split(',').map(s => s.trim().replace(/^"/, '').replace(/"$/, '').replace(/^'/, '').replace(/'$/, '')).filter(Boolean);
};

const sizes = ['small', 'medium', 'large'];
const connectorColors = ['blue', 'green', 'red'];

let stubs = '';
let switchExtra = '';

for (let id = 21; id <= 50; id++) {
  const steps = extractSteps(id);
  const seed = id * 73;
  const isRow = (seed % 2) === 0;
  const size = sizes[seed % sizes.length];
  const color = connectorColors[(seed >> 2) % connectorColors.length];
  const layout = isRow ? 'flex-row' : 'flex-col';
  const gap = isRow ? 'gap-8' : 'gap-4';
  const containerClass = 'w-full h-full flex ' + layout + ' flex-wrap items-center justify-center p-4 lg:p-8 ' + gap;
  
  switchExtra += "    case 'q" + id + "': return <Q" + id + "Visual currentStep={currentStep} isMobile={isMobile} />;\n";
  
  let comp = '\nconst Q' + id + 'Visual = ({ currentStep, isMobile }: any) => {\n';
  comp += '  return (\n';
  comp += '    <div className="' + containerClass + '">\n';
  
  steps.forEach((step, idx) => {
    const isLast = idx === steps.length - 1;
    comp += '      <GIcon icon={Database} active={currentStep >= ' + idx + '} label="' + step + '" size="' + size + '" color="' + color + '" />\n';
    if (!isLast) {
      if (isRow) {
        comp += '      <div className="flex-1 h-[3px] bg-slate-100 min-w-[40px] relative overflow-visible shrink-0 mx-2">\n';
        comp += '        <Packet active={currentStep >= ' + (idx+1) + '} color="' + color + '" />\n';
        comp += '      </div>\n';
      } else {
        comp += '      <div className="flex-1 w-[3px] bg-slate-100 min-h-[40px] relative overflow-visible shrink-0 my-2">\n';
        comp += '        <Packet active={currentStep >= ' + (idx+1) + '} color="' + color + '" vertical={true} />\n';
        comp += '      </div>\n';
      }
    }
  });
  comp += '    </div>\n  );\n};\n';
  stubs += comp;
}

// Find the export const CustomVisual line and insert stubs before it
const exportMarker = 'export const CustomVisual';
const exportIdx = current.lastIndexOf(exportMarker);

// Find the default case in the switch
const defaultMarker = '    default: return';
const defaultIdx = current.lastIndexOf(defaultMarker);

const beforeExport = current.slice(0, exportIdx);
const exportToDefault = current.slice(exportIdx, defaultIdx);
const defaultAndAfter = current.slice(defaultIdx);

const finalContent = beforeExport + stubs + exportToDefault + switchExtra + defaultAndAfter;
fs.writeFileSync(visualsFile, finalContent);
console.log('Added Q21-Q50 stubs successfully. Total length:', finalContent.length);
