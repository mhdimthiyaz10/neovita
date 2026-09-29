import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Apple, 
  ShieldCheck, 
  Users, 
  Flower2
} from 'lucide-react';
import { RadialBackground } from '@/components/ui/light-theme-tailwind-css-background-snippet';
import './PreConceptionalPage.css';

const carePillars = [
  {
    id: 'timing',
    icon: Calendar,
    title: 'Right Timing',
    desc: 'The doctor will help you understand the best time to conceive and plan accordingly for a healthier journey.'
  },
  {
    id: 'nutrition',
    icon: Apple,
    title: 'Supplements & Nutrition',
    desc: 'Guidance on essential supplements and nutrition to support fertility and overall well-being.'
  },
  {
    id: 'health',
    icon: ShieldCheck,
    title: 'Health Optimization',
    desc: 'Assessment and optimization of any existing medical conditions to ensure a safer pregnancy and healthier baby.'
  }
];

const PreConceptionalPage = ({ onNavigateBack, onBookConsultation }) => {
  return (
    <div className="preconceptional-page">
      <RadialBackground />

      {/* Leaf Background Decor */}
      <svg className="preconcept-bg-leaf" viewBox="0 0 200 200" fill="none">
        <path d="M 50 150 C 80 80, 150 50, 180 20 C 130 90, 80 120, 50 150 Z" stroke="#5e239d" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M 90 110 C 110 90, 140 70, 170 60" stroke="#5e239d" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
      </svg>

      {/* Back Navigation Bar */}
      <div className="container preconcept-back-container">
        <button className="preconcept-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={18} /> Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="preconcept-hero-section">
        <div className="container">
          <div className="preconcept-hero-grid">
            
            {/* Left Column Content */}
            <div className="preconcept-hero-content">
              <div className="preconcept-eyebrow">
                <div className="preconcept-eyebrow-icon">
                  <Flower2 size={14} />
                </div>
                <span>PRE CONCEPTIONAL CARE</span>
                <span className="preconcept-eyebrow-line"></span>
              </div>

              <h1 className="preconcept-hero-title">
                Pre Conceptional <span className="title-accent">Counselling</span>
              </h1>

              <p className="preconcept-hero-subtitle">
                Pre pregnancy counselling includes a discussion between the couple and the doctor to learn about the essential matters to be addressed before getting pregnant.
              </p>
              
              <div className="preconcept-subtitle-bar"></div>

              {/* Doctor & Couple Highlight Card */}
              <div className="preconcept-highlight-box">
                <div className="highlight-box-icon">
                  <Users size={24} />
                </div>
                <div className="highlight-box-text">
                  This includes the right time of conception, the supplements to be taken pre conceptionally and the optimization of medical conditions if any.
                </div>
              </div>

              <button className="btn-purple-pill" onClick={onBookConsultation}>
                Book a Consultation <ArrowRight size={18} className="btn-arrow" />
              </button>
            </div>

            {/* Right Media Column - Custom Organic Arch Frame */}
            <div className="preconcept-hero-media">
              <div className="preconcept-arch-container">
                <div className="preconcept-purple-wave-accent"></div>
                <div className="preconcept-arch-frame">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85" 
                    alt="Neovita Doctor Pre-Conceptional Consultation with Couple" 
                    className="preconcept-arch-img"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars Grid (Exact Match to Image) */}
      <section className="preconcept-pillars-section">
        <div className="container">
          <div className="preconcept-pillars-grid">
            {carePillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div className="preconcept-pillar-card" key={pillar.id}>
                  <div className="pillar-icon-wrapper-purple">
                    <IconComp size={30} />
                  </div>
                  <h3 className="preconcept-pillar-title">{pillar.title}</h3>
                  <p className="preconcept-pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PreConceptionalPage;
