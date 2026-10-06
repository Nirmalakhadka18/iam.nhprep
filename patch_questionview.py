with open("src/components/QuestionView.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Normalize line endings
normalized = content.replace('\r\n', '\n')

old_props = '''  onNext: () => void;
  onPrev: () => void;
}

export default function QuestionView({ question, totalCount, onNext, onPrev }: QuestionViewProps) {'''

new_props = '''  onNext: () => void;
  onPrev: () => void;
  isCompleted?: boolean;
  onMarkAsDone?: () => void;
}

export default function QuestionView({ question, totalCount, onNext, onPrev, isCompleted, onMarkAsDone }: QuestionViewProps) {'''

old_footer = '''      <div className="shrink-0 h-20 bg-white border-t border-slate-200 flex items-center justify-between px-6 md:px-10 z-20">
        <button
          onClick={onPrev}
          disabled={question.id === 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-md text-[14px] font-semibold text-brand-navy border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm bg-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous Question
        </button>
        <button
          onClick={onNext}
          disabled={question.id === totalCount}
          className="flex items-center gap-2 px-6 py-2.5 rounded-md text-[14px] font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Question
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>'''

new_footer = '''      <div className="shrink-0 p-6 md:p-8 bg-white border-t border-slate-200 z-20">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-slate-200 rounded-xl p-4 md:p-6 shadow-sm gap-4">
          <div className="text-left w-full md:w-auto">
            <h3 className="text-[16px] md:text-[18px] font-bold text-brand-navy mb-1">Finished this question?</h3>
            <p className="text-[13px] md:text-[14px] text-slate-500 font-medium">Mark it as done to track your progress on this device.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {!isCompleted ? (
              <button
                onClick={onMarkAsDone}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-[14px] font-bold text-white bg-brand-green hover:bg-[#1DA063] transition-colors shadow-sm"
              >
                <CheckCircle className="w-4 h-4" />
                Mark as done
              </button>
            ) : (
              <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-[14px] font-bold text-brand-green bg-brand-green-light border border-brand-green/20">
                <CheckCircle className="w-4 h-4" />
                Completed
              </div>
            )}
            <button
              onClick={onNext}
              disabled={question.id === totalCount}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-[14px] font-bold text-white bg-brand-blue hover:bg-blue-700 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next question
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-start mt-4">
           <button
            onClick={onPrev}
            disabled={question.id === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-[13px] font-semibold text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous question
          </button>
        </div>
      </div>'''

if old_props in normalized:
    normalized = normalized.replace(old_props, new_props)
    
if old_footer in normalized:
    normalized = normalized.replace(old_footer, new_footer)

content_out = normalized.replace('\n', '\r\n')
with open("src/components/QuestionView.tsx", "w", encoding="utf-8") as f:
    f.write(content_out)
print("SUCCESS")
