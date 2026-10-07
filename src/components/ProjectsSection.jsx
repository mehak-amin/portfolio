import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

export const ProjectsSection = ({ onSelectProject }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const visibleProjects = projectsData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section__title text-center md:text-left">
          I make Incredible <br />
          <span>Projects</span>
        </h2>
      </div>

      <div className="projects__container container">
        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="projects__card"
            >
              {/* GLOWING BLOB */}
              <div className="blob"></div>

              {/* CARD NUMBER & CATEGORY */}
              <div className="projects__number">
                <h1>{project.number || `0${index + 1}`}</h1>
                <h3>{project.category || 'Web'}</h3>
              </div>

              {/* PROJECT INFO */}
              <div className="projects__data">
                <h1 className="projects__title">
                  {project.title}
                </h1>
                <p className="projects__subtitle">Techstack used</p>
                <p className="projects__description">
                  {project.badges ? project.badges.join(', ') : project.tagline}
                </p>
              </div>

              {/* PROJECT PREVIEW IMAGE & ACTION BUTTON */}
              <div className="projects__image group">
                <img
                  src={project.image || 'assets/img/project-1.png'}
                  alt={project.title}
                  className="projects__img"
                />
                <button
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="projects__button"
                  title="View Project Details"
                  aria-label={`View details of ${project.title}`}
                >
                  <i className="ri-arrow-right-up-long-line"></i>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PAGINATION BULLETS & CONTROLS */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[var(--title-color)] hover:border-[var(--first-color)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Previous Projects"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === i
                    ? 'w-8 bg-[var(--first-color)] shadow-[0_0_12px_var(--first-color)]'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[var(--title-color)] hover:border-[var(--first-color)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Next Projects"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
