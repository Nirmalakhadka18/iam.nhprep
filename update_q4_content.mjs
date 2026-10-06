import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = join(__dirname, 'src/data/questions.ts');

const content = fs.readFileSync(filePath, 'utf8');

const id4Regex = /\{\s*"id":\s*4\s*,[\s\S]*?(?=\{\s*"id":\s*5\s*,)/;
const match = content.match(id4Regex);

if (match) {
  let q4Str = match[0];
  
  // Update interviewPoints
  q4Str = q4Str.replace(
    /"interviewPoints": \[[\s\S]*?\],/g,
    `"interviewPoints": [
        "Authentication verifies who you are. Authorization determines what you are allowed to access."
      ],`
  );
  
  // Update visualization
  q4Str = q4Str.replace(
    /"visualization": \{[\s\S]*?"layout": ".*?"[\s\S]*?\],?.*?\}/g,
    `"visualization": {
      "type": "authz-stages",
      "steps": [
        "Authenticated User",
        "Role / Identity",
        "Policy Engine",
        "Access Decision",
        "Resources"
      ],
      "stepExplanations": [
        "Authorization determines what an authenticated user is allowed to access. The system evaluates the user’s role, permissions, and policies before granting or denying access.",
        "Authorization determines what an authenticated user is allowed to access. The system evaluates the user’s role, permissions, and policies before granting or denying access.",
        "Authorization determines what an authenticated user is allowed to access. The system evaluates the user’s role, permissions, and policies before granting or denying access.",
        "Authorization determines what an authenticated user is allowed to access. The system evaluates the user’s role, permissions, and policies before granting or denying access.",
        "Authorization determines what an authenticated user is allowed to access. The system evaluates the user’s role, permissions, and policies before granting or denying access."
      ],
      "terms": [
        { "term": "Role", "definition": "Defines the user's responsibilities." },
        { "term": "Permission", "definition": "Defines what actions the user can perform." },
        { "term": "Policy", "definition": "Defines the rules for access." },
        { "term": "Least Privilege", "definition": "Gives only the access required." },
        { "term": "Least Privilege", "definition": "Gives only the access required." }
      ],
      "layout": "authz-stages"
    }`
  );

  const newContent = content.replace(id4Regex, q4Str);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Successfully updated questions.ts for Q4");
} else {
  console.log("Could not find Question 4");
}
