import React from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl bg-[#0D1424] border border-[#233557] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#1A2640]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.type.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-950/60 border border-indigo-700/40 text-indigo-300"
                >
                  {t}
                </span>
              ))}
              {project.status && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-950/60 border border-amber-600/40 text-amber-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  {project.status}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Project Overview
            </h4>
            <p className="leading-relaxed text-slate-300 text-base">
              {project.description}
            </p>
          </div>

          {project.contribution && (
            <div className="p-4 rounded-xl bg-[#111A2E] border border-[#1E2E4E] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>My Contribution</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#141E34] border border-[#1E2E4E] text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interface Screenshots */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              Interface Screenshots
            </h4>

            {project.secondaryImage ? (
              /* Dual screenshots for Mobile apps (GymGuardApp & NutriTrack) */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Primary Screen */}
                <div className="rounded-xl bg-[#080C14] border border-[#1A2846] p-3 flex flex-col items-center">
                  <div className="w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden rounded-lg bg-black/40">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="h-full w-auto max-w-full object-contain rounded-md"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-300 mt-2.5">
                    {project.primaryImageLabel || "Primary Screen"}
                  </span>
                </div>

                {/* Secondary Screen */}
                <div className="rounded-xl bg-[#080C14] border border-[#1A2846] p-3 flex flex-col items-center">
                  <div className="w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden rounded-lg bg-black/40">
                    <img
                      src={project.secondaryImage}
                      alt={project.secondaryImageAlt || `${project.title} secondary screen`}
                      loading="lazy"
                      className="h-full w-auto max-w-full object-contain rounded-md"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-300 mt-2.5">
                    {project.secondaryImageLabel || "Secondary Screen"}
                  </span>
                </div>
              </div>
            ) : (
              /* Single screenshot for Web apps (Supply Chain & Great Books) */
              <div className="rounded-xl bg-[#080C14] border border-[#1A2846] p-3 flex flex-col items-center">
                <div className="w-full max-h-80 sm:max-h-96 flex items-center justify-center overflow-hidden rounded-lg bg-black/40">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full max-h-80 sm:max-h-96 object-contain rounded-md"
                  />
                </div>
                <span className="text-xs font-medium text-slate-300 mt-2.5">
                  {project.primaryImageLabel || "Interface Preview"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#1A2640] bg-[#0A0F1D] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-[#141E34] hover:bg-[#1C2B4B] border border-[#233557] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Website Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
