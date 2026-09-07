import React from 'react';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Shield, Sparkles, ArrowUp, RotateCcw, ExternalLink } from 'lucide-react';

export const FinalCTAScene: React.FC = () => {
  const { resetInvestigation, setCaseId } = useDemoCase();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="final-cta" className="py-28 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative overflow-hidden text-center">
      {/* Visual background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Shield Icon Brand */}
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
          <Shield className="w-8 h-8" />
        </div>

        {/* Big Statement */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono text-xs">
            <span>SIH 2026</span>
            <span>•</span>
            <span className="font-bold">SIH26106</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
            NETRAX
          </h2>

          <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
            "From suspicious email to actionable forensic intelligence."
          </p>

          <div className="text-sm font-mono tracking-widest text-cyan-400 uppercase font-bold pt-2">
            DETECT · INVESTIGATE · EXPLAIN
          </div>
        </div>

        {/* Final CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              resetInvestigation();
              scrollToSection('control-room');
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>EXPLORE NETRAX INVESTIGATION</span>
          </button>

          <button
            onClick={() => scrollToSection('hero')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-mono text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Return to Top</span>
          </button>
        </div>

        <div className="text-xs font-mono text-slate-500 pt-8">
          All India Council for Technical Education (Cyber Security Cell) • Category: Software
        </div>
      </div>
    </section>
  );
};
