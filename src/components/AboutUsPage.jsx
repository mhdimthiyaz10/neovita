import React from 'react';
import { Heart, Users, ShieldCheck, HeartPulse, MapPin, Target, Flower2, Sparkles, EyeOff, CheckCircle2, Calendar, ArrowRight, PhoneCall, MessageCircle, Eye } from 'lucide-react';
import HappyPatients from './HappyPatients';
import TeamShowcaseSection from './TeamShowcaseSection';
import './AboutUsPage.css';

const whyChooseSections = [
  {
    number: '01',
    title: 'Experienced Team',
    quote: 'ALONE WE CAN DO SO LITTLE, TOGETHER WE CAN DO SO MUCH',
    description: 'Our team consists of experienced doctors, embryologists and staff who relentlessly work together with you towards the ultimate result. We assure you compassionate care from the work-up till the result.',
    image: '/doctor_team.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
    bgColor: '#F8F4EF',
    ctaText: 'Meet Our Specialists',
    ctaHref: '#about'
  },
  {
    number: '02',
    title: 'Personalized Treatment',
    quote: 'ONE SHOE DOESN’T FIT FOR ALL',
    description: 'This concept applies to infertility treatment also. Getting to know the root cause of delayed childbearing through proper history-taking and evaluation, we ensure that every couple receives the highest standards of care, respecting their wishes and personal preferences.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    bgColor: '#E8F4EE',
    ctaText: 'Explore Treatments',
    ctaHref: '#treatments'
  },
  {
    number: '03',
    title: 'Ensuring Confidentiality',
    quote: 'YOUR PRIVACY & CONFIDENTIALITY ARE OUR HIGHEST COMMITMENT',
    description: 'Infertile couples still face a lot of social stigma and wish to maintain secrecy in their treatment. Confidentiality is the right of every person. Being healthcare professionals we abide by strict rules of confidentiality.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    bgColor: '#F3EBF7',
    ctaText: 'Learn About Privacy',
    ctaHref: '#contact'
  },
  {
    number: '04',
    title: 'Affordable & Transparent',
    quote: 'TRANSPARENT PRICING — FINANCIAL CONCERNS SHOULD NEVER STOP YOUR DREAM',
    description: 'Infertility treatment should not be a hurdle. We have taken care to give an affordable fertility treatment that focuses only on what is needed, at the right time, with zero interest EMI options available.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    bgColor: '#F5F2EB',
    ctaText: 'View Pricing Options',
    ctaHref: '#contact'
  }
];

const AboutUsPage = ({ onNavigateBack, onBookConsultation }) => {
  return (
    <div className="about-page-wrapper">
      
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-bg-overlay"></div>
        <div className="container about-hero-container">
          
          <div className="about-hero-content">
            <div className="about-eyebrow">
              <span className="eyebrow-dash">—</span> ABOUT NEOVITA FERTILITY CENTRE
            </div>

            <h1 className="about-hero-headline">
              Experience The Best<br />
              <span className="highlight-purple-italic">IVF</span> Centre In <span className="highlight-purple-italic">Kerala</span>
            </h1>

            <p className="about-hero-description">
              Dedicated to helping couples realize their dream of parenthood through cutting-edge reproductive science, moral ethics, and compassionate patient care.
            </p>

            {/* 4 Feature Trust Highlights */}
            <div className="about-trust-bar">
              <div className="trust-col">
                <div className="trust-icon-circle"><Heart size={18} /></div>
                <span className="trust-label">Advanced<br />Technology</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-col">
                <div className="trust-icon-circle"><Users size={18} /></div>
                <span className="trust-label">Experienced<br />Specialists</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-col">
                <div className="trust-icon-circle"><ShieldCheck size={18} /></div>
                <span className="trust-label">Ethical &<br />Transparent Care</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-col">
                <div className="trust-icon-circle"><HeartPulse size={18} /></div>
                <span className="trust-label">Higher Success<br />Rates</span>
              </div>
            </div>
          </div>

          {/* Cursive Handwriting Overlay on Right */}
          <div className="about-cursive-overlay">
            <span className="cursive-line1">New Dreams</span>
            <span className="cursive-line2">New Beginnings <span className="heart-symbol">♡</span></span>
          </div>

        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="about-story-section">
        <div className="bg-decor-wave-left"></div>
        <div className="container about-story-container">
          
          <div className="story-header-wrapper">
            <div className="story-eyebrow">
              <span className="eyebrow-dot">●</span> OUR STORY & MISSION
            </div>
            <h2 className="story-headline">
              Bringing Hope & New Beginnings to<br />Every Family
            </h2>
          </div>

          <div className="story-grid">
            
            {/* Left Cards Column */}
            <div className="story-cards-column">
              
              {/* Card 1: Our Legacy */}
              <div className="story-card">
                <div className="story-card-icon-wrapper">
                  <MapPin size={22} className="story-icon" />
                </div>
                <div className="story-card-content">
                  <h3 className="story-card-title">Our Legacy</h3>
                  <p className="story-card-body">
                    Based in Kollam, the Southern district of Kerala, God's own country, Neovita Fertility Centre is a Fertility Clinic established in November 2022, to lend a helping hand to those couples who have not been fortunate enough to conceive a child naturally.
                  </p>
                </div>
              </div>

              {/* Card 2: Our People */}
              <div className="story-card">
                <div className="story-card-icon-wrapper">
                  <Users size={22} className="story-icon" />
                </div>
                <div className="story-card-content">
                  <h3 className="story-card-title">Our People</h3>
                  <p className="story-card-body">
                    Neovita is the brain child of a few passionate fertility professionals who with their knowledge and experience, gained through years of working in many fertility centres inside and outside the country, wanted to initiate a facility in their home state that offers affordable yet scientifically advanced fertility treatment.
                  </p>
                </div>
              </div>

              {/* Card 3: Our Commitment */}
              <div className="story-card">
                <div className="story-card-icon-wrapper">
                  <Target size={22} className="story-icon" />
                </div>
                <div className="story-card-content">
                  <h3 className="story-card-title">Our Commitment</h3>
                  <p className="story-card-body">
                    We aim to provide an affordable fertility treatment through the application of state-of-the-art advanced technologies, upholding highest grades of ethics and morality.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Visual Frame & Accents Column */}
            <div className="story-visual-column">
              <div className="visual-wrapper">
                
                {/* Lilac Accent Backframe */}
                <div className="visual-backframe"></div>

                {/* Main Baby Image */}
                <div className="visual-image-card">
                  <img 
                    src="/about-baby-hands.jpg" 
                    alt="Baby feet held lovingly in hands" 
                    className="story-baby-image"
                  />

                  {/* Floating Badge Top Left */}
                  <div className="floating-badge badge-top-left">
                    <div className="badge-icon-bg">
                      <MapPin size={18} color="#5E239D" />
                    </div>
                    <div className="badge-text-group">
                      <span className="badge-main-text">Kollam, Kerala</span>
                      <span className="badge-sub-text">Established Nov 2022</span>
                    </div>
                  </div>

                  {/* Floating Badge Bottom Right */}
                  <div className="floating-badge badge-bottom-right">
                    <div className="badge-icon-bg">
                      <Heart size={18} color="#5E239D" />
                    </div>
                    <div className="badge-text-group">
                      <span className="badge-main-text">Your Dream</span>
                      <span className="badge-sub-text">Our Commitment</span>
                    </div>
                  </div>

                </div>

                {/* Vertical Decorative Sidebar Accent */}
                <div className="vertical-decor-sidebar">
                  <div className="decor-word-stack">
                    <span>SCIENCE</span>
                    <span>CARE</span>
                    <span>HOPE</span>
                  </div>
                  <div className="decor-line"></div>
                  <div className="decor-lotus-icon">
                    <Flower2 size={24} color="#9d74c3" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Sticky Stacked Why Choose Us Section */}
      <section className="why-choose-stacked-section">
        <div className="why-choose-stacked-wrapper">
          {whyChooseSections.map((section, index) => (
            <div 
              className="why-choose-stacked-card" 
              key={index} 
              style={{ zIndex: index + 1, backgroundColor: section.bgColor || '#F8F8F6' }}
            >
              <div className="why-choose-stacked-content">
                
                {/* LEFT COLUMN (45%): NUMBER + TITLE + QUOTE + DESCRIPTION + CTA */}
                <div className="why-choose-left-col">
                  <div className="why-choose-section-eyebrow">
                    <span className="eyebrow-dash">—</span> WHY CHOOSE US
                  </div>
                  <div className="why-choose-number-badge">{section.number}</div>
                  <h2 className="why-choose-title">{section.title}</h2>
                  <div className="why-choose-quote">{section.quote}</div>
                  <p className="why-choose-desc">{section.description}</p>
                  <a 
                    href={section.ctaHref} 
                    className="why-choose-cta-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onBookConsultation) onBookConsultation();
                    }}
                  >
                    <span>{section.ctaText}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>

                {/* RIGHT COLUMN (55%): LARGE PROFESSIONAL TEAM PHOTOGRAPH */}
                <div className="why-choose-right-col">
                  <div className="why-choose-img-wrapper">
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      className="why-choose-team-img"
                      onError={(e) => {
                        if (section.fallbackImage) e.target.src = section.fallbackImage;
                      }}
                    />
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="why-choose-card-footer">
                <span>SECTION {section.number} / 04</span>
                <span>WHY CHOOSE NEOVITA FERTILITY</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fully Responsive Glassmorphism Get Medical Consultation Section */}
      <section className="purpose-consultation-section">
        {/* Ambient Glow Effects */}
        <div className="glass-ambient-orb orb-top-left"></div>
        <div className="glass-ambient-orb orb-bottom-right"></div>

        <div className="purpose-container">
          
          {/* Header */}
          <div className="purpose-header">
            <div className="purpose-eyebrow">
              <span className="eyebrow-line-left"></span>
              <Sparkles size={14} className="eyebrow-sparkle" />
              OUR PURPOSE
              <Sparkles size={14} className="eyebrow-sparkle" />
              <span className="eyebrow-line-right"></span>
            </div>
            <h2 className="purpose-title">
              Get Medical <span className="highlight-purple-gradient">Consultation</span>
            </h2>
            <p className="purpose-subtitle">Expert guidance. Better decisions. A healthier tomorrow.</p>
          </div>

          {/* Cards Grid */}
          <div className="purpose-cards-grid">

            {/* Left Card: OUR VISION (Light Glass Card) */}
            <div className="purpose-card vision-card glass-card-light">
              <div className="glass-reflection-overlay"></div>
              
              <div className="card-top-row">
                <div className="card-icon-wrapper vision-icon-glow">
                  <Eye className="card-icon vision-icon" size={28} />
                </div>
                <div className="card-heading-group">
                  <span className="card-label vision-label">OUR VISION</span>
                  <h3 className="card-headline vision-headline">Building a Healthier Tomorrow</h3>
                </div>
              </div>

              <p className="card-description vision-description">
                To be one of the most successful Fertility Treatment Centre in India, by helping couples who are unable to naturally conceive, in experiencing parenthood by offering affordable, effective and modern solutions to its customers.
              </p>

              {/* Feature Pills Footer */}
              <div className="glass-pills-footer">
                <span className="glass-pill pill-light">
                  <Sparkles size={13} /> Modern Solutions
                </span>
                <span className="glass-pill pill-light">
                  <Heart size={13} /> Affordable Care
                </span>
                <span className="glass-pill pill-light">
                  <ShieldCheck size={13} /> Proven Results
                </span>
              </div>

              <div className="card-bottom-accent vision-accent"></div>
            </div>

            {/* Right Card: OUR MISSION (Dark Luxury Glass Card) */}
            <div className="purpose-card mission-card glass-card-dark">
              <div className="glass-reflection-overlay"></div>
              
              <div className="card-top-row">
                <div className="card-icon-wrapper mission-icon-glow">
                  <Target className="card-icon mission-icon" size={28} />
                </div>
                <div className="card-heading-group">
                  <span className="card-label mission-label">OUR MISSION</span>
                  <h3 className="card-headline mission-headline">Hope, Support and Parenthood</h3>
                </div>
              </div>

              <p className="card-description mission-description">
                To give hope to infertile couples in experiencing parenthood, one of the greatest miracles in life and spread happiness by helping them fulfil their dreams of conceiving a child.
              </p>

              {/* Feature Pills Footer */}
              <div className="glass-pills-footer">
                <span className="glass-pill pill-dark">
                  <Flower2 size={13} /> Spreading Hope
                </span>
                <span className="glass-pill pill-dark">
                  <Heart size={13} /> Fulfilling Dreams
                </span>
                <span className="glass-pill pill-dark">
                  <Users size={13} /> Compassionate Care
                </span>
              </div>

              <div className="card-bottom-accent mission-accent"></div>

              {/* Decorative Corner Leaf */}
              <div className="mission-corner-leaf">
                <Flower2 size={70} color="rgba(192, 132, 252, 0.2)" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Our Happy Patients Testimonial Section */}
      <HappyPatients />

    </div>
  );
};

export default AboutUsPage;
