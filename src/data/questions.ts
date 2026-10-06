import { Brain, Shield, Key, Fingerprint, Lock, Globe, Server, Database, Smartphone, User, Briefcase, FileCode, CheckCircle2, XCircle, AlertTriangle, Cpu, Network, Laptop, RefreshCw, KeyRound, MapPin, Tag, Clock } from 'lucide-react';
import { questions2 } from './questions2';

const questions1 = [
  {
    "id": 1,
    "difficulty": "easy",
    "question": "What is IAM (Identity and Access Management)?",
    "subtitle": "The framework that ensures the right people have the right access.",
    "category": "Concepts",
    "answer": {
      "definition": "IAM stands for Identity and Access Management. It is a system of processes and technologies used to manage digital identities and control who can access which resources.",
      "howItWorks": "IAM helps an organization manage users, identities, authentication, authorization, roles, permissions, and access policies. For example, when a new employee joins a company, IAM can help create their account, verify their identity, assign their role, and give them access to the applications they need. When the employee leaves the company, IAM can also help disable their account and remove their access.",
      "example": "Alex joins a company as a Developer. IAM can:\n1. Create Alex's identity\n2. Create his user account\n3. Enable authentication\n4. Enable MFA\n5. Assign the Developer role\n6. Give access to approved applications\n7. Remove access when Alex leaves",
      "whyImportant": "Without IAM, anyone could access sensitive company data, leading to data breaches and security failures.",
      "commonMistakes": [
        "Thinking IAM is only about passwords.",
        "Assuming IAM is only for humans (devices and applications have identities too).",
        "Confusing IAM with network security (firewalls)."
      ],
      "interviewPoints": [
        "IAM is about managing digital identities and access rights.",
        "It balances usability (easy login) with security (protecting data).",
        "Core pillars: Identity, Authentication, Authorization."
      ],
      "sampleAnswer": "IAM, or Identity and Access Management, is the process of managing digital identities and controlling access to organizational resources. It includes authentication, authorization, roles, permissions, and access policies."
    },
    "visualization": {
      "layout": "q1",
      "steps": [
        "Employee",
        "Identity",
        "Authentication",
        "Authorization",
        "Resource"
      ],
      "stepExplanations": [
        "A real-world employee needs access to systems.",
        "They are assigned a digital identity (username).",
        "They authenticate using a password and MFA.",
        "The system checks their authorization (permissions).",
        "They are granted access to the target resource."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A new engineer starts their first day and needs access to the company's code repository.",
      "question": "Which system is responsible for creating their account and assigning them the developer role?",
      "options": [
        "The company's Firewall",
        "The IAM System",
        "The Antivirus Software",
        "The Database Server"
      ],
      "correctAnswer": 1,
      "explanation": "The IAM system is responsible for managing the user's identity lifecycle, including creating their account and assigning them appropriate roles and permissions."
    }
  },
  {
    "id": 2,
    "difficulty": "easy",
    "question": "What is an Identity in IAM?",
    "subtitle": "The digital representation of a user or device.",
    "category": "Concepts",
    "answer": {
      "definition": "An identity is a digital representation of a person, device, application, or service that needs to be recognized and managed by an organization.",
      "howItWorks": "An identity tells an organization who or what an entity is. For an employee, an identity may contain information such as Name, Username, Email, Employee ID, Department, Job role, and Account status. An identity is not the same as authentication. Identity tells the system WHO someone is. Authentication verifies whether they can prove that identity.",
      "example": "Alex Johnson\nEmployee ID: EMP-2048\nEmail: alex@company.com\nDepartment: Engineering\nRole: Developer\n\nThis information represents Alex's digital identity.",
      "whyImportant": "Identities allow systems to track who is doing what, ensuring accountability.",
      "commonMistakes": [
        "Thinking an identity is the same thing as a user account (an account holds the identity).",
        "Forgetting that devices (like laptops) and applications (like APIs) also have identities."
      ],
      "interviewPoints": [
        "Identity answers the question: 'Who claims to be accessing the system?'",
        "Non-human identities (service accounts, APIs, devices) are a critical part of modern IAM."
      ],
      "sampleAnswer": "An identity is a digital representation of a user, device, application, or service within an organization. It contains information that allows the organization to recognize and manage that entity."
    },
    "visualization": {
      "layout": "q2",
      "steps": [
        "Person",
        "Employee information",
        "Digital Identity"
      ],
      "stepExplanations": [
        "The physical person in the real world.",
        "HR collects data like name, department, and role.",
        "The IAM system creates a unique Digital Identity (e.g., jdoe@company.com)."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "An automated script needs to run every night to back up the database.",
      "question": "Since the script is not a human, does it need a digital identity?",
      "options": [
        "No, only humans need identities.",
        "Yes, it requires a non-human identity (service account) to be authenticated and authorized.",
        "No, scripts can bypass IAM completely.",
        "Yes, but it must use the IT manager's personal identity."
      ],
      "correctAnswer": 1,
      "explanation": "Scripts, applications, and devices also need digital identities (often called service accounts or workload identities) so the system can verify them and restrict what they can do."
    }
  },
  {
    "id": 3,
    "difficulty": "easy",
    "question": "What is Authentication?",
    "subtitle": "Proving you are who you claim to be.",
    "category": "Authentication",
    "answer": {
      "definition": "Authentication is the process of verifying that a person or system is really who they claim to be.",
      "howItWorks": "When a user tries to log in, the system needs to verify their identity. This can be done using authentication factors such as Password, PIN, OTP, Authenticator app, Security key, Fingerprint, Face recognition, or Passkey. Authentication answers 'WHO ARE YOU?' It does NOT determine what they are allowed to access.",
      "example": "Alex enters his username and password. The system checks the credentials. If MFA is enabled, Alex may also need to provide an OTP or approve a notification. If verification succeeds, Alex is authenticated.",
      "whyImportant": "If systems don't verify identities, an attacker could simply claim to be the CEO and access all company secrets.",
      "commonMistakes": [
        "Do not say authentication determines what a user can access. That is authorization.",
        "Using authentication and authorization interchangeably."
      ],
      "interviewPoints": [
        "Authentication answers: 'Are you who you say you are?'",
        "Often referred to as AuthN.",
        "Can be based on something you know (password), something you have (phone), or something you are (biometric)."
      ],
      "sampleAnswer": "Authentication is the process of verifying a user's identity. It can use credentials such as passwords, OTPs, biometrics, security keys, or other authentication factors."
    },
    "visualization": {
      "layout": "q3",
      "steps": [
        "Employee",
        "Login",
        "Credentials",
        "Verification",
        "MFA",
        "Identity Verified"
      ],
      "stepExplanations": [
        "User initiates access request.",
        "User enters their claimed identity.",
        "User provides a password.",
        "System checks the password.",
        "System requests a secondary factor.",
        "Identity is verified successfully."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "Alex enters his username and then receives a text message with a 6-digit code to enter into the application.",
      "question": "Which IAM process is Alex currently completing?",
      "options": [
        "Authorization",
        "Authentication",
        "Federation",
        "Provisioning"
      ],
      "correctAnswer": 1,
      "explanation": "Entering a 6-digit code (MFA) is part of verifying his identity, which is Authentication."
    }
  },
  {
    "id": 4,
    "difficulty": "easy",
    "question": "What is Authorization?",
    "subtitle": "Determining what you are allowed to do.",
    "category": "Authorization",
    "answer": {
      "definition": "Authorization determines what an authenticated user is allowed to access or what actions they are allowed to perform.",
      "howItWorks": "After a user has been authenticated, the organization must decide what that user is allowed to do. Authorization can consider User, Role, Permissions, Resource, Policy, and Context. Authentication = WHO ARE YOU? Authorization = WHAT ARE YOU ALLOWED TO DO?",
      "example": "Alex is a Developer. He successfully logs in. He may be allowed to Read source code, Modify development code, and Access the development server. But he may not be allowed to Access the production database or Delete employee records. This is authorization.",
      "whyImportant": "It ensures that users only have access to the data and systems necessary for their job.",
      "commonMistakes": [
        "Do not say authorization verifies who the user is. Authentication does that.",
        "Thinking that logging in successfully means you have access to everything."
      ],
      "interviewPoints": [
        "Authorization answers: 'What are you allowed to do?'",
        "Often referred to as AuthZ.",
        "Implemented using models like RBAC (Role-Based) or ABAC (Attribute-Based)."
      ],
      "sampleAnswer": "Authorization is the process of determining what an authenticated user is allowed to access or what actions they can perform based on roles, permissions, policies, and other conditions."
    },
    "visualization": {
      "layout": "q4",
      "steps": [
        "Authenticated User",
        "Role",
        "Permissions",
        "Policy",
        "Resource"
      ],
      "stepExplanations": [
        "The user has already proven their identity.",
        "The system checks the user's assigned role.",
        "The system checks the permissions granted to that role.",
        "A policy engine evaluates the rules and makes an Allow/Deny decision.",
        "The user accesses the resource (if allowed)."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "Sarah successfully logs into the HR application, but when she clicks the 'Edit Salaries' button, she receives an 'Access Denied' error.",
      "question": "What is preventing Sarah from editing salaries?",
      "options": [
        "Her authentication failed.",
        "Her identity was deleted.",
        "Her authorization check failed because she lacks the required permissions.",
        "She entered the wrong password."
      ],
      "correctAnswer": 2,
      "explanation": "Since she successfully logged in, authentication passed. She lacks the specific permissions to perform the action, which is an Authorization failure."
    }
  },
  {
    "id": 5,
    "difficulty": "easy",
    "question": "What is the difference between Authentication and Authorization?",
    "subtitle": "Who you are vs. What you can do.",
    "category": "Concepts",
    "answer": {
      "definition": "Authentication verifies who you are. Authorization determines what you are allowed to do.",
      "howItWorks": "Authentication happens when a system verifies a user's identity. The system asks: 'Is this really Alex?' Authorization happens after authentication. The system then asks: 'What is Alex allowed to access?'",
      "example": "Alex enters his password and completes MFA (Authentication). He is a Developer, so he can access the Code Repository, but cannot access the Production Database (Authorization).",
      "whyImportant": "Both are required for security. Knowing who someone is doesn't mean they should access everything.",
      "commonMistakes": [
        "Using the words interchangeably during an interview.",
        "Thinking that strong authentication (like MFA) replaces the need for strict authorization rules."
      ],
      "interviewPoints": [
        "AuthN = Identity verification.",
        "AuthZ = Permission verification.",
        "AuthN precedes AuthZ."
      ],
      "sampleAnswer": "Authentication verifies the identity of a user, while authorization determines what resources or actions that authenticated user is permitted to access."
    },
    "visualization": {
      "layout": "q5",
      "customVisual": "ABAC",
      "steps": [
        "WHO ARE YOU?",
        "WHAT CAN YOU DO?"
      ],
      "stepExplanations": [
        "Authentication",
        "Authorization"
      ],
      "terms": []
    },
    "practice": {
      "scenario": "An auditor asks you to implement a system that ensures only members of the Finance team can view financial records.",
      "question": "Is the auditor asking for an Authentication control or an Authorization control?",
      "options": [
        "Authentication control",
        "Authorization control",
        "Neither",
        "Both equally"
      ],
      "correctAnswer": 1,
      "explanation": "Restricting access based on a user's group (Finance team) to a specific resource (financial records) is an Authorization control."
    }
  },
  {
    "id": 6,
    "difficulty": "easy",
    "question": "What is Multi-Factor Authentication (MFA)?",
    "subtitle": "Using multiple proofs of identity.",
    "category": "Authentication",
    "answer": {
      "definition": "MFA is a security method that requires two or more independent authentication factors to verify a user's identity.",
      "howItWorks": "Instead of relying on only a password, MFA requires additional proof. Common factor categories include: 1. Something you know (Password or PIN). 2. Something you have (Phone, authenticator app, or security key). 3. Something you are (Fingerprint or face recognition).",
      "example": "Alex enters his password. Then he approves a notification on his phone. The system verifies both factors. Access is granted.",
      "whyImportant": "If an attacker steals your password, they still cannot access your account because they do not have your physical phone or fingerprint.",
      "commonMistakes": [
        "Do not say using two passwords is automatically MFA. MFA uses multiple independent factors.",
        "Thinking SMS OTP is highly secure (it is vulnerable to SIM swapping)."
      ],
      "interviewPoints": [
        "Knowledge factor: Password, PIN.",
        "Possession factor: Phone, Hardware token (YubiKey).",
        "Inherence factor: Fingerprint, Face ID.",
        "Significantly reduces the risk of account takeover."
      ],
      "sampleAnswer": "MFA is an authentication method that requires two or more independent authentication factors, such as a password combined with a phone OTP, security key, or biometric factor."
    },
    "visualization": {
      "layout": "q6",
      "customVisual": "MFA",
      "steps": [
        "Employee",
        "Password",
        "Smartphone OTP",
        "Biometric Scan",
        "All Factors Verified"
      ],
      "stepExplanations": [
        "The employee attempts to log in to a company resource.",
        "Step 1: They enter something they KNOW â€” their password.",
        "Step 2: They receive an OTP on their phone â€” something they HAVE.",
        "Step 3: They scan their fingerprint â€” something they ARE.",
        "All three independent factors verified. MFA is complete."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A company requires employees to log in using a password. If they forget their password, they must answer a security question (e.g., 'What is your mother's maiden name?').",
      "question": "Does this setup qualify as Multi-Factor Authentication (MFA)?",
      "options": [
        "Yes, because there are two steps.",
        "Yes, because a security question is a possession factor.",
        "No, because both the password and the security question belong to the same factor (Knowledge Factor).",
        "No, because MFA requires a biometric factor."
      ],
      "correctAnswer": 2,
      "explanation": "Both a password and a security question are 'Something you know' (Knowledge Factor). True MFA requires mixing independent factors."
    }
  },
  {
    "id": 7,
    "difficulty": "easy",
    "question": "What is Single Sign-On (SSO)?",
    "subtitle": "Log in once, access everything.",
    "category": "Authentication",
    "answer": {
      "definition": "SSO allows a user to authenticate once and then access multiple authorized applications without logging in separately to each one.",
      "howItWorks": "Without SSO, an employee may have to log in separately to email, HR software, project management software, and other applications. With SSO, the user authenticates through a central Identity Provider. After successful authentication, the user can access authorized applications without repeatedly entering credentials.",
      "example": "Alex logs in once through the company's identity system. He can then access Email, HR Application, Jira, and Internal Portal as long as he has permission to use them.",
      "whyImportant": "It improves user experience (no password fatigue) and increases security (IT only has to manage and secure one central login point).",
      "commonMistakes": [
        "Thinking SSO is the same as a password manager. (Password managers auto-fill passwords; SSO uses tokens and trust).",
        "Thinking SSO removes the need for authorization."
      ],
      "interviewPoints": [
        "Reduces password fatigue and helpdesk tickets for password resets.",
        "Centralizes access control and session management.",
        "If the central SSO is compromised, all connected apps are at risk (Single Point of Failure), which is why MFA is critical."
      ],
      "sampleAnswer": "SSO allows users to authenticate once through a central identity system and then access multiple authorized applications without repeatedly signing in."
    },
    "visualization": {
      "layout": "q7",
      "customVisual": "SSO",
      "steps": [
        "Employee",
        "Identity Provider",
        "Email App",
        "HR App",
        "All Apps Unlocked"
      ],
      "stepExplanations": [
        "The employee wants to access multiple company applications.",
        "They log in ONCE to the Identity Provider (e.g., Okta, Azure AD).",
        "SSO token grants silent access to Email without another login.",
        "Same token grants access to the HR application.",
        "One login â€” all approved applications are accessible."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A company has 50 different SaaS applications. Employees complain about having to remember 50 different passwords.",
      "question": "Which technology would best solve this problem while improving security?",
      "options": [
        "Role-Based Access Control (RBAC)",
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)",
        "Zero Trust"
      ],
      "correctAnswer": 1,
      "explanation": "SSO allows employees to authenticate once to a central Identity Provider and gain seamless access to all 50 SaaS applications without needing separate passwords."
    }
  },
  {
    "id": 8,
    "difficulty": "easy",
    "question": "What is an Identity Provider (IdP)?",
    "subtitle": "The central authority for user identities.",
    "category": "Concepts",
    "answer": {
      "definition": "An Identity Provider is a system that manages digital identities and helps authenticate users for applications and services.",
      "howItWorks": "An Identity Provider, commonly called an IdP, manages identity information and authentication. It can store/manage identities, authenticate users, perform MFA, create sessions, provide authentication tokens, and support SSO. When a user tries to access an application, the application can rely on the IdP to authenticate the user.",
      "example": "Alex wants to access an enterprise application. The application redirects Alex to the company's IdP. The IdP verifies Alex. After successful authentication, the application receives the required authentication information and allows access if Alex is authorized.",
      "whyImportant": "It centralizes identity management. Instead of every application building its own login screen and password database, they outsource authentication to a secure IdP.",
      "commonMistakes": [
        "Confusing the Identity Provider (who verifies) with the Service Provider (the app you want to access)."
      ],
      "interviewPoints": [
        "IdP manages the identity lifecycle (creation, update, deletion).",
        "IdP handles the actual authentication process.",
        "Examples include Okta, Microsoft Entra ID (Azure AD), and Ping Identity."
      ],
      "sampleAnswer": "An Identity Provider is a system that manages user identities and authenticates users so that applications can rely on it for identity verification and access."
    },
    "visualization": {
      "layout": "q8",
      "customVisual": "IdP",
      "steps": [
        "User",
        "Authentication",
        "Identity Directory",
        "Token Issued",
        "Application"
      ],
      "stepExplanations": [
        "A user wants to access a company application.",
        "The IdP verifies the user's credentials (password + MFA).",
        "The IdP checks its internal directory for the user's account.",
        "The IdP issues a signed token confirming the user's identity.",
        "The application accepts the token and grants access."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A user attempts to log into the company's Salesforce environment. Salesforce redirects the user to Microsoft Entra ID to enter their credentials.",
      "question": "In this scenario, what role is Microsoft Entra ID playing?",
      "options": [
        "The Service Provider (SP)",
        "The Identity Provider (IdP)",
        "The Protected Resource",
        "The Local Network"
      ],
      "correctAnswer": 1,
      "explanation": "Microsoft Entra ID is verifying the credentials and managing the identity, making it the Identity Provider (IdP)."
    }
  },
  {
    "id": 9,
    "difficulty": "easy",
    "question": "What is a User Account in IAM?",
    "subtitle": "The container for your identity and access.",
    "category": "Concepts",
    "answer": {
      "definition": "A user account is a digital account representing a user in an organization's system.",
      "howItWorks": "A user account allows an organization to identify and manage a user. It may contain Username, Email, Account ID, Authentication settings, Groups, Roles, Permissions, and Account status. A user account can have different lifecycle states: Created, Active, Suspended, Disabled. When an employee leaves the company, their account can be disabled so they can no longer authenticate.",
      "example": "When you are hired, IT creates your user account. This account holds your username, password, and tells systems what folders you can access.",
      "whyImportant": "User accounts are the primary way systems track actions back to a specific individual for security auditing.",
      "commonMistakes": [
        "Failing to disable user accounts immediately when an employee leaves the company (creating a huge security risk)."
      ],
      "interviewPoints": [
        "Accounts have a lifecycle (Joiner, Mover, Leaver).",
        "Orphaned accounts (accounts belonging to people who left) are a major security vulnerability.",
        "Service accounts are user accounts for machines/apps, not humans."
      ],
      "sampleAnswer": "A user account is a digital representation of a user that allows an organization to manage their identity, authentication settings, roles, permissions, and access throughout the account lifecycle."
    },
    "visualization": {
      "layout": "q9",
      "customVisual": "Lifecycle",
      "steps": [
        "Employee Joins",
        "Account Created",
        "Account Active",
        "Account Suspended",
        "Account Disabled"
      ],
      "stepExplanations": [
        "A new employee joins the organization.",
        "The IAM system creates a new user account for them.",
        "The account becomes active â€” the employee can log in.",
        "If suspicious activity is detected, the account is suspended.",
        "When the employee leaves, the account is permanently disabled."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "An employee leaves the company on Friday. On Monday, they realize they still have access to their company email from their personal phone.",
      "question": "Which IAM process failed in this scenario?",
      "options": [
        "Authentication",
        "The 'Joiner' onboarding process",
        "The 'Leaver' offboarding process (Deprovisioning)",
        "Role-Based Access Control"
      ],
      "correctAnswer": 2,
      "explanation": "When an employee leaves, the Leaver process must immediately disable or deprovision their user account to revoke access."
    }
  },
  {
    "id": 10,
    "difficulty": "easy",
    "question": "What are Roles and Permissions?",
    "subtitle": "The building blocks of authorization.",
    "category": "Authorization",
    "answer": {
      "definition": "A permission defines a specific action a user can perform, while a role is a collection of related permissions.",
      "howItWorks": "A permission might be: Read a file, Write code, Delete a record. A role groups related permissions. The user receives permissions through the Role.",
      "example": "Developer Role:\nâœ“ Read source code\nâœ“ Write source code\nâœ“ Access development server\n\nAlex is assigned the Developer role. Therefore Alex receives the permissions associated with that role. Permission = specific allowed action, Role = collection of permissions.",
      "whyImportant": "It makes managing access scalable and less prone to human error.",
      "commonMistakes": [
        "Assigning permissions directly to users instead of assigning them to roles (makes auditing a nightmare).",
        "Confusing a role with a job title (they often align, but a role is a technical system object)."
      ],
      "interviewPoints": [
        "Permissions = Actions (Read, Write, Execute).",
        "Roles = Collections of Permissions.",
        "Users are assigned to Roles, not directly to Permissions."
      ],
      "sampleAnswer": "A permission defines what action a user can perform, while a role is a collection of permissions assigned to users based on their job responsibilities."
    },
    "visualization": {
      "layout": "q10",
      "steps": [
        "User",
        "Role",
        "Permissions",
        "Resource"
      ],
      "stepExplanations": [
        "The authenticated user needs access.",
        "The user is assigned a Role (e.g., Developer).",
        "The Role contains specific Permissions (e.g., Read, Write).",
        "The user accesses the Resource using those permissions."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A security admin wants to give a user the ability to view logs, edit logs, and delete logs.",
      "question": "What is the best practice for granting these three permissions?",
      "options": [
        "Assign each of the three permissions directly to the user's account.",
        "Create a 'Log Admin' role, assign the three permissions to the role, and assign the role to the user.",
        "Give the user global administrator access.",
        "Share a generic admin password with the user."
      ],
      "correctAnswer": 1,
      "explanation": "Best practice is to group related permissions into a Role, and then assign the Role to the user. This simplifies future administration."
    }
  },
  {
    "id": 11,
    "difficulty": "easy",
    "question": "What is Role-Based Access Control (RBAC)?",
    "subtitle": "Access based on your job function.",
    "category": "Authorization",
    "answer": {
      "definition": "RBAC is an access-control model where permissions are assigned to roles and users receive permissions through those roles.",
      "howItWorks": "Instead of assigning every permission individually to every user, organizations create roles. Basic RBAC flow: User -> Role -> Permissions -> Resource.",
      "example": "Developer Role â†’ Read Code, Write Code, Development Server. HR Role â†’ Employee Records, Payroll System. Alex is assigned the Developer role and receives those permissions.",
      "whyImportant": "It drastically simplifies administration. When someone changes jobs, you just change their role, rather than manually adding/removing hundreds of individual permissions.",
      "commonMistakes": [
        "Do not confuse a role with a permission.",
        "Creating too many highly specific roles, leading to 'Role Explosion' which is impossible to manage."
      ],
      "interviewPoints": [
        "Access is based on Job Function.",
        "Highly scalable for large organizations.",
        "Does not easily handle dynamic context (like time of day or location)."
      ],
      "sampleAnswer": "RBAC is an access-control model where permissions are grouped into roles, and users receive those permissions by being assigned the appropriate roles."
    },
    "visualization": {
      "layout": "q11",
      "customVisual": "RBAC",
      "steps": [
        "Users (Alex, Sarah, John)",
        "Roles Assigned",
        "Permissions Granted",
        "Resources Accessed"
      ],
      "stepExplanations": [
        "Multiple users exist in the organization with different job functions.",
        "Each user is assigned a Role based on their job (Developer, HR, Finance).",
        "Each Role carries predefined permissions (Read code, Access payroll, etc.).",
        "Users access only the systems their Role permits â€” no more, no less."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A company has 10,000 employees. Every time someone changes departments, IT spends hours manually updating their access to 20 different systems.",
      "question": "Which model would best solve this administrative burden?",
      "options": [
        "Multi-Factor Authentication (MFA)",
        "Role-Based Access Control (RBAC)",
        "Single Sign-On (SSO)",
        "Discretionary Access Control (DAC)"
      ],
      "correctAnswer": 1,
      "explanation": "RBAC solves this by allowing IT to simply remove the user from their old department's Role and add them to their new department's Role, automatically updating access across all systems."
    }
  },
  {
    "id": 12,
    "difficulty": "easy",
    "question": "What is Attribute-Based Access Control (ABAC)?",
    "subtitle": "Access based on highly specific conditions.",
    "category": "Authorization",
    "answer": {
      "definition": "ABAC makes access decisions using attributes of the user, device, resource, environment, and other contextual information.",
      "howItWorks": "ABAC does not rely only on a user's role. It can evaluate information such as User Department, Device status, Location, Time, and Resource. A policy engine evaluates these attributes and makes an access decision.",
      "example": "Finance employee + Managed laptop + Office network + Working hours = ACCESS ALLOWED. If the device becomes unmanaged = ACCESS DENIED.",
      "whyImportant": "It provides highly granular, dynamic security that RBAC cannot achieve, which is essential for Zero Trust architectures.",
      "commonMistakes": [
        "Do not describe ABAC as simply role-based access. It is policy-based and context-aware.",
        "Thinking ABAC is easy to implement (it requires complex policy engines)."
      ],
      "interviewPoints": [
        "Evaluates User, Resource, Action, and Environment attributes.",
        "Provides fine-grained, dynamic access control.",
        "More complex to compute and implement than RBAC."
      ],
      "sampleAnswer": "ABAC is an access-control model that evaluates attributes of the user, device, resource, environment, and other context to determine whether access should be allowed."
    },
    "visualization": {
      "layout": "q12",
      "customVisual": "ABAC",
      "steps": [
        "User Attributes",
        "Device Attributes",
        "Context Evaluated",
        "ABAC Policy Engine",
        "Decision"
      ],
      "stepExplanations": [
        "The system reads the user's attributes: Department=Finance, Clearance=Level 2.",
        "The system checks the device: Managed=Yes, Patched=Yes.",
        "Context is checked: Location=Office, Time=Business Hours.",
        "The ABAC engine compares all attributes against the policy rules.",
        "If all conditions match the policy, access is ALLOWED. Otherwise DENIED."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A hospital implements a rule: 'Doctors can only access a patient's medical record if the doctor is currently physically located inside the hospital building.'",
      "question": "Which access control model is required to enforce this location-based rule?",
      "options": [
        "Role-Based Access Control (RBAC)",
        "Attribute-Based Access Control (ABAC)",
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)"
      ],
      "correctAnswer": 1,
      "explanation": "RBAC only checks if the user is a 'Doctor'. ABAC is required to dynamically check the environmental attribute (Location) at the time of the request."
    }
  },
  {
    "id": 13,
    "difficulty": "easy",
    "question": "What is the Principle of Least Privilege?",
    "subtitle": "Giving only the exact access needed, nothing more.",
    "category": "Concepts",
    "answer": {
      "definition": "Least Privilege means giving a user only the minimum access required to perform their job.",
      "howItWorks": "Users should not receive unnecessary permissions. Giving only the required access reduces the potential impact if an account is compromised or misused.",
      "example": "A developer needs to write code. They may need: Read code, Write code. But they may not need: Payroll access, HR administration, Security administration, Production database administration.",
      "whyImportant": "If an attacker hacks a user's account, they can only do as much damage as the user's permissions allow. Least privilege limits the blast radius of an attack.",
      "commonMistakes": [
        "Giving everyone 'Administrator' rights just because it's easier to set up.",
        "Not reviewing permissions over time (privilege creep)."
      ],
      "interviewPoints": [
        "Reduces the attack surface and 'blast radius' of compromised accounts.",
        "Applies to humans, applications, and machine identities.",
        "Core foundation of Zero Trust security."
      ],
      "sampleAnswer": "The Principle of Least Privilege means giving users, applications, and systems only the minimum permissions required to perform their intended tasks."
    },
    "visualization": {
      "layout": "q13",
      "customVisual": "LeastPrivilege",
      "steps": [
        "Developer Joins",
        "Excess Permissions Identified",
        "Permissions Removed",
        "Minimal Access Granted"
      ],
      "stepExplanations": [
        "A new developer is provisioned with a default over-privileged account.",
        "Security review identifies permissions they do not need (Admin, Delete DB, Payroll).",
        "Excess permissions are stripped. Only job-relevant permissions remain.",
        "Developer now has only Read Code and Write Code â€” the minimum required."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A software developer needs to read data from a production database to troubleshoot a bug. IT grants them 'Full Database Administrator' access to solve the problem quickly.",
      "question": "Which security concept was violated?",
      "options": [
        "Authentication",
        "Single Sign-On",
        "The Principle of Least Privilege",
        "Role-Based Access Control"
      ],
      "correctAnswer": 2,
      "explanation": "The developer only needed 'Read' access. Granting 'Full Administrator' access gave them far more power than necessary, violating the Principle of Least Privilege."
    }
  },
  {
    "id": 14,
    "difficulty": "easy",
    "question": "What is Access Control?",
    "subtitle": "The gatekeeper to your systems.",
    "category": "Authorization",
    "answer": {
      "definition": "Access control is the process of determining who can access a resource and what actions they are allowed to perform.",
      "howItWorks": "Access control protects resources by evaluating access requests. A simple access-control process is: 1. User makes a request 2. System identifies the user 3. Authentication may verify identity 4. Policies are evaluated 5. Authorization determines access 6. System allows or denies the request.",
      "example": "Alex requests access to the production database. The system evaluates his identity, role, permissions, and policies. The result may be: ACCESS GRANTED or ACCESS DENIED.",
      "whyImportant": "Without access control, any person on the internet could access your company's internal servers and private data.",
      "commonMistakes": [
        "Thinking Access Control is only about passwords.",
        "Implementing physical access control (door locks) but ignoring logical access control (computer security)."
      ],
      "interviewPoints": [
        "It encompasses both Authentication and Authorization.",
        "Common models include RBAC, ABAC, and MAC (Mandatory Access Control).",
        "Goal is to mitigate risk and protect confidentiality, integrity, and availability."
      ],
      "sampleAnswer": "Access control is the process of regulating who or what can access a resource and what actions they are allowed to perform."
    },
    "visualization": {
      "layout": "q14",
      "steps": [
        "User",
        "Request",
        "Policy",
        "Decision",
        "Resource"
      ],
      "stepExplanations": [
        "A user wants to access a resource.",
        "They submit an access request to the system.",
        "The system evaluates the request against Access Policies.",
        "A final Allow or Deny decision is made.",
        "If allowed, the user accesses the resource."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A company implements a system that requires users to scan their fingerprint at the door, and then checks if they are on the approved entry list.",
      "question": "This system is an example of what security concept?",
      "options": [
        "Access Control",
        "Data Encryption",
        "Network Routing",
        "Antivirus Scanning"
      ],
      "correctAnswer": 0,
      "explanation": "The system is authenticating the user (fingerprint) and authorizing them (checking the list) to regulate entry. This is the definition of Access Control."
    }
  },
  {
    "id": 15,
    "difficulty": "easy",
    "question": "What is an Access Policy?",
    "subtitle": "The rules the system follows.",
    "category": "Authorization",
    "answer": {
      "definition": "An access policy is a set of rules that determines when access should be allowed, denied, or require additional verification.",
      "howItWorks": "An access policy can consider conditions such as User identity, Role, Device status, Location, Application, Time, Risk, Resource, and Requested action. The policy engine evaluates the request against these rules.",
      "example": "'Allow Finance employees to access the payroll application from managed devices.' The policy engine evaluates the request against these rules.",
      "whyImportant": "Policies translate human business requirements ('Only managers can see salaries') into technical rules the computer can enforce.",
      "commonMistakes": [
        "Writing overly broad policies (violating least privilege).",
        "Having conflicting policies that cause unexpected access denials."
      ],
      "interviewPoints": [
        "Policies are evaluated by a Policy Decision Point (PDP).",
        "They use IF/THEN logic.",
        "Cloud environments heavily rely on JSON-based access policies (e.g., AWS IAM Policies)."
      ],
      "sampleAnswer": "An access policy is a set of rules and conditions used to determine whether a user or system should be allowed, denied, or challenged when requesting access to a resource."
    },
    "visualization": {
      "layout": "q15",
      "steps": [
        "Conditions",
        "Policy",
        "Allow/Deny"
      ],
      "stepExplanations": [
        "The system gathers the user's role and context.",
        "The Policy Engine evaluates these conditions against the written rules.",
        "The engine outputs a definitive Allow or Deny decision."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "An administrator writes a rule in AWS: 'Effect: Allow, Action: s3:GetObject, Resource: arn:aws:s3:::my-bucket/*'.",
      "question": "What is this rule an example of?",
      "options": [
        "An Access Policy",
        "An Identity Provider",
        "Multi-Factor Authentication",
        "A Service Account"
      ],
      "correctAnswer": 0,
      "explanation": "This is a technical rule that defines who is allowed to do what to a resource, which is the exact definition of an Access Policy."
    }
  },
  {
    "id": 16,
    "difficulty": "medium",
    "question": "What is Zero Trust Security?",
    "subtitle": "Never trust, always verify.",
    "category": "Zero Trust",
    "answer": {
      "definition": "Zero Trust is a security approach where access is not automatically trusted simply because a user or device is inside a network.",
      "howItWorks": "Traditional security models often relied heavily on network boundaries. Zero Trust assumes that access should be explicitly verified. A Zero Trust approach can evaluate User identity, Device security, Authentication strength, Location, Application, Resource, Risk, and Context. It also follows least privilege and may continuously reevaluate access. The basic idea is: 'Verify before granting access and continue evaluating when appropriate.'",
      "example": "In the past, once you got past the firewall, you were trusted. In Zero Trust, there are locked doors and ID checks inside every room of the network.",
      "whyImportant": "Modern work involves remote employees, mobile devices, and cloud apps. The old model of a 'trusted internal network' is obsolete and dangerous.",
      "commonMistakes": [
        "Do not say Zero Trust means trusting nobody at all. It means access is explicitly verified rather than automatically granted.",
        "Thinking Zero Trust is a single software product you can buy."
      ],
      "interviewPoints": [
        "Verify explicitly (Identity, Device, Context).",
        "Use least privilege access.",
        "Assume breach (micro-segmentation and encryption)."
      ],
      "sampleAnswer": "Zero Trust is a security model that does not automatically trust users or devices based on network location. It requires explicit verification, least-privilege access, and continuous evaluation of access conditions."
    },
    "visualization": {
      "layout": "q16",
      "customVisual": "ZeroTrust",
      "steps": [
        "User Request",
        "Identity Verified",
        "Device Checked",
        "Context Evaluated",
        "Policy Applied",
        "Resource Granted"
      ],
      "stepExplanations": [
        "A user â€” even inside the corporate network â€” makes an access request.",
        "Identity is verified. Zero Trust never assumes you are who you say you are.",
        "Device health is checked: Is it managed? Patched? Compliant?",
        "Context is evaluated: location, time, risk score, behaviour patterns.",
        "A real-time policy decision is made based on all signals combined.",
        "If all checks pass, access is granted â€” but verification continues continuously."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A company implements a new security architecture where employees working from the corporate office must authenticate exactly the same way as employees working from a coffee shop.",
      "question": "Which security model is this company following?",
      "options": [
        "Implicit Trust",
        "Zero Trust",
        "Perimeter Security",
        "Discretionary Access Control"
      ],
      "correctAnswer": 1,
      "explanation": "Treating the internal network exactly the same as the external internet and requiring explicit verification everywhere is the core of Zero Trust."
    }
  },
  {
    "id": 17,
    "difficulty": "medium",
    "question": "What is SAML and how does it work?",
    "subtitle": "The standard for enterprise Single Sign-On.",
    "category": "Protocols",
    "answer": {
      "definition": "SAML is an XML-based standard commonly used to exchange authentication and authorization-related information between an Identity Provider and a Service Provider.",
      "howItWorks": "SAML is commonly used for enterprise Single Sign-On. There are two important parties: Identity Provider (IdP) which authenticates the user, and Service Provider (SP) which provides the application or service the user wants to access. A simplified flow is: 1. User opens an application 2. Application requests authentication 3. User is sent to the IdP 4. IdP authenticates the user 5. IdP creates a SAML assertion 6. The assertion is sent to the Service Provider 7. The Service Provider processes it 8. Access is provided if the user is authorized.",
      "example": "It's like getting a stamped boarding pass. The airline check-in desk (IdP) checks your passport, prints a boarding pass (SAML Assertion), and you hand that pass to the gate agent (Service Provider) to board the plane.",
      "whyImportant": "It allows companies to centralize authentication. Employees don't need a separate password for Salesforce, Workday, and Zoom.",
      "commonMistakes": [
        "Confusing SAML (mostly for enterprise web SSO) with OAuth (mostly for API authorization).",
        "Thinking the Service Provider sees the user's password (it only sees the Assertion)."
      ],
      "interviewPoints": [
        "XML-based open standard.",
        "Components: Principal (User), Identity Provider (IdP), Service Provider (SP).",
        "The IdP passes a digitally signed XML 'Assertion' to the SP."
      ],
      "sampleAnswer": "SAML is an XML-based standard used for exchanging authentication and authorization-related information between an Identity Provider and a Service Provider to enable Single Sign-On."
    },
    "visualization": {
      "layout": "q17",
      "customVisual": "SAML",
      "steps": [
        "Browser",
        "Service Provider",
        "Redirect to IdP",
        "SAML Assertion",
        "Application Access"
      ],
      "stepExplanations": [
        "The user navigates to a web application (Service Provider) in their browser.",
        "The Service Provider does not authenticate users itself â€” it redirects to the IdP.",
        "The browser is redirected to the Identity Provider login page.",
        "After successful login, the IdP sends a signed XML SAML Assertion back.",
        "The Service Provider validates the assertion and grants application access."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A user tries to log into Salesforce (Service Provider). Salesforce redirects them to Okta (Identity Provider) to authenticate. Okta then sends a signed XML document back to Salesforce confirming the user's identity.",
      "question": "What is the name of this signed XML document?",
      "options": [
        "A JSON Web Token (JWT)",
        "A SAML Assertion",
        "An Access Control List (ACL)",
        "An OAuth Access Token"
      ],
      "correctAnswer": 1,
      "explanation": "In the SAML protocol, the XML document that proves the user's identity is called a SAML Assertion."
    }
  },
  {
    "id": 18,
    "difficulty": "medium",
    "question": "What is Privileged Access Management (PAM)?",
    "subtitle": "Securing the 'keys to the kingdom'.",
    "category": "Concepts",
    "answer": {
      "definition": "Privileged Access Management (PAM) is a specialized area of IAM focused on securing, controlling, and monitoring accounts with elevated (administrative) permissions.",
      "howItWorks": "Instead of administrators knowing the root passwords to critical servers, a PAM system stores the passwords in a secure vault. When an admin needs access, they log into the PAM system, which brokers a monitored, temporary session.",
      "example": "If a bank manager needs to open the main vault, they don't carry the key in their pocket. They request the key from a secure lockbox, sign it out for 1 hour, and their actions are recorded on camera.",
      "whyImportant": "Admin accounts are the primary target for hackers. If a hacker gets standard user access, they steal some data. If they get PAM access, they can destroy the entire company.",
      "commonMistakes": [
        "Thinking PAM is just for human IT admins (service accounts and applications also need PAM).",
        "Allowing admins to bypass the PAM vault for 'emergencies'."
      ],
      "interviewPoints": [
        "Focuses on securing 'Privileged' accounts (root, Administrator).",
        "Core features include credential vaulting, session recording, and Just-In-Time (JIT) access.",
        "Prevents lateral movement by attackers."
      ],
      "sampleAnswer": "PAM is a cybersecurity strategy and toolset used to secure and monitor elevated accounts. It protects organizations from credential theft by vaulting admin passwords and recording privileged sessions."
    },
    "visualization": {
      "layout": "q18",
      "customVisual": "PAM",
      "steps": [
        "Admin User",
        "Privileged Request",
        "PAM Approval",
        "Temporary Access",
        "Session Recorded",
        "Access Revoked"
      ],
      "stepExplanations": [
        "An administrator needs to access a critical production server.",
        "They submit a privileged access request through the PAM system.",
        "The PAM system reviews the request and issues time-limited credentials.",
        "The admin gets temporary access â€” valid for 1 hour only.",
        "Every command and action is recorded in the PAM audit log.",
        "When the time expires, access is automatically revoked. Credentials are rotated."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "An IT administrator needs to restart a critical database server. Instead of logging directly into the server, they log into a secure portal that temporarily provisions access and records their screen.",
      "question": "What type of IAM system is the administrator using?",
      "options": [
        "Single Sign-On (SSO)",
        "Privileged Access Management (PAM)",
        "Role-Based Access Control (RBAC)",
        "A Firewall"
      ],
      "correctAnswer": 1,
      "explanation": "Vaulting credentials, provisioning temporary access, and recording sessions for high-level administrative tasks are the core functions of a PAM system."
    }
  },
  {
    "id": 19,
    "difficulty": "medium",
    "question": "What is Conditional Access?",
    "subtitle": "Security that adapts to the situation.",
    "category": "Zero Trust",
    "answer": {
      "definition": "Conditional Access is a policy engine that evaluates the context of a login attempt (like location, device health, and user risk) in real-time to make a dynamic access decision.",
      "howItWorks": "When a user logs in, the system checks signals. IF user is in a normal location on a secure device, THEN allow. IF user is in a new country, THEN require MFA. IF device is infected, THEN block.",
      "example": "If you log in from your office laptop during the day, you get right in. If you try to log in from an unknown device in another country at 3 AM, the system forces you to pass MFA before granting access.",
      "whyImportant": "It allows organizations to balance security and productivity. It only interrupts the user with security prompts when the situation is risky.",
      "commonMistakes": [
        "Confusing it with basic authentication. Conditional Access happens *after* or *during* authentication to evaluate the risk.",
        "Setting policies so strictly that executives are constantly locked out."
      ],
      "interviewPoints": [
        "Core component of Microsoft Entra ID and Zero Trust architectures.",
        "Evaluates Signals -> makes a Decision -> Enforces action (Allow/Block/MFA).",
        "Highly dynamic and context-aware."
      ],
      "sampleAnswer": "Conditional Access is a zero-trust policy engine that analyzes real-time signalsâ€”such as user location, device posture, and risk levelâ€”to make dynamic decisions to allow, block, or require MFA for an access request."
    },
    "visualization": {
      "layout": "q19",
      "customVisual": "ABAC",
      "steps": [
        "Access Request",
        "Conditions Evaluated",
        "Risk Assessed",
        "Policy Decision",
        "MFA Required",
        "Access Decision"
      ],
      "stepExplanations": [
        "A user attempts to access a company resource.",
        "Conditions are evaluated: user role, device compliance, location, time.",
        "Risk signals are gathered: unusual login time, foreign IP, unmanaged device.",
        "The Conditional Access policy engine processes all conditions and signals.",
        "High-risk access triggers a step-up: MFA must be completed.",
        "Final decision: Allow (low risk), Require MFA (medium risk), or Block (high risk)."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "A user successfully enters their correct password. However, the system notices they are logging in from an unmanaged personal iPad, so it denies access to the source code repository.",
      "question": "Which technology enforced this rule?",
      "options": [
        "Single Sign-On",
        "Conditional Access",
        "Password Complexity Rules",
        "SAML"
      ],
      "correctAnswer": 1,
      "explanation": "Conditional Access evaluates the context of the login (the fact that it's an unmanaged iPad) and dynamically enforces a block policy, even though the password was correct."
    }
  },
  {
    "id": 20,
    "difficulty": "medium",
    "question": "What happens when a user requests access to a protected resource?",
    "subtitle": "The complete end-to-end IAM lifecycle.",
    "category": "Zero Trust",
    "answer": {
      "definition": "When a user requests access, they undergo a sequence of Identity Verification, Authentication, Context Evaluation, and Authorization before a final decision is made.",
      "howItWorks": "1. Request initiated. 2. System checks Identity. 3. User Authenticates (Password + MFA). 4. System checks Context (Device health, location). 5. System checks Authorization (Roles/Policies). 6. Allow or Deny.",
      "example": "You click a link to open Payroll. The system asks who you are (Identity), asks for a fingerprint (Authentication), checks if your laptop is secure (Context), checks if you are in the HR group (Authorization), and finally lets you in.",
      "whyImportant": "Understanding this end-to-end flow is the most important skill for an IAM professional, as it combines all the individual concepts into a working security model.",
      "commonMistakes": [
        "Thinking the process stops after authentication.",
        "Forgetting that context (Zero Trust) is evaluated before authorization."
      ],
      "interviewPoints": [
        "Combines Identity, AuthN, Zero Trust context, and AuthZ.",
        "A failure at ANY step results in an Access Denied.",
        "This end-to-end flow is exactly what you troubleshoot daily in IAM."
      ],
      "sampleAnswer": "When a user requests access, the system first identifies and authenticates them. It then evaluates the context of the request, such as device health. Finally, it authorizes the request against access policies. If all checks pass, access is granted."
    },
    "visualization": {
      "layout": "q20",
      "customVisual": "ZeroTrust",
      "steps": [
        "User Identity",
        "Authentication",
        "Context",
        "Authorization",
        "Policy Decision",
        "Resource Access",
        "Audit Log"
      ],
      "stepExplanations": [
        "The user presents their digital identity to initiate an access request.",
        "Authentication verifies the identity using password, MFA, or SSO.",
        "Context is collected: device health, location, time, risk score.",
        "Authorization checks the user's roles, permissions, and access policies.",
        "The policy engine makes a real-time allow or deny decision.",
        "If approved, the user accesses the protected resource.",
        "Every action is logged in the audit trail for compliance and review."
      ],
      "terms": []
    },
    "practice": {
      "scenario": "You are asked to explain the complete access flow to a junior analyst.",
      "question": "Which of the following represents the correct chronological order of the standard IAM access flow?",
      "options": [
        "Authorization -> Identity -> Authentication -> Resource Access",
        "Identity Claim -> Authentication -> Authorization -> Resource Access",
        "Resource Access -> Authentication -> Authorization -> Identity Claim",
        "Authentication -> Resource Access -> Authorization -> Identity Claim"
      ],
      "correctAnswer": 1,
      "explanation": "The user must first claim an identity. Then they prove it (Authentication). Then the system checks their permissions (Authorization). Finally, they are granted Resource Access."
    }
  }
];

const getDifficulty = (id: number): 'easy' | 'medium' | 'hard' => {
  if (id <= 15) return 'easy';
  if (id <= 35) return 'medium';
  return 'hard';
};

export const questions = [...questions1, ...questions2].map(q => ({
  ...q,
  difficulty: getDifficulty(q.id as number)
}));


