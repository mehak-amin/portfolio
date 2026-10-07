import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer grid place-items-center relative">
      <div className="blob-animate"></div>

      <div className="footer__copy text-sm font-medium">
        All Rights Reserved By <span>{personalInfo.name}</span>
      </div>

      <div className="flex items-center gap-4 my-2">
        <a
          href="#home"
          className="text-xs text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors"
        >
          Back to Top
        </a>
        <span className="text-white/20">•</span>
        <button
          onClick={onOpenResume}
          className="text-xs text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors cursor-pointer"
        >
          Resume
        </button>
        <span className="text-white/20">•</span>
        <a
          href="#contact"
          className="text-xs text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors"
        >
          Contact
        </a>
        <span className="text-white/20">•</span>
        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--text-color)] hover:text-[var(--first-color)] transition-colors"
          title="XML Sitemap for Search Engines"
        >
          Sitemap
        </a>
      </div>

      <div className="footer__year text-xs text-[var(--text-color-light)]">
        &#169; <span id="footer-year">{currentYear}</span> — Crafted with precision &amp; modern web standards
      </div>
    </footer>
  );
};
