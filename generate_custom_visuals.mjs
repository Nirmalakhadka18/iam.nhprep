import fs from 'fs';

const content = `import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { 
  User, Smartphone, Fingerprint, Shield, Key, Database, Globe, Server, 
  Lock, Unlock, FileText, Activity, CheckCircle2, ArrowRight, Network, 
  MapPin, Clock, Tag, Briefcase, GitBranch, Cpu, Eye, EyeOff, KeyRound, 
  Layers, RefreshCw, Zap, Laptop
} from 'lucide-react';

export const CustomVisual = ({ layout, currentStep, isMobile, steps }: any) => {
  switch (layout) {
    case 'q5-mfa': return <MFAVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q6-sso': return <SSOVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q7-rbac': return <RBACVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q8-abac': return <ABACVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q9-least-privilege': return <LeastPrivilegeVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q10-zero-trust': return <ZeroTrustVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q11-never-trust': return <NeverTrustVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q12-idp': return <IdPVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q13-saml': return <SAMLVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q14-oauth': return <OAuthVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q15-oidc': return <OIDCVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q16-pam': return <PAMVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q17-jit': return <JITVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q18-device-posture': return <DevicePostureVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q19-lifecycle': return <LifecycleVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    case 'q20-troubleshooting': return <TroubleshootingVisual currentStep={currentStep} isMobile={isMobile} steps={steps} />;
    default: return <div className="p-8 text-center text-slate-400">Custom visual {layout} not implemented yet</div>;
  }
};

const GIcon = ({ icon: Icon, active, color = 'blue', label, sub }: any) => (
  <div className="flex flex-col items-center">
    <div className={clsx("w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 shadow-sm transition-all duration-500", 
      active ? \`border-brand-\${color} bg-white\` : "border-slate-200 bg-slate-50")}>
      <Icon className={clsx("w-6 h-6 md:w-8 md:h-8", active ? \`text-brand-\${color}\` : "text-slate-300")} />
    </div>
    {label && <span className="mt-2 font-bold text-[11px] md:text-xs text-center">{label}</span>}
    {sub && <span className="text-[9px] text-slate-500 text-center">{sub}</span>}
  </div>
);

// [Q5, Q6, Q7 omitted for brevity as they are already injected or can be regenerated here...]
const MFAVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center relative">
      <div className="flex justify-center gap-6 md:gap-12 w-full mb-12">
        <motion.div animate={{ y: currentStep >= 0 ? 0 : 20, opacity: currentStep >= 0 ? 1 : 0.3 }}><GIcon icon={Key} active={currentStep >= 0} label="Password" sub="Knowledge Factor" /></motion.div>
        <motion.div animate={{ y: currentStep >= 1 ? 0 : 20, opacity: currentStep >= 1 ? 1 : 0.3 }}><GIcon icon={Smartphone} active={currentStep >= 1} label="Phone OTP" sub="Possession Factor" /></motion.div>
        <motion.div animate={{ y: currentStep >= 2 ? 0 : 20, opacity: currentStep >= 2 ? 1 : 0.3 }}><GIcon icon={Fingerprint} active={currentStep >= 2} label="Fingerprint" sub="Inherence Factor" /></motion.div>
      </div>
      <div className="relative w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div animate={{ width: currentStep === 0 ? '33%' : currentStep === 1 ? '66%' : '100%' }} className="absolute left-0 top-0 h-full bg-brand-green" transition={{ duration: 0.5 }} />
      </div>
      <motion.div animate={{ scale: currentStep >= 3 ? 1.1 : 1, opacity: currentStep >= 3 ? 1 : 0 }} className="mt-8 flex items-center gap-2 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-md">
        <CheckCircle2 className="w-5 h-5" /> MFA VERIFIED
      </motion.div>
    </div>
  );
};

const SSOVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative scale-90 md:scale-100">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="z-20"><GIcon icon={User} active={currentStep >= 0} label="User" /></div>
        <div className="relative w-16 md:w-32 h-0.5 bg-slate-200">
          <motion.div initial={{ left: '0%' }} animate={{ left: currentStep === 1 ? '100%' : currentStep > 1 ? '50%' : '0%', opacity: currentStep > 0 ? 1 : 0 }} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_8px_#1479E8]" />
        </div>
        <div className="z-20"><motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }}><GIcon icon={Shield} active={currentStep >= 1} color="blue" label="Identity Provider" /></motion.div></div>
        <div className="relative w-24 md:w-32 h-40 flex flex-col justify-between ml-4 md:ml-8">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-slate-200" />
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200" />
          {[Globe, Database, Server].map((AppIcon, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-4 relative">
              <div className="w-8 h-0.5 bg-slate-200 absolute -left-8" />
              <motion.div animate={{ opacity: currentStep >= 2 + i ? 1 : 0, scale: currentStep >= 2 + i ? 1 : 0 }} className="absolute -left-4 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_8px_#22A06B]" />
              <GIcon icon={AppIcon} active={currentStep >= 2 + i} color="green" label={\`App \${i+1}\`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RBACVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-between px-8 md:px-16 scale-90 md:scale-100">
      <div className="flex flex-col gap-8">
        <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }}><GIcon icon={User} active={true} label="Alex" /></motion.div>
        <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }}><GIcon icon={User} active={true} label="Sarah" /></motion.div>
      </div>
      <div className="flex flex-col gap-12 relative z-10">
        <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1, borderColor: currentStep >= 1 ? '#1479E8' : '#e2e8f0' }} className="px-4 py-3 md:px-6 md:py-3 border-2 rounded-lg bg-white shadow-sm font-bold text-[10px] md:text-sm text-brand-blue">Developer Role</motion.div>
        <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1, borderColor: currentStep >= 1 ? '#1479E8' : '#e2e8f0' }} className="px-4 py-3 md:px-6 md:py-3 border-2 rounded-lg bg-white shadow-sm font-bold text-[10px] md:text-sm text-brand-blue">HR Role</motion.div>
      </div>
      <div className="flex flex-col gap-4 relative z-10">
        <motion.div animate={{ backgroundColor: currentStep >= 2 ? '#22A06B' : '#f8fafc', color: currentStep >= 2 ? 'white' : '#64748b' }} className="px-4 py-2 border rounded text-[10px] md:text-xs font-bold transition-colors">Read Code</motion.div>
        <motion.div animate={{ backgroundColor: currentStep >= 2 ? '#22A06B' : '#f8fafc', color: currentStep >= 2 ? 'white' : '#64748b' }} className="px-4 py-2 border rounded text-[10px] md:text-xs font-bold transition-colors">Write Code</motion.div>
        <motion.div animate={{ backgroundColor: currentStep >= 2 ? '#22A06B' : '#f8fafc', color: currentStep >= 2 ? 'white' : '#64748b' }} className="px-4 py-2 border rounded text-[10px] md:text-xs font-bold transition-colors mt-4">View Records</motion.div>
      </div>
    </div>
  );
};

const ABACVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative scale-90 md:scale-100">
      <div className="flex gap-4 md:gap-8 items-center">
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }} className="p-2 border rounded bg-white text-xs"><MapPin className="inline w-4 h-4 mr-1 text-blue-500" /> Location</motion.div>
          <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }} className="p-2 border rounded bg-white text-xs"><Clock className="inline w-4 h-4 mr-1 text-blue-500" /> Time</motion.div>
          <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }} className="p-2 border rounded bg-white text-xs"><Briefcase className="inline w-4 h-4 mr-1 text-blue-500" /> Dept</motion.div>
          <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }} className="p-2 border rounded bg-white text-xs"><Tag className="inline w-4 h-4 mr-1 text-blue-500" /> Clearance</motion.div>
        </div>
        <div className="h-0.5 w-8 bg-slate-200 relative"><motion.div animate={{ x: currentStep >= 1 ? 32 : 0, opacity: currentStep >= 1 ? 1 : 0 }} className="w-2 h-2 rounded-full bg-brand-blue absolute -top-1" /></div>
        <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }}><GIcon icon={Cpu} active={currentStep >= 1} label="Policy Engine" /></motion.div>
        <div className="h-0.5 w-8 bg-slate-200 relative"><motion.div animate={{ x: currentStep >= 2 ? 32 : 0, opacity: currentStep >= 2 ? 1 : 0 }} className="w-2 h-2 rounded-full bg-brand-green absolute -top-1" /></div>
        <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }}><GIcon icon={Database} active={currentStep >= 2} color="green" label="Resource" /></motion.div>
      </div>
    </div>
  );
};

const LeastPrivilegeVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
      <div className="flex items-center gap-12">
        <GIcon icon={User} active={true} label="User" />
        <div className="relative">
          <div className="w-32 h-64 bg-red-50 border-2 border-red-200 rounded-xl relative overflow-hidden flex flex-col justify-around p-2">
            {[1,2,3,4,5].map(i => (
              <motion.div key={i} animate={{ opacity: (currentStep === 0 || (currentStep === 1 && i === 3)) ? 1 : 0 }} className="bg-white border rounded p-2 text-[10px] text-center font-bold">Permission {i}</motion.div>
            ))}
            <motion.div animate={{ opacity: currentStep >= 1 ? 1 : 0 }} className="absolute inset-0 bg-brand-blue/20 backdrop-blur-[2px] flex items-center justify-center border-4 border-brand-blue rounded-xl">
               <motion.div animate={{ scale: currentStep >= 2 ? 1 : 0 }} className="bg-white p-2 rounded shadow-lg font-bold text-xs text-brand-blue">Filter applied</motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0 }} className="w-32 h-24 bg-green-50 border-2 border-brand-green rounded-xl flex items-center justify-center p-2">
           <div className="bg-white border-2 border-brand-green rounded p-2 text-xs text-center font-bold text-brand-green">Permission 3 (Only required)</div>
        </motion.div>
      </div>
    </div>
  );
};

const ZeroTrustVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center relative">
       <div className="flex gap-4 mb-8">
         <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }}><GIcon icon={User} active={currentStep >= 0} label="Identity" /></motion.div>
         <motion.div animate={{ opacity: currentStep >= 0 ? 1 : 0.3 }}><GIcon icon={Laptop} active={currentStep >= 0} label="Device" /></motion.div>
       </div>
       <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1, rotate: currentStep >= 1 ? 360 : 0 }} transition={{ duration: 1 }} className="mb-8">
         <GIcon icon={RefreshCw} active={currentStep >= 1} color="blue" label="Continuous Verify" />
       </motion.div>
       <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0.3 }}>
         <GIcon icon={Shield} active={currentStep >= 2} color="green" label="Micro-segmented Resource" />
       </motion.div>
    </div>
  );
};

const NeverTrustVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
       <div className="flex gap-16 items-center">
         <div className="relative p-8 border-4 border-dashed border-red-300 rounded-2xl bg-red-50">
           <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-100 px-2 text-xs font-bold text-red-600">Untrusted Network</span>
           <GIcon icon={Globe} active={true} />
         </div>
         <motion.div animate={{ scale: currentStep >= 1 ? 1.2 : 1 }} className="z-10">
           <GIcon icon={Eye} active={currentStep >= 1} label="Always Verify" color="blue" />
         </motion.div>
         <div className="relative p-8 border-4 border-solid border-slate-300 rounded-2xl bg-slate-50 overflow-hidden">
           <motion.div animate={{ opacity: currentStep >= 2 ? 0 : 1 }} className="absolute inset-0 bg-slate-200/50 flex items-center justify-center"><span className="text-xs font-bold text-slate-500 bg-white px-2 rounded">Implicit Trust (Deprecated)</span></motion.div>
           <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-slate-600">Internal Network</span>
           <GIcon icon={Server} active={true} />
         </div>
       </div>
    </div>
  );
};

const IdPVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-4">
          <GIcon icon={Server} active={currentStep >= 0} label="App A" />
          <GIcon icon={Database} active={currentStep >= 0} label="App B" />
        </div>
        <div className="text-xs font-bold text-slate-400">Delegates Auth to &rarr;</div>
        <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }}>
          <div className="p-6 border-4 border-brand-blue rounded-full bg-blue-50 flex flex-col items-center">
            <Shield className="w-12 h-12 text-brand-blue" />
            <span className="font-bold text-brand-blue mt-2">Identity Provider</span>
          </div>
        </motion.div>
        <div className="text-xs font-bold text-slate-400">&larr; Authenticates</div>
        <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }}>
          <GIcon icon={User} active={currentStep >= 2} label="User Directory" />
        </motion.div>
      </div>
    </div>
  );
};

const SAMLVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center relative">
       <div className="flex items-center gap-16 mb-12">
         <GIcon icon={Globe} active={true} label="Browser" />
         <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }}><GIcon icon={Server} active={currentStep >= 1} label="Service Provider" /></motion.div>
         <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }}><GIcon icon={Shield} active={currentStep >= 2} color="blue" label="Identity Provider" /></motion.div>
       </div>
       <div className="relative w-[400px] h-32 bg-slate-50 border rounded-xl overflow-hidden shadow-inner p-4 text-xs font-mono text-slate-600 break-all">
         <motion.div animate={{ y: currentStep >= 3 ? 0 : 50, opacity: currentStep >= 3 ? 1 : 0 }}>
           &lt;saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" ID="123" IssueInstant="2026-09-30"&gt;
           <br/>&nbsp;&nbsp;&lt;saml:Subject&gt;...&lt;/saml:Subject&gt;
           <br/>&lt;/saml:Assertion&gt;
         </motion.div>
       </div>
    </div>
  );
};

const OAuthVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center relative">
      <div className="flex justify-around w-full px-12 relative z-10">
        <GIcon icon={Laptop} active={true} label="Client App" />
        <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }}><GIcon icon={KeyRound} active={currentStep >= 1} label="Auth Server" /></motion.div>
        <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }}><GIcon icon={Database} active={currentStep >= 2} color="green" label="Resource Server" /></motion.div>
      </div>
      <div className="absolute top-1/2 left-0 w-full h-32 pointer-events-none">
        <motion.div animate={{ x: currentStep >= 1 ? 300 : 100, opacity: currentStep >= 1 ? 1 : 0 }} className="absolute top-0 w-16 h-8 bg-blue-100 border border-brand-blue rounded flex items-center justify-center text-[8px] font-bold text-brand-blue">Access Token</motion.div>
        <motion.div animate={{ x: currentStep >= 2 ? 500 : 300, opacity: currentStep >= 2 ? 1 : 0 }} className="absolute bottom-0 w-16 h-8 bg-green-100 border border-brand-green rounded flex items-center justify-center text-[8px] font-bold text-brand-green">API Request</motion.div>
      </div>
    </div>
  );
};

const OIDCVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
       <div className="flex items-center gap-8">
         <GIcon icon={KeyRound} active={true} label="OAuth 2.0" sub="Authorization" />
         <span className="text-2xl font-bold text-slate-300">+</span>
         <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }}>
           <GIcon icon={User} active={currentStep >= 1} color="blue" label="ID Token" sub="Identity Layer" />
         </motion.div>
         <span className="text-2xl font-bold text-slate-300">=</span>
         <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1, rotateY: currentStep >= 2 ? 360 : 0 }} transition={{ duration: 0.8 }}>
           <GIcon icon={Shield} active={currentStep >= 2} color="green" label="OIDC" sub="Auth + Identity" />
         </motion.div>
       </div>
    </div>
  );
};

const PAMVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
       <div className="flex items-center gap-12">
         <GIcon icon={User} active={true} label="Admin" color="red" />
         <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }}>
           <div className="p-4 border-4 border-slate-700 bg-slate-800 text-white rounded-xl flex flex-col items-center">
             <Lock className="w-8 h-8 mb-2" />
             <span className="text-xs font-bold">PAM Vault</span>
           </div>
         </motion.div>
         <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }}>
           <GIcon icon={Server} active={currentStep >= 2} color="red" label="Critical Server" />
         </motion.div>
       </div>
    </div>
  );
};

const JITVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex items-center gap-8 opacity-50 grayscale">
          <GIcon icon={User} active={true} label="Standing Privileges" />
          <span className="text-xs text-red-500 font-bold">Always open 24/7 (Risky)</span>
        </div>
        <div className="flex items-center gap-8">
          <motion.div animate={{ scale: currentStep >= 0 ? 1.1 : 1 }}><GIcon icon={User} active={currentStep >= 0} label="JIT Access" /></motion.div>
          <motion.div animate={{ width: currentStep >= 1 ? 120 : 0, opacity: currentStep >= 1 ? 1 : 0 }} className="h-8 bg-brand-green/20 rounded-full flex items-center justify-center border border-brand-green overflow-hidden">
            <span className="text-[10px] font-bold text-brand-green whitespace-nowrap px-2">Access open for 2 hours</span>
          </motion.div>
          <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }}><GIcon icon={Server} active={currentStep >= 2} color="green" /></motion.div>
        </div>
      </div>
    </div>
  );
};

const DevicePostureVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative gap-16">
      <div className="flex flex-col gap-4">
        <motion.div animate={{ x: currentStep >= 0 ? 0 : -20, opacity: currentStep >= 0 ? 1 : 0 }}>
          <div className="flex items-center gap-2 bg-green-50 p-2 rounded border border-green-200"><CheckCircle2 className="w-4 h-4 text-green-500"/> <span className="text-xs font-bold text-green-700">Antivirus updated</span></div>
        </motion.div>
        <motion.div animate={{ x: currentStep >= 1 ? 0 : -20, opacity: currentStep >= 1 ? 1 : 0 }}>
          <div className="flex items-center gap-2 bg-green-50 p-2 rounded border border-green-200"><CheckCircle2 className="w-4 h-4 text-green-500"/> <span className="text-xs font-bold text-green-700">OS Patched</span></div>
        </motion.div>
      </div>
      <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }}>
        <GIcon icon={Laptop} active={currentStep >= 2} color="green" label="Healthy Device" />
      </motion.div>
    </div>
  );
};

const LifecycleVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
       <div className="flex gap-12">
         <motion.div animate={{ scale: currentStep === 0 ? 1.2 : 1, opacity: currentStep >= 0 ? 1 : 0.3 }} className="flex flex-col items-center">
           <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue font-bold border-2 border-brand-blue mb-2">J</div>
           <span className="text-xs font-bold">Joiner</span>
           <span className="text-[10px] text-slate-500">Onboarding</span>
         </motion.div>
         <motion.div animate={{ scale: currentStep === 1 ? 1.2 : 1, opacity: currentStep >= 1 ? 1 : 0.3 }} className="flex flex-col items-center">
           <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold border-2 border-amber-500 mb-2">M</div>
           <span className="text-xs font-bold">Mover</span>
           <span className="text-[10px] text-slate-500">Role Change</span>
         </motion.div>
         <motion.div animate={{ scale: currentStep === 2 ? 1.2 : 1, opacity: currentStep >= 2 ? 1 : 0.3 }} className="flex flex-col items-center">
           <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold border-2 border-red-500 mb-2">L</div>
           <span className="text-xs font-bold">Leaver</span>
           <span className="text-[10px] text-slate-500">Offboarding</span>
         </motion.div>
       </div>
    </div>
  );
};

const TroubleshootingVisual = ({ currentStep }: any) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
       <div className="flex flex-col gap-6 items-center">
         <GIcon icon={AlertTriangle} active={true} color="red" label="Access Denied" />
         <div className="flex gap-4">
           <motion.div animate={{ scale: currentStep >= 1 ? 1.1 : 1 }} className="p-3 bg-white border rounded shadow-sm text-xs font-bold text-slate-600">Check Auth Logs</motion.div>
           <motion.div animate={{ scale: currentStep >= 2 ? 1.1 : 1 }} className="p-3 bg-white border rounded shadow-sm text-xs font-bold text-slate-600">Check Group Policy</motion.div>
           <motion.div animate={{ scale: currentStep >= 3 ? 1.1 : 1 }} className="p-3 bg-white border rounded shadow-sm text-xs font-bold text-slate-600">Check MFA Status</motion.div>
         </div>
       </div>
    </div>
  );
};
\`;

fs.writeFileSync('src/components/visualizations/CustomVisuals.tsx', content);
console.log('CustomVisuals updated fully');
