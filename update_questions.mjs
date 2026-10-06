import fs from 'fs';

let content = fs.readFileSync('src/data/questions.ts', 'utf8');

// Update Q5
content = content.replace(
  /"id": 5,[\s\S]*?"visualization":\s*{[\s\S]*?"layout":\s*"linear"/,
  match => match.replace('"layout": "linear"', '"layout": "q5-mfa"')
);

// Update Q6
content = content.replace(
  /"id": 6,[\s\S]*?"visualization":\s*{[\s\S]*?"layout":\s*"linear"/,
  match => match.replace('"layout": "linear"', '"layout": "q6-sso"')
);

// Update Q7
content = content.replace(
  /"id": 7,[\s\S]*?"visualization":\s*{[\s\S]*?"layout":\s*"linear"/,
  match => match.replace('"layout": "linear"', '"layout": "q7-rbac"')
);

// Q8
content = content.replace(
  /"id": 8,[\s\S]*?"visualization":\s*{[\s\S]*?"layout":\s*"linear"/,
  match => match.replace('"layout": "linear"', '"layout": "q8-abac"')
);

// Q9
content = content.replace(
  /"id": 9,[\s\S]*?"visualization":\s*{[\s\S]*?"layout":\s*"linear"/,
  match => match.replace('"layout": "linear"', '"layout": "q9-least-privilege"')
);

// Q10
content = content.replace(
  /"id": 10,[\s\S]*?"visualization":\s*{[\s\S]*?"layout":\s*"linear"/,
  match => match.replace('"layout": "linear"', '"layout": "q10-zero-trust"')
);

fs.writeFileSync('src/data/questions.ts', content);
console.log('Updated questions.ts');
