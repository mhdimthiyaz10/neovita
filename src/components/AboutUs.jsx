import React from 'react';
import { Microscope, User, HeartPulse, HeartHandshake } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        
        {/* Left Content Column */}
        <div className="about-content">
          <div className="about-eyebrow">
            <span className="eyebrow-line"></span>
            ABOUT US
          </div>
          
          <h2 className="about-headline">
            Empowering Transformations Through <br className="hidden md:block" />
            <span className="highlight-purple">Personalized Care</span>
          </h2>
          
          <p className="about-text">
            Based in Kollam, the Southern district of Kerala, God's own country, Neovita Fertility Centre is a Fertility Clinic established in November 2022, to lend a helping hand to those couples who have not been fortunate enough to conceive a child naturally.
          </p>
          <p className="about-text">
            Neovita is the brain child of a few passionate fertility professionals who with their knowledge and experience, gained through years of working in many fertility centres inside and outside the country, wanted to initiate a facility in their home state that offers affordable yet scientifically advanced fertility treatment.
          </p>
          
          <div className="about-trust">
            <div className="trust-item">
              <div className="trust-icon-wrapper"><Microscope size={20} /></div>
              <span>Advanced<br/>Technology</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-icon-wrapper"><User size={20} /></div>
              <span>Personalised<br/>Treatment</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-icon-wrapper"><HeartPulse size={20} /></div>
              <span>Higher<br/>Success Rates</span>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="about-visual">
          <div className="about-blob-bg"></div>
          <img src="/about-couple.jpg" alt="Happy couple expecting a baby" className="about-image" />
          
          {/* Floating Badge */}
          <div className="about-floating-badge">
            <div className="badge-icon-wrapper">
              <HeartHandshake size={24} color="#5E239D" />
            </div>
            <div className="badge-text">
              <span className="badge-title">Your Dream.</span>
              <span className="badge-subtitle">Our Commitment.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
