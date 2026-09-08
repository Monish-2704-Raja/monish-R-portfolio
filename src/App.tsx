import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { ScrollProvider } from './context/ScrollContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsSection } from './components/SkillsSection';
import { InnovationSection } from './components/InnovationSection';
import { AILabSection } from './components/AILabSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AskMonishAIChat } from './components/AskMonishAIChat';
import { ResumeModal } from './components/ResumeModal';
import { ScrollHUD } from './components/ScrollHUD';
import { DynamicBackgroundCanvas } from './components/DynamicBackgroundCanvas';
import { Bot } from 'lucide-react';

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020205] text-slate-900 dark:text-slate-100 font-sans relative selection:bg-blue-500/20 selection:text-blue-600 dark:selection:bg-blue-500/30 dark:selection:text-blue-200 transition-colors duration-300 overflow-x-hidden">
        {/* Dynamic Morphing WebGL/2D Background Canvas responding to Scroll & Velocity */}
        <DynamicBackgroundCanvas />

        {/* Immersive UI Ambient Glow & Grid Layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] transition-colors duration-300" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-sky-400/10 dark:bg-purple-600/10 rounded-full blur-[140px] transition-colors duration-300" />
          <div className="absolute top-[35%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[150px] transition-colors duration-300" />
          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.035]"
            style={{
              backgroundImage: isDark
                ? 'radial-gradient(#ffffff 1px, transparent 1px)'
                : 'radial-gradient(#0f172a 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Scroll Feedback & Storytelling Telemetry HUD */}
        <ScrollHUD />

        {/* Navigation */}
        <Navbar
          onOpenAI={() => setIsAIChatOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Main Storytelling Content Flow */}
        <main className="relative z-10">
          <Hero
            onOpenAI={() => setIsAIChatOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />
          <AboutSection />
          <ProjectsSection />
          <CertificationsSection />
          <SkillsSection />
          <InnovationSection />
          <AILabSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer
          onOpenAI={() => setIsAIChatOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Floating Ask Monish AI Launch Bubble (Bottom Right) */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsAIChatOpen(true)}
            id="floating-ask-ai-bubble"
            aria-label="Open Ask Monish AI Chatbot"
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-600/40 border border-blue-400/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          >
            <div className="relative">
              <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <span className="text-xs font-bold tracking-tight pr-1 hidden sm:inline font-mono">
              Ask Monish AI
            </span>
          </button>
        </div>

        {/* Full Modals */}
        <AskMonishAIChat
          isOpen={isAIChatOpen}
          onClose={() => setIsAIChatOpen(false)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ScrollProvider>
  );
}
