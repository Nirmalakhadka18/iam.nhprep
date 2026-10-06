import fs from 'fs';

let content = fs.readFileSync('src/components/visualizations/CustomVisuals.tsx', 'utf8');

// I will insert a hash function at the top of DefaultVisual
const hashCode = `
  // Pseudo-random generator for visual uniqueness
  const getSeed = (id) => (id * 2654435761) % Math.pow(2, 32);
  const seed = getSeed(questionId || 99);
`;

const modTemplateA = `
  if (template === 'A') {
    const cardShapes = ['rounded-2xl', 'rounded-full', 'rounded-[32px] rounded-br-none', 'rounded-xl'];
    const cardShape = cardShapes[seed % cardShapes.length];
    const connectorStyles = ['packet', 'arrow', 'dashed-pulse'];
    const connectorStyle = connectorStyles[(seed >> 2) % connectorStyles.length];
    
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 lg:p-8">
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 lg:gap-4 max-w-5xl">
          {steps.map((stepStr: string, idx: number) => {
            const isActive = currentStep >= idx;
            const isCurrent = currentStep === idx;
            const isLast = idx === steps.length - 1;
            const iconSrc = getImg(idx, stepStr);
            return (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isActive ? 1 : 0.35, scale: isCurrent ? 1.08 : 1, y: isCurrent ? -6 : 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={clsx('flex flex-col items-center shrink-0 w-28 lg:w-36')}
                >
                  <div className={clsx(
                    \`relative w-20 h-20 lg:w-28 lg:h-28 \${cardShape} overflow-hidden border-4 shadow-lg mb-3 transition-all duration-500\`,
                    isCurrent ? 'border-brand-blue ring-4 ring-brand-blue/20 shadow-brand-blue/20' :
                    isActive ? 'border-slate-300' : 'border-slate-200 grayscale'
                  )}>
                    <img src={iconSrc} alt={stepStr} className="w-full h-full object-cover" />
                    {isCurrent && (
                      <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-brand-blue/10" />
                    )}
                    {isActive && !isCurrent && (
                      <div className="absolute bottom-1 right-1 bg-brand-green rounded-full p-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className={clsx('font-bold text-center text-[11px] lg:text-xs leading-tight',
                    isCurrent ? 'text-brand-blue' : isActive ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400')}>
                    {stepStr}
                  </div>
                  {isCurrent && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="mt-1 text-[9px] text-brand-blue font-semibold tracking-wide">
                      ← Active
                    </motion.div>
                  )}
                </motion.div>
                {!isLast && (
                  <div className="flex items-center justify-center shrink-0 mb-6">
                    {connectorStyle === 'packet' && (
                      <div className="w-8 lg:w-14 h-[3px] bg-slate-200 dark:bg-slate-700 relative overflow-visible">
                        <Packet active={currentStep > idx} />
                      </div>
                    )}
                    {connectorStyle === 'arrow' && (
                      <div className="w-8 lg:w-14 h-[4px] relative overflow-hidden bg-slate-100 flex items-center justify-end">
                        <motion.div initial={{ width: '0%' }} animate={{ width: currentStep > idx ? '100%' : '0%' }} className="absolute left-0 top-0 bottom-0 bg-brand-blue" />
                        <div className={clsx("w-3 h-3 border-t-4 border-r-4 rotate-45 z-10 transition-colors duration-500", currentStep > idx ? "border-brand-blue" : "border-slate-200")} />
                      </div>
                    )}
                    {connectorStyle === 'dashed-pulse' && (
                      <div className={clsx("w-8 lg:w-14 h-0 border-t-[4px] border-dashed transition-colors duration-700 relative", currentStep > idx ? "border-brand-blue" : "border-slate-300")}>
                        {currentStep > idx && <motion.div animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue/30 rounded-full" />}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
`;

// I will write this as a script that replaces the original chunks
