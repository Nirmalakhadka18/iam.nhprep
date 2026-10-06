import fs from 'fs';
import { join } from 'path';

const fileContent = fs.readFileSync(join(process.cwd(), 'src/data/questions.ts'), 'utf-8');

// A very naive but robust string replacement to inject stepExplanations and ensure visualization exists.
// We'll use regex to parse and rebuild the file. Actually, a simpler way is to evaluate it as JS, map it, and write it back.

const match = fileContent.match(/export const questions: Question\[\] = (\[[\s\S]*\]);/);
if (match) {
  let questions;
  try {
    // using Function to evaluate the array literal
    questions = new Function('return ' + match[1].replace(/import type \{ Question \} from '\.\.\/types\/question';/, ''))();
  } catch(e) {
    console.error("Failed to parse array", e);
    process.exit(1);
  }

  questions = questions.map(q => {
    if (!q.visualization || q.visualization.type === 'none') {
      // Create a default visualization
      q.visualization = {
        type: 'steps',
        steps: ['Request', 'Verification', 'Decision', 'Access'],
      };
    }
    
    // Create step explanations based on the steps
    q.visualization.stepExplanations = q.visualization.steps.map((step, index) => {
      return `During the '${step}' phase, the system processes the request to ensure security policies are met. This is step ${index + 1} of the overall process.`;
    });

    // Make some specific ones better if they exist
    if (q.id === 1) {
      q.visualization.stepExplanations = [
        "The user initiates an access request to a protected resource.",
        "The identity system verifies the user's identity attributes.",
        "The authentication layer confirms the identity (e.g., via password + MFA).",
        "The authorization policy evaluates what the user is allowed to do.",
        "Access is granted if all required conditions are satisfied."
      ];
    } else if (q.id === 3) {
      q.visualization.stepExplanations = [
        "The user arrives at the application.",
        "The user provides their username and password.",
        "The system authenticates the user's basic credentials.",
        "A Multi-Factor Authentication challenge is completed.",
        "The system checks the user's authorization level.",
        "The requested resource is finally served to the authorized user."
      ];
    }

    return q;
  });

  const newContent = `import type { Question } from '../types/question';\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(join(process.cwd(), 'src/data/questions.ts'), newContent);
  console.log("Updated questions.ts successfully.");
} else {
  console.log("Could not find the array match.");
}
