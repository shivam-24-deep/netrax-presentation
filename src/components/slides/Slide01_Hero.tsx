import React from 'react';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Shield, Sparkles, AlertTriangle, ArrowRight, Hash, Globe, Server, CheckCircle2 } from 'lucide-react';

export const Slide01_Hero: React.FC = () => {
  const { currentCase } = useDemoCase();
  const isDanger = currentCase.overallRiskScore >= 70;
  const isSafe = currentCase.overallRiskScore < 20;

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-between py-2">
      {/* Top Meta & Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold tracking-wider">NETRAX</span>
          <span className="text-slate-500">•</span>
          <span>SIH 2026</span>
          <span className="text-slate-500">•</span>
          <span className="text-cyan-200 font-bold">SIH26106</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">AICTE Cyber Security Cell</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
          FROM SUSPICIOUS EMAIL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            TO FORENSIC INTELLIGENCE.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
          "Agentic AI for Email Threat Detection & Forensic Intelligence."
        </p>
      </div>

      {/* Center Cinematic Visual Canvas */}
      <div className="p-4 sm:p-5 rounded-3xl glass-panel-elevated border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Mock window header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 truncate max-w-[200px] sm:max-w-none">
              forensic-stream://{currentCase.id}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[10px]">
            {currentCase.category}
          </span>
        </div>

        {/* 3-Way Forensic Bridge: Email -> Agent -> Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Email Preview */}
          <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl p-4 border border-slate-800 space-y-2.5 text-xs font-mono">
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-slate-500 text-[10px]">FROM:</span>
                <span className="text-slate-200 font-bold truncate max-w-[240px]">
                  {currentCase.email.fromDisplay} &lt;{currentCase.email.fromAddress}&gt;
                </span>
              </div>
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="text-slate-500 text-[10px]">REPLY-TO:</span>
                <span className={currentCase.email.replyTo !== currentCase.email.fromAddress ? 'text-amber-400 font-bold truncate max-w-[240px]' : 'text-slate-400 truncate max-w-[240px]'}>
                  {currentCase.email.replyTo}
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-slate-500 text-[10px]">SUBJECT:</span>
                <span className="text-cyan-300 font-semibold truncate max-w-[240px]">
                  {currentCase.email.subject}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-900 text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
              {currentCase.email.bodySnippet}
            </div>

            {/* Anomaly Badges */}
            <div className="flex flex-wrap gap-1 pt-1">
              {currentCase.email.anomalies.map((ano, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-red-950/80 text-red-300 border border-red-800/60"
                >
                  {ano}
                </span>
              ))}
              {currentCase.email.anomalies.length === 0 && (
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                  CRYPTOGRAPHICALLY VALIDATED
                </span>
              )}
            </div>
          </div>

          {/* Central AI Agent Node */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center p-3 bg-slate-900/50 rounded-2xl border border-slate-800/80 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white tracking-wide">NETRAX AGENT</div>
              <div className="text-[10px] font-mono text-cyan-300">State Supervisor</div>
            </div>
            <div className="grid grid-cols-3 gap-1 w-full text-[9px] font-mono text-slate-400 pt-1">
              <span className="p-1 rounded bg-slate-950 border border-slate-800">HEADER</span>
              <span className="p-1 rounded bg-slate-950 border border-slate-800">BGP/IP</span>
              <span className="p-1 rounded bg-slate-950 border border-slate-800">INTEL</span>
            </div>
          </div>

          {/* Computed Risk Gauge */}
          <div className="lg:col-span-3 text-center">
            <div
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                isDanger
                  ? 'bg-red-950/50 border-red-500/80 text-red-300 shadow-[0_0_30px_rgba(239,68,68,0.25)]'
                  : isSafe
                  ? 'bg-emerald-950/50 border-emerald-500/80 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.25)]'
                  : 'bg-amber-950/50 border-amber-500/80 text-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.25)]'
              }`}
            >
              <div className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-0.5">
                FORENSIC RISK
              </div>
              <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                {currentCase.overallRiskScore}
                <span className="text-xs font-normal opacity-60">/100</span>
              </div>
              <div className="text-xs font-mono font-bold tracking-widest uppercase mt-1">
                {currentCase.riskLevel}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-900 pt-2 px-2">
        <span>Autonomous multi-layer correlation in ~446ms</span>
        <span className="text-cyan-400 font-semibold">Press [Space] or [→] for Next Slide</span>
      </div>
    </div>
  );
};
