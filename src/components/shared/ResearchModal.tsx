import React from 'react';
import { useDemoCase } from '../../context/DemoCaseContext';
import { RESEARCH_SOURCES } from '../../data/researchSources';
import { X, ExternalLink, BookOpen, ShieldCheck, Database, FileText } from 'lucide-react';

export const ResearchModal: React.FC = () => {
  const { isResearchModalOpen, setIsResearchModalOpen } = useDemoCase();

  if (!isResearchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Research & Authoritative Sources</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                  SIH26106 DOSSIER
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Protocols, academic datasets, benchmarks, and threat intelligence standards informing NetraX
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsResearchModalOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESEARCH_SOURCES.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                      {item.type === 'RFC' ? <FileText className="w-3 h-3" /> : <Database className="w-3 h-3" />}
                      {item.yearOrVersion}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {item.title}
                  </h4>

                  <div className="text-xs font-mono text-slate-400 mb-2">{item.identifier} — {item.source}</div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{item.summary}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-cyan-400/90 font-mono italic">
                    NetraX use: {item.relevance.slice(0, 65)}...
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-mono text-xs transition-colors"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Ethical Attribution: All datasets and feeds cited under fair-use research guidelines.</div>
          <button
            onClick={() => setIsResearchModalOpen(false)}
            className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
