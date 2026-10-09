import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import './LaserAssistedHatchingPage.css';

const LaserAssistedHatchingPage = ({ onNavigateBack, onBookConsultation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 180) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const scrollToProcedure = () => {
    const element = document.getElementById('lah-consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lah-page">
      {/* Return to Home Bar */}
      <div className="container lah-back-container">
        <button className="lah-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* MAIN HERO CONTENT (2 Columns: ~52% Left Image, ~48% Right Content) */}
      <section className="lah-hero-section">
        <div className="container">
          <div className="lah-hero-grid">
            
            {/* LEFT COLUMN: LARGE RECTANGULAR PORTRAIT IMAGE */}
            <div className="lah-hero-left">
              <div className="lah-image-wrapper">
                <img 
                  src="/laser_assisted_hatching_hero.png" 
                  alt="Laser Assisted Hatching procedure under microscope" 
                  className="lah-reference-img"
                  onError={(e) => {
                    e.target.src = '/hero_violet_nurse.png';
                  }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN: EDITORIAL CONTENT */}
            <div className="lah-hero-right">
              
              {/* Eyebrow */}
              <div className="lah-philosophy-eyebrow">
                OUR PHILOSOPHY
              </div>

              {/* Purple Divider Line */}
              <div className="lah-philosophy-line"></div>

              {/* Main Headline */}
              <h1 className="lah-headline">
                Helping embryos take<br />
                their <span className="italic-purple">next step.</span>
              </h1>

              {/* Body Text */}
              <div className="lah-body-content">
                <p>
                  Laser assisted hatching is a procedure done during IVF cycle
                  where the embryologist makes a small gap in the outer shell
                  of the embryo (called Zona Pellucida) to help the embryo
                  hatch or break out from the hard outer shell, thus helping it
                  to implant. This increases the chances of pregnancy. This
                  most technically advanced procedure is particularly helpful
                  for those cases where there were previous implantation
                  failures or advanced maternal age.
                </p>
              </div>

              {/* CTA Link */}
              <div className="lah-cta-container">
                <button className="lah-cta-btn" onClick={scrollToProcedure}>
                  VIEW THE PROCEDURE <span className="arrow-symbol">&rarr;</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SUBTLE SECTION DIVIDER */}
      <div className="container">
        <div className="lah-section-divider"></div>
      </div>

      {/* CONSULTATION / APPOINTMENT SECTION */}
      <section className="lah-consultation-section" id="lah-consultation">
        <div className="container">
          <div className="lah-consultation-card">
            <div className="lah-consultation-text">
              <span className="lah-card-eyebrow">ADVANCED EMBRYOLOGY</span>
              <h3 className="lah-card-title">Schedule a Consultation for Laser Assisted Hatching</h3>
              <p className="lah-card-subtitle">
                Discuss with our senior embryologists to see if Laser Assisted Hatching is recommended for your IVF cycle.
              </p>
            </div>

            {submitted ? (
              <div className="lah-consultation-success">
                <CheckCircle2 size={24} color="#765080" />
                <p>Thank you, {formData.firstName}. Our embryology team will reach out to you shortly.</p>
              </div>
            ) : (
              <form className="lah-consultation-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Your Name *" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="lah-input"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address *" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="lah-input"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="lah-input"
                />
                <button type="submit" className="lah-submit-btn">
                  Book Consultation <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LaserAssistedHatchingPage;
