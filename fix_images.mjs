import fs from 'fs';

let c = fs.readFileSync('src/components/visualizations/CustomVisuals.tsx', 'utf8');

// 1. Move Q_STEP_IMAGES out
const qStepMatch = c.match(/const Q_STEP_IMAGES: Record<number, string\[\]> = \{[\s\S]*?^\s*\};\n/m);
if (qStepMatch) {
  c = c.replace(qStepMatch[0], '');
  // Insert after imports
  c = c.replace('export const VisualContext', qStepMatch[0] + '\nexport const VisualContext');
}

// 2. Move getImg out and make it accept questionId
const getImgMatch = c.match(/\s*const getImg = \(index: number, fallbackText: string\) => \{[\s\S]*?^\s*\};\n/m);
if (getImgMatch) {
  c = c.replace(getImgMatch[0], '');
  // Insert updated getImg
  const updatedGetImg = `
const getImg = (index: number, fallbackText: string, qId?: number) => {
  if (qId && Q_STEP_IMAGES[qId]) {
    const imgs = Q_STEP_IMAGES[qId];
    return '/assets/images/' + imgs[index % imgs.length];
  }
  const t = fallbackText.toLowerCase();
  if (t.includes('user') || t.includes('employee') || t.includes('joiner') || t.includes('hr')) return '/assets/images/user_attribute.png';
  if (t.includes('device') || t.includes('laptop')) return '/assets/images/employee_laptop.png';
  if (t.includes('policy') || t.includes('engine') || t.includes('rule')) return '/assets/images/policy_engine.png';
  if (t.includes('database') || t.includes('record')) return '/assets/images/database.png';
  if (t.includes('server') || t.includes('system')) return '/assets/images/server_resource.png';
  if (t.includes('password') || t.includes('login')) return '/assets/images/auth_password.png';
  if (t.includes('mfa') || t.includes('phone')) return '/assets/images/mfa_phone.png';
  if (t.includes('role') || t.includes('rbac') || t.includes('manager')) return '/assets/images/rbac_roles.png';
  if (t.includes('granted') || t.includes('allow') || t.includes('creation') || t.includes('create')) return '/assets/images/account_created.png';
  if (t.includes('blocked') || t.includes('deny') || t.includes('revoke') || t.includes('termination') || t.includes('disable')) return '/assets/images/session_terminated.png';
  if (t.includes('session') || t.includes('active')) return '/assets/images/active_session.png';
  if (t.includes('shield') || t.includes('security')) return '/assets/images/security_shield.png';
  if (t.includes('audit') || t.includes('log') || t.includes('report') || t.includes('review')) return '/assets/images/access_review_report.png';
  const fallbacks = ['/assets/images/project_app.png', '/assets/images/id_badge.png', '/assets/images/internal_portal.png', '/assets/images/device_attribute.png'];
  return fallbacks[index % fallbacks.length];
};\n`;
  c = c.replace('export const VisualContext', updatedGetImg + '\nexport const VisualContext');
  
  // update DefaultVisual's usage of getImg (just add questionId)
  c = c.replace(/imgSrc=\{getImg\(idx, step\)\}/g, 'imgSrc={getImg(idx, step, questionId)}');
}

// 3. Patch generated components to use icon={Database} and imgSrc={getImg(idx, 'label', id)}
c = c.replace(/const Q(\d+)Visual = \(\{ currentStep, isMobile \}: any\) => \{[\s\S]*?return \([\s\S]*?\n\};\n/g, (match, idStr) => {
  if (idStr === '42') return match;

  const id = parseInt(idStr);
  let stepIdx = 0;
  return match.replace(/<GIcon active=\{currentStep >= \d+\} label="(.*?)"(.*?) \/>/g, (m, label, rest) => {
    const s = stepIdx++;
    return "<GIcon icon={Database} imgSrc={getImg(" + s + ", '" + label + "', " + id + ")} active={currentStep >= " + s + "} label='" + label + "'" + rest + " />";
  });
});

fs.writeFileSync('src/components/visualizations/CustomVisuals.tsx', c);
console.log('Done mapping global getImg and fixing missing icons!');
