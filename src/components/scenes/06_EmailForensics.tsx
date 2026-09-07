import React, { useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Server, ArrowRight, ShieldCheck, ShieldAlert, AlertTriangle, Hash, CornerDownRight, CheckCircle2 } from 'lucide-react';

export const EmailForensicsScene: React.FC = () => {
  const { currentCase } = useDemoCase();
  const [activeHopIndex, setActiveHopIndex] = useState<number>(0);

  const hops = currentCase.headerHops;
  const activeHop = hops[activeHopIndex] || hops[0];

  return (
    <section id="forensic-intelligence" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05"
          tag="HEADER FORENSICS"
          headline="Every header can become evidence."
          subheadline="MTA hop traces, cryptographic signatures, and transport anomalies reveal origin infrastructure before message content is opened."
          badgeColor="cyan"
        />

        {/* Interactive Header Hop Chain */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-8 space-y-8">
          {/* Top Breadcrumb Chain */}
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
              RECEIVED ROUTE TRACE (RFC 5322 INGRESS CHAIN):
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {hops.map((hop, idx) => {
                const isSelected = idx === activeHopIndex;
                const isDanger = hop.status === 'danger';
                const isAnomaly = hop.status === 'anomaly';
                return (
                  <button
                    key={hop.hop}
                    onClick={() => setActiveHopIndex(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? isDanger
                          ? 'bg-red-950/50 border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                          : isAnomaly
                          ? 'bg-amber-950/50 border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                          : 'bg-emerald-950/50 border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="text-slate-400 font-bold">HOP 0{hop.hop}</span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                          isDanger
                            ? 'bg-red-950 text-red-300'
                            : isAnomaly
                            ? 'bg-amber-950 text-amber-300'
                            : 'bg-emerald-950 text-emerald-300'
                        }`}
                      >
                        {hop.status}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white truncate mb-1">{hop.title}</div>
                    <div className="text-xs font-mono text-cyan-300 truncate">{hop.server}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Hop Detailed Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/80 rounded-2xl border border-slate-800/80 p-6">
            {/* Left: Hop Metadata */}
            <div className="lg:col-span-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-400" />
                  {activeHop.title}
                </span>
                <span className="text-slate-400">Hop #{activeHop.hop}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">RESOLVED IP:</span>
                  <span className="text-slate-200 font-bold">{activeHop.ip}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">ASN AUTHORITY:</span>
                  <span className="text-slate-200 font-bold truncate block">{activeHop.asn}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">APPROXIMATE INFRASTRUCTURE LOCATION:</span>
                <span className="text-cyan-300 font-semibold">{activeHop.location}</span>
                <span className="text-[10px] text-slate-500 block mt-1">
                  (Based on GeoLite2 ASN routing prefix; never physical actor attribution)
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-slate-300 font-sans leading-relaxed">
                <span className="font-mono text-cyan-400 text-xs font-semibold block mb-1">MTA Audit Finding:</span>
                {activeHop.note}
              </div>
            </div>

            {/* Right: Cryptographic Header Triad (SPF / DKIM / DMARC) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-white font-bold font-mono text-xs uppercase tracking-wider">
                  Cryptographic Authentication Triad
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                  RFC 7208 / 6376 / 7489
                </span>
              </div>

              <div className="space-y-2.5">
                {/* SPF */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white">SPF (Sender Policy Framework)</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {currentCase.email.auth.spfSender || 'Validates sending MTA IP'}
                    </p>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase ${
                      currentCase.email.auth.spf === 'PASS'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-red-950 text-red-300 border border-red-800'
                    }`}
                  >
                    {currentCase.email.auth.spf}
                  </span>
                </div>

                {/* DKIM */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white">DKIM (Cryptographic Signature)</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {currentCase.email.auth.dkimDomain || 'Verifies cryptographic body hash'}
                    </p>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase ${
                      currentCase.email.auth.dkim === 'PASS'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-red-950 text-red-300 border border-red-800'
                    }`}
                  >
                    {currentCase.email.auth.dkim}
                  </span>
                </div>

                {/* DMARC */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white">DMARC (Domain Alignment)</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      RFC 7489 policy conformance check
                    </p>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase ${
                      currentCase.email.auth.dmarc === 'PASS'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-red-950 text-red-300 border border-red-800'
                    }`}
                  >
                    {currentCase.email.auth.dmarc}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] font-mono text-slate-400">
                Triple authentication failure combined with lookalike domain provides irrefutable forensic evidence of spoofing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
