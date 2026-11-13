import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-[#141E34] bg-[#070A11] py-12 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-sm">
                E
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                ELC<span className="text-indigo-400">.</span>
              </span>
            </div>

            <div className="text-xs text-slate-400 space-y-0.5 sm:border-l sm:border-[#1E2D48] sm:pl-4">
              <p>Designed and developed by {personalInfo.name}.</p>
              <p>© 2026 {personalInfo.name}. All rights reserved.</p>
            </div>
          </div>

          {/* Right Side: Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0E1526] hover:bg-[#162138] border border-[#1E293B] hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0E1526] hover:bg-[#162138] border border-[#1E293B] hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <div className="h-4 w-[1px] bg-[#1E293B] mx-1 hidden sm:block" />

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-[#0E1526] hover:bg-[#162138] border border-[#1E293B] hover:border-slate-500 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
