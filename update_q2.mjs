import fs from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), 'src/data/questions.ts');
import( 'file://' + filePath.replace(/\\\\/g, '/') ).then(({ questions }) => {
  const q = questions.find(q => q.id === 2);
  if (q) {
    q.visualization.steps = ['Identity', 'Authentication', 'Authorization', 'Access Decision'];
    q.visualization.layout = 'stages';
    q.visualization.stepExplanations = [
      "Identity represents the user or account requesting access. It tells the system who the user claims to be, such as their name, employee ID, email address and role.",
      "Authentication verifies the identity. The system asks the user to prove they are who they claim to be using credentials like passwords and MFA.",
      "Authorization determines what the authenticated user is allowed to do. The system checks roles and permissions against access policies.",
      "The Access Decision is the final outcome where the system grants or denies access to the requested resource based on the authorization rules."
    ];
    q.visualization.terms = [
      { term: 'Identity', definition: 'The digital representation of a user in the system.' },
      { term: 'User Account', definition: 'An account that contains identity information.' },
      { term: 'Authentication', definition: 'The process of verifying who a user is.' },
      { term: 'MFA', definition: 'Multi-Factor Authentication requires two or more proofs of identity.' },
      { term: 'Authorization', definition: 'The process of verifying what a user is allowed to access.' },
      { term: 'Permissions', definition: 'Specific rights granted to a user or role.' },
      { term: 'Access Decision', definition: 'The final outcome of the IAM process (Allow or Deny).' },
      { term: 'Protected Resource', definition: 'The system or data the user is trying to access.' }
    ];
    fs.writeFileSync(filePath, "import type { Question } from '../types/question';\\n\\nexport const questions: Question[] = " + JSON.stringify(questions, null, 2) + ";");
    console.log('Q2 updated');
  }
});
