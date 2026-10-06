import fs from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), 'src/data/questions.ts');

const script = `
import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const filePath = join(process.cwd(), 'src/data/questions.ts');
const { questions } = await import('file://' + filePath.replace(/\\\\/g, '/'));

// Manually map each question to a specific unique layout type
const layoutMap = {
  1: 'linear',
  2: 'stages',
  3: 'linear', // auth
  4: 'branching', // authorization
  5: 'converging-linear', // mfa
  6: 'one-to-many', // sso
  7: 'many-to-many', // rbac
  8: 'converging', // abac
  9: 'comparison', // least privilege
  10: 'linear', // zero trust
  11: 'one-to-many', // idp
  12: 'loop', // saml
  13: 'loop', // oauth
  14: 'loop', // oidc
  15: 'timer', // pam
  16: 'timer', // jit
  17: 'converging-branching', // conditional access
  18: 'timeline', // lifecycle
  19: 'linear', // device posture
  20: 'tree' // troubleshooting
};

for (const q of questions) {
  q.visualization.layout = layoutMap[q.id] || 'linear';
  // Adjust inputs/outputs for branching
  if (q.id === 4) {
    q.visualization.steps = ['Authenticated User', 'Role / Permissions', 'Policy Decision', 'Resource'];
    q.visualization.outputs = ['ALLOW', 'DENY'];
  }
  if (q.id === 5) {
    q.visualization.inputs = ['Password', 'Authenticator App', 'Security Key'];
    q.visualization.steps = ['MFA Verification', 'Access Granted'];
  }
  if (q.id === 6 || q.id === 11) {
    q.visualization.steps = ['User', 'Identity Provider', 'Authentication', 'Identity Token'];
    q.visualization.outputs = ['Gmail', 'HR App', 'Cloud App'];
  }
  if (q.id === 7) {
    q.visualization.inputs = ['Alice', 'Bob', 'John'];
    q.visualization.steps = ['Developer Role', 'Permissions', 'Git Repository'];
  }
  if (q.id === 9) {
    q.visualization.inputs = ['Admin Access', 'Delete', 'Modify', 'Read'];
    q.visualization.steps = ['Minimum required permission', 'Resource Access'];
  }
  if (q.id === 12 || q.id === 13 || q.id === 14) {
    q.visualization.steps = ['User', 'Service Provider', 'Identity Provider', 'Authentication', 'Assertion / Token'];
  }
  if (q.id === 15 || q.id === 16) {
    q.visualization.steps = ['Request', 'Approval', 'Temporary Access', 'Time Expires', 'Access Removed'];
  }
  if (q.id === 17) {
    q.visualization.inputs = ['User', 'Device', 'Location', 'Application', 'Risk'];
    q.visualization.steps = ['Conditional Access Policy'];
    q.visualization.outputs = ['ALLOW', 'REQUIRE MFA', 'DENY'];
  }
  if (q.id === 18) {
    q.visualization.steps = ['JOINER', 'Identity Created', 'Role Assigned', 'ROLE CHANGE', 'Access Updated', 'LEAVER', 'Access Revoked'];
  }
  if (q.id === 20) {
    q.visualization.steps = ['Authentication (SUCCESS)', 'Authorization (DENIED)', 'Investigate'];
    q.visualization.outputs = ['Role', 'Permissions', 'Policy', 'Device', 'Location', 'Risk'];
  }
}

const newContent = "import type { Question } from '../types/question';\\n\\nexport const questions: Question[] = " + JSON.stringify(questions, null, 2) + ";";
fs.writeFileSync(filePath, newContent);
console.log('Done mapping layouts');
`;

fs.writeFileSync(join(process.cwd(), 'map_layouts.mjs'), script);
console.log('Script written');
