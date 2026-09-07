import React from 'react';
import { INVOLVEMENT } from '../data/portfolioData';
import { Sparkles, Users, Zap, Terminal, Trophy, Rocket, ShieldCheck } from 'lucide-react';

export const InnovationSection: React.FC = () => {
  const hackathonStrengths = [
    {
      title: '48-Hour Rapid Prototyping',
      desc: 'Rapid transition from system concept to functioning multi-agent prototype with automated testing and evaluation.',
      metric: '0 to MVP in < 24h'
    },
    {
      title: 'Multi-Agent Architectures',
      desc: 'Orchestrating agent collaboration topologies (Claude Platform + Python) that handle decomposition and parallel tool execution.',
      metric: '100% Agentic'
    },
    {
      title: 'Low-Latency Edge Deployment',
      desc: 'Quantizing models with TensorRT/ONNX for immediate inference on resource-constrained embedded devices.',
      metric: '< 30ms Edge'
    },
    {
      title: 'Technical Pitch Synthesis',
      desc: 'Articulating complex AI system trade-offs with clarity for judges, enterprise partners, and venture investors.',
      metric: 'Award-Winning'
    }
  ];

  return (
    <section id="innovation" className="py-24 relative bg-white dark:bg-[#020205] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Community Leadership & Hackathons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Innovation Leadership & iGen
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Active community organizer, emerging tech speaker, and collaborative sprint builder fostering next-generation student engineers.
          </p>
        </div>

        {/* iGen Organization Spotlight */}
        <div className="p-8 rounded-2xl bg-white/90 dark:bg-[#0A0A10]/70 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl mb-16 backdrop-blur-xl relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-500" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-white/5">
            <div>
              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold mb-1">
                Official Student Community
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                {INVOLVEMENT.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                {INVOLVEMENT.description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30">
                Active Member
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {INVOLVEMENT.pillars.map((pillar) => (
              <div key={pillar.title} className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Readiness Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              Hackathon Readiness Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathonStrengths.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/90 dark:bg-[#0A0A10]/70 border border-slate-200/80 dark:border-white/10 hover:border-purple-400/80 dark:hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between shadow-md shadow-slate-200/40 dark:shadow-xl"
              >
                <div>
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold mb-1">
                    {item.metric}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/80 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-300">
                  Sprint Competency: Ready
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
