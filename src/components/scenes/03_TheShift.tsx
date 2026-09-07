import React, { useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { Mail, HelpCircle, Shield, ArrowDown, CheckCircle2, ChevronRight, Binary, Eye, Sparkles } from 'lucide-react';

export const TheShiftScene: React.FC = () => {
  const [activeStepRight, setActiveStepRight] = useState<number>(5);

  const netraxSteps = [
    { name: 'Raw RFC Email', desc: 'MIME & Header Ingestion', icon: Mail },
    { name: 'AI Reasoning Agent', desc: 'Dynamic state supervisor', icon: Sparkles },
    { name: 'Multi-Tool Investigate', desc: 'Header, DNS, BGP, Threat APIs', icon: Eye },
    { name: 'Cross-Vector Correlate', desc: 'Bayesian evidence fusion', icon: Binary },
    { name: 'Explainable Finding', desc: 'Provable evidence-backed rationale', icon: CheckCircle2 },
    { name: 'Automated SOC Action', desc: 'Quarantine, block & isolate', icon: Shield },
  ];

  return (
    <section id="the-shift" className="py-24 px-4 md:px-8 bg-slate-950/80 border-t border-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02"
          tag="PARADIGM SHIFT"
          headline="Detection tells you WHAT. NetraX investigates WHY."
          subheadline="Traditional classifiers output a brittle binary label. NetraX orchestrates an end-to-end forensic investigation."
          badgeColor="blue"
        />

        {/* Dramatic Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left: Traditional Detection (The Dead End) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-950/90 border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                  TRADITIONAL APPROACH
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-950/60 text-red-400 border border-red-800/40">
                  STATIC / BLACK BOX
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Binary Classifier</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-8">
                Evaluates keyword frequency and basic spam hashes. Outputs an unexplainable probability score without investigative context.
              </p>

              {/* Vertical Step Chain */}
              <div className="space-y-4 max-w-xs mx-auto">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center text-xs font-mono text-slate-300 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Suspicious Email</span>
                </div>

                <div className="flex justify-center text-slate-600">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center text-xs font-mono text-slate-300 flex items-center justify-center gap-2">
                  <Binary className="w-4 h-4 text-slate-400" />
                  <span>Black-Box Model</span>
                </div>

                <div className="flex justify-center text-slate-600">
                  <ArrowDown className="w-4 h-4" />
                </div>

                {/* Abrupt End */}
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-center shadow-lg">
                  <div className="text-red-400 font-mono text-sm font-bold tracking-wider">
                    "SUSPICIOUS" (0.78)
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-center gap-1">
                    <HelpCircle className="w-3 h-3 text-red-400" />
                    <span>No explanation. No evidence. No triage plan.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 text-center">
              Analyst must manually spend 20+ minutes chasing headers & threat databases.
            </div>
          </div>

          {/* Right: NetraX Agentic Forensics (Continuous Intelligence) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-cyan-500/40 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative glow-cyan">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cyan-800/40 mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  NETRAX AGENTIC REVOLUTION
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                  AUTONOMOUS FORENSIC COCKPIT
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Agentic Evidence Fusion</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                An intelligent coordinator dynamically selects specialized tools, cross-examines infrastructure telemetry, and presents mathematical proof.
              </p>

              {/* Interactive Dynamic Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {netraxSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = idx <= activeStepRight;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStepRight(idx)}
                      className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-cyan-950/40 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                          : 'bg-slate-900/30 border-slate-800 text-slate-500 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            isActive
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                              : 'bg-slate-800 text-slate-500'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-white">
                          0{idx + 1}. {step.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight pl-9">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Outcome Guarantee */}
            <div className="mt-6 p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Auditable Verdict: Full Provenance & STIX 2.1 Remediation</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                Triage time: ~4 seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
