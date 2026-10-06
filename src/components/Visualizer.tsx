import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Circle, Shield, MapPin, 
  AlertTriangle, Fingerprint, Laptop, Server, Key, User, Lock, ChevronRight
} from 'lucide-react';
import type { Question } from '../types/question';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CustomVisual } from './visualizations/CustomVisuals';

interface VisualizerProps {
  visualization: Question['visualization'];
  currentStep: number;
  questionId?: number;
}

const EmployeeIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-slate-100 dark:border-slate-800 shadow-sm">
    <img src="/assets/images/employee_laptop.png" alt="Employee" className="w-full h-full object-cover" />
  </div>
);

const IdPIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-slate-100 dark:border-slate-800 shadow-sm">
    <img src="/assets/images/security_shield.png" alt="Identity Provider" className="w-full h-full object-cover" />
  </div>
);

const AuthIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-slate-100 dark:border-slate-800 shadow-sm">
    <img src="/assets/images/auth_lock.png" alt="Authentication" className="w-full h-full object-cover" />
  </div>
);

const PolicyIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-slate-100 dark:border-slate-800 shadow-sm">
    <img src="/assets/images/policy_engine.png" alt="Policy Engine" className="w-full h-full object-cover" />
  </div>
);

const ResourceIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-slate-100 dark:border-slate-800 shadow-sm">
    <img src="/assets/images/server_resource.png" alt="Resource" className="w-full h-full object-cover" />
  </div>
);

const Q2EmployeeIcon = () => (
  <div className="relative w-24 h-24 flex items-center justify-center shrink-0 overflow-hidden rounded-2xl border-4 border-slate-100 dark:border-slate-800 shadow-sm">
    <img src="/assets/images/id_badge.png" alt="ID Badge" className="w-full h-full object-cover" />
  </div>
);

const getCustomIcon = (tStr: string, questionId?: number, stepIndex?: number) => {
  const t = tStr.toLowerCase();
  
  const imgPath = (path: string) => (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-slate-100 dark:border-slate-800 shadow-sm bg-white">
      <img src={`/assets/images/${path}`} alt={tStr} className="w-full h-full object-cover" />
    </div>
  );

  // ─── Dedicated per-question step images for Q21–Q50 ────────────────────────
  // This guarantees unique, topic-aligned images with zero repetition.
  const Q21_IMAGES = ['polp_minimum_shield.png', 'id_badge.png', 'access_granted.png'];
  const Q24_IMAGES = ['rbac_roles.png', 'policy_engine.png', 'access_decision.png'];
  const Q26_IMAGES = ['account_created.png', 'hr_app.png', 'email_app.png'];
  const Q27_IMAGES = ['account_suspended.png', 'account_active.png', 'session_terminated.png'];
  const Q28_IMAGES = ['access_review_report.png', 'employee_laptop.png', 'audit_log.png'];
  const Q29_IMAGES = ['identity_governance_dashboard.png', 'policy_engine.png', 'siem_alert.png'];
  const Q30_IMAGES = ['user_attribute.png', 'rbac_roles.png', 'access_granted.png'];
  const Q31_IMAGES = ['id_badge.png', 'rbac_roles.png', 'server_resource.png'];
  const Q33_IMAGES = ['account_suspended.png', 'active_session.png', 'session_terminated.png'];
  const Q35_IMAGES = ['security_shield.png', 'auth_lock.png', 'posture_check.png'];
  const Q36_IMAGES = ['id_badge.png', 'flat_network.png', 'internal_portal.png'];
  const Q38_IMAGES = ['auth_password.png', 'auth_clipboard.png', 'project_app.png'];
  const Q39_IMAGES = ['auth_clipboard.png', 'sso_portal.png', 'database.png'];
  const Q40_IMAGES = ['auth_biometric.png', 'auth_clipboard.png', 'employee_laptop.png'];
  const Q41_IMAGES = ['id_badge.png', 'auth_clipboard.png', 'user_attribute.png'];
  const Q43_IMAGES = ['posture_check.png', 'access_granted.png', 'siem_alert.png'];
  const Q44_IMAGES = ['location_attribute.png', 'access_decision.png', 'account_suspended.png'];
  const Q46_IMAGES = ['employee_laptop.png', 'posture_check.png', 'access_decision.png'];
  const Q47_IMAGES = ['active_session.png', 'account_active.png', 'threat_detected.png', 'session_terminated.png'];
  const Q48_IMAGES = ['flat_network.png', 'network_breach.png', 'micro_segmented.png'];
  const Q49_IMAGES = ['audit_log.png', 'siem_alert.png', 'threat_detected.png'];

  const qMap: Record<number, string[]> = {
    21: Q21_IMAGES, 24: Q24_IMAGES, 26: Q26_IMAGES, 27: Q27_IMAGES,
    28: Q28_IMAGES, 29: Q29_IMAGES, 30: Q30_IMAGES, 31: Q31_IMAGES,
    33: Q33_IMAGES, 35: Q35_IMAGES, 36: Q36_IMAGES, 38: Q38_IMAGES,
    39: Q39_IMAGES, 40: Q40_IMAGES, 41: Q41_IMAGES, 43: Q43_IMAGES,
    44: Q44_IMAGES, 46: Q46_IMAGES, 47: Q47_IMAGES, 48: Q48_IMAGES,
    49: Q49_IMAGES,
  };

  if (questionId && qMap[questionId] && stepIndex !== undefined) {
    const imgs = qMap[questionId];
    const img = imgs[stepIndex % imgs.length];
    return imgPath(img);
  }
  // ─── End dedicated map ────────────────────────────────────────────────────────

  if (t.includes('admin') || t.includes('user') || t.includes('employee') || t.includes('person') || t.includes('joiner')) return imgPath('id_badge.png');
  if (t.includes('device') || t.includes('laptop') || t.includes('workstation') || t.includes('hardware') || t.includes('endpoint')) return imgPath('employee_laptop.png');
  if (t.includes('location') || t.includes('office') || t.includes('travel') || t.includes('where')) return imgPath('abac_location_office.png');
  if (t.includes('time') || t.includes('hour') || t.includes('when')) return imgPath('abac_time_clock.png');
  if (t.includes('finance') || t.includes('payroll') || t.includes('payment') || t.includes('expense')) return imgPath('abac_resource_payroll.png');
  if (t.includes('hr ') || t.includes('manager')) return imgPath('hr_app.png');
  if (t.includes('email') || t.includes('message')) return imgPath('email_app.png');
  if (t.includes('policy') || t.includes('condition') || t.includes('filter') || t.includes('engine') || t.includes('rule') || t.includes('evaluate')) return imgPath('policy_engine.png');
  if (t.includes('database') || t.includes('record')) return imgPath('database.png');
  if (t.includes('server') || t.includes('network') || t.includes('infrastructure') || t.includes('node') || t.includes('system')) return imgPath('server_resource.png');
  if (t.includes('password') || t.includes('login') || t.includes('credential')) return imgPath('auth_password.png');
  if (t.includes('mfa') || t.includes('sms') || t.includes('phone') || t.includes('factor')) return imgPath('mfa_phone.png');
  if (t.includes('biometric') || t.includes('fingerprint') || t.includes('face')) return imgPath('auth_biometric.png');
  if (t.includes('sso') || t.includes('sign-on') || t.includes('portal') || t.includes('app') || t.includes('platform')) return imgPath('sso_portal.png');
  if (t.includes('token') || t.includes('assertion') || t.includes('jwt') || t.includes('saml') || t.includes('claim')) return imgPath('auth_clipboard.png');
  if (t.includes('role') || t.includes('rbac') || t.includes('privilege')) return imgPath('rbac_roles.png');
  if (t.includes('granted') || t.includes('approve') || t.includes('success') || t.includes('allow') || t.includes('access')) return imgPath('access_granted.png');
  if (t.includes('blocked') || t.includes('deny') || t.includes('revoke') || t.includes('disable') || t.includes('terminate') || t.includes('kill') || t.includes('leaver') || t.includes('breach')) return imgPath('account_suspended.png');
  if (t.includes('create') || t.includes('provision') || t.includes('new')) return imgPath('account_created.png');
  if (t.includes('active') || t.includes('session') || t.includes('mover')) return imgPath('account_active.png');
  if (t.includes('shield') || t.includes('security') || t.includes('secure') || t.includes('guard')) return imgPath('security_shield.png');
  if (t.includes('audit') || t.includes('log') || t.includes('report') || t.includes('review') || t.includes('comparison')) return imgPath('auth_clipboard.png');
  if (t.includes('identity') || t.includes('idp')) return imgPath('security_shield.png');
  if (t.includes('auth')) return imgPath('auth_lock.png');
  
  // Rotating fallback so we don't repeat for consecutive unknowns
  const fallbacks = ['project_app.png', 'database.png', 'server_resource.png', 'device_attribute.png'];
  const hash = tStr.length % fallbacks.length;
  return imgPath(fallbacks[hash]);
};


const getLucideIconForText = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes('laptop') || t.includes('device') || t.includes('client') || t.includes('user') || t.includes('alice') || t.includes('bob')) return <Laptop className="w-4 h-4" strokeWidth={2} />;
  if (t.includes('server') || t.includes('database') || t.includes('cloud') || t.includes('app') || t.includes('resource')) return <Server className="w-4 h-4" strokeWidth={2} />;
  if (t.includes('identity') || t.includes('idp')) return <Fingerprint className="w-4 h-4" strokeWidth={2} />;
  if (t.includes('mfa') || t.includes('token') || t.includes('key') || t.includes('auth')) return <Key className="w-4 h-4" strokeWidth={2} />;
  if (t.includes('policy') || t.includes('eval') || t.includes('verify')) return <Shield className="w-4 h-4" strokeWidth={2} />;
  if (t.includes('location')) return <MapPin className="w-4 h-4" strokeWidth={2} />;
  if (t.includes('risk')) return <AlertTriangle className="w-4 h-4" strokeWidth={2} />;
  return <Shield className="w-4 h-4" strokeWidth={2} />;
};

const getSubtitleForText = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes('user') || t.includes('request') || t.includes('alice')) return 'Initiates process';
  if (t.includes('identity') || t.includes('idp')) return 'Verification';
  if (t.includes('auth')) return 'Security check';
  if (t.includes('policy') || t.includes('eval')) return 'Rules engine';
  if (t.includes('resource') || t.includes('app')) return 'Target system';
  if (t.includes('device')) return 'Endpoint context';
  return 'IAM Component';
};

export default function Visualizer({ visualization, currentStep, questionId }: VisualizerProps) {
  const { layout, steps, inputs, outputs } = visualization;
  const [particlePos, setParticlePos] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setParticlePos(currentStep - 1);
    const timer = setTimeout(() => {
      setParticlePos(currentStep);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const renderNode = (text: string, isActive: boolean, isCompleted: boolean, stepIndex?: number) => {
    const t = text.toLowerCase();
    
    let displayTitle = text;
    let displaySubtitle = getSubtitleForText(text);
    let details = null;
    
    if (t.includes('employee') || t.includes('user request')) {
      displayTitle = "Employee";
      displaySubtitle = "Managed Device";
      details = (
        <div className="mt-4 flex flex-col gap-1.5 text-left w-full px-2">
          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider"><User className="w-3 h-3 text-brand-blue" /> User: Alex</div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider"><Laptop className="w-3 h-3 text-brand-blue" /> Device: Corporate</div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider"><MapPin className="w-3 h-3 text-brand-blue" /> Location: Office</div>
        </div>
      );
    } else if (t.includes('identity verification') || t.includes('identity provider')) {
      displayTitle = "Identity Provider";
      displaySubtitle = "User Identity";
      details = (
        <div className="mt-4 flex flex-col gap-1.5 text-left w-full px-2">
          <div className="text-[11px] font-bold text-slate-700 dark:text-slate-200 mb-1">Check user identity</div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", isActive || isCompleted ? "text-brand-green" : "text-slate-300")} /> User exists</div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", isActive || isCompleted ? "text-brand-green" : "text-slate-300")} /> Account active</div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", isCompleted ? "text-brand-green" : "text-slate-300")} /> Valid identity</div>
        </div>
      );
    } else if (t.includes('authentication')) {
      displayTitle = "Authentication";
      displaySubtitle = "Password + MFA";
      details = (
        <div className="mt-4 flex flex-col gap-1.5 text-left w-full px-2 relative">
          {isActive && (
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute -top-[140px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 rounded-xl shadow-[0_5px_20px_rgba(22,119,232,0.2)] border border-blue-100 p-3 w-40 z-50">
              <div className="text-[11px] font-bold text-center text-brand-navy dark:text-white mb-2">MFA Challenge</div>
              <div className="flex justify-center gap-2">
                <div className="bg-blue-50 p-1.5 rounded"><Key className="w-4 h-4 text-brand-blue" /></div>
                <div className="bg-blue-50 p-1.5 rounded"><Fingerprint className="w-4 h-4 text-brand-blue" /></div>
              </div>
            </motion.div>
          )}
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted ? "text-brand-green fill-brand-green" : isActive ? "text-brand-blue fill-brand-blue" : "text-slate-300")} /> <span className={clsx(isCompleted ? "text-brand-green" : isActive ? "text-brand-blue font-bold" : "text-slate-400")}>Verifying credentials</span></div>
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className={clsx(isCompleted ? "text-brand-green" : "text-slate-400")}>Checking MFA</span></div>
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className={clsx(isCompleted ? "text-brand-green" : "text-slate-400")}>Validating identity</span></div>
        </div>
      );
    } else if (t.includes('access control') || t.includes('policy')) {
      displayTitle = "Policy Engine";
      displaySubtitle = "RBAC / Access Policy";
      details = (
        <div className="mt-4 flex flex-col gap-1.5 text-left w-full px-2">
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted ? "text-brand-green fill-brand-green" : isActive ? "text-brand-blue fill-brand-blue" : "text-slate-300")} /> <span className={clsx(isCompleted ? "text-brand-green" : isActive ? "text-brand-blue font-bold" : "text-slate-400")}>Evaluate user roles</span></div>
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className={clsx(isCompleted ? "text-brand-green" : "text-slate-400")}>Check permissions</span></div>
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className={clsx(isCompleted ? "text-brand-green" : "text-slate-400")}>Apply policies</span></div>
        </div>
      );
    } else if (t.includes('resource access') || t.includes('protected resource')) {
      displayTitle = "Protected Resource";
      displaySubtitle = "Finance Application";
      details = (
        <div className="mt-4 flex flex-col gap-1.5 text-left w-full px-2">
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted || isActive ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className={clsx(isCompleted || isActive ? "text-brand-green font-bold" : "text-slate-400")}>Access granted</span></div>
          <div className="flex items-center gap-2 text-[10px] font-medium"><Circle className={clsx("w-3.5 h-3.5", isCompleted || isActive ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className={clsx(isCompleted || isActive ? "text-brand-green" : "text-slate-400")}>Application access</span></div>
        </div>
      );
    }

    return (
      <motion.div
        initial={false}
        animate={{ scale: isActive ? 1.05 : 1, y: isActive && !isMobile ? -4 : 0 }}
        className={clsx(
          "relative flex flex-col items-center justify-start w-full transition-all duration-500",
          isActive ? "" : isCompleted ? "opacity-100" : "opacity-60"
        )}
      >
        <div className={clsx(
          "mb-3 flex items-center justify-center transition-all duration-500 relative z-10",
          isMobile ? "w-24 h-24" : "w-20 h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24",
          isActive ? "scale-110" : isCompleted ? "opacity-100" : "opacity-75 grayscale-[30%]"
        )}>
          {getCustomIcon(displayTitle.toLowerCase(), questionId, stepIndex)}
          
          <div className="absolute -top-1 -right-1 z-20">
            {isCompleted ? (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-brand-green text-white rounded-full p-1 shadow-sm border-2 border-white">
                <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
              </motion.div>
            ) : isActive ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="bg-brand-blue text-white rounded-full p-1 shadow-sm border-2 border-white">
                <Circle className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
              </motion.div>
            ) : null}
          </div>
        </div>
        
        <div className={clsx(
          "text-center font-bold text-[14px] leading-tight mb-0.5",
          isActive ? "text-brand-navy dark:text-white" : isCompleted ? "text-slate-800" : "text-slate-500 dark:text-slate-400"
        )}>
          {displayTitle}
        </div>
        <div className="text-[11px] text-slate-400 font-medium tracking-wider text-center w-full">
          {displaySubtitle}
        </div>
        
        {details}
      </motion.div>
    );
  };

  const renderSmallInput = (text: string, idx: number) => (
    <div key={idx} className="relative z-10 w-48 shrink-0">
      <div className="px-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[12px] font-bold text-slate-600 dark:text-slate-300 flex items-center gap-3">
        <div className="p-1.5 bg-slate-100 rounded-md text-brand-blue">{getLucideIconForText(text)}</div>
        {text}
      </div>
      <div className={clsx("absolute z-0 bg-slate-300", isMobile ? "w-0.5 h-6 left-1/2 -bottom-6" : "h-0.5 w-16 left-full top-1/2")} />
      {currentStep === 0 && particlePos === 0 && (
        <motion.div
          initial={isMobile ? { top: '0%' } : { left: '0%' }}
          animate={isMobile ? { top: '100%' } : { left: '100%' }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: idx * 0.15 }}
          className={clsx("absolute bg-brand-blue rounded-full shadow-[0_0_12px_rgba(22,119,232,0.9)]", isMobile ? "w-2 h-4 left-1/2 -translate-x-1/2 -bottom-6" : "w-4 h-2 top-1/2 -translate-y-1/2 left-full")}
        />
      )}
    </div>
  );

  if (layout?.startsWith('q')) {
    return (
      <div className="absolute inset-0 p-1 md:p-2">
        <CustomVisual layout={layout} currentStep={currentStep} isMobile={isMobile} steps={steps} questionId={questionId} />
      </div>
    );
  }

  // Layout 1: Linear Standard
  if (layout === 'linear' || layout === 'timeline' || layout === 'timer' || !layout) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative p-1 md:p-2 overflow-x-auto custom-scrollbar">
        <div className={clsx("relative flex mx-auto items-start justify-center px-4 w-full min-w-max", isMobile ? "flex-col h-full py-8 gap-6" : "flex-row py-12 gap-2 lg:gap-4")}>
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isActive = idx === currentStep;
            return (
              <div key={idx} className={clsx("relative z-10 flex flex-col items-center justify-start flex-1 min-w-0", isMobile ? "w-full my-6" : "w-36 lg:w-44 px-1")}>
                {idx < steps.length - 1 && (
                  <div className={clsx("absolute z-0", isMobile ? "w-1 h-16 md:h-20 left-1/2 -bottom-16 md:-bottom-20 -translate-x-1/2" : "h-0.5 w-[calc(100%+8px)] lg:w-[calc(100%+16px)] top-[48px] left-[50%]")}>
                    <div className={clsx("w-full h-full rounded-full transition-colors duration-700", isCompleted ? "bg-brand-blue/60" : "bg-slate-200")} />
                    <div className="absolute inset-0 overflow-hidden">
                      <AnimatePresence>
                        {particlePos === idx + 1 && (
                          <motion.div
                            initial={isMobile ? { top: '0%' } : { left: '0%' }} animate={isMobile ? { top: '100%' } : { left: '100%' }} transition={{ duration: 0.9, ease: "easeInOut" }}
                            className={clsx("absolute flex items-center justify-center", isMobile ? "w-2.5 h-6 left-1/2 -translate-x-1/2" : "w-6 h-6 top-1/2 -translate-y-1/2")}
                          >
                            <div className="w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_12px_rgba(22,119,232,0.8)] border-2 border-white" />
                            {idx === 0 && !isMobile && (
                              <div className="absolute -top-6 whitespace-nowrap bg-brand-blue text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                Access Request
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
                {renderNode(step, isActive, isCompleted, idx)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Layout 1.5: Q2 Stages (Identity vs Auth vs Authz)
  if (layout === 'stages') {
    const q2Data = [
      {
        title: "IDENTITY",
        subtitle: "Who are you?",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="flex justify-center mb-2">
              <Q2EmployeeIcon />
            </div>
            <div className="text-left bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl w-full">
              <div className="font-bold text-[14px] text-slate-800 mb-1">Alex Johnson</div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-0.5"><div className="w-3.5 flex justify-center"><User className="w-3 h-3 text-brand-blue" /></div> Employee ID: EMP-2048</div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-0.5"><div className="w-3.5 flex justify-center"><MapPin className="w-3 h-3 text-brand-blue" /></div> Email: alex@company.com</div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400"><div className="w-3.5 flex justify-center"><Shield className="w-3 h-3 text-brand-blue" /></div> Role: HR Employee</div>
            </div>
          </div>
        )
      },
      {
        title: "AUTHENTICATION",
        subtitle: "Can you prove you are them?",
        content: (
          <div className="flex flex-col gap-2 mt-3 w-full">
            <div className="w-full h-24 rounded-lg overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-sm shrink-0">
              <img src="/assets/images/mfa_phone.png" alt="MFA" className="w-full h-full object-cover" />
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 bg-slate-50 dark:bg-slate-800 relative">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mb-1 text-left">Password</div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 flex items-center justify-between mb-2">
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full" />)}
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mb-1 text-left">MFA Verification</div>
              <div className="bg-white dark:bg-slate-900 border border-brand-blue rounded px-2 py-1.5 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-1.5 text-brand-blue">
                  <Laptop className="w-4 h-4" />
                  <span className="font-bold tracking-widest text-[13px]">482 915</span>
                </div>
                <Circle className="w-3.5 h-3.5 text-slate-300 border-2 border-slate-300 dark:border-slate-600 border-t-transparent rounded-full animate-spin" />
              </div>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-slate-700 text-white p-1 rounded-md shadow-md">
                <Lock className="w-4 h-4" />
              </div>
            </div>
            <div className="bg-brand-blue text-white text-[11px] font-bold py-1.5 rounded-md text-center shadow-sm w-full mt-1">
              Verifying credentials...
            </div>
            <div className="flex flex-col gap-1 mt-1 text-left px-1">
              <div className="flex items-center gap-1.5 text-[10px] font-medium"><Circle className="w-3.5 h-3.5 text-brand-blue fill-brand-blue" /> <span className="text-brand-blue font-bold">Checking password</span></div>
              <div className="flex items-center gap-1.5 text-[10px] font-medium"><Circle className="w-3.5 h-3.5 text-slate-300" /> <span className="text-slate-400">Verifying MFA</span></div>
              <div className="flex items-center gap-1.5 text-[10px] font-medium"><Circle className="w-3.5 h-3.5 text-slate-300" /> <span className="text-slate-400">Validating identity</span></div>
            </div>
          </div>
        )
      },
      {
        title: "AUTHORIZATION",
        subtitle: "What are you allowed to do?",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="w-full h-24 rounded-lg overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-sm shrink-0">
              <img src="/assets/images/auth_clipboard.png" alt="Authorization" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-lg text-left relative">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-brand-blue text-white p-1.5 rounded-md shadow-md">
                <User className="w-4 h-4" />
              </div>
              <div className="ml-4 flex flex-col">
                <span className="font-bold text-[13px] text-slate-800">HR Employee</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Role-based access</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 text-left px-1">
              <div className="flex items-center gap-1.5 text-[11px] font-medium"><CheckCircle2 className="w-4 h-4 text-brand-green" /> <span className="text-slate-700 dark:text-slate-200">View employee records</span></div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium"><CheckCircle2 className="w-4 h-4 text-brand-green" /> <span className="text-slate-700 dark:text-slate-200">Read HR documents</span></div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium"><div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center"><div className="w-2 h-0.5 bg-red-500 rounded-full" /></div> <span className="text-slate-700 dark:text-slate-200">Delete payroll data</span></div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium"><div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center"><div className="w-2 h-0.5 bg-red-500 rounded-full" /></div> <span className="text-slate-700 dark:text-slate-200">Change security settings</span></div>
            </div>
          </div>
        )
      },
      {
        title: "ACCESS DECISION",
        subtitle: "Allow or Deny",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="w-full h-24 rounded-lg overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-sm shrink-0">
              <img src="/assets/images/access_granted.png" alt="Access Granted" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center relative bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
              <div className="w-16 h-12 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col overflow-hidden">
                <div className="h-3 bg-brand-blue w-full flex items-center px-1 gap-0.5">
                  <div className="w-1 h-1 bg-white dark:bg-slate-900/50 rounded-full"></div>
                  <div className="w-1 h-1 bg-white dark:bg-slate-900/50 rounded-full"></div>
                </div>
                <div className="flex-1 p-1 flex flex-col gap-1">
                  <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                  <div className="w-3/4 h-1 bg-slate-200 rounded-full"></div>
                  <div className="w-1/2 h-1 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 bg-brand-green rounded-full p-1 shadow-md border-2 border-white">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-[13px] text-slate-800">HR Application</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">Protected Resource</div>
            </div>
            <div className="flex flex-col gap-2 mt-1">
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-left shadow-sm">
                <div className="flex items-center gap-1.5 text-brand-green font-bold text-[11px] mb-0.5"><CheckCircle2 className="w-3.5 h-3.5" /> Access Granted</div>
                <div className="text-[9px] text-green-700 leading-tight">Alex can view employee records.</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-left shadow-sm opacity-60">
                <div className="flex items-center gap-1.5 text-red-600 font-bold text-[11px] mb-0.5"><div className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center"><div className="w-1.5 h-0.5 bg-red-600 rounded-full" /></div> Access Denied</div>
                <div className="text-[9px] text-red-700 leading-tight">Alex cannot delete payroll data.</div>
              </div>
            </div>
          </div>
        )
      }
    ];
    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative p-1 md:p-4 overflow-x-auto custom-scrollbar">
        <div className={clsx("relative flex mx-auto items-stretch justify-center w-full max-w-6xl", isMobile ? "flex-col h-full py-8 gap-4" : "flex-row py-8 gap-2 min-w-max px-4")}>
          {q2Data.map((node, idx) => {
            const isCompleted = idx < currentStep;
            const isActive = idx === currentStep;
            
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-center flex-1 min-w-0">
                <div className={clsx("relative z-10 flex flex-col items-center justify-start flex-1 min-w-0 w-full", isMobile ? "my-2" : "w-48 lg:w-56")}>
                  {/* Node Card */}
                  <motion.div
                    initial={false}
                    animate={{ scale: isActive ? 1.02 : 1, y: isActive && !isMobile ? -4 : 0 }}
                    className={clsx(
                      "relative flex flex-col items-center justify-start w-full h-full px-4 py-5 rounded-2xl bg-white dark:bg-slate-900 transition-all duration-500 shadow-sm border",
                      isActive ? "border-brand-blue ring-4 ring-brand-blue-light shadow-md" :
                      isCompleted ? "border-slate-300 dark:border-slate-600 opacity-100" : "border-slate-200 dark:border-slate-700 opacity-60"
                    )}
                  >
                  
                  <div className={clsx("text-center font-black text-[12px] leading-tight mb-0.5 tracking-wide", isActive ? "text-brand-navy dark:text-white" : "text-slate-700 dark:text-slate-200")}>
                    {node.title}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide text-center mb-2">
                    {node.subtitle}
                  </div>
                  
                  <div className={clsx("w-full transition-all duration-500", isActive || isCompleted ? "opacity-100" : "opacity-40 grayscale-[50%]")}>
                    {node.content}
                  </div>
                  </motion.div>
                </div>

                {/* Arrow Symbol */}
                {idx < q2Data.length - 1 && (
                  <div className={clsx("flex items-center justify-center shrink-0", isMobile ? "py-2" : "px-0 lg:px-2")}>
                    <ChevronRight className={clsx("w-8 h-8 md:w-10 md:h-10 transition-colors duration-500", isCompleted ? "text-brand-blue" : "text-slate-200")} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Layout: Q3 Auth Stages
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
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm p-3 relative overflow-hidden">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1.5 uppercase tracking-wider">Corporate Login</div>
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1.5 mb-1.5 text-[11px] text-slate-700 dark:text-slate-200 font-medium">alex@company.com</div>
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1.5 mb-2 flex gap-1 items-center h-[26px]">
                {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full" />)}
              </div>
              <div className="bg-brand-blue text-white rounded py-1.5 text-center text-[11px] font-bold shadow-sm">
                Sign In
              </div>
            </div>

            <div className="text-left bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl w-full">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 mb-0.5"><div className="w-3.5 flex justify-center"><User className="w-3 h-3 text-brand-blue" /></div> User: Alex Johnson</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 mb-0.5"><div className="w-3.5 flex justify-center"><MapPin className="w-3 h-3 text-brand-blue" /></div> Email: alex@company.com</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 mb-0.5"><div className="w-3.5 flex justify-center"><Laptop className="w-3 h-3 text-brand-blue" /></div> Device: Corporate Laptop</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400"><div className="w-3.5 flex justify-center"><MapPin className="w-3 h-3 text-brand-blue" /></div> Location: Office</div>
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
            
            <div className="flex flex-col gap-1.5 text-left px-1 mt-2 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Checking username</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Checking password</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Validating account</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 1 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">User found</span></div>
            </div>
          </div>
        )
      },
      {
        title: "MFA VERIFICATION",
        subtitle: "Additional security factor",
        content: (
          <div className="flex flex-col gap-3 mt-3 w-full">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-3 bg-white dark:bg-slate-900 shadow-sm relative flex flex-col items-center">
              <div className="text-[11px] font-bold text-slate-800 mb-2">MFA Challenge</div>
              <div className="relative w-14 h-24 bg-slate-800 rounded-[12px] border-4 border-slate-700 flex flex-col items-center justify-center shadow-md mb-2">
                <div className="absolute top-1 w-4 h-1 bg-slate-900 rounded-full"></div>
                <div className="bg-white dark:bg-slate-900/10 w-10 h-8 rounded mb-2 flex items-center justify-center flex-col">
                  <div className="text-brand-blue font-bold tracking-widest text-[10px]">482</div>
                  <div className="text-brand-blue font-bold tracking-widest text-[10px]">915</div>
                </div>
                <Fingerprint className="w-5 h-5 text-slate-400" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-left px-1 mt-1 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Sending OTP</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Verifying OTP</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Biometric verification</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><Circle className={clsx("w-3.5 h-3.5", currentStep >= 2 ? "text-brand-green fill-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">MFA verified</span></div>
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

            <div className="flex flex-col gap-1.5 text-left px-1 mt-1 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 3 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Identity verified</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 3 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">MFA completed</span></div>
              <div className="flex items-center gap-2 text-[11px] font-medium"><CheckCircle2 className={clsx("w-3.5 h-3.5", currentStep >= 3 ? "text-brand-green" : "text-slate-300")} /> <span className="text-slate-700 dark:text-slate-200">Authenticated session created</span></div>
            </div>
          </div>
        )
      }
    ];

    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative p-1 md:p-2 overflow-x-hidden">
        <div className={clsx("relative flex mx-auto items-start justify-center px-2 w-full max-w-6xl", isMobile ? "flex-col h-full py-8 gap-6" : "flex-row py-8 gap-2 lg:gap-1 xl:gap-2")}>
          {q3Data.map((node, idx) => {
            const isCompleted = idx < currentStep;
            const isActive = idx === currentStep;
            
            return (
              <div key={idx} className={clsx("relative z-10 flex flex-col items-center justify-start shrink-0 flex-1 min-w-0", isMobile ? "w-full my-6" : "max-w-[220px]")}>
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
                    "relative flex flex-col items-center justify-start w-full px-4 py-5 rounded-2xl bg-white dark:bg-slate-900 transition-all duration-500 shadow-sm border",
                    isActive ? "border-brand-blue ring-4 ring-brand-blue-light shadow-md" :
                    isCompleted ? "border-slate-300 dark:border-slate-600 opacity-100" : "border-slate-200 dark:border-slate-700 opacity-60"
                  )}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-[13px] border-4 border-white shadow-sm z-20">
                    {idx + 1}
                  </div>
                  
                  <div className={clsx("text-center font-black text-[12px] leading-tight mb-0.5 tracking-wide", isActive ? "text-brand-navy dark:text-white" : "text-slate-700 dark:text-slate-200")}>
                    {node.title}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide text-center">
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

  // Layout 2: Branching / Outputs
  if (layout === 'branching' || layout === 'one-to-many' || layout === 'tree') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative p-4 md:p-8 overflow-x-auto custom-scrollbar">
        <div className={clsx("relative flex mx-auto items-center justify-center gap-12 lg:gap-20 min-w-max px-8", isMobile ? "flex-col h-full py-8" : "flex-row h-72")}>
          <div className={clsx("flex items-center gap-8 lg:gap-16", isMobile ? "flex-col w-full" : "flex-row")}>
            {steps.map((step, idx) => (
              <div key={idx} className={clsx("relative z-10 flex flex-col items-center justify-center shrink-0", isMobile ? "w-full my-6" : "w-40")}>
                {idx < steps.length - 1 && (
                  <div className={clsx("absolute z-0 bg-slate-200", isMobile ? "w-1 h-16 left-1/2 -bottom-16 -translate-x-1/2" : "h-1 w-8 lg:w-16 xl:w-32 top-1/2 left-full -translate-y-1/2")} />
                )}
                {renderNode(step, idx === currentStep, idx < currentStep)}
              </div>
            ))}
          </div>
          
          {outputs && outputs.length > 0 && (
            <div className="flex flex-col gap-6 relative z-10 w-48 shrink-0">
              {outputs.map((out, idx) => (
                <div key={idx} className="relative">
                  <div className={clsx("px-4 py-3 bg-white dark:bg-slate-900 border-2 rounded-xl shadow-sm text-[12px] font-bold text-center", out.includes('DENY') ? "border-red-200 text-red-600 bg-red-50" : out.includes('MFA') ? "border-amber-200 text-amber-600 bg-amber-50" : "border-brand-green/30 text-brand-green bg-brand-green/5")}>
                    {out}
                  </div>
                  <div className={clsx("absolute z-0 bg-slate-200", isMobile ? "w-0.5 h-6 left-1/2 -top-6" : "h-0.5 w-16 right-full top-1/2")} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Layout 3: Converging (Multiple Inputs -> Engine)
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-4 md:p-8 overflow-x-auto custom-scrollbar">
      <div className={clsx("relative flex mx-auto items-center justify-center gap-8 lg:gap-16 min-w-max px-8", isMobile ? "flex-col h-full py-8" : "flex-row h-72")}>
        {inputs && inputs.length > 0 && (
          <div className="flex flex-col gap-4 relative z-10">
            {inputs.map((input, idx) => renderSmallInput(input, idx))}
          </div>
        )}
        
        <div className={clsx("flex items-center gap-8 lg:gap-16", isMobile ? "flex-col w-full" : "flex-row")}>
          {steps.map((step, idx) => (
            <div key={idx} className={clsx("relative z-10 flex flex-col items-center justify-center shrink-0", isMobile ? "w-full my-6" : "w-40")}>
              {idx < steps.length - 1 && (
                <div className={clsx("absolute z-0 bg-slate-200", isMobile ? "w-1 h-16 left-1/2 -bottom-16 -translate-x-1/2" : "h-1 w-8 lg:w-16 xl:w-32 top-1/2 left-full -translate-y-1/2")} />
              )}
              {renderNode(step, idx === currentStep, idx < currentStep)}
            </div>
          ))}
        </div>

        {outputs && outputs.length > 0 && (
          <div className="flex flex-col gap-6 relative z-10 w-48 shrink-0">
            {outputs.map((out, idx) => (
              <div key={idx} className="relative">
                <div className={clsx("px-4 py-3 bg-white dark:bg-slate-900 border-2 rounded-xl shadow-sm text-[12px] font-bold text-center", out.includes('DENY') ? "border-red-200 text-red-600 bg-red-50" : out.includes('MFA') ? "border-amber-200 text-amber-600 bg-amber-50" : "border-brand-green/30 text-brand-green bg-brand-green/5")}>
                  {out}
                </div>
                <div className={clsx("absolute z-0 bg-slate-200", isMobile ? "w-0.5 h-6 left-1/2 -top-6" : "h-0.5 w-16 right-full top-1/2")} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
