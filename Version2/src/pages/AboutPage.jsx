import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Timeline } from '../components/Timeline';
import { ScrollReveal } from '../components/ScrollReveal';
import { NavLink } from 'react-router-dom';
import { Code, Brain, Target, Github, Linkedin, Mail } from 'lucide-react';

export const AboutPage = () => {
  const principles = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "AI-First Problem Solving",
      desc: "Leveraging computer vision models (YOLOv8, OpenCV, face_recognition) to automate complex real-world workflows."
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: "Full-Stack System Design",
      desc: "Building clean, scalable end-to-end architectures using React, Node.js, Express, MongoDB, and Python microservices."
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Performance & Reliability",
      desc: "Writing modular, maintainable code focused on fast rendering, low latency API responses, and intuitive UX."
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-20 transition-colors duration-300">
      {/* Page Header */}
      <ScrollReveal className="section-header">
        <h1 className="section-title">About Me</h1>
        <p className="section-description">
          Information Technology student, full-stack web developer, and artificial intelligence practitioner.
        </p>
      </ScrollReveal>

      {/* Main Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Profile Card */}
        <ScrollReveal className="lg:col-span-5 flex justify-center">
          <div className="glass-card p-6 w-full max-w-md border border-slate-200 dark:border-slate-800 space-y-6 text-center">
            <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-xl bg-slate-100 dark:bg-slate-900">
              <img
                src={personalInfo.picture}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = personalInfo.avatar; }}
              />
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                {personalInfo.title}
              </p>
            </div>

            <div className="icon pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-4 text-left text-xs">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Degree</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">B.Tech IT (2023-27)</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Location</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{personalInfo.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="resume.pdf"
                className="btn-primary text-xs sm:text-sm inline-flex"
              >
                View Resume
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Narrative Text */}
        <ScrollReveal delay={150} className="lg:col-span-7 space-y-6">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Engineering with Passion, AI Innovation & Purpose
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Final-year B.Tech student specializing in Information Technology at MCKV Institute of Engineering. I enjoy building modern web applications and learning new technologies.
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether it's building SmartAttend AI to automate facial attendance tracking or architecting SEED AI to help agricultural communities identify crop diseases in real-time, I enjoy building software that translates complex code into simple, impactful user experiences.
          </p>
        </ScrollReveal>
      </div>

      {/* Engineering Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((p, idx) => (
          <ScrollReveal key={idx} delay={idx * 120}>
            <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 h-full">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 inline-block border border-slate-200 dark:border-slate-700/60">
                {p.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Switchable Education & Experience Timeline */}
      <ScrollReveal className="pt-8">
        <div className="text-center mb-12">
          <span className="section-subtitle">Milestones & History</span>
          <h2 className="section-title">Education & Experience</h2>
        </div>
        <Timeline />
      </ScrollReveal>
    </div>
  );
};
