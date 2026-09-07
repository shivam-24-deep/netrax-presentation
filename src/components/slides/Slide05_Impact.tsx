import React from 'react';
import { Users, Shield, Building, Building2, Landmark, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const Slide05_Impact: React.FC = () => {
  const stakeholders = [
    { title: 'Individual Users', desc: 'Protected from credential harvesting & identity spoofing', icon: Users },
    { title: 'SOC Analysts', desc: 'Triage fatigue slashed 90%; instant evidence graph', icon: Shield },
    { title: 'Academic Institutions', desc: 'AICTE & UGC cyber hygiene compliance enforced', icon: Building },
    { title: 'Enterprise IT', desc: 'Prevents multi-million BEC wire transfer fraud', icon: Building2 },
    { title: 'Government Defense', desc: 'Protects critical national sovereign digital infrastructure', icon: Landmark },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-between py-2">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs">
          <span>05 // TRANSFORMATIVE DEFENSE IMPACT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
          Ecosystem-Wide Acceleration
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Replacing fragmented manual investigative workflows with unified agentic intelligence.
        </p>
      </div>

      {/* Stakeholders Horizontal Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {stakeholders.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
              <Icon className="w-5 h-5 mx-auto text-cyan-400" />
              <div className="text-xs font-bold font-mono text-white leading-tight line-clamp-1">{s.title}</div>
              <p className="text-[10px] text-slate-400 font-sans leading-tight line-clamp-2">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Before vs After Visual Transformation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
        {/* Before */}
        <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800/80 space-y-2.5">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-slate-400 font-bold uppercase">BEFORE NETRAX:</span>
            <span className="text-red-400 font-bold px-2 py-0.5 rounded bg-red-950/50 border border-red-800">
              ~25 MIN / CASE
            </span>
          </div>
          <div className="space-y-1.5 font-mono text-xs text-slate-400">
            <div className="p-2 rounded bg-slate-900 border border-slate-850">1. Suspicious Email Ingested</div>
            <div className="p-2 rounded bg-slate-900 border border-slate-850">2. Manual WHOIS & Header Lookup</div>
            <div className="p-2 rounded bg-slate-900 border border-slate-850">3. Fragmented Threat Feed Check</div>
            <div className="p-2 rounded bg-slate-900 border border-slate-850">4. Delayed Containment Decision</div>
          </div>
        </div>

        {/* After */}
        <div className="p-5 rounded-3xl bg-cyan-950/30 border border-cyan-500/50 space-y-2.5 shadow-2xl glow-cyan">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-cyan-300 font-bold uppercase">AFTER NETRAX:</span>
            <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-800">
              ~4 SEC / CASE
            </span>
          </div>
          <div className="space-y-1.5 font-mono text-xs text-slate-200">
            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-800/50">1. Autonomous Ingestion</div>
            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-800/50">2. Agentic Dynamic Tool Selection</div>
            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-800/50">3. Bayesian Multi-Stream Fusion</div>
            <div className="p-2 rounded bg-emerald-950/50 border border-emerald-600/50 text-emerald-200">
              4. 1-Click Automated SOC Remediation
            </div>
          </div>
        </div>
      </div>

      {/* Large Bottom Typography */}
      <div className="text-center pt-1">
        <div className="text-2xl sm:text-4xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
          DETECT · INVESTIGATE · EXPLAIN
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-900 pt-2 px-2">
        <span>From manual fatigue to automated high-confidence decisions</span>
        <span className="text-cyan-400 font-semibold">Press [Space] or [→] for Slide 06</span>
      </div>
    </div>
  );
};
