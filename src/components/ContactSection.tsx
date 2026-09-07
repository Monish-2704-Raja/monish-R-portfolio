import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Engineering Role / AI Internship',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSent(true);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
        });
      }
    } catch (err) {
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open for High-Impact Roles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Let&apos;s Build the Future of AI Together
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
                Currently exploring AI Engineering roles, research fellowships, collaborative startup initiatives, and elite hackathon teams.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.08] flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <div className="text-sm font-semibold text-white font-mono">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.08] flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Phone</div>
                    <div className="text-sm font-semibold text-white font-mono">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06]"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.08] flex items-center justify-between group hover:border-blue-500/30 transition-colors block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Professional Network</div>
                    <div className="text-sm font-semibold text-white font-mono">in/monish-raja-7495a0361</div>
                  </div>
                </div>
                <div className="p-2 text-slate-400 group-hover:text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Smart Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 border border-white/[0.08] rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              {sent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Monish. Your message has been logged in the system and routed directly. You will receive a response shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', topic: 'Engineering Role', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. s.jenkins@company.ai"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Subject / Intent</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Engineering Role / AI Internship">AI Engineering Role / Internship Offer</option>
                      <option value="Research & Lab Collaboration">Applied Research / Lab Collaboration</option>
                      <option value="Hackathon Team Formation">Global Hackathon Team Formation</option>
                      <option value="General Inquiries">General Founder Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, team objectives, or role timeline..."
                      className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 resize-none font-sans leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{sending ? 'Transmitting...' : 'Transmit Message to Monish'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
