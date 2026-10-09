import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import './IvfIcsiPage.css';

const IvfIcsiPage = ({ onNavigateBack, onBookConsultation }) => {
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
    const element = document.getElementById('ivf-procedure');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const procedureSteps = [
    {
      num: '01',
      title: 'Initial evaluation and planning',
      desc: 'During the initial visits the couple is thoroughly evaluated and a plan is made as to the type and dose of medications to be used.'
    },
    {
      num: '02',
      title: 'Ovarian stimulation',
      desc: 'A detailed counselling session by our trained counsellors will be done to understand the whole procedure and to clarify any doubts that may arise.'
    },
    {
      num: '03',
      title: 'Egg retrieval',
      desc: 'Once the follicles are ready, eggs are retrieved from the female partner’s ovaries under mild sedation or local anaesthesia. This procedure is called an egg pick up.'
    },
    {
      num: '04',
      title: 'Sperm collection and preparation',
      desc: 'The man provides a semen sample on the same day of egg pick up which is analysed in the laboratory to select the best quality sperm for injection.'
    },
    {
      num: '05',
      title: 'Fertilisation',
      desc: 'The eggs and sperms are fused in the laboratory by IVF or ICSI.'
    },
    {
      num: '06',
      title: 'Embryo transfer',
      desc: 'One or more of the formed embryos are then transferred into the woman’s uterus, typically 3–5 days after fertilisation. If fresh transfer is planned, in many cases, a frozen embryo transfer is preferred where the embryos are stored in liquid nitrogen to be used in another cycle.'
    },
    {
      num: '07',
      title: 'Pregnancy testing',
      desc: 'A pregnancy test is performed using urine and blood, 14 days after the embryo transfer procedure to know the result.'
    }
  ];

  return (
    <div className="ivf-icsi-page">
      {/* Return to Home Bar */}
      <div className="container ivf-back-container">
        <button className="ivf-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* TOP EDITORIAL HERO 3-COLUMN SECTION */}
      <section className="ivf-top-hero-section">
        <div className="container">
          <div className="ivf-hero-grid">
            
            {/* COLUMN 1: LEFT HERO IMAGE (43-45% width) */}
            <div className="ivf-hero-left-image-col">
              <div className="ivf-hero-image-wrapper">
                <img 
                  src="/hero_violet_nurse.png" 
                  alt="Fertility specialist nurse in violet attire" 
                  className="ivf-hero-img"
                />
                <div className="ivf-hero-overlay">
                  {/* Top Left Overlay Heading */}
                  <div className="ivf-hero-overlay-top">
                    <h1 className="ivf-hero-overlay-title">
                      IN VITRO FERTILISATION &amp;<br />
                      INTRA CYTOPLASMIC SPERM<br />
                      INJECTION
                    </h1>
                    <p className="ivf-hero-overlay-subtitle">
                      Science today. Parenthood tomorrow.
                    </p>
                    <div className="ivf-hero-overlay-line"></div>
                  </div>

                  {/* Bottom Left Minimal Line Art Mother & Baby Icon */}
                  <div className="ivf-hero-overlay-bottom">
                    <svg className="ivf-mother-baby-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 12C34.2091 12 36 10.2091 36 8C36 5.79086 34.2091 4 32 4C29.7909 4 28 5.79086 28 8C28 10.2091 29.7909 12 32 12Z" stroke="#E2D6EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 28C22 22.4772 26.4772 18 32 18C37.5228 18 42 22.4772 42 28C42 35 34 44 32 46C30 44 22 35 22 28Z" stroke="#E2D6EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M32 30C33.1046 30 34 29.1046 34 28C34 26.8954 33.1046 26 32 26C30.8954 26 30 26.8954 30 28C30 29.1046 30.8954 30 32 30Z" stroke="#E2D6EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 54C16 46 22 40 32 40C42 40 48 46 48 54" stroke="#E2D6EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: CENTER EDITORIAL CONTENT */}
            <div className="ivf-hero-center-col">
              <div className="ivf-philosophy-eyebrow">
                OUR PHILOSOPHY
              </div>
              <div className="ivf-philosophy-divider"></div>

              <h2 className="ivf-center-headline">
                Hope, Science and<br />
                the Joy of <span className="italic-purple">Parenthood.</span>
              </h2>

              <p className="ivf-center-body">
                IVF and ICSI are advanced fertility treatments that help
                individuals and couples overcome infertility and achieve
                their dream of parenthood. We combine modern science
                with compassionate care to make your journey easier,
                safer and more hopeful.
              </p>

              <div className="ivf-cta-wrapper">
                <button className="ivf-procedure-cta" onClick={scrollToProcedure}>
                  OUR IVF PROCEDURE <span className="arrow-symbol">&rarr;</span>
                </button>
              </div>
            </div>

            {/* COLUMN 3: RIGHT INDICATIONS COLUMN */}
            <div className="ivf-hero-right-col">
              <h3 className="ivf-indications-title">
                Here Are Some Indications For IVF
              </h3>

              <ul className="ivf-indications-list">
                <li>
                  <span className="bullet-dot">&bull;</span>
                  <span>Bilateral tubal blockage</span>
                </li>
                <li>
                  <span className="bullet-dot">&bull;</span>
                  <span>Severe male factor infertility like low count, poor motility and bad morphology of sperms</span>
                </li>
                <li>
                  <span className="bullet-dot">&bull;</span>
                  <span>Unexplained infertility of long duration</span>
                </li>
                <li>
                  <span className="bullet-dot">&bull;</span>
                  <span>Failed IUI</span>
                </li>
              </ul>

              <p className="ivf-indications-footer-text">
                In neovita fertility centre, we are equipped with the cutting
                edge micromanipulator for ART to handle your gametes
                with utmost care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION DIVIDER LINE */}
      <div className="container">
        <div className="ivf-horizontal-line"></div>
      </div>

      {/* SECTION 4: IVF PROCEDURE TIMELINE */}
      <section className="ivf-procedure-section" id="ivf-procedure">
        <div className="container">
          <h2 className="ivf-procedure-main-heading">
            Following are the steps involved in an IVF procedure
          </h2>

          <div className="ivf-timeline-container">
            {procedureSteps.map((step, idx) => (
              <div className="ivf-timeline-item" key={step.num}>
                <div className="ivf-timeline-marker">
                  <div className="ivf-number-badge">{step.num}</div>
                  {idx < procedureSteps.length - 1 && <div className="ivf-timeline-connector"></div>}
                </div>

                <div className="ivf-timeline-content">
                  <h3 className="ivf-step-title">{step.title}</h3>
                  <p className="ivf-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: APPOINTMENT / CONSULTATION SECTION */}
      <section className="ivf-consultation-section">
        <div className="container">
          <div className="ivf-consultation-card">
            <div className="ivf-consultation-text">
              <span className="ivf-card-eyebrow">TAKE THE NEXT STEP</span>
              <h3 className="ivf-card-title">Begin Your Journey to Parenthood Today</h3>
              <p className="ivf-card-subtitle">
                Consult with our experienced embryologists and fertility specialists at Neovita Fertility Centre.
              </p>
            </div>

            {submitted ? (
              <div className="ivf-consultation-success">
                <CheckCircle2 size={24} color="#654477" />
                <p>Thank you, {formData.firstName}. We will contact you shortly.</p>
              </div>
            ) : (
              <form className="ivf-consultation-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Your Name *" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="ivf-input"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address *" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="ivf-input"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="ivf-input"
                />
                <button type="submit" className="ivf-submit-btn">
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

export default IvfIcsiPage;
