import React from 'react';
import { Microscope, HeartHandshake, Dna, Award } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        
        {/* Left Content Column */}
        <div className="about-content">
          <div className="about-eyebrow">
            <span className="eyebrow-line"></span>
            ABOUT US
          </div>
          
          <h2 className="about-headline">
            Experience The Best <span className="highlight-purple">IVF Centre In Kerala</span>
          </h2>
          
          <p className="about-text">
            Based in Kollam, the Southern district of Kerala, God's own country, Neovita Fertility Centre is a Fertility Clinic established in November 2022, to lend a helping hand to those couples who have not been fortunate enough to conceive a child naturally.
          </p>
          <p className="about-text">
            Neovita is the brain child of a few passionate fertility professionals who with their knowledge and experience, gained through years of working in many fertility centres inside and outside the country, wanted to initiate a facility in their home state that offers affordable yet scientifically advanced fertility treatment.
          </p>
          <p className="about-text">
            We aim to provide an affordable fertility treatment through the application of state-of-the-art advanced technologies, upholding highest grades of ethics and morality.
          </p>
          
          <div className="about-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon"><Microscope size={22} /></div>
              <span className="pillar-title">Advanced In House Laboratory</span>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon"><HeartHandshake size={22} /></div>
              <span className="pillar-title">World Class Patient Care</span>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon"><Dna size={22} /></div>
              <span className="pillar-title">Advanced Fertility techniques</span>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon"><Award size={22} /></div>
              <span className="pillar-title">Exceptional Quality Services</span>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="about-visual">
          <div className="about-blob-bg"></div>
          <div className="about-image-wrapper">
            <img src="/about-baby-hands.jpg" alt="Baby feet in loving hands" className="about-image" />
          </div>
          
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
