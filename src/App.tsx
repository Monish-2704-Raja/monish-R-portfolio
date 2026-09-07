import React, { useState, useEffect } from 'react';
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
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#020205] text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans relative selection:bg-blue-500/30 selection:text-blue-200 transition-colors duration-300 overflow-x-hidden`}>
      {/* Immersive UI Ambient Glow & Grid Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-indigo-600/5 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Navigation */}
      <Navbar
        onOpenAI={() => setIsAIChatOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Flow */}
      <main>
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
          <span className="text-xs font-bold tracking-tight pr-1 hidden sm:inline">
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
  );
}
