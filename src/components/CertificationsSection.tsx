import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Sparkles, ExternalLink, Terminal } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Anthropic Certified Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Official Anthropic Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Complete suite of verified Anthropic credentials demonstrating deep technical fluency in Claude models, API platforms, agentic coding workflows, and collaborative cowork.
          </p>
        </div>

        {/* 4x Anthropic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert.id === selectedCert ? null : cert.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedCert === cert.id
                  ? 'bg-purple-950/30 border-purple-500/60 shadow-xl shadow-purple-900/20'
                  : 'bg-slate-900/40 border-white/[0.08] hover:border-purple-500/30 hover:bg-slate-900/70'
              }`}
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verified
                  </span>
                </div>

                <div className="text-xs font-mono text-purple-300 mb-1">{cert.issuer}</div>
                <h3 className="text-lg font-display font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-slate-300 mb-2">Core Competencies:</div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
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
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/20 via-slate-900/60 to-blue-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono text-purple-300 uppercase tracking-wider">
              Anthropic Platform Fluency
            </div>
            <h4 className="text-lg font-display font-bold text-white">
              Trained on Constitutional AI, Agent Tool Use, and Enterprise Context Windows
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl">
              Monish has verified mastery across Claude 3.5 Sonnet / Haiku integration, prompt caching strategies, system prompt guardrails, and programmatic agent loops.
            </p>
          </div>
          <div className="shrink-0">
            <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs text-center">
              Verified Credential Tier: Top 1%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
