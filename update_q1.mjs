import fs from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), 'src/data/questions.ts');
import( 'file://' + filePath.replace(/\\\\/g, '/') ).then(({ questions }) => {
  const q = questions.find(q => q.id === 1);
  if (q) {
    q.visualization.steps = [
      "User Request",
      "Identity Verification",
      "Authentication",
      "Access Control Evaluation",
      "Resource Access"
    ];
    q.visualization.stepExplanations = [
      "The user initiates a request to access a protected application or resource from their managed device.",
      "The Identity Provider receives the access request and identifies the user. It verifies that the user exists, the account is active, and the identity information is valid.",
      "The system verifies the user's credentials and performs MFA before allowing the request to continue.",
      "The Policy Engine evaluates the authorization policies linked to the verified identity to determine permissions.",
      "Access is securely granted to the requested resource if conditions are met."
    ];
    q.visualization.terms = [
      { term: 'Identity Provider (IdP)', definition: 'Verifies and manages digital identities.' },
      { term: 'Identity Verification', definition: 'Checks that the user exists and the account is valid.' },
      { term: 'Authentication', definition: 'Verifies that the user is who they claim to be using credentials.' },
      { term: 'MFA', definition: 'Uses multiple authentication factors to strengthen identity verification.' },
      { term: 'Policy Engine', definition: 'Evaluates rules to decide if access should be allowed.' },
      { term: 'RBAC', definition: 'Role-Based Access Control assigns permissions based on user roles.' }
    ];
    fs.writeFileSync(filePath, "import type { Question } from '../types/question';\n\nexport const questions: Question[] = " + JSON.stringify(questions, null, 2) + ";");
    console.log('Q1 updated');
  }
});
