import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/portfolioData';

export const SkillsSection = () => {
  // Store open state for each service card by ID. Default first two open
  const [openCards, setOpenCards] = useState({ skills: true, tools: true });

  const toggleCard = (id) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">
        What I <span>Offer</span>
      </h2>

      <div className="services__container container grid">
        {servicesData.map((service, index) => {
          const isOpen = Boolean(openCards[service.id]);
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`services__card ${isOpen ? 'services__open' : 'services__close'}`}
            >
              <div className={`blob ${index % 2 === 1 ? 'blob-2' : ''}`}></div>

              <div className="services__data">
                <h2 className="services__title">{service.title}</h2>
                <p className="services__description">{service.description}</p>
              </div>

              <div className="services__info">
                <h3 className="services__subtitle">{service.subtitle || 'Skills'}</h3>
                <ul className="services__skills m-0 p-0 list-none">
                  {service.skills.map((skill, idx) => (
                    <li key={idx} className="services__skill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => toggleCard(service.id)}
                className="services__button"
                aria-label={`Toggle ${service.title} details`}
              >
                <i className="ri-arrow-down-s-line"></i>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
