import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = join(__dirname, 'src/components/Visualizer.tsx');

let content = fs.readFileSync(filePath, 'utf8');

const injectionPoint = `  // Layout 2: Branching / Outputs`;

const newCode = `  // Layout: Q4 Authz Stages
  if (layout === 'authz-stages') {
    const q4Data = [
      {
        title: "AUTHENTICATED USER",
        subtitle: "Identity verified",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="flex justify-center mb-2">
              <Q2EmployeeIcon />
            </div>
            
            <div className="text-left bg-slate-50 border border-slate-200 p-2.5 rounded-xl w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[13px] text-slate-800">Alex</span>
                <span className="bg-brand-green/20 text-brand-green px-1.5 py-0.5 rounded text-[10px] font-bold">Verified</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-0.5"><div className="w-3.5 flex justify-center"><User className="w-3 h-3 text-brand-blue" /></div> Employee</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500"><div className="w-3.5 flex justify-center"><Shield className="w-3 h-3 text-brand-blue" /></div> Role: Developer</div>
            </div>
          </div>
        )
      },
      {
        title: "ROLE / IDENTITY",
        subtitle: "Developer context",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="bg-white border border-brand-blue ring-1 ring-brand-blue-light shadow-sm rounded-lg p-3 relative overflow-hidden flex items-center justify-center h-20">
              <div className="absolute top-0 right-0 w-8 h-8 bg-brand-blue-light rounded-bl-full"></div>
              <div className="flex flex-col items-center">
                <div className="text-brand-blue mb-1"><User className="w-6 h-6" /></div>
                <div className="text-[12px] font-bold text-brand-navy tracking-wide">Developer Role</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-left px-1 mt-1 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">User: Alex</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Dept: Engineering</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Role: Developer</span></div>
            </div>
          </div>
        )
      },
      {
        title: "POLICY ENGINE",
        subtitle: "Check rules",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="flex justify-center mb-2 h-20">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="4" />
                  <rect x="30" y="35" width="40" height="4" rx="2" fill="#cbd5e1" />
                  <rect x="30" y="50" width="30" height="4" rx="2" fill="#cbd5e1" />
                  <rect x="30" y="65" width="20" height="4" rx="2" fill="#cbd5e1" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-brand-green drop-shadow-md z-20">
                  <Shield className="w-full h-full fill-brand-green text-white stroke-[1.5]" />
                  <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-1 text-left px-1 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
              <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3 h-3", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Eval access request</span></div>
              <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3 h-3", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Check role</span></div>
              <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3 h-3", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Check permissions</span></div>
              <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3 h-3", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Check policy</span></div>
              <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3 h-3", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Least-privilege rules</span></div>
            </div>
          </div>
        )
      },
      {
        title: "ACCESS DECISION",
        subtitle: "Decision point",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="flex flex-col gap-2">
              <div className="bg-green-50 border-l-4 border-brand-green rounded p-2 flex items-center justify-between shadow-sm">
                <span className="text-brand-green font-bold text-[12px]">Allowed</span>
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 rounded p-2 flex items-center justify-between shadow-sm opacity-80">
                <span className="text-red-600 font-bold text-[12px]">Denied</span>
                <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center"><div className="w-2 h-0.5 bg-red-600 rounded-full" /></div>
              </div>
            </div>
            
            <div className="text-[10px] text-slate-500 text-center mt-2 font-medium px-2">
              The engine enforces rules resulting in one of two outcomes.
            </div>
          </div>
        )
      },
      {
        title: "RESOURCES",
        subtitle: "Target systems",
        content: (
          <div className="flex flex-col gap-2 mt-3 w-full">
            <div className={clsx("flex items-center justify-between bg-white border rounded-md p-2 transition-colors", currentStep >= 4 ? "border-green-300 ring-1 ring-green-100" : "border-slate-200")}>
              <div className="flex items-center gap-2">
                <Server className={clsx("w-3 h-3", currentStep >= 4 ? "text-brand-green" : "text-slate-400")} />
                <span className="text-[10px] font-bold text-slate-700">Code Repo</span>
              </div>
              {currentStep >= 4 ? <span className="text-[9px] font-bold text-brand-green">✅ Granted</span> : <div className="w-3 h-3 rounded bg-slate-100" />}
            </div>
            <div className={clsx("flex items-center justify-between bg-white border rounded-md p-2 transition-colors", currentStep >= 4 ? "border-green-300 ring-1 ring-green-100" : "border-slate-200")}>
              <div className="flex items-center gap-2">
                <Laptop className={clsx("w-3 h-3", currentStep >= 4 ? "text-brand-green" : "text-slate-400")} />
                <span className="text-[10px] font-bold text-slate-700">Dev Server</span>
              </div>
              {currentStep >= 4 ? <span className="text-[9px] font-bold text-brand-green">✅ Granted</span> : <div className="w-3 h-3 rounded bg-slate-100" />}
            </div>
            <div className={clsx("flex items-center justify-between bg-white border rounded-md p-2 transition-colors", currentStep >= 4 ? "border-red-300 ring-1 ring-red-100 opacity-80" : "border-slate-200")}>
              <div className="flex items-center gap-2">
                <Server className={clsx("w-3 h-3", currentStep >= 4 ? "text-red-500" : "text-slate-400")} />
                <span className="text-[10px] font-bold text-slate-700">Prod DB</span>
              </div>
              {currentStep >= 4 ? <span className="text-[9px] font-bold text-red-600">❌ Denied</span> : <div className="w-3 h-3 rounded bg-slate-100" />}
            </div>
          </div>
        )
      }
    ];

    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative p-1 md:p-2 overflow-x-hidden">
        <div className={clsx("relative flex mx-auto items-start justify-center px-2 w-full max-w-6xl", isMobile ? "flex-col h-full py-8 gap-6" : "flex-row py-8 gap-2 lg:gap-4 xl:gap-8")}>
          {q4Data.map((node, idx) => {
            const isCompleted = idx < currentStep;
            const isActive = idx === currentStep;
            
            return (
              <div key={idx} className={clsx("relative z-10 flex flex-col items-center justify-start shrink-0 flex-1", isMobile ? "w-full my-6" : "min-w-[130px] max-w-[200px]")}>
                {idx < q4Data.length - 1 && (
                  <div className={clsx("absolute z-0", isMobile ? "w-1 h-16 left-1/2 -bottom-16 -translate-x-1/2" : "h-0.5 w-[calc(100%+8px)] lg:w-[calc(100%+16px)] xl:w-[calc(100%+32px)] top-[100px] left-[50%]")}>
                    <div className={clsx("w-full h-full rounded-full transition-colors duration-700", isCompleted ? "bg-brand-blue/60" : "bg-slate-200")} />
                    
                    <div className="absolute inset-0 overflow-hidden">
                      <AnimatePresence>
                        {particlePos === idx + 1 && (
                          <motion.div
                            initial={isMobile ? { top: '0%' } : { left: '0%' }} animate={isMobile ? { top: '100%' } : { left: '100%' }} transition={{ duration: 0.9, ease: "easeInOut" }}
                            className={clsx("absolute flex items-center justify-center", isMobile ? "w-2.5 h-6 left-1/2 -translate-x-1/2" : "w-6 h-6 top-1/2 -translate-y-1/2")}
                          >
                            <div className="w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_12px_rgba(22,119,232,0.8)] border-2 border-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
                
                <motion.div
                  initial={false}
                  animate={{ scale: isActive ? 1.02 : 1, y: isActive && !isMobile ? -4 : 0 }}
                  className={clsx(
                    "relative flex flex-col items-center justify-start w-full px-3 py-5 rounded-2xl bg-white transition-all duration-500 shadow-sm border",
                    isActive ? "border-brand-blue ring-4 ring-brand-blue-light shadow-md" :
                    isCompleted ? "border-slate-300 opacity-100" : "border-slate-200 opacity-60"
                  )}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-[13px] border-4 border-white shadow-sm z-20">
                    {idx + 1}
                  </div>
                  
                  <div className={clsx("text-center font-black text-[11px] leading-tight mb-0.5 tracking-wide", isActive ? "text-brand-navy" : "text-slate-700")}>
                    {node.title}
                  </div>
                  <div className="text-[9px] text-slate-500 font-medium tracking-wide text-center">
                    {node.subtitle}
                  </div>
                  
                  <div className={clsx("w-full transition-all duration-500", isActive || isCompleted ? "opacity-100" : "opacity-40 grayscale-[50%]")}>
                    {node.content}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Layout 2: Branching / Outputs`;

if (content.includes(injectionPoint)) {
  content = content.replace(injectionPoint, newCode);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully injected authz-stages layout into Visualizer.tsx');
} else {
  console.log('Could not find injection point');
}
