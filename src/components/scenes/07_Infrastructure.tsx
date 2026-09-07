import React, { useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { useDemoCase } from '../../context/DemoCaseContext';
import { GraphNode } from '../../types/investigation';
import { Globe, Server, Hash, ShieldAlert, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const InfrastructureScene: React.FC = () => {
  const { currentCase, activeNodeId, setActiveNodeId } = useDemoCase();
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);

  const nodes = currentCase.nodes;
  const activeDetailNode = hoveredNode || nodes.find((n) => n.id === activeNodeId) || nodes[2]; // default to domain or hovered

  return (
    <section id="infrastructure" className="py-24 px-4 md:px-8 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="06"
          tag="INFRASTRUCTURE INTELLIGENCE"
          headline="EMAIL → DOMAIN → IP → ASN → COUNTRY"
          subheadline="NetraX correlates the full infrastructure lineage to uncover hidden hosting clusters and proxy relays."
          badgeColor="cyan"
        />

        {/* Interactive Evidence Graph Container */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-8 space-y-6">
          {/* Top Lineage Flow Diagram */}
          <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-slate-500 uppercase">TELEMETRY PIPELINE:</span>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-bold">EMAIL</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-blue-400 font-bold">DOMAIN</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400 font-bold">IP</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-teal-400 font-bold">ASN</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">COUNTRY (APPROX.)</span>
            </div>
          </div>

          {/* Interactive Node Grid & Metadata Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Interactive Node Map */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 relative min-h-[380px] flex flex-col justify-between">
              <div className="text-xs font-mono text-slate-500 flex items-center justify-between mb-4">
                <span>INTERACTIVE EVIDENCE GRAPH NODES:</span>
                <span className="text-cyan-400">Hover or click a node to inspect</span>
              </div>

              {/* Visual Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 z-10">
                {nodes.map((node) => {
                  const isHovered = activeDetailNode.id === node.id;
                  const isDanger = node.status === 'danger';
                  const isClean = node.status === 'clean';
                  return (
                    <button
                      key={node.id}
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setActiveNodeId(node.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        isHovered
                          ? isDanger
                            ? 'bg-red-950/60 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)] scale-105 z-20'
                            : isClean
                            ? 'bg-emerald-950/60 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105 z-20'
                            : 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105 z-20'
                          : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span className="text-slate-400 font-bold uppercase">{node.category}</span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isDanger ? 'bg-red-400' : isClean ? 'bg-emerald-400' : 'bg-cyan-400'
                          }`}
                        />
                      </div>
                      <div className="text-xs font-bold font-mono text-white truncate mb-1">{node.value}</div>
                      <div className="text-[10px] font-mono text-slate-500 truncate">{node.label}</div>
                    </button>
                  );
                })}
              </div>

              {/* Edge Relationships Strip */}
              <div className="pt-4 border-t border-slate-900 mt-4">
                <span className="text-[10px] font-mono text-slate-500 block mb-2">CORRELATED RELATIONSHIPS:</span>
                <div className="flex flex-wrap gap-2">
                  {currentCase.edges.map((edge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {edge.from.replace('n-', '')} → <span className="text-cyan-400">{edge.label}</span> → {edge.to.replace('n-', '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Node Metadata Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase text-white">
                      Node Metadata
                    </span>
                  </div>
                  <span
                    className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                      activeDetailNode.status === 'danger'
                        ? 'bg-red-950 text-red-300 border border-red-800'
                        : activeDetailNode.status === 'clean'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                    }`}
                  >
                    {activeDetailNode.status}
                  </span>
                </div>

                <div className="space-y-3 pt-2 font-mono text-xs">
                  <div>
                    <span className="text-slate-500 text-[10px] block">CLASSIFICATION:</span>
                    <span className="text-white font-bold text-sm">{activeDetailNode.label}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 text-[10px] block">OBSERVED VALUE:</span>
                    <span className="text-cyan-300 font-semibold break-all">{activeDetailNode.value}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 text-[10px] block">TITLE:</span>
                    <span className="text-slate-200">{activeDetailNode.metadata.title}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 text-[10px] block">FORENSIC DETAILS:</span>
                    <p className="text-slate-300 font-sans text-xs leading-relaxed mt-0.5">
                      {activeDetailNode.metadata.details}
                    </p>
                  </div>

                  {activeDetailNode.metadata.caveat && (
                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-300 font-sans">
                      <div className="font-mono font-bold mb-0.5 flex items-center gap-1 text-amber-400">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Infrastructure Caveat:
                      </div>
                      {activeDetailNode.metadata.caveat}
                    </div>
                  )}
                </div>
              </div>

              {/* Accuracy Notice */}
              <div className="pt-3 border-t border-slate-900 text-[10px] font-mono text-slate-500">
                Notice: Geolocation specifies server hosting infrastructure region only. Never claims physical person attribution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
