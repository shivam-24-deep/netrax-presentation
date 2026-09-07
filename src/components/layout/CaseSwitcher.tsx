import React from 'react';
import { DEMO_CASES } from '../../data/demoCases';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Play, RotateCcw, AlertTriangle, ShieldCheck, MailWarning, Sparkles } from 'lucide-react';

export const CaseSwitcher: React.FC = () => {
  const { currentCase, setCaseId, resetInvestigation, isPlaying, togglePlay } = useDemoCase();

  return (
    <div className="w-full max-w-5xl mx-auto mb-10 px-4">
      <div className="p-3.5 rounded-2xl glass-panel-elevated border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Label & Info */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 font-mono text-[11px] font-semibold tracking-wider uppercase">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            SYNTHETIC DEMO
          </div>
          <p className="text-xs text-slate-400 hidden sm:block">
            Select a verified scenario to inspect real-time agentic correlation:
          </p>
        </div>

        {/* Center: Case Options */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {DEMO_CASES.map((c) => {
            const isSelected = c.id === currentCase.id;
            const isDanger = c.overallRiskScore >= 70;
            const isSafe = c.overallRiskScore < 20;

            return (
              <button
                key={c.id}
                onClick={() => setCaseId(c.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? isDanger
                      ? 'bg-red-950/50 border-red-500/60 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.25)]'
                      : isSafe
                      ? 'bg-emerald-950/50 border-emerald-500/60 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                      : 'bg-cyan-950/50 border-cyan-500/60 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {isDanger ? (
                  <AlertTriangle className={`w-3.5 h-3.5 ${isSelected ? 'text-red-400' : 'text-slate-500'}`} />
                ) : isSafe ? (
                  <ShieldCheck className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                ) : (
                  <MailWarning className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                )}

                <div className="text-left">
                  <div className="font-semibold leading-none">{c.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{c.category}</div>
                </div>

                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-bold ml-1 ${
                    isDanger
                      ? 'bg-red-500/20 text-red-300'
                      : isSafe
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-amber-500/20 text-amber-300'
                  }`}
                >
                  {c.overallRiskScore}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            onClick={resetInvestigation}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
            title="Re-run step-by-step investigation"
          >
            <RotateCcw className="w-3 h-3 text-cyan-400" />
            <span className="hidden lg:inline">Replay</span>
          </button>

          <button
            onClick={togglePlay}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30'
            }`}
          >
            <Play className={`w-3 h-3 ${isPlaying ? 'fill-amber-400' : 'fill-cyan-400'}`} />
            <span>{isPlaying ? 'Pause' : 'Simulate'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
