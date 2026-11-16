import React from 'react';
import { ArrowRight, Download, MapPin, Briefcase, Trophy, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  resumeHref: string;
}

export const Hero: React.FC<HeroProps> = ({ resumeHref }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full my-auto z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Column: Introduction */}
          <div className="lg:col-span-7 space-y-6 xl:space-y-7">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10172A] border border-[#233354] text-xs font-medium text-indigo-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>BS Information Technology Student</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hi, I'm <span className="text-white">Earl Lawrence Cipres.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200">
              <span className="text-indigo-400">Frontend Developer</span> &{' '}
              <span className="text-purple-400">UI/UX Designer</span>
            </p>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl xl:max-w-3xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={resumeHref}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-[#0E1526] hover:bg-[#152038] border border-[#1E293B] hover:border-slate-600 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0E1526] hover:bg-[#162138] border border-[#1E293B] hover:border-slate-600 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0E1526] hover:bg-[#162138] border border-[#1E293B] hover:border-slate-600 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Meta tags: Location & Availability */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Outer card with gradient border */}
            <div className="relative w-full max-w-md lg:max-w-[460px] xl:max-w-[480px] rounded-2xl bg-gradient-to-b from-[#141C31] to-[#0A0E1A] p-[1px] shadow-2xl shadow-indigo-950/40">
              <div className="relative rounded-2xl bg-[#0B101E]/95 backdrop-blur-xl p-6 sm:p-8 xl:p-9 overflow-hidden min-h-[460px] xl:min-h-[480px] flex flex-col justify-between">
                
                {/* Background decorative glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Floating Badge Top-Left: INNOWAVE Awards */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#111A2E]/90 border border-[#243557] backdrop-blur-md shadow-lg">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">INNOWAVE Awards</div>
                      <div className="text-xs font-bold text-white">2025 Awardee</div>
                    </div>
                  </div>

                  {/* Floating Code Snippet Top-Right */}
                  <div className="hidden sm:block absolute right-0 top-16 z-20 font-mono text-[11px] leading-tight text-slate-300 bg-[#080C14]/95 border border-[#1E293B] p-3 rounded-xl shadow-xl backdrop-blur-md">
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">focus</span> = [
                    </div>
                    <div className="pl-3 py-0.5">
                      <span className="text-emerald-400">'frontend'</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-emerald-400">'ui/ux'</span>
                    </div>
                    <div>];</div>
                  </div>
                </div>

                {/* Profile Photo */}
                <div className="relative my-8 flex flex-col items-center justify-center text-center z-10">
                  <div className="relative w-44 h-44 xl:w-48 xl:h-48 rounded-2xl overflow-hidden border-2 border-[#25375B] shadow-xl shadow-black/50 group">
                    <img
                      src="/profile-photo.png"
                      alt="Earl Lawrence C. Cipres"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* subtle vignette overlay */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-indigo-500/20 pointer-events-none" />
                  </div>
                  {/* Pulsing ring decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 xl:w-52 h-48 xl:h-52 rounded-2xl border border-indigo-500/20 animate-pulse pointer-events-none" />
                </div>

                {/* Bottom Card Footer Nameplate */}
                <div className="relative z-10 pt-4 border-t border-[#162238] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">{personalInfo.name}</h3>
                    <p className="text-xs text-slate-400">BSIT · University of Nueva Caceres</p>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="w-full flex flex-col items-center justify-center pb-2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
        >
          <span className="text-[11px] font-mono tracking-widest text-slate-400">SCROLL</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1 group-hover:border-indigo-400 transition-colors">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce group-hover:bg-indigo-400" />
          </div>
        </a>
      </div>
    </section>
  );
};
