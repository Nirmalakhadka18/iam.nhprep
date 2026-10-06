import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = join(__dirname, 'src/data/questions.ts');

const content = fs.readFileSync(filePath, 'utf8');

// We will use a robust replacement for the id: 3 block.
const id3Regex = /\{\s*"id":\s*3\s*,[\s\S]*?(?=\{\s*"id":\s*4\s*,)/;
const match = content.match(id3Regex);

if (match) {
  let q3Str = match[0];
  
  // Replace subtitle
  q3Str = q3Str.replace(
    /"subtitle": ".*?",/,
    `"subtitle": "Understand how authentication verifies a user's identity using credentials or other factors.",`
  );

  // Replace definition -> shortAnswer text
  q3Str = q3Str.replace(
    /"definition": ".*?",/g,
    `"definition": "Authentication is the process of verifying the identity of a user, device, or system before allowing access. It commonly uses credentials such as passwords and may use additional factors such as OTPs, security keys, or biometrics.",`
  );

  // Replace example -> real-world example
  q3Str = q3Str.replace(
    /"example": ".*?",/g,
    `"example": "An employee enters their username and password. The system verifies the credentials and then requests an MFA code. After successful verification, the user receives an authenticated session.",`
  );
  
  // Replace interviewPoints
  q3Str = q3Str.replace(
    /"interviewPoints": \[[\s\S]*?\],/g,
    `"interviewPoints": [
        "Authentication answers one important question: 'Can you prove that you are who you claim to be?'",
        "Passwords, OTPs, security keys and biometrics can all be used as authentication factors."
      ],`
  );
  
  // Replace sampleAnswer (Interview tip)
  q3Str = q3Str.replace(
    /"sampleAnswer": ".*?"/g,
    `"sampleAnswer": "Authentication verifies WHO you are. Authorization determines WHAT you are allowed to do."`
  );
  
  // Replace visualization config
  q3Str = q3Str.replace(
    /"visualization": \{[\s\S]*?\},/g,
    `"visualization": {
      "type": "auth-stages",
      "steps": [
        "Enter Credentials",
        "Verify Credentials",
        "MFA Verification",
        "Authenticated"
      ],
      "stepExplanations": [
        "Authentication is the process of verifying that a user is really who they claim to be. The system checks credentials such as a password and may require additional factors such as an OTP or biometric verification.",
        "Authentication is the process of verifying that a user is really who they claim to be. The system checks credentials such as a password and may require additional factors such as an OTP or biometric verification.",
        "Authentication is the process of verifying that a user is really who they claim to be. The system checks credentials such as a password and may require additional factors such as an OTP or biometric verification.",
        "Authentication is the process of verifying that a user is really who they claim to be. The system checks credentials such as a password and may require additional factors such as an OTP or biometric verification."
      ],
      "terms": [
        { "term": "Credentials", "definition": "Information used to prove identity, such as a username and password." },
        { "term": "MFA", "definition": "An additional verification factor used to strengthen authentication." },
        { "term": "Authenticated Session", "definition": "A session created after successful identity verification." },
        { "term": "Authenticated Session", "definition": "A session created after successful identity verification." }
      ],
      "layout": "auth-stages"
    },`
  );

  // Replace Practice scenario
  q3Str = q3Str.replace(
    /"scenario": ".*?",/g,
    `"scenario": "Alex enters his company username and password and then approves an MFA request on his phone. The system confirms his identity and creates a secure session.",`
  );
  
  // Replace Practice question
  q3Str = q3Str.replace(
    /"question": ".*?",/g,
    `"question": "Which security process is being performed?",`
  );
  
  // Replace Practice options
  q3Str = q3Str.replace(
    /"options": \[[\s\S]*?\],/g,
    `"options": [
        "Authorization",
        "Authentication",
        "Accounting",
        "Network segmentation"
      ],`
  );
  
  // Replace Practice correctAnswer
  q3Str = q3Str.replace(
    /"correctAnswer": \d+,/g,
    `"correctAnswer": 1,`
  );

  // Replace Practice explanation
  q3Str = q3Str.replace(
    /"explanation": ".*?"\s*\}/g,
    `"explanation": "Authentication verifies that Alex is really the person he claims to be. The password and MFA approval provide evidence of his identity."
    }`
  );
  
  const newContent = content.replace(id3Regex, q3Str);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Successfully updated questions.ts for Q3");
} else {
  console.log("Could not find Question 3");
}
