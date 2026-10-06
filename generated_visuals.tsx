
// --- PROCEDURALLY GENERATED VISUALS FOR Q21-Q49 ---

const Q21Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["User Request","Evaluate Needs","Grant Minimum Access"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="User Request" size="small" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Evaluate Needs" size="small" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Grant Minimum Access" size="small" color="red" />
    </div>
  );
};

const Q22Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["User","Role Assignment","Permissions"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="User" size="medium" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" />
      </div>
      <GIcon active={currentStep >= 1} label="Role Assignment" size="medium" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" />
      </div>
      <GIcon active={currentStep >= 2} label="Permissions" size="medium" color="red" />
    </div>
  );
};

const Q24Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["RBAC Approach","ABAC Approach","Comparison"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="RBAC Approach" size="small" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" />
      </div>
      <GIcon active={currentStep >= 1} label="ABAC Approach" size="small" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" />
      </div>
      <GIcon active={currentStep >= 2} label="Comparison" size="small" color="blue" />
    </div>
  );
};

const Q25Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Joiner","Mover","Leaver"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Joiner" size="medium" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Mover" size="medium" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Leaver" size="medium" color="blue" />
    </div>
  );
};

const Q26Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["HR Trigger","Account Creation","Access Granted"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="HR Trigger" size="large" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" />
      </div>
      <GIcon active={currentStep >= 1} label="Account Creation" size="large" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" />
      </div>
      <GIcon active={currentStep >= 2} label="Access Granted" size="large" color="blue" />
    </div>
  );
};

const Q27Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Termination Event","Disable Identity","Revoke Sessions"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="Termination Event" size="small" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Disable Identity" size="small" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Revoke Sessions" size="small" color="blue" />
    </div>
  );
};

const Q28Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Generate Report","Manager Review","Action Taken"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Generate Report" size="medium" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" />
      </div>
      <GIcon active={currentStep >= 1} label="Manager Review" size="medium" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" />
      </div>
      <GIcon active={currentStep >= 2} label="Action Taken" size="medium" color="green" />
    </div>
  );
};

const Q29Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Define Policies","Enforce Rules","Audit & Report"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Define Policies" size="large" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Enforce Rules" size="large" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Audit & Report" size="large" color="green" />
    </div>
  );
};

const Q30Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Request Phase","Approval Phase","Execution Phase"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Request Phase" size="small" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" />
      </div>
      <GIcon active={currentStep >= 1} label="Approval Phase" size="small" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" />
      </div>
      <GIcon active={currentStep >= 2} label="Execution Phase" size="small" color="green" />
    </div>
  );
};

const Q31Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Standard User","Admin Role","System Control"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Standard User" size="medium" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Admin Role" size="medium" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="System Control" size="medium" color="green" />
    </div>
  );
};

const Q32Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Admin Request","PAM Vault Approval","Temporary Session"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="Admin Request" size="large" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" />
      </div>
      <GIcon active={currentStep >= 1} label="PAM Vault Approval" size="large" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" />
      </div>
      <GIcon active={currentStep >= 2} label="Temporary Session" size="large" color="red" />
    </div>
  );
};

const Q33Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["No Access","JIT Elevation","Access Revoked"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="No Access" size="small" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="JIT Elevation" size="small" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Access Revoked" size="small" color="red" />
    </div>
  );
};

const Q34Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Admin Request","Filter Permissions","Constrained Access"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Admin Request" size="medium" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" />
      </div>
      <GIcon active={currentStep >= 1} label="Filter Permissions" size="medium" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" />
      </div>
      <GIcon active={currentStep >= 2} label="Constrained Access" size="medium" color="red" />
    </div>
  );
};

const Q35Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Identify Privileged Accounts","Secure with PAM","Monitor Activity"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Identify Privileged Accounts" size="large" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Secure with PAM" size="large" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Monitor Activity" size="large" color="red" />
    </div>
  );
};

const Q36Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["User Auth","Federation Trust","External Access"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="User Auth" size="small" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" />
      </div>
      <GIcon active={currentStep >= 1} label="Federation Trust" size="small" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" />
      </div>
      <GIcon active={currentStep >= 2} label="External Access" size="small" color="blue" />
    </div>
  );
};

const Q37Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Request","Redirect","Auth","Assertion"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Request" size="medium" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Redirect" size="medium" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Auth" size="medium" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 3} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 3} label="Assertion" size="medium" color="blue" />
    </div>
  );
};

const Q38Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["User Consent","Issue Token","API Access"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="User Consent" size="large" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" />
      </div>
      <GIcon active={currentStep >= 1} label="Issue Token" size="large" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" />
      </div>
      <GIcon active={currentStep >= 2} label="API Access" size="large" color="blue" />
    </div>
  );
};

const Q39Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Receive Token","API Request","Validation"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="Receive Token" size="small" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="API Request" size="small" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Validation" size="small" color="blue" />
    </div>
  );
};

const Q40Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Auth Request","Tokens Issued","Identity Verified"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Auth Request" size="medium" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" />
      </div>
      <GIcon active={currentStep >= 1} label="Tokens Issued" size="medium" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" />
      </div>
      <GIcon active={currentStep >= 2} label="Identity Verified" size="medium" color="green" />
    </div>
  );
};

const Q41Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Receive ID Token","Decode JWT","Read Claims"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Receive ID Token" size="large" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Decode JWT" size="large" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Read Claims" size="large" color="green" />
    </div>
  );
};

const Q42Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Login to IdP","Access App A","Access App B"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Login to IdP" size="small" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" />
      </div>
      <GIcon active={currentStep >= 1} label="Access App A" size="small" color="green" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" />
      </div>
      <GIcon active={currentStep >= 2} label="Access App B" size="small" color="green" />
    </div>
  );
};

const Q43Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Assess Context","Low Risk","High Risk"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Assess Context" size="medium" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Low Risk" size="medium" color="green" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="green" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="High Risk" size="medium" color="green" />
    </div>
  );
};

const Q44Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Gather Signals","Calculate Score","Enforce Policy"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="Gather Signals" size="large" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" />
      </div>
      <GIcon active={currentStep >= 1} label="Calculate Score" size="large" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" />
      </div>
      <GIcon active={currentStep >= 2} label="Enforce Policy" size="large" color="red" />
    </div>
  );
};

const Q45Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Condition 1","Condition 2","Decision"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-8">
      <GIcon active={currentStep >= 0} label="Condition 1" size="small" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Condition 2" size="small" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Decision" size="small" color="red" />
    </div>
  );
};

const Q46Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Device Connects","Posture Check","Access Decision"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Device Connects" size="medium" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" />
      </div>
      <GIcon active={currentStep >= 1} label="Posture Check" size="medium" color="red" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" />
      </div>
      <GIcon active={currentStep >= 2} label="Access Decision" size="medium" color="red" />
    </div>
  );
};

const Q47Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Initial Login","Session Active","Threat Detected","Session Terminated"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-12">
      <GIcon active={currentStep >= 0} label="Initial Login" size="large" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Session Active" size="large" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="Threat Detected" size="large" color="red" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 3} color="red" vertical={true} />
      </div>
      <GIcon active={currentStep >= 3} label="Session Terminated" size="large" color="red" />
    </div>
  );
};

const Q48Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Flat Network","Breach","Micro-Segmented"];
  return (
    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Flat Network" size="small" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" />
      </div>
      <GIcon active={currentStep >= 1} label="Breach" size="small" color="blue" />
      <div className="w-8 lg:w-16 h-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" />
      </div>
      <GIcon active={currentStep >= 2} label="Micro-Segmented" size="small" color="blue" />
    </div>
  );
};

const Q49Visual = ({ currentStep, isMobile }: any) => {
  const steps = ["Action Occurs","Event Logged","SIEM Alert"];
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center p-4 lg:p-8 gap-4">
      <GIcon active={currentStep >= 0} label="Action Occurs" size="medium" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 1} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 1} label="Event Logged" size="medium" color="blue" />
      <div className="h-8 lg:h-12 w-1 bg-slate-200 relative shrink-0">
        <Packet active={currentStep >= 2} color="blue" vertical={true} />
      </div>
      <GIcon active={currentStep >= 2} label="SIEM Alert" size="medium" color="blue" />
    </div>
  );
};
