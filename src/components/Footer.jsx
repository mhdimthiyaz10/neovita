import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const handleLink = (e, page, targetHref) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, targetHref);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Column 1: Brand & Bio */}
        <div className="footer-col footer-col-brand">
          <div className="footer-logo">
            <a href="#" onClick={(e) => handleLink(e, 'home')}>
              <img src="/logo.png" alt="Neovita" className="footer-logo-img" />
              <div className="footer-logo-tagline">THE FERTILITY EXPERT</div>
            </a>
          </div>
          <p className="footer-bio">
            Neovita Fertility Centre is a Fertility Clinic established in November 2022, to lend a helping hand to all those couples who have not been fortunate enough to conceive a child naturally.
          </p>
          <div className="footer-email-box">
            <div className="footer-email-icon-box">
              <Mail size={18} className="footer-email-icon" />
            </div>
            <a href="mailto:Info@neovitaivf.com" className="footer-email-link">
              Info@neovitaivf.com
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-col-links">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#" onClick={(e) => handleLink(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#treatments" onClick={(e) => handleLink(e, 'home', '#treatments')}>
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleLink(e, 'home', '#testimonials')}>
                Patient Stories
              </a>
            </li>
            <li>
              <a href="#our-team" onClick={(e) => handleLink(e, 'our-team')}>
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Company Navigation */}
        <div className="footer-col footer-col-contact">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#about" onClick={(e) => handleLink(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleLink(e, 'faq')}>
                FAQ's
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLink(e, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Office Addresses (as per ContactSection) */}
        <div className="footer-col footer-col-addresses">
          <h4 className="footer-col-title">Office Addresses</h4>
          
          <div className="footer-offices-list">
            
            {/* Kollam */}
            <div className="footer-office-item">
              <div className="footer-office-heading">
                <MapPin size={13} className="footer-pin-icon" />
                <span className="footer-office-name">KOLLAM</span>
              </div>
              <p className="footer-office-text">
                KMC 32/2463, 205, First Floor of A. R. Arcade, Ayathil,<br />
                Kollam, Kerala – 691021
              </p>
            </div>

            {/* Ochira (RCPM Hospital) */}
            <div className="footer-office-item">
              <div className="footer-office-heading">
                <MapPin size={13} className="footer-pin-icon" />
                <span className="footer-office-name">OCHIRA</span>
              </div>
              <p className="footer-office-text">
                RCPM Hospital, Changankulangara, Ochira PO,<br />
                Kollam, Kerala – 690526
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Neovita Fertility Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
