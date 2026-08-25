import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';
import { Search, Layers } from 'lucide-react';

export const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const filteredData = skillsData.map((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return { ...cat, skills: [] };
    }
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, skills: matchingSkills };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12 transition-colors duration-300">
      {/* Header */}
      <ScrollReveal className="section-header">
        <span className="section-subtitle">Technical Inventory</span>
        <h1 className="section-title">Skills & Technologies</h1>
        <p className="section-description">
          A comprehensive overview of programming languages, frameworks, AI/ML tools, databases, and core software engineering proficiencies.
        </p>
      </ScrollReveal>

      {/* Controls: Search & Category Chips */}
      <ScrollReveal delay={100} className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Skills Grid per Category */}
      <div className="space-y-10 sm:space-y-12 max-w-5xl mx-auto">
        {filteredData.length > 0 ? (
          filteredData.map((group, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="space-y-4 sm:space-y-6">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                {group.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {group.skills.map((skill, sIdx) => (
                  <ScrollReveal key={sIdx} delay={sIdx * 50}>
                    <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition-all flex items-center gap-3.5 group">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 p-2 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700/50 group-hover:scale-110 transition-transform">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain dark:invert tech-logo transition-all"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          ))
        ) : (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400">
            No matching skills found for "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};
