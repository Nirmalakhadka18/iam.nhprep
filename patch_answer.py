import sys

with open('src/components/QuestionView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the answer tab section and replace it
START = "            {activeTab === 'answer' && ("
END = "            )}\n\n            {activeTab === 'practice'"

start_idx = content.find(START)
end_idx = content.find(END)

if start_idx == -1 or end_idx == -1:
    print(f"NOT FOUND: start={start_idx}, end={end_idx}")
    sys.exit(1)

new_section = """            {activeTab === 'answer' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl pb-12">

                {/* 30-SECOND ANSWER */}
                <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 md:p-8 shadow-sm">
                  <p className="text-[11px] font-black tracking-[0.15em] uppercase text-brand-blue mb-4">
                    The 30-Second Answer
                  </p>
                  <div className="space-y-3">
                    <p className="text-[16px] text-slate-800 leading-relaxed font-semibold">
                      {question.answer.definition}
                    </p>
                    {question.answer.interviewPoints.map((pt: string, i: number) => (
                      <p key={i} className="text-[15px] text-slate-700 leading-relaxed">
                        {pt}
                      </p>
                    ))}
                  </div>
                </div>

                {/* DETAILED ANSWER */}
                {question.answer.howItWorks && (
                  <div>
                    <h2 className="text-[20px] font-bold text-brand-navy mb-3">Detailed answer</h2>
                    <p className="text-[15px] text-slate-600 leading-[1.85] whitespace-pre-line">
                      {question.answer.howItWorks}
                    </p>
                  </div>
                )}

                {/* REAL-WORLD EXAMPLE */}
                {question.answer.example && (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
                    <h2 className="text-[18px] font-bold text-amber-800 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-amber-500" />
                      Real-world example
                    </h2>
                    <div className="text-[15px] text-amber-900 leading-relaxed whitespace-pre-line font-medium">
                      {question.answer.example}
                    </div>
                  </div>
                )}

                {/* WHY IT MATTERS */}
                {question.answer.whyImportant && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                    <h2 className="text-[17px] font-bold text-emerald-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      Why it matters
                    </h2>
                    <p className="text-[15px] text-emerald-900 leading-relaxed font-medium">
                      {question.answer.whyImportant}
                    </p>
                  </div>
                )}

                {/* COMMON FRESHER MISTAKES */}
                {question.answer.commonMistakes && question.answer.commonMistakes.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h2 className="text-[17px] font-bold text-red-800 mb-3">
                      Common fresher mistakes
                    </h2>
                    <ul className="space-y-2">
                      {question.answer.commonMistakes.map((mistake: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-red-800 leading-relaxed">
                          <span className="mt-1 w-4 h-4 rounded-full bg-red-200 text-red-700 font-black text-[10px] flex items-center justify-center flex-shrink-0">{i + 1}</span>
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* INTERVIEW-READY ANSWER */}
                {question.answer.sampleAnswer && (
                  <div className="bg-brand-blue-light border border-blue-200 rounded-2xl p-6 md:p-8">
                    <h2 className="text-[17px] font-bold text-brand-blue mb-3">Interview-ready answer</h2>
                    <blockquote className="text-[15px] text-brand-navy font-semibold leading-relaxed italic border-l-4 border-brand-blue pl-4">
                      {question.answer.sampleAnswer}
                    </blockquote>
                  </div>
                )}

              </div>
            )}
"""

content = content[:start_idx] + new_section + "\n" + content[end_idx:]

with open('src/components/QuestionView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS - file patched")
