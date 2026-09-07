import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Shield, Eye, AlertOctagon, CheckCircle2, HelpCircle, ArrowDown, ExternalLink } from 'lucide-react';

export const ThreatIntelScene: React.FC = () => {
  const { currentCase } = useDemoCase();

  return (
    <section id="threat-intelligence" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="07"
          tag="GLOBAL THREAT INTELLIGENCE"
          headline="External intelligence feeds verified on demand."
          subheadline="NetraX correlates extracted indicators against PhishTank and URLhaus community IOC databases."
          badgeColor="cyan"
        />

        {/* Global Feeds Container */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-8 space-y-8">
          {/* Top Flow: NetraX -> Feeds */}
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-700/60 text-cyan-300 font-mono text-xs font-semibold">
              <Eye className="w-3.5 h-3.5" />
              NETRAX THREAT BROKER DISPATCH
            </div>
            <ArrowDown className="w-4 h-4 text-slate-600" />
            <span className="text-xs font-mono text-slate-400">
              Synchronous querying of distributed IOC repositories
            </span>
          </div>

          {/* Three Feed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentCase.threatFeeds.map((feed, idx) => {
              const isMatch = feed.status === 'MATCH';
              const isNoMatch = feed.status === 'NO MATCH';
              const isUnavailable = feed.status === 'UNAVAILABLE';

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                    isMatch
                      ? 'bg-red-950/40 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                      : isNoMatch
                      ? 'bg-slate-900/60 border-slate-800'
                      : 'bg-amber-950/30 border-amber-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-white uppercase">{feed.feedName}</span>
                      <span
                        className={`text-[10px] font-mono font-black px-2 py-0.5 rounded tracking-wider ${
                          isMatch
                            ? 'bg-red-950 text-red-300 border border-red-800'
                            : isNoMatch
                            ? 'bg-slate-800 text-slate-400 border border-slate-700'
                            : 'bg-amber-950 text-amber-300 border border-amber-800'
                        }`}
                      >
                        {feed.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                      {feed.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono flex items-center justify-between text-slate-500">
                    <span>{feed.lastUpdated}</span>
                    {feed.signature && (
                      <span className="text-cyan-400 font-bold truncate max-w-[120px]">{feed.signature}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Critical Forensic Axiom Notice: NO MATCH != SAFE */}
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-600/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                  CRITICAL FORENSIC AXIOM: NO MATCH ≠ SAFE
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mt-0.5">
                  Zero-day phishing domains and targeted executive BEC attacks are rarely cataloged in public IOC feeds on day zero. Absence of a feed match is not proof of benign intent.
                </p>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 whitespace-nowrap">
              DEMO INTELLIGENCE ENRICHMENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
