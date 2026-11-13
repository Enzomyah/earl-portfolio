import React from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Briefcase, 
  Layers, 
  PenTool, 
  Layout, 
  GitFork, 
  Sparkles, 
  Zap 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getOtherSkillIcon = (icon?: string) => {
    switch (icon) {
      case 'pen-tool':
        return <PenTool className="w-3.5 h-3.5 text-purple-400" />;
      case 'layout':
        return <Layout className="w-3.5 h-3.5 text-blue-400" />;
      case 'git-fork':
        return <GitFork className="w-3.5 h-3.5 text-indigo-400" />;
      case 'sparkles':
        return <Sparkles className="w-3.5 h-3.5 text-pink-400" />;
      case 'zap':
        return <Zap className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return null;
    }
  };

  // Specific technology icons/logos for pills
  const getTechLogo = (name: string) => {
    switch (name) {
      case 'JavaScript':
        return (
          <span className="w-4 h-4 rounded-sm bg-[#F7DF1E] text-black font-extrabold text-[9px] flex items-center justify-center font-mono">
            JS
          </span>
        );
      case 'TypeScript':
        return (
          <span className="w-4 h-4 rounded-sm bg-[#3178C6] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
            TS
          </span>
        );
      case 'HTML':
        return (
          <span className="w-4 h-4 rounded-sm bg-[#E34F26] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
            5
          </span>
        );
      case 'CSS':
        return (
          <span className="w-4 h-4 rounded-sm bg-[#1572B6] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
            3
          </span>
        );
      case 'Tailwind CSS':
        return (
          <svg className="w-4 h-4 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        );
      case 'React Native':
        return (
          <svg className="w-4 h-4 text-[#61DAFB] animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'Expo':
        return (
          <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-white">
            ▲
          </span>
        );
      case 'Figma':
        return (
          <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-xs text-[#F24E1E]">
            ❖
          </span>
        );
      case 'Git':
        return (
          <span className="w-4 h-4 rounded-sm bg-[#F05032] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
            git
          </span>
        );
      case 'GitHub':
        return (
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080C14]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              02 — SKILLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Technologies & Skills
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md md:text-right">
            Tools and technologies I've worked with across academic projects and personal learning.
          </p>
        </div>

        {/* 5 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mb-6 xl:mb-8">
          {/* Card 1: Programming */}
          <div className="p-6 xl:p-7 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center">
                {getCategoryIcon(skillCategories[0].iconName)}
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">{skillCategories[0].number}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">{skillCategories[0].title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[0].skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131C31] border border-[#1F2E4F] text-xs font-medium text-slate-200"
                  >
                    {getTechLogo(skill.name)}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Web Development */}
          <div className="p-6 xl:p-7 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center">
                {getCategoryIcon(skillCategories[1].iconName)}
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">{skillCategories[1].number}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">{skillCategories[1].title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[1].skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131C31] border border-[#1F2E4F] text-xs font-medium text-slate-200"
                  >
                    {getTechLogo(skill.name)}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Mobile Development */}
          <div className="p-6 xl:p-7 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center">
                {getCategoryIcon(skillCategories[2].iconName)}
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">{skillCategories[2].number}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">{skillCategories[2].title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[2].skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131C31] border border-[#1F2E4F] text-xs font-medium text-slate-200"
                  >
                    {getTechLogo(skill.name)}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 xl:gap-8">
          {/* Card 4: Design & Tools */}
          <div className="md:col-span-5 p-6 xl:p-7 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center">
                {getCategoryIcon(skillCategories[3].iconName)}
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">{skillCategories[3].number}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">{skillCategories[3].title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[3].skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131C31] border border-[#1F2E4F] text-xs font-medium text-slate-200"
                  >
                    {getTechLogo(skill.name)}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Other Skills */}
          <div className="md:col-span-7 p-6 xl:p-7 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#141C31] border border-[#233352] flex items-center justify-center">
                {getCategoryIcon(skillCategories[4].iconName)}
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">{skillCategories[4].number}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">{skillCategories[4].title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[4].skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131C31] border border-[#1F2E4F] text-xs font-medium text-slate-200"
                  >
                    {getOtherSkillIcon(skill.icon)}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

