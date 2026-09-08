import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Network, Sparkles, Orbit, Compass, CheckCircle2, ChevronRight, Layers, Zap } from 'lucide-react';

interface ConstellationNode {
  id: string;
  name: string;
  category: 'ai' | 'language' | 'tool';
  level: number;
  tag: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  connections: string[];
}

const CONSTELLATION_NODES: ConstellationNode[] = [
  // Central Core Cluster: Generative AI & Claude Mastery
  { id: 'claude', name: 'Claude Platform & APIs', category: 'ai', level: 98, tag: '4x Certified', x: 50, y: 44, connections: ['agents', 'prompt', 'llm', 'aistudio'] },
  { id: 'agents', name: 'Multi-Agent Topologies', category: 'ai', level: 94, tag: 'Core Strength', x: 34, y: 32, connections: ['claude', 'python', 'rag', 'prompt'] },
  { id: 'prompt', name: 'Prompt Engineering', category: 'ai', level: 96, tag: 'Production-Grade', x: 66, y: 32, connections: ['claude', 'agents', 'llm'] },
  { id: 'llm', name: 'Large Language Models', category: 'ai', level: 93, tag: 'Deep Mastery', x: 50, y: 22, connections: ['claude', 'prompt', 'rag'] },
  { id: 'rag', name: 'RAG & Vector Retrieval', category: 'ai', level: 91, tag: 'High Fluency', x: 26, y: 48, connections: ['agents', 'llm', 'python'] },
  
  // Left Arm: Systems & Edge AI
  { id: 'edge', name: 'Edge AI & Smart Cities', category: 'ai', level: 88, tag: 'Research Track', x: 18, y: 66, connections: ['cpp', 'python', 'agents'] },
  { id: 'python', name: 'Python', category: 'language', level: 94, tag: 'Primary AI', x: 32, y: 64, connections: ['agents', 'edge', 'rag', 'sql'] },
  { id: 'cpp', name: 'C++', category: 'language', level: 85, tag: 'Low-Latency', x: 12, y: 80, connections: ['edge', 'java'] },
  { id: 'java', name: 'Java', category: 'language', level: 88, tag: 'OOP Systems', x: 24, y: 84, connections: ['cpp', 'sql'] },
  { id: 'sql', name: 'SQL & Schemas', category: 'language', level: 86, tag: 'Data Engineering', x: 38, y: 82, connections: ['python', 'java'] },

  // Right Arm: Full Stack & AI Studio Developer Platforms
  { id: 'ts', name: 'TypeScript / React', category: 'language', level: 90, tag: 'Full-Stack', x: 74, y: 56, connections: ['aistudio', 'git', 'prompt'] },
  { id: 'aistudio', name: 'Google AI Studio', category: 'tool', level: 95, tag: 'Active Lab', x: 64, y: 68, connections: ['claude', 'ts', 'git'] },
  { id: 'git', name: 'Git & CI/CD Pipelines', category: 'tool', level: 92, tag: 'Daily Workflow', x: 80, y: 74, connections: ['ts', 'aistudio', 'vscode'] },
  { id: 'vscode', name: 'VS Code & AI Tooling', category: 'tool', level: 95, tag: 'Agentic Workflows', x: 68, y: 86, connections: ['git', 'ts'] },
  { id: 'openai', name: 'OpenAI Ecosystem', category: 'tool', level: 92, tag: 'Benchmarking', x: 84, y: 40, connections: ['claude', 'prompt'] },
];

export const SkillsSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('claude');
  const [viewMode, setViewMode] = useState<'galaxy' | 'matrix'>('galaxy');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'ai' | 'language' | 'tool'>('all');

  const selectedNode = CONSTELLATION_NODES.find((n) => n.id === selectedNodeId) || CONSTELLATION_NODES[0];

  return (
    <section
      id="skills"
      className="py-24 relative bg-white dark:bg-[#020205] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 mb-3">
            <Orbit className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin" />
            <span>Interactive Technology Galaxy &amp; Constellation Graph</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Cognitive Competency Galaxy
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Explore Monish&apos;s dynamic neural skill topology. Gravitational links trace how foundation models, edge latency, and autonomous agent loops connect in practice.
          </p>
        </div>

        {/* View Mode & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex p-1 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-xl backdrop-blur-md">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                activeCategoryFilter === 'all'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Galaxies
            </button>
            <button
              onClick={() => setActiveCategoryFilter('ai')}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                activeCategoryFilter === 'ai'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI &amp; Models
            </button>
            <button
              onClick={() => setActiveCategoryFilter('language')}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                activeCategoryFilter === 'language'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveCategoryFilter('tool')}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                activeCategoryFilter === 'tool'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Platforms
            </button>
          </div>

          <div className="flex p-1 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-xl">
            <button
              onClick={() => setViewMode('galaxy')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'galaxy'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Constellation Map</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Matrix View</span>
            </button>
          </div>
        </div>

        {/* Galaxy Map View */}
        {viewMode === 'galaxy' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Interactive Constellation Canvas */}
            <div className="lg:col-span-8 bg-slate-900/90 dark:bg-[#06060E] border border-slate-800 dark:border-white/10 rounded-3xl p-4 sm:p-8 relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Radial Starlight Gradient */}
              <div className="absolute inset-0 bg-radial from-blue-600/10 via-transparent to-transparent pointer-events-none" />

              {/* Dynamic SVG Connections between Constellation Nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {CONSTELLATION_NODES.map((node) =>
                  node.connections.map((targetId) => {
                    const target = CONSTELLATION_NODES.find((n) => n.id === targetId);
                    if (!target) return null;
                    const isConnectedToSelected =
                      node.id === selectedNodeId || target.id === selectedNodeId;

                    return (
                      <line
                        key={`${node.id}-${target.id}`}
                        x1={`${node.x}%`}
                        y1={`${node.y}%`}
                        x2={`${target.x}%`}
                        y2={`${target.y}%`}
                        stroke={isConnectedToSelected ? '#60a5fa' : '#334155'}
                        strokeWidth={isConnectedToSelected ? '2' : '1'}
                        strokeDasharray={isConnectedToSelected ? '4 2' : 'none'}
                        opacity={isConnectedToSelected ? '0.85' : '0.25'}
                        className="transition-all duration-500"
                      />
                    );
                  })
                )}
              </svg>

              {/* Interactive Star Nodes */}
              <div className="relative w-full h-full min-h-[440px] sm:min-h-[500px]">
                {CONSTELLATION_NODES.filter((n) =>
                  activeCategoryFilter === 'all' ? true : n.category === activeCategoryFilter
                ).map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  const isConnected = selectedNode.connections.includes(node.id);

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                    >
                      {/* Node Glow Pulse */}
                      <div
                        className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                          isSelected
                            ? 'bg-blue-500/40 animate-ping'
                            : isConnected
                            ? 'bg-indigo-500/20'
                            : 'bg-transparent'
                        }`}
                      />

                      {/* Core Node Bead */}
                      <div
                        className={`relative px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all duration-300 border shadow-md ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-400 scale-110 shadow-blue-500/40 z-20 ring-2 ring-blue-400/60'
                            : isConnected
                            ? 'bg-slate-800 text-blue-300 border-blue-500/50 scale-105'
                            : 'bg-slate-900/90 text-slate-300 border-white/10 hover:border-blue-400/60 hover:text-white'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            node.category === 'ai'
                              ? 'bg-blue-400'
                              : node.category === 'language'
                              ? 'bg-emerald-400'
                              : 'bg-purple-400'
                          }`}
                        />
                        <span className="font-semibold whitespace-nowrap">{node.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Constellation Canvas Legend */}
              <div className="absolute bottom-4 left-4 sm:left-6 z-10 flex items-center gap-4 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400" /> AI Core
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Language
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-400" /> Platform
                </span>
              </div>
            </div>

            {/* Right: Selected Node Telemetry Dossier */}
            <div className="lg:col-span-4 bg-white/90 dark:bg-[#0A0A10]/80 border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Inspecting Node
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-0.5">
                    {selectedNode.name}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                  {selectedNode.tag}
                </span>
              </div>

              {/* Proficiency Depth */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-500 dark:text-slate-400">Fluency Quotient:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{selectedNode.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-700"
                    style={{ width: `${selectedNode.level}%` }}
                  />
                </div>
              </div>

              {/* Gravitational Linked Nodes */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                  Gravitational Links ({selectedNode.connections.length})
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.connections.map((cId) => {
                    const target = CONSTELLATION_NODES.find((n) => n.id === cId);
                    if (!target) return null;
                    return (
                      <button
                        key={cId}
                        onClick={() => setSelectedNodeId(cId)}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                      >
                        &rarr; {target.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Real-World Context Narrative */}
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-500/20 space-y-2">
                <div className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Production Impact Application</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Deployed in Monish&apos;s verified autonomous agent pipelines, ensuring sub-second reasoning loops, zero hallucination guardrails, and deterministic edge execution.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Dense Matrix View */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-white/90 dark:bg-[#0A0A10]/75 border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl"
              >
                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-1">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{cat.description}</p>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-800 dark:text-slate-200">{s.name}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-mono">{s.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
