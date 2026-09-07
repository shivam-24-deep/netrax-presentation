import React, { useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { Shield, Sparkles, Cpu, Globe, Server, Hash, Link as LinkIcon, Users, Brain, Eye, CheckCircle2 } from 'lucide-react';

interface ToolNode {
  id: string;
  name: string;
  category: string;
  icon: any;
  angle: number; // in degrees
  radius: number; // distance in px from center
  condition: string;
  activeWhen: string;
  outputSummary: string;
}

const ORBITING_TOOLS: ToolNode[] = [
  {
    id: 'header',
    name: 'Header Forensics',
    category: 'AUTHENTICATION',
    icon: Hash,
    angle: 0,
    radius: 175,
    condition: 'IF RFC 5322 Headers Exist',
    activeWhen: 'Always invoked on ingest',
    outputSummary: 'SPF, DKIM, DMARC alignment & hop chain verification',
  },
  {
    id: 'sender',
    name: 'Sender Intelligence',
    category: 'IDENTITY',
    icon: Users,
    angle: 40,
    radius: 180,
    condition: 'IF From ≠ Reply-To OR VIP Name Spoof',
    activeWhen: 'Triggered by identity mismatch',
    outputSummary: 'Corporate hierarchy audit & return-path routing',
  },
  {
    id: 'domain',
    name: 'Domain & WHOIS',
    category: 'INFRASTRUCTURE',
    icon: Globe,
    angle: 80,
    radius: 175,
    condition: 'IF Domain Age < 30d OR Typosquat',
    activeWhen: 'Levenshtein edit distance ≤ 2',
    outputSummary: 'Passive DNS, registrar provenance & combosquatting',
  },
  {
    id: 'url',
    name: 'URL & Payload Scanner',
    category: 'WEB DEFENSE',
    icon: LinkIcon,
    angle: 120,
    radius: 185,
    condition: 'IF Embedded Hyperlinks Present',
    activeWhen: 'Skipped if pure text BEC',
    outputSummary: 'HTTP redirects, TLS inspection & lexical entropy',
  },
  {
    id: 'threat_intel',
    name: 'Threat Intel Sync',
    category: 'FEEDS',
    icon: Eye,
    angle: 160,
    radius: 175,
    condition: 'IF Domain/URL/Hash Extracted',
    activeWhen: 'PhishTank & URLhaus query',
    outputSummary: 'Community blacklist correlation & IOC matches',
  },
  {
    id: 'ip_asn',
    name: 'IP & ASN Routing',
    category: 'TELEMETRY',
    icon: Server,
    angle: 200,
    radius: 180,
    condition: 'IF Outbound Public IP Identified',
    activeWhen: 'Extracted from Received header',
    outputSummary: 'BGP routing table, AS authority & proxy risk',
  },
  {
    id: 'geo',
    name: 'Approx GeoLocation',
    category: 'GEOPOLITICAL',
    icon: Globe,
    angle: 240,
    radius: 175,
    condition: 'IF Host IP Resolved',
    activeWhen: 'MaxMind GeoLite2 lookup',
    outputSummary: 'Approximate server region with confidence bounds',
  },
  {
    id: 'ml_nlp',
    name: 'ML Urgency & NLP',
    category: 'BEHAVIORAL',
    icon: Brain,
    angle: 280,
    radius: 185,
    condition: 'IF Coercive Language Detected',
    activeWhen: 'Text & subject sentiment scan',
    outputSummary: 'Urgency velocity, wire fraud heuristics & social intent',
  },
  {
    id: 'fusion',
    name: 'Bayesian Fusion',
    category: 'SYNTHESIS',
    icon: Cpu,
    angle: 320,
    radius: 175,
    condition: 'FINAL SYNTHESIS STEP',
    activeWhen: 'All active tools report',
    outputSummary: 'Weighted multi-vector scoring & explanation generation',
  },
];

export const WhatIsNetraXScene: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolNode>(ORBITING_TOOLS[0]);
  const [activePreset, setActivePreset] = useState<'url' | 'ip' | 'auth'>('url');

  // Trigger conditional preset demonstrations
  const handlePreset = (preset: 'url' | 'ip' | 'auth') => {
    setActivePreset(preset);
    if (preset === 'url') setSelectedTool(ORBITING_TOOLS.find((t) => t.id === 'url')!);
    if (preset === 'ip') setSelectedTool(ORBITING_TOOLS.find((t) => t.id === 'ip_asn')!);
    if (preset === 'auth') setSelectedTool(ORBITING_TOOLS.find((t) => t.id === 'header')!);
  };

  return (
    <section id="what-is-netrax" className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          tag="AGENTIC ARCHITECTURE"
          headline="An AI investigator for suspicious email."
          subheadline="NetraX does not run a static pipeline. An autonomous supervisor dynamically selects tools based on the specific message structure."
          badgeColor="cyan"
        />

        {/* Dynamic Tool Routing Conditions Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="text-xs font-mono text-slate-500 uppercase">Simulate Agent Condition:</span>
          <button
            onClick={() => handlePreset('url')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              activePreset === 'url'
                ? 'bg-cyan-950 text-cyan-300 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            IF URL EXISTS → URL ANALYZER
          </button>
          <button
            onClick={() => handlePreset('ip')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              activePreset === 'ip'
                ? 'bg-blue-950 text-blue-300 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            IF PUBLIC IP EXISTS → IP / GEO
          </button>
          <button
            onClick={() => handlePreset('auth')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              activePreset === 'auth'
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            IF AUTH HEADERS EXIST → SPF / DKIM / DMARC
          </button>
        </div>

        {/* The Central Agent + Orbital Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual SVG & Interactive Nodes (Desktop & Tablet) */}
          <div className="lg:col-span-8 relative flex items-center justify-center min-h-[460px] p-6 rounded-3xl glass-panel-elevated border border-slate-800">
            {/* SVG Connecting lines from center to nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r="120" fill="none" stroke="rgba(6,182,212,0.08)" />
            </svg>

            {/* Central Agent Node */}
            <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-950 border-2 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.35)] text-center p-2">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center mb-1 text-cyan-300">
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-white">NETRAX</span>
              <span className="text-[9px] font-mono text-cyan-300 uppercase">AI SUPERVISOR</span>
              <div className="text-[8px] font-mono text-slate-400 mt-0.5">State Router</div>
            </div>

            {/* Responsive Grid of Orbiting Tools */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 absolute inset-4 z-10 pointer-events-auto items-center justify-items-center">
              {ORBITING_TOOLS.map((tool) => {
                const isSelected = selectedTool.id === tool.id;
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool)}
                    className={`p-2 sm:p-2.5 rounded-xl transition-all duration-200 flex flex-col items-center gap-1 text-center cursor-pointer border max-w-[125px] w-full ${
                      isSelected
                        ? 'bg-cyan-950/90 border-cyan-400 text-cyan-200 scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] z-30'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="text-[10px] font-mono font-semibold leading-tight line-clamp-1">{tool.name}</span>
                    <span className="text-[8px] font-mono text-slate-500 uppercase">{tool.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Tool Telemetry Card */}
          <div className="lg:col-span-4 rounded-3xl glass-panel-elevated border border-slate-800 p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <selectedTool.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">{selectedTool.name}</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                ACTIVE TOOL
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-slate-500 block mb-1">Dynamic Invocation Condition:</span>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-semibold">
                  {selectedTool.condition}
                </div>
              </div>

              <div>
                <span className="text-slate-500 block mb-1">Supervisor Decision Logic:</span>
                <p className="text-slate-300 font-sans leading-relaxed text-xs">
                  {selectedTool.activeWhen}
                </p>
              </div>

              <div>
                <span className="text-slate-500 block mb-1">Evidence Emitted to Fusion Engine:</span>
                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-slate-300 font-sans text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{selectedTool.outputSummary}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[10px] font-mono text-slate-500 text-center">
                Audited invocation recorded in immutable ledger.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
