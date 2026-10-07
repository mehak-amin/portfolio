import React from 'react';
import { testimonialsData } from '../data/portfolioData';

export const TestimonialsSection = () => {
  // Duplicate testimonials to create seamless infinite scrolling loop
  const duplicatedList = [...testimonialsData, ...testimonialsData];

  return (
    <section className="testimonials section relative" id="testimonials">
      <div className="container">
        <h2 className="section__title text-center md:text-left">
          <span>What They Say</span>
          <br />
          About Me
        </h2>
      </div>

      <div className="testimonials__container">
        {/* ROW 1: FORWARD SCROLL */}
        <div className="testimonial__content">
          {duplicatedList.map((item, index) => (
            <article key={`row1-${index}`} className="testimonials__card">
              <div className="blob"></div>

              <div className="testimonials__data">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonials__img"
                />

                <h2 className="testimonials__name">{item.name}</h2>
                <div className="testimonials__role">{item.role}</div>

                <div className="testimonial__rating">
                  <div className="testimonial__stars">
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                  </div>
                  <h3 className="testimonials__number">{item.rating}</h3>
                </div>

                <p className="testimonials__quote">"{item.text}"</p>
              </div>
            </article>
          ))}
        </div>

        {/* ROW 2: REVERSE SCROLL */}
        <div className="testimonial__content testimonials__reverse">
          {duplicatedList.map((item, index) => (
            <article key={`row2-${index}`} className="testimonials__card">
              <div className="blob"></div>

              <div className="testimonials__data">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonials__img"
                />

                <h2 className="testimonials__name">{item.name}</h2>
                <div className="testimonials__role">{item.role}</div>

                <div className="testimonial__rating">
                  <div className="testimonial__stars">
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                    <i className="ri-star-fill text-amber-400"></i>
                  </div>
                  <h3 className="testimonials__number">{item.rating}</h3>
                </div>

                <p className="testimonials__quote">"{item.text}"</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
