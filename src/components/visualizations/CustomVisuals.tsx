import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Database } from "lucide-react";

const GIcon = ({ active, label, subLabel, size = "medium", color = "blue", imgSrc, objectFit = "contain", imgClassName = "", children }: any) => {
  const sizeClasses = { small: "w-20 h-20 lg:w-24 lg:h-24", medium: "w-24 h-24 lg:w-28 lg:h-28", large: "w-28 h-28 lg:w-36 lg:h-36" };
  const containerSizes = { small: "w-24 lg:w-28", medium: "w-28 lg:w-36", large: "w-36 lg:w-44" };
  return (
    <div className={clsx("flex flex-col items-center gap-2", containerSizes[size as keyof typeof containerSizes])}>
      <motion.div 
        animate={{ scale: active ? 1.05 : 1, opacity: active ? 1 : 0.75 }}
        className={clsx(
          "flex items-center justify-center rounded-2xl shadow-md border-4 bg-white relative overflow-hidden transition-all duration-500",
          sizeClasses[size as keyof typeof sizeClasses],
          active ? `border-${color}-500 shadow-${color}-500/30` : "border-slate-200 dark:border-slate-700"
        )}>
        {imgSrc ? (
          <img src={imgSrc} alt={label} className={`w-full h-full object-${objectFit} ${imgClassName}`} />
        ) : (
          <Database size={40} className={active ? `text-${color}-600` : "text-slate-400"} />
        )}
      </motion.div>
      <div className="flex flex-col items-center">
        <span className={clsx("text-center font-bold leading-tight", size === "small" ? "text-xs" : "text-sm", active ? "text-slate-800 dark:text-white" : "text-slate-500 dark:text-slate-400")}>
          {label}
        </span>
        {subLabel && (
          <span className={clsx("text-center text-[10px] lg:text-xs font-semibold mt-1", active ? "text-slate-500 dark:text-slate-300" : "text-slate-400 dark:text-slate-500")}>
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
};

const Packet = ({ active, color = "blue", vertical = false }: any) => {
  if (!active) return null;
  return (
    <motion.div
      initial={vertical ? { top: 0, opacity: 0 } : { left: 0, opacity: 0 }}
      animate={vertical ? { top: "100%", opacity: [0, 1, 1, 0] } : { left: "100%", opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      className={clsx("absolute rounded-full shadow-[0_0_8px_currentColor] z-10", vertical ? "w-2 h-4 -ml-[1px]" : "w-4 h-2 -mt-[1px]", `bg-${color}-500 text-${color}-500`)}
    />
  );
};

const Arrow = ({ active, color = "blue", vertical = false }: any) => {
  if (vertical) {
    return (
      <div className={clsx("flex-1 min-h-[30px] lg:min-h-[50px] my-1 lg:my-2 flex flex-col items-center justify-center relative transition-opacity duration-500", active ? "opacity-100" : "opacity-30")}>
        <div className={clsx("w-0 h-full border-l-[3px] border-dashed relative overflow-visible", `border-${color}-500`)}>
           <Packet active={active} color={color} vertical={true} />
        </div>
        <div className={clsx("w-3 h-3 rotate-45 border-b-[3px] border-r-[3px] absolute bottom-0", `border-${color}-500`)} />
      </div>
    );
  }
  return (
    <div className={clsx("flex-1 min-w-[20px] lg:min-w-[40px] mx-1 lg:mx-2 flex items-center justify-center relative transition-opacity duration-500", active ? "opacity-100" : "opacity-30")}>
      <div className={clsx("w-full h-0 border-t-[3px] border-dashed relative overflow-visible", `border-${color}-500`)}>
         <Packet active={active} color={color} />
      </div>
      <div className={clsx("w-3 h-3 rotate-45 border-t-[3px] border-r-[3px] absolute right-0", `border-${color}-500`)} />
    </div>
  );
};


// Q1 Visual
const Q1Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 0} label="Employee" subLabel="End User" size="small" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 1} label="Identity" subLabel="Username" size="small" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/mfa_phone.png" active={currentStep >= 2} label="Authentication" subLabel="Password & MFA" size="small" color="blue" />
      <Arrow active={currentStep >= 3} color="blue" />
      <GIcon imgSrc="/assets/images/sso_portal.png" active={currentStep >= 3} label="Authorization" subLabel="Permissions" size="small" color="blue" />
      <Arrow active={currentStep >= 4} color="blue" />
      <GIcon imgSrc="/assets/images/database.png" active={currentStep >= 4} label="Resource" subLabel="Target System" size="small" color="blue" />
      </div>
    </div>
  );
};

// Q2 Visual
const Q2Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Human / Workload" subLabel="" size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 1} label="Identity Attributes" subLabel="HR Collects..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/id_badge.png" active={currentStep >= 2} label="Digital Identity" subLabel="Department..." size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q3 Visual
const Q3Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="Employee" subLabel="User Initiates..." size="small" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 1} label="Login" subLabel="User Enters..." size="small" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/auth_lock.png" active={currentStep >= 2} label="Credentials" subLabel="Password & MFA" size="small" color="cyan" />
      <Arrow active={currentStep >= 3} color="cyan" />
      <GIcon imgSrc="/assets/images/auth_biometric.png" active={currentStep >= 3} label="Verification" subLabel="Password & MFA" size="small" color="cyan" />
      <Arrow active={currentStep >= 4} color="cyan" />
      <GIcon imgSrc="/assets/images/jit_access.png" active={currentStep >= 4} label="MFA" subLabel="System Requests..." size="small" color="cyan" />
      <Arrow active={currentStep >= 5} color="cyan" />
      <GIcon imgSrc="/assets/images/account_created.png" active={currentStep >= 5} label="Identity Verified" subLabel="Identity Is..." size="small" color="cyan" />
      </div>
    </div>
  );
};

// Q4 Visual
const Q4Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Authenticated User" subLabel="End User" size="small" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 1} label="Role" subLabel="Assigned Role" size="small" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 2} label="Permissions" subLabel="Permissions" size="small" color="sky" />
      <Arrow active={currentStep >= 3} color="sky" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 3} label="Policy" subLabel="Policy Check" size="small" color="sky" />
      <Arrow active={currentStep >= 4} color="sky" />
      <GIcon imgSrc="/assets/images/database.png" active={currentStep >= 4} label="Resource" subLabel="Target System" size="small" color="sky" />
      </div>
    </div>
  );
};

// Q5 Visual
const Q5Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/auth_password.png" active={currentStep >= 0} label="WHO ARE YOU? (AuthN)" subLabel="Authentication..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/mfa_phone.png" active={currentStep >= 1} label="WHAT CAN YOU DO? (AuthZ)" subLabel="Authorization..." size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q6 Visual
const Q6Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 0} label="Employee" subLabel="End User" size="small" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/mfa_phone.png" active={currentStep >= 1} label="Password" subLabel="Password & MFA" size="small" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/user_attribute.png" active={currentStep >= 2} label="Smartphone OTP" subLabel="Step 2..." size="small" color="indigo" />
      <Arrow active={currentStep >= 3} color="indigo" />
      <GIcon imgSrc="/assets/images/q42_app_a_1790861681215.png" active={currentStep >= 3} label="Biometric Scan" subLabel="Step 3..." size="small" color="indigo" />
      <Arrow active={currentStep >= 4} color="indigo" />
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 4} label="All Factors Verified" subLabel="Multi-Factor" size="small" color="indigo" />
      </div>
    </div>
  );
};

// Q7 Visual
const Q7Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 0} label="Employee" subLabel="End User" size="small" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/account_created.png" active={currentStep >= 1} label="Identity Provider" subLabel="Digital ID" size="small" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/database.png" active={currentStep >= 2} label="Email App" subLabel="Okta..." size="small" color="cyan" />
      <Arrow active={currentStep >= 3} color="cyan" />
      <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 3} label="HR App" subLabel="Azure AD)..." size="small" color="cyan" />
      <Arrow active={currentStep >= 4} color="cyan" />
      <GIcon imgSrc="/assets/images/sso_portal.png" active={currentStep >= 4} label="All Apps Unlocked" subLabel="Access Token" size="small" color="cyan" />
      </div>
    </div>
  );
};

// Q8 Visual
const Q8Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 0} label="User" subLabel="End User" size="small" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/sso_portal.png" active={currentStep >= 1} label="Authentication" subLabel="Password & MFA" size="small" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/account_created.png" active={currentStep >= 2} label="Identity Directory" subLabel="User Directory" size="small" color="sky" />
      <Arrow active={currentStep >= 3} color="sky" />
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 3} label="Token Issued" subLabel="Access Token" size="small" color="sky" />
      <Arrow active={currentStep >= 4} color="sky" />
      <GIcon imgSrc="/assets/images/database.png" active={currentStep >= 4} label="Application" subLabel="Access Token" size="small" color="sky" />
      </div>
    </div>
  );
};

// Q9 Visual
const Q9Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 0} label="Employee Joins" subLabel="End User" size="small" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 1} label="Account Created" subLabel="" size="small" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 2} label="Account Active" subLabel="" size="small" color="blue" />
      <Arrow active={currentStep >= 3} color="blue" />
      <GIcon imgSrc="/assets/images/id_badge.png" active={currentStep >= 3} label="Account Suspended" subLabel="If Suspicious..." size="small" color="blue" />
      <Arrow active={currentStep >= 4} color="blue" />
      <GIcon imgSrc="/assets/images/account_created.png" active={currentStep >= 4} label="Account Disabled" subLabel="The Account..." size="small" color="blue" />
      </div>
    </div>
  );
};

// Q10 Visual
const Q10Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="User" subLabel="End User" size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 1} label="Assumes Role" subLabel="Assigned Role" size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 2} label="Permissions" subLabel="Developer)..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 3} color="indigo" />
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 3} label="Resource" subLabel="Permissions" size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q11 Visual
const Q11Visual = ({ currentStep, isMobile }: any) => {
    return (
      <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
        <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
        <GIcon active={currentStep >= 0} label="Users" subLabel="Alex, Sarah, John" size="medium" color="cyan">
          <div className="flex flex-wrap items-center justify-center w-full h-full p-2 bg-slate-50 rounded-xl relative">
            <img src="/assets/images/employee_laptop.png" className="w-[45%] h-[45%] object-contain absolute top-1 left-1" />
            <img src="/assets/images/q7_sso_employee_1790861637507.png" className="w-[45%] h-[45%] object-contain absolute top-1 right-1" />
            <img src="/assets/images/id_badge.png" className="w-[45%] h-[45%] object-contain absolute bottom-1 left-[27.5%]" />
          </div>
        </GIcon>
        <Arrow active={currentStep >= 1} color="cyan" />
        <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 1} label="Roles Assigned" subLabel="e.g., Finance" size="medium" color="cyan" />
        <Arrow active={currentStep >= 2} color="cyan" />
        <GIcon imgSrc="/assets/images/access_granted.png" active={currentStep >= 2} label="Permissions Granted" subLabel="Access Policy" size="medium" color="cyan" />
        <Arrow active={currentStep >= 3} color="cyan" />
        <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 3} label="Resources Accessed" subLabel="Payroll System" size="medium" color="cyan" />
        </div>
      </div>
    );
  };

// Q12 Visual
const Q12Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 0} label="User Attributes" subLabel="Attribute Check" size="small" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/abac_device_laptop_1790829588514.png" active={currentStep >= 1} label="Device Attributes" subLabel="Clearance=Level 2..." size="small" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 2} label="Context Evaluated" subLabel="" size="small" color="sky" />
      <Arrow active={currentStep >= 3} color="sky" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 3} label="ABAC Policy Engine" subLabel="Patched=Yes..." size="small" color="sky" />
      <Arrow active={currentStep >= 4} color="sky" />
      <GIcon imgSrc="/assets/images/abac_location_office_1790829555589.png" active={currentStep >= 4} label="Decision" subLabel="Context Is..." size="small" color="sky" />
      </div>
    </div>
  );
};

// Q13 Visual
const Q13Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/id_badge.png" active={currentStep >= 0} label="Developer Joins" subLabel="" size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 1} label="Excess Permissions Identified" subLabel="Permissions" size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 2} label="Permissions Removed" subLabel="Delete DB..." size="medium" color="blue" />
      <Arrow active={currentStep >= 3} color="blue" />
      <GIcon imgSrc="/assets/images/access_granted.png" active={currentStep >= 3} label="Minimal Access Granted" subLabel="Payroll)..." size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q14 Visual
const Q14Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/database.png" active={currentStep >= 0} label="User" subLabel="End User" size="small" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/mfa_phone.png" active={currentStep >= 1} label="Request" subLabel="" size="small" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 2} label="Policy" subLabel="Rules Engine" size="small" color="indigo" />
      <Arrow active={currentStep >= 3} color="indigo" />
      <GIcon imgSrc="/assets/images/account_active.png" active={currentStep >= 3} label="Decision" subLabel="" size="small" color="indigo" />
      <Arrow active={currentStep >= 4} color="indigo" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 4} label="Resource" subLabel="If Allowed..." size="small" color="indigo" />
      </div>
    </div>
  );
};

// Q15 Visual
const Q15Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 0} label="Conditions" subLabel="Assigned Role" size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 1} label="Policy" subLabel="Policy Check" size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/account_active.png" active={currentStep >= 2} label="Allow/Deny" subLabel="Access Denied" size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q16 Visual
const Q16Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 0} label="User Request" subLabel="End User" size="small" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/federation_trust.png" active={currentStep >= 1} label="Identity Verified" subLabel="Identity Is..." size="small" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 2} label="Device Checked" subLabel="Device Health..." size="small" color="sky" />
      <Arrow active={currentStep >= 3} color="sky" />
      <GIcon imgSrc="/assets/images/location_attribute.png" active={currentStep >= 3} label="Context Evaluated" subLabel="Context Is..." size="small" color="sky" />
      <Arrow active={currentStep >= 4} color="sky" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 4} label="Policy Applied" subLabel="Time..." size="small" color="sky" />
      <Arrow active={currentStep >= 5} color="sky" />
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 5} label="Resource Granted" subLabel="Risk Score..." size="small" color="sky" />
      </div>
    </div>
  );
};

// Q17 Visual
const Q17Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="Browser" subLabel="" size="small" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/sso_portal.png" active={currentStep >= 1} label="Service Provider" subLabel="" size="small" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/auth_biometric.png" active={currentStep >= 2} label="Redirect to IdP" subLabel="" size="small" color="blue" />
      <Arrow active={currentStep >= 3} color="blue" />
      <GIcon imgSrc="/assets/images/access_granted.png" active={currentStep >= 3} label="SAML Assertion" subLabel="After Successful..." size="small" color="blue" />
      <Arrow active={currentStep >= 4} color="blue" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 4} label="Application Access" subLabel="The IdP..." size="small" color="blue" />
      </div>
    </div>
  );
};

// Q18 Visual
const Q18Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 0} label="Admin User" subLabel="An Administrator..." size="small" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 1} label="Privileged Request" subLabel="" size="small" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 2} label="PAM Approval" subLabel="" size="small" color="indigo" />
      <Arrow active={currentStep >= 3} color="indigo" />
      <GIcon imgSrc="/assets/images/jit_access.png" active={currentStep >= 3} label="Temporary Access" subLabel="Time-Bound" size="small" color="indigo" />
      <Arrow active={currentStep >= 4} color="indigo" />
      <GIcon imgSrc="/assets/images/role_attribute.png" active={currentStep >= 4} label="Session Recorded" subLabel="Log Event" size="small" color="indigo" />
      <Arrow active={currentStep >= 5} color="indigo" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 5} label="Access Revoked" subLabel="When The..." size="small" color="indigo" />
      </div>
    </div>
  );
};

// Q19 Visual
const Q19Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="Access Request" subLabel="" size="small" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 1} label="Conditions Evaluated" subLabel="Assigned Role" size="small" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 2} label="Risk Assessed" subLabel="Device Compliance..." size="small" color="cyan" />
      <Arrow active={currentStep >= 3} color="cyan" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 3} label="Policy Decision" subLabel="Location..." size="small" color="cyan" />
      <Arrow active={currentStep >= 4} color="cyan" />
      <GIcon imgSrc="/assets/images/jit_access.png" active={currentStep >= 4} label="MFA Required" subLabel="Time..." size="small" color="cyan" />
      <Arrow active={currentStep >= 5} color="cyan" />
      <GIcon imgSrc="/assets/images/sso_portal.png" active={currentStep >= 5} label="Access Decision" subLabel="Risk Signals..." size="small" color="cyan" />
      </div>
    </div>
  );
};

// Q20 Visual
const Q20Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="User Identity" subLabel="End User" size="small" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/sso_portal.png" active={currentStep >= 1} label="Authentication" subLabel="Password & MFA" size="small" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/internal_portal.png" active={currentStep >= 2} label="Context" subLabel="Multi-Factor" size="small" color="sky" />
      <Arrow active={currentStep >= 3} color="sky" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 3} label="Authorization" subLabel="Or SSO..." size="small" color="sky" />
      <Arrow active={currentStep >= 4} color="sky" />
      <GIcon imgSrc="/assets/images/abac_device_laptop_1790829588514.png" active={currentStep >= 4} label="Policy Decision" subLabel="Context Is..." size="small" color="sky" />
      <Arrow active={currentStep >= 5} color="sky" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 5} label="Resource Access" subLabel="Location..." size="small" color="sky" />
      <Arrow active={currentStep >= 6} color="sky" />
      <GIcon imgSrc="/assets/images/abac_time_clock_1790829568155.png" active={currentStep >= 6} label="Audit Log" subLabel="Time..." size="small" color="sky" />
      </div>
    </div>
  );
};

// Q21 Visual
const Q21Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="User Request" subLabel="User Requests..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 1} label="Evaluate Needs" subLabel="Permissions" size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 2} label="Grant Minimum Access" subLabel="Permissions" size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q22 Visual
const Q22Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="User" subLabel="End User" size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 1} label="Assumes Role / Group" subLabel="Assigned Role" size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 2} label="Permissions" subLabel="Assigned Role" size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q23 Visual
const Q23Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 0} label="Collect Attributes" subLabel="Gather User..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 1} label="Policy Engine" subLabel="Device..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 2} label="Access Decision" subLabel="And Location..." size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q24 Visual
const Q24Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 0} label="RBAC Approach" subLabel="Assigned Role" size="medium" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 1} label="ABAC Approach" subLabel="ABAC Looks..." size="medium" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/identity_governance_dashboard.png" active={currentStep >= 2} label="Comparison" subLabel="What..." size="medium" color="sky" />
      </div>
    </div>
  );
};

// Q25 Visual
const Q25Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 0} label="Joiner" subLabel="Account Is..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 1} label="Mover" subLabel="Permissions" size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/id_badge.png" active={currentStep >= 2} label="Leaver" subLabel="Account Is..." size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q26 Visual
const Q26Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="HR Trigger" subLabel="HR Marks..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/id_badge.png" active={currentStep >= 1} label="Account Creation" subLabel="IAM System..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 2} label="Access Granted" subLabel="Downstream Apps..." size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q27 Visual
const Q27Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/location_attribute.png" active={currentStep >= 0} label="Termination Event" subLabel="HR Updates..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/id_badge.png" active={currentStep >= 1} label="Disable Identity" subLabel="IAM Disables..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 2} label="Revoke Sessions" subLabel="All Active..." size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q28 Visual
const Q28Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 0} label="Generate Report" subLabel="Permissions" size="medium" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/abac_user_finance_1790829544274.png" active={currentStep >= 1} label="Manager Review" subLabel="Manager Evaluates..." size="medium" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/account_suspended.png" active={currentStep >= 2} label="Action Taken" subLabel="Access Revoked" size="medium" color="sky" />
      </div>
    </div>
  );
};

// Q29 Visual
const Q29Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/account_active.png" active={currentStep >= 0} label="Define Policies" subLabel="Create Rules..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 1} label="Enforce Rules" subLabel="Enforce Approvals..." size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/resource_attribute.png" active={currentStep >= 2} label="Audit & Report" subLabel="Log Event" size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q30 Visual
const Q30Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Request Phase" subLabel="User A..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 1} label="Approval Phase" subLabel="User B..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/q7_sso_apps_1790861649347.png" active={currentStep >= 2} label="Execution Phase" subLabel="" size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q31 Visual
const Q31Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="Standard User" subLabel="Standard Users..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 1} label="Admin Role" subLabel="Assigned Role" size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/mfa_phone.png" active={currentStep >= 2} label="System Control" subLabel="" size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q32 Visual
const Q32Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/abac_location_office_1790829555589.png" active={currentStep >= 0} label="Admin Request" subLabel="Admin Requests..." size="medium" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 1} label="Elevation Approval" subLabel="Policy Check" size="medium" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/abac_time_clock_1790829568155.png" active={currentStep >= 2} label="Temporary Session" subLabel="Time-Bound" size="medium" color="sky" />
      </div>
    </div>
  );
};

// Q33 Visual
const Q33Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/account_active.png" active={currentStep >= 0} label="No Access" subLabel="Admin Has..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/jit_access.png" active={currentStep >= 1} label="JIT Elevation" subLabel="Admin Requests..." size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 2} label="Access Revoked" subLabel="After 1..." size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q34 Visual
const Q34Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 0} label="Admin Request" subLabel="Admin Requests..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/rbac_roles.png" active={currentStep >= 1} label="Filter Permissions" subLabel="" size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/access_review_report.png" active={currentStep >= 2} label="Constrained Access" subLabel="Admin Can..." size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q35 Visual
const Q35Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/account_created.png" active={currentStep >= 0} label="Identify Privileged Accounts" subLabel="Locate All..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/q23_access_decision_1790853477929.png" active={currentStep >= 1} label="Secure with PAM" subLabel="Multi-Factor" size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/account_active.png" active={currentStep >= 2} label="Monitor Activity" subLabel="Log And..." size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q36 Visual
const Q36Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/sso_portal.png" active={currentStep >= 0} label="User Auth" subLabel="User Authenticates..." size="medium" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/federation_trust.png" active={currentStep >= 1} label="Federation Trust" subLabel="Access Token" size="medium" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 2} label="External Access" subLabel="User Gains..." size="medium" color="sky" />
      </div>
    </div>
  );
};

// Q37 Visual
const Q37Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 0} label="Request" subLabel="User Tries..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 1} label="Redirect" subLabel="App Redirects..." size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/auth_biometric.png" active={currentStep >= 2} label="Auth" subLabel="IdP Verifies..." size="medium" color="blue" />
      <Arrow active={currentStep >= 3} color="blue" />
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 3} label="Assertion" subLabel="IdP Sends..." size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q38 Visual
const Q38Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/access_decision.png" active={currentStep >= 0} label="User Consent" subLabel="Permissions" size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/database.png" active={currentStep >= 1} label="Issue Token" subLabel="Access Token" size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 2} label="API Access" subLabel="Access Token" size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q39 Visual
const Q39Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/database.png" active={currentStep >= 0} label="Receive Token" subLabel="Access Token" size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/auth_biometric.png" active={currentStep >= 1} label="API Request" subLabel="Access Token" size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 2} label="Validation" subLabel="Access Token" size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q40 Visual
const Q40Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/auth_lock.png" active={currentStep >= 0} label="Auth Request" subLabel="App Requests..." size="medium" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/federation_trust.png" active={currentStep >= 1} label="Tokens Issued" subLabel="Email)..." size="medium" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 2} label="Identity Verified" subLabel="Access Token" size="medium" color="sky" />
      </div>
    </div>
  );
};

// Q41 Visual
const Q41Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/auth_password.png" active={currentStep >= 0} label="Receive ID Token" subLabel="Access Token" size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 1} label="Decode JWT" subLabel="App Decodes..." size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 2} label="Read Claims" subLabel="App Reads..." size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q42 Visual
const Q42Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 0} label="Login to IdP" subLabel="User Logs..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/server_resource.png" active={currentStep >= 1} label="Access App A" subLabel="Password & MFA" size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/email_app.png" active={currentStep >= 2} label="Access App B" subLabel="Password & MFA" size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q43 Visual
const Q43Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 0} label="Assess Context" subLabel="System Checks..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/jit_access.png" active={currentStep >= 1} label="Low Risk" subLabel="Time..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 2} label="High Risk" subLabel="And Device..." size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q44 Visual
const Q44Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/device_attribute.png" active={currentStep >= 0} label="Gather Signals" subLabel="Collect IP..." size="medium" color="sky" />
      <Arrow active={currentStep >= 1} color="sky" />
      <GIcon imgSrc="/assets/images/abac_device_laptop_1790829588514.png" active={currentStep >= 1} label="Calculate Score" subLabel="Device ID..." size="medium" color="sky" />
      <Arrow active={currentStep >= 2} color="sky" />
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 2} label="Enforce Policy" subLabel="And Location..." size="medium" color="sky" />
      </div>
    </div>
  );
};

// Q45 Visual
const Q45Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/q7_sso_employee_1790861637507.png" active={currentStep >= 0} label="Condition 1" subLabel="Is The..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/abac_device_laptop_1790829588514.png" active={currentStep >= 1} label="Condition 2" subLabel="Is The..." size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/account_active.png" active={currentStep >= 2} label="Decision" subLabel="Multi-Factor" size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q46 Visual
const Q46Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/abac_device_laptop_1790829588514.png" active={currentStep >= 0} label="Device Connects" subLabel="Device Requests..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/posture_check.png" active={currentStep >= 1} label="Posture Check" subLabel="Agent Checks..." size="medium" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/abac_location_office_1790829555589.png" active={currentStep >= 2} label="Access Decision" subLabel="Encryption..." size="medium" color="indigo" />
      </div>
    </div>
  );
};

// Q47 Visual
const Q47Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/auth_password.png" active={currentStep >= 0} label="Initial Login" subLabel="User Passes..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 1} color="cyan" />
      <GIcon imgSrc="/assets/images/active_session.png" active={currentStep >= 1} label="Session Active" subLabel="User Works..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 2} color="cyan" />
      <GIcon imgSrc="/assets/images/threat_detected.png" active={currentStep >= 2} label="Threat Detected" subLabel="Device Downloads..." size="medium" color="cyan" />
      <Arrow active={currentStep >= 3} color="cyan" />
      <GIcon imgSrc="/assets/images/account_suspended.png" active={currentStep >= 3} label="Session Terminated" subLabel="Access Revoked" size="medium" color="cyan" />
      </div>
    </div>
  );
};

// Q48 Visual
const Q48Visual = ({ currentStep, isMobile }: any) => {
    return (
      <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
        <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
        <GIcon objectFit="contain" imgClassName="p-1 object-center" imgSrc="/assets/images/flat_network.png" active={currentStep >= 0} label="Flat Network" subLabel="Old Way..." size="medium" color="sky" />
        <Arrow active={currentStep >= 1} color="sky" />
        <GIcon objectFit="contain" imgClassName="p-1 object-center" imgSrc="/assets/images/network_breach.png" active={currentStep >= 1} label="Breach" subLabel="Everything Connects..." size="medium" color="sky" />
        <Arrow active={currentStep >= 2} color="sky" />
        <GIcon objectFit="contain" imgClassName="p-1 object-center" imgSrc="/assets/images/micro_segmented.png" active={currentStep >= 2} label="Micro-Segmented" subLabel="Attacker Moves..." size="medium" color="sky" />
        </div>
      </div>
    );
  };

// Q49 Visual
const Q49Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/user_request.png" active={currentStep >= 0} label="Action Occurs" subLabel="User Attempts..." size="medium" color="blue" />
      <Arrow active={currentStep >= 1} color="blue" />
      <GIcon imgSrc="/assets/images/abac_time_clock_1790829568155.png" active={currentStep >= 1} label="Event Logged" subLabel="" size="medium" color="blue" />
      <Arrow active={currentStep >= 2} color="blue" />
      <GIcon imgSrc="/assets/images/project_app.png" active={currentStep >= 2} label="SIEM Alert" subLabel="Security Team..." size="medium" color="blue" />
      </div>
    </div>
  );
};

// Q50 Visual
const Q50Visual = ({ currentStep, isMobile }: any) => {
  return (
    <div className="w-full h-full overflow-x-auto custom-scrollbar pb-4">
      <div className="flex flex-row flex-nowrap items-center justify-center min-w-max w-full h-full px-4 lg:px-8 py-4 gap-2 lg:gap-4">
      <GIcon imgSrc="/assets/images/account_created.png" active={currentStep >= 0} label="Identity" subLabel="Who Are..." size="small" color="indigo" />
      <Arrow active={currentStep >= 1} color="indigo" />
      <GIcon imgSrc="/assets/images/q23_access_decision_1790853477929.png" active={currentStep >= 1} label="MFA" subLabel="Prove It..." size="small" color="indigo" />
      <Arrow active={currentStep >= 2} color="indigo" />
      <GIcon imgSrc="/assets/images/employee_laptop.png" active={currentStep >= 2} label="Device Posture" subLabel="Is Your..." size="small" color="indigo" />
      <Arrow active={currentStep >= 3} color="indigo" />
      <GIcon imgSrc="/assets/images/location_attribute.png" active={currentStep >= 3} label="Context" subLabel="Where And..." size="small" color="indigo" />
      <Arrow active={currentStep >= 4} color="indigo" />
      <GIcon imgSrc="/assets/images/policy_engine.png" active={currentStep >= 4} label="Policy Engine" subLabel="Evaluate All..." size="small" color="indigo" />
      <Arrow active={currentStep >= 5} color="indigo" />
      <GIcon imgSrc="/assets/images/account_active.png" active={currentStep >= 5} label="Access Decision" subLabel="Allow Or..." size="small" color="indigo" />
      </div>
    </div>
  );
};

export const CustomVisual = ({ layout, currentStep, isMobile }: any) => {
  switch (layout) {
    case "q1": return <Q1Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q2": return <Q2Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q3": return <Q3Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q4": return <Q4Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q5": return <Q5Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q6": return <Q6Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q7": return <Q7Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q8": return <Q8Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q9": return <Q9Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q10": return <Q10Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q11": return <Q11Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q12": return <Q12Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q13": return <Q13Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q14": return <Q14Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q15": return <Q15Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q16": return <Q16Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q17": return <Q17Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q18": return <Q18Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q19": return <Q19Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q20": return <Q20Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q21": return <Q21Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q22": return <Q22Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q23": return <Q23Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q24": return <Q24Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q25": return <Q25Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q26": return <Q26Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q27": return <Q27Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q28": return <Q28Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q29": return <Q29Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q30": return <Q30Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q31": return <Q31Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q32": return <Q32Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q33": return <Q33Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q34": return <Q34Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q35": return <Q35Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q36": return <Q36Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q37": return <Q37Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q38": return <Q38Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q39": return <Q39Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q40": return <Q40Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q41": return <Q41Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q42": return <Q42Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q43": return <Q43Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q44": return <Q44Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q45": return <Q45Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q46": return <Q46Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q47": return <Q47Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q48": return <Q48Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q49": return <Q49Visual currentStep={currentStep} isMobile={isMobile} />;
    case "q50": return <Q50Visual currentStep={currentStep} isMobile={isMobile} />;
    default: return <Q1Visual currentStep={currentStep} isMobile={isMobile} />;
  }
};
