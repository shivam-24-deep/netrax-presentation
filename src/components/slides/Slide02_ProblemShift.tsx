import React from 'react';
import { Mail, HelpCircle, Shield, ArrowDown, ArrowRight, CheckCircle2, Sparkles, Binary, AlertOctagon, Terminal } from 'lucide-react';

export const Slide02_ProblemShift: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-between py-2">
      {/* Slide Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-300 font-mono text-xs">
          <span>02 // THE PARADIGM SHIFT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
          "Detection tells you WHAT. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            NetraX investigates WHY."
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Modern phishing and linkless BEC bypass keyword filters. Security teams need auditable evidence, not unexplained scores.
        </p>
      </div>

      {/* Side-by-Side Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-auto">
        {/* Left: Traditional Detection (Dead End) */}
        <div className="lg:col-span-5 rounded-3xl bg-slate-950/90 border border-slate-800/80 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                TRADITIONAL DETECTION
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-950/60 text-red-400 border border-red-800/40 font-bold">
                BLACK BOX
              </span>
            </div>

            <div className="space-y-2 max-w-xs mx-auto text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-center flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Raw Inbound Email</span>
              </div>

              <div className="flex justify-center text-slate-600">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-center flex items-center justify-center gap-2">
                <Binary className="w-4 h-4 text-slate-400" />
                <span>Static ML Classifier</span>
              </div>

              <div className="flex justify-center text-slate-600">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>

              {/* Dead end box */}
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-center shadow-lg">
                <div className="text-red-400 font-bold text-sm">"SUSPICIOUS" (0.84)</div>
                <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-center gap-1">
                  <HelpCircle className="w-3 h-3 text-red-400" />
                  <span>No provenance. No explanation. 25-min manual triage.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] font-mono text-slate-500 text-center">
            Analyst must manually parse headers, WHOIS, and IOC lists.
          </div>
        </div>

        {/* Right: NetraX Agentic Investigation */}
        <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-950/95 border border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative glow-cyan">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-cyan-800/40 mb-4">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                NETRAX AGENTIC REVOLUTION
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-bold">
                AUDITABLE PROOF
              </span>
            </div>

            {/* Step Chain Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                <div className="text-cyan-400 font-bold text-[10px]">01. INGEST</div>
                <div className="text-white font-semibold mt-0.5 text-xs">MIME & RFC</div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                <div className="text-cyan-400 font-bold text-[10px]">02. AGENT</div>
                <div className="text-white font-semibold mt-0.5 text-xs">State Router</div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                <div className="text-cyan-400 font-bold text-[10px]">03. TOOLS</div>
                <div className="text-white font-semibold mt-0.5 text-xs">DNS/BGP/Auth</div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                <div className="text-cyan-400 font-bold text-[10px]">04. FUSION</div>
                <div className="text-white font-semibold mt-0.5 text-xs">Bayesian Weight</div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                <div className="text-cyan-400 font-bold text-[10px]">05. EXPLAIN</div>
                <div className="text-white font-semibold mt-0.5 text-xs">Evidence Proof</div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center">
                <div className="text-emerald-400 font-bold text-[10px]">06. REMEDIATE</div>
                <div className="text-white font-semibold mt-0.5 text-xs">1-Click Action</div>
              </div>
            </div>

            {/* Verdict summary banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-600/40 text-xs text-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span className="font-mono font-bold">Outcome: Explainable Risk + STIX 2.1 IOCs</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold">~4 Seconds Total</span>
            </div>
          </div>

          <div className="mt-3 pt-2 text-[10px] font-mono text-slate-400 text-center">
            Transforms SOC analysts from manual gatherers into high-confidence adjudicators.
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-900 pt-2 px-2">
        <span>From black-box opacity to mathematical explainability</span>
        <span className="text-cyan-400 font-semibold">Press [Space] or [→] for Slide 03</span>
      </div>
    </div>
  );
};
