import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Circle, Search } from 'lucide-react';
import type { Question } from '../types/question';
import clsx from 'clsx';

interface SidebarProps {
  questions: Question[];
  selectedId: number;
  onSelect: (id: number) => void;
  completedIds: Set<number>;
  totalCount: number;
}

type DifficultyFilter = 'all' | 'easy' | 'medium' | 'hard';

export default function Sidebar({ questions, selectedId, onSelect, completedIds, totalCount }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const completedCount = completedIds.size;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || q.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const difficultyTabs: { key: DifficultyFilter; label: string; color: string; dot: string }[] = [
    { key: 'all',    label: 'All',    color: 'text-brand-navy dark:text-white', dot: 'bg-slate-400' },
    { key: 'easy',   label: 'Easy',   color: 'text-emerald-600',               dot: 'bg-emerald-500' },
    { key: 'medium', label: 'Medium', color: 'text-amber-600',                 dot: 'bg-amber-500' },
    { key: 'hard',   label: 'Hard',   color: 'text-red-600',                   dot: 'bg-red-500' },
  ];

  const difficultyDot = (difficulty?: string) => {
    if (difficulty === 'easy')   return 'bg-emerald-500';
    if (difficulty === 'medium') return 'bg-amber-500';
    if (difficulty === 'hard')   return 'bg-red-500';
    return 'bg-slate-400';
  };

  return (
    <div className="w-[80vw] max-w-[300px] lg:max-w-[350px] lg:w-[350px] flex flex-col h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 shrink-0">
      <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <h2 className="font-bold text-[18px] text-brand-navy dark:text-white mb-1 flex items-center gap-2">
          IAM &amp; Zero Trust
          <span className="text-[13px] font-medium text-brand-gray bg-slate-100 px-2 py-0.5 rounded-full">• {totalCount} Questions</span>
        </h2>
        
        <div className="mt-4 mb-4">
          <div className="flex justify-between text-[13px] font-semibold text-brand-gray mb-2">
            <span>{completedCount} / {totalCount} completed</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-[6px] bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-green transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Difficulty Filter Tabs */}
        <div className="flex gap-1 mb-3 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
          {difficultyTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setDifficultyFilter(tab.key)}
              className={clsx(
                "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[11px] font-bold transition-all duration-200",
                difficultyFilter === tab.key
                  ? `bg-white dark:bg-slate-700 shadow-sm ${tab.color}`
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              )}
            >
              <span className={clsx("w-2 h-2 rounded-full shrink-0", tab.dot)} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-slate-400" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-9 pr-12 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-[13px] focus:outline-none focus:border-brand-blue dark:focus:border-brand-blue transition-colors"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold text-slate-400 bg-slate-200 dark:bg-slate-700 rounded border border-slate-300 dark:border-slate-600 shadow-sm">
              Ctrl K
            </kbd>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 custom-scrollbar scroll-smooth-touch">
        {filteredQuestions.length === 0 ? (
          <div className="text-center p-4 text-slate-400 text-[13px]">No questions found</div>
        ) : (
          <div className="space-y-1">
            {filteredQuestions.map((q) => {
              const isSelected = q.id === selectedId;
              const isCompleted = completedIds.has(q.id);

              return (
                <button
                  key={q.id}
                  onClick={() => onSelect(q.id)}
                  className={clsx(
                    "w-full flex items-start gap-3 p-3 text-left transition-all duration-200 rounded-r-lg group border-l-[3px]",
                    isSelected 
                      ? "bg-brand-blue-light border-brand-blue" 
                      : "border-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                >
                  <div className={clsx(
                    "text-[13px] font-medium mt-[2px] w-5 text-right shrink-0",
                    isSelected ? "text-brand-blue dark:text-white" : "text-brand-gray-muted group-hover:text-brand-gray dark:group-hover:text-slate-400"
                  )}>
                    {q.id.toString().padStart(2, '0')}
                  </div>
                  
                  <div className={clsx(
                    "flex-1 text-[14px] font-medium pr-2 leading-snug",
                    isSelected ? "text-brand-blue dark:text-white" : "text-brand-navy dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-white"
                  )}>
                    {q.question}
                    {q.difficulty && (
                      <span className="mt-1 flex items-center gap-1">
                        <span className={clsx("inline-block w-1.5 h-1.5 rounded-full", difficultyDot(q.difficulty))} />
                        <span className={clsx(
                          "text-[10px] font-semibold",
                          q.difficulty === 'easy' && "text-emerald-600",
                          q.difficulty === 'medium' && "text-amber-600",
                          q.difficulty === 'hard' && "text-red-600"
                        )}>
                          {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                        </span>
                      </span>
                    )}
                  </div>

                  <div className="shrink-0 mt-[2px]">
                    {isCompleted ? (
                      <CheckCircle2 className="w-[18px] h-[18px] text-brand-green bg-white dark:bg-slate-900 rounded-full" />
                    ) : (
                      <Circle className={clsx(
                        "w-[18px] h-[18px]",
                        isSelected ? "text-brand-blue/30 dark:text-white/30 fill-white dark:fill-brand-blue" : "text-slate-200 dark:text-slate-600"
                      )} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
