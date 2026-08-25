import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Code2 } from 'lucide-react';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;
    const decodedId = decodeURIComponent(id);
    const found = projectsData.find(
      (p) =>
        p.id === decodedId ||
        p.title.toLowerCase() === decodedId.toLowerCase() ||
        p.title.toLowerCase().includes(decodedId.toLowerCase())
    );
    if (found) {
      setProject(found);
    } else {
      setProject(projectsData[0]);
    }
  }, [id]);

  if (!project) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-8 animate-appear transition-colors duration-300">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/projects')}
          className="btn-secondary text-xs sm:text-sm py-2 px-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </button>

        <div className="flex items-center gap-2">
          <span className="badge badge-cyan">{project.category}</span>
          {project.statusTag && (
            <span className="badge badge-amber bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/40">
              {project.statusTag}
            </span>
          )}
        </div>
      </div>

      {/* Main Detail Section */}
      <div className="glass-container p-6 sm:p-10 md:p-12 border border-slate-200 dark:border-slate-800 space-y-8">
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white text-center">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold">Project Overview</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-200 text-xs font-mono font-semibold hover:bg-indigo-600 hover:text-white transition-all cursor-default flex items-center gap-1.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary py-3 px-6 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              ) : (
                <span className="btn-secondary py-3 px-6 text-sm font-medium opacity-60 cursor-not-allowed text-center">
                  Currently In Development
                </span>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary py-3 px-6 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
