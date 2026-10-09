import React from 'react';
import { ArrowLeft, ArrowRight, Snowflake, Heart, Calendar, Phone, ShieldCheck, HeartHandshake, Users } from 'lucide-react';
import './FertilityPreservationPage.css';

// Custom SVG for Embryo Cell Cluster Icon
const EmbryoIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" stroke="#74358F" strokeWidth="1.8" strokeDasharray="3 3"/>
    <circle cx="14" cy="14" r="5" stroke="#74358F" strokeWidth="1.6" fill="#EEE5F2"/>
    <circle cx="22" cy="14" r="4.5" stroke="#74358F" strokeWidth="1.6" fill="#EEE5F2"/>
    <circle cx="14" cy="22" r="4.5" stroke="#74358F" strokeWidth="1.6" fill="#EEE5F2"/>
    <circle cx="22" cy="22" r="5" stroke="#74358F" strokeWidth="1.6" fill="#EEE5F2"/>
  </svg>
);

// Custom SVG for Egg Freezing Preservation Icon
const EggPreservationIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="18" rx="11" ry="13" stroke="#74358F" strokeWidth="1.8" fill="#EEE5F2"/>
    <circle cx="15" cy="15" r="4" stroke="#74358F" strokeWidth="1.4"/>
    <path d="M26 8L28 6M28 8L26 6" stroke="#74358F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 26L10 24M10 26L8 24" stroke="#74358F" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const FertilityPreservationPage = ({ onNavigateBack, onBookConsultation, onNavigate }) => {
  return (
    <div className="fpp-page">
      {/* Top Bar Container */}
      <div className="fpp-container fpp-top-bar">
        <button className="fpp-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={16} /> Return to Home
        </button>
      </div>

      {/* SECTION 1 & 2: TWO-COLUMN HERO SECTION */}
      <section className="fpp-hero-section">
        <div className="fpp-container fpp-hero-grid">
          
          {/* LEFT COLUMN: HERO IMAGE & PURPLE FEATURE STRIP */}
          <div className="fpp-hero-left">
            <div className="fpp-image-card">
              <img 
                src="/fertility_hero_couple.png" 
                alt="Pregnant couple holding belly in golden hour light" 
                className="fpp-hero-img"
              />
            </div>

            {/* Overlapping Purple Feature Panel */}
            <div className="fpp-feature-panel">
              <div className="fpp-feature-item">
                <div className="fpp-feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <div className="fpp-feature-text">
                  <h3>Personalized Care</h3>
                  <p>Tailored fertility solutions for your unique journey</p>
                </div>
              </div>

              <div className="fpp-feature-divider"></div>

              <div className="fpp-feature-item">
                <div className="fpp-feature-icon">
                  <Snowflake size={24} />
                </div>
                <div className="fpp-feature-text">
                  <h3>Advanced Preservation</h3>
                  <p>State-of-the-art technology for the best outcomes</p>
                </div>
              </div>

              <div className="fpp-feature-divider"></div>

              <div className="fpp-feature-item">
                <div className="fpp-feature-icon">
                  <HeartHandshake size={24} />
                </div>
                <div className="fpp-feature-text">
                  <h3>Empowering Choices</h3>
                  <p>Helping you plan today for a healthier tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO CONTENT */}
          <div className="fpp-hero-right">
            <div className="fpp-eyebrow">
              FERTILITY PRESERVATION PROGRAM
            </div>

            <h1 className="fpp-hero-title">
              Preserve Today.<br />
              <span className="purple-emphasis">Empower</span> Tomorrow.
            </h1>

            <p className="fpp-hero-paragraph">
              Neovita IVF’s Fertility Preservation Program is tailored to meet the reproductive needs of individuals looking to store their oocytes (eggs), embryos, or sperm for future use.
            </p>

            <p className="fpp-hero-paragraph">
              For individuals undergoing cancer treatment, the diagnosis and treatment process can be overwhelming. Preserving your eggs or sperm samples before starting cancer treatment can help you feel more comfortable and better prepared for the future. Learning about fertility preservation before beginning cancer treatment can empower you to make an informed decision.
            </p>

            <div className="fpp-hero-action">
              <button className="fpp-learn-more-btn" onClick={onBookConsultation}>
                LEARN MORE <ArrowRight size={16} />
              </button>
            </div>

            {/* Support Information Box */}
            <div className="fpp-support-box">
              <div className="fpp-support-icon">
                <Users size={28} />
              </div>
              <p className="fpp-support-text">
                You are not alone. We are here to support you with compassionate care and expert guidance every step of the way.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SERVICES SECTION */}
      <section className="fpp-services-section">
        <div className="fpp-container">
          
          <div className="fpp-services-header">
            <div className="fpp-services-eyebrow">OUR SERVICES</div>
            <h2 className="fpp-services-title">
              Thoughtfully <span className="purple-italic">crafted</span> for you
            </h2>
            
            {/* Heart Divider Line */}
            <div className="fpp-decorative-divider">
              <span className="divider-line"></span>
              <Heart size={14} className="divider-heart" fill="#74358F" color="#74358F" />
              <span className="divider-line"></span>
            </div>
          </div>

          {/* Three Service Columns */}
          <div className="fpp-services-grid">
            
            {/* Service 1 */}
            <div className="fpp-service-card">
              <div className="fpp-service-icon-wrapper">
                <EmbryoIcon />
              </div>
              <h3 className="fpp-service-card-title">
                Embryo Cryopreservation
              </h3>
              <p className="fpp-service-card-body">
                This procedure involves harvesting eggs, fertilizing them, and then freezing them for future use. These embryos can later be thawed and transferred into the uterus for implantation. Research indicates that embryos can survive the freezing and thawing process with up to 90% success.
              </p>
              <a href="#embryo-freezing" className="fpp-service-link" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('embryo-freezing'); }}>
                LEARN MORE <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 2 */}
            <div className="fpp-service-card">
              <div className="fpp-service-icon-wrapper">
                <EggPreservationIcon />
              </div>
              <h3 className="fpp-service-card-title">
                Egg Freezing (Oocyte Cryopreservation)
              </h3>
              <p className="fpp-service-card-body">
                In this procedure, your unfertilized eggs are harvested and frozen. Unlike human embryos, human eggs do not survive the freezing process as well.
              </p>
              <a href="#egg-sperm-embryo-freezing" className="fpp-service-link" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('egg-sperm-embryo-freezing'); }}>
                LEARN MORE <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 3 */}
            <div className="fpp-service-card">
              <div className="fpp-service-icon-wrapper">
                <Calendar size={32} color="#74358F" />
              </div>
              <h3 className="fpp-service-card-title">
                At What Age Should You<br />Freeze Your Eggs?
              </h3>
              <p className="fpp-service-card-body">
                Fertility begins to decline after the age of thirty and significantly decreases after forty. The optimal time to freeze your eggs is in your late twenties. However, it is still possible to freeze eggs between the ages of thirty and thirty-five.
              </p>
              <a href="#faq" className="fpp-service-link" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('faq'); }}>
                LEARN MORE <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: BOTTOM CTA BANNER */}
      <section className="fpp-cta-section">
        <div className="fpp-container">
          <div className="fpp-cta-banner">
            
            <div className="fpp-cta-left">
              <div className="fpp-cta-phone-icon">
                <Phone size={24} />
              </div>
              <div className="fpp-cta-text-group">
                <h3 className="fpp-cta-title">Take control of your future fertility.</h3>
                <p className="fpp-cta-subtitle">Schedule a consultation with our specialists today.</p>
              </div>
            </div>

            <div className="fpp-cta-right">
              <button className="fpp-cta-btn" onClick={onBookConsultation}>
                BOOK APPOINTMENT <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default FertilityPreservationPage;
