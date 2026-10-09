import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';
import './SemenAnalysisPage.css';

const SemenAnalysisPage = ({ onNavigateBack, onBookConsultation }) => {
  return (
    <div className="semen-page">

      {/* Back Navigation Bar */}
      <div className="container semen-back-container">
        <button className="semen-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* SECTION 1 — MAIN HERO CONTENT (Exact Male Specialist Graphic & Paragraphs) */}
      <section className="semen-hero-section">
        <div className="container">
          <div className="semen-hero-grid">

            {/* LEFT: Exact Male Specialist Lab Organic Graphic */}
            <div className="semen-hero-left">
              <div className="semen-image-wrapper">
                <img 
                  src="/semen_analysis_hero.png" 
                  alt="Male fertility specialist examining semen sample with microscope in clean laboratory" 
                  className="semen-reference-img"
                />
              </div>
            </div>

            {/* RIGHT: Editorial Content with Cormorant Garamond Font Standard */}
            <div className="semen-hero-right">
              
              {/* Eyebrow */}
              <div className="semen-philosophy-eyebrow">
                <span>OUR PHILOSOPHY</span>
                <span className="eyebrow-line-right"></span>
              </div>

              {/* Headline */}
              <h1 className="semen-headline">
                Semen Analysis
              </h1>

              {/* Exact Paragraph Structure */}
              <div className="semen-body-content">
                <p>
                  Semen analysis is one of the basic tests done for the males. This is the examination of the semen under a microscope to see for the sperm count(number), sperm motility(movement) and morphology,the shape of the sperm.
                </p>

                <p>
                  Sample is given after avoiding ejaculation (whether through sex or masturbation) for two to seven days. Ideally, a sample should be collected in a clinic itself after masturbation; if this is not possible, the alternative is to collect a sample at home in a sterile laboratory container and delivered to the clinic within one hour of collection.
                </p>

                <p>
                  The semen analysis reporting is done based on the latest WHO guidelines.
                </p>

                <p>
                  A repeat analysis may be needed if the initial test is abnormal.
                </p>

                <p>
                  Additional blood tests or ultra sound may be needed if the test report is abnormal.
                </p>
              </div>

              <div className="semen-hero-cta-wrap">
                <button className="btn-editorial-purple" onClick={onBookConsultation}>
                  <span>Book Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Organic Bottom Wave Curves */}
      <div className="semen-bottom-wave-left"></div>
      <div className="semen-bottom-wave-right"></div>

    </div>
  );
};

export default SemenAnalysisPage;
