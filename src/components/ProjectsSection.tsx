import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowRight, Layers, CheckCircle2, Cpu, ExternalLink, Activity } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'agent' | 'edge'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'agent') return p.id === 'ai-productivity';
    if (filter === 'edge') return p.id === 'roadguard-ai';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#020205] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Research & Implementations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Featured AI Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Deep dive into production architectures: Multi-Agent LLM pipelines and privacy-preserving Edge Computer Vision.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setFilter('agent')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'agent' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Multi-Agent LLMs
            </button>
            <button
              onClick={() => setFilter('edge')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'edge' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Edge AI Vision
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0A0A10]/70 border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group transition-all duration-300 backdrop-blur-xl shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Subtle top gradient on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-purple-500/0 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-indigo-500 transition-all duration-500" />
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Verified Architecture
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm font-medium mb-4 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Highlights List from Resume */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Impact Metrics Mini-Grid */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                  {project.impactMetrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-base sm:text-lg font-display font-extrabold text-blue-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Action Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer shadow-md"
                >
                  <span>Inspect Case Study & Interactive Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
