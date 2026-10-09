import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './PgsPgdPage.css';

const PgsPgdPage = ({ onNavigateBack, onBookConsultation }) => {
  return (
    <div className="pgs-pgd-page">
      {/* Return to Home Navigation */}
      <div className="container pgs-back-container">
        <button className="pgs-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* MASTER SECTION — EXACT REFERENCE DESIGN LAYOUT */}
      <section className="pgs-master-section">
        <div className="container">
          <div className="pgs-master-grid">

            {/* LEFT COLUMN: REPLACEMENT MEDICAL PHOTOGRAPH WITH PURPLE OVERLAY & TITLE */}
            <div className="pgs-left-container">
              <img 
                src="/pgs_pgd_left_new.jpg" 
                alt="Embryologist performing Pre-Implantation Genetic Screening and Diagnosis (PGS/PGD) under microscope" 
                className="pgs-left-image"
              />
              <div className="pgs-left-overlay"></div>
              <h1 className="pgs-left-title">
                Pre-Implantation Genetic Screening<br />
                And Diagnosis (PGS/PGD)
              </h1>
            </div>

            {/* RIGHT COLUMN: EXACT REFERENCE CONTENT & LAYOUT */}
            <div className="pgs-right-container">
              
              {/* Eyebrow Heading & Decorative Line */}
              <div className="pgs-eyebrow-wrapper">
                <span className="pgs-eyebrow-text">PRE IMPLANTATION GENETIC TESTS</span>
                <div className="pgs-eyebrow-line"></div>
              </div>

              {/* Paragraph 1 + Right Baby Feet Image */}
              <div className="pgs-right-top-row">
                <p className="pgs-body-p1">
                  Pre implantation genetic tests are a group of genetic tests done on the embryos formed after assisted reproductive techniques to find out genetically normal embryos before transferring to the uterus.
                </p>
                
                <div className="pgs-baby-image-wrapper">
                  <img 
                    src="/pgs_pgd_right_baby_feet.png" 
                    alt="Infant feet gently held in adult hands" 
                    className="pgs-baby-image"
                  />
                </div>
              </div>

              {/* Paragraph 2 */}
              <p className="pgs-body-p2">
                There are various types of this including PGT-A,PGT M and PGT-SR depending on what is the aim of the test.
              </p>

              {/* Paragraph 3 (Serif Typography in Dark Purple) */}
              <p className="pgs-body-p3">
                PGT -A is performed in cases of advanced maternal age or in those facing recurrent implantation failures whereby transferring the genetically normal embryos give a better IVF result.
              </p>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PgsPgdPage;
