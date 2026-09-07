import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, Compass, HeartHandshake, Sparkles, Terminal, BookOpen, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'education' | 'philosophy' | 'roadmap'>('narrative');

  return (
    <section id="about" className="py-24 relative bg-white dark:bg-[#020205] border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-colors duration-300">
      {/* Background glow matching Immersive UI */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-sky-400/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none transition-colors duration-300" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Profile & Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            About Monish R
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mt-3">
            Computer Science Engineering undergraduate at R.M.K. Engineering College specializing in Generative AI, multi-agent frameworks, and civic technology.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-xl backdrop-blur-md overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('narrative')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'narrative'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Vision & Leadership
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Academic Rigor (8.6 CGPA)
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'philosophy'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI For Social Good
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Milestone Roadmap
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white/90 dark:bg-[#0A0A10]/70 border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-500 dark:to-purple-500" />
          {activeTab === 'narrative' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  Bridging Frontier Foundation Models with Tangible Civic Impact
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {PERSONAL_INFO.bio}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  Rather than treating AI as a mere toy or chat interface, I design deterministic prompt-engineering pipelines, multi-agent topologies, and privacy-preserving Edge vision models that solve high-stakes challenges in municipal safety and software engineering learning curves.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.06]">
                    <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">Community Lead</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">iGen Official Member</div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Directing emerging tech forums and student innovation pods.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.06]">
                    <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold">Anthropic Verified</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">4x Certified Specialist</div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Platform, Code, Cowork, and Constitutional AI.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="p-5 rounded-xl bg-blue-50/80 dark:bg-gradient-to-br dark:from-blue-950/40 dark:to-slate-900 border border-blue-200/80 dark:border-blue-500/20 shadow-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-mono text-blue-700 dark:text-blue-300 uppercase tracking-wider font-semibold">Engineering Principles</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>Multi-Agent Task Decomposition over monolithic prompts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>Zero-Telemetry Edge Anonymization for civic camera feeds.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>Empirical LLM benchmark evaluations across code tasks.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">Direct Contact Vector</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white font-mono">{PERSONAL_INFO.email}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.education.institution}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-300 font-medium mt-0.5">
                      {PERSONAL_INFO.education.degree}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Expected Graduation: {PERSONAL_INFO.education.gradYear} • Full-time Undergraduate Degree
                    </p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <div className="text-3xl font-display font-extrabold text-emerald-600 dark:text-emerald-400">
                    {PERSONAL_INFO.education.cgpa}
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Cumulative GPA</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-1 font-semibold">Algorithmic Foundations</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Data structures, object-oriented design in Java/C++, time complexity proofs, and discrete systems.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400 mb-1 font-semibold">AI & Machine Learning</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Mathematical probability, vector linear algebra, deep neural architectures, and transformer attention.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1 font-semibold">Software Systems</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Operating system processes, relational database SQL normalization, and distributed network architectures.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'philosophy' && (
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
                  Engineering Ethical AI for Human Welfare
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  My primary motivation in computer science is deploying artificial intelligence where it preserves human lives and democratizes access to technical knowledge.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 mb-2">
                    <HeartHandshake className="w-5 h-5" />
                    <span className="font-semibold text-sm text-slate-900 dark:text-white">Civic & Road Safety (RoadGuard AI)</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Every year hundreds of thousands of avoidable collisions occur at poorly signaled intersections. By researching on-device edge detection of near-misses without uploading raw facial footage, we preserve civil liberties while offering traffic engineers actionable intervention telemetry.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400 mb-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-semibold text-sm text-slate-900 dark:text-white">Education Accessibility (AI Productivity)</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Complex engineering concepts often present a formidable barrier to new students. My AI Productivity pipelines provide personalized, verifiable step-by-step reasoning that adapt to any learner’s mental model, accelerating learning throughput by over 60%.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">Long-term Strategic Vision (2024 - 2029)</div>
              <div className="relative border-l-2 border-blue-500/30 pl-6 space-y-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-500/20" />
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">Current • 2024 - 2025</div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">Undergraduate AI Research & Anthropic Certification</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Completed 4x Anthropic credentials; published RoadGuard AI near-miss edge concepts and multi-agent productivity architectures. Leading iGen student innovation initiatives.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-slate-200 dark:ring-slate-800" />
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold">Upcoming • 2026 - 2027</div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">Scalable Agentic Software Engineering & Hackathon Leadership</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Building production-grade autonomous agent frameworks, publishing open-source evaluation benchmarks, and competing in global frontier AI hackathons.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-slate-200 dark:ring-slate-800" />
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Target • 2028 - 2029</div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">Founding AI-First Innovations & Applied Research Lab</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Graduating B.E. CSE from R.M.K. Engineering College; transitioning flagship research prototypes into commercial multi-agent platforms and smart city deployments.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
