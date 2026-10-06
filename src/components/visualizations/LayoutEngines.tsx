import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { User, Smartphone, Fingerprint, Shield, Key, Database, Globe, Server, Lock, Unlock, FileText, Activity, RefreshCw } from 'lucide-react';

const IconMap = {
  user: User,
  phone: Smartphone,
  fingerprint: Fingerprint,
  shield: Shield,
  key: Key,
  db: Database,
  browser: Globe,
  server: Server,
  lock: Lock,
  unlock: Unlock,
  token: FileText,
  activity: Activity,
  refresh: RefreshCw
};

const renderIcon = (type: string, active: boolean) => {
  const Icon = IconMap[type as keyof typeof IconMap] || Server;
  return <Icon className={clsx("w-8 h-8", active ? "text-brand-blue" : "text-slate-400")} />;
};

export const HubLayout = ({ data, currentStep, isMobile }: any) => {
  const centerNode = data.nodes.find((n: any) => n.center);
  const spokeNodes = data.nodes.filter((n: any) => !n.center);
  const currentFrame = data.stepFrames[currentStep];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Center Node */}
      {centerNode && (
        <motion.div
          animate={{ scale: currentFrame.activeNodes.includes(centerNode.id) ? 1.1 : 1 }}
          className={clsx("absolute z-20 flex flex-col items-center justify-center p-4 rounded-xl border-2 bg-white dark:bg-slate-900", currentFrame.activeNodes.includes(centerNode.id) ? "border-brand-blue shadow-lg" : "border-slate-200 dark:border-slate-700")}
        >
          {renderIcon(centerNode.type, currentFrame.activeNodes.includes(centerNode.id))}
          <span className="mt-2 text-xs font-bold">{centerNode.label}</span>
        </motion.div>
      )}

      {/* Spoke Nodes */}
      {spokeNodes.map((node: any, idx: number) => {
        const angle = (idx / spokeNodes.length) * Math.PI * 2;
        const radius = isMobile ? 120 : 160;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isActive = currentFrame.activeNodes.includes(node.id);

        return (
          <motion.div
            key={node.id}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x, y, opacity: 1, scale: isActive ? 1.05 : 1 }}
            className={clsx("absolute z-10 flex flex-col items-center justify-center p-3 rounded-xl border-2 bg-white dark:bg-slate-900", isActive ? "border-brand-green shadow-md" : "border-slate-200 dark:border-slate-700")}
          >
            {renderIcon(node.type, isActive)}
            <span className="mt-1 text-[10px] font-bold text-center w-20">{node.label}</span>
          </motion.div>
        );
      })}

      {/* Edges & Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {spokeNodes.map((node: any, idx: number) => {
          const angle = (idx / spokeNodes.length) * Math.PI * 2;
          const radius = isMobile ? 120 : 160;
          const x = 50 + (Math.cos(angle) * radius * 100) / 400; // rough % positioning
          const y = 50 + (Math.sin(angle) * radius * 100) / 400;
          
          const edgeId = `${centerNode?.id}-${node.id}`;
          const isEdgeActive = currentFrame.activeEdges.includes(edgeId);

          return (
            <g key={`edge-${idx}`}>
              <line x1="50%" y1="50%" x2={`${x}%`} y2={`${y}%`} stroke={isEdgeActive ? "#1479E8" : "#e2e8f0"} strokeWidth="2" strokeDasharray={isEdgeActive ? "none" : "4,4"} />
              {isEdgeActive && (
                <circle r="4" fill="#1479E8">
                  <animateMotion dur="1s" repeatCount="indefinite" path={`M 0,0 L ${(x-50)*4},${(y-50)*4}`} />
                </circle>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export const SequenceLayout = ({ data, currentStep, isMobile }: any) => {
  const currentFrame = data.stepFrames[currentStep];
  
  return (
    <div className="relative w-full h-[400px] flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
      {data.nodes.map((node: any, idx: number) => {
        const isActive = currentFrame.activeNodes.includes(node.id);
        return (
          <div key={node.id} className="flex flex-col items-center z-10">
            <motion.div
              animate={{ scale: isActive ? 1.1 : 1 }}
              className={clsx("w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border-2 bg-white dark:bg-slate-900 shadow-sm", isActive ? "border-brand-blue" : "border-slate-200 dark:border-slate-700")}
            >
              {renderIcon(node.type, isActive)}
            </motion.div>
            <span className={clsx("mt-3 text-xs font-bold", isActive ? "text-brand-navy dark:text-white" : "text-slate-500 dark:text-slate-400")}>{node.label}</span>
          </div>
        );
      })}
      
      {/* Sequence Arrows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {data.edges.map((edge: any, idx: number) => {
          const isActive = currentFrame.activeEdges.includes(edge.id);
          if (!isActive) return null;
          
          const fromIdx = data.nodes.findIndex((n: any) => n.id === edge.from);
          const toIdx = data.nodes.findIndex((n: any) => n.id === edge.to);
          const isForward = toIdx > fromIdx;
          
          // Simplified position calculation
          const leftPct = (Math.min(fromIdx, toIdx) / (data.nodes.length - 1)) * 100;
          const widthPct = (Math.abs(toIdx - fromIdx) / (data.nodes.length - 1)) * 100;
          
          return (
            <motion.div
              key={edge.id}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
              style={{ left: `calc(${leftPct}% + 48px)`, width: `calc(${widthPct}% - 96px)` }}
            >
              <div className="text-[10px] font-bold text-brand-blue mb-1 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full shadow-sm">{edge.label}</div>
              <div className="w-full h-0.5 bg-brand-blue relative">
                <motion.div 
                  initial={{ left: isForward ? '0%' : '100%' }}
                  animate={{ left: isForward ? '100%' : '0%' }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_8px_#1479E8]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const MatrixLayout = ({ data, currentStep }: any) => {
  const currentFrame = data.stepFrames[currentStep];
  
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6 p-4">
        {data.nodes.map((node: any) => {
          const isActive = currentFrame.activeNodes.includes(node.id);
          const isDenied = currentFrame.deniedNodes?.includes(node.id);
          
          return (
            <motion.div
              key={node.id}
              animate={{ scale: isActive ? 1.05 : 1, opacity: isActive ? 1 : 0.6 }}
              className={clsx("flex flex-col items-center p-4 rounded-xl border-2 bg-white dark:bg-slate-900", 
                isActive ? (isDenied ? "border-red-500 shadow-md" : "border-brand-green shadow-md") : "border-slate-200 dark:border-slate-700"
              )}
            >
              {renderIcon(node.type, isActive)}
              <span className="mt-2 text-xs font-bold text-center">{node.label}</span>
              {node.subtitle && <span className="text-[9px] text-slate-500 dark:text-slate-400 text-center">{node.subtitle}</span>}
              
              {isActive && isDenied && (
                <div className="absolute inset-0 bg-red-500/10 rounded-xl flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">DENIED</div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
