import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: 'Email copied to clipboard!',
        });
      }
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    });
  };

  return (
    <section className="contact section relative" id="contact">
      <div className="contact__container container grid">
        {/* HEADER & COPY EMAIL CTA */}
        <div className="contact__data">
          <h2 className="section__title">Contact Me</h2>
          <p className="contact__description">Tell me about your next project.</p>

          <button
            onClick={handleCopyEmail}
            className="contact__button button cursor-pointer"
            id="contact-btn"
          >
            {copied ? (
              <>
                <span>Email Copied</span>
                <i className="ri-check-line text-emerald-400"></i>
              </>
            ) : (
              <>
                <span>Copy Email</span>
                <i className="ri-file-copy-line"></i>
              </>
            )}
            <span className="contact__email">{personalInfo.email}</span>
          </button>
        </div>

        {/* 3-COLUMN CONTACT CONTENT GRID */}
        <div className="contact__content grid">
          {/* COLUMN 1: EMAIL & LOCATION */}
          <div className="contact__info grid">
            <div>
              <h3 className="contact__title">Email</h3>
              <address className="contact__address">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-[var(--first-color)] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </address>
            </div>

            <div>
              <h3 className="contact__title">Location</h3>
              <address className="contact__address">
                {personalInfo.location}
              </address>
            </div>
          </div>

          {/* COLUMN 2: SOCIAL MEDIA */}
          <div className="contact__social">
            <h3 className="contact__title">Social Media</h3>

            <div className="contact__links">
              <a
                href="https://www.linkedin.com/in/mehak-amin-0168492a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <span>LinkedIn</span>
                <i className="ri-arrow-right-up-long-line"></i>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <span>GitHub</span>
                <i className="ri-arrow-right-up-long-line"></i>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="contact__link"
              >
                <span>Direct Mail</span>
                <i className="ri-arrow-right-up-long-line"></i>
              </a>
            </div>
          </div>

          {/* COLUMN 3: DIRECT CHAT CHANNELS */}
          <div className="contact__write">
            <h3 className="contact__title">Write Me & We'll Talk</h3>

            <div className="contact__links">
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <span>WhatsApp</span>
                <i className="ri-arrow-right-up-long-line"></i>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="contact__link"
              >
                <span>Phone Call</span>
                <i className="ri-arrow-right-up-long-line"></i>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Project%20Inquiry`}
                className="contact__link"
              >
                <span>Project Inquiry</span>
                <i className="ri-arrow-right-up-long-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
