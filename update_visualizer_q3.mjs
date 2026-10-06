import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = join(__dirname, 'src/components/Visualizer.tsx');

let content = fs.readFileSync(filePath, 'utf8');

const injectionPoint = `  // Layout 2: Branching / Outputs`;

const newCode = `  // Layout: Q3 Auth Stages
  if (layout === 'auth-stages') {
    const q3Data = [
      {
        title: "ENTER CREDENTIALS",
        subtitle: "Provide login details",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="flex justify-center mb-2">
              <Q2EmployeeIcon />
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-3 relative overflow-hidden">
              <div className="text-[10px] text-slate-500 font-bold mb-1.5 uppercase tracking-wider">Corporate Login</div>
              <div className="bg-slate-50 border border-slate-200 rounded px-2 py-1.5 mb-1.5 text-[11px] text-slate-700 font-medium">alex@company.com</div>
              <div className="bg-slate-50 border border-slate-200 rounded px-2 py-1.5 mb-2 flex gap-1 items-center h-[26px]">
                {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full" />)}
              </div>
              <div className="bg-brand-blue text-white rounded py-1.5 text-center text-[11px] font-bold shadow-sm">
                Sign In
              </div>
            </div>

            <div className="text-left bg-slate-50 border border-slate-200 p-2.5 rounded-xl w-full">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-0.5"><div className="w-3.5 flex justify-center"><User className="w-3 h-3 text-brand-blue" /></div> User: Alex Johnson</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-0.5"><div className="w-3.5 flex justify-center"><MapPin className="w-3 h-3 text-brand-blue" /></div> Email: alex@company.com</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-0.5"><div className="w-3.5 flex justify-center"><Laptop className="w-3 h-3 text-brand-blue" /></div> Device: Corporate Laptop</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500"><div className="w-3.5 flex justify-center"><MapPin className="w-3 h-3 text-brand-blue" /></div> Location: Office</div>
            </div>
          </div>
        )
      },
      {
        title: "VERIFY CREDENTIALS",
        subtitle: "Check username & password",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="flex justify-center mb-2 h-24">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="15" width="50" height="70" rx="4" fill="#334155" />
                  <rect x="35" y="25" width="30" height="4" rx="2" fill="#475569" />
                  <rect x="35" y="45" width="30" height="4" rx="2" fill="#475569" />
                  <rect x="35" y="65" width="30" height="4" rx="2" fill="#475569" />
                  <circle cx="35" cy="80" r="3" fill="#38bdf8" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-14 text-brand-blue drop-shadow-md z-20">
                  <Shield className="w-full h-full fill-brand-blue text-white stroke-[1.5]" />
                  <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-left px-1 mt-2 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Checking username</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Checking password</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Validating account</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">User found</span></div>
            </div>
          </div>
        )
      },
      {
        title: "MFA VERIFICATION",
        subtitle: "Additional security factor",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-sm relative flex flex-col items-center">
              <div className="text-[11px] font-bold text-slate-800 mb-2">MFA Challenge</div>
              <div className="relative w-14 h-24 bg-slate-800 rounded-[12px] border-4 border-slate-700 flex flex-col items-center justify-center shadow-md mb-2">
                <div className="absolute top-1 w-4 h-1 bg-slate-900 rounded-full"></div>
                <div className="bg-white/10 w-10 h-8 rounded mb-2 flex items-center justify-center flex-col">
                  <div className="text-brand-blue font-bold tracking-widest text-[10px]">482</div>
                  <div className="text-brand-blue font-bold tracking-widest text-[10px]">915</div>
                </div>
                <Fingerprint className="w-5 h-5 text-slate-400" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-left px-1 mt-1 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Sending OTP</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Verifying OTP</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Biometric verification</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700">MFA verified</span></div>
            </div>
          </div>
        )
      },
      {
        title: "AUTHENTICATED",
        subtitle: "Identity verified",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="flex justify-center mb-2 relative">
              <div className="relative w-24 h-24 flex items-end justify-center shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 85c0-15 10-25 20-25s20 10 20 25v15H30V85z" fill="#2563eb" />
                  <circle cx="50" cy="35" r="14" fill="#fde047" />
                  <path d="M35 35c0-15 10-18 15-18s15 3 15 18c0-5-5-10-15-10s-15 5-15 10z" fill="#0f172a" />
                  <path d="M35 30c0 5-2 10-2 10s-3-5-3-10c0-10 10-15 10-15s-5 5-5 15z" fill="#0f172a" />
                </svg>
                <div className="absolute -right-2 top-0 w-10 h-10 bg-brand-green rounded-full shadow-md border-2 border-white flex flex-col items-center justify-center p-1 z-20">
                   <Lock className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center shadow-sm">
              <div className="flex items-center justify-center gap-1.5 text-brand-green font-bold text-[13px] mb-1"><CheckCircle2 className="w-4 h-4" /> Authentication Successful</div>
              <div className="text-[10px] text-green-700 leading-tight">You are now authenticated</div>
            </div>

            <div className="flex flex-col gap-1.5 text-left px-1 mt-1 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 3 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Identity verified</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 3 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">MFA completed</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 3 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700">Authenticated session created</span></div>
            </div>
          </div>
        )
      }
    ];

    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative p-1 md:p-2 overflow-x-hidden">
        <div className={clsx("relative flex mx-auto items-start justify-center px-2 w-full max-w-6xl", isMobile ? "flex-col h-full py-8 gap-6" : "flex-row py-8 gap-2 lg:gap-4 xl:gap-8")}>
          {q3Data.map((node, idx) => {
            const isCompleted = idx < currentStep;
            const isActive = idx === currentStep;
            
            return (
              <div key={idx} className={clsx("relative z-10 flex flex-col items-center justify-start shrink-0 flex-1", isMobile ? "w-full my-6" : "min-w-[140px] max-w-[220px]")}>
                {idx < q3Data.length - 1 && (
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
                    "relative flex flex-col items-center justify-start w-full px-4 py-5 rounded-2xl bg-white transition-all duration-500 shadow-sm border",
                    isActive ? "border-brand-blue ring-4 ring-brand-blue-light shadow-md" :
                    isCompleted ? "border-slate-300 opacity-100" : "border-slate-200 opacity-60"
                  )}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-[13px] border-4 border-white shadow-sm z-20">
                    {idx + 1}
                  </div>
                  
                  <div className={clsx("text-center font-black text-[12px] leading-tight mb-0.5 tracking-wide", isActive ? "text-brand-navy" : "text-slate-700")}>
                    {node.title}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium tracking-wide text-center">
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
  console.log('Successfully injected auth-stages layout into Visualizer.tsx');
} else {
  console.log('Could not find injection point');
}
