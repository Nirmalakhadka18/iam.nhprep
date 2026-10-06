const fs = require('fs');

const questions = [
  {
    id: 1,
    question: "What is IAM (Identity and Access Management)?",
    subtitle: "The framework that ensures the right people have the right access.",
    category: "Concepts",
    answer: {
      definition: "IAM (Identity and Access Management) is a security framework that ensures the right people and devices get the correct access to the right resources at the right time.",
      howItWorks: "IAM systems manage digital identities, enforce authentication (proving who you are), and manage authorization (what you can do).",
      example: "When a new employee joins the company, the IAM system creates their digital identity (email account) and grants them access to the HR system, but blocks access to the production databases.",
      whyImportant: "Without IAM, anyone could access sensitive company data, leading to data breaches and security failures.",
      commonMistakes: [
        "Thinking IAM is only about passwords.",
        "Assuming IAM is only for humans (devices and applications have identities too).",
        "Confusing IAM with network security (firewalls)."
      ],
      interviewPoints: [
        "IAM is about managing digital identities and access rights.",
        "It balances usability (easy login) with security (protecting data).",
        "Core pillars: Identity, Authentication, Authorization."
      ],
      sampleAnswer: "IAM is the security discipline that ensures the right individuals access the right resources at the right times for the right reasons. It manages digital identities and controls their permissions across the organization."
    },
    visualization: {
      type: "custom",
      customVisual: "ABAC",
      steps: ["Employee", "Identity", "Authentication", "Authorization", "Resource"],
      stepExplanations: [
        "A real-world employee needs access to systems.",
        "They are assigned a digital identity (username).",
        "They authenticate using a password and MFA.",
        "The system checks their authorization (permissions).",
        "They are granted access to the target resource."
      ],
      terms: []
    },
    practice: {
      scenario: "A new engineer starts their first day and needs access to the company's code repository.",
      question: "Which system is responsible for creating their account and assigning them the developer role?",
      options: [
        "The company's Firewall",
        "The IAM System",
        "The Antivirus Software",
        "The Database Server"
      ],
      correctAnswer: 1,
      explanation: "The IAM system is responsible for managing the user's identity lifecycle, including creating their account and assigning them appropriate roles and permissions."
    }
  },
  {
    id: 2,
    question: "What is an Identity in IAM?",
    subtitle: "The digital representation of a user or device.",
    category: "Concepts",
    answer: {
      definition: "An Identity in IAM is the digital representation of a person, device, or application within a computer system.",
      howItWorks: "When you interact with a system, the system doesn't know you as a human. It knows you by your digital identity, usually represented by a username, email address, or unique ID.",
      example: "Your physical identity is you, the human. Your digital identity is 'alex.smith@company.com'. The system attaches roles, permissions, and history to this digital identity.",
      whyImportant: "Identities allow systems to track who is doing what, ensuring accountability.",
      commonMistakes: [
        "Thinking an identity is the same thing as a user account (an account holds the identity).",
        "Forgetting that devices (like laptops) and applications (like APIs) also have identities."
      ],
      interviewPoints: [
        "Identity answers the question: 'Who claims to be accessing the system?'",
        "Non-human identities (service accounts, APIs, devices) are a critical part of modern IAM."
      ],
      sampleAnswer: "An identity is a digital representation of a subject—such as a user, a server, or an application—that can be authenticated and authorized to access resources."
    },
    visualization: {
      type: "custom",
      customVisual: "Lifecycle",
      steps: ["Person", "Employee information", "Digital Identity"],
      stepExplanations: [
        "The physical person in the real world.",
        "HR collects data like name, department, and role.",
        "The IAM system creates a unique Digital Identity (e.g., jdoe@company.com)."
      ],
      terms: []
    },
    practice: {
      scenario: "An automated script needs to run every night to back up the database.",
      question: "Since the script is not a human, does it need a digital identity?",
      options: [
        "No, only humans need identities.",
        "Yes, it requires a non-human identity (service account) to be authenticated and authorized.",
        "No, scripts can bypass IAM completely.",
        "Yes, but it must use the IT manager's personal identity."
      ],
      correctAnswer: 1,
      explanation: "Scripts, applications, and devices also need digital identities (often called service accounts or workload identities) so the system can verify them and restrict what they can do."
    }
  },
  {
    id: 3,
    question: "What is Authentication?",
    subtitle: "Proving you are who you claim to be.",
    category: "Authentication",
    answer: {
      definition: "Authentication is the process of verifying that a person or system is really who they claim to be.",
      howItWorks: "You claim an identity (by typing your username). Authentication is the proof (typing your password or scanning your fingerprint).",
      example: "When you log in to your company email, you enter your username. To prove you are that user, you provide a password. The system verifies the password and authenticates you.",
      whyImportant: "If systems don't verify identities, an attacker could simply claim to be the CEO and access all company secrets.",
      commonMistakes: [
        "Do not say authentication determines what a user can access. That is authorization.",
        "Using authentication and authorization interchangeably."
      ],
      interviewPoints: [
        "Authentication answers: 'Are you who you say you are?'",
        "Often referred to as AuthN.",
        "Can be based on something you know (password), something you have (phone), or something you are (biometric)."
      ],
      sampleAnswer: "Authentication is the process of verifying a user's identity. It checks whether the person is really who they claim to be, usually using credentials such as a password, MFA, biometric authentication, or a security key."
    },
    visualization: {
      type: "auth-stages",
      steps: ["Employee", "Login", "Credentials", "Verification", "MFA", "Authenticated"],
      stepExplanations: [
        "User initiates access request.",
        "User enters their claimed identity (username).",
        "User provides a password.",
        "System checks the password.",
        "System requests a secondary factor (MFA).",
        "Identity is verified successfully."
      ],
      terms: []
    },
    practice: {
      scenario: "Alex enters his username and then receives a text message with a 6-digit code to enter into the application.",
      question: "Which IAM process is Alex currently completing?",
      options: [
        "Authorization",
        "Authentication",
        "Federation",
        "Provisioning"
      ],
      correctAnswer: 1,
      explanation: "Entering a 6-digit code (MFA) is part of verifying his identity, which is Authentication."
    }
  },
  {
    id: 4,
    question: "What is Authorization?",
    subtitle: "Determining what you are allowed to do.",
    category: "Authorization",
    answer: {
      definition: "Authorization is the process of determining what an authenticated user is allowed to access or do within a system.",
      howItWorks: "After you prove who you are (Authentication), the system checks its rules and policies to see if your identity has permission to view a file, click a button, or open a database.",
      example: "You use your keycard to enter the office building (Authentication). However, when you swipe your card at the Server Room door, the light turns red (Authorization denied) because you are not IT staff.",
      whyImportant: "It ensures that users only have access to the data and systems necessary for their job.",
      commonMistakes: [
        "Do not say authorization verifies who the user is. Authentication does that.",
        "Thinking that logging in successfully means you have access to everything."
      ],
      interviewPoints: [
        "Authorization answers: 'What are you allowed to do?'",
        "Often referred to as AuthZ.",
        "Implemented using models like RBAC (Role-Based) or ABAC (Attribute-Based)."
      ],
      sampleAnswer: "Authorization is the process of checking if an authenticated user has the necessary permissions to access a specific resource or perform a specific action, based on access policies."
    },
    visualization: {
      type: "custom",
      customVisual: "ABAC",
      steps: ["Authenticated Employee", "Role", "Permissions", "Policy", "Allow/Deny", "Resource"],
      stepExplanations: [
        "The user has already proven their identity.",
        "The system checks the user's assigned role (e.g., Marketing).",
        "The system checks the permissions granted to that role.",
        "A policy engine evaluates the rules.",
        "The system makes an access decision.",
        "The user accesses the resource (if allowed)."
      ],
      terms: []
    },
    practice: {
      scenario: "Sarah successfully logs into the HR application, but when she clicks the 'Edit Salaries' button, she receives an 'Access Denied' error.",
      question: "What is preventing Sarah from editing salaries?",
      options: [
        "Her authentication failed.",
        "Her identity was deleted.",
        "Her authorization check failed because she lacks the required permissions.",
        "She entered the wrong password."
      ],
      correctAnswer: 2,
      explanation: "Since she successfully logged in, authentication passed. She lacks the specific permissions to perform the action, which is an Authorization failure."
    }
  },
  {
    id: 5,
    question: "What is the difference between Authentication and Authorization?",
    subtitle: "Who you are vs. What you can do.",
    category: "Concepts",
    answer: {
      definition: "Authentication verifies WHO a user is. Authorization determines WHAT that user is allowed to do.",
      howItWorks: "Authentication always happens first. Once the system knows exactly who you are, it hands that identity over to the Authorization process to check what permissions you hold.",
      example: "Authentication is showing your passport at border control to prove who you are. Authorization is your visa, which determines if you are allowed to work, study, or just visit.",
      whyImportant: "Both are required for security. Knowing who someone is doesn't mean they should access everything.",
      commonMistakes: [
        "Using the words interchangeably during an interview.",
        "Thinking that strong authentication (like MFA) replaces the need for strict authorization rules."
      ],
      interviewPoints: [
        "AuthN = Identity verification.",
        "AuthZ = Permission verification.",
        "AuthN precedes AuthZ."
      ],
      sampleAnswer: "The difference is that authentication verifies a user's identity (who they are), while authorization evaluates policies to determine their access rights (what they can do). Authentication happens before authorization."
    },
    visualization: {
      type: "custom",
      customVisual: "ABAC", 
      steps: ["WHO ARE YOU?", "WHAT CAN YOU DO?"],
      stepExplanations: ["Authentication", "Authorization"],
      terms: []
    },
    practice: {
      scenario: "An auditor asks you to implement a system that ensures only members of the Finance team can view financial records.",
      question: "Is the auditor asking for an Authentication control or an Authorization control?",
      options: [
        "Authentication control",
        "Authorization control",
        "Neither",
        "Both equally"
      ],
      correctAnswer: 1,
      explanation: "Restricting access based on a user's group (Finance team) to a specific resource (financial records) is an Authorization control."
    }
  },
  {
    id: 6,
    question: "What is Multi-Factor Authentication (MFA)?",
    subtitle: "Using multiple proofs of identity.",
    category: "Authentication",
    answer: {
      definition: "Multi-Factor Authentication (MFA) requires a user to provide two or more different forms of verification to prove their identity.",
      howItWorks: "It combines something you know (password), something you have (smartphone/security key), and/or something you are (fingerprint).",
      example: "When withdrawing money from an ATM, you need your debit card (something you have) AND your PIN (something you know). This is MFA.",
      whyImportant: "If an attacker steals your password, they still cannot access your account because they do not have your physical phone or fingerprint.",
      commonMistakes: [
        "Do not say using two passwords is automatically MFA. MFA uses multiple independent *factors*.",
        "Thinking SMS OTP is highly secure (it is vulnerable to SIM swapping)."
      ],
      interviewPoints: [
        "Knowledge factor: Password, PIN.",
        "Possession factor: Phone, Hardware token (YubiKey).",
        "Inherence factor: Fingerprint, Face ID.",
        "Significantly reduces the risk of account takeover."
      ],
      sampleAnswer: "MFA is a security mechanism that requires users to provide at least two different categories of credentials to verify their identity. It typically combines something the user knows, like a password, with something they have, like a smartphone app."
    },
    visualization: {
      type: "custom",
      customVisual: "MFA",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A company requires employees to log in using a password. If they forget their password, they must answer a security question (e.g., 'What is your mother's maiden name?').",
      question: "Does this setup qualify as Multi-Factor Authentication (MFA)?",
      options: [
        "Yes, because there are two steps.",
        "Yes, because a security question is a possession factor.",
        "No, because both the password and the security question belong to the same factor (Knowledge Factor).",
        "No, because MFA requires a biometric factor."
      ],
      correctAnswer: 2,
      explanation: "Both a password and a security question are 'Something you know' (Knowledge Factor). True MFA requires mixing factors, like Knowledge + Possession."
    }
  },
  {
    id: 7,
    question: "What is Single Sign-On (SSO)?",
    subtitle: "Log in once, access everything.",
    category: "Authentication",
    answer: {
      definition: "Single Sign-On (SSO) is an authentication method that allows a user to log in once with one set of credentials and access multiple independent applications.",
      howItWorks: "When you try to access an app, it redirects you to the SSO provider. You log in there. The SSO provider then gives you a 'token' that automatically logs you into all other connected apps.",
      example: "In a company, you log in to your Microsoft or Okta dashboard once in the morning. After that, you can open Salesforce, Slack, and Jira without having to type your password again.",
      whyImportant: "It improves user experience (no password fatigue) and increases security (IT only has to manage and secure one central login point).",
      commonMistakes: [
        "Thinking SSO is the same as a password manager. (Password managers auto-fill passwords; SSO uses tokens and trust).",
        "Thinking SSO removes the need for authorization."
      ],
      interviewPoints: [
        "Reduces password fatigue and helpdesk tickets for password resets.",
        "Centralizes access control and session management.",
        "If the central SSO is compromised, all connected apps are at risk (Single Point of Failure), which is why MFA is critical."
      ],
      sampleAnswer: "SSO is an authentication scheme that allows a user to authenticate once and gain access to multiple related, but independent, software systems without being prompted to log in again."
    },
    visualization: {
      type: "custom",
      customVisual: "SSO",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A company has 50 different SaaS applications. Employees complain about having to remember 50 different passwords.",
      question: "Which technology would best solve this problem while improving security?",
      options: [
        "Role-Based Access Control (RBAC)",
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)",
        "Zero Trust"
      ],
      correctAnswer: 1,
      explanation: "SSO allows employees to authenticate once to a central Identity Provider and gain seamless access to all 50 SaaS applications without needing separate passwords."
    }
  },
  {
    id: 8,
    question: "What is an Identity Provider (IdP)?",
    subtitle: "The central authority for user identities.",
    category: "Concepts",
    answer: {
      definition: "An Identity Provider (IdP) is a system that creates, maintains, and manages digital identities, and acts as the central authority for authenticating users.",
      howItWorks: "When a user tries to access a third-party application (Service Provider), the application trusts the IdP to verify the user's identity. The IdP checks the credentials and tells the app if the user is legitimate.",
      example: "When you use 'Log in with Google' on a random website, Google is acting as the Identity Provider. The website trusts Google to verify who you are.",
      whyImportant: "It centralizes identity management. Instead of every application building its own login screen and password database, they outsource authentication to a secure IdP.",
      commonMistakes: [
        "Confusing the Identity Provider (who verifies) with the Service Provider (the app you want to access)."
      ],
      interviewPoints: [
        "IdP manages the identity lifecycle (creation, update, deletion).",
        "IdP handles the actual authentication process.",
        "Examples include Okta, Microsoft Entra ID (Azure AD), and Ping Identity."
      ],
      sampleAnswer: "An Identity Provider is a trusted system that stores and manages user identities. It performs authentication and passes identity tokens to Service Providers so users can access applications."
    },
    visualization: {
      type: "custom",
      customVisual: "IdP",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A user attempts to log into the company's Salesforce environment. Salesforce redirects the user to Microsoft Entra ID to enter their credentials.",
      question: "In this scenario, what role is Microsoft Entra ID playing?",
      options: [
        "The Service Provider (SP)",
        "The Identity Provider (IdP)",
        "The Protected Resource",
        "The Local Network"
      ],
      correctAnswer: 1,
      explanation: "Microsoft Entra ID is verifying the credentials and managing the identity, making it the Identity Provider (IdP)."
    }
  },
  {
    id: 9,
    question: "What is a User Account in IAM?",
    subtitle: "The container for your identity and access.",
    category: "Concepts",
    answer: {
      definition: "A User Account is a record in an IT system that contains a user's digital identity, their credentials, and their assigned permissions.",
      howItWorks: "Accounts go through a lifecycle: they are created (Joiner), modified as the user changes roles (Mover), and disabled/deleted when the user leaves (Leaver).",
      example: "When you are hired, IT creates your Active Directory user account. This account holds your username, password, and tells systems what folders you can access.",
      whyImportant: "User accounts are the primary way systems track actions back to a specific individual for security auditing.",
      commonMistakes: [
        "Failing to disable user accounts immediately when an employee leaves the company (creating a huge security risk)."
      ],
      interviewPoints: [
        "Accounts have a lifecycle (Joiner, Mover, Leaver).",
        "Orphaned accounts (accounts belonging to people who left) are a major security vulnerability.",
        "Service accounts are user accounts for machines/apps, not humans."
      ],
      sampleAnswer: "A user account is a digital record managed by an IAM system that holds a subject's identity, authenticators, and authorization attributes. Managing the lifecycle of these accounts is critical for security."
    },
    visualization: {
      type: "custom",
      customVisual: "Lifecycle",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "An employee leaves the company on Friday. On Monday, they realize they still have access to their company email from their personal phone.",
      question: "Which IAM process failed in this scenario?",
      options: [
        "Authentication",
        "The 'Joiner' onboarding process",
        "The 'Leaver' offboarding process (Deprovisioning)",
        "Role-Based Access Control"
      ],
      correctAnswer: 2,
      explanation: "When an employee leaves, the Leaver process must immediately disable or deprovision their user account to revoke access."
    }
  },
  {
    id: 10,
    question: "What are Roles and Permissions?",
    subtitle: "The building blocks of authorization.",
    category: "Authorization",
    answer: {
      definition: "A Permission is a specific right to perform an action (like 'Read File'). A Role is a container that groups multiple permissions together (like 'Manager').",
      howItWorks: "Instead of giving 100 individual permissions directly to a user, an administrator puts those 100 permissions into a Role, and then assigns the Role to the user.",
      example: "Permission: 'Delete Database'. Role: 'Database Administrator'. If you assign the user the 'Database Administrator' role, they automatically get the 'Delete Database' permission.",
      whyImportant: "It makes managing access scalable and less prone to human error.",
      commonMistakes: [
        "Assigning permissions directly to users instead of assigning them to roles (makes auditing a nightmare).",
        "Confusing a role with a job title (they often align, but a role is a technical system object)."
      ],
      interviewPoints: [
        "Permissions = Actions (Read, Write, Execute).",
        "Roles = Collections of Permissions.",
        "Users are assigned to Roles, not directly to Permissions."
      ],
      sampleAnswer: "Permissions define the specific actions a user can take on a resource, such as read or write. Roles are logical groupings of those permissions. Users are assigned roles, which makes administration scalable."
    },
    visualization: {
      type: "custom",
      customVisual: "RBAC",
      steps: ["User", "Role", "Permissions", "Resource"],
      stepExplanations: [
        "The authenticated user needs access.",
        "The user is assigned a Role (e.g., Editor).",
        "The Role contains specific Permissions (e.g., Read, Write).",
        "The user accesses the Resource using those permissions."
      ],
      terms: []
    },
    practice: {
      scenario: "A security admin wants to give a user the ability to view logs, edit logs, and delete logs.",
      question: "What is the best practice for granting these three permissions?",
      options: [
        "Assign each of the three permissions directly to the user's account.",
        "Create a 'Log Admin' role, assign the three permissions to the role, and assign the role to the user.",
        "Give the user global administrator access.",
        "Share a generic admin password with the user."
      ],
      correctAnswer: 1,
      explanation: "Best practice is to group related permissions into a Role, and then assign the Role to the user. This simplifies future administration."
    }
  },
  {
    id: 11,
    question: "What is Role-Based Access Control (RBAC)?",
    subtitle: "Access based on your job function.",
    category: "Authorization",
    answer: {
      definition: "Role-Based Access Control (RBAC) is an authorization method where access is granted based on the user's assigned role within the organization.",
      howItWorks: "Users are assigned roles. Roles are assigned permissions. When a user tries to access a file, the system checks if their assigned role has the permission to do so.",
      example: "In a hospital, a 'Doctor' role has permissions to edit patient records, while a 'Nurse' role can only view them. A new doctor is simply assigned the 'Doctor' role and inherits the correct access.",
      whyImportant: "It drastically simplifies administration. When someone changes jobs, you just change their role, rather than manually adding/removing hundreds of individual permissions.",
      commonMistakes: [
        "Do not confuse a role with a permission.",
        "Creating too many highly specific roles, leading to 'Role Explosion' which is impossible to manage."
      ],
      interviewPoints: [
        "Access is based on Job Function.",
        "Highly scalable for large organizations.",
        "Does not easily handle dynamic context (like time of day or location)."
      ],
      sampleAnswer: "RBAC is an access control model where permissions are tied to specific roles, and users are granted access by being assigned to those roles. It simplifies administration and ensures consistent access policies."
    },
    visualization: {
      type: "custom",
      customVisual: "RBAC",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A company has 10,000 employees. Every time someone changes departments, IT spends hours manually updating their access to 20 different systems.",
      question: "Which model would best solve this administrative burden?",
      options: [
        "Multi-Factor Authentication (MFA)",
        "Role-Based Access Control (RBAC)",
        "Single Sign-On (SSO)",
        "Discretionary Access Control (DAC)"
      ],
      correctAnswer: 1,
      explanation: "RBAC solves this by allowing IT to simply remove the user from their old department's Role and add them to their new department's Role, automatically updating access across all systems."
    }
  },
  {
    id: 12,
    question: "What is Attribute-Based Access Control (ABAC)?",
    subtitle: "Access based on highly specific conditions.",
    category: "Authorization",
    answer: {
      definition: "Attribute-Based Access Control (ABAC) is an authorization model that evaluates specific attributes (user details, environment conditions, and resource properties) against rules to determine access.",
      howItWorks: "Instead of just checking a role, ABAC uses a policy engine to evaluate statements like: 'Allow IF User_Dept=Finance AND Time=9am-5pm AND Device_Status=Secure.'",
      example: "Even if you have the 'Finance Manager' role, ABAC might deny your access to the payroll database if you try to open it at 2:00 AM from a coffee shop WiFi.",
      whyImportant: "It provides highly granular, dynamic security that RBAC cannot achieve, which is essential for Zero Trust architectures.",
      commonMistakes: [
        "Do not describe ABAC as simply role-based access. It is policy-based and context-aware.",
        "Thinking ABAC is easy to implement (it requires complex policy engines)."
      ],
      interviewPoints: [
        "Evaluates User, Resource, Action, and Environment attributes.",
        "Provides fine-grained, dynamic access control.",
        "More complex to compute and implement than RBAC."
      ],
      sampleAnswer: "ABAC is an advanced authorization model that grants access by dynamically evaluating boolean rules against the attributes of the user, the resource, and the environmental context, such as time or location."
    },
    visualization: {
      type: "custom",
      customVisual: "ABAC",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A hospital implements a rule: 'Doctors can only access a patient's medical record if the doctor is currently physically located inside the hospital building.'",
      question: "Which access control model is required to enforce this location-based rule?",
      options: [
        "Role-Based Access Control (RBAC)",
        "Attribute-Based Access Control (ABAC)",
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)"
      ],
      correctAnswer: 1,
      explanation: "RBAC only checks if the user is a 'Doctor'. ABAC is required to dynamically check the environmental attribute (Location) at the time of the request."
    }
  },
  {
    id: 13,
    question: "What is the Principle of Least Privilege?",
    subtitle: "Giving only the exact access needed, nothing more.",
    category: "Concepts",
    answer: {
      definition: "The Principle of Least Privilege (PoLP) states that a user, program, or system should have the bare minimum permissions necessary to perform their job function, and no more.",
      howItWorks: "If a marketing employee only needs to read a report, you give them 'Read' access. You do not give them 'Edit' or 'Delete' access, just in case.",
      example: "A valet driver is given a special key to your car that only allows them to drive it up to 10 mph and cannot open the trunk or glovebox. They have the least privilege needed to park the car.",
      whyImportant: "If an attacker hacks a user's account, they can only do as much damage as the user's permissions allow. Least privilege limits the blast radius of an attack.",
      commonMistakes: [
        "Giving everyone 'Administrator' rights just because it's easier to set up.",
        "Not reviewing permissions over time (privilege creep)."
      ],
      interviewPoints: [
        "Reduces the attack surface and 'blast radius' of compromised accounts.",
        "Applies to humans, applications, and machine identities.",
        "Core foundation of Zero Trust security."
      ],
      sampleAnswer: "The Principle of Least Privilege ensures that identities are granted only the minimum level of access required to complete their specific tasks. This minimizes potential damage from errors or malicious attacks."
    },
    visualization: {
      type: "custom",
      customVisual: "LeastPrivilege",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A software developer needs to read data from a production database to troubleshoot a bug. IT grants them 'Full Database Administrator' access to solve the problem quickly.",
      question: "Which security concept was violated?",
      options: [
        "Authentication",
        "Single Sign-On",
        "The Principle of Least Privilege",
        "Role-Based Access Control"
      ],
      correctAnswer: 2,
      explanation: "The developer only needed 'Read' access. Granting 'Full Administrator' access gave them far more power than necessary, violating the Principle of Least Privilege."
    }
  },
  {
    id: 14,
    question: "What is Access Control?",
    subtitle: "The gatekeeper to your systems.",
    category: "Authorization",
    answer: {
      definition: "Access Control is the overarching process of deciding who gets to enter a system and what they are allowed to do once inside.",
      howItWorks: "It combines Authentication (verifying identity) and Authorization (checking permissions) to enforce security policies.",
      example: "A bouncer at a club is an access control mechanism. They check your ID to see who you are (Authentication) and check the VIP list to see if you can enter the VIP room (Authorization).",
      whyImportant: "Without access control, any person on the internet could access your company's internal servers and private data.",
      commonMistakes: [
        "Thinking Access Control is only about passwords.",
        "Implementing physical access control (door locks) but ignoring logical access control (computer security)."
      ],
      interviewPoints: [
        "It encompasses both Authentication and Authorization.",
        "Common models include RBAC, ABAC, and MAC (Mandatory Access Control).",
        "Goal is to mitigate risk and protect confidentiality, integrity, and availability."
      ],
      sampleAnswer: "Access control is a security technique that regulates who or what can view or use resources in a computing environment. It enforces policies by authenticating users and authorizing their access requests."
    },
    visualization: {
      type: "custom",
      customVisual: "ABAC",
      steps: ["User", "Request", "Policy", "Decision", "Resource"],
      stepExplanations: [
        "A user wants to access a resource.",
        "They submit an access request to the system.",
        "The system evaluates the request against Access Policies.",
        "A final Allow or Deny decision is made.",
        "If allowed, the user accesses the resource."
      ],
      terms: []
    },
    practice: {
      scenario: "A company implements a system that requires users to scan their fingerprint at the door, and then checks if they are on the approved entry list.",
      question: "This system is an example of what security concept?",
      options: [
        "Access Control",
        "Data Encryption",
        "Network Routing",
        "Antivirus Scanning"
      ],
      correctAnswer: 0,
      explanation: "The system is authenticating the user (fingerprint) and authorizing them (checking the list) to regulate entry. This is the definition of Access Control."
    }
  },
  {
    id: 15,
    question: "What is an Access Policy?",
    subtitle: "The rules the system follows.",
    category: "Authorization",
    answer: {
      definition: "An Access Policy is a set of rules defined by administrators that tells a system whether to allow or deny a specific access request.",
      howItWorks: "When a user requests access, the Policy Engine reads the policy. If the user's attributes or roles match the rules in the policy, access is granted. Otherwise, it is denied.",
      example: "A policy might state: 'Allow members of the Engineering Group to Read and Write to the Code Repository. Deny all other access.'",
      whyImportant: "Policies translate human business requirements ('Only managers can see salaries') into technical rules the computer can enforce.",
      commonMistakes: [
        "Writing overly broad policies (violating least privilege).",
        "Having conflicting policies that cause unexpected access denials."
      ],
      interviewPoints: [
        "Policies are evaluated by a Policy Decision Point (PDP).",
        "They use IF/THEN logic.",
        "Cloud environments heavily rely on JSON-based access policies (e.g., AWS IAM Policies)."
      ],
      sampleAnswer: "An access policy is a formalized set of rules that dictate the conditions under which a user or system is granted or denied access to a specific resource."
    },
    visualization: {
      type: "custom",
      customVisual: "ABAC",
      steps: ["Conditions", "Policy", "Allow/Deny"],
      stepExplanations: [
        "The system gathers the user's role and context.",
        "The Policy Engine evaluates these conditions against the written rules.",
        "The engine outputs a definitive Allow or Deny decision."
      ],
      terms: []
    },
    practice: {
      scenario: "An administrator writes a rule in AWS: 'Effect: Allow, Action: s3:GetObject, Resource: arn:aws:s3:::my-bucket/*'.",
      question: "What is this rule an example of?",
      options: [
        "An Access Policy",
        "An Identity Provider",
        "Multi-Factor Authentication",
        "A Service Account"
      ],
      correctAnswer: 0,
      explanation: "This is a technical rule that defines who is allowed to do what to a resource, which is the exact definition of an Access Policy."
    }
  },
  {
    id: 16,
    question: "What is Zero Trust Security?",
    subtitle: "Never trust, always verify.",
    category: "Zero Trust",
    answer: {
      definition: "Zero Trust is a security model based on the principle 'Never trust, always verify.' It assumes that threats exist both outside AND inside the network.",
      howItWorks: "Instead of trusting a user just because they are on the office Wi-Fi, Zero Trust requires strict identity verification, device health checks, and policy evaluation for EVERY single request, regardless of location.",
      example: "In the past, once you got past the castle moat (firewall), you were trusted. In Zero Trust, there are locked doors and ID checks inside every room of the castle.",
      whyImportant: "Modern work involves remote employees, mobile devices, and cloud apps. The old model of a 'trusted internal network' is obsolete and dangerous.",
      commonMistakes: [
        "Do not say Zero Trust means trusting nobody at all. It means access is explicitly verified rather than automatically granted.",
        "Thinking Zero Trust is a single software product you can buy."
      ],
      interviewPoints: [
        "Verify explicitly (Identity, Device, Context).",
        "Use least privilege access.",
        "Assume breach (micro-segmentation and encryption)."
      ],
      sampleAnswer: "Zero Trust is a strategic approach to cybersecurity that eliminates implicit trust. It requires all users and devices to be continuously authenticated and authorized before granting access, regardless of their network location."
    },
    visualization: {
      type: "custom",
      customVisual: "ZeroTrust",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A company implements a new security architecture where employees working from the corporate office must authenticate exactly the same way as employees working from a coffee shop.",
      question: "Which security model is this company following?",
      options: [
        "Implicit Trust",
        "Zero Trust",
        "Perimeter Security",
        "Discretionary Access Control"
      ],
      correctAnswer: 1,
      explanation: "Treating the internal network exactly the same as the external internet and requiring explicit verification everywhere is the core of Zero Trust."
    }
  },
  {
    id: 17,
    question: "What is SAML and how does it work?",
    subtitle: "The standard for enterprise Single Sign-On.",
    category: "Protocols",
    answer: {
      definition: "SAML (Security Assertion Markup Language) is an XML-based protocol used for enterprise Single Sign-On. It securely passes identity information between an Identity Provider and a Service Provider.",
      howItWorks: "When you open an app (SP), it sends you to the Identity Provider (IdP) to log in. Once verified, the IdP generates an XML document called a 'SAML Assertion' proving your identity, and sends it back to the app to log you in.",
      example: "It's like getting a stamped boarding pass. The airline check-in desk (IdP) checks your passport, prints a boarding pass (SAML Assertion), and you hand that pass to the gate agent (Service Provider) to board the plane.",
      whyImportant: "It allows companies to centralize authentication. Employees don't need a separate password for Salesforce, Workday, and Zoom.",
      commonMistakes: [
        "Confusing SAML (mostly for enterprise web SSO) with OAuth (mostly for API authorization).",
        "Thinking the Service Provider sees the user's password (it only sees the Assertion)."
      ],
      interviewPoints: [
        "XML-based open standard.",
        "Components: Principal (User), Identity Provider (IdP), Service Provider (SP).",
        "The IdP passes a digitally signed XML 'Assertion' to the SP."
      ],
      sampleAnswer: "SAML is an XML-based authentication protocol used primarily for enterprise Single Sign-On. It works by having an Identity Provider authenticate the user and then pass a digitally signed XML assertion to a Service Provider, granting access."
    },
    visualization: {
      type: "custom",
      customVisual: "SAML",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A user tries to log into Salesforce (Service Provider). Salesforce redirects them to Okta (Identity Provider) to authenticate. Okta then sends a signed XML document back to Salesforce confirming the user's identity.",
      question: "What is the name of this signed XML document?",
      options: [
        "A JSON Web Token (JWT)",
        "A SAML Assertion",
        "An Access Control List (ACL)",
        "An OAuth Access Token"
      ],
      correctAnswer: 1,
      explanation: "In the SAML protocol, the XML document that proves the user's identity is called a SAML Assertion."
    }
  },
  {
    id: 18,
    question: "What is Privileged Access Management (PAM)?",
    subtitle: "Securing the 'keys to the kingdom'.",
    category: "Concepts",
    answer: {
      definition: "Privileged Access Management (PAM) is a specialized area of IAM focused on securing, controlling, and monitoring accounts with elevated (administrative) permissions.",
      howItWorks: "Instead of administrators knowing the root passwords to critical servers, a PAM system stores the passwords in a secure vault. When an admin needs access, they log into the PAM system, which brokers a monitored, temporary session.",
      example: "If a bank manager needs to open the main vault, they don't carry the key in their pocket. They request the key from a secure lockbox, sign it out for 1 hour, and their actions are recorded on camera.",
      whyImportant: "Admin accounts are the primary target for hackers. If a hacker gets standard user access, they steal some data. If they get PAM access, they can destroy the entire company.",
      commonMistakes: [
        "Thinking PAM is just for human IT admins (service accounts and applications also need PAM).",
        "Allowing admins to bypass the PAM vault for 'emergencies'."
      ],
      interviewPoints: [
        "Focuses on securing 'Privileged' accounts (root, Administrator).",
        "Core features include credential vaulting, session recording, and Just-In-Time (JIT) access.",
        "Prevents lateral movement by attackers."
      ],
      sampleAnswer: "PAM is a cybersecurity strategy and toolset used to secure and monitor elevated accounts. It protects organizations from credential theft by vaulting admin passwords and recording privileged sessions."
    },
    visualization: {
      type: "custom",
      customVisual: "PAM",
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "An IT administrator needs to restart a critical database server. Instead of logging directly into the server, they log into a secure portal that temporarily provisions access and records their screen.",
      question: "What type of IAM system is the administrator using?",
      options: [
        "Single Sign-On (SSO)",
        "Privileged Access Management (PAM)",
        "Role-Based Access Control (RBAC)",
        "A Firewall"
      ],
      correctAnswer: 1,
      explanation: "Vaulting credentials, provisioning temporary access, and recording sessions for high-level administrative tasks are the core functions of a PAM system."
    }
  },
  {
    id: 19,
    question: "What is Conditional Access?",
    subtitle: "Security that adapts to the situation.",
    category: "Zero Trust",
    answer: {
      definition: "Conditional Access is a policy engine that evaluates the context of a login attempt (like location, device health, and user risk) in real-time to make a dynamic access decision.",
      howItWorks: "When a user logs in, the system checks signals. IF user is in a normal location on a secure device, THEN allow. IF user is in a new country, THEN require MFA. IF device is infected, THEN block.",
      example: "If you log in from your office laptop during the day, you get right in. If you try to log in from an unknown device in another country at 3 AM, the system forces you to pass MFA before granting access.",
      whyImportant: "It allows organizations to balance security and productivity. It only interrupts the user with security prompts when the situation is risky.",
      commonMistakes: [
        "Confusing it with basic authentication. Conditional Access happens *after* or *during* authentication to evaluate the risk.",
        "Setting policies so strictly that executives are constantly locked out."
      ],
      interviewPoints: [
        "Core component of Microsoft Entra ID and Zero Trust architectures.",
        "Evaluates Signals -> makes a Decision -> Enforces action (Allow/Block/MFA).",
        "Highly dynamic and context-aware."
      ],
      sampleAnswer: "Conditional Access is a zero-trust policy engine that analyzes real-time signals—such as user location, device posture, and risk level—to make dynamic decisions to allow, block, or require MFA for an access request."
    },
    visualization: {
      type: "custom",
      customVisual: "ABAC", 
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "A user successfully enters their correct password. However, the system notices they are logging in from an unmanaged personal iPad, so it denies access to the source code repository.",
      question: "Which technology enforced this rule?",
      options: [
        "Single Sign-On",
        "Conditional Access",
        "Password Complexity Rules",
        "SAML"
      ],
      correctAnswer: 1,
      explanation: "Conditional Access evaluates the context of the login (the fact that it's an unmanaged iPad) and dynamically enforces a block policy, even though the password was correct."
    }
  },
  {
    id: 20,
    question: "What happens when a user requests access to a protected resource?",
    subtitle: "The complete end-to-end IAM lifecycle.",
    category: "Zero Trust",
    answer: {
      definition: "When a user requests access, they undergo a sequence of Identity Verification, Authentication, Context Evaluation, and Authorization before a final decision is made.",
      howItWorks: "1. Request initiated. 2. System checks Identity. 3. User Authenticates (Password + MFA). 4. System checks Context (Device health, location). 5. System checks Authorization (Roles/Policies). 6. Allow or Deny.",
      example: "You click a link to open Payroll. The system asks who you are (Identity), asks for a fingerprint (Authentication), checks if your laptop is secure (Context), checks if you are in the HR group (Authorization), and finally lets you in.",
      whyImportant: "Understanding this end-to-end flow is the most important skill for an IAM professional, as it combines all the individual concepts into a working security model.",
      commonMistakes: [
        "Thinking the process stops after authentication.",
        "Forgetting that context (Zero Trust) is evaluated before authorization."
      ],
      interviewPoints: [
        "Combines Identity, AuthN, Zero Trust context, and AuthZ.",
        "A failure at ANY step results in an Access Denied.",
        "This end-to-end flow is exactly what you troubleshoot daily in IAM."
      ],
      sampleAnswer: "When a user requests access, the system first identifies and authenticates them. It then evaluates the context of the request, such as device health. Finally, it authorizes the request against access policies. If all checks pass, access is granted."
    },
    visualization: {
      type: "custom",
      customVisual: "ZeroTrust", 
      steps: [],
      stepExplanations: [],
      terms: []
    },
    practice: {
      scenario: "You are asked to explain the complete access flow to a junior analyst.",
      question: "Which of the following represents the correct chronological order of the standard IAM access flow?",
      options: [
        "Authorization -> Identity -> Authentication -> Resource Access",
        "Identity Claim -> Authentication -> Authorization -> Resource Access",
        "Resource Access -> Authentication -> Authorization -> Identity Claim",
        "Authentication -> Resource Access -> Authorization -> Identity Claim"
      ],
      correctAnswer: 1,
      explanation: "The user must first claim an identity. Then they prove it (Authentication). Then the system checks their permissions (Authorization). Finally, they are granted Resource Access."
    }
  }
];

const content = `import { Brain, Shield, Key, Fingerprint, Lock, Globe, Server, Database, Smartphone, User, Briefcase, FileCode, CheckCircle2, XCircle, AlertTriangle, Cpu, Network, Laptop, RefreshCw, KeyRound, MapPin, Tag, Clock } from 'lucide-react';

export const questions = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/questions.ts', content);
