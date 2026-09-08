import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  chapter: string;
}

export const STORY_CHAPTERS: StoryChapter[] = [
  { id: 'hero', title: 'Intelligence Core', subtitle: 'Vision & AI Foundations', chapter: '01' },
  { id: 'about', title: 'Philosophy & Track Record', subtitle: 'Academic Rigor & Social Good', chapter: '02' },
  { id: 'projects', title: 'Flagship AI Systems', subtitle: 'Multi-Agent & Edge CV Pipelines', chapter: '03' },
  { id: 'certifications', title: 'Anthropic Mastery', subtitle: '4x Verified Claude Specialist', chapter: '04' },
  { id: 'skills', title: 'Cognitive Constellation', subtitle: 'Interactive Technology Galaxy', chapter: '05' },
  { id: 'innovation', title: 'Architecture Matrix', subtitle: 'Leadership & Hackathon Velocity', chapter: '06' },
  { id: 'ai-lab', title: 'Neural Sandbox Lab', subtitle: 'Interactive Evaluation & Tools', chapter: '07' },
  { id: 'contact', title: 'Transmission Link', subtitle: 'Direct Direct Channel & Roles', chapter: '08' },
];

interface ScrollContextType {
  lenis: Lenis | null;
  scrollProgress: number; // 0 to 1 global
  scrollVelocity: number;
  currentSection: string;
  activeChapterIndex: number;
  sectionProgressMap: Record<string, number>; // id -> 0 to 1
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number; immediate?: boolean }) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollProgress: 0,
  scrollVelocity: 0,
  currentSection: 'hero',
  activeChapterIndex: 0,
  sectionProgressMap: {},
  scrollTo: () => {},
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [sectionProgressMap, setSectionProgressMap] = useState<Record<string, number>>({});

  const lenisRef = useRef<Lenis | null>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Initialize Lenis for silky smooth 60fps scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', (e: { progress: number; velocity: number; scroll: number }) => {
      ScrollTrigger.update();
      setScrollProgress(e.progress);
      setScrollVelocity(e.velocity);
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Build dedicated GSAP ScrollTrigger timelines for every section
    const progressAccumulator: Record<string, number> = {};

    STORY_CHAPTERS.forEach((ch, idx) => {
      const el = document.getElementById(ch.id);
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          // Normalize section progress where:
          // 0 when section top enters bottom of viewport
          // 1 when section bottom leaves top of viewport
          // Also calculate in-view progress (top of section hitting top of viewport to bottom)
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // inViewProgress: 0 when top is at top of screen, 1 when bottom is at top of screen
          const totalDistance = rect.height;
          const currentPos = -rect.top;
          const clamped = Math.max(0, Math.min(1, currentPos / (totalDistance || 1)));

          progressAccumulator[ch.id] = clamped;
          setSectionProgressMap((prev) => ({ ...prev, [ch.id]: clamped }));

          // Active detection based on most prominent section
          if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.2) {
            setCurrentSection(ch.id);
            setActiveChapterIndex(idx);
          }
        },
      });

      triggersRef.current.push(trigger);
    });

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; immediate?: boolean }) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: options?.offset ?? -70,
        immediate: options?.immediate ?? false,
      });
    } else {
      if (typeof target === 'string') {
        const cleanId = target.startsWith('#') ? target.substring(1) : target;
        const el = document.getElementById(cleanId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        lenis: lenisInstance,
        scrollProgress,
        scrollVelocity,
        currentSection,
        activeChapterIndex,
        sectionProgressMap,
        scrollTo,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
