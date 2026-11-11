import React from 'react';
import { X, ExternalLink, Download, Award, Calendar, Building2 } from 'lucide-react';

export const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl glass-container bg-white/98 dark:bg-slate-900/98 border border-slate-300 dark:border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl h-[88vh] flex flex-col animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-600/30 border border-indigo-200 dark:border-indigo-500/40 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base truncate">
                {certificate.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 truncate">
                <span>{certificate.issuer}</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span>{certificate.date}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shrink-0 ml-2"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-slate-950 p-2 relative flex items-center justify-center overflow-hidden">
          <iframe
            src={certificate.fileUrl}
            title={certificate.title}
            className="w-full h-full rounded-xl border border-slate-800"
          />
        </div>

        {/* Footer Actions */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0 text-xs">
          <p className="text-slate-500 dark:text-slate-400 hidden md:block text-[11px]">
            Previewing PDF Document. Tap below to download or view in a separate tab.
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href={certificate.fileUrl}
              download
              className="btn-secondary text-xs py-2 px-3 flex-1 sm:flex-initial text-center justify-center"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>

            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs py-2 px-4 flex-1 sm:flex-initial text-center justify-center"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Full Screen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
