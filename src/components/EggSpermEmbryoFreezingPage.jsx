import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import './EggSpermEmbryoFreezingPage.css';

const EggSpermEmbryoFreezingPage = ({ onNavigateBack, onBookConsultation }) => {
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

  return (
    <div className="esef-page">
      {/* Return to Home Bar */}
      <div className="container esef-back-container">
        <button className="esef-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* EDITORIAL HERO SECTION (2-COLUMN GRID ~50% / ~50%) */}
      <section className="esef-hero-section">
        <div className="container">
          <div className="esef-hero-grid">
            
            {/* LEFT COLUMN: LARGE PORTRAIT IMAGE WITH OVERLAY TITLE */}
            <div className="esef-hero-left-col">
              <div className="esef-hero-image-wrapper">
                <img 
                  src="/hero_violet_nurse.png" 
                  alt="Egg, Sperm and Embryo Freezing Specialist" 
                  className="esef-hero-img"
                  onError={(e) => {
                    e.target.src = '/egg_sperm_embryo_hero.png';
                  }}
                />
                <div className="esef-hero-overlay">
                  <h1 className="esef-hero-overlay-title">
                    Egg , Sperm And<br />
                    Embryo Freezing
                  </h1>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EDITORIAL CONTENT & SCIENTIFIC MICROSCOPIC IMAGE */}
            <div className="esef-hero-right-col">
              
              {/* Eyebrow */}
              <div className="esef-philosophy-eyebrow">
                OUR PHILOSOPHY
              </div>

              {/* Thin Purple Divider Line */}
              <div className="esef-philosophy-line"></div>

              {/* Headline & Small Embryo Image Row */}
              <div className="esef-headline-thumb-row">
                <div className="esef-headline-wrapper">
                  <h2 className="esef-headline">
                    Preserving today,<br />
                    for <span className="italic-purple">tomorrow.</span>
                  </h2>
                </div>

                <div className="esef-thumb-wrapper">
                  <img 
                    src="/egg_sperm_microscope_thumb.jpg" 
                    alt="Microscopic view of egg and sperm cryopreservation" 
                    className="esef-microscope-thumb-img"
                  />
                </div>
              </div>

              {/* Body Content Paragraph 1 */}
              <p className="esef-body-p font-sans">
                Egg, sperm or embryo freezing helps you to store them for
                months or years until you are ready to use them, thus
                preventing age related damage to them. This helps you to
                pause your fertility for many reasons, which can be medical
                or personal.
              </p>

              {/* Body Content Paragraph 2 */}
              <p className="esef-body-p font-sans">
                Many women and couple now choose to postpone child
                bearing to buy time for escalating their career and to get
                financial stability before embarking on family completion.
              </p>

              {/* Medical Reason Paragraph (Highlighted Editorial Styling) */}
              <p className="esef-medical-reason-p">
                There can be medical reasons also to delay childbearing
                like the need to undergo a cancer treatment either by
                chemotherapy or radiotherapy, both of which can adversely
                impact the fertility potential by damaging the gametes -egg
                and sperm. By preserving them before undergoing such
                therapies helps to protect against such damage as well as
                keeping high, the hopes of childbearing in future.
              </p>

              {/* Final Paragraph */}
              <p className="esef-final-p font-sans">
                The technique of cryopreservation is very advanced these days
                so that your fertility potential is safe in the hands of a skilled
                embryologist.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* SUBTLE SECTION DIVIDER */}
      <div className="container">
        <div className="esef-section-divider"></div>
      </div>

      {/* CONSULTATION / APPOINTMENT SECTION */}
      <section className="esef-consultation-section">
        <div className="container">
          <div className="esef-consultation-card">
            <div className="esef-consultation-text">
              <span className="esef-card-eyebrow">FERTILITY PRESERVATION</span>
              <h3 className="esef-card-title">Book a Fertility Preservation Consultation</h3>
              <p className="esef-card-subtitle">
                Consult with Neovita embryology specialists regarding egg, sperm, or embryo cryopreservation.
              </p>
            </div>

            {submitted ? (
              <div className="esef-consultation-success">
                <CheckCircle2 size={24} color="#765080" />
                <p>Thank you, {formData.firstName}. Our fertility team will contact you shortly.</p>
              </div>
            ) : (
              <form className="esef-consultation-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Your Name *" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="esef-input"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address *" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="esef-input"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="esef-input"
                />
                <button type="submit" className="esef-submit-btn">
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

export default EggSpermEmbryoFreezingPage;
