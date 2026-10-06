import re

# 1. Fix QuestionViewProps in QuestionView.tsx
with open("src/components/QuestionView.tsx", "r", encoding="utf-8") as f:
    qv = f.read()

if "isCompleted?: boolean" not in qv:
    qv = qv.replace(
"""interface QuestionViewProps {
  question: Question;
  totalCount: number;
  onNext: () => void;
  onPrev: () => void;
}""",
"""interface QuestionViewProps {
  question: Question;
  totalCount: number;
  onNext: () => void;
  onPrev: () => void;
  isCompleted?: boolean;
  onMarkAsDone?: () => void;
}"""
    )
    with open("src/components/QuestionView.tsx", "w", encoding="utf-8", newline='\n') as f:
        f.write(qv)

# 2. Fix XCircle import in CustomVisuals.tsx
with open("src/components/visualizations/CustomVisuals.tsx", "r", encoding="utf-8") as f:
    cv = f.read()

if "XCircle" not in cv.split("import {")[1].split("}")[0]:
    cv = cv.replace("import {", "import { XCircle,", 1)
    with open("src/components/visualizations/CustomVisuals.tsx", "w", encoding="utf-8", newline='\n') as f:
        f.write(cv)

# 3. Fix authVsAuthz optional in types/question.ts
with open("src/types/question.ts", "r", encoding="utf-8") as f:
    types = f.read()

types = types.replace("authVsAuthz: string;", "authVsAuthz?: string;")
with open("src/types/question.ts", "w", encoding="utf-8", newline='\n') as f:
    f.write(types)

print("SUCCESS")
