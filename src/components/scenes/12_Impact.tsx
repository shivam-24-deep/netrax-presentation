import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { Shield, Users, Building, Building2, Landmark, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ImpactScene: React.FC = () => {
  const stakeholders = [
    { title: 'Individual Users', desc: 'Protected from credential harvest & silent spoofing', icon: Users },
    { title: 'Security Operations (SOC)', desc: 'Triage fatigue slashed by 90%; instant evidence graph', icon: Shield },
    { title: 'Academic Institutions', desc: 'Compliant with AICTE & UGC cyber hygiene directives', icon: Building },
    { title: 'Enterprise IT', desc: 'Automated containment prevents multi-million rupee BEC wire fraud', icon: Building2 },
    { title: 'National Government', desc: 'Critical sovereign infrastructure defended from state-sponsored APTs', icon: Landmark },
  ];

  return (
    <section id="impact" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="11"
          tag="TRANSFORMATIVE IMPACT"
          headline="An interconnected defense ecosystem."
          subheadline="From individual citizens to national sovereign institutions, NetraX turns email defense into collaborative intelligence."
          badgeColor="cyan"
        />

        {/* Central Ecosystem Diagram */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-12">
          {/* Ecosystem Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {stakeholders.map((sh, idx) => {
              const Icon = sh.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all text-center flex flex-col items-center justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 font-mono">{sh.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{sh.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Before vs After Metric Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
            {/* Before */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 font-bold uppercase">BEFORE NETRAX:</span>
                <span className="text-red-400 font-bold">~25 MINUTES / CASE</span>
              </div>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                Suspicious Email → Manual WHOIS Search → Checking Separate Blacklists → Copying Headers into Debuggers → Delayed Quarantine
              </p>
            </div>

            {/* After */}
            <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/50 space-y-3 shadow-lg">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-300 font-bold uppercase">AFTER NETRAX:</span>
                <span className="text-emerald-400 font-bold">~4 SECONDS / CASE</span>
              </div>
              <p className="text-xs font-mono text-cyan-100 leading-relaxed">
                Suspicious Email → Agentic Multi-Tool Routing → Cross-Layer Evidence Fusion → Mathematical Risk Score → 1-Click SOC Action
              </p>
            </div>
          </div>

          {/* Large Concluding Words */}
          <div className="pt-6 border-t border-slate-800/80 text-center">
            <div className="text-3xl sm:text-5xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              DETECT · INVESTIGATE · EXPLAIN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
