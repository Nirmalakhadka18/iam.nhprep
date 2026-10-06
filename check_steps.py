import re

with open('src/data/questions.ts', encoding='utf-8') as f:
    txt = f.read()

for m in re.finditer(r'"id": (\d+).*?"steps": \[(.*?)\]', txt, re.DOTALL):
    qid = m.group(1)
    steps_raw = m.group(2).strip()
    step_count = steps_raw.count('"') // 2 if steps_raw else 0
    print(f'Q{qid}: {step_count} steps | empty={step_count==0}')
