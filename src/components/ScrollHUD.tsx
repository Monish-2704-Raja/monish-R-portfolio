import React, { useState, useEffect } from 'react';
import { useScroll, STORY_CHAPTERS } from '../context/ScrollContext';
import {
  Compass,
  ChevronUp,
  ChevronDown,
  Activity,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  Radio,
  Eye,
  Zap
} from 'lucide-react';

export const ScrollHUD: React.FC = () => {
  const {
    scrollProgress,
    scrollVelocity,
    currentSection,
    activeChapterIndex,
    sectionProgressMap,
    scrollTo,
  } = useScroll();

  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredChapterId, setHoveredChapterId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeChapter = STORY_CHAPTERS[activeChapterIndex] || STORY_CHAPTERS[0];
  const activeSectionProg = sectionProgressMap[activeChapter.id] ?? 0;
  const activeSectionPercent = Math.min(100, Math.max(0, Math.round(activeSectionProg * 100)));
  const totalPercent = Math.min(100, Math.max(0, Math.round(scrollProgress * 100)));
  const absVelocity = Math.abs(Math.round(scrollVelocity * 10));
  const isHighVelocity = absVelocity > 35;

  return (
    <>
      {/* =========================================================================
          1. TOP GSAP-DRIVEN MULTI-SEGMENT SECTION PROGRESS BAR (STORYLINE RAIL)
          ========================================================================= */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-auto bg-slate-900/40 dark:bg-black/60 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center gap-1.5 sm:gap-2 h-2.5 sm:h-3">
          {STORY_CHAPTERS.map((ch, idx) => {
            const isPast = idx < activeChapterIndex;
            const isCurrent = idx === activeChapterIndex;
            const prog = isPast ? 1 : isCurrent ? activeSectionProg : 0;
            const percent = Math.round(prog * 100);

            return (
              <div
                key={ch.id}
                onMouseEnter={() => setHoveredChapterId(ch.id)}
                onMouseLeave={() => setHoveredChapterId(null)}
                onClick={() => scrollTo(ch.id)}
                className="relative flex-1 h-1 sm:h-1.5 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/60 dark:hover:bg-white/20 rounded-full overflow-hidden cursor-pointer transition-colors group"
                title={`${ch.chapter} ${ch.title} (${percent}%)`}
              >
                {/* Dynamic Fill Bar driven by GSAP Timeline State */}
                <div
                  className={`h-full rounded-full transition-all duration-75 ease-out ${
                    isCurrent
                      ? 'bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 shadow-[0_0_8px_rgba(56,189,248,0.9)]'
                      : isPast
                      ? 'bg-blue-600/70 dark:bg-blue-500/60'
                      : 'bg-transparent'
                  }`}
                  style={{ width: `${percent}%` }}
                />

                {/* Pulsing spark head at active frontier */}
                {isCurrent && percent > 2 && percent < 98 && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#38bdf8] pointer-events-none"
                    style={{ left: `${percent}%` }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Hovered Chapter Context Tooltip (Floating beneath top progress rail) */}
        {hoveredChapterId && (
          <div className="hidden sm:flex absolute top-4 left-1/2 -translate-x-1/2 items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/95 text-white border border-white/15 text-xs font-mono shadow-2xl backdrop-blur-xl animate-in fade-in duration-150">
            {(() => {
              const ch = STORY_CHAPTERS.find((c) => c.id === hoveredChapterId);
              if (!ch) return null;
              const chIdx = STORY_CHAPTERS.findIndex((c) => c.id === hoveredChapterId);
              const isPast = chIdx < activeChapterIndex;
              const isCurr = chIdx === activeChapterIndex;
              const prog = isPast ? 100 : isCurr ? activeSectionPercent : 0;

              return (
                <>
                  <span className="text-blue-400 font-bold">CH.{ch.chapter}</span>
                  <span className="font-sans font-semibold text-slate-200">{ch.title}</span>
                  <span className="text-slate-400 text-[11px]">&mdash; {ch.subtitle}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 font-bold">
                    {prog}%
                  </span>
                  <span className="text-[10px] text-slate-400">&larr; click to jump</span>
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* =========================================================================
          2. RIGHT-SIDE DISCREET STORYTELLING SPINE (DESKTOP VIEWPORT)
          ========================================================================= */}
      <div className="hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 select-none pointer-events-auto">
        <div className="p-2 rounded-full bg-white/80 dark:bg-[#080810]/80 border border-slate-200/80 dark:border-white/10 shadow-xl backdrop-blur-xl flex flex-col items-center gap-2.5">
          {STORY_CHAPTERS.map((ch, idx) => {
            const isPast = idx < activeChapterIndex;
            const isCurrent = idx === activeChapterIndex;
            const prog = isPast ? 100 : isCurrent ? activeSectionPercent : 0;

            return (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className="relative group flex items-center justify-center cursor-pointer p-1"
                aria-label={`Jump to Chapter ${ch.chapter}: ${ch.title}`}
              >
                {/* Node Pill / Dot */}
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isCurrent
                      ? 'w-3 h-5 bg-blue-600 dark:bg-blue-500 ring-2 ring-blue-400/40 shadow-lg shadow-blue-500/40'
                      : isPast
                      ? 'w-2 h-2 bg-slate-400 dark:bg-slate-600 hover:bg-blue-400'
                      : 'w-2 h-2 bg-slate-200 dark:bg-white/15 hover:bg-slate-400'
                  }`}
                />

                {/* Hover Flyout Tooltip to Left */}
                <div className="absolute right-8 px-3 py-1.5 rounded-xl bg-slate-900/95 dark:bg-[#0E0F18] border border-white/15 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-2xl flex items-center gap-2 translate-x-2 group-hover:translate-x-0">
                  <span className="text-blue-400 font-bold">CH.{ch.chapter}</span>
                  <span className="font-sans font-semibold">{ch.title}</span>
                  <span className="text-slate-400 text-[10px]">({prog}%)</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          3. FLOATING INTERACTIVE STORYLINE HUD (BOTTOM-LEFT DOCKED)
          ========================================================================= */}
      <div className="fixed bottom-6 left-6 z-40 font-mono select-none">
        <div
          className={`backdrop-blur-xl border transition-all duration-300 rounded-2xl shadow-2xl overflow-hidden ${
            isHighVelocity
              ? 'border-blue-500/80 shadow-blue-500/25 ring-1 ring-blue-500/50'
              : 'border-slate-200/90 dark:border-white/10 shadow-slate-900/10 dark:shadow-black/70'
          } ${
            isExpanded
              ? 'w-80 sm:w-96 bg-white/98 dark:bg-[#0A0A12]/98 p-4'
              : 'w-auto bg-white/90 dark:bg-[#08080E]/90 p-2 sm:px-3.5 sm:py-2.5'
          }`}
        >
          {/* Main Collapsed Control Bar */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-left cursor-pointer group"
              title="Toggle Storytelling Flow Telemetry"
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                  isHighVelocity
                    ? 'bg-blue-600 text-white animate-pulse'
                    : 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                }`}
              >
                <Compass className={`w-4 h-4 ${isHighVelocity ? 'animate-spin' : ''}`} />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                  <span className="text-blue-600 dark:text-blue-400">CH.{activeChapter.chapter} / 08</span>
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  <span>SECTION: {activeSectionPercent}%</span>
                </div>
                <div className="text-xs font-display font-semibold text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-[200px]">
                  {activeChapter.title}
                </div>
              </div>
            </button>

            {/* Quick Next/Prev Section Buttons */}
            <div className="flex items-center gap-1">
              <button
                disabled={activeChapterIndex === 0}
                onClick={() => {
                  const prev = STORY_CHAPTERS[activeChapterIndex - 1];
                  if (prev) scrollTo(prev.id);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                aria-label="Previous story chapter"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
              <button
                disabled={activeChapterIndex === STORY_CHAPTERS.length - 1}
                onClick={() => {
                  const next = STORY_CHAPTERS[activeChapterIndex + 1];
                  if (next) scrollTo(next.id);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                aria-label="Next story chapter"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Expanded Storytelling Telemetry & Section Timeline Drawer */}
          {isExpanded && (
            <div className="mt-4 pt-3.5 border-t border-slate-200/80 dark:border-white/10 space-y-3.5">
              {/* Active Section Timeline Scrub State */}
              <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-blue-600 dark:text-blue-400 animate-ping" />
                    Story Flow State
                  </span>
                  <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">
                    {activeSectionPercent}% in CH.{activeChapter.chapter}
                  </span>
                </div>

                {/* Sub-Timeline Progress Bar */}
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-500 dark:to-indigo-400 rounded-full transition-all duration-75"
                    style={{ width: `${activeSectionPercent}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="truncate">{activeChapter.subtitle}</span>
                  <span className="shrink-0 font-bold text-slate-700 dark:text-slate-300">
                    Global: {totalPercent}%
                  </span>
                </div>
              </div>

              {/* Scroll Velocity & Warp Speedometer */}
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-600 dark:text-slate-400">Scroll Velocity:</span>
                </div>
                <div className="font-bold flex items-center gap-1.5 font-mono">
                  <span
                    className={
                      isHighVelocity
                        ? 'text-rose-500 font-extrabold animate-pulse'
                        : 'text-slate-900 dark:text-slate-200'
                    }
                  >
                    {absVelocity} px/s
                  </span>
                  {isHighVelocity && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-rose-500/10 text-rose-500 uppercase tracking-tighter font-bold">
                      WARP
                    </span>
                  )}
                </div>
              </div>

              {/* All 8 Chapters Flow Directory */}
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                {STORY_CHAPTERS.map((ch, idx) => {
                  const isPast = idx < activeChapterIndex;
                  const isCurr = idx === activeChapterIndex;
                  const prog = isPast ? 100 : isCurr ? activeSectionPercent : 0;

                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        scrollTo(ch.id);
                        if (isMobile) setIsExpanded(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-xs transition-all cursor-pointer ${
                        isCurr
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[10px] font-mono opacity-80">CH.{ch.chapter}</span>
                        <span className="truncate">{ch.title}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`text-[10px] font-mono ${
                            isCurr ? 'text-white' : 'text-slate-400'
                          }`}
                        >
                          {prog}%
                        </span>
                        {isPast ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                        ) : isCurr ? (
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="flex justify-between items-center pt-1 text-[10px] text-slate-400 dark:text-slate-500">
                <button
                  onClick={() => {
                    scrollTo('hero', { immediate: false });
                    setIsExpanded(false);
                  }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                >
                  &uarr; Return to Intelligence Core
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Collapse HUD
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
