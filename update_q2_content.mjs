import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = join(__dirname, 'src/data/questions.ts');

const content = fs.readFileSync(filePath, 'utf8');

// We will use a robust replacement for the id: 2 block.
const id2Regex = /\{\s*"id":\s*2\s*,[\s\S]*?(?=\{\s*"id":\s*3\s*,)/;
const match = content.match(id2Regex);

if (match) {
  let q2Str = match[0];
  
  // Replace definition -> shortAnswer text
  q2Str = q2Str.replace(
    /"definition": ".*?",/g,
    `"definition": "Identity identifies the user. Authentication verifies the user's identity using credentials or other factors. Authorization determines what that authenticated user is permitted to access or perform.",`
  );

  // Replace example -> real-world example
  q2Str = q2Str.replace(
    /"example": ".*?",/g,
    `"example": "An employee's identity is stored in the company's directory. When they sign in, authentication verifies their password and MFA. After successful authentication, authorization checks their role and permissions before allowing access to HR records.",`
  );
  
  // Replace interviewPoints
  q2Str = q2Str.replace(
    /"interviewPoints": \[[\s\S]*?\],/g,
    `"interviewPoints": [
        "Identity answers WHO you are.",
        "Authentication answers CAN YOU PROVE IT?",
        "Authorization answers WHAT ARE YOU ALLOWED TO DO?"
      ],`
  );
  
  // Replace sampleAnswer (can be used for interview tip)
  q2Str = q2Str.replace(
    /"sampleAnswer": ".*?"/g,
    `"sampleAnswer": "Do not confuse authentication with authorization."`
  );
  
  // Replace Practice scenario
  q2Str = q2Str.replace(
    /"scenario": ".*?",/g,
    `"scenario": "Alex successfully logs into the HR application using a password and MFA. He can view employee records but receives an access denied message when trying to delete payroll data.",`
  );
  
  // Replace Practice question
  q2Str = q2Str.replace(
    /"question": "What would you check first when troubleshooting this concepts issue\?",/g,
    `"question": "Which concept determines whether Alex can delete payroll data?",`
  );
  
  // Replace Practice options
  q2Str = q2Str.replace(
    /"options": \[[\s\S]*?\],/g,
    `"options": [
        "Identity",
        "Authentication",
        "Authorization",
        "Identification"
      ],`
  );
  
  // Replace Practice explanation
  q2Str = q2Str.replace(
    /"explanation": ".*?"\s*\}/g,
    `"explanation": "Alex has already been authenticated. The authorization policy determines which actions his HR role is permitted to perform."
    }`
  );
  
  const newContent = content.replace(id2Regex, q2Str);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Successfully updated questions.ts");
} else {
  console.log("Could not find Question 2");
}
