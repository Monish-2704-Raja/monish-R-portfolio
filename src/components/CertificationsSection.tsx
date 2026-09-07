import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Sparkles, ExternalLink, Terminal } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 relative bg-white dark:bg-[#020205] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20 mb-3">
            <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Anthropic Certified Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Official Anthropic Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Complete suite of verified Anthropic credentials demonstrating deep technical fluency in Claude models, API platforms, agentic coding workflows, and collaborative cowork.
          </p>
        </div>

        {/* 4x Anthropic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert.id === selectedCert ? null : cert.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer backdrop-blur-xl ${
                selectedCert === cert.id
                  ? 'bg-purple-50/80 border-purple-400 dark:bg-purple-950/20 dark:border-purple-500/60 shadow-xl shadow-purple-200/50 dark:shadow-purple-900/20'
                  : 'bg-white/90 dark:bg-[#0A0A10]/70 border-slate-200/80 dark:border-white/10 hover:border-purple-400/80 hover:bg-slate-50/80 dark:hover:bg-[#0E0F18]/90 shadow-md shadow-slate-200/40 dark:shadow-xl'
              }`}
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                    Verified
                  </span>
                </div>

                <div className="text-xs font-mono text-purple-600 dark:text-purple-300 font-semibold mb-1">{cert.issuer}</div>
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-300 mb-2">Core Competencies:</div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Architecture Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white/90 dark:bg-[#0A0A10]/70 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500" />
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono text-purple-600 dark:text-purple-300 uppercase tracking-wider font-semibold">
              Anthropic Platform Fluency
            </div>
            <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
              Trained on Constitutional AI, Agent Tool Use, and Enterprise Context Windows
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl">
              Monish has verified mastery across Claude 3.5 Sonnet / Haiku integration, prompt caching strategies, system prompt guardrails, and programmatic agent loops.
            </p>
          </div>
          <div className="shrink-0">
            <div className="px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 font-mono text-xs text-center font-semibold">
              Verified Credential Tier: Top 1%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
