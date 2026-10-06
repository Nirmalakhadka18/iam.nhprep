with open("src/components/visualizations/CustomVisuals.tsx", "r", encoding="utf-8") as f:
    content = f.read()

old = '''// Q20: Complete Access Request
const Q20Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-2 md:p-8">
    <div className="flex flex-row flex-wrap items-center justify-center max-w-6xl gap-2 md:gap-4 mt-8">
      <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="USER" size="small" />
      <div className="w-8 h-0.5 bg-slate-200 relative hidden md:block"><Packet active={currentStep >= 1} /></div>
      <GIcon icon={Fingerprint} active={currentStep >= 1} label="IDENTITY" size="small" />
      <div className="w-8 h-0.5 bg-slate-200 relative hidden md:block"><Packet active={currentStep >= 2} /></div>
      <GIcon icon={Key} active={currentStep >= 2} label="AUTHENTICATION" size="small" />
      <div className="w-8 h-0.5 bg-slate-200 relative hidden md:block"><Packet active={currentStep >= 3} /></div>
      <GIcon icon={Laptop} active={currentStep >= 3} label="CONTEXT" size="small" />
      <div className="w-8 h-0.5 bg-slate-200 relative hidden md:block"><Packet active={currentStep >= 4} /></div>
      <GIcon icon={Briefcase} active={currentStep >= 4} label="AUTHORIZATION" size="small" />
      <div className="w-8 h-0.5 bg-slate-200 relative hidden md:block"><Packet active={currentStep >= 5} /></div>
      <GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={currentStep >= 5} label="POLICY" size="small" />
      <div className="w-8 h-0.5 bg-slate-200 relative hidden md:block"><Packet active={currentStep >= 6} /></div>
      <div className="flex flex-col gap-2">
        <motion.div animate={{ opacity: currentStep >= 6 ? 1 : 0 }} className="bg-brand-green text-white px-2 py-1 rounded text-[10px] font-bold shadow">ALLOW</motion.div>
        <motion.div animate={{ opacity: currentStep >= 6 ? 0.3 : 0 }} className="bg-red-500 text-white px-2 py-1 rounded text-[10px] font-bold shadow">DENY</motion.div>
      </div>
      <div className="w-8 h-0.5 bg-slate-200 relative hidden md:block"><Packet active={currentStep >= 7} /></div>
      <GIcon icon={Server} imgSrc="/assets/images/server_resource.png" active={currentStep >= 7} label="RESOURCE" size="small" />
    </div>
    <motion.div animate={{ opacity: currentStep >= 8 ? 1 : 0 }} className="absolute bottom-4 bg-brand-blue text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
      <RefreshCw className="w-5 h-5 animate-spin" /> CONTINUOUS EVALUATION
    </motion.div>
  </div>
);'''

new = '''// Q20: Complete Access Request
const Q20Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-4 md:p-8">
    <div className="flex flex-row items-center justify-between w-full max-w-5xl gap-1">
      <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="User" size="small" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
      <GIcon icon={Fingerprint} active={currentStep >= 1} label="Identity" size="small" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
      <GIcon icon={Key} active={currentStep >= 2} label="AuthN" size="small" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
      <GIcon icon={Laptop} active={currentStep >= 3} label="Context" size="small" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 4} /></div>
      <GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={currentStep >= 4} label="Policy" size="small" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 5} /></div>
      <motion.div animate={{ scale: currentStep >= 5 ? 1 : 0.8, opacity: currentStep >= 5 ? 1 : 0.3 }}
        className="flex flex-col items-center gap-1 min-w-[50px]">
        <div className="bg-brand-green text-white px-2 py-1 rounded text-[9px] font-bold shadow">ALLOW</div>
        <div className="bg-red-500/40 text-white px-2 py-1 rounded text-[9px] font-bold shadow">DENY</div>
      </motion.div>
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 6} /></div>
      <GIcon icon={Server} imgSrc="/assets/images/server_resource.png" active={currentStep >= 6} label="Resource" size="small" color="green" />
    </div>
    <motion.div animate={{ opacity: currentStep >= 7 ? 1 : 0 }}
      className="mt-6 bg-brand-blue/10 border-2 border-brand-blue border-dashed rounded-2xl px-6 py-2 flex items-center gap-2">
      <RefreshCw className="w-4 h-4 text-brand-blue animate-spin" />
      <span className="font-bold text-brand-blue text-sm">CONTINUOUS EVALUATION</span>
    </motion.div>
  </div>
);'''

normalized = content.replace('\r\n', '\n')
if old in normalized:
    normalized = normalized.replace(old, new)
    with open("src/components/visualizations/CustomVisuals.tsx", "w", encoding="utf-8", newline='\n') as f:
        f.write(normalized)
    print("SUCCESS")
else:
    print("NOT FOUND")
    idx = normalized.find("Q20: Complete")
    if idx >= 0:
        print(repr(normalized[idx:idx+200]))
