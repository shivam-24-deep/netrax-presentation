import React, { useState } from 'react';
import { Mail, Shield, Cpu, Globe, Server, Hash, Eye, Binary, FileCheck, ArrowRight, Lock } from 'lucide-react';

interface ArchStep {
  id: string;
  name: string;
  category: string;
  sub: string;
  icon: any;
  tech: string;
  color: string;
}

const ARCH_FLOW: ArchStep[] = [
  { id: '1', name: 'EMAIL INGESTION', category: 'RFC 5322', sub: 'MIME & Header Parser', icon: Mail, tech: 'FastAPI / Python MIME', color: 'cyan' },
  { id: '2', name: 'AI AGENT ROUTER', category: 'STATE GRAPH', sub: 'Dynamic Tool Supervisor', icon: Shield, tech: 'Gemini / LangGraph', color: 'blue' },
  { id: '3', name: 'FORENSIC TOOLS', category: 'ACQUISITION', sub: 'SPF/DKIM, DNS, WHOIS', icon: Hash, tech: 'dnspython / WHOIS', color: 'teal' },
  { id: '4', name: 'THREAT INTEL', category: 'FEEDS', sub: 'URLhaus & PhishTank', icon: Eye, tech: 'Live IOC Broker', color: 'amber' },
  { id: '5', name: 'IP / ASN / GEO', category: 'INFRASTRUCTURE', sub: 'BGP Routing & MaxMind', icon: Server, tech: 'GeoLite2 / BGP ASN', color: 'sky' },
  { id: '6', name: 'EVIDENCE FUSION', category: 'SYNTHESIS', sub: 'Bayesian Risk Engine', icon: Cpu, tech: 'Scikit-learn / Bayes', color: 'purple' },
  { id: '7', name: 'STIX REPORT', category: 'OUTPUT', sub: 'Actionable SOC Dossier', icon: FileCheck, tech: 'React / STIX 2.1', color: 'emerald' },
];

export const Slide03_Architecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('2');
  const activeDetail = ARCH_FLOW.find((s) => s.id === activeStep) || ARCH_FLOW[1];

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-between py-2">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-300 font-mono text-xs">
          <span>03 // FULL-STACK TECHNICAL ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
          Connected Agentic Pipeline
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          From RFC 5322 byte-level sanitization to Bayesian evidence fusion and STIX 2.1 automated incident response.
        </p>
      </div>

      {/* Connected Architecture Flow Chamber */}
      <div className="p-5 sm:p-6 rounded-3xl glass-panel-elevated border border-slate-800 shadow-2xl space-y-5 my-auto">
        {/* Horizontal Pipeline Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 items-center">
          {ARCH_FLOW.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105 z-10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center justify-between w-full text-[9px] font-mono mb-1">
                  <span className="text-slate-500 font-bold">0{idx + 1}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-cyan-400 animate-ping' : 'bg-slate-600'}`} />
                </div>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 ${
                    isSelected ? 'bg-cyan-500/30 text-cyan-300' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-bold font-mono text-white leading-tight line-clamp-1">
                  {step.name}
                </div>
                <div className="text-[8px] font-mono text-slate-400 truncate w-full mt-0.5">
                  {step.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Telemetry Inspector */}
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
              <activeDetail.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">{activeDetail.name}</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-cyan-400 text-[10px] border border-slate-700">
                  {activeDetail.category}
                </span>
              </div>
              <p className="text-slate-300 font-sans text-xs mt-0.5">
                {activeDetail.sub} — Driven by {activeDetail.tech}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-800">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Zero-Trust SSRF Sandboxing & Egress Guards</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-900 pt-2 px-2">
        <span>Modular microservices with sub-second execution footprint</span>
        <span className="text-cyan-400 font-semibold">Press [Space] or [→] for Slide 04</span>
      </div>
    </div>
  );
};
