import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './PreConceptionalPage.css';

const PreConceptionalPage = ({ onNavigateBack, onBookConsultation }) => {
  return (
    <section className="preconceptional-section">
      {/* Top Back Navigation (Visible when loaded standalone) */}
      {onNavigateBack && (
        <div className="preconceptional-top-bar">
          <button className="preconceptional-back-btn" onClick={onNavigateBack}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>
      )}

      <div className="preconceptional-container">
        <div className="preconceptional-grid">
          
          {/* LEFT COLUMN: Large Portrait Photograph */}
          <div className="preconceptional-image-col">
            <div className="preconceptional-image-frame">
              <img 
                src="/preconceptional_consultation.jpg" 
                alt="Pre Conceptional Counselling - Doctor Consultation with Couple" 
                className="preconceptional-img"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Eyebrow, Title, 5 Info Rows */}
          <div className="preconceptional-content-col">
            
            {/* Eyebrow */}
            <div className="preconceptional-eyebrow-wrapper">
              <span className="preconceptional-eyebrow">OUR SERVICES</span>
              <div className="preconceptional-eyebrow-line"></div>
            </div>

            {/* Main Title */}
            <h1 className="preconceptional-title">
              Pre Conceptional<br />
              Counselling
            </h1>

            {/* 5 Information Rows */}
            <div className="preconceptional-rows">
              
              {/* Row 1 */}
              <div className="preconceptional-row">
                <div className="preconceptional-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81318F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    <circle cx="9" cy="11.5" r="1" fill="#81318F" />
                    <circle cx="12" cy="11.5" r="1" fill="#81318F" />
                    <circle cx="15" cy="11.5" r="1" fill="#81318F" />
                  </svg>
                </div>
                <p className="preconceptional-row-text">
                  Pre pregnancy counselling includes a discussion between the couple and the doctor to learn about the essential matters to be addressed before getting pregnant.
                </p>
              </div>

              {/* Row 2 */}
              <div className="preconceptional-row">
                <div className="preconceptional-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81318F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="17" rx="2.5" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <circle cx="7.5" cy="13" r="1" fill="#81318F" />
                    <circle cx="12" cy="13" r="1" fill="#81318F" />
                    <circle cx="16.5" cy="13" r="1" fill="#81318F" />
                    <circle cx="7.5" cy="17" r="1" fill="#81318F" />
                    <circle cx="12" cy="17" r="1" fill="#81318F" />
                  </svg>
                </div>
                <p className="preconceptional-row-text">
                  This includes the right time of conception, the supplements to be taken pre conceptually and the optimization of medical conditions if any.
                </p>
              </div>

              {/* Row 3 */}
              <div className="preconceptional-row">
                <div className="preconceptional-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81318F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" />
                    <path d="M12 11.5c-1.5-1.5-3-1-3.5 0s0 2.5 3.5 4.5c3.5-2 4-3.5 3.5-4.5s-2-1.5-3.5 0z" fill="none" stroke="#81318F" strokeWidth="1.5" />
                    <line x1="8" y1="18" x2="16" y2="18" />
                  </svg>
                </div>
                <p className="preconceptional-row-text">
                  During this consultation the doctor will get a detailed history from both partners to know about any factors that can affect the health of the mother as well as the unborn baby.
                </p>
              </div>

              {/* Row 4 */}
              <div className="preconceptional-row">
                <div className="preconceptional-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81318F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3v13a3 3 0 0 0 6 0V3" />
                    <path d="M7 3h10" />
                    <path d="M9 10h6" />
                    <line x1="12" y1="12" x2="12" y2="15" strokeDasharray="1 1" />
                  </svg>
                </div>
                <p className="preconceptional-row-text">
                  The doctor may also ask to do some blood tests to rule out any medical illness that need to be addressed before getting pregnant or to know the status of the already known medical condition.
                </p>
              </div>

              {/* Row 5 */}
              <div className="preconceptional-row">
                <div className="preconceptional-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81318F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7.5c-1.5-1.5-3-1-3.5 0s0 2.5 3.5 4.5c3.5-2 4-3.5 3.5-4.5s-2-1.5-3.5 0z" fill="none" />
                    <circle cx="12" cy="16" r="1.5" />
                  </svg>
                </div>
                <p className="preconceptional-row-text">
                  Pre conceptional counselling must be given due importance as it identifies any problems that needs to be addressed beforehand which ensures that the mother has a healthy and smooth pregnancy journey and ultimately helps to take home a healthy baby.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PreConceptionalPage;
