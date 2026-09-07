import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { BookOpen, ExternalLink, FileText, Database, Shield } from 'lucide-react';

export const ResearchScene: React.FC = () => {
  const { setIsResearchModalOpen } = useDemoCase();

  const categories = [
    {
      cat: 'EMAIL AUTHENTICATION',
      items: [
        { name: 'SPF', id: 'RFC 7208' },
        { name: 'DKIM', id: 'RFC 6376' },
        { name: 'DMARC', id: 'RFC 7489' },
      ],
    },
    {
      cat: 'EMAIL SECURITY CORPUS',
      items: [
        { name: 'Enron Corpus', id: 'CMU / FERC' },
        { name: 'SpamAssassin', id: 'Apache Software' },
      ],
    },
    {
      cat: 'PHISHING & MALWARE INTEL',
      items: [
        { name: 'UCI Phishing', id: 'UCI ML Archive' },
        { name: 'PhishTank', id: 'Cisco Community' },
        { name: 'URLhaus', id: 'Abuse.ch' },
      ],
    },
    {
      cat: 'ROUTING & GEOLOCATION',
      items: [
        { name: 'GeoLite2', id: 'MaxMind ASN/City' },
        { name: 'BGP Routing', id: 'IANA Prefix DB' },
      ],
    },
  ];

  return (
    <section id="research" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="15"
          tag="RESEARCH & ACADEMIC STANDARDS"
          headline="Grounded in authoritative standards & public corpora."
          subheadline="NetraX builds upon RFC specifications, peer-reviewed phishing benchmarks, and community intelligence feeds."
          badgeColor="cyan"
        />

        {/* Clean Research Map */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {c.cat}
                </div>
                <div className="space-y-2">
                  {c.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-between text-xs font-mono"
                    >
                      <span className="text-white font-semibold">{item.name}</span>
                      <span className="text-[10px] text-slate-500">{item.id}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Trigger to Open Full Research Dossier */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-mono">Explore Full SIH Research Dossier</h4>
                <p className="text-xs text-slate-400 font-sans">
                  Inspect RFC documents, dataset citations, and external verification APIs.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsResearchModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Research & Sources ↗</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
