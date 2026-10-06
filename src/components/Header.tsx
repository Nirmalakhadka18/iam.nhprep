import { Search, Menu, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onMenuClick?: () => void;
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

export default function Header({ searchQuery, setSearchQuery, onMenuClick, isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-[56px] sm:h-[64px] px-3 sm:px-4 lg:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shrink-0" style={{ paddingLeft: 'max(12px, env(safe-area-inset-left))', paddingRight: 'max(12px, env(safe-area-inset-right))' }}>
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 h-full min-w-0">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="lg:hidden p-2 -ml-1 text-slate-500 dark:text-slate-400 hover:text-brand-navy dark:hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center h-full min-w-0">
          <div className="flex items-center gap-2 text-brand-navy dark:text-white font-bold text-[18px] sm:text-[22px] tracking-tight shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#1677E8] rounded-md text-white flex items-center justify-center text-[13px] sm:text-[16px] font-extrabold tracking-tighter shadow-sm shrink-0">
              NH
            </div>
            <div className="hidden xs:block sm:block"><span className="text-brand-blue">IAM</span>Prep</div>
          </div>
          {/* Divider + label — hidden on small phones */}
          <div className="hidden sm:flex items-center h-full">
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-4" />
            <div className="font-semibold text-brand-navy dark:text-white text-[14px] lg:text-[15px] h-full flex items-center border-b-2 border-brand-blue translate-y-[1px] whitespace-nowrap">
              Interview Lab
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
        {/* Search — hidden on mobile, shown sm+ */}
        <div className="relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-slate-400 group-focus-within:text-brand-blue" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 w-[180px] md:w-[260px] lg:w-[300px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-[13px] focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue transition-all"
            style={{ fontSize: '16px' }}
          />
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="text-slate-500 dark:text-slate-400 hover:text-brand-navy dark:hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-1.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 py-1 px-1.5 sm:px-2 rounded-lg transition-colors min-h-[44px]">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#1677E8] rounded-md text-white flex items-center justify-center text-[12px] sm:text-[14px] font-extrabold tracking-tighter shadow-sm shrink-0">
            NH
          </div>
          <span className="text-[13px] sm:text-[14px] font-semibold text-brand-navy dark:text-white hidden md:block">NH Learner</span>
        </div>
      </div>
    </header>
  );
}
