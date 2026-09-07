import React, { useState, useEffect } from 'react';
import { HeroScene3D } from './HeroScene3D';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Bot, ArrowRight, FileDown, Sparkles, Terminal, ShieldCheck, Award, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAI, onOpenResume }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTagline) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTagline.substring(0, displayText.length - 1)
            : currentTagline.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#020205]">
      {/* 3D Three.js Interactive Canvas Background */}
      <HeroScene3D />

      {/* Decorative Radial Lighting matching Immersive UI */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Vision & Primary Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Capsule matching Design */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Available for Innovation</span>
            </div>

            {/* Immersive Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter text-white mb-6">
              Architecting the <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Intelligence Layer.
              </span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div className="h-8 flex items-center mb-4">
              <span className="text-sm sm:text-base font-mono text-blue-300">
                &gt; {displayText}
                <span className="inline-block w-1.5 h-4 bg-blue-400 ml-1.5 animate-pulse align-middle" />
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed mb-8">
              AI Engineer specializing in Generative AI, Multi-agent architectures, and Edge AI. Building systems that learn, reason, and scale.
            </p>

            {/* Actions matching Immersive UI Design */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={scrollToProjects}
                id="hero-explore-btn"
                className="px-7 py-3.5 bg-white text-black font-bold text-sm rounded-xl hover:bg-blue-50 transition-all cursor-pointer shadow-lg shadow-white/10"
              >
                Explore Projects
              </button>
              <button
                onClick={onOpenAI}
                id="hero-read-research-btn"
                className="px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Launch Ask Monish AI</span>
              </button>
              <button
                onClick={onOpenResume}
                id="hero-resume-pill"
                className="px-4 py-3 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Download CV &rarr;
              </button>
            </div>

            {/* Metrics Row from Design */}
            <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  8.6<span className="text-blue-500 text-xl font-normal">/10</span>
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-widest mt-1 font-mono">
                  GPA Academic
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  04<span className="text-purple-500 text-xl font-normal">+</span>
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-widest mt-1 font-mono">
                  Anthropic Certs
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  iGen
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-widest mt-1 font-mono">
                  Innovation Lead
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Immersive Interactive Assistant Card */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-md bg-[#0A0A10]/75 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-md shadow-blue-500/20">
                    <div className="w-full h-full rounded-full bg-[#0A0A10] flex items-center justify-center">
                      <Bot className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white">Ask Monish AI</h3>
                    <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full animate-ping"></span>
                      <span>Online & Learning</span>
                    </p>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/5 text-slate-400 border border-white/5">
                  v2.5 Flash
                </span>
              </div>

              {/* Sample / Live Chat Stream Preview */}
              <div className="space-y-3 mb-5 max-h-[220px] overflow-y-auto">
                <div className="bg-white/5 rounded-xl p-3 text-xs leading-relaxed text-slate-300 max-w-[90%]">
                  Hello! I&apos;m an AI agent trained on Monish&apos;s professional history. How can I help you today?
                </div>
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-3 text-xs leading-relaxed text-blue-200 max-w-[85%] ml-auto">
                  Tell me about RoadGuard AI.
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-xs leading-relaxed text-slate-300 max-w-[95%]">
                  RoadGuard AI is an Edge AI system Monish researched for intelligent traffic-risk monitoring. It detects near-miss incidents while preserving privacy in smart-city deployments.
                </div>
              </div>

              {/* Interactive Input trigger that launches the modal or starts conversation */}
              <div
                onClick={onOpenAI}
                className="relative cursor-pointer group"
              >
                <div className="w-full bg-white/5 hover:bg-white/[0.08] border border-white/10 group-hover:border-blue-500/40 rounded-xl px-4 py-3 text-xs text-slate-400 flex items-center justify-between transition-colors">
                  <span>Ask about Monish&apos;s AI expertise...</span>
                  <div className="p-1.5 bg-blue-600 group-hover:bg-blue-500 text-white rounded-lg transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Quick Prompt Chips */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={onOpenAI}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-400 border border-white/5 hover:border-blue-500/30 hover:text-white cursor-pointer transition-colors"
                >
                  Stack?
                </button>
                <button
                  onClick={onOpenAI}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-400 border border-white/5 hover:border-blue-500/30 hover:text-white cursor-pointer transition-colors"
                >
                  Certs?
                </button>
                <button
                  onClick={onOpenAI}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-400 border border-white/5 hover:border-blue-500/30 hover:text-white cursor-pointer transition-colors"
                >
                  Hackathons?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
