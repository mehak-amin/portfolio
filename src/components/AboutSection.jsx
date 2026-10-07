import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export const AboutSection = ({ onOpenResume }) => {
  return (
    <section className="about section relative" id="about">
      <div className="about__shadow"></div>

      <div className="about__container container grid items-center">
        {/* ABOUT DATA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about__data"
        >
          <h2 className="section__title text-left">
            <span>Creativity</span>
            <br />
            Is My Passion
          </h2>

          <p className="about__description">
            I'm a <b>Software Developer & Frontend Architect</b> passionate about engineering high-impact, responsive web platforms with modern <b>clean code and architectural excellence</b>.
            Graduated First Class with Distinction in Computer Science from <b>University of Kashmir</b>, I specialize in scalable <b>React.js, Next.js, Redux Toolkit, Socket.IO real-time communication</b>, and seamless <b>Stripe payment architectures</b>.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button onClick={onOpenResume} className="button cursor-pointer">
              <span>View Resume</span>
              <i className="ri-file-list-2-line"></i>
            </button>
            <a href="#contact" className="button bg-transparent border-white/20 text-[var(--title-color)] hover:border-[var(--first-color)]">
              <span>Let's Talk</span>
              <i className="ri-send-plane-line"></i>
            </a>
          </div>
        </motion.div>

        {/* ABOUT IMAGE WITH DUAL BLOBS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about__image relative flex justify-center items-center py-6 z-10"
        >
          <div className="blob-animate"></div>
          <div className="blob-animate"></div>

          <div className="relative z-10 p-2 sm:p-2.5 rounded-[2.2rem] bg-gradient-to-b from-white/20 via-white/10 to-transparent border border-white/15 shadow-[0_0_50px_rgba(138,112,237,0.35)] backdrop-blur-md group">
            <div className="w-[260px] h-[330px] sm:w-[290px] sm:h-[370px] overflow-hidden rounded-[1.8rem] relative shadow-inner">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,8%,5%)]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Experience Pill Badge */}
            <div className="absolute -bottom-2 left-2 sm:-left-2 bg-[hsl(240,8%,8%)]/95 border border-[var(--first-color)]/50 px-3.5 py-1.5 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex items-center gap-2 backdrop-blur-md z-20">
              <i className="ri-code-s-slash-line text-[var(--first-color)]"></i>
              <span className="text-xs font-semibold text-white tracking-wide" style={{ fontFamily: 'var(--second-font)' }}>
                3 Years Exp
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
