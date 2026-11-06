import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { personalInfo, projectsData, certificatesData, skillsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { CertificateCard } from '../components/CertificateCard';
import { CertificateModal } from '../components/CertificateModal';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowRight, Code, Sparkles, Terminal, Mail, Github, Linkedin } from 'lucide-react';

export const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Typewriter effect titles
  const titles = ['Full Stack Developer', 'AI/ML Enthusiast', 'Software Engineer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const topCertificates = certificatesData.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-12 transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-16 overflow-hidden">
        {/* Glow backdrop shapes */}
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text Content */}
            <ScrollReveal className="lg:col-span-7 space-y-4 sm:space-y-6 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-mono">
                <span>Hello, I am</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-slate-900 dark:text-white">
                Subhasish <span className="gradient-text">Nath</span>
              </h1>

              <div className="h-8 sm:h-10 flex items-center text-lg sm:text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">
                <span className="text-slate-400 mr-2">&gt;</span>
                <span className="border-r-2 border-cyan-500 pr-1 animate-pulse">
                  {titles[currentTitleIndex]}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed">
                {personalInfo.tagline} {personalInfo.about}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <NavLink to="/projects" className="btn-primary text-center">
                  Explore Projects <ArrowRight className="w-4 h-4" />
                </NavLink>

                <NavLink to="/contact" className="btn-secondary text-center">
                  Get In Touch <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </NavLink>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Connect:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            {/* Hero Image Avatar */}
            <ScrollReveal delay={150} className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-60 group-hover:opacity-100 blur-lg transition duration-500" />

                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-100 dark:bg-slate-900">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = personalInfo.picture;
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS CATALOG */}
      <section className="container mx-auto px-4 sm:px-6">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="section-subtitle">Portfolio Highlights</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <NavLink
            to="/projects"
            className="btn-secondary text-xs sm:text-sm self-start sm:self-auto flex items-center gap-2"
          >
            View All Projects ({projectsData.length}) <ArrowRight className="w-4 h-4" />
          </NavLink>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 120}>
              <ProjectCard
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CORE SKILLS HIGHLIGHT */}
      <section className="container mx-auto px-4 sm:px-6">
        <ScrollReveal className="glass-container p-6 sm:p-10 md:p-12 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="section-subtitle">Technical Proficiency</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Modern Stack & AI Expertise
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Specialized in building full-stack web applications with React & Node.js, alongside Python microservices for computer vision and machine learning.
              </p>
              <NavLink to="/skills" className="btn-primary text-xs sm:text-sm inline-flex">
                View Complete Tech Inventory
              </NavLink>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skillsData.flatMap((cat) => cat.skills).slice(0, 6).map((skill, idx) => (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 hover:border-indigo-500/40 transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800/80 p-1.5 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700/50 group-hover:scale-105 transition-transform">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain dark:invert tech-logo transition-all"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{skill.name}</h4>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CERTIFICATES & ACHIEVEMENTS */}
      <section className="container mx-auto px-4 sm:px-6">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="section-subtitle">Verified Accomplishments</span>
            <h2 className="section-title">Certifications & Credentials</h2>
          </div>
          <NavLink
            to="/certificates"
            className="btn-secondary text-xs sm:text-sm self-start sm:self-auto flex items-center gap-2"
          >
            All Certificates ({certificatesData.length}) <ArrowRight className="w-4 h-4" />
          </NavLink>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {topCertificates.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 120}>
              <CertificateCard
                certificate={cert}
                onViewPdf={(c) => setSelectedCertificate(c)}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CONTACT CTA BANNER */}
      <section className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-900/90 via-slate-900 to-cyan-950/90 border border-indigo-500/30 p-6 sm:p-12 text-center space-y-4 sm:space-y-6 text-white">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                Have a project or opportunity in mind?
              </h2>
              <p className="text-slate-200 text-xs sm:text-base leading-relaxed">
                I am open to full-time roles, internships, AI/ML development, and collaborative software projects.
              </p>
              <div className="pt-2">
                <NavLink to="/contact" className="btn-primary text-xs sm:text-base px-6 sm:px-8 py-3">
                  Send Message & Connect <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* MODALS */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
};
