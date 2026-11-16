import React, { useState } from 'react';
import { Mail, Download, ExternalLink, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  resumeHref: string;
}

export const Contact: React.FC<ContactProps> = ({ resumeHref }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Large Rounded Container Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#10182E] via-[#0D1426] to-[#090E1A] border border-[#1F2D4A] p-8 sm:p-12 lg:p-12 xl:p-16 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                05 — CONTACT
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Let's Connect
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-lg">
                Have a project in mind or interested in collaborating? I'm always open to connecting with fellow developers, designers, and professionals. Feel free to reach out to discuss ideas, share knowledge, or explore opportunities to create something meaningful together.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_25px_rgba(79,70,229,0.55)] hover:shadow-[0_0_35px_rgba(99,102,241,0.75)] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>

                <a
                  href={resumeHref}
                  download
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-[#121A2C] hover:bg-[#1A2640] border border-[#223354] hover:border-slate-500 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3 Contact Cards */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Email Card */}
              <div className="group rounded-2xl bg-[#0B101D]/90 border border-[#192640] hover:border-[#2D4373] p-4 sm:p-5 xl:p-6 transition-all flex items-center justify-between shadow-lg">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center flex-shrink-0 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-slate-400 block">Email</span>
                    <span className="text-sm sm:text-base font-semibold text-white truncate block">
                      {personalInfo.socials.email}
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-2 ml-2">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                    title="Open mail app"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#0B101D]/90 border border-[#192640] hover:border-[#2D4373] p-4 sm:p-5 xl:p-6 transition-all flex items-center justify-between shadow-lg block"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center flex-shrink-0 text-white group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-slate-400 block">GitHub</span>
                    <span className="text-sm sm:text-base font-semibold text-white truncate block">
                      {personalInfo.socials.githubDisplay}
                    </span>
                  </div>
                </div>
                <div className="p-2 text-slate-400 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#0B101D]/90 border border-[#192640] hover:border-[#2D4373] p-4 sm:p-5 xl:p-6 transition-all flex items-center justify-between shadow-lg block"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0D243B] border border-[#16416A] flex items-center justify-center flex-shrink-0 text-[#0A66C2] group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-slate-400 block">LinkedIn</span>
                    <span className="text-sm sm:text-base font-semibold text-white truncate block">
                      {personalInfo.socials.linkedinDisplay}
                    </span>
                  </div>
                </div>
                <div className="p-2 text-slate-400 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
