import React, { useState } from 'react';
import { ArrowLeft, GraduationCap, Award, BookOpen, Users, CheckCircle, Calendar, Clock, Sparkles, Send, PhoneCall, ExternalLink } from 'lucide-react';
import './AcademyPage.css';

const courses = [
  {
    id: 'embryology',
    badge: 'Flagship Program',
    title: 'Fellowship in Clinical Embryology',
    duration: '6 Months Full-Time',
    mode: 'Hands-on Wet Lab & Clinical Rotation',
    desc: 'Comprehensive training program for aspiring embryologists covering gamete handling, culture systems, vitrification of oocytes/embryos, and lab quality management.',
    highlights: [
      'Comprehensive gamete biology & media prep',
      'Daily cleanroom laboratory rotation',
      'Oocyte retrieval (OPU) & dish preparation',
      'Vitrification & warming of blastocysts'
    ]
  },
  {
    id: 'icsi',
    badge: 'Advanced Hands-on',
    title: 'ICSI & Micromanipulation Masterclass',
    duration: '2 Weeks Intensive',
    mode: '1-on-1 Microscope Station Training',
    desc: 'Intensive microscopic skill development designed for embryologists looking to master Intracytoplasmic Sperm Injection and laser-assisted hatching techniques.',
    highlights: [
      'Pipette alignment & hydraulic injector calibration',
      'Sperm immobilization & selection protocols',
      'Laser-assisted hatching & embryo biopsy intro',
      'Troubleshooting difficult fertilization scenarios'
    ]
  },
  {
    id: 'andrology',
    badge: 'Specialized Track',
    title: 'Advanced Andrology & Semen Analysis',
    duration: '1 Month Certification',
    mode: 'Diagnostic Lab Practice',
    desc: 'In-depth diagnostics course adhering to WHO 6th edition guidelines covering computer-assisted semen analysis (CASA), DNA fragmentation (DFI), and sperm processing.',
    highlights: [
      'WHO 6th Edition sperm morphology & motility scoring',
      'Sperm DNA Fragmentation Index (DFI) testing',
      'Semen preparation for IUI, IVF, and ICSI',
      'Cryopreservation & banking protocols'
    ]
  },
  {
    id: 'clinical-art',
    badge: 'For Clinicians / Gynecologists',
    title: 'Clinical ART & Follicular Ultrasound',
    duration: '3 Months Hybrid',
    mode: 'Lectures + Clinical Observer-ship',
    desc: 'Tailored for OB/GYN practitioners seeking expertise in ovarian stimulation protocols, ultrasound follicular monitoring, and mock embryo transfers.',
    highlights: [
      'Controlled ovarian stimulation (COS) protocols',
      'Serial 3D/Doppler follicular tracking',
      'Preventing and managing OHSS & poor responders',
      'Hands-on ultrasound-guided mock embryo transfer'
    ]
  }
];

const AcademyPage = ({ onNavigateBack, onBookConsultation }) => {
  const [selectedCourse, setSelectedCourse] = useState('embryology');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    course: 'Fellowship in Clinical Embryology',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="academy-page">
      {/* Back button container */}
      <div className="container academy-back-container">
        <button className="academy-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={16} /> Return to Home
        </button>
      </div>

      {/* Hero Header */}
      <section className="academy-hero-section">
        <div className="container">
          <div className="academy-eyebrow">
            <GraduationCap size={18} className="eyebrow-icon" />
            <span>NEOVITA ACADEMY OF REPRODUCTIVE MEDICINE</span>
          </div>
          
          <h1 className="academy-title">
            Empowering the Next Generation of <br />
            <span className="title-gradient">Embryologists & ART Specialists</span>
          </h1>

          <p className="academy-subtitle">
            Neovita Academy provides world-class, hands-on clinical fellowship programs and advanced laboratory masterclasses. 
            Train alongside leading clinical directors, senior embryologists, and reproductive scientists inside cutting-edge IVF cleanrooms.
          </p>

          <div className="academy-metrics-bar">
            <div className="metric-card">
              <span className="metric-number">100+</span>
              <span className="metric-label">Doctors & Embryologists Trained</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-card">
              <span className="metric-number">1:1</span>
              <span className="metric-label">Dedicated Wet-Lab Workstations</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-card">
              <span className="metric-number">WHO 6th</span>
              <span className="metric-label">Edition Aligned Curriculum</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-card">
              <span className="metric-number">100%</span>
              <span className="metric-label">Hands-On Practical Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="academy-courses-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-tag">FELLOWSHIP & CERTIFICATION PROGRAMS</span>
            <h2>Curated Hands-on Training Programs</h2>
            <p>Designed for clinicians, postgraduates in life sciences, and practicing embryologists striving for clinical mastery.</p>
          </div>

          <div className="courses-grid">
            {courses.map((c) => (
              <div 
                key={c.id} 
                className={`course-card ${selectedCourse === c.id ? 'featured' : ''}`}
                onClick={() => setSelectedCourse(c.id)}
              >
                <div className="card-top-header">
                  <span className="course-badge">{c.badge}</span>
                  <div className="course-duration">
                    <Clock size={14} /> {c.duration}
                  </div>
                </div>

                <h3 className="course-title">{c.title}</h3>
                <div className="course-mode">
                  <BookOpen size={14} /> {c.mode}
                </div>

                <p className="course-desc">{c.desc}</p>

                <div className="course-highlights-box">
                  <span className="highlights-label">Key Competencies:</span>
                  <ul>
                    {c.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle size={14} className="check-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="course-enroll-btn"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, course: c.title }));
                    const el = document.getElementById('academy-apply');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Inquire for Batch Admission
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Faculty Highlight */}
      <section className="academy-features-section">
        <div className="container">
          <div className="features-banner-card">
            <div className="features-left">
              <span className="section-tag-light">WORLD-CLASS INFRASTRUCTURE</span>
              <h3>State-of-the-Art Training Wet-Labs</h3>
              <p>
                Our training facility features heated stage micromanipulators (Narishige/Eppendorf), laminar flow class-100 clean benches, 
                high-resolution tri-ocular microscopes with HD projection, and specialized laser-assisted hatching stations.
              </p>
              
              <div className="perks-list">
                <div className="perk-item">
                  <Award className="perk-icon" size={20} />
                  <div>
                    <h4>Accredited Certification</h4>
                    <p>Recognized certifications valid for clinical embryology practice & fellowships.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <Users className="perk-icon" size={20} />
                  <div>
                    <h4>Direct Faculty Access</h4>
                    <p>Learn 1-on-1 with senior clinical directors and chief embryologists.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="features-right">
              <div className="quote-box">
                <p className="quote-text">
                  "Excellence in reproductive outcomes begins with uncompromising standards in the laboratory. Our academy bridges the gap between textbook theory and sterile clinical mastery."
                </p>
                <div className="quote-author">
                  <strong>Dr. Antony Tobin Thomas</strong>
                  <span>Clinical Director, Neovita ART Centre</span>
                  <a 
                    href="https://tobinembryologist.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="faculty-website-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '0.65rem',
                      color: '#ea580c',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    Visit tobinembryologist.com <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application / Inquiry Form */}
      <section className="academy-apply-section" id="academy-apply">
        <div className="container">
          <div className="apply-card-container">
            <div className="apply-info-side">
              <span className="section-tag">APPLY FOR UPCOMING BATCH</span>
              <h2>Start Your Journey in Reproductive Science</h2>
              <p>
                Seats are strictly limited to ensure comprehensive 1-on-1 workstation availability during wet-lab procedures. 
                Fill out the inquiry form and our academic coordinator will contact you with batch schedules, fee structures, and eligibility criteria.
              </p>

              <div className="contact-quick-info">
                <div className="contact-line">
                  <PhoneCall size={18} />
                  <span>Academy Desk: +91 94000 00000</span>
                </div>
                <div className="contact-line">
                  <Calendar size={18} />
                  <span>Upcoming Batches: January, April, July, October</span>
                </div>
              </div>
            </div>

            <div className="apply-form-side">
              {formSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Application Received!</h3>
                  <p>Thank you, {formData.name || 'Doctor'}. Our academic coordinator will review your profile and reach out within 24 hours.</p>
                  <button className="reset-btn" onClick={() => setFormSubmitted(false)}>Submit Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="academy-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Dr. / Mr. / Ms. Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="doctor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Contact Number / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Academic Qualification</label>
                      <input 
                        type="text" 
                        placeholder="MBBS, MS/MD (OBG), M.Sc. Biotechnology, etc."
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Interested Course</label>
                      <select 
                        value={formData.course} 
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      >
                        {courses.map(c => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Brief Message or Career Goals</label>
                    <textarea 
                      rows="3" 
                      placeholder="Tell us about your background and preferred batch timings..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-inquiry-btn">
                    Submit Academy Application <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
