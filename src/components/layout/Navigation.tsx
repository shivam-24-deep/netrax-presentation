import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, ChevronDown, BookOpen, Layers } from 'lucide-react';
import { useDemoCase } from '../../context/DemoCaseContext';

const NAV_ITEMS = [
  { id: 'the-threat', number: '01', label: 'THE THREAT' },
  { id: 'the-shift', number: '02', label: 'THE SHIFT' },
  { id: 'what-is-netrax', number: '03', label: 'NETRAX' },
  { id: 'control-room', number: '04', label: 'HOW IT INVESTIGATES' },
  { id: 'forensic-intelligence', number: '05', label: 'FORENSIC INTELLIGENCE' },
  { id: 'impact', number: '06', label: 'THE IMPACT' },
  { id: 'research', number: '07', label: 'RESEARCH' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { setIsResearchModalOpen, currentCase } = useDemoCase();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 80);

      // Section spy
      const sections = ['hero', ...NAV_ITEMS.map((item) => item.id)];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-slate-900/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Top Navigation */}
      <header
        className={`fixed top-3 left-0 right-0 z-40 px-4 md:px-8 transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : 'translate-y-1'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-2xl glass-panel-elevated shadow-2xl border border-slate-800/80">
          {/* Logo & SIH ID */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 group-hover:border-cyan-400 transition-all">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-wider text-white">NETRAX</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                  SIH26106
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 hidden sm:block">
                AICTE Cyber Security Cell
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-700/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Active Case Pill */}
            <div
              onClick={() => scrollToSection('control-room')}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono cursor-pointer hover:border-slate-700 transition-colors"
              title="Active Synthetic Case"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  currentCase.overallRiskScore > 50 ? 'bg-red-400 animate-pulse' : 'bg-emerald-400'
                }`}
              />
              <span className="text-slate-300 truncate max-w-[120px]">{currentCase.name}</span>
              <span className="text-[10px] px-1 py-0.2 rounded bg-slate-800 text-slate-400">
                {currentCase.overallRiskScore}
              </span>
            </div>

            {/* Research Modal Button */}
            <button
              onClick={() => setIsResearchModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-all"
              title="View Research, RFCs & Datasets"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">Research ↗</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection('control-room')}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Explore Investigation</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
