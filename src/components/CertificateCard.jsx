import React from 'react';
import { Award, FileText, ExternalLink, Calendar, CheckCircle2, Eye } from 'lucide-react';

export const CertificateCard = ({ certificate, onViewPdf }) => {
  return (
    <div className="glass-card p-6 flex flex-col justify-between h-full border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/60 transition-all duration-300">
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="badge badge-emerald flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            {certificate.badge || 'Certificate'}
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            {certificate.date}
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white leading-snug">
              {certificate.title}
            </h3>
            <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mt-1">
              Issued by {certificate.issuer}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
          {certificate.description}
        </p>

        {/* Skills Learned */}
        {certificate.skillsLearned && (
          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
              Key Competencies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skillsLearned.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onViewPdf(certificate)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
        >
          <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          Preview Certificate
        </button>

        <a
          href={certificate.fileUrl}
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-300 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300 hover:text-white transition-all"
          title="Open PDF File directly in browser"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
