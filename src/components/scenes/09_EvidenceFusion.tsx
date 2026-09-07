import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Cpu, ArrowDown, Sparkles, Hash, Globe, Server, Link as LinkIcon, Users, Brain, Eye, ShieldCheck, AlertTriangle } from 'lucide-react';

export const EvidenceFusionScene: React.FC = () => {
  const { currentCase } = useDemoCase();
  const isDanger = currentCase.overallRiskScore >= 70;
  const isSafe = currentCase.overallRiskScore < 20;

  const streams = [
    { name: 'Email Content', score: isDanger ? 'Urgent Pressure' : 'Standard Text', icon: Brain, status: isDanger ? 'flag' : 'clean' },
    { name: 'Header Signals', score: isDanger ? 'SPF/DKIM Fail' : 'SPF/DKIM Pass', icon: Hash, status: isDanger ? 'flag' : 'clean' },
    { name: 'Sender Identity', score: isDanger ? 'Reply-To Mismatch' : 'Aligned', icon: Users, status: isDanger ? 'flag' : 'clean' },
    { name: 'Domain Age & WHOIS', score: isDanger ? 'Age < 4d / Typo' : '>15yr Established', icon: Globe, status: isDanger ? 'flag' : 'clean' },
    { name: 'URL Entropy', score: isDanger ? '302 Redirect' : 'Official Portal', icon: LinkIcon, status: isDanger ? 'flag' : 'clean' },
    { name: 'IP & BGP Routing', score: isDanger ? 'Bulletproof ASN' : 'Gov NIC Backbone', icon: Server, status: isDanger ? 'flag' : 'clean' },
    { name: 'Threat Feeds', score: isDanger ? 'IOC Match #849' : '0 Community Flags', icon: Eye, status: isDanger ? 'flag' : 'clean' },
    { name: 'ML Urgency Score', score: isDanger ? '0.94 High Risk' : '0.04 Baseline', icon: Sparkles, status: isDanger ? 'flag' : 'clean' },
  ];

  return (
    <section id="evidence-fusion" className="py-24 px-4 md:px-8 bg-slate-950/80 border-t border-slate-900 relative overflow-hidden">
      {/* Visual background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="08"
          tag="EVIDENCE FUSION ENGINE"
          headline="Heterogeneous streams converge into one verified verdict."
          subheadline="NetraX fuses disparate network, cryptographic, and behavioral telemetry into a single explainable risk score."
          badgeColor="blue"
        />

        {/* Fusion Architecture Chamber */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-10 relative">
          {/* Top: 8 Heterogeneous Inflow Streams */}
          <div>
            <div className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
              INCOMING DISPARATE EVIDENCE TELEMETRY:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {streams.map((st, i) => {
                const Icon = st.icon;
                const isFlagged = st.status === 'flag';
                return (
                  <div
                    key={i}
                    className={`p-3.5 rounded-2xl border transition-all text-center ${
                      isFlagged
                        ? 'bg-red-950/30 border-red-500/40 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                        : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mx-auto mb-1.5 ${isFlagged ? 'text-red-400' : 'text-emerald-400'}`} />
                    <div className="text-xs font-bold font-mono text-white truncate">{st.name}</div>
                    <div className="text-[10px] font-mono opacity-80 mt-0.5">{st.score}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Convergence Funnel */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[2px] h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 border-2 border-cyan-400 flex flex-col items-center justify-center text-center shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              <Cpu className="w-7 h-7 text-cyan-300 animate-pulse" />
              <span className="text-[9px] font-mono font-bold text-white uppercase mt-0.5">FUSION</span>
            </div>
            <div className="w-[2px] h-8 bg-gradient-to-b from-transparent to-cyan-400" />
          </div>

          {/* Bottom: Synthesized Compound Output */}
          <div className="max-w-md mx-auto">
            <div
              className={`p-6 rounded-3xl border text-center transition-all ${
                isDanger
                  ? 'bg-red-950/50 border-red-500/80 shadow-[0_0_40px_rgba(239,68,68,0.3)]'
                  : isSafe
                  ? 'bg-emerald-950/50 border-emerald-500/80 shadow-[0_0_40px_rgba(16,185,129,0.3)]'
                  : 'bg-amber-950/50 border-amber-500/80 shadow-[0_0_40px_rgba(245,158,11,0.3)]'
              }`}
            >
              <div className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">
                SYNTHESIZED FORENSIC RISK VERDICT
              </div>
              <div className="text-6xl font-black font-mono tracking-tight text-white mb-1">
                {currentCase.overallRiskScore}
                <span className="text-sm font-normal opacity-70">/100</span>
              </div>
              <div
                className={`text-sm font-mono font-bold tracking-widest uppercase ${
                  isDanger ? 'text-red-400' : isSafe ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {currentCase.riskLevel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
