import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, experienceData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 overflow-hidden print:p-0 print:static">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-0 print:hidden"
        />

        {/* Resume Sheet Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[hsl(240,8%,7%)] text-[var(--title-color)] rounded-2xl sm:rounded-3xl border border-[var(--first-color)]/30 shadow-[0_0_50px_rgba(138,112,237,0.25)] overflow-hidden z-10 max-h-[85vh] sm:max-h-[88vh] flex flex-col print:max-h-none print:m-0 print:border-none print:shadow-none print:bg-white print:text-slate-900"
        >
          {/* Action Toolbar Header */}
          <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 flex items-center justify-between bg-[hsl(240,8%,5%)] shrink-0 z-20 print:hidden">
            <div className="text-xs font-semibold text-[var(--title-color)]" style={{ fontFamily: 'var(--second-font)' }}>
              Resume &bull; <span className="text-[var(--first-color)]">{personalInfo.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="button text-xs py-1.5 px-4 cursor-pointer"
                title="Print or Save as PDF"
              >
                <i className="ri-printer-line"></i>
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[var(--title-color)] hover:border-[var(--first-color)] hover:text-[var(--first-color)] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto min-h-0 flex-1 space-y-6 text-sm leading-relaxed overscroll-contain print:overflow-visible print:p-6 print:text-slate-900">
            {/* Header / Name & Contact */}
            <div className="text-center pb-6 border-b border-white/10 print:border-slate-300 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase" style={{ fontFamily: 'var(--second-font)' }}>
                {personalInfo.name}
              </h1>
              <div className="text-sm font-semibold text-[var(--first-color)] print:text-indigo-600 tracking-wide uppercase" style={{ fontFamily: 'var(--second-font)' }}>
                {personalInfo.role}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-[var(--text-color)] print:text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-phone-line text-[var(--first-color)]"></i>
                  {personalInfo.phone}
                </span>
                <span>&bull;</span>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-1.5 hover:underline">
                  <i className="ri-mail-line text-[var(--first-color)]"></i>
                  {personalInfo.email}
                </a>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-map-pin-line text-[var(--first-color)]"></i>
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)] print:text-indigo-600 border-b border-white/10 print:border-slate-300 pb-1" style={{ fontFamily: 'var(--second-font)' }}>
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-color)] print:text-slate-700 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)] print:text-indigo-600 border-b border-white/10 print:border-slate-300 pb-1" style={{ fontFamily: 'var(--second-font)' }}>
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs sm:text-sm text-[var(--text-color)] print:text-slate-700">
                <div>
                  <strong className="text-[var(--title-color)] print:text-slate-900">Frontend Core:</strong> React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux Toolkit, Framer Motion, Responsive Architecture
                </div>
                <div>
                  <strong className="text-[var(--title-color)] print:text-slate-900">API &amp; Real-Time:</strong> REST APIs, Socket.IO, Stripe API Integration, Postman, Webhooks
                </div>
                <div>
                  <strong className="text-[var(--title-color)] print:text-slate-900">Backend &amp; DB:</strong> Node.js, Express.js, MongoDB (Working knowledge)
                </div>
                <div>
                  <strong className="text-[var(--title-color)] print:text-slate-900">Tooling:</strong> Git, GitHub, Vite, Chrome DevTools, VS Code
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)] print:text-indigo-600 border-b border-white/10 print:border-slate-300 pb-1" style={{ fontFamily: 'var(--second-font)' }}>
                Professional Experience
              </h2>

              {experienceData.map((exp, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div className="font-bold text-[var(--title-color)] print:text-slate-900">
                      {exp.role} <span className="font-normal text-[var(--text-color)] print:text-slate-600">| {exp.company} — {exp.location}</span>
                    </div>
                    <div className="text-xs font-semibold text-[var(--first-color)] print:text-indigo-600">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-color)] print:text-slate-600">{exp.summary}</p>
                  {exp.highlights && (
                    <ul className="list-disc pl-4 space-y-1 text-xs text-[var(--text-color)] print:text-slate-700">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2 pt-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)] print:text-indigo-600 border-b border-white/10 print:border-slate-300 pb-1" style={{ fontFamily: 'var(--second-font)' }}>
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <strong className="text-[var(--title-color)] print:text-slate-900">{personalInfo.education.degree}</strong>
                  <div className="text-xs text-[var(--text-color)] print:text-slate-600">{personalInfo.education.institution}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[var(--first-color)] print:text-indigo-600">{personalInfo.education.duration}</span>
                  <div className="text-xs text-[var(--text-color)] print:text-slate-600">CGPA: {personalInfo.education.cgpa} ({personalInfo.education.gradeType})</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="px-5 sm:px-6 py-3 border-t border-white/10 bg-[hsl(240,8%,5%)]/95 flex items-center justify-between text-xs text-[var(--text-color)] shrink-0 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to Software Roles</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="text-[var(--title-color)] hover:text-[var(--first-color)] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <i className="ri-download-2-line"></i>
                <span>Download PDF</span>
              </button>
              <span className="text-white/20">&bull;</span>
              <button
                onClick={onClose}
                className="text-[var(--text-color)] hover:text-[var(--title-color)] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
