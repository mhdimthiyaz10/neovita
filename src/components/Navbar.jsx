import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activePage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isPinned, setIsPinned] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
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
        { name: 'FAQ', page: 'faq', href: '#faq', desc: 'Frequently asked fertility questions' },
      ]
    },
    { name: 'Our Team', page: 'our-team', href: '#our-team', hasDropdown: false },
    { name: 'Events', page: 'events', href: '#events', hasDropdown: false },
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
      name: 'Academy', 
      page: 'academy', 
      href: 'https://tobinembryologist.com', 
      isExternal: true, 
      hasDropdown: false 
    },
    { 
      name: 'Our Locations', 
      page: 'contact', 
      href: '#contact', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Kollam Clinic', page: 'contact', href: '#kollam', desc: 'Ayathil, Kallumthazham, Kollam' },
        { name: 'Ochira Clinic', page: 'contact', href: '#ochira', desc: 'RCPM Hospital, Ochira' },
      ]
    },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isExternal) {
      setOpenDropdown(null);
      setIsPinned(false);
      setIsMobileMenuOpen(false);
      return;
    }
    if (link.hasDropdown) {
      e.preventDefault();
      e.stopPropagation();
      if (openDropdown === link.name && isPinned) {
        setOpenDropdown(null);
        setIsPinned(false);
      } else {
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

  const toggleMobileSubmenu = (e, linkName) => {
    e.stopPropagation();
    setMobileExpanded((prev) => ({
      ...prev,
      [linkName]: !prev[linkName]
    }));
  };

  return (
    <div className={`tourera-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <header className="tourera-navbar" ref={dropdownRef}>
        
        {/* Left: Shiny Neon Neovita Logo + Thin Vertical Divider */}
        <div className="navbar-brand-group">
          <a 
            href="#" 
            className="navbar-brand-link"
            onClick={(e) => { 
              e.preventDefault(); 
              setOpenDropdown(null); 
              setIsPinned(false); 
              setIsMobileMenuOpen(false); 
              if (onNavigate) onNavigate('home'); 
            }}
            title="Neovita Fertility Clinic"
          >
            <div className="neovita-neon-logo-wrap">
              <div className="neovita-neon-halo" aria-hidden="true" />
              <div className="neovita-neon-logo" />
            </div>
          </a>
          <div className="navbar-vertical-divider" aria-hidden="true" />
        </div>

        {/* Mobile-only brand */}
        <div className="navbar-mobile-brand">
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); 
              if (onNavigate) onNavigate('home'); 
            }}
          >
            <div className="neovita-neon-logo-wrap mobile-wrap">
              <div className="neovita-neon-halo" aria-hidden="true" />
              <div className="neovita-neon-logo mobile-logo" />
            </div>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="tourera-nav-center">
          <ul className="tourera-nav-list">
            {navLinks.map((link) => {
              const isDropdownOpen = openDropdown === link.name;
              const isCurrentActive = 
                (link.name === 'Home' && activePage === 'home') ||
                (link.name === 'About' && (activePage === 'about' || activePage === 'faq')) ||
                (link.name === 'Our Team' && activePage === 'our-team') ||
                (link.name === 'Events' && activePage === 'events') ||
                (link.name === 'Contact' && activePage === 'contact') ||
                (link.name === 'Services' && (activePage === 'services' || activePage === 'treatments')) ||
                (link.name === 'International Patient Service' && activePage === 'international') ||
                (link.name === 'Fertility Preservation Program' && activePage === 'egg-sperm-embryo-freezing') ||
                (link.name === 'Academy' && activePage === 'academy') ||
                (link.name === 'Our Locations' && activePage === 'locations');

              return (
                <li 
                  key={link.name} 
                  className={`tourera-nav-item ${link.hasDropdown ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                >
                  <a 
                    href={link.href} 
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className={`tourera-nav-link ${isCurrentActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown size={11} className={`tourera-chevron ${isDropdownOpen ? 'rotate' : ''}`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div className={`tourera-dropdown-menu ${link.dropdownItems.length > 4 ? 'multi-column' : ''} ${isDropdownOpen ? 'show' : ''}`}>
                      {link.dropdownItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="tourera-dropdown-item"
                          onClick={(e) => handleDropdownItemClick(e, item)}
                        >
                          <span className="item-title">{item.name}</span>
                          {item.desc && <span className="item-desc">{item.desc}</span>}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Hamburger Button */}
        <button 
          className="tourera-mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </header>

      {/* Mobile/Tablet Elegant Glass Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="tourera-mobile-panel">
          <ul className="tourera-mobile-list">
            {navLinks.map((link) => {
              const isExpanded = !!mobileExpanded[link.name];
              const isCurrentActive = 
                (link.name === 'Home' && activePage === 'home') ||
                (link.name === 'About' && (activePage === 'about' || activePage === 'faq')) ||
                (link.name === 'Our Team' && activePage === 'our-team') ||
                (link.name === 'Events' && activePage === 'events') ||
                (link.name === 'Contact' && activePage === 'contact') ||
                (link.name === 'Services' && (activePage === 'services' || activePage === 'treatments')) ||
                (link.name === 'International Patient Service' && activePage === 'international') ||
                (link.name === 'Fertility Preservation Program' && activePage === 'egg-sperm-embryo-freezing') ||
                (link.name === 'Academy' && activePage === 'academy') ||
                (link.name === 'Our Locations' && activePage === 'locations');

              return (
                <li key={link.name} className="tourera-mobile-item">
                  <div className="tourera-mobile-link-row">
                    <a 
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className={`tourera-mobile-link ${isCurrentActive ? 'active' : ''}`}
                      onClick={(e) => {
                        if (link.hasDropdown) {
                          e.preventDefault();
                          toggleMobileSubmenu(e, link.name);
                        } else {
                          handleLinkClick(e, link);
                        }
                      }}
                    >
                      {link.name}
                    </a>
                    {link.hasDropdown && (
                      <button 
                        className="tourera-mobile-chevron-btn"
                        onClick={(e) => toggleMobileSubmenu(e, link.name)}
                        type="button"
                      >
                        <ChevronDown size={16} className={`tourera-chevron ${isExpanded ? 'rotate' : ''}`} />
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && isExpanded && link.dropdownItems && (
                    <div className="tourera-mobile-submenu">
                      {link.dropdownItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="tourera-mobile-sublink"
                          onClick={(e) => handleDropdownItemClick(e, item)}
                        >
                          <span className="mobile-item-title">{item.name}</span>
                          {item.desc && <span className="mobile-item-desc">{item.desc}</span>}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;
