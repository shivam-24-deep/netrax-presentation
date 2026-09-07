import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { PIPELINE_STEPS } from '../../data/architectureData';
import { Database, Binary, ArrowRight, Activity, AlertCircle, Sparkles } from 'lucide-react';

export const DataPipelineScene: React.FC = () => {
  return (
    <section id="data-pipeline" className="py-24 px-4 md:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="13"
          tag="MACHINE LEARNING & BENCHMARKS"
          headline="Rigorous data taxonomy & inference lifecycle."
          subheadline="Trained strictly on standardized academic corpora with rigorous distinction from live runtime threat intelligence."
          badgeColor="blue"
        />

        {/* Pipeline & Corpora Chamber */}
        <div className="rounded-3xl glass-panel-elevated border border-slate-800 p-6 md:p-10 space-y-10">
          {/* Horizontal Step Pipeline */}
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              END-TO-END MODEL TRAINING & INFERENCE PIPELINE:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PIPELINE_STEPS.map((s) => (
                <div key={s.step} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
                  <div className="text-xs font-mono font-bold text-cyan-400">{s.step}</div>
                  <div className="text-xs font-bold text-white font-mono">{s.title}</div>
                  <p className="text-[10px] text-slate-400 font-sans leading-tight mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training Data vs Live Feeds Distinction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
            {/* Left: Training Benchmarks */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold uppercase">TRAINING DATASETS (OFFLINE BASELINE):</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-700">
                  ACADEMIC
                </span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <strong className="text-white">Apache SpamAssassin Corpus:</strong> Benchmark spam taxonomy and RFC header traces.
                </li>
                <li className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <strong className="text-white">UCI Phishing Websites:</strong> 11,055 website records isolating 30 lexical URL indicators.
                </li>
                <li className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <strong className="text-white">Enron Email Corpus:</strong> Benign baseline for corporate linguistic formality.
                </li>
              </ul>
              <p className="text-[10px] text-slate-500 font-mono">
                *Notice: The Enron dataset is used exclusively as a benign conversational baseline, never as ground truth for malicious emails.
              </p>
            </div>

            {/* Right: Live Threat Intelligence */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-blue-400 font-bold uppercase">LIVE THREAT INTELLIGENCE (RUNTIME):</span>
                <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                  REAL-TIME IOC
                </span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <strong className="text-white">PhishTank Feed:</strong> Community verified zero-day credential harvest links.
                </li>
                <li className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <strong className="text-white">Abuse.ch URLhaus:</strong> Real-time active malware distribution tracking.
                </li>
                <li className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <strong className="text-white">MaxMind GeoLite2:</strong> Offline BGP Autonomous System & country prefix resolver.
                </li>
              </ul>
              <p className="text-[10px] text-slate-500 font-mono">
                Live threat feeds provide dynamic IOC cross-referencing to supplement local offline classifiers.
              </p>
            </div>
          </div>

          {/* Model Metrics Status Notice */}
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Production Benchmark Status:</span>
              <strong className="text-white">Model evaluation in progress</strong>
            </div>
            <span className="text-[10px] text-slate-500 hidden sm:inline">
              Benchmarking ongoing against live zero-day corpus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
