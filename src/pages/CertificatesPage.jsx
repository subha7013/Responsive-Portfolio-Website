import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import { CertificateCard } from '../components/CertificateCard';
import { CertificateModal } from '../components/CertificateModal';
import { ScrollReveal } from '../components/ScrollReveal';

export const CertificatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCert, setActiveCert] = useState(null);

  const categories = [
    'All',
    'AICTE',
    'Others'
  ];

  const filteredCertificates = certificatesData.filter((cert) => {
    return selectedCategory === 'All' || cert.category === selectedCategory;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12 transition-colors duration-300">
      {/* Header */}
      <ScrollReveal className="section-header">
        <span className="section-subtitle">Verified Qualifications</span>
        <h1 className="section-title">Certificates & Achievements</h1>
        <p className="section-description">
          Verified certifications, professional development programs, and technical credentials earned from recognized councils and organizations.
        </p>
      </ScrollReveal>

      {/* Category Pills */}
      <ScrollReveal delay={100} className="flex flex-wrap items-center gap-2 justify-center max-w-3xl mx-auto">
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
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCertificates.map((cert, idx) => (
          <ScrollReveal key={cert.id} delay={idx * 100}>
            <CertificateCard
              certificate={cert}
              onViewPdf={(c) => setActiveCert(c)}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Modal Popup */}
      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </div>
  );
};
