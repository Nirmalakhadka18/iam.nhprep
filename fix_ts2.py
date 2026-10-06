import re

# 1. Fix QuestionViewProps
with open("src/components/QuestionView.tsx", "r", encoding="utf-8") as f:
    qv = f.read()

# using regex to match the interface block
pattern = r"interface QuestionViewProps \{.*?\}"
match = re.search(pattern, qv, flags=re.DOTALL)
if match:
    if "isCompleted" not in match.group(0):
        new_props = """interface QuestionViewProps {
  question: Question;
  totalCount: number;
  onNext: () => void;
  onPrev: () => void;
  isCompleted?: boolean;
  onMarkAsDone?: () => void;
}"""
        qv = qv[:match.start()] + new_props + qv[match.end():]
        with open("src/components/QuestionView.tsx", "w", encoding="utf-8", newline='\n') as f:
            f.write(qv)

# 2. Fix XCircle import
with open("src/components/visualizations/CustomVisuals.tsx", "r", encoding="utf-8") as f:
    cv = f.read()

cv = cv.replace("import { XCircle,", "import {")
# add XCircle to lucide-react imports
cv = re.sub(r'import \{ ([^\}]+) \} from \'lucide-react\';', r'import { XCircle, \1 } from \'lucide-react\';', cv)

with open("src/components/visualizations/CustomVisuals.tsx", "w", encoding="utf-8", newline='\n') as f:
    f.write(cv)

# 3. Fix type missing in visualization
with open("src/types/question.ts", "r", encoding="utf-8") as f:
    types = f.read()

types = types.replace("type: string;", "type?: string;")
with open("src/types/question.ts", "w", encoding="utf-8", newline='\n') as f:
    f.write(types)

print("SUCCESS")
