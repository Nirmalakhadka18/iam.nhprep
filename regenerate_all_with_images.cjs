const fs = require('fs');

const questionsFile = 'src/data/questions.ts';
const questionsFile2 = 'src/data/questions2.ts';
const visualsFile = 'src/components/visualizations/CustomVisuals.tsx';
const imagesDir = 'public/assets/images';

const allImages = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));
let qContent = fs.readFileSync(questionsFile, 'utf8') + '\n' + fs.readFileSync(questionsFile2, 'utf8');

const extractArray = (id, key) => {
  const regex = new RegExp(`"?id"?:\\s*${id},[\\s\\S]*?"?${key}"?:\\s*\\[([\\s\\S]*?)\\]`);
  const match = qContent.match(regex);
  if (!match) return [];
  return match[1].split(',')
    .map(s => s.trim().replace(/^"/, '').replace(/"$/, '').replace(/^'/, '').replace(/'$/, ''))
    .filter(Boolean);
};

const findBestImage = (stepText, usedImages) => {
  const text = stepText.toLowerCase();
  let matches = [];
  
  if (text.includes('user') || text.includes('employee') || text.includes('person') || text.includes('client')) {
    matches.push('employee_laptop.png', 'abac_user_finance_1790829544274.png', 'q7_sso_employee_1790861637507.png', 'user_request.png');
  }
  if (text.includes('identit') || text.includes('account') || text.includes('profile')) {
    matches.push('id_badge.png', 'account_created.png');
  }
  if (text.includes('auth') || text.includes('login') || text.includes('credential') || text.includes('password') || text.includes('verify')) {
    matches.push('auth_password.png', 'mfa_phone.png', 'auth_biometric.png', 'auth_lock.png', 'sso_portal.png');
  }
  if (text.includes('authoriz') || text.includes('role') || text.includes('permission') || text.includes('policy') || text.includes('check')) {
    matches.push('policy_engine.png', 'rbac_roles.png', 'access_decision.png');
  }
  if (text.includes('resource') || text.includes('database') || text.includes('server') || text.includes('app')) {
    matches.push('server_resource.png', 'database.png', 'email_app.png', 'project_app.png');
  }
  if (text.includes('grant') || text.includes('success') || text.includes('allow')) {
    matches.push('access_granted.png', 'account_active.png');
  }
  if (text.includes('deny') || text.includes('fail') || text.includes('suspend') || text.includes('revoke')) {
    matches.push('account_suspended.png', 'access_decision.png');
  }
  if (text.includes('network') || text.includes('internet') || text.includes('connect')) {
    matches.push('flat_network.png', 'micro_segmented.png');
  }
  if (text.includes('attack') || text.includes('threat') || text.includes('breach') || text.includes('hacker')) {
    matches.push('network_breach.png', 'threat_detected.png', 'siem_alert.png');
  }
  if (text.includes('federation') || text.includes('trust') || text.includes('saml') || text.includes('sso')) {
    matches.push('federation_trust.png', 'sso_portal.png');
  }
  if (text.includes('jit') || text.includes('time') || text.includes('temp')) {
    matches.push('jit_access.png', 'abac_time_clock_1790829568155.png');
  }
  if (text.includes('device') || text.includes('laptop')) {
    matches.push('abac_device_laptop_1790829588514.png', 'employee_laptop.png');
  }
  if (text.includes('location') || text.includes('where')) {
    matches.push('abac_location_office_1790829555589.png', 'location_attribute.png');
  }

  let availableMatches = matches.filter(img => !usedImages.has(img));
  if (availableMatches.length > 0) return availableMatches[Math.floor(Math.random() * availableMatches.length)];
  if (matches.length > 0) return matches[0];
  
  let unusedAll = allImages.filter(img => !usedImages.has(img));
  if (unusedAll.length > 0) return unusedAll[Math.floor(Math.random() * unusedAll.length)];
  
  return allImages[Math.floor(Math.random() * allImages.length)];
};

const getSmartSubLabel = (step, explanation) => {
  if (explanation) {
    // Try to extract a meaningful short phrase from the explanation
    const cleanExpl = explanation.toLowerCase();
    if (cleanExpl.includes('username')) return "Username";
    if (cleanExpl.includes('password')) return "Password & MFA";
    if (cleanExpl.includes('permission')) return "Permissions";
    if (cleanExpl.includes('token')) return "Access Token";
    if (cleanExpl.includes('role')) return "Assigned Role";
    if (cleanExpl.includes('policy')) return "Policy Check";
    if (cleanExpl.includes('mfa')) return "Multi-Factor";
    if (cleanExpl.includes('biometric')) return "Face/Fingerprint";
    if (cleanExpl.includes('directory')) return "User Directory";
    if (cleanExpl.includes('temporary')) return "Time-Bound";
    if (cleanExpl.includes('audit')) return "Log Event";
    if (cleanExpl.includes('revoke')) return "Access Revoked";
    if (cleanExpl.includes('federation')) return "Trust Relationship";
    if (cleanExpl.includes('attribute')) return "Attribute Check";

    // Dynamic fallback: extract the first two words of the explanation
    const words = explanation.replace(/[.,;:]/g, '').split(' ').slice(0, 2).join(' ');
    if (words.length > 3 && !words.includes('The') && !words.includes('A ')) {
       // Capitalize first letter of each word
       return words.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + "...";
    }
  }
  
  const text = step.toLowerCase();
  if (text.includes('employee') || text.includes('user')) return "End User";
  if (text.includes('identit')) return "Digital ID";
  if (text.includes('auth')) return "Verification";
  if (text.includes('authoriz')) return "Evaluation";
  if (text.includes('resource') || text.includes('grant')) return "Target System";
  if (text.includes('deny') || text.includes('fail')) return "Access Denied";
  if (text.includes('device')) return "Trusted Device";
  if (text.includes('location')) return "Network/IP";
  if (text.includes('time')) return "Time Condition";
  if (text.includes('role')) return "Job Function";
  if (text.includes('database')) return "Data Storage";
  if (text.includes('federation')) return "Org Trust";
  if (text.includes('sso')) return "Single Portal";
  if (text.includes('jit')) return "Just-In-Time";
  if (text.includes('policy')) return "Rules Engine";
  if (text.includes('attack')) return "Threat Actor";
  if (text.includes('audit')) return "Compliance";
  
  // Return empty string instead of "Process Step"
  return ""; 
};

let output = 'import React from "react";\n';
output += 'import { motion } from "framer-motion";\n';
output += 'import clsx from "clsx";\n';
output += 'import { Database } from "lucide-react";\n\n';

output += 'const GIcon = ({ active, label, subLabel, size = "medium", color = "blue", imgSrc }: any) => {\n';
output += '  const sizeClasses = { small: "w-20 h-20 lg:w-24 lg:h-24", medium: "w-24 h-24 lg:w-28 lg:h-28", large: "w-28 h-28 lg:w-36 lg:h-36" };\n';
output += '  const containerSizes = { small: "w-24 lg:w-28", medium: "w-28 lg:w-36", large: "w-36 lg:w-44" };\n';
output += '  return (\n';
output += '    <div className={clsx("flex flex-col items-center gap-2", containerSizes[size as keyof typeof containerSizes])}>\n';
output += '      <motion.div \n';
output += '        animate={{ scale: active ? 1.05 : 1, opacity: active ? 1 : 0.75 }}\n';
output += '        className={clsx(\n';
output += '          "flex items-center justify-center rounded-2xl shadow-md border-4 bg-white relative overflow-hidden transition-all duration-500",\n';
output += '          sizeClasses[size as keyof typeof sizeClasses],\n';
output += '          active ? `border-${color}-500 shadow-${color}-500/30` : "border-slate-200 dark:border-slate-700"\n';
output += '        )}>\n';
output += '        {imgSrc ? (\n';
output += '          <img src={imgSrc} alt={label} className="w-full h-full object-cover" />\n';
output += '        ) : (\n';
output += '          <Database size={40} className={active ? `text-${color}-600` : "text-slate-400"} />\n';
output += '        )}\n';
output += '      </motion.div>\n';
output += '      <div className="flex flex-col items-center">\n';
output += '        <span className={clsx("text-center font-bold leading-tight", size === "small" ? "text-xs" : "text-sm", active ? "text-slate-800 dark:text-white" : "text-slate-500 dark:text-slate-400")}>\n';
output += '          {label}\n';
output += '        </span>\n';
output += '        {subLabel && (\n';
output += '          <span className={clsx("text-center text-[10px] lg:text-xs font-semibold mt-1", active ? "text-slate-500 dark:text-slate-300" : "text-slate-400 dark:text-slate-500")}>\n';
output += '            {subLabel}\n';
output += '          </span>\n';
output += '        )}\n';
output += '      </div>\n';
output += '    </div>\n';
output += '  );\n';
output += '};\n\n';

output += 'const Packet = ({ active, color = "blue", vertical = false }: any) => {\n';
output += '  if (!active) return null;\n';
output += '  return (\n';
output += '    <motion.div\n';
output += '      initial={vertical ? { top: 0, opacity: 0 } : { left: 0, opacity: 0 }}\n';
output += '      animate={vertical ? { top: "100%", opacity: [0, 1, 1, 0] } : { left: "100%", opacity: [0, 1, 1, 0] }}\n';
output += '      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}\n';
output += '      className={clsx("absolute rounded-full shadow-[0_0_8px_currentColor] z-10", vertical ? "w-2 h-4 -ml-[1px]" : "w-4 h-2 -mt-[1px]", `bg-${color}-500 text-${color}-500`)}\n';
output += '    />\n';
output += '  );\n';
output += '};\n\n';

output += 'const Arrow = ({ active, color = "blue", vertical = false }: any) => {\n';
output += '  if (vertical) {\n';
output += '    return (\n';
output += '      <div className={clsx("flex-1 min-h-[30px] lg:min-h-[50px] my-1 lg:my-2 flex flex-col items-center justify-center relative transition-opacity duration-500", active ? "opacity-100" : "opacity-30")}>\n';
output += '        <div className={clsx("w-0 h-full border-l-[3px] border-dashed relative overflow-visible", `border-${color}-500`)}>\n';
output += '           <Packet active={active} color={color} vertical={true} />\n';
output += '        </div>\n';
output += '        <div className={clsx("w-3 h-3 rotate-45 border-b-[3px] border-r-[3px] absolute bottom-0", `border-${color}-500`)} />\n';
output += '      </div>\n';
output += '    );\n';
output += '  }\n';
output += '  return (\n';
output += '    <div className={clsx("flex-1 min-w-[20px] lg:min-w-[40px] mx-1 lg:mx-2 flex items-center justify-center relative transition-opacity duration-500", active ? "opacity-100" : "opacity-30")}>\n';
output += '      <div className={clsx("w-full h-0 border-t-[3px] border-dashed relative overflow-visible", `border-${color}-500`)}>\n';
output += '         <Packet active={active} color={color} />\n';
output += '      </div>\n';
output += '      <div className={clsx("w-3 h-3 rotate-45 border-t-[3px] border-r-[3px] absolute right-0", `border-${color}-500`)} />\n';
output += '    </div>\n';
output += '  );\n';
output += '};\n\n';

let switchCases = '';
const colors = ['blue', 'indigo', 'cyan', 'sky'];

for (let id = 1; id <= 50; id++) {
  switchCases += '    case "q' + id + '": return <Q' + id + 'Visual currentStep={currentStep} isMobile={isMobile} />;\n';

  let steps = extractArray(id, 'steps');
  if (steps.length === 0) steps = ["Start", "Process", "End"];
  
  let explanations = extractArray(id, 'stepExplanations');
  
  const isRow = true; // Force row
  const layout = 'flex-row flex-nowrap'; 
  const size = steps.length > 4 ? 'small' : 'medium';
  const color = colors[(id - 1) % colors.length];
  
  const outerClass = "w-full h-full overflow-x-auto custom-scrollbar pb-4";
  const innerClass = "flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4";
  
  let comp = '\n// Q' + id + ' Visual\nconst Q' + id + 'Visual = ({ currentStep, isMobile }: any) => {\n';
  comp += '  return (\n';
  comp += '    <div className="' + outerClass + '">\n';
  comp += '      <div className="' + innerClass + '">\n';
  
  let usedImages = new Set();
  
  steps.forEach((step, idx) => {
    const isLast = idx === steps.length - 1;
    const expl = explanations[idx] || "";
    
    const imageFile = findBestImage(step + " " + expl, usedImages);
    usedImages.add(imageFile);
    
    // Pass both step text and explanation to get a smart sublabel
    const subLabel = getSmartSubLabel(step, expl);
    
    comp += '      <GIcon imgSrc="/assets/images/' + imageFile + '" active={currentStep >= ' + idx + '} label="' + step + '" subLabel="' + subLabel + '" size="' + size + '" color="' + color + '" />\n';
    
    if (!isLast) {
      comp += '      <Arrow active={currentStep >= ' + (idx + 1) + '} color="' + color + '" />\n';
    }
  });
  comp += '      </div>\n';
  comp += '    </div>\n';
  comp += '  );\n};\n';
  
  output += comp;
}

output += '\nexport const CustomVisual = ({ layout, currentStep, isMobile }: any) => {\n';
output += '  switch (layout) {\n';
output += switchCases;
output += '    default: return <Q1Visual currentStep={currentStep} isMobile={isMobile} />;\n';
output += '  }\n};\n';

fs.writeFileSync(visualsFile, output);
console.log('Regenerated CustomVisuals.tsx successfully with smart semantic sublabels from questions data.');
