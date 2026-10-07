import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData, educationData } from '../data/portfolioData';

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="work section" id="work">
      <h2 className="section__title">
        <span>My Work</span>
        <br />
        Experience
      </h2>

      <div className="work__container container grid">
        {/* TABS SWITCHER */}
        <div className="work__tabs">
          <button
            onClick={() => setActiveTab('experience')}
            className={`work__button ${activeTab === 'experience' ? 'work-active' : ''}`}
          >
            Experience <i className="ri-briefcase-3-line"></i>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`work__button ${activeTab === 'education' ? 'work-active' : ''}`}
          >
            Education <i className="ri-graduation-cap-line"></i>
          </button>
        </div>

        {/* TIMELINE AREA */}
        <div className="work__area">
          <div className="work__line"></div>

          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="work__content"
              >
                {experienceData.map((item, idx) => (
                  <div key={idx} className="work__card">
                    <div className="work__data">
                      <div>
                        <h1 className="work__title">{item.role}</h1>
                        <h3 className="work__subtitle">{item.company} — {item.location}</h3>
                      </div>
                      <h2 className="work__year">{item.period}</h2>
                    </div>

                    <p className="work__description">{item.summary}</p>

                    {item.highlights && (
                      <ul className="space-y-1.5 mt-2 pl-4 list-disc text-sm text-[var(--text-color)]">
                        {item.highlights.slice(0, 3).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="work__content"
              >
                {educationData.map((item, idx) => (
                  <div key={idx} className="work__card">
                    <div className="work__data">
                      <div>
                        <h1 className="work__title">{item.degree}</h1>
                        <h3 className="work__subtitle">{item.institution}</h3>
                      </div>
                      <h2 className="work__year">{item.year}</h2>
                    </div>

                    <p className="work__description">{item.description}</p>
                    {item.score && (
                      <div className="text-xs font-semibold text-[var(--first-color)] mt-1">
                        Academic Standing: {item.score}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
