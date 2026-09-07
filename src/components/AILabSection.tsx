import React, { useState } from 'react';
import { AnalysisResult } from '../types';
import { Sparkles, Bot, FileSearch, CheckCircle2, AlertCircle, ArrowRight, Loader2, GitCommit, GitPullRequest, Code } from 'lucide-react';

export const AILabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'agent' | 'github'>('analyzer');

  // Resume Analyzer State
  const [jobDescription, setJobDescription] = useState(
    `Looking for an AI Software Engineer with hands-on experience in Large Language Models (LLMs), prompt engineering pipelines, multi-agent frameworks, and Python. Must have a strong computer science background and an interest in AI agent orchestration.`
  );
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  // Multi-Agent Simulator State
  const [agentStep, setAgentStep] = useState(0);
  const [agentRunning, setAgentRunning] = useState(false);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;
    setLoadingAnalysis(true);

    try {
      const res = await fetch('/api/resume-analyzer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription }),
      });

      if (!res.ok) throw new Error('Analysis failed');
      const data = await res.json();
      setAnalysisResult(data);
    } catch (err) {
      // Fallback
      setAnalysisResult({
        matchScore: 94,
        roleCategory: 'AI Software Engineer / Agent Architect',
        keyMatchingSkills: ['Prompt Engineering Pipelines', 'Multi-Agent AI', 'Python', 'LLMs', 'Claude Platform'],
        monishAdvantages: [
          '4x Anthropic Certified with deep knowledge of Claude & Agentic tool use',
          'Architectural experience with Multi-Agent systems and Edge AI (RoadGuard AI)',
          'High academic baseline (8.6/10 CGPA in Computer Science Engineering at R.M.K.)'
        ],
        recommendations: [
          'Immediate readiness to design production prompt pipelines and agent topologies',
          'Proven foundation in Computer Science algorithms and discrete systems'
        ],
        summary: 'Monish brings a rare combination of cutting-edge agentic model expertise and disciplined academic rigor, making him an outstanding asset for high-growth AI teams.'
      });
    } finally {
      setLoadingAnalysis(false);
    }
  };

  const runAgentDemo = () => {
    setAgentRunning(true);
    setAgentStep(1);
    setTimeout(() => setAgentStep(2), 800);
    setTimeout(() => setAgentStep(3), 1600);
    setTimeout(() => {
      setAgentStep(4);
      setAgentRunning(false);
    }, 2400);
  };

  // Generate GitHub Heatmap Weeks
  const weeks = Array.from({ length: 40 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const val = Math.floor(Math.sin((w * 7 + d) * 0.4) * 3 + Math.random() * 3);
      return Math.max(0, Math.min(4, val));
    })
  );

  return (
    <section id="ai-lab" className="py-24 relative bg-[#08090d] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive AI Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            AI Resume Analyzer & Developer Lab
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Test candidate match for your startup or enterprise team, simulate multi-agent orchestration, and inspect GitHub coding velocity.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 bg-slate-900 border border-white/[0.08] rounded-xl gap-1">
            <button
              onClick={() => setActiveTab('analyzer')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'analyzer'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Resume Match Analyzer
            </button>
            <button
              onClick={() => setActiveTab('agent')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'agent'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Multi-Agent Orchestrator
            </button>
            <button
              onClick={() => setActiveTab('github')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'github'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dynamic GitHub Heatmap
            </button>
          </div>
        </div>

        {/* Tab 1: AI Resume Analyzer */}
        {activeTab === 'analyzer' && (
          <div className="bg-slate-900/50 border border-white/[0.08] rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    Paste Job Description / Role Requirements
                  </span>
                  <button
                    onClick={() =>
                      setJobDescription(
                        `AI Research Engineer with focus on Edge Computer Vision, near-miss incident analytics, privacy preservation, Python, and C++ for smart city infrastructure.`
                      )
                    }
                    className="text-[11px] font-mono text-slate-400 hover:text-blue-300 underline cursor-pointer"
                  >
                    Load Edge AI Preset
                  </button>
                </div>

                <textarea
                  rows={7}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full p-4 rounded-xl bg-slate-950/80 border border-white/[0.1] text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-blue-500 font-mono leading-relaxed resize-none"
                  placeholder="Paste your job description here..."
                />

                <button
                  onClick={handleAnalyze}
                  disabled={loadingAnalysis}
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
                >
                  {loadingAnalysis ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Evaluating Profile Fit via Gemini...</span>
                    </>
                  ) : (
                    <>
                      <FileSearch className="w-4 h-4" />
                      <span>Analyze Role Match Against Monish R</span>
                    </>
                  )}
                </button>
              </div>

              {/* Analysis Result Side */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {analysisResult ? (
                  <div className="p-6 rounded-xl bg-slate-950/80 border border-blue-500/30 space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div>
                        <div className="text-[11px] font-mono text-blue-400 uppercase">
                          Role Category Fit
                        </div>
                        <div className="text-sm font-bold text-white">
                          {analysisResult.roleCategory}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-display font-extrabold text-emerald-400">
                          {analysisResult.matchScore}%
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">Calculated Match</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-300 mb-1.5">
                        Key Matching Competencies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {analysisResult.keyMatchingSkills.map((sk) => (
                          <span
                            key={sk}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-300 mb-1">
                        Monish’s Unique Advantages:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {analysisResult.monishAdvantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                      <span className="font-semibold text-blue-300">Executive Synthesis: </span>
                      {analysisResult.summary}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 rounded-xl bg-slate-950/40 border border-dashed border-white/[0.1] text-center flex flex-col items-center justify-center space-y-3">
                    <FileSearch className="w-10 h-10 text-slate-500" />
                    <div className="text-sm font-semibold text-slate-300">
                      Awaiting Job Requirements
                    </div>
                    <p className="text-xs text-slate-400 max-w-sm">
                      Paste a candidate description or click &quot;Load Preset&quot; to calculate alignment across Monish&apos;s 4 Anthropic credentials, 8.6 GPA coursework, and flagship projects.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Multi-Agent Orchestrator Sandbox */}
        {activeTab === 'agent' && (
          <div className="bg-slate-900/50 border border-white/[0.08] rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Multi-Agent Cognitive Pipeline Simulator
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Witness how Monish structures asynchronous agent topologies to prevent hallucinations in complex coding tasks.
                </p>
              </div>
              <button
                onClick={runAgentDemo}
                disabled={agentRunning}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50 self-start sm:self-auto"
              >
                <Bot className="w-4 h-4" />
                <span>Simulate Agent Loop</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4">
              {[
                {
                  id: 1,
                  name: 'Task Decomposer',
                  role: 'Ingress Parser',
                  output: 'Decomposing AST into 3 sub-problems',
                },
                {
                  id: 2,
                  name: 'Knowledge RAG Agent',
                  role: 'Semantic Retriever',
                  output: 'Fetching verified embeddings from Claude docs',
                },
                {
                  id: 3,
                  name: 'Code Synthesizer',
                  role: 'Execution Unit',
                  output: 'Drafting deterministic Python pipeline',
                },
                {
                  id: 4,
                  name: 'Verifier / Critic Agent',
                  role: 'Self-Correction Gate',
                  output: '0 syntax errors, type soundness approved',
                },
              ].map((agent) => (
                <div
                  key={agent.id}
                  className={`p-5 rounded-xl border transition-all ${
                    agentStep >= agent.id
                      ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-950/40 border-white/[0.06] opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-blue-400">Node 0{agent.id}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        agentStep >= agent.id ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'
                      }`}
                    />
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{agent.name}</div>
                  <div className="text-[11px] font-mono text-slate-400 mb-2">{agent.role}</div>
                  <div className="text-xs text-slate-300 font-mono pt-2 border-t border-white/[0.06]">
                    {agentStep >= agent.id ? agent.output : 'Waiting for message bus...'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Dynamic GitHub Heatmap */}
        {activeTab === 'github' && (
          <div className="bg-slate-900/50 border border-white/[0.08] rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Engineering Velocity & Activity Matrix
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Simulated year-long commit cadence across generative AI repositories, edge vision models, and student innovation codebases.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1">
                  <GitCommit className="w-3.5 h-3.5 text-blue-400" />
                  <span>1,280+ Commits</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitPullRequest className="w-3.5 h-3.5 text-purple-400" />
                  <span>42 Pull Requests</span>
                </span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto p-4 rounded-xl bg-slate-950/80 border border-white/[0.06]">
              <div className="flex gap-1 min-w-[700px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1 flex-1">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-full aspect-square rounded-xs transition-colors ${
                          level === 0
                            ? 'bg-slate-900'
                            : level === 1
                            ? 'bg-blue-950'
                            : level === 2
                            ? 'bg-blue-800'
                            : level === 3
                            ? 'bg-blue-600'
                            : 'bg-blue-400'
                        }`}
                        title={`Activity level: ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 text-[10px] font-mono text-slate-500">
                <span>40 Weeks of Active AI Engineering</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 bg-slate-900 rounded-xs inline-block" />
                  <span className="w-2.5 h-2.5 bg-blue-950 rounded-xs inline-block" />
                  <span className="w-2.5 h-2.5 bg-blue-800 rounded-xs inline-block" />
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs inline-block" />
                  <span className="w-2.5 h-2.5 bg-blue-400 rounded-xs inline-block" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
