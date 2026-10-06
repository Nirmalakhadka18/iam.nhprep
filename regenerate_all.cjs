const fs = require('fs');

const questionsFile = 'src/data/questions.ts';
const visualsFile = 'src/components/visualizations/CustomVisuals.tsx';

let qContent = fs.readFileSync(questionsFile, 'utf8');

const extractSteps = (id) => {
  const regex = new RegExp(`id:\\s*${id},[\\s\\S]*?steps:\\s*\\[([\\s\\S]*?)\\]`);
  const match = qContent.match(regex);
  if (!match) return ["Step 1", "Step 2", "Step 3"];
  return match[1].split(',').map(s => s.trim().replace(/^"/, '').replace(/"$/, '').replace(/^'/, '').replace(/'$/, '')).filter(Boolean);
};

let output = `import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { 
  User, Users, Smartphone, Fingerprint, Shield, Key, Database, Globe, Server, 
  Lock, Unlock, FileText, Activity, CheckCircle2, ArrowRight, Network, 
  MapPin, Clock, Tag, Briefcase, GitBranch, Cpu, Eye, EyeOff, KeyRound, 
  Layers, RefreshCw, Zap, Laptop, AlertTriangle, XCircle
} from 'lucide-react';

export const VisualContext = React.createContext({});

const GIcon = ({ icon: Icon, label, size = "medium", active, color = "blue", imgSrc }: any) => {
  const sizeClasses = {
    small: "w-12 h-12 lg:w-16 lg:h-16 text-2xl lg:text-3xl",
    medium: "w-16 h-16 lg:w-20 lg:h-20 text-3xl lg:text-4xl",
    large: "w-20 h-20 lg:w-24 lg:h-24 text-4xl lg:text-5xl"
  };

  const containerSizes = {
    small: "w-20 lg:w-24",
    medium: "w-24 lg:w-32",
    large: "w-28 lg:w-36"
  };

  const iconSizes = {
    small: 24,
    medium: 32,
    large: 40
  };

  return (
    <div className={clsx("flex flex-col items-center gap-2", containerSizes[size])}>
      <motion.div 
        animate={{ 
          scale: active ? 1.05 : 1,
          opacity: active ? 1 : 0.4
        }}
        className={clsx(
          "flex items-center justify-center rounded-2xl shadow-lg border-2 bg-white relative overflow-hidden",
          sizeClasses[size],
          active ? \`border-\${color}-500 shadow-\${color}-500/20\` : "border-slate-200"
        )}
      >
        {imgSrc ? (
          <img src={imgSrc} alt={label} className="w-full h-full object-cover p-2" />
        ) : (
          Icon && <Icon size={iconSizes[size]} className={active ? \`text-\${color}-600\` : "text-slate-400"} />
        )}
      </motion.div>
      <span className={clsx(
        "text-center font-medium leading-tight",
        size === 'small' ? 'text-[10px] lg:text-xs' : 'text-xs lg:text-sm',
        active ? "text-slate-800" : "text-slate-500"
      )}>
        {label}
      </span>
    </div>
  );
};

const Packet = ({ active, color = "blue", reverse = false, vertical = false }: any) => {
  if (!active) return null;
  return (
    <motion.div
      initial={vertical ? { top: 0, opacity: 0 } : { left: 0, opacity: 0 }}
      animate={vertical ? { top: "100%", opacity: [0, 1, 1, 0] } : { left: "100%", opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className={clsx(
        "absolute rounded-full shadow-lg",
        vertical ? "w-2 h-4 -ml-0.5" : "w-4 h-2 -mt-0.5",
        \`bg-\${color}-500 shadow-\${color}-500/50\`
      )}
    />
  );
};

const Q_STEP_IMAGES: Record<number, string[]> = {};
const getImg = (idx: number, step: string, qId: number) => {
    return null;
};
`;

let switchCases = '';

const layouts = ['flex-row', 'flex-col', 'flex-row-reverse', 'flex-col-reverse'];
const sizes = ['small', 'medium', 'large'];
const gaps = ['gap-4', 'gap-8', 'gap-12'];
const connectorColors = ['blue', 'green', 'red'];

for (let id = 1; id <= 50; id++) {
  switchCases += `    case 'q${id}': return <Q${id}Visual currentStep={currentStep} isMobile={isMobile} />;\n`;

  const steps = extractSteps(id);
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
    comp += `      <GIcon icon={Database} imgSrc={getImg(${idx}, '${step}', ${id})} active={currentStep >= ${idx}} label='${step}' size="${size}" color="${color}" />\n`;
    
    if (!isLast) {
      if (isRow) {
        comp += `      <div className="flex-1 h-[3px] bg-slate-100 min-w-[40px] relative overflow-visible shrink-0 mx-2">\n`;
        comp += `        <Packet active={currentStep >= ${idx + 1}} color="${color}" />\n`;
        comp += `      </div>\n`;
      } else {
        comp += `      <div className="flex-1 w-[3px] bg-slate-100 min-h-[40px] relative overflow-visible shrink-0 my-2">\n`;
        comp += `        <Packet active={currentStep >= ${idx + 1}} color="${color}" vertical={true} />\n`;
        comp += `      </div>\n`;
      }
    }
  });
  
  comp += `    </div>\n`;
  comp += `  );\n};\n`;
  
  output += comp;
}

output += `
export const CustomVisual = ({ layout, currentStep, isMobile, steps, questionId }: any) => {
  switch (layout) {
${switchCases}
    default: return <Q1Visual currentStep={currentStep} isMobile={isMobile} />;
  }
};
`;

fs.writeFileSync(visualsFile, output);
console.log('Regenerated completely.');
