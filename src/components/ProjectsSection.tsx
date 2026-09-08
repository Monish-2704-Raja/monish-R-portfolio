import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  Sparkles,
  ArrowRight,
  Cpu,
  Layers,
  CheckCircle2,
  Play,
  Zap,
  Activity,
  ShieldCheck,
  Workflow,
  Radio
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const pinWrapperRef = useRef<HTMLDivElement | null>(null);

  const currentProject = PROJECTS[activeProjectIndex];

  // GSAP ScrollTrigger pinning for the project section
  useEffect(() => {
    const el = sectionRef.current;
    const pinEl = pinWrapperRef.current;
    if (!el || !pinEl) return;

    // Only apply heavy pinning on larger screens for optimal ergonomics
    if (window.innerWidth >= 1024) {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top top+=64',
        end: '+=1200',
        pin: pinEl,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          // Switch active project midway through pin scroll
          if (self.progress > 0.52) {
            setActiveProjectIndex(1);
          } else {
            setActiveProjectIndex(0);
          }
          // Progress stages based on scroll progress
          const stage = Math.min(3, Math.floor(self.progress * 4));
          setActiveStageIndex(stage);
        },
      });

      return () => {
        trigger.kill();
      };
    }
  }, []);

  // Simulating animation state
  const handleTriggerSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setActiveStageIndex(step % 4);
      if (step >= 4) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 700);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-white dark:bg-[#020205] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 min-h-screen py-16 sm:py-24"
    >
      <div ref={pinWrapperRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span>Scroll-Driven Architecture Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Flagship AI Systems
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Deep architectural analysis of Monish&apos;s verified AI implementations: Self-Attention Agent Orchestration and Real-Time Edge Accident Prevention.
            </p>
          </div>

          {/* System Switcher Tabs */}
          <div className="flex p-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl gap-2 self-start sm:self-auto backdrop-blur-md">
            {PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveProjectIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer ${
                  activeProjectIndex === idx
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>SYS.0{idx + 1}</span>
                <span className="hidden sm:inline font-sans font-semibold text-xs">
                  {proj.id === 'ai-productivity' ? 'Multi-Agent LLM' : 'Edge RoadGuard AI'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Master Pinned Interactive Stage */}
        <div className="bg-white/95 dark:bg-[#0A0A10]/80 border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-slate-300/40 dark:shadow-black/70 overflow-hidden relative">
          {/* Top Edge Gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-500" />

          {/* Stage Controls & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                {currentProject.category}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 text-emerald-500 animate-ping" />
                Pipeline Active
              </span>
            </div>

            {/* Architecture Assembly Stepper */}
            <div className="flex items-center gap-1 sm:gap-2">
              {['01 Context', '02 Topology', '03 Verification', '04 Metrics'].map((stage, idx) => (
                <button
                  key={stage}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                    activeStageIndex === idx
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>

          {/* Core Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
            {/* Left Column: Project Identity, Highlights, Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {currentProject.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Technical Resume Bullets */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Engineering Highlights
                </div>
                {currentProject.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-3 rounded-xl border border-slate-200/70 dark:border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Real-World Verified Metrics Counter Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-500/20">
                {currentProject.impactMetrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-display font-black text-blue-600 dark:text-blue-400">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-600 dark:text-slate-300 font-mono mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deep Case Study Modal CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(currentProject)}
                  className="flex-1 py-3 px-5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25"
                >
                  <span>Open Full Architecture Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleTriggerSimulation}
                  disabled={isSimulating}
                  className="py-3 px-4 rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>Simulate Flow</span>
                </button>
              </div>
            </div>

            {/* Right Column: Dynamic Architectural Node Diagram Canvas */}
            <div className="lg:col-span-7 bg-slate-50/90 dark:bg-[#06060c] border border-slate-200/90 dark:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[440px]">
              {/* Circuit Grid Backdrop */}
              <div
                className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Topology Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">
                  <Workflow className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{currentProject.architecture.overview}</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  ONLINE
                </div>
              </div>

              {/* Interactive Node Assembly Flow */}
              <div className="relative z-10 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProject.architecture.nodes.map((node, i) => {
                  const isNodeActive = activeStageIndex >= i;
                  return (
                    <div
                      key={node.name}
                      className={`p-4 rounded-xl border transition-all duration-300 relative group ${
                        isNodeActive
                          ? 'bg-white dark:bg-[#0c0f16] border-blue-500/60 shadow-lg shadow-blue-500/10'
                          : 'bg-white/40 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/5 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">
                          NODE 0{i + 1} // {node.type}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isNodeActive ? 'bg-blue-500 animate-ping' : 'bg-slate-300 dark:bg-slate-700'
                          }`}
                        />
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {node.name}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Tech Stack Visual Connections */}
              <div className="relative z-10 pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Technology Vector
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-white/[0.04] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
