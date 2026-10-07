import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'work', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', id: 'about', label: 'About Me' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#work', id: 'work', label: 'Experience' },
    { href: '#services', id: 'services', label: 'What I Offer' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="header" id="header">
      <div className="blob-animate"></div>
      <nav className="nav container flex justify-between items-center py-4">
        {/* LOGO */}
        <a href="#home" className="nav__logo text-xl font-bold tracking-tight">
          {personalInfo.name}
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="nav__list flex items-center gap-8 m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav__link ${activeSection === link.id ? 'active-link' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={onOpenResume}
            className="px-4 py-1.5 rounded-full border border-[var(--first-color)] text-[var(--title-color)] text-xs font-semibold hover:bg-[var(--first-color)] hover:text-white transition-all shadow-[0_0_15px_rgba(138,112,237,0.3)] cursor-pointer flex items-center gap-1.5"
            style={{ fontFamily: 'var(--second-font)' }}
          >
            <span>Resume</span>
            <i className="ri-file-list-2-line"></i>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenResume}
            className="p-1.5 rounded-lg border border-[var(--first-color)] text-xs text-[var(--first-color)]"
            title="Resume"
          >
            <i className="ri-file-list-2-line text-base"></i>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-[var(--title-color)] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(240,8%,6%)] border-b border-white/10 px-6 py-5 space-y-4 shadow-xl">
          <ul className="flex flex-col gap-4 m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-wide block ${
                    activeSection === link.id
                      ? 'text-[var(--first-color)]'
                      : 'text-[var(--title-color)] hover:text-[var(--first-color)]'
                  }`}
                  style={{ fontFamily: 'var(--second-font)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2 border-t border-white/5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-full bg-[var(--first-color-alt-2)] text-white text-xs font-semibold flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--second-font)' }}
            >
              <span>View Resume</span>
              <i className="ri-file-list-2-line"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
