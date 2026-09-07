import React, { useState } from 'react';
import { Project } from '../types';
import { X, CheckCircle, AlertTriangle, Layers, Cpu, Activity, Play, Terminal, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges' | 'simulation'>('overview');

  // State for interactive simulation
  const [simQuery, setSimQuery] = useState('Explain transformer self-attention with code example');
  const [simRunning, setSimRunning] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // Traffic simulation state
  const [trafficDensity, setTrafficDensity] = useState<'low' | 'medium' | 'high'>('medium');
  const [nearMissDetected, setNearMissDetected] = useState(false);

  if (!project) return null;

  const runProductivitySim = () => {
    setSimRunning(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
    setTimeout(() => {
      setSimStep(4);
      setSimRunning(false);
    }, 2100);
  };

  const triggerTrafficSim = (density: 'low' | 'medium' | 'high') => {
    setTrafficDensity(density);
    setNearMissDetected(density === 'high');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0d1017] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">Case Study</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/[0.06] px-5 sm:px-6 bg-slate-950/40 gap-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'overview' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Executive Summary
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'architecture' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'challenges' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Challenges & Solutions
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'simulation' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Interactive Simulation
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Highlights from Resume
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Verified Impact Metrics
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.impactMetrics.map((metric) => (
                    <div key={metric.label} className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-center">
                      <div className="text-xl sm:text-2xl font-display font-extrabold text-blue-400">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-300 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="text-xs font-mono text-blue-300">Topology Design</div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {project.architecture.overview}
                </div>
              </div>

              {/* Visual Node Graph */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architecture.nodes.map((node, i) => (
                  <div
                    key={node.name}
                    className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08] relative group hover:border-blue-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-blue-400">
                        0{i + 1} • {node.type}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-blue-400/80" />
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{node.name}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{node.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Engineering Hurdles & Solutions
                </h4>
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Challenge #{i + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {challenge}
                    </p>
                    <div className="pt-2 border-t border-white/[0.06] mt-2">
                      <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                        Architected Resolution:
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {project.solutions[i]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-6">
              {project.demoSimulationType === 'productivity' ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/[0.08]">
                    <div className="text-xs font-mono text-blue-400 mb-2">
                      Multi-Agent Prompt Pipeline Sandbox
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={simQuery}
                        onChange={(e) => setSimQuery(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg bg-slate-900 text-xs text-white border border-white/[0.1] focus:outline-none focus:border-blue-500"
                        placeholder="Enter technical query..."
                      />
                      <button
                        onClick={runProductivitySim}
                        disabled={simRunning}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Run Agent Topology</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2">
                    {[
                      { step: 1, title: 'Intent Classifier', desc: 'Parsing AST and query scope' },
                      { step: 2, title: 'Decomposer Agent', desc: 'Splitting into sub-prompts' },
                      { step: 3, title: 'Prompt & RAG Engine', desc: 'Retrieving context & few-shots' },
                      { step: 4, title: 'Synthesizer Verifier', desc: 'Checking code soundness' },
                    ].map((s) => (
                      <div
                        key={s.step}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          simStep >= s.step
                            ? 'bg-blue-950/40 border-blue-500 text-blue-200'
                            : 'bg-slate-900/40 border-white/[0.06] text-slate-500'
                        }`}
                      >
                        <div className="text-[11px] font-mono">Stage {s.step}</div>
                        <div className="text-xs font-bold mt-0.5">{s.title}</div>
                        <div className="text-[10px] mt-1 text-slate-400">{s.desc}</div>
                      </div>
                    ))}
                  </div>

                  {simStep === 4 && (
                    <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs space-y-2 font-mono">
                      <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" />
                        <span>Agent Pipeline Verified Output</span>
                      </div>
                      <p className="text-slate-300">
                        Query successfully resolved with 0 hallucinations. Synthesized 3 modular steps with verified self-attention query-key-value tensor dot-products.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/[0.08]">
                    <div className="text-xs font-mono text-blue-400 mb-2">
                      RoadGuard Edge Telemetry Simulator
                    </div>
                    <div className="text-xs text-slate-400 mb-3">
                      Simulate varying intersection densities to observe real-time near-miss classification.
                    </div>
                    <div className="flex gap-2">
                      {(['low', 'medium', 'high'] as const).map((d) => (
                        <button
                          key={d}
                          onClick={() => triggerTrafficSim(d)}
                          className={`flex-1 py-2 rounded-lg text-xs font-mono uppercase cursor-pointer transition-all ${
                            trafficDensity === d
                              ? 'bg-blue-600 text-white font-bold shadow-md'
                              : 'bg-slate-900 text-slate-400 hover:text-white border border-white/[0.06]'
                          }`}
                        >
                          {d} Density
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-white/[0.08] space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Edge Inference Latency:</span>
                      <span className="text-emerald-400 font-bold">24.6 ms (TensorRT Quantized)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Privacy Shielder:</span>
                      <span className="text-emerald-400 font-bold">100% Face & Plate Obscuration</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Time-To-Collision (TTC):</span>
                      <span className={nearMissDetected ? 'text-rose-400 font-bold' : 'text-slate-200'}>
                        {nearMissDetected ? '1.14s (Critical Threshold)' : '4.82s (Safe Envelope)'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Municipal Intervention Signal:</span>
                      <span className={nearMissDetected ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                        {nearMissDetected ? 'DISPATCH: Hold Crosswalk Amber' : 'NOMINAL: Normal Cycle'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
