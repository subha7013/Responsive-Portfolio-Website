import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Code2, Sparkles } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-container bg-white/98 dark:bg-slate-900/98 border border-slate-300 dark:border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-cyan">{project.category}</span>
            {project.statusTag && (
              <span className="badge badge-emerald border-emerald-500/40 font-bold">
                {project.statusTag}
              </span>
            )}
            {project.featured && (
              <span className="badge bg-indigo-600/30 text-indigo-700 dark:text-indigo-300 border-indigo-500/40 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500 dark:text-amber-300" /> Featured
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Banner Image */}
          <div className="relative h-48 sm:h-72 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60 bg-slate-950 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2 leading-snug">
              {project.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="font-heading font-bold text-xs text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Tech Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-medium flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs sm:text-sm py-2.5 px-4 text-center flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs sm:text-sm py-2.5 px-5 text-center flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Open Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
