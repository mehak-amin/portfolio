import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export const HeroSection = ({ onOpenResume }) => {
  // Animated profession cycler
  const titles = [
    { main: "Frontend", sub: "Architect" },
    { main: "Software", sub: "Developer" },
    { main: "React & Next.js", sub: "Engineer" },
    { main: "Real-Time", sub: "Web Systems" },
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <section className="home section section-top section-two relative" id="home">
      <div className="home__shadow"></div>

      <div className="home__container container grid items-center">
        {/* LEFT: NAME & GREETING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="home__data"
        >
          <h3 className="home__greeting">Hello, I'm</h3>
          <h1 className="home__name">
            Mehak <br />
            Amin
          </h1>
          <p className="text-sm text-[var(--text-color)] max-w-xs mt-2 hidden sm:block">
            Engineering high-performance web systems with nearly 3 years of production expertise.
          </p>
        </motion.div>

        {/* CENTER: PROFILE VISUAL WITH ANIMATED BLOB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="home__image relative flex justify-center items-center py-6 z-10"
        >
          <div className="blob-animate"></div>
          <div className="relative z-10 p-2 sm:p-2.5 rounded-[2.2rem] bg-gradient-to-b from-white/20 via-white/10 to-transparent border border-white/15 shadow-[0_0_50px_rgba(138,112,237,0.35)] backdrop-blur-md group">
            <div className="w-[270px] h-[340px] sm:w-[320px] sm:h-[400px] overflow-hidden rounded-[1.8rem] relative shadow-inner">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,8%,5%)]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-2 right-2 sm:-right-2 bg-[hsl(240,8%,8%)]/95 border border-[var(--first-color)]/50 px-3.5 py-1.5 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex items-center gap-2 backdrop-blur-md z-20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-white tracking-wide" style={{ fontFamily: 'var(--second-font)' }}>
                Open to Work
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: PROFESSION INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="home__info"
        >
          <h3 className="home__split">Creative</h3>

          <div className="h-24 sm:h-28 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h2 className="home__profession-1">
                  {titles[titleIndex].main}
                </h2>
                <h2 className="home__profession-2 text-[var(--title-color)]">
                  {titles[titleIndex].sub}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* SOCIAL LINKS (LEFT EDGE) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="home__social"
        >
          <a
            href="https://www.linkedin.com/in/mehak-amin-0168492a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
            title="LinkedIn"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
            title="GitHub"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            href="mailto:mehak.amin11@gmail.com"
            className="home__social-link"
            title="Email"
          >
            <i className="ri-mail-line"></i>
          </a>
          <a
            href="https://wa.me/917889406043"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
            title="WhatsApp"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
        </motion.div>

        {/* ROTATED RESUME LINK (RIGHT EDGE) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="home__cv"
          onClick={onOpenResume}
        >
          <span>Resume</span>
          <i className="ri-file-list-2-line"></i>
        </motion.div>
      </div>
    </section>
  );
};
