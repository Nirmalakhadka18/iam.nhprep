import re

with open("src/components/visualizations/CustomVisuals.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Make images larger by increasing GIcon sizes
old_sz = "const sz = size === 'large' ? 'w-32 h-32 lg:w-40 lg:h-40' : size === 'small' ? 'w-16 h-16 lg:w-20 lg:h-20' : 'w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32';"
new_sz = "const sz = size === 'large' ? 'w-32 h-32 lg:w-48 lg:h-48' : size === 'small' ? 'w-20 h-20 lg:w-24 lg:h-24' : 'w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40';"
content = content.replace(old_sz, new_sz)

# Add imgSrc to missing GIcon elements based on common patterns
replacements = {
    r'<GIcon icon={Fingerprint} active={([^}]+)} label="Identity"': r'<GIcon icon={Fingerprint} imgSrc="/assets/images/id_badge.png" active={\1} label="Identity"',
    r'<GIcon icon={Laptop} active={([^}]+)} label="Device"': r'<GIcon icon={Laptop} imgSrc="/assets/images/employee_laptop.png" active={\1} label="Device"',
    r'<GIcon icon={MapPin} active={([^}]+)} label="Context"': r'<GIcon icon={MapPin} imgSrc="/assets/images/auth_clipboard.png" active={\1} label="Context"',
    r'<GIcon icon={Shield} active={([^}]+)} label="Policy"': r'<GIcon icon={Shield} imgSrc="/assets/images/policy_engine.png" active={\1} label="Policy"',
    r'<GIcon icon={Server} active={([^}]+)} label="Resource" color="green" />': r'<GIcon icon={Server} imgSrc="/assets/images/server_resource.png" active={\1} label="Resource" color="green" />',
    r'<GIcon icon={UserCheck} active={([^}]+)} label="Administrator" size="large" />': r'<GIcon icon={UserCheck} imgSrc="/assets/images/employee_laptop.png" active={\1} label="Administrator" size="large" />',
    r'<GIcon icon={Server} active={([^}]+)} label="Critical Server" size="large" />': r'<GIcon icon={Server} imgSrc="/assets/images/server_resource.png" active={\1} label="Critical Server" size="large" />',
    r'<GIcon icon={Key} active={([^}]+)} label="AuthN" size="small" />': r'<GIcon icon={Key} imgSrc="/assets/images/auth_password.png" active={\1} label="AuthN" size="small" />',
    r'<GIcon icon={Laptop} active={([^}]+)} label="Context" size="small" />': r'<GIcon icon={Laptop} imgSrc="/assets/images/employee_laptop.png" active={\1} label="Context" size="small" />',
    r'<GIcon icon={MapPin} active={([^}]+)} label="Location" sub="Unknown IP" />': r'<GIcon icon={MapPin} imgSrc="/assets/images/auth_clipboard.png" active={\1} label="Location" sub="Unknown IP" />',
    r'<GIcon icon={Clock} active={([^}]+)} label="Time" sub="3 AM" />': r'<GIcon icon={Clock} imgSrc="/assets/images/auth_lock.png" active={\1} label="Time" sub="3 AM" />',
    r'<GIcon icon={Smartphone} active={([^}]+)} label="Device" sub="Unmanaged" />': r'<GIcon icon={Smartphone} imgSrc="/assets/images/mfa_phone.png" active={\1} label="Device" sub="Unmanaged" />',
    r'<GIcon icon={Fingerprint} active={([^}]+)} label="Identity" size="small" />': r'<GIcon icon={Fingerprint} imgSrc="/assets/images/id_badge.png" active={\1} label="Identity" size="small" />',
}

for pattern, repl in replacements.items():
    content = re.sub(pattern, repl, content)

# For Q20, remove size="small" since the user says they are too small
content = content.replace('size="small"', '')

with open("src/components/visualizations/CustomVisuals.tsx", "w", encoding="utf-8", newline='\n') as f:
    f.write(content)
print("SUCCESS")
