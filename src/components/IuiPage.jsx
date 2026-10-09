import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import './IuiPage.css';

const IuiPage = ({ onNavigateBack, onBookConsultation }) => {
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
    <div className="iui-page">

      {/* Back Navigation Bar */}
      <div className="container iui-back-container">
        <button className="iui-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* SECTION 1 — MAIN HERO CONTENT (2 Columns: ~58% Left, ~42% Right) */}
      <section className="iui-hero-section">
        <div className="container">
          <div className="iui-hero-grid">

            {/* LEFT: Organic Female Specialist Lab Graphic */}
            <div className="iui-hero-left">
              <div className="iui-image-wrapper">
                <img 
                  src="/iui_hero.png" 
                  alt="Female fertility laboratory specialist analyzing specimen under microscope for IUI" 
                  className="iui-reference-img"
                />
              </div>
            </div>

            {/* RIGHT: Editorial Content with Cormorant Garamond Font Standard */}
            <div className="iui-hero-right">
              
              {/* Eyebrow */}
              <div className="iui-philosophy-eyebrow">
                <span>OUR PHILOSOPHY</span>
                <span className="eyebrow-line-right"></span>
              </div>

              {/* Headline */}
              <h1 className="iui-headline">
                INTRAUTERINE<br />
                INSEMINATION Or IUI
              </h1>

              {/* Exact Paragraph Structure */}
              <div className="iui-body-content">
                <p>
                  IUI or artificial insemination is a simple infertility treatment which involves placing semen sample inside the uterus using a thin catheter around the time of ovulation.
                </p>

                <p>
                  The semen sample will be washed and filtered before inserting into uterus.
                </p>

                <p>
                  The procedure helps to place the sperms close to the egg so as to increase the chances of fertilisation.
                </p>

                <p>
                  Studies show that the success rate of IUI is more in stimulated cycles especially on giving injections to develop more follicles.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SUBTLE HORIZONTAL DIVIDER */}
      <div className="container">
        <div className="iui-section-divider"></div>
      </div>

      {/* SECTION 2 — HELPFUL CASES + APPOINTMENT FORM */}
      <section className="iui-details-section">
        <div className="container">
          <div className="iui-details-grid">

            {/* LEFT: Helpful Cases List */}
            <div className="iui-cases-column">
              <div className="column-eyebrow">
                <h2 className="column-title">IUI IS HELPFUL IN CASES OF</h2>
                <span className="eyebrow-line-right"></span>
              </div>

              <ul className="iui-cases-list">
                <li>
                  <span className="bullet-dot"></span>
                  <span>Mild male factor infertility</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>Mild endometriosis</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>Unexplained infertility as initial treatment</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>Single women ,wishing to use donor semen</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>physical disabilities in couple that prevent intercourse like erectile dysfunction</span>
                </li>
                <li>
                  <span className="bullet-dot"></span>
                  <span>Same sex couple using donor semen</span>
                </li>
              </ul>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="iui-col-divider"></div>

            {/* RIGHT: Appointment Form */}
            <div className="iui-appointment-column">
              <div className="column-eyebrow">
                <h2 className="column-title">MAKE AN APPOINTMENT</h2>
                <span className="eyebrow-line-right"></span>
              </div>

              {submitted ? (
                <div className="form-success-alert">
                  <CheckCircle2 size={24} className="success-icon" />
                  <div>
                    <h4>Appointment Request Received</h4>
                    <p>Thank you, {formData.firstName}. Our fertility team will contact you shortly.</p>
                  </div>
                </div>
              ) : (
                <form className="iui-appointment-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="firstName" 
                      placeholder="First Name *" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      required 
                      className="iui-form-input"
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address *" 
                      value={formData.email} 
                      onChange={handleChange}
                      required 
                      className="iui-form-input"
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      value={formData.phone} 
                      onChange={handleChange}
                      className="iui-form-input"
                    />
                  </div>

                  <div className="form-group textarea-group">
                    <textarea 
                      name="message" 
                      placeholder="Message" 
                      value={formData.message} 
                      onChange={handleChange}
                      rows={4}
                      className="iui-form-textarea"
                    ></textarea>
                    <span className="char-counter">{formData.message.length} / 180</span>
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="btn-iui-submit">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Organic Bottom Wave Curves */}
      <div className="iui-bottom-wave-left"></div>
      <div className="iui-bottom-wave-right"></div>

    </div>
  );
};

export default IuiPage;
