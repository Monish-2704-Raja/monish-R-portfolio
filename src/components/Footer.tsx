import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Bot, ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Activity } from 'lucide-react';

interface FooterProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAI, onOpenResume }) => {
  const [telemetry, setTelemetry] = useState({
    activeViewers: 18,
    totalVisitors: 1428,
  });

  useEffect(() => {
    fetch('/api/analytics')
      .then((res) => res.json())
      .then((data) => {
        if (data.activeViewers) {
          setTelemetry({
            activeViewers: data.activeViewers,
            totalVisitors: data.totalVisitors,
          });
        }
      })
      .catch(() => {});
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020205] border-t border-white/5 pt-14 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
              M
            </div>
            <div>
              <div className="font-display font-semibold text-white text-base">
                Monish R.
              </div>
              <p className="text-xs text-slate-400">
                AI Engineer • Agent Architect • B.E. CSE @ R.M.K. (8.6 CGPA)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAI}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 cursor-pointer transition-colors"
            >
              <Bot className="w-4 h-4 text-blue-400" />
              <span>Ask Monish AI</span>
            </button>
            <button
              onClick={onOpenResume}
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Resume / CV
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Telemetry Bar & Core Stack */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5">
          {/* Core Stack Bar matching Immersive UI Design */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold font-mono">
              Core Stack
            </span>
            <div className="flex flex-wrap gap-3 sm:gap-4 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xs font-mono text-slate-300">REACT 19</span>
              <span className="text-xs font-mono text-slate-300">THREE.JS</span>
              <span className="text-xs font-mono text-slate-300">PYTHON</span>
              <span className="text-xs font-mono text-slate-300">CLAUDE API</span>
              <span className="text-xs font-mono text-slate-300">EDGE AI</span>
            </div>
          </div>

          {/* Active Viewers Counter */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300">
              {telemetry.activeViewers} Active System Viewers
            </span>
          </div>
        </div>

        {/* Bottom Tier matching Design */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Monish R. All Rights Reserved. Built with precision for the global AI ecosystem.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
