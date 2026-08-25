import React from 'react';
import { NavLink } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-[#0a3133] border-t border-slate-800 text-white py-8 rounded-t-2xl">
      <div className="container mx-auto px-6 space-y-6">
        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-600 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-600 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-rose-500 hover:bg-rose-600 transition-all"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Required Footer Notice */}
        <div className="text-center font-heading font-bold text-sm sm:text-base leading-relaxed text-slate-100">
          <p>
            Thanks for Visiting <br />
            Copyright © Subhasish || All rights reserved || Made with ❤️ || {new Date().getFullYear()}
          </p>
        </div>

        {/* Scroll To Top */}
        <div className="flex justify-center pt-2">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white hover:border-indigo-500 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
