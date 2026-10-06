import fs from 'fs';
let content = fs.readFileSync('src/data/questions.ts', 'utf8');

const targetLayouts = {
  11: 'q11-never-trust',
  12: 'q12-idp',
  13: 'q13-saml',
  14: 'q14-oauth',
  15: 'q15-oidc',
  16: 'q16-pam',
  17: 'q17-jit',
  18: 'q18-device-posture',
  19: 'q19-lifecycle',
  20: 'q20-troubleshooting'
};

for (const [id, layout] of Object.entries(targetLayouts)) {
  const regex = new RegExp(`(\\"id\\"\\s*:\\s*${id}[\\s\\S]*?\\"layout\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
  content = content.replace(regex, `$1${layout}$2`);
}
fs.writeFileSync('src/data/questions.ts', content);
console.log('Layouts fixed in questions.ts');
