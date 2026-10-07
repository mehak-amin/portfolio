import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectModal = ({ project, onClose }) => {
  React.useEffect(() => {
    if (!project) return;

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
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[hsl(240,8%,7%)] text-[var(--text-color)] rounded-2xl sm:rounded-3xl border border-[var(--first-color)]/30 shadow-[0_0_50px_rgba(138,112,237,0.25)] overflow-hidden z-10 max-h-[85vh] sm:max-h-[88vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between bg-[hsl(240,8%,5%)] shrink-0 z-20">
            <div>
              <span className="text-xs font-semibold text-[var(--first-color)] uppercase tracking-wider" style={{ fontFamily: 'var(--second-font)' }}>
                {project.category} &bull; {project.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--title-color)] mt-0.5 sm:mt-1" style={{ fontFamily: 'var(--second-font)' }}>
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[var(--title-color)] hover:border-[var(--first-color)] hover:text-[var(--first-color)] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <i className="ri-close-line text-lg"></i>
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto min-h-0 flex-1 space-y-6 text-sm leading-relaxed overscroll-contain">
            {/* Project Image Preview */}
            {project.image && (
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)] bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[320px] object-cover object-top"
                />
              </div>
            )}

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)]" style={{ fontFamily: 'var(--second-font)' }}>
                Project Overview
              </h4>
              <p className="text-[var(--title-color)]/90">{project.overview}</p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)]" style={{ fontFamily: 'var(--second-font)' }}>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.badges && project.badges.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-[var(--title-color)] border border-white/10"
                    style={{ fontFamily: 'var(--second-font)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Accomplishments & Technical Solutions */}
            {project.solutionPoints && (
              <div className="space-y-3 pt-3 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)]" style={{ fontFamily: 'var(--second-font)' }}>
                  Engineering Highlights &amp; Solutions
                </h4>
                <ul className="space-y-2 m-0 p-0 list-none">
                  {project.solutionPoints.map((sol, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-color)]">
                      <i className="ri-checkbox-circle-fill text-[var(--first-color)] text-base flex-shrink-0 mt-0.5"></i>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges Solved */}
            {project.challenges && (
              <div className="space-y-3 pt-3 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--first-color)]" style={{ fontFamily: 'var(--second-font)' }}>
                  Key Challenges Solved
                </h4>
                <ul className="space-y-1.5 m-0 p-0 list-none">
                  {project.challenges.map((challenge, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-color)]">
                      <span className="text-[var(--first-color)] font-bold">&bull;</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-white/10 bg-[hsl(240,8%,5%)] flex items-center justify-end">
            <button
              onClick={onClose}
              className="button text-xs py-2 px-6 cursor-pointer"
            >
              <span>Close Window</span>
              <i className="ri-close-line"></i>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
