import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Code, User, Award, FolderGit2, Phone, Layers } from 'lucide-react';

const getAsset = (path) => {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Projects', path: '/projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { name: 'Skills', path: '/skills', icon: <Layers className="w-4 h-4" /> },
    { name: 'Certificates', path: '/certificates', icon: <Award className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full px-2 sm:px-4 py-2 sm:py-3 transition-colors duration-300">
      <nav className="glass-nav container mx-auto rounded-2xl px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between shadow-lg">
        {/* Nav Logo */}
        <NavLink to="/" onClick={closeMobileMenu} className="flex items-center gap-2 shrink-0 nav-logo">
          <img
            src={getAsset('/logo.png')}
            alt="Logo"
            className="h-10 sm:h-12 w-auto object-contain dark:invert transition-all"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1.5 bg-slate-200/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-300/70 dark:border-slate-700/50 backdrop-blur-md">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-700/40'
                }`
              }
            >
              <Code className="w-4 h-4" /> Home
            </NavLink>
          </li>

          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-700/40'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Hamburger */}
        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Icon Toggle */}
          <button
            onClick={toggleTheme}
            id="dark-toggle"
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 hover:scale-105 transition-all flex items-center justify-center cursor-pointer shadow-sm"
          >
            <img
              src={getAsset(darkMode ? "/assets/light.svg" : "/assets/dark.svg")}
              alt={darkMode ? "Light Mode" : "Dark Mode"}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain dark:invert"
            />
          </button>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-slate-900 dark:text-white flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <img
              src={getAsset(mobileMenuOpen ? "/assets/close.svg" : "/assets/hamburger.svg")}
              alt="Menu"
              className="w-6 h-6 object-contain dark:invert"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-16 sm:top-20 z-50 p-6 glass-container bg-white/98 dark:bg-slate-900/98 border border-slate-300 dark:border-indigo-500/30 rounded-2xl shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-bold flex items-center gap-3 transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              <Code className="w-5 h-5 text-indigo-500" /> Home
            </NavLink>

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-bold flex items-center gap-3 transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <img
                  src={getAsset(darkMode ? "/assets/light.svg" : "/assets/dark.svg")}
                  alt="Theme"
                  className="w-4 h-4 dark:invert"
                />
                {darkMode ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
