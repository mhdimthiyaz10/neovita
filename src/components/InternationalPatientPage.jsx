import React, { useState } from 'react';
import { 
  Plane, 
  UserCheck, 
  FileText, 
  Home, 
  ArrowRight, 
  ArrowLeft, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageCircle,
  X,
  Users,
  Sparkles,
  ChevronRight,
  Headphones
} from 'lucide-react';
import { RadialBackground } from '@/components/ui/light-theme-tailwind-css-background-snippet';
import './InternationalPatientPage.css';

const pillarServices = [
  {
    id: 'travel',
    icon: Plane,
    title: 'Travel Assistance',
    desc: 'Airport pickup and local transportation.',
    fullTitle: 'Comprehensive Travel & Airport Pickup',
    fullDesc: 'We handle your entire local travel logistics from the minute your flight lands at Trivandrum or Cochin International Airport.',
    bullets: [
      'Complimentary VIP Chauffeur Pickup from Airport',
      'Dedicated Ambulatory or Luxury Sedan Transfers',
      'Local SIM Card & Currency Exchange Assistance',
      '24/7 Driver Availability for Clinic Appointments'
    ]
  },
  {
    id: 'team',
    icon: UserCheck,
    title: 'Dedicated International Team',
    desc: 'Guidance and support at every step of your journey.',
    fullTitle: 'Personal Multi-Lingual Medical Concierge',
    fullDesc: 'A assigned international relation manager accompanies you throughout your fertility evaluation and procedure.',
    bullets: [
      'Fluent English, Arabic & Regional Language Coordinators',
      'Direct WhatsApp Line to Senior Embryologists & Doctors',
      'Fast-Tracked Clinic Appointments & Priority Care',
      'Comprehensive Support for Accompanying Family Members'
    ]
  },
  {
    id: 'visa',
    icon: FileText,
    title: 'Visa & Documentation Support',
    desc: 'Help with medical documentation and visa-related assistance.',
    fullTitle: 'Medical Visa (M-Visa) & Legal Support',
    fullDesc: 'Our administrative desk issues official Indian hospital invitation letters for rapid e-Medical Visa processing.',
    bullets: [
      'Hospital Invitation Letter Issued within 24 Hours',
      'Indian FRRO Registration Support Upon Arrival',
      'Complete Certified Medical File & Lab Report Translation',
      'Customs Documentation for Cryopreserved Embryo/Sperm'
    ]
  },
  {
    id: 'stay',
    icon: Home,
    title: 'Comfortable Stay Options',
    desc: 'Assistance with accommodation and local arrangements.',
    fullTitle: 'Serene Accommodations & Wellness Recovery',
    fullDesc: 'Relax in peaceful beachfront resorts or premium serviced apartments near Neovita clinic branches.',
    bullets: [
      'Partnered 4-Star & 5-Star Beach Resorts & Serviced Suites',
      'Specialized Nutritional Meals & Dietary Customization',
      'Ayurvedic Wellness & Spa Packages for Stress Relief',
      'Proximity to Tranquil Kerala Backwaters & Beaches'
    ]
  }
];

const patientJourneySteps = [
  {
    step: '01',
    title: 'Virtual Consultation',
    desc: 'Connect with senior fertility specialists online to review medical history and discuss preliminary options.'
  },
  {
    step: '02',
    title: 'Visa & Medical Letters',
    desc: 'Receive official medical invitation letters for swift Indian Medical Visa processing and flight planning.'
  },
  {
    step: '03',
    title: 'Warm Arrival & Escort',
    desc: 'VIP airport reception in Kerala with dedicated multi-lingual patient relation manager and luxury transport.'
  },
  {
    step: '04',
    title: 'Advanced Treatment',
    desc: 'State-of-the-art IVF/ICSI procedure conducted in world-class cleanroom labs with personalized care.'
  },
  {
    step: '05',
    title: 'Recovery & Continuous Care',
    desc: 'Relaxing post-treatment recovery stay in serene Kerala with 24/7 medical oversight and post-return follow-ups.'
  }
];

const InternationalPatientPage = ({ onNavigateBack, onBookConsultation }) => {
  const [activePillarId, setActivePillarId] = useState('travel');
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    treatment: 'IVF Treatment',
    travelMonth: '',
    notes: ''
  });

  const activePillar = pillarServices.find((p) => p.id === activePillarId) || pillarServices[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToInquiry = () => {
    const inquiryEl = document.getElementById('intl-inquiry-form');
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="international-page">
      <RadialBackground />

      {/* Background World Map & Flight Decor */}
      <div className="intl-bg-decor">
        <svg className="intl-flight-path-svg" viewBox="0 0 320 200" fill="none">
          <path 
            d="M 10 180 Q 150 40 300 20" 
            stroke="#b8860b" 
            strokeWidth="1.5" 
            strokeDasharray="4 6" 
            opacity="0.35" 
          />
          <g className="intl-animated-plane">
            <Plane size={20} color="#b8860b" transform="translate(290, 10) rotate(-15)" />
          </g>
        </svg>

        <svg className="intl-world-map-svg" viewBox="0 0 1000 500" fill="none" opacity="0.04">
          <circle cx="500" cy="250" r="200" stroke="#091133" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="500" cy="250" r="350" stroke="#091133" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Back Navigation Bar */}
      <div className="container international-back-container">
        <button className="international-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={18} /> Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="intl-hero-section">
        <div className="container">
          <div className="intl-hero-grid">
            
            {/* Left Content Column */}
            <div className="intl-hero-content">
              <div className="intl-eyebrow-container">
                <span className="intl-eyebrow-line-gold"></span>
                <div className="intl-globe-badge">
                  <Globe size={14} />
                </div>
                <span className="intl-eyebrow-text">INTERNATIONAL PATIENT SERVICE</span>
              </div>

              <h1 className="intl-hero-title">
                World-Class Fertility Care <span className="title-accent">Beyond Borders.</span>
              </h1>

              <p className="intl-hero-description">
                We welcome patients from around the world, providing personalized fertility care with advanced technology, experienced specialists and a supportive team.
              </p>

              <div className="intl-hero-actions">
                <button className="btn-navy-pill" onClick={scrollToInquiry}>
                  Plan Your Visit <ArrowRight size={18} className="btn-arrow" />
                </button>
                <button className="btn-glass-pill" onClick={() => setShowSupportModal(true)}>
                  <Users size={18} style={{ color: '#b8860b' }} /> Contact Our International Team
                </button>
              </div>
            </div>

            {/* Right Media Column - Custom Asymmetric Arch Frame */}
            <div className="intl-hero-media">
              <div className="intl-arch-frame-wrapper">
                <div className="intl-arch-contour"></div>
                <div className="intl-arch-image-box">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85" 
                    alt="Neovita Fertility Centre Operating Suite and Embryology Laboratory" 
                    className="intl-arch-img"
                  />
                </div>

                {/* Floating Glassmorphism Card */}
                <div 
                  className="intl-floating-glass-card"
                  onClick={() => setShowSupportModal(true)}
                >
                  <div className="glass-badge-gold">
                    <Plane size={22} />
                  </div>
                  <div className="glass-card-text">
                    <span className="glass-subtitle-gold">INTERNATIONAL PATIENT SUPPORT</span>
                    <span className="glass-heading-navy">Seamless care, from arrival to recovery.</span>
                    <span className="glass-action-link">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars Integrated Seamless Bar */}
      <section className="intl-pillars-bar-section">
        <div className="container">
          <div className="intl-pillars-bar-container">
            <div className="intl-pillars-grid">
              {pillarServices.map((pillar) => {
                const IconComponent = pillar.icon;
                const isActive = pillar.id === activePillarId;
                return (
                  <div 
                    key={pillar.id} 
                    className={`intl-pillar-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActivePillarId(pillar.id)}
                  >
                    <div className="pillar-icon-circle">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="pillar-item-title">{pillar.title}</h3>
                    <p className="pillar-item-desc">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Detail Drawer for Active Pillar */}
            {activePillar && (
              <div className="intl-pillar-detail-drawer">
                <div>
                  <div className="drawer-header-badge">
                    <Sparkles size={14} /> INTERACTIVE SERVICE DETAILS
                  </div>
                  <h3 className="drawer-title">{activePillar.fullTitle}</h3>
                  <p className="drawer-desc">{activePillar.fullDesc}</p>
                  <button className="btn-drawer-action" onClick={scrollToInquiry}>
                    Request {activePillar.title} <ChevronRight size={16} />
                  </button>
                </div>

                <div className="drawer-bullets">
                  {activePillar.bullets.map((bullet, idx) => (
                    <div key={idx} className="drawer-bullet-item">
                      <CheckCircle2 size={18} className="bullet-icon-check" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Step-by-Step International Patient Journey */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-eyebrow">CONCIERGE MEDICAL EXPERIENCE</div>
            <h2 className="section-title">Your Seamless Journey With Us</h2>
            <p className="section-subtitle">
              From your initial virtual consultation to your comfortable travel back home, we ensure every detail is meticulously coordinated.
            </p>
          </div>

          <div className="journey-timeline">
            {patientJourneySteps.map((stepItem) => (
              <div className="journey-step-card" key={stepItem.step}>
                <div className="step-num-badge">{stepItem.step}</div>
                <h3 className="step-title">{stepItem.title}</h3>
                <p className="step-desc">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Comparison & Why Kerala Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="comparison-grid">
            
            <div className="comparison-card-box">
              <h2 className="comp-box-title">Why Choose Neovita for International Fertility Care?</h2>
              <p className="comp-box-subtitle">
                Kerala is renowned globally for world-class healthcare standards, tranquil healing natural environments, and high IVF success rates at a fraction of Western treatment costs.
              </p>

              <div className="comp-metrics-list">
                <div className="metric-item">
                  <div className="metric-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span className="metric-val">94.2%+</span>
                    <span className="metric-label">Cumulative IVF & ICSI Success Rates</span>
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-icon">
                    <Globe size={24} />
                  </div>
                  <div>
                    <span className="metric-val">60-70% Cost Savings</span>
                    <span className="metric-label">Compared to US, UK, Europe & UAE clinics</span>
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-icon">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <span className="metric-val">24/7 Personal Concierge</span>
                    <span className="metric-label">Dedicated English, Arabic & Malayalam coordinators</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Highlight Cards */}
            <div className="comp-highlight-box">
              <div className="intl-arch-image-box" style={{ height: '380px', borderRadius: '28px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                  alt="Neovita Kerala Clinic Resort Atmosphere" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* International Patient Inquiry Form Section */}
      <section className="inquiry-section" id="intl-inquiry-form">
        <div className="container">
          <div className="inquiry-card">
            
            <div className="section-header-center" style={{ marginBottom: '35px' }}>
              <div className="section-eyebrow">INTERNATIONAL DESK</div>
              <h2 className="section-title">Start Your International Care Inquiry</h2>
              <p className="section-subtitle">
                Fill out the form below. Our International Patient Coordinator will contact you within 24 hours with custom guidance and estimated timelines.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center" style={{ padding: '40px 20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#091133', marginBottom: '10px' }}>
                  Inquiry Received Successfully!
                </h3>
                <p style={{ color: '#666666', maxWidth: '500px', margin: '0 auto 25px auto' }}>
                  Thank you for reaching out to Neovita International Services. Our medical coordinator will contact you via WhatsApp or Email shortly.
                </p>
                <button className="btn-navy-pill" onClick={() => setFormSubmitted(false)}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Sarah Jenkins"
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="e.g. sarah@example.com"
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp Number (with country code) *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+1 (555) 000-0000"
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country of Residence *</label>
                    <input 
                      type="text" 
                      name="country" 
                      required 
                      value={formData.country} 
                      onChange={handleInputChange} 
                      placeholder="e.g. United States / UAE / UK"
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Desired Treatment Program</label>
                    <select 
                      name="treatment" 
                      value={formData.treatment} 
                      onChange={handleInputChange} 
                      className="form-select"
                    >
                      <option value="IVF Treatment">IVF & ICSI Treatment</option>
                      <option value="Egg Freezing">Egg & Embryo Freezing</option>
                      <option value="Male Infertility">Male Fertility Care</option>
                      <option value="Second Opinion">Virtual Second Opinion</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tentative Travel Month</label>
                    <input 
                      type="text" 
                      name="travelMonth" 
                      value={formData.travelMonth} 
                      onChange={handleInputChange} 
                      placeholder="e.g. November 2026"
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label">Additional Details / Questions</label>
                  <textarea 
                    name="notes" 
                    rows={4} 
                    value={formData.notes} 
                    onChange={handleInputChange} 
                    placeholder="Tell us briefly about your medical background or travel preferences..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-inquiry">
                  Submit International Inquiry <ArrowRight size={18} />
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Support & Contact Modal */}
      {showSupportModal && (
        <div className="intl-modal-overlay" onClick={() => setShowSupportModal(false)}>
          <div className="intl-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowSupportModal(false)}>
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#fdf8ed', color: '#b8860b', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto', border: '1px solid rgba(184, 134, 11, 0.3)' }}>
                <Headphones size={28} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#091133', marginBottom: '8px' }}>
                International Concierge Support
              </h3>
              <p style={{ color: '#666666', fontSize: '0.92rem' }}>
                Connect directly with our international desk via phone, WhatsApp, or instant email callback.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '25px' }}>
              <a 
                href="https://wa.me/919400000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 20px', borderRadius: '16px', background: '#25D366', color: '#ffffff', fontWeight: '600', textDecoration: 'none', boxShadow: '0 6px 18px rgba(37, 211, 102, 0.25)' }}
              >
                <MessageCircle size={22} />
                <span>Chat on WhatsApp (+91 94000 00000)</span>
              </a>

              <a 
                href="tel:+919400000000" 
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 20px', borderRadius: '16px', background: '#091133', color: '#ffffff', fontWeight: '600', textDecoration: 'none' }}
              >
                <Phone size={22} />
                <span>Call International Helpline (+91 94000 00000)</span>
              </a>

              <a 
                href="mailto:international@neovita.in" 
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 20px', borderRadius: '16px', background: '#f8fafc', color: '#091133', fontWeight: '600', border: '1px solid #e2e8f0', textDecoration: 'none' }}
              >
                <Mail size={22} color="#b8860b" />
                <span>Email: international@neovita.in</span>
              </a>
            </div>

            <button 
              className="btn-navy-pill" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => { setShowSupportModal(false); scrollToInquiry(); }}
            >
              Fill Travel Planning Form
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default InternationalPatientPage;
