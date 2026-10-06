import fs from 'fs';

let content = fs.readFileSync('src/data/questions.ts', 'utf8');

const mappings = {
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

for (const [id, layout] of Object.entries(mappings)) {
  const regexStr = '"id": ' + id + ',[\\\\s\\\\S]*?"visualization":\\\\s*{[\\\\s\\\\S]*?"layout":\\\\s*"linear"';
  const regex = new RegExp(regexStr);
  content = content.replace(regex, match => match.replace('"layout": "linear"', '"layout": "' + layout + '"'));
}

fs.writeFileSync('src/data/questions.ts', content);
console.log('Updated questions 11-20');
