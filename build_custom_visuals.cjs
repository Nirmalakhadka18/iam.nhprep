const fs = require('fs');

const content = `import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { 
  User, Smartphone, Fingerprint, Shield, Key, Database, Globe, Server, 
  Lock, Unlock, FileText, Activity, CheckCircle2, ArrowRight, Network, 
  MapPin, Clock, Tag, Briefcase, GitBranch, Cpu, Eye, EyeOff, KeyRound, 
  Layers, RefreshCw, Zap, Laptop, AlertTriangle
} from 'lucide-react';

export const CustomVisual = ({ layout, currentStep, isMobile, steps }: any) => {
  switch (layout) {
    case 'q1': return <Q1Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q2': return <Q2Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q3': return <Q3Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q4': return <Q4Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q5': return <Q5Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q6': return <Q6Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q7': return <Q7Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q8': return <Q8Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q9': return <Q9Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q10': return <Q10Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q11': return <Q11Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q12': return <Q12Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q13': return <Q13Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q14': return <Q14Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q15': return <Q15Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q16': return <Q16Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q17': return <Q17Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q18': return <Q18Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q19': return <Q19Visual currentStep={currentStep} isMobile={isMobile} />;
    case 'q20': return <Q20Visual currentStep={currentStep} isMobile={isMobile} />;
    default: return <div className="p-8 text-center text-slate-400">Custom visual {layout} not implemented yet</div>;
  }
};

const GIcon = ({ icon: Icon, active, color = 'blue', label, sub, imgSrc, size = 'normal' }: any) => {
  const sz = size === 'large' ? 'w-24 h-24 lg:w-32 lg:h-32' : size === 'small' ? 'w-12 h-12 lg:w-16 lg:h-16' : 'w-20 h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24';
  return (
    <div className={clsx("flex flex-col items-center justify-start w-full transition-all duration-500", active ? "" : "opacity-60")}>
      <div className={clsx("mb-3 flex items-center justify-center transition-all duration-500 relative z-10", sz, active ? "scale-110" : "opacity-75 grayscale-[30%]")}>
        {imgSrc ? (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-slate-100 shadow-sm bg-white">
            <img src={imgSrc} alt={label || "icon"} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className={clsx("w-full h-full rounded-2xl flex items-center justify-center border-4 shadow-sm transition-all duration-500", active ? \`border-brand-\${color} bg-white shadow-md\` : "border-slate-200 bg-slate-50")}>
            <Icon className={clsx("w-8 h-8 md:w-10 md:h-10", active ? \`text-brand-\${color}\` : "text-slate-300")} />
          </div>
        )}
      </div>
      <div className={clsx("text-center font-bold text-[14px] leading-tight mb-0.5", active ? "text-brand-navy" : "text-slate-500")}>{label}</div>
      {sub && <div className="text-[11px] text-slate-400 font-medium tracking-wider text-center w-full">{sub}</div>}
    </div>
  );
};

const Packet = ({ active, delay = 0, style }: any) => (
  <motion.div initial={{ left: '0%' }} animate={{ left: active ? '100%' : '0%' }} transition={{ duration: 1, delay, ease: "easeInOut" }} className="absolute w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_8px_#38bdf8] top-1/2 -translate-y-1/2 z-20" style={style} />
);

// Q1: IAM
const Q1Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex items-center justify-center relative p-8">
    <div className="flex flex-row items-center justify-between w-full max-w-5xl gap-4">
      <div className="flex-1 relative">
        <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Employee" sub="Alex" />
        <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200"><Packet active={currentStep >= 1} /></div>
      </div>
      <div className="flex-1 relative">
        <GIcon icon={Fingerprint} imgSrc="/assets/images/id_badge.png" active={currentStep >= 1} label="Identity" sub="alex@company" />
        <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200"><Packet active={currentStep >= 2} /></div>
      </div>
      <div className="flex-1 relative">
        <GIcon icon={Key} imgSrc="/assets/images/auth_password.png" active={currentStep >= 2} label="Authentication" sub="Verify" />
        <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200"><Packet active={currentStep >= 3} /></div>
      </div>
      <div className="flex-1 relative">
        <GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={currentStep >= 3} label="Authorization" sub="Check access" />
        <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200"><Packet active={currentStep >= 4} /></div>
      </div>
      <div className="flex-1">
        <GIcon icon={Server} imgSrc="/assets/images/server_resource.png" active={currentStep >= 4} label="Resource" sub="Access Granted" color="green" />
      </div>
    </div>
  </div>
);

// Q2: IDENTITY
const Q2Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-16 relative">
    <div className="w-1/3">
      <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} size="large" label="Real Person" sub="Alex Johnson" />
    </div>
    <div className="w-24 h-0.5 bg-slate-200 relative">
      <Packet active={currentStep >= 1} />
      <Packet active={currentStep >= 2} delay={0.2} />
    </div>
    <div className="w-1/3">
      <motion.div animate={{ scale: currentStep >= 2 ? 1 : 0.9, opacity: currentStep >= 1 ? 1 : 0.5 }} className="bg-white border-4 border-brand-blue rounded-3xl p-6 shadow-xl">
        <h3 className="font-black text-brand-navy text-lg mb-4 text-center border-b pb-2">DIGITAL IDENTITY</h3>
        <div className="space-y-3">
          <motion.div animate={{ x: currentStep >= 1 ? 0 : 20, opacity: currentStep >= 1 ? 1 : 0 }} className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg"><User className="w-5 h-5 text-brand-blue" /> <span className="font-bold text-slate-700">Alex Johnson</span></motion.div>
          <motion.div animate={{ x: currentStep >= 2 ? 0 : 20, opacity: currentStep >= 2 ? 1 : 0 }} className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg"><Tag className="w-5 h-5 text-brand-blue" /> <span className="font-bold text-slate-700">EMP-2048</span></motion.div>
          <motion.div animate={{ x: currentStep >= 3 ? 0 : 20, opacity: currentStep >= 3 ? 1 : 0 }} className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg"><Globe className="w-5 h-5 text-brand-blue" /> <span className="font-bold text-slate-700">alex@company.com</span></motion.div>
          <motion.div animate={{ x: currentStep >= 4 ? 0 : 20, opacity: currentStep >= 4 ? 1 : 0 }} className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg"><Briefcase className="w-5 h-5 text-brand-blue" /> <span className="font-bold text-slate-700">Developer</span></motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Q3: AUTHENTICATION
const Q3Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
    <div className="flex flex-row items-center justify-between w-full max-w-4xl gap-8">
      <div className="flex-1 relative">
        <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Alex" sub="At Laptop" />
        <div className="absolute top-1/2 -right-8 w-16 h-0.5 bg-slate-200"><Packet active={currentStep >= 1} /></div>
      </div>
      <div className="flex-1 relative">
        <motion.div animate={{ scale: currentStep >= 1 ? 1.05 : 1 }} className={clsx("bg-white border-2 rounded-xl p-4 shadow-md", currentStep >= 1 ? "border-brand-blue" : "border-slate-200 opacity-50")}>
          <div className="text-xs font-bold mb-2">Login</div>
          <div className="h-6 bg-slate-100 rounded mb-2 flex items-center px-2 text-[10px]">alex@company</div>
          <div className="h-6 bg-slate-100 rounded mb-2 flex items-center px-2 text-[10px]">********</div>
          <div className="h-6 bg-brand-blue text-white rounded flex items-center justify-center text-[10px] font-bold">Sign In</div>
        </motion.div>
        <div className="absolute top-1/2 -right-8 w-16 h-0.5 bg-slate-200"><Packet active={currentStep >= 2} /></div>
      </div>
      <div className="flex-1 relative">
        <GIcon icon={Server} imgSrc="/assets/images/security_shield.png" active={currentStep >= 2} label="Auth Server" sub="Verification" />
        <div className="absolute top-1/2 -right-8 w-16 h-0.5 bg-slate-200"><Packet active={currentStep >= 3} /></div>
      </div>
      <div className="flex-1 relative">
        <GIcon icon={Smartphone} imgSrc="/assets/images/mfa_phone.png" active={currentStep >= 3} label="OTP / Approve" sub="Smartphone" />
      </div>
    </div>
    <motion.div animate={{ y: currentStep >= 5 ? 0 : 20, opacity: currentStep >= 5 ? 1 : 0 }} className="absolute bottom-10 bg-brand-green text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-3">
      <CheckCircle2 className="w-6 h-6" /> IDENTITY VERIFIED
    </motion.div>
  </div>
);

// Q4: AUTHORIZATION
const Q4Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-8 relative px-8">
    <div className="flex flex-col items-center">
      <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Authenticated User" sub="WHO" />
      <div className="h-12 w-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
      <GIcon icon={Briefcase} imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 1} label="Developer Role" sub="Role" />
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
    <motion.div animate={{ scale: currentStep >= 2 ? 1 : 0.9, opacity: currentStep >= 2 ? 1 : 0.5 }} className="bg-white border-2 border-brand-blue rounded-xl p-4 shadow-md w-48 text-center">
      <div className="font-bold text-xs mb-2">Permissions</div>
      <div className="text-[10px] text-green-600 font-bold mb-1">✓ Read Code</div>
      <div className="text-[10px] text-green-600 font-bold mb-1">✓ Write Code</div>
      <div className="text-[10px] text-green-600 font-bold mb-1">✓ Dev Server</div>
    </motion.div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
    <div className="flex flex-col items-center">
      <GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={currentStep >= 3} label="Policy Engine" sub="Decides" />
    </div>
    <div className="w-16 flex flex-col items-center relative h-32">
      <div className="absolute top-1/2 right-0 w-16 h-0.5 bg-slate-200 origin-left rotate-[-30deg]"><Packet active={currentStep >= 4} /></div>
      <div className="absolute top-1/2 right-0 w-16 h-0.5 bg-slate-200 origin-left rotate-[30deg]"><Packet active={currentStep >= 4} /></div>
    </div>
    <div className="flex flex-col justify-between h-64">
      <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0.4 }} className="flex flex-col items-center bg-green-50 p-3 rounded-xl border border-green-200">
        <GIcon icon={FileCode} active={currentStep >= 4} label="Code Repo" color="green" />
        <span className="text-green-600 font-bold text-xs mt-2">✓ GRANTED</span>
      </motion.div>
      <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0.4 }} className="flex flex-col items-center bg-red-50 p-3 rounded-xl border border-red-200">
        <GIcon icon={Database} active={currentStep >= 4} label="Production DB" color="red" />
        <span className="text-red-600 font-bold text-xs mt-2">✕ DENIED</span>
      </motion.div>
    </div>
  </div>
);

// Q5: AUTH VS AUTHZ
const Q5Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-12 relative p-8">
    <div className="flex-1 bg-blue-50/50 p-6 rounded-3xl border border-blue-100 flex flex-col items-center relative">
      <h3 className="font-black text-brand-blue text-lg mb-8">AUTHENTICATION</h3>
      <div className="bg-white p-2 rounded font-bold text-xs mb-8 text-brand-navy shadow-sm">"WHO ARE YOU?"</div>
      <div className="flex flex-col items-center gap-4 w-full">
        <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} size="small" />
        <div className="h-6 w-0.5 bg-blue-200 relative"><Packet active={currentStep >= 1} /></div>
        <GIcon icon={Key} imgSrc="/assets/images/auth_password.png" active={currentStep >= 1} size="small" label="Password & MFA" />
        <div className="h-6 w-0.5 bg-blue-200 relative"><Packet active={currentStep >= 2} /></div>
        <motion.div animate={{ scale: currentStep >= 2 ? 1 : 0.8, opacity: currentStep >= 2 ? 1 : 0 }} className="bg-brand-green text-white font-bold text-xs py-2 px-4 rounded-full">IDENTITY VERIFIED</motion.div>
      </div>
    </div>
    <div className="flex-1 bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 flex flex-col items-center relative">
      <h3 className="font-black text-indigo-600 text-lg mb-8">AUTHORIZATION</h3>
      <div className="bg-white p-2 rounded font-bold text-xs mb-8 text-brand-navy shadow-sm">"WHAT CAN YOU DO?"</div>
      <div className="flex flex-col items-center gap-4 w-full">
        <GIcon icon={CheckCircle2} active={currentStep >= 2} size="small" label="Verified Employee" color="indigo" />
        <div className="h-6 w-0.5 bg-indigo-200 relative"><Packet active={currentStep >= 3} /></div>
        <GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={currentStep >= 3} size="small" label="Role & Policy" />
        <div className="h-6 w-0.5 bg-indigo-200 relative"><Packet active={currentStep >= 4} /></div>
        <motion.div animate={{ scale: currentStep >= 4 ? 1 : 0.8, opacity: currentStep >= 4 ? 1 : 0 }} className="bg-brand-blue text-white font-bold text-xs py-2 px-4 rounded-full">ACCESS RESOURCE</motion.div>
      </div>
    </div>
  </div>
);

// Q6: MFA
const Q6Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
    <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Employee" />
    <div className="flex justify-center gap-12 w-full mt-12 mb-12 relative">
      <div className="absolute -top-12 left-1/2 w-[60%] -translate-x-1/2 h-12 border-t-2 border-l-2 border-r-2 border-slate-200 rounded-t-xl" />
      <motion.div animate={{ y: currentStep >= 1 ? 0 : 20, opacity: currentStep >= 1 ? 1 : 0.3 }} className="flex-1 flex justify-center"><GIcon icon={Key} imgSrc="/assets/images/auth_password.png" active={currentStep >= 1} label="Password" sub="Knowledge" /></motion.div>
      <motion.div animate={{ y: currentStep >= 2 ? 0 : 20, opacity: currentStep >= 2 ? 1 : 0.3 }} className="flex-1 flex justify-center"><GIcon icon={Smartphone} imgSrc="/assets/images/mfa_phone.png" active={currentStep >= 2} label="Smartphone OTP" sub="Possession" /></motion.div>
      <motion.div animate={{ y: currentStep >= 3 ? 0 : 20, opacity: currentStep >= 3 ? 1 : 0.3 }} className="flex-1 flex justify-center"><GIcon icon={Fingerprint} imgSrc="/assets/images/auth_biometric.png" active={currentStep >= 3} label="Biometric" sub="Inherence" /></motion.div>
    </div>
    <motion.div animate={{ scale: currentStep >= 4 ? 1.1 : 1, opacity: currentStep >= 4 ? 1 : 0 }} className="mt-4 flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full font-black shadow-xl text-lg">
      <CheckCircle2 className="w-8 h-8" /> FACTORS VERIFIED -> ACCESS GRANTED
    </motion.div>
  </div>
);

// Q7: SSO
const Q7Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-start relative p-8">
    <div className="flex flex-row items-center gap-12 mt-8">
      <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Employee" />
      <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
      <GIcon icon={Globe} imgSrc="/assets/images/sso_portal.png" active={currentStep >= 1} size="large" label="Identity Provider" sub="ONE LOGIN" />
    </div>
    <div className="w-0.5 h-16 bg-slate-200 relative mt-4"><Packet active={currentStep >= 2} /></div>
    <div className="w-[80%] h-0.5 bg-slate-200 relative" />
    <div className="flex flex-row justify-between w-[80%] mt-8 gap-4">
      <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0.3 }}><GIcon icon={FileText} active={currentStep >= 3} label="Email" /></motion.div>
      <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0.3 }}><GIcon icon={Users} active={currentStep >= 3} label="HR App" /></motion.div>
      <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0.3 }}><GIcon icon={Briefcase} active={currentStep >= 3} label="Project App" /></motion.div>
      <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0.3 }}><GIcon icon={Globe} active={currentStep >= 3} label="Internal Portal" /></motion.div>
    </div>
  </div>
);

// Q8: IDP
const Q8Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-8 relative p-8">
    <div className="w-1/4 flex flex-col items-center">
      <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="User" />
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
    <motion.div animate={{ scale: currentStep >= 1 ? 1 : 0.9, opacity: currentStep >= 1 ? 1 : 0.5 }} className="w-2/4 bg-slate-50 border-4 border-brand-blue rounded-3xl p-6 shadow-xl relative">
      <h3 className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full font-bold text-xs whitespace-nowrap">IDENTITY PROVIDER</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0.3 }} className="bg-white p-3 rounded-xl border flex flex-col items-center text-center"><Database className="w-6 h-6 text-brand-blue mb-1" /><span className="text-[10px] font-bold">Identity Directory</span></motion.div>
        <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0.3 }} className="bg-white p-3 rounded-xl border flex flex-col items-center text-center"><Key className="w-6 h-6 text-brand-blue mb-1" /><span className="text-[10px] font-bold">Authentication</span></motion.div>
        <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0.3 }} className="bg-white p-3 rounded-xl border flex flex-col items-center text-center"><Smartphone className="w-6 h-6 text-brand-blue mb-1" /><span className="text-[10px] font-bold">MFA</span></motion.div>
        <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0.3 }} className="bg-white p-3 rounded-xl border flex flex-col items-center text-center"><Tag className="w-6 h-6 text-brand-blue mb-1" /><span className="text-[10px] font-bold">Session / Token</span></motion.div>
      </div>
    </motion.div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 4} /></div>
    <div className="w-1/4 flex flex-col items-center">
      <GIcon icon={Server} active={currentStep >= 4} label="Application" />
    </div>
  </div>
);

// Q9: User Account
const Q9Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
    <div className="flex flex-row items-center justify-center w-full max-w-5xl gap-4">
      <div className="flex flex-col items-center">
        <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Employee Joins" />
      </div>
      <div className="w-12 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
      <motion.div animate={{ scale: currentStep >= 1 ? 1.05 : 1, opacity: currentStep >= 1 ? 1 : 0.4 }} className="bg-slate-100 p-4 rounded-xl border-2 border-slate-300 text-center flex-1">
        <User className="w-8 h-8 text-slate-500 mx-auto mb-2" />
        <div className="font-bold text-xs text-slate-600">CREATED</div>
      </motion.div>
      <div className="w-12 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
      <motion.div animate={{ scale: currentStep >= 2 ? 1.05 : 1, opacity: currentStep >= 2 ? 1 : 0.4 }} className="bg-blue-50 p-4 rounded-xl border-2 border-brand-blue text-center flex-1">
        <CheckCircle2 className="w-8 h-8 text-brand-blue mx-auto mb-2" />
        <div className="font-bold text-xs text-brand-blue">ACTIVE</div>
      </motion.div>
      <div className="w-12 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
      <motion.div animate={{ scale: currentStep >= 3 ? 1.05 : 1, opacity: currentStep >= 3 ? 1 : 0.4 }} className="bg-orange-50 p-4 rounded-xl border-2 border-orange-400 text-center flex-1">
        <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
        <div className="font-bold text-xs text-orange-600">SUSPENDED</div>
      </motion.div>
      <div className="w-12 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 4} /></div>
      <motion.div animate={{ scale: currentStep >= 4 ? 1.05 : 1, opacity: currentStep >= 4 ? 1 : 0.4 }} className="bg-red-50 p-4 rounded-xl border-2 border-red-400 text-center flex-1">
        <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
        <div className="font-bold text-xs text-red-600">DISABLED</div>
      </motion.div>
    </div>
  </div>
);

// Q10: ROLES & PERMISSIONS
const Q10Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-12 relative p-8">
    <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Employee" />
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
    <motion.div animate={{ scale: currentStep >= 1 ? 1 : 0.9, opacity: currentStep >= 1 ? 1 : 0.5 }} className="bg-white border-4 border-brand-blue rounded-2xl p-6 shadow-xl flex flex-col items-center">
      <GIcon icon={Briefcase} imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 1} size="small" label="Developer Role" />
      <motion.div animate={{ height: currentStep >= 2 ? 'auto' : 0, opacity: currentStep >= 2 ? 1 : 0 }} className="overflow-hidden mt-4 w-full">
        <div className="border-t pt-4 space-y-2">
          <div className="bg-green-50 text-green-700 font-bold text-xs p-2 rounded border border-green-200">✓ Read Code</div>
          <div className="bg-green-50 text-green-700 font-bold text-xs p-2 rounded border border-green-200">✓ Write Code</div>
          <div className="bg-green-50 text-green-700 font-bold text-xs p-2 rounded border border-green-200">✓ Development Server</div>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

// Q11: RBAC
const Q11Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-between relative p-8 max-w-5xl mx-auto">
    <div className="flex flex-col gap-8 w-1/4">
      <GIcon icon={User} active={currentStep >= 0} size="small" label="Alex" />
      <GIcon icon={User} active={currentStep >= 0} size="small" label="Sarah" />
      <GIcon icon={User} active={currentStep >= 0} size="small" label="John" />
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
    <div className="flex flex-col gap-8 w-1/4">
      <motion.div animate={{ opacity: currentStep >= 1 ? 1 : 0.3 }} className="bg-brand-blue text-white p-3 rounded-xl text-center font-bold text-sm shadow-md">Developer Role</motion.div>
      <motion.div animate={{ opacity: currentStep >= 1 ? 1 : 0.3 }} className="bg-indigo-500 text-white p-3 rounded-xl text-center font-bold text-sm shadow-md">HR Role</motion.div>
      <motion.div animate={{ opacity: currentStep >= 1 ? 1 : 0.3 }} className="bg-purple-500 text-white p-3 rounded-xl text-center font-bold text-sm shadow-md">Finance Role</motion.div>
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
    <div className="flex flex-col gap-2 w-1/4">
      <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0.3 }} className="bg-slate-100 p-2 rounded text-center text-xs font-bold border">Code Access</motion.div>
      <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0.3 }} className="bg-slate-100 p-2 rounded text-center text-xs font-bold border">Dev Servers</motion.div>
      <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0.3 }} className="bg-slate-100 p-2 rounded text-center text-xs font-bold border mt-2">Employee Records</motion.div>
      <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0.3 }} className="bg-slate-100 p-2 rounded text-center text-xs font-bold border mt-2">Payroll System</motion.div>
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
    <div className="flex flex-col gap-8 w-1/4">
      <GIcon icon={Server} active={currentStep >= 3} size="small" label="IT Systems" />
      <GIcon icon={Database} active={currentStep >= 3} size="small" label="Business Systems" />
    </div>
  </div>
);

// Q12: ABAC
const Q12Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
    <div className="flex flex-row justify-center gap-4 w-full max-w-4xl mb-8">
      <motion.div animate={{ y: currentStep >= 0 ? 0 : 20, opacity: currentStep >= 0 ? 1 : 0 }} className="bg-white p-3 rounded-xl shadow border border-slate-200 text-center"><User className="w-6 h-6 mx-auto mb-1 text-blue-500"/><div className="text-[10px] font-bold">User: Finance</div></motion.div>
      <motion.div animate={{ y: currentStep >= 0 ? 0 : 20, opacity: currentStep >= 0 ? 1 : 0 }} className="bg-white p-3 rounded-xl shadow border border-slate-200 text-center">
        <Laptop className={clsx("w-6 h-6 mx-auto mb-1", currentStep >= 3 ? "text-red-500" : "text-blue-500")} />
        <div className="text-[10px] font-bold">{currentStep >= 3 ? "Device: Unmanaged" : "Device: Managed"}</div>
      </motion.div>
      <motion.div animate={{ y: currentStep >= 0 ? 0 : 20, opacity: currentStep >= 0 ? 1 : 0 }} className="bg-white p-3 rounded-xl shadow border border-slate-200 text-center"><MapPin className="w-6 h-6 mx-auto mb-1 text-blue-500"/><div className="text-[10px] font-bold">Loc: Office</div></motion.div>
      <motion.div animate={{ y: currentStep >= 0 ? 0 : 20, opacity: currentStep >= 0 ? 1 : 0 }} className="bg-white p-3 rounded-xl shadow border border-slate-200 text-center"><Clock className="w-6 h-6 mx-auto mb-1 text-blue-500"/><div className="text-[10px] font-bold">Time: 10 AM</div></motion.div>
      <motion.div animate={{ y: currentStep >= 0 ? 0 : 20, opacity: currentStep >= 0 ? 1 : 0 }} className="bg-white p-3 rounded-xl shadow border border-slate-200 text-center"><Database className="w-6 h-6 mx-auto mb-1 text-blue-500"/><div className="text-[10px] font-bold">Res: Payroll</div></motion.div>
    </div>
    <div className="h-16 w-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
    <motion.div animate={{ scale: currentStep >= 1 ? 1.05 : 1, opacity: currentStep >= 1 ? 1 : 0.5 }} className="bg-slate-800 text-white p-6 rounded-2xl shadow-xl w-64 text-center">
      <Shield className="w-10 h-10 mx-auto mb-2 text-brand-blue" />
      <div className="font-black text-lg">ABAC POLICY ENGINE</div>
    </motion.div>
    <div className="h-16 w-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
    <AnimatePresence mode="wait">
      {currentStep < 4 ? (
        <motion.div key="allow" initial={{ scale: 0 }} animate={{ scale: currentStep >= 2 ? 1 : 0 }} exit={{ scale: 0 }} className="bg-brand-green text-white px-8 py-3 rounded-full font-black text-lg shadow-lg">
          ✓ ACCESS ALLOWED
        </motion.div>
      ) : (
        <motion.div key="deny" initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-red-500 text-white px-8 py-3 rounded-full font-black text-lg shadow-lg">
          ✕ ACCESS DENIED
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Q13: Least Privilege
const Q13Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
    <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={true} label="Developer" />
    <div className="mt-8 bg-white border-4 border-red-200 rounded-3xl p-6 w-full max-w-lg text-center relative overflow-hidden">
      <div className="font-black text-slate-800 mb-4">ASSIGNED PERMISSIONS</div>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="bg-slate-100 p-2 rounded text-xs font-bold">Read Code</div>
        <div className="bg-slate-100 p-2 rounded text-xs font-bold">Write Code</div>
        <motion.div animate={{ scale: currentStep >= 1 ? 0 : 1 }} className="bg-red-100 text-red-700 p-2 rounded text-xs font-bold">Delete DB</motion.div>
        <motion.div animate={{ scale: currentStep >= 1 ? 0 : 1 }} className="bg-red-100 text-red-700 p-2 rounded text-xs font-bold">Admin</motion.div>
        <motion.div animate={{ scale: currentStep >= 2 ? 0 : 1 }} className="bg-red-100 text-red-700 p-2 rounded text-xs font-bold">Payroll</motion.div>
        <motion.div animate={{ scale: currentStep >= 2 ? 0 : 1 }} className="bg-red-100 text-red-700 p-2 rounded text-xs font-bold">Security Config</motion.div>
      </div>
      <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0 }} className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center">
        <div className="font-black text-brand-green text-xl mb-4">ONLY REQUIRED ACCESS</div>
        <div className="flex gap-3">
          <div className="bg-green-100 text-green-700 p-2 rounded text-xs font-bold border border-green-300">Read Code</div>
          <div className="bg-green-100 text-green-700 p-2 rounded text-xs font-bold border border-green-300">Write Code</div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Q14: Access Control
const Q14Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-between w-full max-w-4xl relative p-8 mx-auto">
    <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="User" />
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
    <motion.div animate={{ opacity: currentStep >= 1 ? 1 : 0.3 }} className="bg-white border-2 border-slate-300 rounded-xl p-4 text-center font-bold text-xs shadow-sm w-32">
      Access Request
    </motion.div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
    <GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={currentStep >= 2} label="Policy Evaluation" />
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
    <div className="flex flex-col gap-4">
      <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0 }} className="bg-brand-green text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md">✓ ALLOW</motion.div>
      <motion.div animate={{ opacity: currentStep >= 3 ? 1 : 0 }} className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md">✕ DENY</motion.div>
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 4} /></div>
    <GIcon icon={Server} active={currentStep >= 4} label="Resource" color="green" />
  </div>
);

// Q15: Access Policy
const Q15Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-12 relative p-8">
    <div className="flex flex-col gap-3">
      <motion.div animate={{ x: currentStep >= 0 ? 0 : -20, opacity: currentStep >= 0 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs flex items-center gap-2"><User className="w-4 h-4"/> User</motion.div>
      <motion.div animate={{ x: currentStep >= 1 ? 0 : -20, opacity: currentStep >= 1 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs flex items-center gap-2"><Briefcase className="w-4 h-4"/> Role</motion.div>
      <motion.div animate={{ x: currentStep >= 1 ? 0 : -20, opacity: currentStep >= 1 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs flex items-center gap-2"><Laptop className="w-4 h-4"/> Device</motion.div>
      <motion.div animate={{ x: currentStep >= 2 ? 0 : -20, opacity: currentStep >= 2 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs flex items-center gap-2"><MapPin className="w-4 h-4"/> Location</motion.div>
      <motion.div animate={{ x: currentStep >= 2 ? 0 : -20, opacity: currentStep >= 2 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs flex items-center gap-2"><Server className="w-4 h-4"/> Resource</motion.div>
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
    <GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={currentStep >= 3} size="large" label="ACCESS POLICY ENGINE" />
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 4} /></div>
    <div className="flex flex-col gap-3">
      <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0 }} className="bg-brand-green text-white px-6 py-3 rounded-xl font-black text-sm shadow-md">ALLOW</motion.div>
      <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0 }} className="bg-orange-500 text-white px-6 py-3 rounded-xl font-black text-sm shadow-md">REQUIRE MFA</motion.div>
      <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0 }} className="bg-red-500 text-white px-6 py-3 rounded-xl font-black text-sm shadow-md">DENY</motion.div>
    </div>
  </div>
);

// Q16: Zero Trust
const Q16Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
    <div className="flex flex-row items-center justify-between w-full max-w-5xl gap-2">
      <GIcon icon={User} imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
      <GIcon icon={Fingerprint} active={currentStep >= 1} label="Identity" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
      <GIcon icon={Laptop} active={currentStep >= 2} label="Device" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
      <GIcon icon={MapPin} active={currentStep >= 3} label="Context" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 4} /></div>
      <GIcon icon={Shield} active={currentStep >= 4} label="Policy" />
      <div className="flex-1 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 5} /></div>
      <GIcon icon={Server} active={currentStep >= 5} label="Resource" color="green" />
    </div>
    <motion.div animate={{ opacity: currentStep >= 6 ? 1 : 0 }} className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-32 border-b-2 border-l-2 border-r-2 border-brand-blue border-dashed rounded-b-3xl flex items-end justify-center pb-2">
      <div className="bg-white text-brand-blue font-bold px-4 py-1 rounded-full border-2 border-brand-blue flex items-center gap-2"><RefreshCw className="w-4 h-4 animate-spin" /> CONTINUOUS VERIFICATION</div>
    </motion.div>
  </div>
);

// Q17: SAML
const Q17Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
    <div className="flex flex-row items-center justify-between w-full max-w-4xl">
      <GIcon icon={Globe} active={currentStep >= 0} label="Browser" />
      <div className="w-24 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
      <GIcon icon={Server} active={currentStep >= 1} label="Service Provider" />
      <div className="w-24 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 2} /></div>
      <GIcon icon={User} imgSrc="/assets/images/sso_portal.png" active={currentStep >= 2} label="Identity Provider" />
    </div>
    <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0, x: currentStep >= 5 ? -250 : 0 }} className="absolute bottom-16 bg-orange-100 border-2 border-orange-400 p-3 rounded-xl shadow-lg flex items-center gap-3 z-30">
      <FileText className="w-8 h-8 text-orange-500" />
      <div>
        <div className="font-black text-orange-700 text-sm">SAML ASSERTION</div>
        <div className="text-[10px] text-orange-600 font-bold">&lt;xml&gt; Signature Valid &lt;/xml&gt;</div>
      </div>
    </motion.div>
    <motion.div animate={{ opacity: currentStep >= 6 ? 1 : 0 }} className="absolute top-10 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-md">APPLICATION ACCESS GRANTED</motion.div>
  </div>
);

// Q18: PAM
const Q18Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-12 relative p-8">
    <GIcon icon={User} active={currentStep >= 0} label="Administrator" color="red" />
    <div className="w-24 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 1} /></div>
    <div className="flex flex-col items-center gap-4">
      <motion.div animate={{ opacity: currentStep >= 1 ? 1 : 0 }} className="bg-white border-2 border-slate-300 p-2 rounded text-xs font-bold text-center">Privileged Request</motion.div>
      <motion.div animate={{ opacity: currentStep >= 2 ? 1 : 0 }} className="bg-brand-green text-white p-2 rounded text-xs font-bold text-center">✓ Approval</motion.div>
    </div>
    <div className="w-24 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
    <div className="flex flex-col items-center">
      <motion.div animate={{ opacity: currentStep >= 3 && currentStep < 5 ? 1 : 0 }} className="absolute -top-12 bg-orange-500 text-white font-bold px-4 py-1 rounded-full text-xs shadow-md animate-pulse">TEMPORARY ACCESS</motion.div>
      <GIcon icon={Server} active={currentStep >= 3} size="large" label="Critical Server" color="red" />
      <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0 }} className="mt-4 bg-slate-800 text-white font-bold px-4 py-1 rounded-full text-xs">TASK COMPLETE</motion.div>
      <motion.div animate={{ opacity: currentStep >= 5 ? 1 : 0 }} className="absolute -bottom-12 bg-red-600 text-white font-bold px-4 py-1 rounded-full text-xs shadow-md">ACCESS REMOVED</motion.div>
    </div>
  </div>
);

// Q19: Conditional Access
const Q19Visual = ({ currentStep }: any) => (
  <div className="w-full h-full flex flex-row items-center justify-center gap-16 relative p-8">
    <div className="flex flex-col gap-4">
      <motion.div animate={{ x: currentStep >= 0 ? 0 : -20, opacity: currentStep >= 0 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs">User: Admin</motion.div>
      <motion.div animate={{ x: currentStep >= 1 ? 0 : -20, opacity: currentStep >= 1 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs">Device: Unmanaged</motion.div>
      <motion.div animate={{ x: currentStep >= 1 ? 0 : -20, opacity: currentStep >= 1 ? 1 : 0 }} className="bg-white px-4 py-2 rounded shadow font-bold text-xs">Location: Foreign</motion.div>
      <motion.div animate={{ x: currentStep >= 2 ? 0 : -20, opacity: currentStep >= 2 ? 1 : 0 }} className="bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded shadow font-bold text-xs">Risk: HIGH</motion.div>
    </div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 3} /></div>
    <motion.div animate={{ scale: currentStep >= 3 ? 1.1 : 1, opacity: currentStep >= 3 ? 1 : 0.5 }} className="bg-slate-800 text-white p-6 rounded-2xl shadow-xl w-48 text-center relative">
      <Shield className="w-10 h-10 mx-auto mb-2 text-brand-blue" />
      <div className="font-black text-sm">CONDITIONAL ACCESS POLICY</div>
    </motion.div>
    <div className="w-16 h-0.5 bg-slate-200 relative"><Packet active={currentStep >= 4} /></div>
    <div className="flex flex-col gap-3">
      <motion.div animate={{ opacity: currentStep >= 4 ? 0.3 : 0 }} className="bg-brand-green text-white px-4 py-2 rounded-xl font-black text-xs shadow-md">✓ ALLOW</motion.div>
      <motion.div animate={{ opacity: currentStep >= 4 ? 1 : 0, scale: currentStep >= 4 ? 1.1 : 1 }} className="bg-orange-500 text-white px-4 py-2 rounded-xl font-black text-xs shadow-md z-10 border-2 border-white">⚠ REQUIRE MFA</motion.div>
      <motion.div animate={{ opacity: currentStep >= 4 ? 0.3 : 0 }} className="bg-red-500 text-white px-4 py-2 rounded-xl font-black text-xs shadow-md">✕ BLOCK</motion.div>
    </div>
  </div>
);

// Q20: Complete Access Request
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
);
`;

fs.writeFileSync('src/components/visualizations/CustomVisuals.tsx', content);
