import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="fixed bottom-6 left-6 z-[1100] flex items-center gap-3 px-5 py-3.5 rounded-2xl 
                   bg-[hsl(240,8%,8%)] border border-[var(--first-color)]/50 shadow-[0_0_25px_rgba(138,112,237,0.3)] text-[var(--title-color)] max-w-md"
      >
        <div className="flex-shrink-0 text-lg text-emerald-400">
          <i className="ri-checkbox-circle-fill"></i>
        </div>
        <div className="text-sm font-medium text-[var(--title-color)]">
          {toast.message}
        </div>
        <button
          onClick={onClose}
          className="ml-2 p-1 rounded-md text-[var(--text-color)] hover:text-white transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <i className="ri-close-line text-base"></i>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
