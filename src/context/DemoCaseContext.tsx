import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEMO_CASES } from '../data/demoCases';
import { SyntheticDemoCase } from '../types/investigation';

interface DemoCaseContextType {
  currentCase: SyntheticDemoCase;
  setCaseId: (id: string) => void;
  activeStep: number;
  setActiveStep: (step: number) => void;
  isPlaying: boolean;
  togglePlay: () => void;
  resetInvestigation: () => void;
  activeNodeId: string | null;
  setActiveNodeId: (id: string | null) => void;
  analystDecision: string | null;
  setAnalystDecision: (decision: string | null) => void;
  isResearchModalOpen: boolean;
  setIsResearchModalOpen: (open: boolean) => void;
}

const DemoCaseContext = createContext<DemoCaseContextType | undefined>(undefined);

export const DemoCaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [caseId, setCaseIdState] = useState<string>('phishing-m365');
  const [activeStep, setActiveStep] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [analystDecision, setAnalystDecision] = useState<string | null>(null);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState<boolean>(false);

  const currentCase = DEMO_CASES.find((c) => c.id === caseId) || DEMO_CASES[0];

  const setCaseId = (id: string) => {
    setCaseIdState(id);
    setActiveStep(10);
    setIsPlaying(false);
    setActiveNodeId(null);
    setAnalystDecision(null);
  };

  const resetInvestigation = () => {
    setActiveStep(1);
    setIsPlaying(true);
    setAnalystDecision(null);
  };

  const togglePlay = () => {
    if (!isPlaying && activeStep >= currentCase.timeline.length) {
      setActiveStep(1);
    }
    setIsPlaying((prev) => !prev);
  };

  // Autoplay step progression
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= currentCase.timeline.length) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 700);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentCase.timeline.length]);

  return (
    <DemoCaseContext.Provider
      value={{
        currentCase,
        setCaseId,
        activeStep,
        setActiveStep,
        isPlaying,
        togglePlay,
        resetInvestigation,
        activeNodeId,
        setActiveNodeId,
        analystDecision,
        setAnalystDecision,
        isResearchModalOpen,
        setIsResearchModalOpen,
      }}
    >
      {children}
    </DemoCaseContext.Provider>
  );
};

export const useDemoCase = (): DemoCaseContextType => {
  const context = useContext(DemoCaseContext);
  if (!context) {
    throw new Error('useDemoCase must be used within a DemoCaseProvider');
  }
  return context;
};
