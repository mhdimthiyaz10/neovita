import React from 'react';
import './IntroTrust.css';

const IntroTrust = () => {
  return (
    <section className="section intro-trust">
      <div className="container">
        <div className="intro-trust-grid">
          <div className="intro-content">
            <h2 className="intro-heading">Where Science Meets the Dream of Parenthood</h2>
            <div className="intro-text">
              <p>
                At Neovita, we understand that the journey to parenthood is deeply personal. 
                Our approach combines evidence-based fertility treatment, experienced specialists, 
                and advanced reproductive technology with compassionate, patient-centred care.
              </p>
              <p>
                We believe in transparent communication, providing you with personalised treatment 
                planning designed around your unique medical needs and emotional well-being.
              </p>
            </div>
            
            <div className="trust-stats">
              <div className="stat-item">
                <div className="stat-value">Advanced Care</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Personalised Plans</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Experienced Specialists</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Patient-Centred Approach</div>
              </div>
            </div>
          </div>
          
          <div className="intro-image">
            <div className="image-placeholder">
              <span>Premium Healthcare Environment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroTrust;
