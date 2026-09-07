import React, { useState, useEffect } from 'react';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Terminal, Shield, Clock, Hash, CheckCircle2, RotateCcw, Play } from 'lucide-react';

export const Slide04_InvestigationCockpit: React.FC = () => {
  const { currentCase, activeStep, setActiveStep, isPlaying, togglePlay, resetInvestigation } = useDemoCase();
  const [animatedRisk, setAnimatedRisk] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const target = activeStep >= 10 ? currentCase.overallRiskScore : Math.round((currentCase.overallRiskScore * activeStep) / 10);
    const duration = 400;
    const increment = Math.max(1, Math.round(target / 15));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setAnimatedRisk(target);
        clearInterval(interval);
      } else {
        setAnimatedRisk(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [currentCase.id, currentCase.overallRiskScore, activeStep]);

  const isDanger = currentCase.overallRiskScore >= 70;
  const isSafe = currentCase.overallRiskScore < 20;

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-between py-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-[11px] mb-1">
            <span>04 // LIVE INVESTIGATION COCKPIT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Forensic Control Room
          </h2>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={resetInvestigation}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3 text-cyan-400" />
            <span>Replay</span>
          </button>
          <button
            onClick={togglePlay}
            className={`px-3 py-1 rounded-lg flex items-center gap-1 cursor-pointer ${
              isPlaying ? 'bg-amber-950 text-amber-300 border border-amber-600' : 'bg-cyan-950 text-cyan-300 border border-cyan-600'
            }`}
          >
            <Play className={`w-3 h-3 ${isPlaying ? 'fill-amber-400' : 'fill-cyan-400'}`} />
            <span>{isPlaying ? 'Pause' : 'Simulate'}</span>
          </button>
        </div>
      </div>

      {/* Main 3-Column Cockpit Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch my-auto">
        {/* Left: Suspicious Email Artifact (4 Cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-slate-950/90 border border-slate-800 p-3.5 space-y-2 flex flex-col justify-between text-xs font-mono">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] text-slate-400">
              <span className="font-bold text-white uppercase">INGESTED EMAIL</span>
              <span className="text-cyan-400">RFC 5322</span>
            </div>

            <div className="space-y-1.5 mt-2">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 text-[9px] block">FROM:</span>
                <span className="text-white font-bold truncate block">{currentCase.email.fromDisplay}</span>
                <span className="text-cyan-400 text-[10px] truncate block">{currentCase.email.fromAddress}</span>
              </div>

              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 text-[9px] block">SUBJECT:</span>
                <span className="text-slate-200 font-semibold truncate block">{currentCase.email.subject}</span>
              </div>

              <div className="p-2 rounded bg-slate-900/40 border border-slate-800/80 font-sans text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {currentCase.email.bodySnippet}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-900">
            <span className="text-[9px] font-mono text-slate-500 block mb-1">FLAGS:</span>
            <div className="flex flex-wrap gap-1">
              {currentCase.email.anomalies.slice(0, 3).map((ano, i) => (
                <span key={i} className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-red-950 text-red-300 border border-red-800">
                  {ano}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Audited Timeline (5 Cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-slate-950/90 border border-slate-800 p-3.5 space-y-2 flex flex-col justify-between text-xs font-mono">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] text-slate-400">
              <span className="font-bold text-white uppercase flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-cyan-400" />
                AUDITED INVESTIGATION TIMELINE
              </span>
              <span className="text-cyan-400 font-bold">Step {activeStep} / 10</span>
            </div>

            <div className="space-y-1 mt-2 max-h-[220px] overflow-y-auto pr-1">
              {currentCase.timeline.slice(0, 7).map((step) => {
                const isPassed = step.stepNumber <= activeStep;
                const isFlagged = step.status === 'FLAGGED';
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.stepNumber)}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer text-[11px] ${
                      isPassed
                        ? isFlagged
                          ? 'bg-red-950/40 border-red-800/80 text-red-200'
                          : 'bg-slate-900 border-slate-800 text-slate-200'
                        : 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">✓ {step.actionLabel}</span>
                      <span className="text-[9px] text-slate-500">[{step.toolName}]</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Deterministic telemetry only</span>
            <span className="text-emerald-400 font-bold">Latency: ~446ms</span>
          </div>
        </div>

        {/* Right: Risk Score Gauge (3 Cols) */}
        <div className="lg:col-span-3 rounded-2xl bg-slate-950/90 border border-slate-800 p-3.5 space-y-3 flex flex-col justify-between text-center">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
              COMPOUND VERDICT
            </div>

            <div
              className={`p-4 rounded-2xl border transition-all ${
                isDanger
                  ? 'bg-red-950/50 border-red-500/80 text-red-300 shadow-[0_0_25px_rgba(239,68,68,0.25)]'
                  : isSafe
                  ? 'bg-emerald-950/50 border-emerald-500/80 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.25)]'
                  : 'bg-amber-950/50 border-amber-500/80 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.25)]'
              }`}
            >
              <div className="text-5xl font-black font-mono tracking-tight text-white">
                {animatedRisk}
              </div>
              <div className="text-xs font-mono font-bold tracking-widest uppercase mt-1">
                {currentCase.riskLevel}
              </div>
            </div>
          </div>

          <div className="space-y-1 font-mono text-[10px]">
            {currentCase.riskFactors.slice(0, 3).map((f) => (
              <div key={f.id} className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span className="truncate max-w-[120px] text-slate-300">{f.label}</span>
                <span className={f.weight > 0 ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {f.weight > 0 ? `+${f.weight}` : f.weight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Evidence Graph Strip */}
      <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <Hash className="w-3.5 h-3.5 text-cyan-400" />
          <span>EVIDENCE TOPOLOGY CORRELATION:</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {currentCase.nodes.map((n) => (
            <div
              key={n.id}
              className={`p-1.5 rounded-lg border text-center font-mono ${
                n.status === 'danger'
                  ? 'bg-red-950/40 border-red-500/50 text-red-200'
                  : n.status === 'clean'
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                  : 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
              }`}
            >
              <div className="text-[8px] text-slate-400 uppercase truncate">{n.category}</div>
              <div className="text-[10px] font-bold truncate">{n.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-900 pt-2 px-2">
        <span>Full mathematical provenance without human fatigue</span>
        <span className="text-cyan-400 font-semibold">Press [Space] or [→] for Slide 05</span>
      </div>
    </div>
  );
};
