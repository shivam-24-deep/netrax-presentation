import React from 'react';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Shield, ArrowRight, ChevronDown, AlertTriangle, CheckCircle2, Globe, Server, Hash, Activity } from 'lucide-react';

export const HeroScene: React.FC = () => {
  const { currentCase, setCaseId } = useDemoCase();
  const isDanger = currentCase.overallRiskScore >= 70;
  const isSafe = currentCase.overallRiskScore < 20;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 px-4 md:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto text-center relative z-10">
        {/* Project Meta Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold tracking-wider">NETRAX</span>
          <span className="text-slate-500">•</span>
          <span>SIH 2026</span>
          <span className="text-slate-500">•</span>
          <span className="text-cyan-200 font-bold">SIH26106</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">AICTE Cyber Security Cell</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] mb-6">
          FROM SUSPICIOUS EMAIL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            TO FORENSIC INTELLIGENCE.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          "Agentic AI for Email Threat Detection & Forensic Intelligence."
        </p>

        {/* Quick interactive visual representation */}
        <div className="relative max-w-4xl mx-auto my-8">
          <div className="p-6 md:p-8 rounded-3xl glass-panel-elevated border border-slate-800 shadow-2xl relative overflow-hidden text-left">
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  forensics://rfc5322-stream/{currentCase.id}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                  {currentCase.category}
                </span>
              </div>
            </div>

            {/* Email Inspector Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Suspicious Email Mockup */}
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl p-5 border border-slate-800/90 space-y-4">
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-500">From:</span>
                    <span className="text-slate-200 font-bold truncate max-w-[280px]">
                      {currentCase.email.fromDisplay} &lt;{currentCase.email.fromAddress}&gt;
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between text-[11px]">
                    <span className="text-slate-500">Reply-To:</span>
                    <span className={`truncate max-w-[280px] ${currentCase.email.replyTo !== currentCase.email.fromAddress ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>
                      {currentCase.email.replyTo}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-500">Subject:</span>
                    <span className="text-cyan-300 font-semibold truncate max-w-[280px]">
                      {currentCase.email.subject}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {currentCase.email.bodySnippet}
                </div>

                {/* Anomalies badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {currentCase.email.anomalies.map((ano, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-red-950/60 text-red-300 border border-red-800/50"
                    >
                      {ano}
                    </span>
                  ))}
                  {currentCase.email.anomalies.length === 0 && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                      RFC 7489 CRYPTOGRAPHICALLY VALID
                    </span>
                  )}
                </div>
              </div>

              {/* Center connector to Agent */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-900/40 rounded-2xl border border-slate-800/60 relative">
                {/* Visual arrow indicator */}
                <div className="text-center space-y-3 w-full">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-[11px] font-mono font-semibold">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    NETRAX AGENT FUSION
                  </div>

                  {/* Dynamic Tool Matrix Preview */}
                  <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono text-slate-400">
                    <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-center">
                      <Hash className="w-3 h-3 mx-auto mb-1 text-cyan-400" />
                      HEADER
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-center">
                      <Globe className="w-3 h-3 mx-auto mb-1 text-blue-400" />
                      DOMAIN
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-center">
                      <Server className="w-3 h-3 mx-auto mb-1 text-teal-400" />
                      IP/GEO
                    </div>
                  </div>

                  {/* Calculated Result Box */}
                  <div className="pt-2">
                    <div
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isDanger
                          ? 'bg-red-950/40 border-red-500/50 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                          : isSafe
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                          : 'bg-amber-950/40 border-amber-500/50 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                      }`}
                    >
                      <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
                        {currentCase.overallRiskScore}
                        <span className="text-xs font-normal opacity-70">/100</span>
                      </div>
                      <div className="text-xs font-mono font-bold tracking-widest uppercase mt-0.5">
                        {currentCase.riskLevel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scrollToSection('control-room')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-3 transition-all cursor-pointer group"
          >
            <span>Launch Investigation Cockpit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('the-threat')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Why Traditional Detection Fails</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
