import React from 'react';
import { Shield, ExternalLink, Cpu, Lock, Terminal } from 'lucide-react';
import { useDemoCase } from '../../context/DemoCaseContext';

export const Footer: React.FC = () => {
  const { setIsResearchModalOpen } = useDemoCase();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 text-slate-400 font-sans py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: NetraX Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wider text-white">NETRAX</h3>
                <p className="text-xs font-mono text-cyan-400">SIH 2026 • Problem Statement SIH26106</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
              "Agentic AI for Email Threat Detection & Forensic Intelligence." An autonomous multi-layer investigation system that inspects headers, validates cryptographic signatures, evaluates infrastructure BGP routes, and correlates threat feeds to transform raw email into auditable forensic intelligence.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                AICTE Cyber Security Cell
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                Category: Software
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                Theme: Blockchain & Cybersecurity
              </span>
            </div>
          </div>

          {/* Col 2: Architecture Layers */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Investigation Stack
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• RFC 5322 MIME Ingestion</li>
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• Agentic Dynamic Routing</li>
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• SPF/DKIM/DMARC Triad</li>
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• BGP/ASN Infrastructure</li>
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• URLhaus & PhishTank Sync</li>
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• Bayesian Evidence Fusion</li>
            </ul>
          </div>

          {/* Col 3: Research & Regulatory */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              Auditable Governance
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li>
                <button
                  onClick={() => setIsResearchModalOpen(true)}
                  className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1"
                >
                  <span>• RFC 7208 / 6376 / 7489</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsResearchModalOpen(true)}
                  className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1"
                >
                  <span>• Enron & SpamAssassin</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsResearchModalOpen(true)}
                  className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1"
                >
                  <span>• MaxMind GeoLite2 Specs</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </li>
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• Human-in-the-Loop SOC Override</li>
              <li className="hover:text-cyan-300 transition-colors cursor-pointer">• STIX 2.1 Threat Sharing</li>
            </ul>
          </div>
        </div>

        {/* Ethical Accuracy Notices & Legal Disclaimer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-400 font-semibold">
              CRITICAL FORENSIC ACCURACY NOTICES:
            </p>
            <p>
              1. Geolocation reflects <em>approximate infrastructure hosting region</em> (BGP / ASN / GeoLite2), never individual physical attribution.
            </p>
            <p>
              2. Absence of signature in threat databases (<em>NO MATCH</em>) does NOT imply safe. NetraX correlates multi-vector heuristics.
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="text-slate-400 font-bold">SMART INDIA HACKATHON 2026</div>
            <div className="text-slate-500">Autonomous Forensic Presentation Experience</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
