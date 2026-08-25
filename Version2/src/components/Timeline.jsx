import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { educationData, experienceData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, Award, FolderGit2, ExternalLink } from 'lucide-react';

export const Timeline = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 transition-colors duration-300">
      {/* Switcher Tabs */}
      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row w-full sm:w-auto p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 backdrop-blur-md shadow-lg gap-1.5 sm:gap-0">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Experience & Leadership
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Education & Academics
          </button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative pl-5 sm:pl-8 border-l-2 border-indigo-500/40 space-y-6 sm:space-y-8 ml-2 sm:ml-4">
        {activeTab === 'experience'
          ? experienceData.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Dot Marker */}
                <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-indigo-600 border-4 border-slate-100 dark:border-slate-950 shadow-md shadow-indigo-500/50 group-hover:scale-125 transition-transform" />

                <div className="glass-card p-4 sm:p-6 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition-all space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400">
                        {item.organization}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-[11px] sm:text-xs font-mono w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Stack Pills */}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-slate-800/80 border border-indigo-200 dark:border-slate-700/60 text-indigo-700 dark:text-indigo-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Featured Project Link inside Internship Card */}
                  {item.project && (
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Project Built:</span>
                        <NavLink
                          to={`/project/${item.projectId}`}
                          className="px-3 py-1 rounded-lg bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition-all"
                        >
                          <FolderGit2 className="w-3.5 h-3.5 text-indigo-500" />
                          {item.project}
                        </NavLink>
                      </div>

                      {item.projectLive && (
                        <a
                          href={item.projectLive}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))
          : educationData.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Dot Marker */}
                <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-cyan-600 border-4 border-slate-100 dark:border-slate-950 shadow-md shadow-cyan-500/50 group-hover:scale-125 transition-transform" />

                <div className="glass-card p-4 sm:p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {item.grade && (
                        <span className="badge badge-emerald text-[11px] sm:text-xs">
                          <Award className="w-3 h-3" /> {item.grade}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-[11px] sm:text-xs font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
