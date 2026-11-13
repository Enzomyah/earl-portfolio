import React from 'react';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-3xl bg-[#0D1424] border border-[#233557] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-[#1A2640] bg-[#0A0F1D]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono text-slate-300">Resume Preview · {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 bg-[#0A0F1D]">
          
          {/* Resume Header */}
          <div className="border-b border-[#1F2E4F] pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-indigo-400 font-medium text-sm">
              {personalInfo.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.socials.email}
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.socials.githubDisplay}
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.socials.linkedinDisplay}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white text-sm">{personalInfo.education.university}</h3>
                <p className="text-xs text-slate-400">{personalInfo.education.degree}</p>
              </div>
              <div className="text-right text-xs font-mono text-slate-400">
                <p>{personalInfo.education.duration}</p>
                <p className="text-slate-500">Current: {personalInfo.education.currentYear}</p>
              </div>
            </div>
          </div>

          {/* Academic Projects & Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Projects & Experience
            </h2>

            {/* Supply Chain */}
            <div className="p-3.5 rounded-xl bg-[#0F172B] border border-[#1A2846] space-y-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-sm">
                  Supply Chain Management System — But First, Coffee
                </h3>
                <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                  Capstone Project
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Role: UI/UX Design & Frontend Development
              </p>
              <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                <li>Designed intuitive web interfaces and dashboards for POS and inventory monitoring.</li>
                <li>Created interactive wireframes and component prototypes using Figma.</li>
                <li>Collaborated on system architecture, database schema, and frontend-backend integration.</li>
              </ul>
              <p className="text-[11px] font-mono text-slate-400 pt-1">
                Technologies: React, TypeScript, Tailwind CSS, Java Spring Boot, MySQL
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="p-3.5 rounded-xl bg-[#0F172B] border border-[#1A2846] space-y-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-sm">GymGuardApp</h3>
                <span className="text-[11px] font-mono text-slate-400">React Native, Expo, Firebase</span>
              </div>
              <p className="text-xs text-slate-400">
                Cross-platform gym membership tracking and monitoring mobile application.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0F172B] border border-[#1A2846] space-y-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-sm">NutriTrack</h3>
                <span className="text-[11px] font-mono text-slate-400">React Native, Expo Router, TSX</span>
              </div>
              <p className="text-xs text-slate-400">
                Personalized nutrition, fitness, and wellness habit tracking application.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Awards & Recognition
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white text-sm">INNOWAVE Awards</h3>
                <p className="text-xs text-slate-400">Outstanding Community Web Based Solution</p>
              </div>
              <span className="text-xs font-mono text-amber-400 font-semibold">2025 Awardee</span>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#0E1528] border border-[#1A2542]">
                  <span className="font-semibold text-white block mb-1">{cat.title}:</span>
                  <span className="text-slate-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#1A2640] bg-[#0A0F1D] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-[#141E34] hover:bg-[#1C2B4B] transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
