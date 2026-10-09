import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import './EmbryoFreezingPage.css';

const EmbryoFreezingPage = ({ onNavigateBack, onBookConsultation }) => {
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

  const circumstancesList = [
    {
      num: '01',
      text: 'Females with polycystic ovarian syndrome to avoid the risk of a complication called ovarian hyperstimulation syndrome, the chances of which are more if she becomes pregnant.'
    },
    {
      num: '02',
      text: 'Cases of endometriosis or fibroid uterus where the embryo transfer is done in down regulated cycles.'
    },
    {
      num: '03',
      text: 'When pre implantation genetic testing on embryos is needed.'
    }
  ];

  return (
    <div className="ef-page">
      {/* Return to Home Bar */}
      <div className="container ef-back-container">
        <button className="ef-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* EDITORIAL HERO SECTION (2-Column Grid) */}
      <section className="ef-hero-section">
        <div className="container">
          <div className="ef-hero-grid">
            
            {/* LEFT COLUMN: LARGE RECTANGULAR PORTRAIT IMAGE WITH OVERLAY TITLE */}
            <div className="ef-hero-left-col">
              <div className="ef-hero-image-wrapper">
                <img 
                  src="/hero_violet_nurse.png" 
                  alt="IVF Cryopreservation & Embryo Freezing Specialist" 
                  className="ef-hero-img"
                  onError={(e) => {
                    e.target.src = '/embryo_freezing_hero.png';
                  }}
                />
                <div className="ef-hero-overlay">
                  <h1 className="ef-hero-overlay-title">
                    Embryo Freezing
                  </h1>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EDITORIAL CONTENT & EMBRYO THUMBNAIL */}
            <div className="ef-hero-right-col">
              
              {/* Eyebrow */}
              <div className="ef-philosophy-eyebrow">
                OUR PHILOSOPHY
              </div>

              {/* Purple Divider Line */}
              <div className="ef-philosophy-line"></div>

              {/* Top Row: Headline & Compact Embryo Image */}
              <div className="ef-headline-thumb-row">
                <div className="ef-headline-wrapper">
                  <h2 className="ef-headline">
                    Preserving today,<br />
                    for <span className="italic-purple">tomorrow.</span>
                  </h2>
                </div>

                <div className="ef-thumb-wrapper">
                  <img 
                    src="/embryo_microscope_thumb.jpg" 
                    alt="Microscopic view of cryopreserved embryo" 
                    className="ef-embryo-thumb-img"
                  />
                </div>
              </div>

              {/* Body Paragraph */}
              <p className="ef-main-body font-sans">
                Cryopreservation of the embryos is a part of an IVF cycle
                where embryos are stored at subzero temperatures for
                future use. The frozen embryos can be later thawed before
                transferring to the uterus.Transferring of such frozen thawed
                embryos is called as frozen embryo transfer or FET which is
                the chosen option for a subset of patients.
              </p>

              {/* Circumstances Section Heading */}
              <h3 className="ef-section-subheading">
                Examples of such circumstances include
              </h3>

              {/* Numbered Editorial List */}
              <div className="ef-numbered-list">
                {circumstancesList.map((item) => (
                  <div className="ef-numbered-item" key={item.num}>
                    <div className="ef-number-badge">
                      {item.num}
                    </div>
                    <p className="ef-item-text">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Final Paragraph */}
              <p className="ef-final-paragraph">
                Embryo freezing is an excellent option for those couples who want to delay child
                bearing for social reasons so that the age doesn’t affect their fertility potential.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="container">
        <div className="ef-section-divider"></div>
      </div>

      {/* CONSULTATION / APPOINTMENT SECTION */}
      <section className="ef-consultation-section">
        <div className="container">
          <div className="ef-consultation-card">
            <div className="ef-consultation-text">
              <span className="ef-card-eyebrow">CRYOPRESERVATION CARE</span>
              <h3 className="ef-card-title">Schedule an Embryo Freezing Consultation</h3>
              <p className="ef-card-subtitle">
                Learn more about frozen embryo transfer (FET) and fertility preservation options at Neovita Fertility Centre.
              </p>
            </div>

            {submitted ? (
              <div className="ef-consultation-success">
                <CheckCircle2 size={24} color="#765080" />
                <p>Thank you, {formData.firstName}. Our fertility team will reach out to you shortly.</p>
              </div>
            ) : (
              <form className="ef-consultation-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Your Name *" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="ef-input"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address *" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="ef-input"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="ef-input"
                />
                <button type="submit" className="ef-submit-btn">
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

export default EmbryoFreezingPage;
