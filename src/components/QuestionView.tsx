import { useState, useEffect } from 'react';



import { motion, AnimatePresence } from 'framer-motion';



import { 



  ArrowLeft, ArrowRight, Lightbulb, CheckCircle, 



  Play, Pause, SkipBack, SkipForward, RotateCcw, 



  BookOpen, FileText, ChevronRight, PenTool, BrainCircuit



} from 'lucide-react';



import type { Question } from '../types/question';



import Visualizer from './Visualizer';



import clsx from 'clsx';







interface QuestionViewProps {
  question: Question;
  totalCount: number;
  onNext: () => void;
  onPrev: () => void;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}







export default function QuestionView({ question, totalCount, onNext, onPrev, isCompleted, onToggleComplete }: QuestionViewProps) {



  const [activeTab, setActiveTab] = useState<'visual' | 'answer' | 'practice'>('visual');



  const [currentStep, setCurrentStep] = useState(0);



  const [isPlaying, setIsPlaying] = useState(false);



  const [speed, setSpeed] = useState<0.5 | 1 | 1.5 | 2>(1);



  const [selectedOption, setSelectedOption] = useState<number | null>(null);



  const [showExplanation, setShowExplanation] = useState(false);
  const [practiceTimer, setPracticeTimer] = useState(60);
  const [isPracticing, setIsPracticing] = useState(false);
  
  useEffect(() => {
    let interval: any;
    if (isPracticing && practiceTimer > 0) {
      interval = setInterval(() => setPracticeTimer(t => t - 1), 1000);
    } else if (practiceTimer === 0) {
      setIsPracticing(false);
    }
    return () => clearInterval(interval);
  }, [isPracticing, practiceTimer]);

  const togglePractice = () => {
    if (isPracticing) {
      setIsPracticing(false);
    } else {
      setPracticeTimer(60);
      setIsPracticing(true);
    }
  };







  const steps = question.visualization.steps;



  const stepCount = steps.length;



  



  useEffect(() => {



    setCurrentStep(0);



    setIsPlaying(false);



    setActiveTab('visual');



    setSelectedOption(null);



    setShowExplanation(false);



  }, [question.id]);







  useEffect(() => {



    if (!isPlaying || activeTab !== 'visual') return;
    if (currentStep >= stepCount - 1) {
      setIsPlaying(false);
      return;
    }
    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, (2000 / speed));
    return () => clearTimeout(timer);



  }, [currentStep, isPlaying, speed, stepCount, activeTab]);







  const handlePredictNext = () => {



    if (currentStep < stepCount - 1) setCurrentStep(prev => prev + 1);



  };







  return (



    <div className="flex-1 flex flex-col h-full bg-white dark:bg-slate-900 relative">



      <div className="flex-1 overflow-y-auto px-3 sm:px-6 md:px-10 pt-5 sm:pt-8 pb-6 sm:pb-10 custom-scrollbar scroll-smooth-touch">



        <div className="max-w-[1200px] mx-auto flex flex-col min-h-full">



          



          <motion.div 
            key={`header-${question.id}`} 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut" }} 
            className="mb-4 shrink-0"
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-bold text-brand-blue bg-brand-blue-light px-2 sm:px-2.5 py-1 rounded-sm">
                {question.category}
              </span>
              {question.difficulty && (
                <span className={clsx(
                  "uppercase tracking-widest text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-1 rounded-sm",
                  question.difficulty === 'easy' && "text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-900/30",
                  question.difficulty === 'medium' && "text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-900/30",
                  question.difficulty === 'hard' && "text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30"
                )}>
                  {question.difficulty === 'easy' ? '🟢 Easy' : question.difficulty === 'medium' ? '🟡 Medium' : '🔴 Hard'}
                </span>
              )}
              <span className="text-slate-300 hidden xs:inline">•</span>
              <span className="text-[12px] sm:text-[13px] font-medium text-brand-gray">Q{question.id.toString().padStart(2, '0')} of {totalCount}</span>
            </div>
            
            <h1 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-extrabold text-brand-navy dark:text-white mb-2 leading-tight tracking-tight">
              {question.question}
            </h1>
            <p className="text-[14px] sm:text-[16px] text-brand-gray leading-relaxed max-w-3xl">
              {question.subtitle}
            </p>
          </motion.div>







          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 border-b border-slate-200 dark:border-slate-700 mb-4 sm:mb-6 shrink-0 overflow-x-auto no-scrollbar">

            <button
              onClick={() => setActiveTab('visual')}
              className={clsx(
                "flex items-center gap-1.5 sm:gap-2 pb-3 sm:pb-3.5 text-[13px] sm:text-[15px] font-semibold border-b-[3px] transition-colors relative translate-y-[2px] shrink-0 whitespace-nowrap",
                activeTab === 'visual' ? "border-brand-blue text-brand-blue" : "border-transparent text-brand-gray hover:text-brand-navy dark:text-white"
              )}
            >
              <BookOpen className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden xs:inline sm:inline">Visual lesson</span>
              <span className="xs:hidden sm:hidden">Lesson</span>
            </button>

            <button
              onClick={() => setActiveTab('answer')}
              className={clsx(
                "flex items-center gap-1.5 sm:gap-2 pb-3 sm:pb-3.5 text-[13px] sm:text-[15px] font-semibold border-b-[3px] transition-colors relative translate-y-[2px] shrink-0 whitespace-nowrap",
                activeTab === 'answer' ? "border-brand-blue text-brand-blue" : "border-transparent text-brand-gray hover:text-brand-navy dark:text-white"
              )}
            >
              <FileText className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden xs:inline sm:inline">Interview answer</span>
              <span className="xs:hidden sm:hidden">Answer</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={clsx(
                "flex items-center gap-1.5 sm:gap-2 pb-3 sm:pb-3.5 text-[13px] sm:text-[15px] font-semibold border-b-[3px] transition-colors relative translate-y-[2px] shrink-0 whitespace-nowrap",
                activeTab === 'practice' ? "border-brand-blue text-brand-blue" : "border-transparent text-brand-gray hover:text-brand-navy dark:text-white"
              )}
            >
              <PenTool className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              Practice
            </button>

          </div>







          <div className="flex-1 flex flex-col min-h-0">
            <AnimatePresence mode="wait">
              {activeTab === 'visual' && (
                <motion.div 
                  key="visual"
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -15 }} 
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full space-y-4"
                >



                



                <div className="flex items-center gap-2 md:gap-4 px-2 pb-2 shrink-0 overflow-x-auto no-scrollbar flex-nowrap">



                  {steps.map((step, idx) => {



                    const isCompleted = idx < currentStep;



                    const isCurrent = idx === currentStep;



                    



                    return (



                      <div key={idx} className="flex items-center gap-2 md:gap-4 shrink-0">



                        <div className={clsx(



                          "flex items-center gap-2.5 px-3 py-1.5 rounded-full text-[13px] font-bold transition-all duration-300",



                          isCompleted ? "text-slate-600 dark:text-slate-300" : 



                          isCurrent ? "text-brand-blue bg-brand-blue-light border border-blue-200" : "text-brand-gray-muted"



                        )}>



                          {isCompleted ? (



                            <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center text-white">



                              <CheckCircle className="w-3.5 h-3.5" strokeWidth={3} />



                            </div>



                          ) : (



                            <div className={clsx(



                              "w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black text-white transition-colors",



                              isCurrent ? "bg-brand-blue shadow-md" : "bg-slate-200"



                            )}>



                              {idx + 1}



                            </div>



                          )}



                          {step}



                        </div>



                        {idx < stepCount - 1 && (



                          <ChevronRight className={clsx("w-4 h-4", isCompleted ? "text-slate-300" : "text-slate-200")} />



                        )}



                      </div>



                    );



                  })}



                </div>







                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm flex flex-col flex-1 min-h-[300px] sm:min-h-[400px]">

                  <div className="relative flex-1 w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden">
                    <div className="absolute inset-0">
                      <Visualizer visualization={question.visualization} currentStep={currentStep} questionId={question.id} />
                    </div>
                  </div>



                  



                  <div className="bg-white dark:bg-slate-900 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3 shrink-0">
                    {/* Top row: playback controls */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <button
                          onClick={() => {
                            if (currentStep >= stepCount - 1) {
                              setCurrentStep(0);
                              setIsPlaying(true);
                            } else {
                              setIsPlaying(!isPlaying);
                            }
                          }}
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-blue hover:bg-blue-700 text-white transition-colors shrink-0"
                        >
                          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                        </button>
                        <button aria-label="Previous step" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className="p-2 rounded-md hover:bg-slate-100 text-brand-navy dark:text-white disabled:opacity-30 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                          <SkipBack className="w-4 h-4" />
                        </button>
                        <button aria-label="Next step" onClick={() => setCurrentStep(Math.min(stepCount - 1, currentStep + 1))} disabled={currentStep === stepCount - 1} className="p-2 rounded-md hover:bg-slate-100 text-brand-navy dark:text-white disabled:opacity-30 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                          <SkipForward className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <select value={speed} onChange={(e) => setSpeed(Number(e.target.value) as any)} className="text-[13px] font-medium text-brand-navy dark:text-white bg-transparent cursor-pointer hover:text-brand-blue outline-none transition-colors py-1">
                          <option value={0.5}>0.5x</option>
                          <option value={1}>1x</option>
                          <option value={1.5}>1.5x</option>
                          <option value={2}>2x</option>
                        </select>
                        <button onClick={() => { setCurrentStep(0); setIsPlaying(true); }} className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-[12px] sm:text-[13px] font-medium text-brand-navy dark:text-white hover:bg-brand-blue-light dark:bg-brand-blue/20 dark:border-brand-blue/30 transition-colors shadow-sm shrink-0">
                          <RotateCcw className="w-3.5 h-3.5" /> Replay
                        </button>
                      </div>
                    </div>

                    {/* Progress bar row */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden cursor-pointer relative group" onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                          setCurrentStep(Math.round(pos * (stepCount - 1)));
                        }}>
                        <div className="absolute inset-y-0 left-0 bg-brand-blue rounded-full transition-all duration-300" style={{ width: `${(currentStep / (stepCount - 1)) * 100}%` }} />
                        <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-blue rounded-full shadow border-2 border-white transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ left: `calc(${(currentStep / (stepCount - 1)) * 100}% - 6px)` }} />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-medium text-brand-gray whitespace-nowrap">Step {currentStep + 1}/{stepCount}</span>
                    </div>
                  </div>



                </div>







                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 shrink-0">
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">



                    <h3 className="flex items-center gap-2 text-[15px] font-bold text-brand-navy dark:text-white mb-2">



                      <Lightbulb className="w-[18px] h-[18px] text-amber-500" />



                      What is happening?



                    </h3>



                    <div className="min-h-[50px]">



                      <AnimatePresence mode="wait">



                        <motion.p key={currentStep} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">



                          {question.visualization.stepExplanations?.[currentStep] || "Processing IAM request."}



                        </motion.p>



                      </AnimatePresence>



                    </div>



                  </div>















                  <div className="bg-brand-blue-light rounded-xl border border-blue-100 p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">



                    <div className="absolute -right-4 -top-4 text-blue-200 opacity-20 transform rotate-12">



                       <CheckCircle className="w-32 h-32" />



                    </div>



                    <div className="relative z-10 min-h-[50px]">



                      <h3 className="flex items-center gap-2 text-[15px] font-bold text-brand-navy dark:text-white mb-2">



                        <CheckCircle className="w-[18px] h-[18px] text-brand-blue" />



                        Interview takeaway



                      </h3>



                      <AnimatePresence mode="wait">



                        <motion.p key={currentStep} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="text-[14px] text-brand-navy dark:text-white leading-relaxed mb-3 font-semibold">



                          {question.answer.interviewPoints[currentStep % question.answer.interviewPoints.length]}



                        </motion.p>



                      </AnimatePresence>



                    </div>



                    {currentStep < stepCount - 1 && (



                      <button onClick={handlePredictNext} className="relative z-10 self-start flex items-center gap-1.5 text-[12px] font-bold text-brand-blue hover:text-white bg-white dark:bg-slate-900 hover:bg-brand-blue border border-brand-blue/30 px-3 py-1.5 rounded shadow-sm transition-all">



                        Predict the next step <ArrowRight className="w-3.5 h-3.5" />



                      </button>



                    )}



                  </div>



                </div>







              </motion.div>



            )}







            {activeTab === 'answer' && (
              <motion.div 
                key="answer"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }} 
                transition={{ duration: 0.3 }}
                className="space-y-6 max-w-4xl pb-12"
              >







                {/* 30-SECOND ANSWER */}



                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 md:p-8 shadow-sm">



                  <p className="text-[11px] font-black tracking-[0.15em] uppercase text-brand-blue mb-4">



                    The 30-Second Answer



                  </p>



                  <div className="space-y-3">



                    <p className="text-[16px] text-slate-800 dark:text-white leading-relaxed font-semibold">



                      {question.answer.definition}



                    </p>



                    {question.answer.interviewPoints.map((pt: string, i: number) => (



                      <p key={i} className="text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed">



                        {pt}



                      </p>



                    ))}



                  </div>



                </div>







                {/* DETAILED ANSWER */}



                {question.answer.howItWorks && (



                  <div>



                    <h2 className="text-[20px] font-bold text-brand-navy dark:text-white mb-3">Detailed answer</h2>



                    <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-[1.85] whitespace-pre-line break-words">



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



                    <div className="text-[15px] text-amber-900 leading-relaxed whitespace-pre-line font-medium break-words">



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



                    <blockquote className="text-[15px] text-brand-navy dark:text-white font-semibold leading-relaxed italic border-l-4 border-brand-blue pl-4">



                      {question.answer.sampleAnswer}



                    </blockquote>



                  </div>



                )}







              </motion.div>



            )}







            {activeTab === 'practice' && (
              <motion.div 
                key="practice"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }} 
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto w-full pt-8 pb-10"
              >
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden relative">
                  
                  {/* Header Banner */}
                  <div className="bg-brand-blue px-5 sm:px-8 py-5 sm:py-6 text-white relative overflow-hidden flex items-center justify-between">
                    <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
                      <BrainCircuit className="w-32 h-32" />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-bold mb-1 relative z-10 flex items-center gap-2">
                        <PenTool className="w-5 h-5" />
                        Scenario Challenge
                      </h2>
                      <p className="text-blue-100 relative z-10 font-medium text-sm">Test your knowledge of {question.category}</p>
                    </div>
                    {isPracticing && (
                      <div className="relative z-10 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30 flex items-center gap-2">
                        <span className="text-sm font-semibold uppercase tracking-wider opacity-80">Time Left</span>
                        <span className={clsx("font-mono text-xl font-bold", practiceTimer <= 10 ? "text-red-300 animate-pulse" : "text-white")}>
                          {practiceTimer}s
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-8">
                    {/* Scenario Card */}
                    <div className="bg-brand-blue-light dark:bg-brand-blue/20 dark:border-brand-blue/30 p-5 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 relative">
                      <p className="text-[16px] text-brand-navy dark:text-white leading-relaxed font-semibold break-words">
                        {question.practice?.scenario}
                      </p>
                      <p className="text-[15px] text-slate-600 dark:text-slate-300 mt-3 font-medium break-words">
                        {question.practice?.question}
                      </p>
                    </div>

                    {!isPracticing && selectedOption === null ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-8 text-center"
                      >
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                          <Play className="w-8 h-8 text-brand-blue translate-x-0.5" />
                        </div>
                        <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">Ready to test your skills?</h3>
                        <p className="text-slate-500 mb-6 max-w-sm">You'll have 60 seconds to analyze the scenario and select the correct outcome.</p>
                        <button 
                          onClick={togglePractice}
                          className="px-8 py-3 bg-brand-blue text-white font-bold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
                        >
                          Start Challenge
                        </button>
                      </motion.div>
                    ) : (
                      <div className="space-y-3 mb-8">
                        {question.practice?.options.map((opt, idx) => {
                          const isSelected = selectedOption === idx;
                          const isCorrect = idx === question.practice?.correctAnswer;
                          const answered = selectedOption !== null;
                          
                          let optionStyle = "border-slate-200 dark:border-slate-700 hover:border-brand-blue bg-white dark:bg-slate-900 text-brand-navy dark:text-white cursor-pointer hover:shadow-sm";
                          if (answered) {
                            if (isCorrect) optionStyle = "border-brand-green bg-brand-green/10 text-brand-green ring-1 ring-brand-green";
                            else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50 text-red-600 ring-1 ring-red-400";
                            else optionStyle = "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 opacity-50 grayscale";
                          }

                          return (
                            <motion.button
                              key={idx}
                              disabled={answered}
                              whileHover={!answered ? { scale: 1.01, x: 4 } : {}}
                              whileTap={!answered ? { scale: 0.98 } : {}}
                              onClick={() => { 
                                setSelectedOption(idx); 
                                setShowExplanation(true);
                                setIsPracticing(false);
                              }}
                              className={clsx(
                                "w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-300 font-medium text-[15px] flex items-center justify-between",
                                optionStyle
                              )}
                            >
                              <span className="break-words whitespace-normal pr-2">{opt}</span>
                              {answered && isCorrect && (
                                <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring" }}>
                                  <CheckCircle className="w-6 h-6 shrink-0" />
                                </motion.div>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    )}

                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ type: "spring", bounce: 0.4 }}
                          className={clsx(
                            "p-6 rounded-xl border-2",
                            selectedOption === question.practice?.correctAnswer 
                              ? "bg-brand-green/5 border-brand-green/30" 
                              : "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800/30"
                          )}
                        >
                          <h4 className={clsx(
                            "font-bold mb-3 flex items-center gap-2 text-lg",
                            selectedOption === question.practice?.correctAnswer ? "text-brand-green" : "text-red-600 dark:text-red-400"
                          )}>
                            {selectedOption === question.practice?.correctAnswer ? "🎯 Brilliant! That's correct." : "💡 Not quite right."}
                          </h4>
                          <p className="text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed font-medium break-words">
                            {question.practice?.explanation}
                          </p>
                          
                          {selectedOption !== question.practice?.correctAnswer && (
                            <button 
                              onClick={() => {
                                setSelectedOption(null);
                                setShowExplanation(false);
                                togglePractice();
                              }}
                              className="mt-5 px-5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors"
                            >
                              Try Again
                            </button>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>



              </motion.div>



            )}
            </AnimatePresence>

            {/* Mark as Done Banner */}
            <div className="mt-6 sm:mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 sm:justify-between shrink-0">
              <div>
                {isCompleted ? (
                  <>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy dark:text-white mb-1 flex items-center gap-2">Question completed! 🎉</h3>
                    <p className="text-[14px] sm:text-[15px] text-slate-500 dark:text-slate-400">Marked as completed. Click reset to practice again.</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy dark:text-white mb-1">Finished this question?</h3>
                    <p className="text-[14px] sm:text-[15px] text-slate-500 dark:text-slate-400">Mark it as done to track your progress on this device.</p>
                  </>
                )}
              </div>
              <div className="shrink-0">
                {isCompleted ? (
                  <button onClick={onToggleComplete} className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg font-bold text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                    <RotateCcw className="w-5 h-5" /> Reset progress
                  </button>
                ) : (
                  <button onClick={onToggleComplete} className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg font-bold text-white bg-brand-green hover:bg-green-600 shadow-sm transition-colors">
                    <CheckCircle className="w-5 h-5" /> Mark as done
                  </button>
                )}
              </div>
            </div>

          </div>



        </div>



      </div>







      <div
        className="shrink-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between px-3 sm:px-6 md:px-10 z-20"
        style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))', paddingLeft: 'max(12px, env(safe-area-inset-left))', paddingRight: 'max(12px, env(safe-area-inset-right))', height: 'calc(64px + env(safe-area-inset-bottom, 0px))' }}
      >
        <button
          onClick={onPrev}
          disabled={question.id === 1}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-md text-[13px] sm:text-[14px] font-semibold text-brand-navy dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-brand-blue-light dark:bg-brand-blue/20 dark:border-brand-blue/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm bg-white dark:bg-slate-900 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden xs:inline sm:inline">Previous Question</span>
          <span className="xs:hidden sm:hidden">Prev</span>
        </button>

        <button
          onClick={onNext}
          disabled={question.id === totalCount}
          className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 rounded-md text-[13px] sm:text-[14px] font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
        >
          <span className="hidden xs:inline sm:inline">Next Question</span>
          <span className="xs:hidden sm:hidden">Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>



    </div>



  );



}



