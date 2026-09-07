import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoCase } from '../../context/DemoCaseContext';
import { DEMO_CASES } from '../../data/demoCases';
import { ResearchModal } from '../shared/ResearchModal';

// 6 Slides
import { Slide01_Hero } from '../slides/Slide01_Hero';
import { Slide02_ProblemShift } from '../slides/Slide02_ProblemShift';
import { Slide03_Architecture } from '../slides/Slide03_Architecture';
import { Slide04_InvestigationCockpit } from '../slides/Slide04_InvestigationCockpit';
import { Slide05_Impact } from '../slides/Slide05_Impact';
import { Slide06_ResearchFinale } from '../slides/Slide06_ResearchFinale';

import {
  Shield,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  BookOpen,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  MailWarning
} from 'lucide-react';

const SLIDES = [
  { id: 'hero', component: Slide01_Hero, title: 'Hero' },
  { id: 'shift', component: Slide02_ProblemShift, title: 'The Shift' },
  { id: 'arch', component: Slide03_Architecture, title: 'Architecture' },
  { id: 'cockpit', component: Slide04_InvestigationCockpit, title: 'Investigation' },
  { id: 'impact', component: Slide05_Impact, title: 'Impact' },
  { id: 'research', component: Slide06_ResearchFinale, title: 'Research & Finale' },
];

export const PresentationDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const isTransitioningRef = useRef<boolean>(false);
  const touchStartYRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const { currentCase, setCaseId, setIsResearchModalOpen } = useDemoCase();

  // Navigation handlers
  const goToSlide = useCallback((index: number) => {
    if (isTransitioningRef.current) return;
    if (index < 0 || index >= SLIDES.length || index === currentSlide) return;

    isTransitioningRef.current = true;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 650);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const togglePresentationMode = useCallback(() => {
    setIsPresentationMode((prev) => !prev);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      if (['ArrowRight', 'ArrowDown', 'Space', 'PageDown'].includes(e.code)) {
        e.preventDefault();
        nextSlide();
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.code)) {
        e.preventDefault();
        prevSlide();
      } else if (e.code === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.code === 'End') {
        e.preventDefault();
        goToSlide(SLIDES.length - 1);
      } else if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'p') {
        e.preventDefault();
        togglePresentationMode();
      } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6'].includes(e.code)) {
        const slideIndex = parseInt(e.code.replace('Digit', ''), 10) - 1;
        if (slideIndex >= 0 && slideIndex < SLIDES.length) {
          goToSlide(slideIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, togglePresentationMode]);

  // Debounced Wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioningRef.current) return;

      if (e.deltaY > 25 || e.deltaX > 25) {
        nextSlide();
      } else if (e.deltaY < -25 || e.deltaX < -25) {
        prevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartXRef.current === null || touchStartYRef.current === null) return;
      const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

      if (Math.abs(deltaX) > 40 || Math.abs(deltaY) > 40) {
        if (deltaX > 40 || deltaY > 40) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      touchStartXRef.current = null;
      touchStartYRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide].component;

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.3 },
      },
    }),
  };

  return (
    <div className="fixed inset-0 w-screen h-screen min-h-screen max-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden select-none bg-grid-pattern">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Global Research Modal */}
      <ResearchModal />

      {/* Presentation Top Chrome */}
      <header className={`relative z-30 w-full px-4 sm:px-8 py-3 flex items-center justify-between border-b border-slate-900 bg-slate-950/80 backdrop-blur-md transition-opacity ${isPresentationMode ? 'opacity-20 hover:opacity-100' : 'opacity-100'}`}>
        {/* Left: NetraX Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 text-cyan-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-wider text-white">NETRAX</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                SIH26106
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 hidden sm:block">
              AICTE Cyber Security Cell
            </span>
          </div>
        </div>

        {/* Center: Case Switcher Mini Pill */}
        <div className="hidden md:flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 px-2 uppercase">CASE:</span>
          {DEMO_CASES.map((c) => {
            const isSelected = c.id === currentCase.id;
            return (
              <button
                key={c.id}
                onClick={() => setCaseId(c.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? c.overallRiskScore >= 70
                      ? 'bg-red-950/80 border-red-500 text-red-200'
                      : c.overallRiskScore < 20
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                      : 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{c.name.split(' ')[0]}</span>
                <span className="text-[10px] font-bold opacity-80">{c.overallRiskScore}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Slide Number & Presentation Controls */}
        <div className="flex items-center gap-2.5 font-mono text-xs">
          <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-bold">
            0{currentSlide + 1} / 0{SLIDES.length}
          </div>

          <button
            onClick={() => setIsResearchModalOpen(true)}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 cursor-pointer transition-colors"
            title="Open Research Dossier"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
          </button>

          <button
            onClick={togglePresentationMode}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 cursor-pointer transition-colors"
            title={isPresentationMode ? 'Exit Presentation Mode [P]' : 'Enter Presentation Mode [P]'}
          >
            {isPresentationMode ? <Minimize className="w-4 h-4 text-cyan-400" /> : <Maximize className="w-4 h-4 text-slate-400" />}
          </button>
        </div>
      </header>

      {/* Main Single-Slide Viewport Canvas (100% Guaranteed No-Clip Safe Area) */}
      <main className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full max-h-[86vh] flex items-center justify-center"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Presentation Bottom Chrome */}
      <footer className={`relative z-30 w-full px-4 sm:px-8 py-2.5 flex items-center justify-between border-t border-slate-900 bg-slate-950/80 backdrop-blur-md transition-opacity ${isPresentationMode ? 'opacity-20 hover:opacity-100' : 'opacity-100'}`}>
        {/* Left: Keyboard shortcuts hint */}
        <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
          <span className="text-slate-400">[Space / ← →]</span> slide • <span className="text-slate-400">[P]</span> full presentation • <span className="text-slate-400">[Wheel]</span> scroll
        </div>

        {/* Center: Slide Dots */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                    : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Slide ${idx + 1}: ${slide.title}`}
              />
            );
          })}
        </div>

        {/* Right: Discrete Previous / Next Controls */}
        <div className="flex items-center gap-1.5 font-mono">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              currentSlide === 0
                ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
            title="Previous Slide (← / PageUp)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              currentSlide === SLIDES.length - 1
                ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border-cyan-700 hover:border-cyan-500'
            }`}
            title="Next Slide (→ / Space / PageDown)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};
