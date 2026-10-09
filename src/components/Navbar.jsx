import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe, Search, ArrowRight, HelpCircle, UserCheck, Compass, Sparkles, Stethoscope, Heart, Baby, Plane, Monitor, TestTube, Activity, Zap, Snowflake, Shield, Dna, HeartHandshake } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activePage = 'home', onNavigate, onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isPinned, setIsPinned] = useState(false); // Keeps dropdown stuck open when clicked
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsPinned(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home', href: '#', hasDropdown: false },
    { 
      name: 'About', 
      page: 'about', 
      href: '#about', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', page: 'about', href: '#about', desc: 'Our journey, clinic story & mission' },
        { name: 'Why Choose Us', page: 'why-choose-us', href: '#why-choose-us', desc: 'Interactive stacked services & features' },
        { name: 'Our Team', page: 'about', href: '#about', desc: 'Expert fertility specialists & team' },
        { name: 'FAQ', page: 'faq', href: '#faq', desc: 'Frequently asked fertility questions' },
      ]
    },
    { name: 'Our Team', page: 'about', href: '#about', hasDropdown: false },
    { name: 'Events', page: 'home', href: '#events', hasDropdown: false },
    { name: 'Contact', page: 'contact', href: '#contact', hasDropdown: false },
    { 
      name: 'Services', 
      page: 'home', 
      href: '#treatments', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Pre conceptional counselling', page: 'pre-conceptional', href: '#pre-conceptional' },
        { name: 'Evaluation of infertility', page: 'evaluation-infertility', href: '#evaluation-infertility' },
        { name: 'Follicular Monitoring', page: 'follicular-monitoring', href: '#follicular-monitoring' },
        { name: 'Semen Analysis', page: 'semen-analysis', href: '#semen-analysis' },
        { name: 'Intra Uterine Insemination (IUI)', page: 'iui', href: '#iui' },
        { name: 'IVF/ICSI', page: 'ivf-icsi', href: '#ivf-icsi' },
        { name: 'Laser Assisted Hatching', page: 'laser-assisted-hatching', href: '#laser-assisted-hatching' },
        { name: 'Embryo freezing', page: 'embryo-freezing', href: '#embryo-freezing' },
        { name: 'Egg & sperm and embryo freezing', page: 'egg-sperm-embryo-freezing', href: '#egg-sperm-embryo-freezing' },
        { name: 'PGS/PGD', page: 'pgs-pgd', href: '#pgs-pgd' },
      ]
    },
    { name: 'International Patient Service', page: 'international', href: '#international', hasDropdown: false },
    { 
      name: 'Fertility Preservation Program', 
      page: 'egg-sperm-embryo-freezing', 
      href: '#egg-sperm-embryo-freezing', 
      hasDropdown: false,
      isSpecial: true 
    },
    { 
      name: 'Our Locations', 
      page: 'contact', 
      href: '#contact', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Kollam Clinic', page: 'contact', href: '#kollam', desc: 'Ayathil, Kallumthazham, Kollam' },
        { name: 'Trivandrum Clinic', page: 'contact', href: '#trivandrum', desc: 'Varkala, Trivandrum' },
        { name: 'Aleppy Clinic', page: 'contact', href: '#aleppy', desc: 'Kattanam, Alappuzha' },
      ]
    },
  ];

  const handleLinkClick = (e, link) => {
    if (link.hasDropdown) {
      e.preventDefault();
      e.stopPropagation();
      if (openDropdown === link.name && isPinned) {
        // Toggle closed if already pinned open
        setOpenDropdown(null);
        setIsPinned(false);
      } else {
        // Pin/Stuck open when clicked
        setOpenDropdown(link.name);
        setIsPinned(true);
      }
    } else {
      setOpenDropdown(null);
      setIsPinned(false);
      setIsMobileMenuOpen(false);
      if (onNavigate) {
        onNavigate(link.page || 'home', link.href);
      }
    }
  };

  const handleMouseEnter = (linkName) => {
    if (!isPinned) {
      setOpenDropdown(linkName);
    }
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownItemClick = (e, item) => {
    e.stopPropagation();
    setOpenDropdown(null);
    setIsPinned(false);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.page, item.href);
    }
  };

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <header className="navbar" ref={dropdownRef}>
          
          <div className="navbar-logo">
            <a href="#" onClick={(e) => { e.preventDefault(); setOpenDropdown(null); setIsPinned(false); if(onNavigate) onNavigate('home'); }}>
              <img src="/logo.png" alt="Neovita" className="logo-img" />
              <div className="logo-tagline">FERTILITY FOR TOMORROW</div>
            </a>
          </div>

          <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {navLinks.map((link) => {
                const isDropdownOpen = openDropdown === link.name;
                const isCurrentActive = 
                  (link.name === 'Home' && activePage === 'home') ||
                  (link.name === 'About' && (activePage === 'about' || activePage === 'faq' || activePage === 'why-choose-us' || activePage === 'stacked-services')) ||
                  (link.name === 'Our Team' && activePage === 'our-team') ||
                  (link.name === 'Events' && activePage === 'events') ||
                  (link.name === 'Contact' && activePage === 'contact') ||
                  (link.name === 'Services' && (activePage === 'services' || activePage === 'treatments')) ||
                  (link.name === 'International Patient Service' && activePage === 'international') ||
                  (link.name === 'Fertility Preservation Program' && activePage === 'egg-sperm-embryo-freezing') ||
                  (link.name === 'Our Locations' && activePage === 'locations');
                const isSpecial = link.isSpecial || link.name === 'Fertility Preservation Program';

                return (
                  <li 
                    key={link.name} 
                    className={`nav-item ${link.hasDropdown ? 'has-dropdown' : ''} ${isDropdownOpen ? 'dropdown-active' : ''}`}
                    onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                    onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                  >
                    <a 
                      href={link.href} 
                      className={`nav-link-anchor ${isCurrentActive ? 'active' : ''} ${isSpecial ? 'special-preservation-link' : ''}`}
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && <ChevronDown size={14} className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />}
                    </a>

                    {/* Dropdown Menu */}
                    {link.hasDropdown && link.dropdownItems && (
                      <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                        <div className="dropdown-menu-inner">
                          {link.dropdownItems.map((item, idx) => {
                            return (
                              <a
                                key={idx}
                                href={item.href}
                                className={`dropdown-item ${activePage === item.page && ((item.name === 'FAQ' && activePage === 'faq') || (item.name === 'About Us' && activePage === 'about')) ? 'active-item' : ''}`}
                                onClick={(e) => handleDropdownItemClick(e, item)}
                              >
                                <span className="item-title">{item.name}</span>
                                {item.desc && <span className="item-desc">{item.desc}</span>}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="navbar-right">
            <div className="navbar-utils">
              <button className="util-btn lang-btn" aria-label="Language selector">
                <Globe size={18} />
                <span>EN</span>
              </button>
              <div className="util-divider"></div>
              <button className="util-btn" aria-label="Search FAQ and Services" onClick={() => { setOpenDropdown(null); setIsPinned(false); onNavigate && onNavigate('faq'); }}>
                <Search size={18} />
              </button>
            </div>
            
            <button className="navbar-btn-gradient" onClick={() => { setOpenDropdown(null); setIsPinned(false); onBookConsultation && onBookConsultation(); }}>
              Book Consultation <ArrowRight size={16} className="btn-icon-svg" />
            </button>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </header>
      </div>
    </div>
  );
};

export default Navbar;
