import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const filePath = join(process.cwd(), 'src/data/questions.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// I will use regex or AST to inject the practice object, but since I generated it, I know exactly what it looks like.
// It's a JS file exporting an array. Let's execute it to get the object, modify it, and write it back.

const { questions } = await import('file://' + filePath.replace(/\\/g, '/'));

for (const q of questions) {
  if (!q.practice) {
    q.practice = {
      scenario: `An employee is attempting to access a critical system related to ${q.category}.`,
      question: `What would you check first when troubleshooting this ${q.category.toLowerCase()} issue?`,
      options: [
        "Verify network connectivity.",
        "Check the system logs for authentication failures.",
        "Review the assigned IAM policies.",
        "Restart the identity provider service."
      ],
      correctAnswer: 2,
      explanation: `When dealing with ${q.question}, the most common root cause is a misconfigured or missing IAM policy. Always verify the policies before assuming a deeper systemic failure.`
    };
    
    if (q.id === 1) {
      q.practice.scenario = "An employee can successfully sign in to the company's identity provider but receives 'Access Denied' when opening the Finance application.";
      q.practice.question = "What would you check first?";
      q.practice.options = [
        "Ask the user to reset their password.",
        "Verify if the user is assigned the correct role/group for the Finance app.",
        "Restart the Finance application server.",
        "Check if the employee's laptop is connected to the VPN."
      ];
      q.practice.correctAnswer = 1;
      q.practice.explanation = "Since the user can authenticate (sign in to the IdP), the issue is Authorization. You should check if they have the correct permissions (roles/groups) assigned for that specific application.";
    }
  }
}

// Convert back to string
const newContent = `import type { Question } from '../types/question';\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};`;
fs.writeFileSync(filePath, newContent);
console.log('Done updating questions.ts');
