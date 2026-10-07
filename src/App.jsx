import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 350);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = ({ type, message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current));
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[var(--body-color)] text-[var(--text-color)] relative font-sans selection:bg-[var(--first-color)]/30 selection:text-white">

      {/* Top Animated Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[var(--first-color-alt)] via-[var(--first-color-light)] to-[var(--first-color-alt)] origin-left z-50 pointer-events-none shadow-[0_0_12px_var(--first-color)]"
      />

      {/* Top Header & Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections Matching Reference */}
      <main className="main relative z-10">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        <ExperienceSection />

        <SkillsSection />

        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Printable / Downloadable Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Global Feedback Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Floating Animated Back-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[var(--container-color)] text-[var(--title-color)] shadow-[0_0_20px_rgba(138,112,237,0.3)] border border-[var(--first-color)]/40 hover:border-[var(--first-color)] hover:text-[var(--first-color)] transition-colors cursor-pointer flex items-center justify-center text-lg"
            title="Back to top"
            aria-label="Back to top"
          >
            <i className="ri-arrow-up-line"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
