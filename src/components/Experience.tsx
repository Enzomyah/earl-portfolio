import React from 'react';
import { Code2, Trophy, Check } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#080C14]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16">
          
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              04 — JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Achievements
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              Hands-on experience gained through academic team projects and recognition along the way.
            </p>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-8 relative">
            
            {/* Timeline Vertical Track */}
            <div className="absolute top-8 bottom-8 left-5 sm:left-6 w-0.5 bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-amber-500/50 hidden sm:block" />

            <div className="space-y-8">
              {experienceData.map((item) => {
                const isExperience = item.category === 'Experience';

                return (
                  <div key={item.id} className="relative flex items-start gap-6 sm:gap-8">
                    
                    {/* Timeline Node Icon */}
                    <div className="hidden sm:flex flex-shrink-0 z-10">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg ${
                        isExperience 
                          ? 'bg-[#0E1528] border-indigo-500/40 text-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.3)]' 
                          : 'bg-[#181512] border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                      }`}>
                        {isExperience ? <Code2 className="w-5 h-5" /> : <Trophy className="w-5 h-5" />}
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="flex-1 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] p-6 sm:p-7 xl:p-8 shadow-xl transition-all">
                      
                      {/* Top Row: Category Badge & Type / Year */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          isExperience
                            ? 'bg-indigo-950/60 border border-indigo-700/50 text-indigo-300'
                            : 'bg-amber-950/60 border border-amber-600/50 text-amber-300'
                        }`}>
                          {item.category}
                        </span>

                        <span className="text-xs font-mono text-slate-400">
                          {item.typeLabel || item.year}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 mb-5">
                        {item.subtitle}
                      </p>

                      {/* Bullet points if any */}
                      {item.bulletPoints && (
                        <div className="space-y-2.5 mb-6">
                          {item.bulletPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                              <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#172239]">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-[#141C31] border border-[#1F2E4F] text-xs font-mono text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

