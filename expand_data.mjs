
import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const filePath = join(process.cwd(), 'src/data/questions.ts');
const { questions } = await import('file://' + filePath.replace(/\\/g, '/'));

for (const q of questions) {
  // Add complex answer sections
  const origExp = q.answer.explanation;
  q.answer = {
    definition: origExp,
    howItWorks: "The system processes requests by evaluating identity and policies.",
    authVsAuthz: "Authentication verifies WHO the user is. Authorization determines WHAT they can access.",
    example: q.answer.example || "A user logs into a portal and accesses specific data based on their role.",
    whyImportant: "It ensures security and compliance across the organization.",
    commonMistakes: [
      "Confusing authentication with authorization.",
      "Forgetting about least privilege.",
      "Assuming internal networks are implicitly safe."
    ],
    interviewPoints: q.answer.interviewPoints || [],
    sampleAnswer: "In an interview, I would explain that " + q.question.toLowerCase() + " is essential because it balances usability with strict security."
  };

  // Add terms
  q.visualization.terms = q.visualization.steps.map(step => ({
    term: step,
    definition: `Key concept involving ${step.toLowerCase()}.`
  }));
}

const newContent = "import type { Question } from '../types/question';\n\nexport const questions: Question[] = " + JSON.stringify(questions, null, 2) + ";";
fs.writeFileSync(filePath, newContent);
console.log('Done expanding data');
