import React from 'react';
import { HubLayout, SequenceLayout, MatrixLayout } from './LayoutEngines';

export const DynamicVisualizer = ({ question, currentStep, isMobile }: any) => {
  const visData = question.visualization.data;
  
  if (!visData) {
    return <div className="w-full h-[400px] flex items-center justify-center text-slate-400">Visualization data missing</div>;
  }

  const { architecture } = visData;

  switch (architecture) {
    case 'hub':
      return <HubLayout data={visData} currentStep={currentStep} isMobile={isMobile} />;
    case 'sequence':
      return <SequenceLayout data={visData} currentStep={currentStep} isMobile={isMobile} />;
    case 'matrix':
      return <MatrixLayout data={visData} currentStep={currentStep} isMobile={isMobile} />;
    default:
      return <div className="w-full h-full flex items-center justify-center">Unknown architecture: {architecture}</div>;
  }
};
