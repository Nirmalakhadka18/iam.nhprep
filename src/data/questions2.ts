export const questions2 = [
  {
    id: 21,
    question: "What is the Principle of Least Privilege?",
    subtitle: "Giving users only the access they absolutely need.",
    category: "Access Control",
    answer: {
      definition: "The Principle of Least Privilege (PoLP) means giving a user, application, or device only the permissions it needs to perform its jobâ€”and no more.",
      howItWorks: "An employee who only needs to read customer records should receive read access rather than permission to modify or delete them. Flow: User â†’ Role â†’ Minimum Required Permissions â†’ Resource.",
      example: "A junior developer may need access to a development database but should not automatically have administrator access to the production database.",
      whyImportant: "It minimizes the potential damage if an account is compromised or misused by an insider.",
      commonMistakes: [
        "Thinking least privilege means giving everyone the same restricted access.",
        "Providing 'admin' access to avoid troubleshooting permission issues."
      ],
      interviewPoints: [
        "PoLP minimizes the attack surface.",
        "It limits the scope of a breach if credentials are stolen."
      ],
      sampleAnswer: "The Principle of Least Privilege means giving users or systems only the minimum permissions required to perform their tasks. It reduces the potential damage if an account is compromised or misused."
    },
    visualization: {
      layout: "q21",
      steps: ["User Request", "Evaluate Needs", "Grant Minimum Access"],
      stepExplanations: ["User requests access to a system.", "System evaluates the exact permissions needed for their role.", "Only the minimum necessary permissions are granted."]
    },
    practice: {
      scenario: "A marketing intern needs to view campaign metrics in the analytics dashboard.",
      question: "According to Least Privilege, what level of access should they receive?",
      options: ["Admin access", "Read-only access to metrics", "Read/Write access to campaigns", "No access"],
      correctAnswer: 1,
      explanation: "They only need to view the metrics, so read-only access is the minimum required permission. Note: In AWS, this identity-based Allow can still be overridden by an Explicit Deny from an SCP or Permissions Boundary."
    }
  },
  {
    id: 22,
    question: "What is Role-Based Access Control?",
    subtitle: "Managing access through job roles rather than individuals.",
    category: "Access Control",
    answer: {
      definition: "RBAC means permissions are assigned to roles, and users receive permissions through those roles.",
      howItWorks: "Instead of managing permissions per user, you map permissions to roles. Flow: User â†’ Role â†’ Permissions â†’ Resource.",
      example: "Alice â†’ HR Manager â†’ Employee Records â†’ Read/Update. Developer â†’ Development systems. Finance Employee â†’ Financial applications.",
      whyImportant: "It simplifies administration at scale. When someone changes jobs, you just change their role.",
      commonMistakes: [
        "Confusing RBAC (authorization) with authentication.",
        "Creating too many micro-roles (role explosion)."
      ],
      interviewPoints: [
        "Permissions are assigned to roles, not users directly.",
        "It drastically simplifies access management during employee onboarding/offboarding."
      ],
      sampleAnswer: "RBAC stands for Role-Based Access Control. Instead of assigning permissions individually to every user, permissions are grouped into roles and users are assigned those roles. This makes access easier to manage."
    },
    visualization: {
      layout: "q22",
      steps: ["User", "Role Assignment", "Permissions"],
      stepExplanations: ["The user is identified.", "The user is assigned a specific Role (e.g. Developer).", "The Role dictates which systems they can access."]
    },
    practice: {
      scenario: "A company has 500 employees. Instead of assigning individual file permissions to each employee, the IT team creates groups like 'HR', 'Finance', and 'Engineering'.",
      question: "What access control model is this?",
      options: ["ABAC", "MAC", "RBAC", "DAC"],
      correctAnswer: 2,
      explanation: "Grouping permissions by job function is the core concept of Role-Based Access Control (RBAC). In AWS, this is typically implemented by attaching managed policies to IAM Groups, or by having users assume IAM Roles via STS, rather than directly 'assigning' a role to a user."
    }
  },
  {
    id: 23,
    question: "What is Attribute-Based Access Control?",
    subtitle: "Making dynamic access decisions based on context.",
    category: "Access Control",
    answer: {
      definition: "ABAC makes access decisions using dynamic attributes and policies, such as User, Device, Resource, Location, and Time.",
      howItWorks: "User Attributes + Device Attributes + Resource + Context â†’ Policy â†’ Access Decision.",
      example: "A company allows an employee to access a sensitive application only if they are an authorized employee, using a compliant device, using MFA, and from an approved context.",
      whyImportant: "It provides highly granular, dynamic access control that adapts to the situation, which is essential for Zero Trust.",
      commonMistakes: [
        "Thinking ABAC is just RBAC with more roles."
      ],
      interviewPoints: [
        "ABAC evaluates attributes of the subject, resource, action, and environment.",
        "It enables dynamic 'Zero Trust' policies (e.g., block if coming from a new IP)."
      ],
      sampleAnswer: "ABAC stands for Attribute-Based Access Control. It makes authorization decisions based on attributes of the user, resource, device, and environment, combined with policies."
    },
    visualization: {
      layout: "q23",
      steps: ["Collect Attributes", "Policy Engine", "Access Decision"],
      stepExplanations: ["Gather user, device, and location context.", "Evaluate against the ABAC policy.", "Grant or deny access based on the exact context."]
    },
    practice: {
      scenario: "An employee tries to download a financial report. The system checks their department, their device's patch level, and their physical location before allowing the download.",
      question: "Which access control model is being used?",
      options: ["RBAC", "ABAC", "MAC", "DAC"],
      correctAnswer: 1,
      explanation: "Because the system is evaluating environmental and contextual attributes (e.g., location or Resource Tags) rather than just a role, this is ABAC. In AWS IAM, ABAC leverages condition keys like aws:PrincipalTag and aws:SourceIp."
    }
  },
  {
    id: 24,
    question: "RBAC vs ABAC â€” What is the Difference?",
    subtitle: "Static roles vs dynamic context.",
    category: "Access Control",
    answer: {
      definition: "RBAC asks 'Who are you in the organization?' while ABAC asks 'What are your attributes and what is the current context?'",
      howItWorks: "RBAC maps users to roles (static). ABAC maps users + context to policies (dynamic).",
      example: "RBAC: John â†’ Manager â†’ Access Report. ABAC: John + Company Device + Approved Location + Working Hours â†’ Access Report.",
      whyImportant: "Understanding the difference helps organizations choose the right complexity level for their security needs.",
      commonMistakes: [
        "Using RBAC when context (like device security) is needed.",
        "Overcomplicating a simple system by using ABAC when RBAC would suffice."
      ],
      interviewPoints: [
        "RBAC is generally simpler to manage.",
        "ABAC provides fine-grained, dynamic authorization."
      ],
      sampleAnswer: "RBAC assigns permissions through predefined roles, while ABAC evaluates attributes and contextual conditions. RBAC is generally simpler, while ABAC can provide more fine-grained and dynamic authorization."
    },
    visualization: {
      layout: "q24",
      steps: ["RBAC Approach", "ABAC Approach", "Comparison"],
      stepExplanations: ["RBAC relies solely on predefined roles.", "ABAC looks at the full picture: who, what, where, and when.", "ABAC is more dynamic but more complex to implement."]
    },
    practice: {
      scenario: "You need to ensure that managers can only approve expenses if they are physically inside the corporate office.",
      question: "Which model is required to enforce this?",
      options: ["RBAC", "ABAC", "Both are equally capable"],
      correctAnswer: 1,
      explanation: "RBAC cannot evaluate physical location (an environmental attribute). ABAC is required to evaluate location context."
    }
  },
  {
    id: 25,
    question: "What is Identity Lifecycle Management?",
    subtitle: "Joiner, Mover, Leaver.",
    category: "Identity Lifecycle",
    answer: {
      definition: "Identity lifecycle management manages a user's identity from joining an organization until leaving it.",
      howItWorks: "Typical lifecycle: Joiner (new employee) â†’ Mover (employee changes role) â†’ Leaver (employee leaves).",
      example: "When an employee joins finance, they get access. If they move to HR, finance permissions are removed and HR added. When they leave, access is revoked.",
      whyImportant: "It prevents 'permission creep' and ensures ex-employees don't retain access.",
      commonMistakes: [
        "Forgetting to remove old permissions when a user changes departments (Mover phase)."
      ],
      interviewPoints: [
        "Also known as JML (Joiner, Mover, Leaver).",
        "Automating this process is critical for enterprise security."
      ],
      sampleAnswer: "Identity lifecycle management is the process of creating, modifying, reviewing, and removing identities and their access throughout a user's lifecycle in an organization."
    },
    visualization: {
      layout: "q25",
      steps: ["Joiner", "Mover", "Leaver"],
      stepExplanations: ["Account is provisioned for a new employee.", "Permissions are adjusted as the employee changes roles.", "Account is deprovisioned when they leave."]
    },
    practice: {
      scenario: "An employee transfers from Marketing to Sales. They receive Sales access but their Marketing access is never removed.",
      question: "This is a failure of which lifecycle phase?",
      options: ["Joiner", "Mover", "Leaver"],
      correctAnswer: 1,
      explanation: "The 'Mover' phase requires adding new access and removing unneeded access to prevent permission creep. In modern AWS environments, identity lifecycle is rarely managed in AWS IAM directly; it is typically delegated to an external IdP via AWS IAM Identity Center."
    }
  },
  {
    id: 26,
    question: "What is User Provisioning?",
    subtitle: "Granting the keys to the kingdom.",
    category: "Identity Lifecycle",
    answer: {
      definition: "Provisioning means creating an identity and giving it the appropriate access to systems.",
      howItWorks: "New employee joins: HR System â†’ Identity Created â†’ Groups/Roles Assigned â†’ Applications Provisioned.",
      example: "An employee joining may automatically receive an Email account, Collaboration application, HR application, and Required business apps.",
      whyImportant: "Automated provisioning ensures Day 1 productivity and reduces human error in assigning access.",
      commonMistakes: [
        "Manually creating accounts, leading to inconsistencies."
      ],
      interviewPoints: [
        "Provisioning bridges HR systems with IT infrastructure.",
        "It sets up the initial state for the identity."
      ],
      sampleAnswer: "User provisioning is the process of creating a user account and assigning the appropriate access to applications and resources based on the user's role."
    },
    visualization: {
      layout: "q26",
      steps: ["HR Trigger", "Account Creation", "Access Granted"],
      stepExplanations: ["HR marks a new employee as hired.", "IAM system generates the digital identity.", "Downstream apps are provisioned with accounts for the user."]
    },
    practice: {
      scenario: "When a new contractor is hired, an IT admin manually creates their email, VPN, and database accounts.",
      question: "What process should be automated to fix this?",
      options: ["Deprovisioning", "User Provisioning", "Authentication", "SSO"],
      correctAnswer: 1,
      explanation: "User Provisioning is the process of creating accounts and assigning access, which should ideally be automated."
    }
  },
  {
    id: 27,
    question: "What is Deprovisioning?",
    subtitle: "Taking back the keys.",
    category: "Identity Lifecycle",
    answer: {
      definition: "Deprovisioning means removing access when it is no longer required.",
      howItWorks: "Employee leaves â†’ Account Disabled â†’ Sessions Revoked â†’ Application Access Removed.",
      example: "When an employee is terminated, an automated script immediately disables their AD account and revokes their SSO tokens.",
      whyImportant: "An old account that remains active (an 'orphan account') is a massive security risk and a prime target for hackers.",
      commonMistakes: [
        "Disabling the main email account but forgetting to disable third-party SaaS app access."
      ],
      interviewPoints: [
        "Timely deprovisioning is a strict compliance requirement for frameworks like SOC2.",
        "It involves killing active sessions, not just changing passwords."
      ],
      sampleAnswer: "Deprovisioning is the process of removing or disabling a user's access when it is no longer required, such as when an employee leaves the organization."
    },
    visualization: {
      layout: "q27",
      steps: ["Termination Event", "Disable Identity", "Revoke Sessions"],
      stepExplanations: ["HR updates status to terminated.", "IAM disables the core identity.", "All active application sessions are instantly killed."]
    },
    practice: {
      scenario: "A terminated employee logs in the next day and downloads a customer database.",
      question: "What IAM process completely failed here?",
      options: ["Provisioning", "Deprovisioning", "Authentication", "Authorization"],
      correctAnswer: 1,
      explanation: "Deprovisioning failed because their access was not removed upon termination."
    }
  },
  {
    id: 28,
    question: "What is Access Review?",
    subtitle: "Auditing who has what access.",
    category: "Identity Governance",
    answer: {
      definition: "An access review checks whether users still have the permissions they actually need.",
      howItWorks: "A system generates a report of access. A manager reviews it: 'Does John still require access to Finance?' The manager approves or removes access.",
      example: "Every 90 days, engineering managers must review and sign off on who has access to the production AWS environment.",
      whyImportant: "It catches 'permission creep' where employees accumulate access over time as they change projects.",
      commonMistakes: [
        "Rubber-stamping (managers blindly approving all access without checking)."
      ],
      interviewPoints: [
        "Access reviews are a core part of Identity Governance and Administration (IGA).",
        "They are mandated by almost all compliance audits."
      ],
      sampleAnswer: "An access review is a periodic process of checking user permissions to make sure access is still appropriate and follows least privilege."
    },
    visualization: {
      layout: "q28",
      steps: ["Generate Report", "Manager Review", "Action Taken"],
      stepExplanations: ["System lists all current permissions.", "Manager evaluates if the access is still needed.", "Unneeded access is revoked; required access is certified."]
    },
    practice: {
      scenario: "During an audit, it is discovered that 50 developers have admin access to a legacy server they haven't used in two years.",
      question: "What process would have prevented this?",
      options: ["MFA", "Periodic Access Reviews", "SSO", "Password Rotation"],
      correctAnswer: 1,
      explanation: "Periodic Access Reviews force managers to verify and revoke unneeded access."
    }
  },
  {
    id: 29,
    question: "What is Identity Governance?",
    subtitle: "The rules and audits of IAM.",
    category: "Identity Governance",
    answer: {
      definition: "Identity Governance focuses on controlling and managing who should have access to what, why they have it, and whether that access remains appropriate.",
      howItWorks: "It includes access requests, approvals, access reviews, role management, separation of duties, and compliance reporting.",
      example: "Using an IGA tool to enforce that no one can get admin access without two levels of managerial approval.",
      whyImportant: "It proves to auditors that the organization is actually in control of its data and access.",
      commonMistakes: [
        "Thinking IAM (giving access) and IGA (governing access) are exactly the same thing."
      ],
      interviewPoints: [
        "IGA is the 'policy and compliance' layer on top of standard IAM.",
        "It provides visibility into 'who has access to what and why?'"
      ],
      sampleAnswer: "Identity governance provides processes and controls for managing identity access throughout its lifecycle. It helps organizations ensure that users have appropriate access and that access can be reviewed and audited."
    },
    visualization: {
      layout: "q29",
      steps: ["Define Policies", "Enforce Rules", "Audit & Report"],
      stepExplanations: ["Create rules for how access should be managed.", "Enforce approvals and Separation of Duties.", "Prove compliance to auditors via reports."]
    },
    practice: {
      scenario: "An organization needs a system to prove to auditors that every user's access has been formally approved by a manager.",
      question: "Which domain of IAM does this fall under?",
      options: ["Authentication", "Identity Governance", "Privileged Access Management", "Federation"],
      correctAnswer: 1,
      explanation: "Identity Governance is responsible for approvals, access reviews, and compliance reporting."
    }
  },
  {
    id: 30,
    question: "What is Separation of Duties?",
    subtitle: "Never giving one person too much power.",
    category: "Identity Governance",
    answer: {
      definition: "Separation of Duties (SoD) means critical responsibilities should not be controlled by one person alone when that could create excessive risk.",
      howItWorks: "Employee A â†’ Requests an action. Employee B â†’ Approves the action.",
      example: "A software engineer can write code, but a different engineer must approve the pull request before it goes to production.",
      whyImportant: "It prevents fraud, sabotage, and catastrophic accidental errors.",
      commonMistakes: [
        "Allowing the person who creates a vendor account to also approve payments to that vendor."
      ],
      interviewPoints: [
        "SoD requires collusion (two people working together) to commit fraud, drastically reducing risk."
      ],
      sampleAnswer: "Separation of Duties reduces the risk of fraud or unauthorized activity by dividing sensitive responsibilities between different people or roles."
    },
    visualization: {
      layout: "q30",
      steps: ["Request Phase", "Approval Phase", "Execution Phase"],
      stepExplanations: ["User A initiates a sensitive request.", "User B (independent) reviews and approves it.", "The action is securely executed."]
    },
    practice: {
      scenario: "An IT admin has the permissions to both request a new laptop purchase and approve their own purchase request.",
      question: "What security principle is being violated?",
      options: ["Least Privilege", "Separation of Duties", "MFA", "Non-repudiation"],
      correctAnswer: 1,
      explanation: "Allowing the same person to both request and approve a financial transaction violates Separation of Duties."
    }
  },
  {
    id: 31,
    question: "What is Privileged Access?",
    subtitle: "The keys to the IT kingdom.",
    category: "Privileged Access",
    answer: {
      definition: "Privileged access allows someone to perform powerful administrative or security-sensitive actions.",
      howItWorks: "It grants the ability to create users, change security settings, modify servers, or manage databases.",
      example: "A 'root' account on a Linux server or a 'Global Admin' account in Microsoft 365.",
      whyImportant: "A compromised privileged account can cause catastrophic damage, including shutting down the entire company network.",
      commonMistakes: [
        "Using a privileged account for daily tasks like reading email or browsing the web."
      ],
      interviewPoints: [
        "Privileged accounts bypass standard restrictions.",
        "They are the primary target for advanced hackers."
      ],
      sampleAnswer: "Privileged access refers to permissions that allow users to perform administrative or highly sensitive operations. Because these permissions are powerful, they should be tightly controlled and monitored."
    },
    visualization: {
      layout: "q31",
      steps: ["Standard User", "Admin Role", "System Control"],
      stepExplanations: ["Standard users have restricted access.", "A user elevates to a privileged Admin role.", "They gain full control over sensitive infrastructure."]
    },
    practice: {
      scenario: "A database administrator logs into their workstation using an account named 'admin_jdoe' to read their daily emails.",
      question: "Why is this a bad practice?",
      options: ["It wastes server resources.", "Privileged accounts should not be used for daily tasks like email due to malware risks.", "Emails will be blocked.", "There is no issue with this."],
      correctAnswer: 1,
      explanation: "Using a privileged account for high-risk activities like email/web browsing exposes the entire network if they click a phishing link."
    }
  },
  {
    id: 32,
    question: "What is Privileged Access Management (PAM)?",
    subtitle: "Guarding the guards.",
    category: "Privileged Access",
    answer: {
      definition: "PAM is a set of controls and technologies used to secure privileged accounts and privileged access.",
      howItWorks: "Admin â†’ PAM Vault â†’ Authentication â†’ Approval/Policy â†’ Temporary Access â†’ Target System.",
      example: "An admin must log into a PAM vault (like CyberArk) with MFA to 'check out' the root password for a server, which automatically rotates after use.",
      whyImportant: "It prevents attackers who compromise a workstation from easily moving laterally to critical servers.",
      commonMistakes: [
        "Storing admin passwords in a shared spreadsheet instead of a PAM vault."
      ],
      interviewPoints: [
        "PAM involves credential vaulting, session recording, and password rotation.",
        "It enforces the principle of least privilege on IT staff."
      ],
      sampleAnswer: "PAM stands for Privileged Access Management. It protects privileged accounts and controls administrative access to sensitive systems."
    },
    visualization: {
      layout: "q32",
      steps: ["Admin Request", "PAM Vault Approval", "Temporary Session"],
      stepExplanations: ["Admin requests access.", "PAM vault checks policy and approves.", "A temporary, recorded session is granted to the server."]
    },
    practice: {
      scenario: "A company wants to record video sessions of everything an IT admin does while logged into a production database.",
      question: "Which technology is specifically designed for this?",
      options: ["SSO", "PAM", "Antivirus", "Firewall"],
      correctAnswer: 1,
      explanation: "Privileged Access Management (PAM) solutions typically include Vaulting, Session Monitoring, and Recording capabilities. While AWS integrates with third-party PAM vaults (e.g., CyberArk), AWS natively supports PAM session recording via Systems Manager Session Manager."
    }
  },
  {
    id: 33,
    question: "What is Just-In-Time Access?",
    subtitle: "Access only when you need it.",
    category: "Privileged Access",
    answer: {
      definition: "Just-In-Time (JIT) access provides privileged permissions only when they are needed and usually for a limited period.",
      howItWorks: "Request â†’ Approval â†’ Access Granted â†’ 30 Minutes Pass â†’ Access Automatically Removed.",
      example: "An administrator requests server access to fix a bug. They get access for exactly 1 hour, after which the permissions evaporate.",
      whyImportant: "It ensures there are 'Zero Standing Privileges' (ZSP). If a hacker steals the admin's token while they are sleeping, the token has no privileges.",
      commonMistakes: [
        "Granting permanent admin rights 'just in case' there is an emergency."
      ],
      interviewPoints: [
        "JIT minimizes the attack window.",
        "It eliminates 'Standing Privileges'."
      ],
      sampleAnswer: "Just-In-Time access provides privileged permissions only for a required period instead of keeping permanent administrative access. This reduces the amount of time privileged permissions are available."
    },
    visualization: {
      layout: "q33",
      steps: ["No Access", "JIT Elevation", "Access Revoked"],
      stepExplanations: ["Admin has 0 standing privileges.", "Admin requests and receives access for 1 hour.", "After 1 hour, access automatically reverts to zero."]
    },
    practice: {
      scenario: "To prevent hackers from exploiting inactive admin accounts, a company ensures that admin rights are only granted for a 2-hour window after an explicit request.",
      question: "This strategy is known as:",
      options: ["Just-In-Time Access", "SSO", "Role-Based Access", "Federation"],
      correctAnswer: 0,
      explanation: "Granting access dynamically for a limited time frame is the definition of Just-In-Time (JIT) access. A complete JIT workflow involves requests, approvals, and provisioning. In AWS, STS temporary credentials provide the time-bound mechanism to enforce JIT access."
    }
  },
  {
    id: 34,
    question: "What is Just-Enough Access?",
    subtitle: "Limiting the blast radius.",
    category: "Privileged Access",
    answer: {
      definition: "Just-Enough Access (JEA) means giving a user exactly the specific administrative permissions required for a specific task, and no more.",
      howItWorks: "While JIT answers 'When should access be available?', JEA answers 'How much access should be available?'",
      example: "An IT tech needs to restart a web server. JEA gives them permission to run the 'restart' command, but NOT the permission to delete files.",
      whyImportant: "It stops admins from accidentally (or maliciously) destroying systems they don't need full control over.",
      commonMistakes: [
        "Giving full 'Root' or 'Domain Admin' access just to restart a service."
      ],
      interviewPoints: [
        "JEA applies the Principle of Least Privilege to administrative tasks."
      ],
      sampleAnswer: "Just-enough access means providing only the specific permissions required to complete a task, supporting the principle of least privilege."
    },
    visualization: {
      layout: "q34",
      steps: ["Admin Request", "Filter Permissions", "Constrained Access"],
      stepExplanations: ["Admin requests to restart a server.", "JEA filters out all destructive commands.", "Admin can only execute the 'restart' command."]
    },
    practice: {
      scenario: "A junior admin needs to reset user passwords. Instead of making them a full Domain Admin, you give them a custom role that can ONLY reset passwords.",
      question: "This is a perfect example of:",
      options: ["Just-In-Time Access", "Just-Enough Access", "Identity Federation", "ABAC"],
      correctAnswer: 1,
      explanation: "Restricting the scope of what an admin can do to exactly what they need is the security goal of Just-Enough Access (JEA). In AWS, JEA can be technically implemented during role assumption by passing a Session Policy to dynamically constrain permissions."
    }
  },
  {
    id: 35,
    question: "What is a Privileged Account?",
    subtitle: "The most dangerous accounts in the network.",
    category: "Privileged Access",
    answer: {
      definition: "A privileged account has elevated permissions that ordinary users don't have.",
      howItWorks: "These accounts bypass standard security restrictions to manage the underlying infrastructure.",
      example: "Domain administrator, Cloud administrator (AWS Root), Database administrator, or a local 'root' account.",
      whyImportant: "If compromised, a hacker can use it to turn off antivirus, steal databases, and deploy ransomware organization-wide.",
      commonMistakes: [
        "Leaving default privileged accounts (like 'admin'/'password') active on network devices."
      ],
      interviewPoints: [
        "Privileged accounts are the ultimate target for cybercriminals.",
        "They must be protected by PAM and MFA."
      ],
      sampleAnswer: "A privileged account is an account with elevated permissions that can perform administrative or sensitive operations. These accounts require stronger controls and monitoring."
    },
    visualization: {
      layout: "q35",
      steps: ["Identify Privileged Accounts", "Secure with PAM", "Monitor Activity"],
      stepExplanations: ["Locate all root and admin accounts.", "Lock them behind a PAM vault with MFA.", "Log and monitor every command executed."]
    },
    practice: {
      scenario: "An attacker steals the credentials for an account that has permission to delete the entire company AWS environment.",
      question: "What type of account did the attacker steal?",
      options: ["Standard User Account", "Service Account", "Privileged Account", "Guest Account"],
      correctAnswer: 2,
      explanation: "An account with the power to destroy or manage infrastructure is a Privileged Account. Note: In AWS, even highly privileged identities (like AdministratorAccess) can be constrained by an Organizations SCP or a Permissions Boundary."
    }
  },
  {
    id: 36,
    question: "What is Identity Federation?",
    subtitle: "Trusting identities from other domains.",
    category: "Protocols",
    answer: {
      definition: "Identity federation allows users authenticated by one trusted identity system to access resources in another organization or security domain.",
      howItWorks: "Organization A Identity Provider â†” Trust Relationship â†” Organization B Application.",
      example: "A university student uses their university identity (credentials) to access a third-party educational platform without creating a new account.",
      whyImportant: "It eliminates the need to create new accounts for third-party B2B services, reducing password fatigue and administrative overhead.",
      commonMistakes: [
        "Confusing Federation with SSO (Federation is cross-domain, SSO is usually intra-domain)."
      ],
      interviewPoints: [
        "Federation relies on trust relationships between IdPs and SPs.",
        "It often uses protocols like SAML or OpenID Connect."
      ],
      sampleAnswer: "Identity federation establishes trust between identity systems so that users can use an identity from one organization or domain to access services in another domain."
    },
    visualization: {
      layout: "q36",
      steps: ["User Auth", "Federation Trust", "External Access"],
      stepExplanations: ["User authenticates to their home organization.", "A trust token is passed to the partner organization.", "User gains access to the partner's app."]
    },
    practice: {
      scenario: "Employees at 'Company A' use their normal company login to access a cloud HR application hosted by 'Vendor B'.",
      question: "This cross-domain trust relationship is an example of:",
      options: ["PAM", "Identity Federation", "ABAC", "Zero Trust"],
      correctAnswer: 1,
      explanation: "Logging into a third-party vendor app using your home organization's identity relies on Identity Federation."
    }
  },
  {
    id: 37,
    question: "What is SAML?",
    subtitle: "The enterprise standard for SSO.",
    category: "Protocols",
    answer: {
      definition: "SAML (Security Assertion Markup Language) is an XML-based standard used to exchange authentication and authorization data between an IdP and an SP.",
      howItWorks: "User â†’ Identity Provider (IdP) â†’ SAML Assertion (XML) â†’ Service Provider (SP).",
      example: "An employee signs into Okta (IdP). Okta generates an XML SAML Assertion and sends it to Salesforce (SP). Salesforce reads it and logs the user in.",
      whyImportant: "It is the backbone of traditional Enterprise Single Sign-On.",
      commonMistakes: [
        "Thinking SAML is an API protocol (it's primarily browser-based).",
        "Confusing SAML with OAuth."
      ],
      interviewPoints: [
        "SAML uses XML.",
        "It involves an Identity Provider (IdP) and a Service Provider (SP).",
        "It passes 'Assertions' containing user claims."
      ],
      sampleAnswer: "SAML is an XML-based standard commonly used for exchanging identity information between an Identity Provider and a Service Provider, especially in enterprise SSO."
    },
    visualization: {
      layout: "q37",
      steps: ["Request", "Redirect", "Auth", "Assertion"],
      stepExplanations: ["User tries to access the App.", "App redirects user to the IdP.", "IdP verifies user.", "IdP sends an XML SAML Assertion back to the App."]
    },
    practice: {
      scenario: "A legacy enterprise application requires an XML-based token containing identity claims to facilitate Single Sign-On.",
      question: "Which protocol is being used?",
      options: ["OAuth 2.0", "OIDC", "SAML", "RADIUS"],
      correctAnswer: 2,
      explanation: "SAML relies on XML-based tokens (assertions) to exchange identity data."
    }
  },
  {
    id: 38,
    question: "What is OAuth 2.0?",
    subtitle: "Delegated Authorization.",
    category: "Protocols",
    answer: {
      definition: "OAuth 2.0 is an authorization framework that allows an application to obtain limited access to a resource on behalf of a user.",
      howItWorks: "User â†’ Authorization Server â†’ Access Token â†’ Resource Server.",
      example: "A printing app wants to access your Google Photos. You log into Google and grant permission. The app gets an Access Token, not your password.",
      whyImportant: "It allows applications to share data securely without ever sharing user passwords.",
      commonMistakes: [
        "Calling OAuth 2.0 an authentication protocol. It is strictly for AUTHORIZATION (delegated access)."
      ],
      interviewPoints: [
        "OAuth deals with Access Tokens.",
        "It is for Authorization, NOT Authentication.",
        "It powers the 'Log in with Google' back-end API access."
      ],
      sampleAnswer: "OAuth 2.0 is an authorization framework that allows a client to obtain limited access to protected resources using access tokens instead of directly handling the user's password."
    },
    visualization: {
      layout: "q38",
      steps: ["User Consent", "Issue Token", "API Access"],
      stepExplanations: ["User grants the App permission.", "Auth server issues an Access Token.", "App uses the token to access APIs."]
    },
    practice: {
      scenario: "You want to allow a third-party application to read your calendar events, but you do NOT want to give them your password.",
      question: "Which framework is designed to handle this delegated authorization?",
      options: ["SAML", "OAuth 2.0", "Active Directory", "LDAP"],
      correctAnswer: 1,
      explanation: "OAuth 2.0 is the industry-standard protocol for authorization and delegated API access."
    }
  },
  {
    id: 39,
    question: "What is an Access Token?",
    subtitle: "The key to the API.",
    category: "Protocols",
    answer: {
      definition: "An access token is a credential used by a client to access protected resources/APIs.",
      howItWorks: "Authorization Server generates token â†’ App attaches token to HTTP Header â†’ Resource Server validates token and grants access.",
      example: "A mobile application receives a JWT (JSON Web Token) access token and uses it to request your bank balance from the bank's API.",
      whyImportant: "It replaces the need to send passwords with every API request.",
      commonMistakes: [
        "Using an access token to identify who the user is (that's what an ID Token is for)."
      ],
      interviewPoints: [
        "Access tokens are opaque to the client (the client just passes them along).",
        "They have a short lifespan and must be refreshed."
      ],
      sampleAnswer: "An access token is a credential that a client presents when requesting access to protected resources. The resource server uses the token and its associated permissions or scopes to determine what can be accessed."
    },
    visualization: {
      layout: "q39",
      steps: ["Receive Token", "API Request", "Validation"],
      stepExplanations: ["Client app receives an Access Token.", "App sends Token in the HTTP Authorization header.", "API server validates the token and returns data."]
    },
    practice: {
      scenario: "A mobile app sends a string of characters in the 'Authorization: Bearer' header to a backend server to retrieve user data.",
      question: "What is this string of characters called?",
      options: ["ID Token", "Access Token", "SAML Assertion", "Password Hash"],
      correctAnswer: 1,
      explanation: "An Access Token is typically sent as a Bearer token in the Authorization header to access an API."
    }
  },
  {
    id: 40,
    question: "What is OpenID Connect (OIDC)?",
    subtitle: "Identity on top of OAuth.",
    category: "Protocols",
    answer: {
      definition: "OpenID Connect (OIDC) is an authentication and identity layer built on top of OAuth 2.0.",
      howItWorks: "While OAuth provides an Access Token, OIDC adds an ID Token (always a JWT) that contains the user's identity details.",
      example: "When you use 'Sign in with Apple', the app uses OIDC to get an ID Token containing your name and email.",
      whyImportant: "Because OAuth is only for authorization, OIDC was created to standardize how apps authenticate users.",
      commonMistakes: [
        "Treating OIDC and OAuth as completely separate. OIDC is an extension of OAuth."
      ],
      interviewPoints: [
        "OIDC = OAuth 2.0 + Identity (Authentication).",
        "It standardizes the 'ID Token'."
      ],
      sampleAnswer: "OpenID Connect is an authentication and identity protocol built on OAuth 2.0. It allows an application to verify the user's identity and obtain standardized identity information."
    },
    visualization: {
      layout: "q40",
      steps: ["Auth Request", "Tokens Issued", "Identity Verified"],
      stepExplanations: ["App requests identity scopes (openid, email).", "Auth server returns both an Access Token AND an ID Token.", "App reads the ID Token to log the user in."]
    },
    practice: {
      scenario: "You are building a modern web app and need a protocol that provides both API access (Authorization) and user profile information (Authentication).",
      question: "Which protocol should you choose?",
      options: ["SAML", "Pure OAuth 2.0", "OpenID Connect (OIDC)", "LDAP"],
      correctAnswer: 2,
      explanation: "OIDC sits on top of OAuth 2.0 to provide both an ID Token (Authentication) and an Access Token (Authorization)."
    }
  },
  {
    id: 41,
    question: "What is an ID Token?",
    subtitle: "Your digital ID card.",
    category: "Protocols",
    answer: {
      definition: "An ID token is issued in OpenID Connect and contains claims (information) about the authenticated user.",
      howItWorks: "It is a JSON Web Token (JWT) that the client application decodes to find out who logged in (e.g., their email, name, and login time).",
      example: "An ID token might contain: { 'sub': '123', 'name': 'Alex', 'email': 'alex@company.com' }.",
      whyImportant: "It provides the client app with cryptographic proof of who the user is.",
      commonMistakes: [
        "Sending an ID token to an API to gain access. (APIs require Access Tokens, not ID Tokens)."
      ],
      interviewPoints: [
        "ID Token is for the Client Application.",
        "Access Token is for the Resource Server (API).",
        "ID Tokens are always JWTs."
      ],
      sampleAnswer: "An ID token is an OpenID Connect token that provides identity information about the authenticated user to the client application."
    },
    visualization: {
      layout: "q41",
      steps: ["Receive ID Token", "Decode JWT", "Read Claims"],
      stepExplanations: ["App receives the ID Token from the Auth Server.", "App decodes the base64 JWT payload.", "App reads the user's email and logs them in."]
    },
    practice: {
      scenario: "A frontend React application wants to display the logged-in user's profile picture and email address in the top right corner.",
      question: "Which token should it read to get this information?",
      options: ["Access Token", "Refresh Token", "ID Token", "Session Cookie"],
      correctAnswer: 2,
      explanation: "The ID Token is specifically designed to carry user identity claims (like email and profile picture) to the client application."
    }
  },
  {
    id: 42,
    question: "What is Single Sign-On (SSO)?",
    subtitle: "Log in once, access everything.",
    category: "Concepts",
    answer: {
      definition: "Single Sign-On (SSO) allows a user to authenticate through an identity system and then access multiple connected applications without separately authenticating to each one.",
      howItWorks: "User logs into the IdP. The IdP generates a master session. When the user visits an SP (like Slack), the IdP passes a token (like SAML/OIDC) to automatically log them in.",
      example: "Logging into Microsoft Entra ID once in the morning, and seamlessly accessing Outlook, Teams, and Salesforce all day without typing your password again.",
      whyImportant: "Improves security (users don't write down 50 passwords) and UX.",
      commonMistakes: [
        "Thinking SSO means you never have to authenticate. You still authenticate once to the central IdP."
      ],
      interviewPoints: [
        "SSO relies on a central Identity Provider (IdP).",
        "It uses protocols like SAML and OIDC to pass trust to Service Providers (SP)."
      ],
      sampleAnswer: "SSO allows users to authenticate through a central identity system and access multiple trusted applications without having to independently sign in to each application."
    },
    visualization: {
      layout: "q42",
      steps: ["Login to IdP", "Access App A", "Access App B"],
      stepExplanations: ["User logs into the central Identity Provider.", "IdP issues token for App A. No password needed.", "IdP issues token for App B. No password needed."]
    },
    practice: {
      scenario: "A user is complaining that they have to remember 15 different passwords for 15 different company applications.",
      question: "What solution should the IT team implement?",
      options: ["MFA", "Single Sign-On (SSO)", "ABAC", "VPN"],
      correctAnswer: 1,
      explanation: "SSO solves password fatigue by allowing users to authenticate once to a central IdP and access all connected apps seamlessly."
    }
  },
  {
    id: 43,
    question: "What is Adaptive Authentication?",
    subtitle: "Smart security that adjusts to context.",
    category: "Authentication",
    answer: {
      definition: "Adaptive authentication dynamically adjusts authentication requirements based on risk and context.",
      howItWorks: "Normal login (known device) â†’ Password only. Suspicious login (new device) â†’ Password + SMS + Authenticator App.",
      example: "If you log in from your office desk every day, you just use a fingerprint. If you log in from a new country at 3 AM, the system forces you to answer security questions and enter an MFA code.",
      whyImportant: "It balances user friction with high security, only annoying users with MFA when the system detects risk.",
      commonMistakes: [
        "Confusing it with static MFA (where MFA is ALWAYS required regardless of risk)."
      ],
      interviewPoints: [
        "It analyzes contextual signals (IP, velocity, device).",
        "It 'steps up' authentication only when risk is high."
      ],
      sampleAnswer: "Adaptive authentication changes authentication requirements based on factors such as device, location, behavior, or risk. Higher-risk situations can require stronger verification."
    },
    visualization: {
      layout: "q43",
      steps: ["Assess Context", "Low Risk", "High Risk"],
      stepExplanations: ["System checks IP, time, and device.", "If low risk, allow seamless login.", "If high risk, step-up and challenge for MFA."]
    },
    practice: {
      scenario: "An employee logs in from a known corporate IP and is not prompted for MFA. Later that day, they try to log in from a public coffee shop IP and the system immediately prompts them for an MFA code.",
      question: "What kind of system is this?",
      options: ["Static MFA", "Adaptive Authentication", "SAML", "RBAC"],
      correctAnswer: 1,
      explanation: "Because authentication requirements adapted dynamically based on location/network context, this is Adaptive Authentication. This broad industry concept is supported in AWS via Amazon Cognito Advanced Security Features (ASF)."
    }
  },
  {
    id: 44,
    question: "What is Risk-Based Authentication?",
    subtitle: "Scoring the login attempt.",
    category: "Authentication",
    answer: {
      definition: "Risk-based authentication evaluates signals to calculate a risk score to estimate whether a login attempt appears malicious.",
      howItWorks: "Signals (Impossible travel, Suspicious IP, Unseen device) â†’ Risk Engine â†’ Low/Medium/High Risk Score â†’ Policy Decision.",
      example: "A login from London at 1:00 PM, followed by a login from Tokyo at 1:05 PM triggers an 'Impossible Travel' high-risk flag, blocking the login.",
      whyImportant: "It stops attackers who have stolen valid passwords by recognizing that their behavior/location doesn't match the real user.",
      commonMistakes: [
        "Assuming risk-based authentication is a replacement for passwords (it works ALONGSIDE passwords)."
      ],
      interviewPoints: [
        "Key concept: 'Impossible Travel'.",
        "It relies heavily on machine learning and behavioral analytics."
      ],
      sampleAnswer: "Risk-based authentication evaluates contextual signals during login and can require additional verification or deny access when the risk is considered high."
    },
    visualization: {
      layout: "q44",
      steps: ["Gather Signals", "Calculate Score", "Enforce Policy"],
      stepExplanations: ["Collect IP, device ID, and location.", "AI calculates a risk score (e.g. 85/100).", "If score > 80, block access or demand MFA."]
    },
    practice: {
      scenario: "An identity provider notices that an account is trying to log in from 5 different countries within a 10-minute window.",
      question: "What specific metric will flag this behavior?",
      options: ["Just-In-Time Access", "Impossible Travel", "Role-Based Access", "SSO Assertion"],
      correctAnswer: 1,
      explanation: "Logging in from locations physically impossible to travel between in a given timeframe is flagged as 'Impossible Travel'. This risk-based concept is supported across various SIEMs and IdPs, including AWS GuardDuty and Amazon Cognito."
    }
  },
  {
    id: 45,
    question: "What is Conditional Access?",
    subtitle: "If X and Y, then Z.",
    category: "Zero Trust",
    answer: {
      definition: "Conditional Access makes access decisions based on if-then conditions.",
      howItWorks: "IF [User=Admin] AND [Location=External] AND [Device=Unmanaged] THEN [Require MFA].",
      example: "A company policy states: 'If a user tries to access the payroll app from outside the office, they must use a company-managed laptop and pass MFA.'",
      whyImportant: "It is the policy engine that drives a Zero Trust architecture.",
      commonMistakes: [
        "Thinking it only applies to logins. Conditional access can apply continuously to every request."
      ],
      interviewPoints: [
        "It acts as the 'Policy Engine' in a Zero Trust framework.",
        "It evaluates Identity + Device + Context."
      ],
      sampleAnswer: "Conditional Access applies access policies based on conditions such as user identity, device compliance, location, application, and risk."
    },
    visualization: {
      layout: "q45",
      steps: ["Condition 1", "Condition 2", "Decision"],
      stepExplanations: ["Is the user an admin?", "Is the device compliant?", "Evaluate conditions and Output Allow/Block/MFA."]
    },
    practice: {
      scenario: "An IT admin configures a rule: 'Block all logins that originate from outside the United States, regardless of whether the password is correct.'",
      question: "What type of policy is this?",
      options: ["SSO Policy", "Conditional Access Policy", "JIT Policy", "Federation Policy"],
      correctAnswer: 1,
      explanation: "Using an if-then rule based on location context to determine access is the core definition of a Conditional Access policy."
    }
  },
  {
    id: 46,
    question: "What is Device Posture?",
    subtitle: "Is your laptop safe enough?",
    category: "Zero Trust",
    answer: {
      definition: "Device posture describes the security and compliance state of a device attempting to access a network.",
      howItWorks: "Checks: Is the device managed? Is encryption enabled? Is OS patched? Is antivirus running?",
      example: "If an employee tries to log into Salesforce from a personal iPad with outdated software, the device posture check fails and access is blocked.",
      whyImportant: "In Zero Trust, verifying the user's identity is not enough; you must also verify that the device they are using is not compromised.",
      commonMistakes: [
        "Assuming a corporate-owned laptop is automatically secure (it must still be checked in real-time)."
      ],
      interviewPoints: [
        "It shifts focus from 'network trust' to 'device trust'.",
        "Commonly implemented via MDM (Mobile Device Management) integration."
      ],
      sampleAnswer: "Device posture is the security state of a device. Organizations can evaluate factors such as management status, encryption, operating system, and security controls before allowing access."
    },
    visualization: {
      layout: "q46",
      steps: ["Device Connects", "Posture Check", "Access Decision"],
      stepExplanations: ["Device requests access.", "Agent checks for antivirus, encryption, and patches.", "If compliant, access is granted."]
    },
    practice: {
      scenario: "An employee has the correct password and MFA code, but they are trying to access the network from a laptop that doesn't have an antivirus installed.",
      question: "Which Zero Trust signal will block them?",
      options: ["Identity Risk", "Device Posture", "Location Context", "SSO Failure"],
      correctAnswer: 1,
      explanation: "Checking the health, security software, and compliance of the hardware is known as Device Posture evaluation."
    }
  },
  {
    id: 47,
    question: "What is Continuous Verification in Zero Trust?",
    subtitle: "Trust is never permanent.",
    category: "Zero Trust",
    answer: {
      definition: "Continuous verification means access decisions are constantly reevaluated, not just checked once at login.",
      howItWorks: "User logs in (Checked) â†’ 2 hours later, device turns off antivirus â†’ System detects state change (Re-evaluates) â†’ Session Killed.",
      example: "If a user's location suddenly changes to another country in the middle of an active session, the system instantly revokes their tokens and demands re-authentication.",
      whyImportant: "Traditional security assumed 'once you are in, you are trusted for the whole day.' Zero Trust assumes you could be compromised at any second.",
      commonMistakes: [
        "Relying on session tokens that last 30 days without ever re-checking device health."
      ],
      interviewPoints: [
        "It embraces the 'Assume Breach' mentality.",
        "It requires Continuous Access Evaluation (CAE) technology."
      ],
      sampleAnswer: "Continuous verification means access decisions can be reevaluated as identity, device, context, or risk changes rather than treating the initial login as permanent trust."
    },
    visualization: {
      layout: "q47",
      steps: ["Initial Login", "Session Active", "Threat Detected", "Session Terminated"],
      stepExplanations: ["User passes initial checks.", "User works normally.", "Device downloads malware mid-session.", "Continuous Evaluation immediately revokes access."]
    },
    practice: {
      scenario: "A user logs in successfully at 9 AM. At 11 AM, their laptop gets infected with malware. The IAM system instantly revokes their active session tokens.",
      question: "Which Zero Trust principle made this possible?",
      options: ["Least Privilege", "SSO", "Continuous Verification", "Identity Federation"],
      correctAnswer: 2,
      explanation: "Constantly evaluating the session for risk and revoking it mid-flight is the Continuous Verification ideal. In AWS, this is supported for specific services via IAM Continuous Access Evaluation (CAE) which can terminate active STS sessions upon policy changes."
    }
  },
  {
    id: 48,
    question: "What is Micro-Segmentation?",
    subtitle: "Isolating the blast radius.",
    category: "Zero Trust",
    answer: {
      definition: "Micro-segmentation divides a network into extremely small security zones down to the individual workload level, strictly controlling communication between them.",
      howItWorks: "Instead of a giant internal network where any server can talk to any server, a firewall policy is wrapped around every single server.",
      example: "The Web Server can talk to the App Server. The App Server can talk to the Database. The Web Server CANNOT talk directly to the Database.",
      whyImportant: "If a hacker breaches the Web Server, micro-segmentation physically stops them from moving laterally to the Database.",
      commonMistakes: [
        "Thinking standard VLANs are micro-segmentation. Micro-segmentation goes much deeper, often to the application process level."
      ],
      interviewPoints: [
        "It prevents Lateral Movement.",
        "It enforces Least Privilege at the network layer."
      ],
      sampleAnswer: "Micro-segmentation divides environments into smaller security zones and applies policies to control communication between workloads or systems. It can reduce lateral movement after a compromise."
    },
    visualization: {
      layout: "q48",
      steps: ["Flat Network", "Breach", "Micro-Segmented"],
      stepExplanations: ["Old way: Once inside, everything connects.", "Attacker moves laterally across the whole flat network.", "New way: Tiny security perimeters trap the attacker in one node."]
    },
    practice: {
      scenario: "An attacker compromises an HR web server. However, they are completely blocked from scanning or connecting to the Finance database server on the same network.",
      question: "What architectural concept stopped them?",
      options: ["SSO", "Micro-Segmentation", "MFA", "OIDC"],
      correctAnswer: 1,
      explanation: "Isolating workloads from each other to prevent lateral movement is the primary goal of Micro-Segmentation."
    }
  },
  {
    id: 49,
    question: "What is an IAM Audit Log?",
    subtitle: "The digital paper trail.",
    category: "Identity Governance",
    answer: {
      definition: "An IAM audit log records important identity and access-related activities for security analysis and compliance.",
      howItWorks: "It logs Who did What, When, Where, and What the result was. (e.g. John logged into Finance at 10:42 AM via MFA - Allowed).",
      example: "An alert fires because the audit log shows an admin account deleted 50 users at 3 AM on a Sunday.",
      whyImportant: "Without logs, it is impossible to investigate a data breach or prove compliance to auditors.",
      commonMistakes: [
        "Storing logs locally on the server instead of sending them to a secure, centralized SIEM."
      ],
      interviewPoints: [
        "Logs provide Non-Repudiation (you can prove who did it).",
        "They are the fuel for SIEM (Security Information and Event Management) tools."
      ],
      sampleAnswer: "IAM audit logs record identity and access activities so organizations can investigate security events, troubleshoot access problems, and support monitoring and compliance."
    },
    visualization: {
      layout: "q49",
      steps: ["Action Occurs", "Event Logged", "SIEM Alert"],
      stepExplanations: ["User attempts to access a restricted file.", "The event is recorded with timestamp and IP.", "Security team is alerted to suspicious behavior."]
    },
    practice: {
      scenario: "A security analyst needs to prove to an auditor that only authorized admins accessed the customer database last month.",
      question: "What system will the analyst use to generate this proof?",
      options: ["IAM Audit Logs", "SAML Assertions", "OAuth Tokens", "Firewall Rules"],
      correctAnswer: 0,
      explanation: "Audit logs provide the historical record of exactly who accessed what and when."
    }
  },
  {
    id: 50,
    question: "Explain a Complete IAM and Zero Trust Access Scenario",
    subtitle: "Putting it all together.",
    category: "Zero Trust",
    answer: {
      definition: "A complete Zero Trust flow evaluates Identity, Device, Context, and Policy continuously.",
      howItWorks: "1. Identity Verified (SSO) â†’ 2. Auth (Password) â†’ 3. MFA â†’ 4. Device Posture Checked â†’ 5. Context Evaluated â†’ 6. Policy Evaluated â†’ 7. Authorization Granted â†’ 8. Continuous Evaluation.",
      example: "Employee accesses app remotely. They pass MFA. Device is compliant. Access is granted. Later, device becomes non-compliant due to malware. Continuous evaluation instantly revokes access.",
      whyImportant: "It moves away from 'trust by default' to 'never trust, always verify'.",
      commonMistakes: [
        "Assuming that a strong password makes Zero Trust complete (it's only step 2 out of 8)."
      ],
      interviewPoints: [
        "Authentication alone is not enough.",
        "Device and Context are equal partners to Identity.",
        "Trust must be continuously verified."
      ],
      sampleAnswer: "In a Zero Trust environment, authentication is only one part of the access decision. First, the user's identity is verified using MFA. Then the organization evaluates the device's posture and context. An authorization policy evaluates these conditions and determines access. Access is then continuously reevaluated."
    },
    visualization: {
      layout: "q50",
      steps: ["Identity", "MFA", "Device Posture", "Context", "Policy Engine", "Access Decision"],
      stepExplanations: ["Who are you?", "Prove it with a second factor.", "Is your device secure?", "Where and when are you logging in?", "Evaluate all signals against rules.", "Allow or Deny."]
    },
    practice: {
      scenario: "During an interview, you are asked: 'Does successful authentication automatically mean access should be granted in Zero Trust?'",
      question: "What is the correct answer?",
      options: [
        "Yes, if the password is correct.",
        "Yes, if they also pass MFA.",
        "No. Authorization policies, device posture, and context must also be evaluated.",
        "No, but only if they are an admin."
      ],
      correctAnswer: 2,
      explanation: "In Zero Trust, proving who you are (Authentication) does not guarantee you are allowed to access a specific resource from your current device/location (Authorization). A standard AWS reference architecture for this combines IAM Identity Center, AWS Verified Access, and IAM Policies."
    }
  }
];

