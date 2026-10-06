import re

with open("src/components/visualizations/CustomVisuals.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace all static grey connector line backgrounds with a lighter dashed base
# The pattern: h-0.5 bg-slate-200 relative (horizontal connectors)
content = content.replace('h-0.5 bg-slate-200 relative', 'h-[3px] bg-slate-100 relative overflow-visible')

# Also update vertical connector lines used in some Q visuals
# w-0.5 bg-slate-200 relative -> same treatment for vertical
content = content.replace('w-0.5 bg-slate-200 relative', 'w-[3px] bg-slate-100 relative overflow-visible')

# Fix the connector height from h-0.5 to h-[3px] for ones already changed
# (some might have h-0.5 without bg-slate-200)

with open("src/components/visualizations/CustomVisuals.tsx", "w", encoding="utf-8", newline='\n') as f:
    f.write(content)

count1 = content.count('h-[3px] bg-slate-100')
count2 = content.count('w-[3px] bg-slate-100')
print(f"SUCCESS - Updated {count1} horizontal + {count2} vertical connectors")
