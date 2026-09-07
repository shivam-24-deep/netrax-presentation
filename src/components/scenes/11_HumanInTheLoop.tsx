import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Shield, Check, AlertTriangle, ArrowUpRight, ArrowDown, UserCheck, CheckCircle2, XCircle, AlertOctagon } from 'lucide-react';

export const HumanInTheLoopScene: React.FC = () => {
  const { currentCase, analystDecision, setAnalystDecision } = useDemoCase();

  return (
    <section id="human-in-the-loop" className="py-24 px-4 md:px-8 bg-slate-950/90 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="10"
          tag="HUMAN-CENTRIC GOVERNANCE"
          headline="AI investigates. Humans decide when it matters most."
          subheadline="NetraX automates 99% of evidence triage, leaving the ultimate containment authority in the hands of security operations."
          badgeColor="cyan"
        />

        {/* SOC Action Console */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-8">
          {/* Visual Flow Indicator */}
          <div className="flex items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-bold">NETRAX REASONING</span>
            <span>→</span>
            <span className="px-3 py-1 rounded bg-red-950/80 border border-red-800/80 text-red-300 font-bold">
              {currentCase.overallRiskScore} {currentCase.riskLevel}
            </span>
            <span>→</span>
            <span className="px-3 py-1 rounded bg-blue-950/80 border border-blue-800/80 text-blue-300 font-bold">ANALYST REVIEW</span>
          </div>

          {/* Interactive Decision Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Action 1: Confirm Threat */}
            <button
              onClick={() => setAnalystDecision('CONFIRMED_THREAT')}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                analystDecision === 'CONFIRMED_THREAT'
                  ? 'bg-red-950/80 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-red-500/50 hover:bg-slate-900'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center mb-3">
                <AlertOctagon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-mono mb-1">CONFIRM THREAT</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Approve tenant-wide mailbox purge & firewall perimeter IP block.
              </p>
            </button>

            {/* Action 2: False Positive */}
            <button
              onClick={() => setAnalystDecision('FALSE_POSITIVE')}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                analystDecision === 'FALSE_POSITIVE'
                  ? 'bg-emerald-950/80 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-mono mb-1">FALSE POSITIVE</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whitelist sender hash and release email to user with trust note.
              </p>
            </button>

            {/* Action 3: Escalate */}
            <button
              onClick={() => setAnalystDecision('ESCALATE')}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                analystDecision === 'ESCALATE'
                  ? 'bg-amber-950/80 border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.3)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/50 hover:bg-slate-900'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-mono mb-1">ESCALATE TIER-2</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dispatch STIX 2.1 IOC dossier to organization CERT / Incident Team.
              </p>
            </button>
          </div>

          {/* Adjudication Feedback Display */}
          {analystDecision && (
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Analyst Command Logged: [{analystDecision}] applied with full audit checksum.</span>
              </div>
              <span className="text-[10px] text-slate-400">Time: Just now</span>
            </div>
          )}

          {/* Automated Remediation Payload */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="text-slate-500 text-[10px] uppercase tracking-wider">
              SUGGESTED INCIDENT ACTION PLAYBOOK:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-cyan-400 text-[10px] block font-bold">EDR / MAILBOX ACTION:</span>
                {currentCase.remediation.socAction}
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-cyan-400 text-[10px] block font-bold">FIREWALL PERIMETER RULE:</span>
                {currentCase.remediation.firewallRule}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
