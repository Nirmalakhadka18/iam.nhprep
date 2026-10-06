import os
import re

directories = ["src", "src/components", "src/components/visualizations"]

replacements = {
    r'\bbg-white\b(?! dark:bg-)': 'bg-white dark:bg-slate-900',
    r'\bbg-slate-50\b(?! dark:bg-)': 'bg-slate-50 dark:bg-slate-800',
    r'\bborder-slate-200\b(?! dark:border-)': 'border-slate-200 dark:border-slate-700',
    r'\bborder-slate-100\b(?! dark:border-)': 'border-slate-100 dark:border-slate-800',
    r'\bborder-slate-300\b(?! dark:border-)': 'border-slate-300 dark:border-slate-600',
    r'\btext-brand-navy\b(?! dark:text-)': 'text-brand-navy dark:text-white',
    r'\btext-slate-500\b(?! dark:text-)': 'text-slate-500 dark:text-slate-400',
    r'\btext-slate-600\b(?! dark:text-)': 'text-slate-600 dark:text-slate-300',
    r'\btext-slate-700\b(?! dark:text-)': 'text-slate-700 dark:text-slate-200',
    r'\bbg-brand-gray-light\b(?! dark:bg-)': 'bg-brand-gray-light dark:bg-slate-950',
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, replacement in replacements.items():
        new_content = re.sub(pattern, replacement, new_content)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for d in directories:
    for filename in os.listdir(d):
        if filename.endswith(".tsx"):
            process_file(os.path.join(d, filename))

print("DONE")
