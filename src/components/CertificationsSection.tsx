import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Sparkles, ChevronRight, Lock, Unlock, Zap } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const activeCert = CERTIFICATIONS[activeCertIndex] || CERTIFICATIONS[0];

  return (
    <section
      id="certifications"
      className="py-24 relative bg-white dark:bg-[#020205] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20 mb-3">
            <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span>Anthropic Certified Specialist Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Chronological Credential Pathway
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            A verified 4-stage progression across Anthropic foundation architectures, constitutional prompt engineering, agentic terminal tooling, and enterprise cowork systems.
          </p>
        </div>

        {/* Dynamic Horizontal Progression Pathway */}
        <div className="relative mb-14">
          {/* Connecting Laser Pathway Track */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-slate-200 dark:bg-white/10 z-0">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(168,85,247,0.7)]"
              style={{ width: `${(activeCertIndex / (CERTIFICATIONS.length - 1)) * 100}%` }}
            />
          </div>

          {/* 4 Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {CERTIFICATIONS.map((cert, idx) => {
              const isPassed = idx <= activeCertIndex;
              const isCurrent = idx === activeCertIndex;

              return (
                <button
                  key={cert.id}
                  onClick={() => setActiveCertIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer backdrop-blur-xl relative overflow-hidden group ${
                    isCurrent
                      ? 'bg-purple-50/90 border-purple-500 dark:bg-purple-950/40 dark:border-purple-400 shadow-xl shadow-purple-500/15 scale-102 ring-2 ring-purple-500/30'
                      : isPassed
                      ? 'bg-white/90 dark:bg-[#0A0A12]/80 border-slate-200 dark:border-white/10 hover:border-purple-300'
                      : 'bg-white/60 dark:bg-[#06060c]/60 border-slate-200/60 dark:border-white/5 opacity-70'
                  }`}
                >
                  {/* Subtle Light Sweep effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400">
                      MILESTONE 0{idx + 1}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        isCurrent
                          ? 'bg-purple-600 text-white animate-bounce'
                          : isPassed
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isPassed ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white line-clamp-1 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {cert.issuerBadge}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Spotlight Stage Card */}
        <div className="bg-white/90 dark:bg-[#0A0A12]/80 border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          {/* Top border glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Certificate Emblem & Verification Stamp */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-500/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-4 shadow-xl shadow-purple-600/30">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300">
                ANTHROPIC CREDENTIAL ID
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                ANT-2024-MONISH-{activeCert.id.toUpperCase()}
              </div>
              <div className="mt-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                VERIFIED AUTHENTIC
              </div>
            </div>

            {/* Right: Detailed Competencies and Architectural Scope */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">
                  Stage {activeCertIndex + 1} of 4 — {activeCert.issuer}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  {activeCert.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                  {activeCert.description}
                </p>
              </div>

              {/* Skills Verified */}
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Verified Engineering Mastery
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeCert.skillsCovered.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Milestone Step Action */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() =>
                    setActiveCertIndex((prev) => (prev + 1) % CERTIFICATIONS.length)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-purple-600 hover:bg-purple-500 text-white transition-all cursor-pointer shadow-md shadow-purple-600/25"
                >
                  <span>Advance to Next Milestone</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  Step {activeCertIndex + 1} of 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
