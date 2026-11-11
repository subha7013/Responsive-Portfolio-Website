import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ScrollReveal } from '../components/ScrollReveal';
import { Search, FolderGit2 } from 'lucide-react';

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'AI / ML', 'Full Stack', 'Web App'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12 transition-colors duration-300">
      {/* Header */}
      <ScrollReveal className="section-header">
        <span className="section-subtitle">Portfolio Showcase</span>
        <h1 className="section-title">Projects & Systems</h1>
        <p className="section-description">
          Explore full-stack web applications, real-time facial recognition software, machine learning prediction models, and frontend solutions.
        </p>
      </ScrollReveal>

      {/* Filter & Search Bar */}
      <ScrollReveal delay={100} className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 max-w-5xl mx-auto">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects or tech (e.g. OpenCV, React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-indigo-500 text-sm focus:outline-none transition-all shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100}>
              <ProjectCard
                project={project}
                onOpenDetails={(p) => setActiveProject(p)}
              />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <ScrollReveal>
          <div className="text-center py-16 glass-card p-8 sm:p-12 max-w-xl mx-auto space-y-4 border border-slate-200 dark:border-slate-800">
            <FolderGit2 className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">No projects found</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Try adjusting your search criteria or switching categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn-secondary text-xs"
            >
              Reset Filters
            </button>
          </div>
        </ScrollReveal>
      )}

      {/* Modal Popup */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};
