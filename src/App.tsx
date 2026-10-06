import { useState, useEffect } from 'react';
import { useQuestions } from './hooks/useQuestions';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionView from './components/QuestionView';
import clsx from 'clsx';

function App() {
  const { data: questions = [], isLoading } = useQuestions();
  
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(new Set());
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('iam_prep_theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('iam_prep_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('iam_prep_theme', 'light');
    }
  }, [isDarkMode]);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('iam_prep_progress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedQuestions(new Set(parsed));
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    }
  }, []);

  const handleToggleComplete = () => {
    if (!selectedQuestionId) return;
    const newCompleted = new Set(completedQuestions);
    if (newCompleted.has(selectedQuestionId)) {
      newCompleted.delete(selectedQuestionId);
    } else {
      newCompleted.add(selectedQuestionId);
    }
    setCompletedQuestions(newCompleted);
    localStorage.setItem('iam_prep_progress', JSON.stringify(Array.from(newCompleted)));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setSelectedQuestionId(prev => Math.max(1, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedQuestionId(prev => Math.min(questions.length, prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [questions.length]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredQuestions = questions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedQuestion = questions.find(q => q.id === selectedQuestionId) || questions[0];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 bg-brand-blue rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-blue/30 mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-brand-navy dark:text-white tracking-widest uppercase mb-4">SecurePrep</h2>
          <div className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-brand-blue rounded-full w-1/2 animate-[pulse_1s_ease-in-out_infinite]" />
          </div>
          <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Initializing Environment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-800 font-sans overflow-hidden">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Sidebar Overlay — sits below header */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-x-0 bottom-0 top-[56px] sm:top-[64px] bg-slate-900/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar — slides in from left, below header on mobile */}
        <div className={clsx(
          "fixed top-[56px] sm:top-[64px] bottom-0 left-0 z-50 lg:static lg:top-auto lg:bottom-auto lg:z-auto transition-transform duration-300 transform",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <Sidebar 
            questions={filteredQuestions} 
            selectedId={selectedQuestionId} 
            onSelect={(id) => {
              setSelectedQuestionId(id);
              setIsSidebarOpen(false);
            }}
            completedIds={completedQuestions}
            totalCount={questions.length}
          />
        </div>
        
        <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900 relative overflow-hidden">
          <QuestionView 
            question={selectedQuestion} 
            totalCount={questions.length}
            isCompleted={completedQuestions.has(selectedQuestionId)}
            onToggleComplete={handleToggleComplete}
            onNext={() => setSelectedQuestionId(prev => Math.min(questions.length, prev + 1))}
            onPrev={() => setSelectedQuestionId(prev => Math.max(1, prev - 1))}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
