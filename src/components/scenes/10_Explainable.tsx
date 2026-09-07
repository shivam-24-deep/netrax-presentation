import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { CheckCircle2, ShieldAlert, AlertTriangle, FileCheck, ArrowRight, CornerDownRight } from 'lucide-react';

export const ExplainableScene: React.FC = () => {
  const { currentCase } = useDemoCase();
  const isDanger = currentCase.overallRiskScore >= 70;
  const isSafe = currentCase.overallRiskScore < 20;

  return (
    <section id="explainable" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="09"
          tag="EXPLAINABILITY MATRIX"
          headline="Don't just flag it. Explain it."
          subheadline="Every risk score is backed by mathematically provable evidence, eliminating SOC analyst guesswork."
          badgeColor="cyan"
        />

        {/* Big Score Header & Evidence Cards */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-8">
          {/* Top Score Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950/90 border border-slate-800">
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center font-mono text-3xl font-black border ${
                  isDanger
                    ? 'bg-red-950/60 border-red-500/80 text-red-300'
                    : isSafe
                    ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-300'
                    : 'bg-amber-950/60 border-amber-500/80 text-amber-300'
                }`}
              >
                {currentCase.overallRiskScore}
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase">SYNTHESIZED CASE SEVERITY:</span>
                <h3 className="text-xl font-bold text-white uppercase">{currentCase.riskLevel}</h3>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono text-cyan-400">
                Case #{currentCase.caseCode}
              </span>
              <div className="text-xs text-slate-400 font-mono">
                {currentCase.findings.length} Evidence-Backed Proof Vectors
              </div>
            </div>
          </div>

          {/* List of Evidence-Backed Findings */}
          <div className="space-y-3">
            {currentCase.findings.map((finding, idx) => (
              <div
                key={finding.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-300 text-xs font-mono flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white font-mono">{finding.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      Provenance: {finding.provenance}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                        finding.verdict === 'HIGH RISK'
                          ? 'bg-red-950 text-red-300 border border-red-800'
                          : finding.verdict === 'VERIFIED BENIGN'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-amber-950 text-amber-300 border border-amber-800'
                      }`}
                    >
                      {finding.verdict}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 font-mono text-xs text-slate-300 flex items-start gap-2">
                  <CornerDownRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-cyan-400">Direct Evidence:</strong> {finding.evidence}
                  </span>
                </div>

                <div className="text-xs text-slate-400 pl-6 font-sans">
                  <strong className="text-slate-300">Exploitation Impact:</strong> {finding.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center text-xs font-mono text-slate-400">
            Every reason connects to verified RFC headers, WHOIS timestamps, or cryptographic hashes.
          </div>
        </div>
      </div>
    </section>
  );
};
