import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { DashboardMockup, MobileMockup, DocumentMockup } from './ProjectMockups';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const otherProjects = projectsData.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              03 — WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md md:text-right">
            Academic projects across web systems, mobile applications, and UI/UX design.
          </p>
        </div>

        {/* Featured Project (Full Width Card) */}
        <div className="p-6 sm:p-8 xl:p-10 rounded-3xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all mb-8 xl:mb-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            
            {/* Left Mockup */}
            <div className="lg:col-span-6 min-h-[300px] xl:min-h-[340px] flex items-center justify-center">
              <DashboardMockup src={featuredProject.image} alt={featuredProject.imageAlt} />
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-5 xl:space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-950/60 border border-indigo-700/50 text-indigo-300">
                  Capstone Project
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#141E34] border border-[#1E2E4E] text-slate-300">
                  Web Application
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-950/40 border border-amber-600/40 text-amber-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  In Development
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {featuredProject.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {featuredProject.description}
              </p>

              {/* My Contribution Box */}
              {featuredProject.contribution && (
                <div className="p-4 rounded-xl bg-[#0A0F1D] border border-[#19243C] space-y-1.5">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                    MY CONTRIBUTION
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {featuredProject.contribution}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-1">
                {featuredProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#141C31] border border-[#1F2E4F] text-xs font-medium text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 3 Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {otherProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="p-6 xl:p-7 rounded-2xl bg-[#0E1526] border border-[#172239] hover:border-[#26385C] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Mockup Preview Header */}
                  <div className="mb-5">
                    {project.previewType === 'mobile' && (
                      <MobileMockup
                        src={project.image}
                        alt={project.imageAlt}
                        variant={index === 0 ? 'gym' : 'nutri'}
                      />
                    )}
                    {project.previewType === 'document' && (
                      <DocumentMockup
                        src={project.image}
                        alt={project.imageAlt}
                      />
                    )}
                  </div>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.type.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#141C31] border border-[#1F2E4F] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#131C31] border border-[#1B2947] text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-[#172239] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                        aria-label={`Live site for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal View Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
