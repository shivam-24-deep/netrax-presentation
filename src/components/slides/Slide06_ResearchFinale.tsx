import React from 'react';
import { useDemoCase } from '../../context/DemoCaseContext';
import { Shield, BookOpen, ExternalLink, Sparkles, Award } from 'lucide-react';

export const Slide06_ResearchFinale: React.FC = () => {
  const { setIsResearchModalOpen, resetInvestigation } = useDemoCase();

  const researchCategories = [
    { cat: 'EMAIL AUTHENTICATION', source: 'RFC 7208 (SPF) · RFC 6376 (DKIM) · RFC 7489 (DMARC)' },
    { cat: 'EMAIL SECURITY BENCHMARKS', source: 'Enron Corpus (Benign Baseline) · Apache SpamAssassin' },
    { cat: 'PHISHING & MALWARE FEEDS', source: 'UCI Phishing Websites · PhishTank API · Abuse.ch URLhaus' },
    { cat: 'INFRASTRUCTURE & GEOLOCATION', source: 'MaxMind GeoLite2 ASN/City · IANA BGP Prefix Tables' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-between py-2">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs">
          <span>06 // SCIENTIFIC RIGOR & FINALE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
          Authoritative Standards & Dossier
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          NetraX bridges academic ground-truth corpora, cryptographic RFC protocols, and live community threat feeds.
        </p>
      </div>

      {/* Research Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto">
        {researchCategories.map((r, i) => (
          <div key={i} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              {r.cat}
            </span>
            <p className="text-xs font-mono text-slate-200">{r.source}</p>
          </div>
        ))}
      </div>

      {/* Finale Hero Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/50 shadow-2xl text-center space-y-3 relative overflow-hidden glow-cyan">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 flex items-center justify-center mx-auto shadow-lg">
          <Shield className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase font-mono">
            NETRAX
          </h3>
          <p className="text-base sm:text-lg text-cyan-200 font-medium italic">
            "Investigate beyond the inbox."
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs">
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            SIH 2026 • SIH26106
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            All India Council for Technical Education (Cyber Security Cell)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setIsResearchModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Research Dossier ↗</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-900 pt-2 px-2">
        <span>Thank you for reviewing NetraX (SIH26106)</span>
        <span className="text-cyan-400 font-semibold">Press [←] or [PageUp] to Review Slides</span>
      </div>
    </div>
  );
};
