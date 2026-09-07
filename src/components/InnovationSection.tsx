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
    <section id="innovation" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Community Leadership & Hackathons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Innovation Leadership & iGen
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Active community organizer, emerging tech speaker, and collaborative sprint builder fostering next-generation student engineers.
          </p>
        </div>

        {/* iGen Organization Spotlight */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d121c] to-blue-950/30 border border-blue-500/20 shadow-xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                Official Student Community
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                {INVOLVEMENT.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {INVOLVEMENT.description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                Active Member
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {INVOLVEMENT.pillars.map((pillar) => (
              <div key={pillar.title} className="p-4 rounded-xl bg-black/30 border border-white/[0.06]">
                <h4 className="text-sm font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Readiness Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl font-display font-bold text-white">
              Hackathon Readiness Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathonStrengths.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-slate-900/50 border border-white/[0.08] hover:border-purple-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-purple-400 mb-1">
                    {item.metric}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-300">
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
