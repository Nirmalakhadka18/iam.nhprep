import re

with open('src/data/questions.ts', encoding='utf-8') as f:
    content = f.read()

# Find each question block and check for required fields
qblocks = re.split(r'\n    \{\n      "id":', content)[1:]

for block in qblocks:
    qid = block.split('"')[0].strip().strip(',')
    has_howit = '"howItWorks"' in block
    has_why = '"whyImportant"' in block
    has_mistakes = '"commonMistakes"' in block
    has_sample = '"sampleAnswer"' in block
    if not all([has_howit, has_why, has_mistakes, has_sample]):
        print(f"Q{qid}: howItWorks={has_howit} whyImportant={has_why} commonMistakes={has_mistakes} sampleAnswer={has_sample}")
    else:
        print(f"Q{qid}: OK")
