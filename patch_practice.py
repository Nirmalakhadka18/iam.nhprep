with open("src/components/QuestionView.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Normalize line endings for matching
normalized = content.replace('\r\n', '\n')

old = '''                    <div className="space-y-3 mb-8">
                      {question.practice?.options.map((opt, idx) => {
                        const isSelected = selectedOption === idx;
                        const isCorrect = idx === question.practice?.correctAnswer;
                        const showStatus = showExplanation;
                        
                        let optionStyle = "border-slate-200 hover:border-brand-blue bg-white text-brand-navy";
                        if (showStatus) {
                          if (isCorrect) optionStyle = "border-brand-green bg-brand-green/10 text-brand-green";
                          else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50 text-red-600";
                          else optionStyle = "border-slate-100 bg-slate-50 opacity-50";
                        } else if (isSelected) {
                          optionStyle = "border-brand-blue bg-brand-blue-light text-brand-blue ring-1 ring-brand-blue";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={showExplanation}
                            onClick={() => setSelectedOption(idx)}
                            className={clsx(
                              "w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-medium text-[15px] flex items-center justify-between",
                              optionStyle
                            )}
                          >
                            <span>{opt}</span>
                            {showStatus && isCorrect && <CheckCircle className="w-5 h-5 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {!showExplanation ? (
                      <button
                        disabled={selectedOption === null}
                        onClick={() => setShowExplanation(true)}
                        className="w-full py-4 rounded-xl font-bold text-[16px] transition-all bg-brand-blue text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Answer
                      </button>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-brand-blue-light border border-blue-200 p-6 rounded-xl"
                      >
                        <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2">'''

new = '''                    <div className="space-y-3 mb-8">
                      {question.practice?.options.map((opt, idx) => {
                        const isSelected = selectedOption === idx;
                        const isCorrect = idx === question.practice?.correctAnswer;
                        const answered = selectedOption !== null;
                        
                        let optionStyle = "border-slate-200 hover:border-brand-blue bg-white text-brand-navy cursor-pointer";
                        if (answered) {
                          if (isCorrect) optionStyle = "border-brand-green bg-brand-green/10 text-brand-green";
                          else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50 text-red-600";
                          else optionStyle = "border-slate-100 bg-slate-50 opacity-50";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={answered}
                            onClick={() => { setSelectedOption(idx); setShowExplanation(true); }}
                            className={clsx(
                              "w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-300 font-medium text-[15px] flex items-center justify-between",
                              optionStyle
                            )}
                          >
                            <span>{opt}</span>
                            {answered && isCorrect && <CheckCircle className="w-5 h-5 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {showExplanation && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="bg-brand-blue-light border border-blue-200 p-6 rounded-xl"
                      >
                        <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2">'''

if old in normalized:
    normalized = normalized.replace(old, new)
    # Convert back to \r\n for Windows
    content_out = normalized.replace('\n', '\r\n')
    with open("src/components/QuestionView.tsx", "w", encoding="utf-8") as f:
        f.write(content_out)
    print("SUCCESS")
else:
    print("NOT FOUND")
    idx = normalized.find("space-y-3 mb-8")
    if idx >= 0:
        snippet = normalized[idx:idx+300]
        print("FOUND AT:", idx)
        print(repr(snippet))
