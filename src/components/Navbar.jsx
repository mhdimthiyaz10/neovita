import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe, Search, ArrowRight, HelpCircle, Info } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sticky Dropdown: Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (view, sectionId) => {
    setIsMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    if (onNavigate) {
      onNavigate(view);
    }
    if (sectionId && view === 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <header className="navbar">
          
          <div className="navbar-logo">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
              <img src="/logo.png" alt="Neovita" className="logo-img" />
              <div className="logo-tagline">FERTILITY FOR TOMORROW</div>
            </a>
          </div>

          <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a 
                  href="#" 
                  className={currentView === 'home' ? 'active' : ''} 
                  onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                >
                  Home
                </a>
              </li>

              {/* About item with Sticky Click Dropdown */}
              <li 
                className="has-dropdown-item"
                ref={dropdownRef}
              >
                <a 
                  href="#" 
                  className={currentView === 'about' || aboutDropdownOpen ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setAboutDropdownOpen((prev) => !prev);
                  }}
                >
                  About
                  <ChevronDown size={14} className={`dropdown-icon ${aboutDropdownOpen ? 'rotate' : ''}`} />
                </a>

                {aboutDropdownOpen && (
                  <div className="navbar-dropdown-menu">
                    <button 
                      className="dropdown-link-item"
                      onClick={() => handleNavClick('about')}
                    >
                      <Info size={16} className="menu-icon" />
                      <span>About Us</span>
                    </button>
                    <button 
                      className="dropdown-link-item"
                      onClick={() => handleNavClick('faq')}
                    >
                      <HelpCircle size={16} className="menu-icon" />
                      <span>FAQ</span>
                    </button>
                  </div>
                )}
              </li>

              <li>
                <a href="#team" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                  Services
                  <ChevronDown size={14} className="dropdown-icon" />
                </a>
              </li>
              <li>
                <a href="#international" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                  International Patient Service
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar-right">
            <div className="navbar-utils">
              <button className="util-btn lang-btn">
                <Globe size={18} />
                <span>EN</span>
              </button>
              <div className="util-divider"></div>
              <button className="util-btn">
                <Search size={18} />
              </button>
            </div>
            
            <button className="navbar-btn-gradient" onClick={() => handleNavClick('home', 'contact')}>
              Book Consultation <ArrowRight size={16} className="btn-icon-svg" />
            </button>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </header>
      </div>
    </div>
  );
};

export default Navbar;
