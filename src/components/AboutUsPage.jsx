import React from 'react';
import { 
  ArrowLeft, Microscope, HeartHandshake, Dna, Award, Sparkles, 
  MapPin, Calendar, Heart, ShieldCheck, Users, CheckCircle2, PhoneCall
} from 'lucide-react';
import './AboutUsPage.css';

const AboutUsPage = ({ onNavigate }) => {
  return (
    <div className="about-page-wrapper">
      {/* Hero Banner */}
      <section className="about-hero-section">
        <div className="about-hero-glow"></div>
        <div className="container about-hero-container">
          <div className="about-hero-badge">
            <Sparkles size={16} /> ABOUT NEOVITA FERTILITY CENTRE
          </div>
          <h1 className="about-hero-title">
            Experience The Best <span className="highlight-purple">IVF Centre In Kerala</span>
          </h1>
          <p className="about-hero-subtitle">
            Dedicated to helping couples realize their dream of parenthood through cutting-edge reproductive science, moral ethics, and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Main Content & Story Section */}
      <section className="about-main-section">
        <div className="container">
          <div className="about-grid-container">
            
            {/* Left Story Column */}
            <div className="about-story-col">
              <div className="about-eyebrow-tag">
                <span className="eyebrow-dot"></span> OUR STORY & MISSION
              </div>
              
              <h2 className="story-heading">
                Bringing Hope & New Beginnings to Every Family
              </h2>

              <div className="story-paragraph-card">
                <div className="card-accent-line"></div>
                <p>
                  Based in Kollam, the Southern district of Kerala, God's own country, Neovita Fertility Centre is a Fertility Clinic established in November 2022, to lend a helping hand to those couples who have not been fortunate enough to conceive a child naturally.
                </p>
              </div>

              <div className="story-paragraph-card">
                <div className="card-accent-line"></div>
                <p>
                  Neovita is the brain child of a few passionate fertility professionals who with their knowledge and experience, gained through years of working in many fertility centres inside and outside the country, wanted to initiate a facility in their home state that offers affordable yet scientifically advanced fertility treatment.
                </p>
              </div>

              <div className="story-paragraph-card highlight-card">
                <div className="card-accent-line purple"></div>
                <p>
                  We aim to provide an affordable fertility treatment through the application of state-of-the-art advanced technologies, upholding highest grades of ethics and morality.
                </p>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="about-visual-col">
              <div className="visual-card-wrapper">
                <div className="visual-blob-bg"></div>
                <div className="visual-img-frame">
                  <img src="/about-baby-hands.jpg" alt="Baby feet in loving hands" className="visual-img" />
                </div>
                
                {/* Floating Badges */}
                <div className="about-stat-badge top-badge">
                  <div className="stat-icon"><MapPin size={20} /></div>
                  <div className="stat-info">
                    <span className="stat-title">Kollam, Kerala</span>
                    <span className="stat-sub">Established Nov 2022</span>
                  </div>
                </div>

                <div className="about-stat-badge bottom-badge">
                  <div className="stat-icon heart"><Heart size={20} /></div>
                  <div className="stat-info">
                    <span className="stat-title">Your Dream</span>
                    <span className="stat-sub">Our Commitment</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Pillars Section */}
          <div className="about-pillars-section">
            <div className="pillars-header">
              <h2 className="pillars-main-title">
                Why Couples Trust <span className="highlight-purple">Neovita</span>
              </h2>
              <p className="pillars-sub-title">
                Our foundational commitments that drive high success rates and compassionate care.
              </p>
            </div>

            <div className="pillars-4-grid">
              
              <div className="pillar-feature-card">
                <div className="pillar-badge-icon"><Microscope size={26} /></div>
                <h3 className="pillar-card-title">Advanced In House Laboratory</h3>
                <p className="pillar-card-desc">
                  State-of-the-art embryology lab equipped with time-lapse incubators, laser-assisted hatching, and sterile cleanroom environments.
                </p>
                <ul className="pillar-list">
                  <li><CheckCircle2 size={15} /> Cleanroom embryology lab</li>
                  <li><CheckCircle2 size={15} /> Advanced time-lapse incubators</li>
                </ul>
              </div>

              <div className="pillar-feature-card">
                <div className="pillar-badge-icon"><HeartHandshake size={26} /></div>
                <h3 className="pillar-card-title">World Class Patient Care</h3>
                <p className="pillar-card-desc">
                  Treating every couple like our only clients with customized protocols, transparent communication, and 24/7 dedicated support.
                </p>
                <ul className="pillar-list">
                  <li><CheckCircle2 size={15} /> Personalized protocols</li>
                  <li><CheckCircle2 size={15} /> Dedicated emotional support</li>
                </ul>
              </div>

              <div className="pillar-feature-card">
                <div className="pillar-badge-icon"><Dna size={26} /></div>
                <h3 className="pillar-card-title">Advanced Fertility Techniques</h3>
                <p className="pillar-card-desc">
                  Comprehensive array of fertility procedures including ICSI, IUI, Blastocyst culture, PGT genetic screening, and Cryopreservation.
                </p>
                <ul className="pillar-list">
                  <li><CheckCircle2 size={15} /> ICSI & Blastocyst culture</li>
                  <li><CheckCircle2 size={15} /> Advanced Cryopreservation</li>
                </ul>
              </div>

              <div className="pillar-feature-card">
                <div className="pillar-badge-icon"><Award size={26} /></div>
                <h3 className="pillar-card-title">Exceptional Quality Services</h3>
                <p className="pillar-card-desc">
                  High clinical success rates, affordable transparent pricing without hidden fees, and strict adherence to medical ethics.
                </p>
                <ul className="pillar-list">
                  <li><CheckCircle2 size={15} /> Highest ethical standards</li>
                  <li><CheckCircle2 size={15} /> Transparent, affordable pricing</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Values Grid */}
          <div className="about-values-banner">
            <div className="value-item">
              <ShieldCheck size={28} className="val-icon" />
              <h4>Ethical Standards</h4>
              <p>100% transparent and moral medical practices</p>
            </div>
            <div className="val-divider"></div>
            <div className="value-item">
              <Users size={28} className="val-icon" />
              <h4>Expert Team</h4>
              <p>Experienced fertility specialists & embryologists</p>
            </div>
            <div className="val-divider"></div>
            <div className="value-item">
              <Calendar size={28} className="val-icon" />
              <h4>Nov 2022</h4>
              <p>Founded in Kollam, Kerala</p>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="about-cta-card">
            <div className="cta-content">
              <h2>Ready to Begin Your Journey to Parenthood?</h2>
              <p>Schedule a personal consultation with Dr. Anju Madhavan and our expert medical team today.</p>
            </div>
            <button className="about-cta-btn" onClick={() => onNavigate('home')}>
              <PhoneCall size={18} /> Book Free Consultation
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
