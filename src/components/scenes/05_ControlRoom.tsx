import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { CaseSwitcher } from '../layout/CaseSwitcher';
import { Shield, AlertTriangle, CheckCircle2, Clock, Terminal, ChevronRight, Hash, Globe, Server, Link as LinkIcon, RotateCcw, Play } from 'lucide-react';

export const ControlRoomScene: React.FC = () => {
  const { currentCase, activeStep, setActiveStep, isPlaying, togglePlay, resetInvestigation } = useDemoCase();
  const [animatedRisk, setAnimatedRisk] = useState<number>(0);

  // Animate risk count-up when currentCase or activeStep changes
  useEffect(() => {
    let start = 0;
    const target = activeStep >= 10 ? currentCase.overallRiskScore : Math.round((currentCase.overallRiskScore * activeStep) / 10);
    const duration = 600; // ms
    const increment = target / (duration / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setAnimatedRisk(target);
        clearInterval(interval);
      } else {
        setAnimatedRisk(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [currentCase.id, currentCase.overallRiskScore, activeStep]);

  const isDanger = currentCase.overallRiskScore >= 70;
  const isSafe = currentCase.overallRiskScore < 20;

  return (
    <section id="control-room" className="py-24 px-4 md:px-8 bg-slate-950/90 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          tag="HERO PRODUCT DEMO"
          headline="Investigation Control Room"
          subheadline="Live telemetry cockpit: Audited tool execution, evidence convergence, and risk scoring in real time."
          badgeColor="cyan"
        />

        {/* Floating Case Switcher for Instant Judge Interaction */}
        <CaseSwitcher />

        {/* 4-Pane SOC Cockpit Interface */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 shadow-2xl p-5 md:p-7 overflow-hidden space-y-6">
          {/* Cockpit Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/90" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                NETRAX FORENSIC COCKPIT v2.6 // {currentCase.caseCode}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>Total Latency: 446ms</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  SOC ENGINE ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Upper 3 Columns: Left Email | Middle Timeline | Right Risk */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel: Submitted Email (4 Cols) */}
            <div className="lg:col-span-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 p-4 space-y-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-3">
                  <span className="text-xs font-mono font-bold uppercase text-slate-300">
                    Ingested Email Artifact
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    RFC 5322
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">FROM:</span>
                    <span className="text-slate-200 font-bold truncate block">{currentCase.email.fromDisplay}</span>
                    <span className="text-cyan-400 text-[11px] truncate block">{currentCase.email.fromAddress}</span>
                  </div>

                  <div className={`p-2 rounded border ${currentCase.email.replyTo !== currentCase.email.fromAddress ? 'bg-amber-950/30 border-amber-500/40 text-amber-300' : 'bg-slate-900/60 border-slate-800/80 text-slate-300'}`}>
                    <span className="text-slate-500 block text-[10px]">REPLY-TO:</span>
                    <span className="truncate block font-semibold">{currentCase.email.replyTo}</span>
                  </div>

                  <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">SUBJECT:</span>
                    <span className="text-white font-semibold truncate block">{currentCase.email.subject}</span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/40 border border-slate-800/60 font-sans text-xs text-slate-300 leading-relaxed max-h-36 overflow-y-auto">
                    {currentCase.email.fullBody}
                  </div>

                  {currentCase.email.suspiciousUrl && (
                    <div className="p-2 rounded bg-red-950/30 border border-red-800/50">
                      <span className="text-red-400 block text-[10px] font-mono font-bold">EXTRACTED URL:</span>
                      <span className="text-red-300 text-[11px] font-mono truncate block">
                        {currentCase.email.cleanUrlDisplay}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Anomaly Badges */}
              <div className="pt-2 border-t border-slate-900">
                <span className="text-[10px] font-mono text-slate-500 block mb-1.5">DETECTED ANOMALIES:</span>
                <div className="flex flex-wrap gap-1">
                  {currentCase.email.anomalies.length > 0 ? (
                    currentCase.email.anomalies.map((ano, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-red-950/80 text-red-300 border border-red-800/60">
                        {ano}
                      </span>
                    ))
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                      NO PROTOCOL ANOMALIES DETECTED
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Middle Panel: Investigation Timeline (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 p-4 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-3">
                  <span className="text-xs font-mono font-bold uppercase text-slate-300 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    Investigation Timeline (Audited)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Step {activeStep} / 10
                  </span>
                </div>

                {/* Step List */}
                <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                  {currentCase.timeline.map((step) => {
                    const isPassed = step.stepNumber <= activeStep;
                    const isCurrent = step.stepNumber === activeStep;
                    const isFlagged = step.status === 'FLAGGED';
                    const isVerified = step.status === 'VERIFIED';

                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveStep(step.stepNumber)}
                        className={`p-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                          isCurrent
                            ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                            : isPassed
                            ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                            : 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold ${isPassed ? (isFlagged ? 'text-red-400' : isVerified ? 'text-emerald-400' : 'text-cyan-400') : 'text-slate-600'}`}>
                              ✓ {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
                            </span>
                            <span className="font-bold text-slate-200 truncate">{step.actionLabel}</span>
                          </div>
                          <span className="text-[9px] font-mono text-slate-500">[{step.toolName}]</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pl-5 font-sans leading-tight">
                          {step.summary}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Audited tool activity only. No speculative hallucinations.</span>
                <span className="text-cyan-400 font-bold">100% Deterministic</span>
              </div>
            </div>

            {/* Right Panel: Risk Score Gauge & Breakdown (3 Cols) */}
            <div className="lg:col-span-3 rounded-2xl bg-slate-950/90 border border-slate-800/90 p-4 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-slate-300">
                    Forensic Risk Gauge
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    NORMALIZED 0–100
                  </span>
                </div>

                {/* Dial Score Display */}
                <div
                  className={`p-6 rounded-2xl border text-center transition-all ${
                    isDanger
                      ? 'bg-red-950/40 border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.25)]'
                      : isSafe
                      ? 'bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.25)]'
                      : 'bg-amber-950/40 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.25)]'
                  }`}
                >
                  <div className="text-6xl font-black font-mono tracking-tight text-white">
                    {animatedRisk}
                  </div>
                  <div
                    className={`text-xs font-mono font-black tracking-widest uppercase mt-1 ${
                      isDanger ? 'text-red-400' : isSafe ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    {currentCase.riskLevel}
                  </div>
                </div>

                {/* Risk Weight Breakdown Chips */}
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-slate-500 block">WEIGHT CONTRIBUTION:</span>
                  {currentCase.riskFactors.map((factor) => (
                    <div
                      key={factor.id}
                      className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-xs font-mono flex items-center justify-between"
                    >
                      <span className="text-slate-300 truncate max-w-[150px]">{factor.label}</span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          factor.weight > 0 ? 'bg-red-950 text-red-400' : 'bg-emerald-950 text-emerald-400'
                        }`}
                      >
                        {factor.weight > 0 ? `+${factor.weight}` : factor.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="text-[10px] font-mono text-slate-500 text-center border-t border-slate-900 pt-2">
                Bayesian multi-vector evidence fusion score.
              </div>
            </div>
          </div>

          {/* Bottom Panel: Dynamic Evidence Graph */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase text-slate-200">
                  Dynamic Evidence Graph (Cross-Vector Topology)
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                Nodes animate and synchronize with the active investigation case
              </span>
            </div>

            {/* Nodes representation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-2">
              {currentCase.nodes.map((node) => {
                const isDangerNode = node.status === 'danger';
                const isCleanNode = node.status === 'clean';
                return (
                  <div
                    key={node.id}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isDangerNode
                        ? 'bg-red-950/30 border-red-500/40 text-red-200'
                        : isCleanNode
                        ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                        : 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200'
                    }`}
                  >
                    <div className="text-[9px] font-mono font-bold uppercase text-slate-400 mb-1">
                      {node.category}
                    </div>
                    <div className="text-xs font-semibold font-mono truncate">{node.value}</div>
                    <div className="text-[8px] font-mono text-slate-500 mt-1 truncate">{node.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
