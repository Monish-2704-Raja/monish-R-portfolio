import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Menu, X, Bot, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI, onOpenResume, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills & AI', href: '#skills' },
    { name: 'Innovation & iGen', href: '#innovation' },
    { name: 'AI Lab & Analyzer', href: '#ai-lab' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-[#020205]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-sky-400 dark:from-blue-500 dark:to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
            M
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-slate-900 dark:text-white text-base tracking-tight">
                Monish R.
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping"></span>
                AI
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 px-4 py-1.5 rounded-full bg-white/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-xs dark:shadow-none">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Ask Monish AI Button */}
          <button
            onClick={onOpenAI}
            id="nav-ask-ai-btn"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 hover:border-blue-400 transition-all duration-200 shadow-xs group cursor-pointer"
          >
            <Bot className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-200" />
            <span>Ask Monish AI</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            id="nav-theme-toggle-btn"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex items-center justify-center p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Resume Quick Action */}
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-1.5 px-5 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs font-semibold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 shadow-xs transition-all duration-200 cursor-pointer hover:border-blue-500/40"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Resume / CV</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </button>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600" />
            )}
          </button>
          <button
            onClick={onOpenAI}
            className="p-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-lg border border-blue-200 dark:border-blue-500/20"
            aria-label="Ask Monish AI"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/[0.05]"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white/95 dark:bg-[#0c0e14] border-b border-slate-200 dark:border-white/[0.08] shadow-2xl space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200/80 dark:border-white/[0.06]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAI();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30"
            >
              <Bot className="w-4 h-4" />
              <span>Talk to Ask Monish AI</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white shadow-lg shadow-blue-600/30"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
