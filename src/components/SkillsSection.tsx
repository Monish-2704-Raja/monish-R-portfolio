import React, { useState } from 'react';
import { SKILL_CATEGORIES, AREAS_OF_INTEREST } from '../data/portfolioData';
import { Cpu, Code2, Wrench, Sparkles, Network, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 relative bg-[#08090d] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Fluency & Cognitive Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Engineering & AI Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Grounded in rigorous Computer Science foundations: algorithm optimization, multi-agent reasoning, low-latency Edge AI, and foundation model orchestration.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 bg-slate-900 border border-white/[0.08] rounded-xl gap-1">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategoryIndex === idx
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Progress Grid */}
        <div className="bg-slate-900/40 border border-white/[0.08] rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-xl mb-16">
          <div className="mb-6">
            <h3 className="text-xl font-display font-bold text-white">
              {activeCategory.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(skill.name)}
                className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06] hover:border-blue-500/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Interest Grid from Resume */}
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-6">
            <Network className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-display font-bold text-white">
              Key Areas of Research & Engineering Passion
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {AREAS_OF_INTEREST.map((area) => (
              <div
                key={area.name}
                className="p-4 rounded-xl bg-slate-900/30 border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="text-xs font-bold text-white mb-1">{area.name}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
