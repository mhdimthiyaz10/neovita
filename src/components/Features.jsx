import React from 'react';
import { Users, Trophy, UserPlus } from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <div className="features-subtitle-wrapper">
            <span className="features-line"></span>
            <span className="features-subtitle">OUR SPECIFICATION</span>
            <span className="features-line"></span>
          </div>
          
          <h2 className="features-title">
            Top Features For Your <span className="highlight">Convenience</span>
          </h2>
          <p className="features-description">
            Leading the way in fertility care, the Neovitaivf in Kerala offers state-of-the-art facilities and
            compassionate support, guiding individuals and couples on their journey to parenthood with expertise
            and care.
          </p>
        </div>
        
        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="22" y1="12" x2="15" y2="12"></line>
              </svg>
            </div>
            <h3 className="feature-value">100%</h3>
            <div className="feature-divider"></div>
            <p className="feature-label">Successful IVF</p>
            <div className="card-decoration-bottom"></div>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <Users className="feature-icon" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="feature-value">3k+</h3>
            <div className="feature-divider"></div>
            <p className="feature-label">Trusted Client</p>
            <div className="card-decoration-bottom"></div>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <Trophy className="feature-icon" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="feature-value">78</h3>
            <div className="feature-divider"></div>
            <p className="feature-label">Awards & Recognition</p>
            <div className="card-decoration-bottom"></div>
          </div>

          {/* Card 4 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <UserPlus className="feature-icon" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="feature-value">35+</h3>
            <div className="feature-divider"></div>
            <p className="feature-label">Professional Team</p>
            <div className="card-decoration-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
