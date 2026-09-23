import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Search, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', hasDropdown: false },
    { name: 'About', href: '#', hasDropdown: true },
    { name: 'Our Team', href: '#', hasDropdown: false },
    { name: 'Events', href: '#', hasDropdown: false },
    { name: 'Contact', href: '#', hasDropdown: false },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'International Patient Service', href: '#', hasDropdown: false },
  ];

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <header className="navbar">
          
          <div className="navbar-logo">
            <a href="#">
              <img src="/logo.png" alt="Neovita" className="logo-img" />
              <div className="logo-tagline">FERTILITY FOR TOMORROW</div>
            </a>
          </div>

          <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={link.name === 'Home' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className="dropdown-icon" />}
                  </a>
                </li>
              ))}
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
            
            <button className="navbar-btn-gradient">
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
