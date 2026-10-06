import re

STEPS = {
    "q6": {
        "steps": ["Employee", "Password", "Smartphone OTP", "Biometric Scan", "All Factors Verified"],
        "stepExplanations": [
            "The employee attempts to log in to a company resource.",
            "Step 1: They enter something they KNOW — their password.",
            "Step 2: They receive an OTP on their phone — something they HAVE.",
            "Step 3: They scan their fingerprint — something they ARE.",
            "All three independent factors verified. MFA is complete."
        ]
    },
    "q7": {
        "steps": ["Employee", "Identity Provider", "Email App", "HR App", "All Apps Unlocked"],
        "stepExplanations": [
            "The employee wants to access multiple company applications.",
            "They log in ONCE to the Identity Provider (e.g., Okta, Azure AD).",
            "SSO token grants silent access to Email without another login.",
            "Same token grants access to the HR application.",
            "One login — all approved applications are accessible."
        ]
    },
    "q8": {
        "steps": ["User", "Authentication", "Identity Directory", "Token Issued", "Application"],
        "stepExplanations": [
            "A user wants to access a company application.",
            "The IdP verifies the user's credentials (password + MFA).",
            "The IdP checks its internal directory for the user's account.",
            "The IdP issues a signed token confirming the user's identity.",
            "The application accepts the token and grants access."
        ]
    },
    "q9": {
        "steps": ["Employee Joins", "Account Created", "Account Active", "Account Suspended", "Account Disabled"],
        "stepExplanations": [
            "A new employee joins the organization.",
            "The IAM system creates a new user account for them.",
            "The account becomes active — the employee can log in.",
            "If suspicious activity is detected, the account is suspended.",
            "When the employee leaves, the account is permanently disabled."
        ]
    },
    "q11": {
        "steps": ["Users (Alex, Sarah, John)", "Roles Assigned", "Permissions Granted", "Resources Accessed"],
        "stepExplanations": [
            "Multiple users exist in the organization with different job functions.",
            "Each user is assigned a Role based on their job (Developer, HR, Finance).",
            "Each Role carries predefined permissions (Read code, Access payroll, etc.).",
            "Users access only the systems their Role permits — no more, no less."
        ]
    },
    "q12": {
        "steps": ["User Attributes", "Device Attributes", "Context Evaluated", "ABAC Policy Engine", "Decision"],
        "stepExplanations": [
            "The system reads the user's attributes: Department=Finance, Clearance=Level 2.",
            "The system checks the device: Managed=Yes, Patched=Yes.",
            "Context is checked: Location=Office, Time=Business Hours.",
            "The ABAC engine compares all attributes against the policy rules.",
            "If all conditions match the policy, access is ALLOWED. Otherwise DENIED."
        ]
    },
    "q13": {
        "steps": ["Developer Joins", "Excess Permissions Identified", "Permissions Removed", "Minimal Access Granted"],
        "stepExplanations": [
            "A new developer is provisioned with a default over-privileged account.",
            "Security review identifies permissions they do not need (Admin, Delete DB, Payroll).",
            "Excess permissions are stripped. Only job-relevant permissions remain.",
            "Developer now has only Read Code and Write Code — the minimum required."
        ]
    },
    "q16": {
        "steps": ["User Request", "Identity Verified", "Device Checked", "Context Evaluated", "Policy Applied", "Resource Granted"],
        "stepExplanations": [
            "A user — even inside the corporate network — makes an access request.",
            "Identity is verified. Zero Trust never assumes you are who you say you are.",
            "Device health is checked: Is it managed? Patched? Compliant?",
            "Context is evaluated: location, time, risk score, behaviour patterns.",
            "A real-time policy decision is made based on all signals combined.",
            "If all checks pass, access is granted — but verification continues continuously."
        ]
    },
    "q17": {
        "steps": ["Browser", "Service Provider", "Redirect to IdP", "SAML Assertion", "Application Access"],
        "stepExplanations": [
            "The user navigates to a web application (Service Provider) in their browser.",
            "The Service Provider does not authenticate users itself — it redirects to the IdP.",
            "The browser is redirected to the Identity Provider login page.",
            "After successful login, the IdP sends a signed XML SAML Assertion back.",
            "The Service Provider validates the assertion and grants application access."
        ]
    },
    "q18": {
        "steps": ["Admin User", "Privileged Request", "PAM Approval", "Temporary Access", "Session Recorded", "Access Revoked"],
        "stepExplanations": [
            "An administrator needs to access a critical production server.",
            "They submit a privileged access request through the PAM system.",
            "The PAM system reviews the request and issues time-limited credentials.",
            "The admin gets temporary access — valid for 1 hour only.",
            "Every command and action is recorded in the PAM audit log.",
            "When the time expires, access is automatically revoked. Credentials are rotated."
        ]
    },
    "q19": {
        "steps": ["Access Request", "Conditions Evaluated", "Risk Assessed", "Policy Decision", "MFA Required", "Access Decision"],
        "stepExplanations": [
            "A user attempts to access a company resource.",
            "Conditions are evaluated: user role, device compliance, location, time.",
            "Risk signals are gathered: unusual login time, foreign IP, unmanaged device.",
            "The Conditional Access policy engine processes all conditions and signals.",
            "High-risk access triggers a step-up: MFA must be completed.",
            "Final decision: Allow (low risk), Require MFA (medium risk), or Block (high risk)."
        ]
    },
    "q20": {
        "steps": ["User Identity", "Authentication", "Context", "Authorization", "Policy Decision", "Resource Access", "Audit Log"],
        "stepExplanations": [
            "The user presents their digital identity to initiate an access request.",
            "Authentication verifies the identity using password, MFA, or SSO.",
            "Context is collected: device health, location, time, risk score.",
            "Authorization checks the user's roles, permissions, and access policies.",
            "The policy engine makes a real-time allow or deny decision.",
            "If approved, the user accesses the protected resource.",
            "Every action is logged in the audit trail for compliance and review."
        ]
    }
}

with open("src/data/questions.ts", "r", encoding="utf-8") as f:
    content = f.read()

for layout, data in STEPS.items():
    steps_json = '[\n        ' + ',\n        '.join(f'"{s}"' for s in data['steps']) + '\n      ]'
    exps_json = '[\n        ' + ',\n        '.join(f'"{e}"' for e in data['stepExplanations']) + '\n      ]'
    
    # Replace empty steps array
    old_steps = '"steps": []'
    new_steps = f'"steps": {steps_json}'
    
    old_exps = '"stepExplanations": []'
    new_exps = f'"stepExplanations": {exps_json}'
    
    # Find the layout section and replace within it
    layout_pos = content.find(f'"layout": "{layout}"')
    if layout_pos == -1:
        print(f"Layout {layout} not found!")
        continue
    
    # Find the steps array after this layout
    steps_pos = content.find('"steps": []', layout_pos)
    if steps_pos != -1 and steps_pos < layout_pos + 500:
        content = content[:steps_pos] + new_steps + content[steps_pos + len('"steps": []'):]
        print(f"{layout}: steps replaced")
    else:
        print(f"{layout}: steps [] not found near layout position")
    
    # Find stepExplanations array after layout (re-search after modification)
    layout_pos = content.find(f'"layout": "{layout}"')
    exps_pos = content.find('"stepExplanations": []', layout_pos)
    if exps_pos != -1 and exps_pos < layout_pos + 800:
        content = content[:exps_pos] + new_exps + content[exps_pos + len('"stepExplanations": []'):]
        print(f"{layout}: stepExplanations replaced")
    else:
        print(f"{layout}: stepExplanations [] not found near layout position")

with open("src/data/questions.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("\nDONE - all steps patched")
