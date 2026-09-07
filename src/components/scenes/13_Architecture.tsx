import React, { useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { ARCHITECTURE_LAYERS } from '../../data/architectureData';
import { Layers, Cpu, ShieldCheck, Terminal, ArrowDown, ChevronRight, Lock } from 'lucide-react';

export const ArchitectureScene: React.FC = () => {
  const [activeLayerNum, setActiveLayerNum] = useState<number>(2);
  const activeLayer = ARCHITECTURE_LAYERS.find((l) => l.number === activeLayerNum) || ARCHITECTURE_LAYERS[1];

  return (
    <section id="architecture" className="py-24 px-4 md:px-8 bg-slate-950/90 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="12"
          tag="TECHNICAL BLUEPRINT"
          headline="Six-layer enterprise architecture."
          subheadline="Engineered for modularity, zero-trust isolation, sub-second execution, and full STIX 2.1 compliance."
          badgeColor="cyan"
        />

        {/* Layered Interactive Blueprint */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: 6 Vertical Layers */}
            <div className="lg:col-span-6 space-y-2.5">
              {ARCHITECTURE_LAYERS.map((layer) => {
                const isSelected = layer.number === activeLayerNum;
                return (
                  <button
                    key={layer.number}
                    onClick={() => setActiveLayerNum(layer.number)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                          isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        0{layer.number}
                      </span>
                      <div>
                        <div className="text-xs font-bold font-mono text-white tracking-wide">
                          {layer.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">{layer.subtitle}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Layer Deep Dive */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                    LAYER 0{activeLayer.number} SPECIFICATION
                  </span>
                  <h3 className="text-lg font-bold text-white font-mono mt-0.5">{activeLayer.name}</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-700">
                  PRODUCTION READY
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {activeLayer.description}
              </p>

              {/* Technologies */}
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1.5">
                  CORE TECHNOLOGIES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeLayer.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Components */}
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1.5">
                  ACTIVE SUBSYSTEMS:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {activeLayer.components.map((comp, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      • {comp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Note */}
              {activeLayer.securityNote && (
                <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-slate-300 flex items-start gap-2">
                  <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-cyan-400 font-mono">Zero-Trust Guard:</strong> {activeLayer.securityNote}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
