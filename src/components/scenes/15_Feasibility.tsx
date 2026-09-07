import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { FEASIBILITY_PILLARS, CHALLENGE_MITIGATIONS } from '../../data/architectureData';
import { ShieldCheck, CheckCircle2, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export const FeasibilityScene: React.FC = () => {
  return (
    <section id="feasibility" className="py-24 px-4 md:px-8 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="14"
          tag="FEASIBILITY & PRODUCTION DEFENSE"
          headline="Why NetraX is buildable, viable & defensible."
          subheadline="Constructed on open protocols and modular microservices with graceful degradation for edge-case failures."
          badgeColor="cyan"
        />

        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-10">
          {/* 4 Pillars of Feasibility */}
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              TECHNICAL FEASIBILITY FOUNDATIONS:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEASIBILITY_PILLARS.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-white uppercase">{p.pillar}</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 mb-3">
                      {p.badge}
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                      {p.points.map((pt, i) => (
                        <li key={i} className="leading-relaxed flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge vs Mitigation Matrix */}
          <div className="pt-6 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              REAL-WORLD CHALLENGES & PROACTIVE MITIGATIONS:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CHALLENGE_MITIGATIONS.map((cm, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                    <span>Edge Case: {cm.challenge}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-emerald-400">Mitigation:</strong> {cm.mitigation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
