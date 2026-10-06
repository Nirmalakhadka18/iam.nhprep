import re

# 1. Update Q16 to use size="small" to fix horizontal overflow
with open("src/components/visualizations/CustomVisuals.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace all <GIcon in Q16Visual with size="small"
q16_idx = content.find("const Q16Visual")
q17_idx = content.find("const Q17Visual")

if q16_idx != -1 and q17_idx != -1:
    q16_block = content[q16_idx:q17_idx]
    # Add size="small" to any GIcon that doesn't have a size prop
    new_q16_block = re.sub(r'(<GIcon[^>]+)(?<!size="small" )(?<!size="large" )(?<!size="normal" )/>', r'\1 size="small" />', q16_block)
    content = content[:q16_idx] + new_q16_block + content[q17_idx:]
    
with open("src/components/visualizations/CustomVisuals.tsx", "w", encoding="utf-8", newline='\n') as f:
    f.write(content)

# 2. Update QuestionView.tsx answer tab backgrounds from grey to blue
with open("src/components/QuestionView.tsx", "r", encoding="utf-8") as f:
    qv_content = f.read()

# The 30-second answer box has bg-slate-50 dark:bg-slate-800
qv_content = qv_content.replace('bg-slate-50 dark:bg-slate-800', 'bg-brand-blue-light dark:bg-brand-blue/20 dark:border-brand-blue/30')
# The detailed answer box also might have it, let's just make sure we replace the main grey boxes
# We can also change border-slate-200 to border-blue-200 in the answer section
# For dark mode, let's use dark:bg-brand-navy/50 or dark:bg-brand-blue/10

with open("src/components/QuestionView.tsx", "w", encoding="utf-8", newline='\n') as f:
    f.write(qv_content)

print("SUCCESS")
