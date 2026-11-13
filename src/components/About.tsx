import React from 'react';
import { Monitor, PenTool, GitFork, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutPillars } from '../data/portfolioData';

export const About: React.FC = () => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'monitor':
        return <Monitor className="w-5 h-5 text-indigo-400" />;
      case 'pen-tool':
        return <PenTool className="w-5 h-5 text-purple-400" />;
      case 'network':
        return <GitFork className="w-5 h-5 text-cyan-400" />;
      default:
        return <Monitor className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Label & Header */}
        <div className="mb-12">
          <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
            01 — ABOUT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-start">
          
          {/* Left Column: Bio & 3 Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Focus Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-6 pt-4">
              {aboutPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-5 xl:p-6 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center mb-4 group-hover:bg-[#1A2542] transition-colors">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="font-bold text-white text-base tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0E1526] border border-[#172239] p-6 sm:p-7 xl:p-8 shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>

              {/* University Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center flex-shrink-0 text-indigo-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {personalInfo.education.university}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {personalInfo.education.degree}
                  </p>
                </div>
              </div>

              {/* Detail Rows */}
              <div className="space-y-3 pt-2 border-t border-[#162238]">
                <div className="flex items-center justify-between text-sm py-1">
                  <span className="text-slate-400">Duration</span>
                  <span className="font-semibold text-white font-mono">{personalInfo.education.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm py-1">
                  <span className="text-slate-400">Current Year</span>
                  <span className="font-semibold text-white font-mono">{personalInfo.education.currentYear}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>{personalInfo.education.startYear}</span>
                  <span>{personalInfo.education.endYear}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#162238] overflow-hidden p-[1px]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500 shadow-sm transition-all duration-1000"
                    style={{ width: `${personalInfo.education.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-2">
                <div className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{personalInfo.education.status}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

