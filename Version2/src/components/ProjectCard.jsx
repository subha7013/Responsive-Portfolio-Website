import React from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, Github, Info, Sparkles } from 'lucide-react';

export const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <div className="glass-card group overflow-hidden flex flex-col justify-between h-full border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
      {/* Image Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category & Status Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="badge badge-cyan shadow-md backdrop-blur-md">
            {project.category}
          </span>
          {project.statusTag && (
            <span
              className={`badge font-bold shadow-md ${
                project.statusTag.toLowerCase().includes('internship')
                  ? 'bg-emerald-500/30 text-emerald-300 border-emerald-400/50 backdrop-blur-md'
                  : 'badge-amber bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
              }`}
            >
              {project.statusTag}
            </span>
          )}
        </div>

        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="badge bg-indigo-600/80 text-white border-indigo-400/40 flex items-center gap-1 shadow-lg">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <NavLink
            to={`/project/${project.id}`}
            className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1 mb-2 block"
          >
            {project.title}
          </NavLink>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {project.shortDescription || project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-slate-800/80 border border-indigo-200 dark:border-slate-700/60 text-indigo-700 dark:text-indigo-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/40">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
          <NavLink
            to={`/project/${project.id}`}
            className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-all"
          >
            <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            View Detail
          </NavLink>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold flex items-center gap-1 shadow-md shadow-indigo-600/30 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          ) : (
            <span className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 border border-slate-200 dark:border-slate-700/50 text-xs font-medium cursor-not-allowed">
              In Dev
            </span>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
