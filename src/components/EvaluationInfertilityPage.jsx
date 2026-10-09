import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Stethoscope, 
  Microscope, 
  Dna 
} from 'lucide-react';
import './EvaluationInfertilityPage.css';

const EvaluationInfertilityPage = ({ onNavigateBack, onBookConsultation }) => {
  return (
    <div className="eval-infertility-page">

      {/* Back Navigation Bar */}
      <div className="container eval-back-container">
        <button className="eval-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* SECTION 1 — MAIN HERO CONTENT (Exact Reference Image Graphic & Layout) */}
      <section className="eval-hero-section">
        <div className="container">
          <div className="eval-hero-grid">

            {/* LEFT: Exact Violet Nurse Graphic extracted from reference image */}
            <div className="eval-hero-left">
              <div className="eval-image-wrapper">
                <img 
                  src="/hero_violet_nurse.png" 
                  alt="Fertility specialist nurse analyzing specimen with microscope" 
                  className="eval-reference-img"
                />
              </div>
            </div>

            {/* RIGHT: Editorial Content with Cormorant Garamond Font Standard */}
            <div className="eval-hero-right">
              
              {/* Eyebrow */}
              <div className="eval-philosophy-eyebrow">
                <span>OUR PHILOSOPHY</span>
                <span className="eyebrow-line-right"></span>
              </div>

              {/* Exact Reference Headline in Cormorant Garamond */}
              <h1 className="eval-headline">
                Science. Expertise.<br />
                New Beginnings.
              </h1>

              {/* Exact Intro Paragraph */}
              <p className="eval-intro-text">
                Any couple who has been trying for a pregnancy for at least one year must undergo an evaluation to find out the reason for not conceiving. Infertility evaluation can commence even before 1 year in case it
              </p>

              {/* 4 Exact Bullet Points */}
              <ul className="eval-bullets-list">
                <li>
                  <span className="bullet-dot"></span>
                  <span>Either of the couple has any known medical condition that can affect their fertility potential</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>Either of them had underwent any cancer treatment</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>The age of the female partner is above 35 years</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>or if the female partner has irregular cycles or had any pelvic surgeries before.</span>
                </li>
              </ul>

              <div className="eval-hero-cta-wrap">
                <button className="btn-editorial-purple" onClick={onBookConsultation}>
                  <span>Book Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — THE SERVICES (Centered 3 Column Cards) */}
      <section className="eval-services-section">
        <div className="container">
          
          <div className="eval-services-header text-center">
            <div className="services-eyebrow">
              <span className="eyebrow-line-flank"></span>
              <span>THE SERVICES</span>
              <span className="eyebrow-line-flank"></span>
            </div>

            <h2 className="services-heading">
              Thoughtfully <span className="heading-italic-lavender">crafted</span> for you
            </h2>
          </div>

          <div className="eval-services-grid">
            
            {/* Card 1 */}
            <div className="service-col-card">
              <div className="service-icon-circle">
                <Stethoscope size={24} strokeWidth={1.5} />
              </div>
              <h3 className="service-card-title">FERTILITY ASSESSMENT</h3>
              <p className="service-card-desc">
                Comprehensive diagnostic evaluations tailored for couples, uncovering underlying factors with precision and care.
              </p>
              <button className="service-explore-link" onClick={onBookConsultation}>
                EXPLORE <ArrowRight size={14} />
              </button>
            </div>

            <div className="col-divider"></div>

            {/* Card 2 */}
            <div className="service-col-card">
              <div className="service-icon-circle">
                <Microscope size={24} strokeWidth={1.5} />
              </div>
              <h3 className="service-card-title">IVF & ICSI</h3>
              <p className="service-card-desc">
                Advanced reproductive technology and micro-injection protocols designed for optimal fertilization success.
              </p>
              <button className="service-explore-link" onClick={onBookConsultation}>
                EXPLORE <ArrowRight size={14} />
              </button>
            </div>

            <div className="col-divider"></div>

            {/* Card 3 */}
            <div className="service-col-card">
              <div className="service-icon-circle">
                <Dna size={24} strokeWidth={1.5} />
              </div>
              <h3 className="service-card-title">EMBRYO & FERTILITY CARE</h3>
              <p className="service-card-desc">
                State-of-the-art cryopreservation, genetic screening, and personalized care for every step of your journey.
              </p>
              <button className="service-explore-link" onClick={onBookConsultation}>
                EXPLORE <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Organic Bottom Wave Curves */}
      <div className="eval-bottom-wave-left"></div>
      <div className="eval-bottom-wave-right"></div>

    </div>
  );
};

export default EvaluationInfertilityPage;
