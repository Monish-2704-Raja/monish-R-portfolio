import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Printer, Download, Copy, Check, FileText, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES, INVOLVEMENT, AREAS_OF_INTEREST } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerPrint = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
    window.print();
  };

  const handleDownloadTxt = () => {
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 },
    });

    const resumeContent = `
MONISH R
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY
${PERSONAL_INFO.bio}

EDUCATION
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution} • Graduation: ${PERSONAL_INFO.education.gradYear} • CGPA: ${PERSONAL_INFO.education.cgpa}

PROJECTS
${PROJECTS.map(
  (p) => `${p.title}
${p.highlights.map((h) => `• ${h}`).join('\n')}
Technologies: ${p.technologies.join(', ')}`
).join('\n\n')}

CERTIFICATIONS (Anthropic)
${CERTIFICATIONS.map((c) => `• ${c.title} (${c.issuer}) - ${c.dateAcquired}`).join('\n')}

INVOLVEMENT
${INVOLVEMENT.title}
• Participated in innovation-focused student initiatives and emerging technology discussions.
• Contributed to technology discussions and collaborated on student innovation activities.
• Promoted emerging technology awareness and supported community-building initiatives.

SKILLS
• AI & Machine Learning: Generative AI, Prompt Engineering, Large Language Models, AI Agents, Retrieval-Augmented Generation, Claude Platform, AI Productivity Systems
• Programming: Python, Java, C++, JavaScript, SQL
• Developer Tools: Git, GitHub, VS Code, Claude, ChatGPT, Google AI Studio
• Areas of Interest: Artificial Intelligence, Generative AI, AI Agents, Machine Learning, Software Engineering, AI for Social Good, Intelligent Transportation Systems, Developer Communities.
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Monish_R_AI_Engineer_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyPlaintext = () => {
    const resumeText = `Monish R - AI Engineer\nEmail: monishraja27@gmail.com\nPhone: +91 9003295005\nB.E. CSE @ R.M.K. Engineering College (8.6 CGPA)\n4x Anthropic Certified (Claude 101, Code, Platform, Cowork)`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0e1118] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Controls Toolbar */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="font-display font-bold text-white text-base">
              Monish R — Official Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-white/[0.08] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text</span>
            </button>
            <button
              onClick={triggerPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer shadow-md shadow-blue-600/25"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Paper Canvas */}
        <div className="p-6 sm:p-12 overflow-y-auto space-y-8 bg-white text-slate-900 print:p-0 print:text-black">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-extrabold text-slate-950 tracking-tight">
                MONISH R
              </h1>
              <p className="text-sm font-semibold text-blue-700 mt-0.5">
                AI Engineer • Generative AI Specialist • Multi-Agent Systems Architect
              </p>
            </div>
            <div className="text-xs font-mono text-slate-700 space-y-0.5 sm:text-right">
              <div>Email: {PERSONAL_INFO.email}</div>
              <div>Phone: {PERSONAL_INFO.phone}</div>
              <div>LinkedIn: in/monish-raja-7495a0361</div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <span className="font-bold text-slate-950">
                  {PERSONAL_INFO.education.degree}
                </span>
                <div className="text-slate-700">{PERSONAL_INFO.education.institution}</div>
              </div>
              <div className="text-right font-mono">
                <div className="font-bold text-slate-950">CGPA: {PERSONAL_INFO.education.cgpa}</div>
                <div className="text-slate-600">{PERSONAL_INFO.education.gradYear}</div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-950">{proj.title}</span>
                    <span className="text-[11px] font-mono text-slate-600">{proj.category}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-slate-600 pt-0.5">
                    <span className="font-semibold">Technologies:</span> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications (Anthropic)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="flex items-start gap-1.5">
                  <span className="text-blue-700 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-slate-950">{c.title}</span>
                    <span className="text-slate-600 text-[11px]"> — {c.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Involvement */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Involvement
            </h2>
            <div className="text-xs space-y-1">
              <div className="font-bold text-slate-950">{INVOLVEMENT.title}</div>
              <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                <li>Participated in innovation-focused student initiatives and emerging technology discussions.</li>
                <li>Contributed to technology discussions and collaborated on student innovation activities.</li>
                <li>Promoted emerging technology awareness and supported community-building initiatives.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Skills & Areas of Interest
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div>
                <span className="font-bold text-slate-950">AI & Machine Learning:</span> Generative AI, Prompt Engineering, Large Language Models, AI Agents, Retrieval-Augmented Generation, Claude Platform, AI Productivity Systems
              </div>
              <div>
                <span className="font-bold text-slate-950">Programming:</span> Python, Java, C++, JavaScript, SQL
              </div>
              <div>
                <span className="font-bold text-slate-950">Developer Tools:</span> Git, GitHub, VS Code, Claude, ChatGPT, Google AI Studio
              </div>
              <div>
                <span className="font-bold text-slate-950">Areas of Interest:</span> Artificial Intelligence, Generative AI, AI Agents, Machine Learning, Software Engineering, AI for Social Good, Intelligent Transportation Systems, Developer Communities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
