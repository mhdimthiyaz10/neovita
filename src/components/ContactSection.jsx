import React from 'react';
import { MapPin, Navigation, Image as ImageIcon, ArrowLeft, ArrowUpRight } from 'lucide-react';
import './ContactSection.css';

const officeLocations = [
  {
    id: 'kollam',
    badge: 'Main Centre & IVF Lab',
    title: 'Office Address - Kollam',
    tagline: 'Flagship Clinical Facility',
    address: 'KMC 32/2463, 205, First Floor of A. R. Arcade, Ayathil, Kallumthazham P. O., Kollam – 691021',
    status: 'Consultations Open',
    mapLink: 'https://maps.google.com/?q=Neovita+Fertility+Centre+Kollam',
    placeholderTag: 'Kollam Clinic Branch',
    imageSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ochira',
    badge: 'Partner Multi-Speciality Centre',
    title: 'Office Address - Ochira (RCPM Hospital)',
    tagline: 'Multi-Speciality Hospital Branch',
    address: 'RCPM Hospital, Changankulangara, Ochira PO, Changankulangara, Kollam, Kerala – 690526',
    status: 'Consultations Open',
    mapLink: 'https://maps.google.com/?q=RCPM+Hospital+Changankulangara+Ochira+Kollam',
    placeholderTag: 'Ochira Branch (RCPM Hospital)',
    imageSrc: '/rcpm_hospital.png'
  },
  {
    id: 'aleppy',
    badge: 'Speciality Branch',
    title: 'Office Address - Aleppy',
    tagline: 'Regional Consultation Centre',
    address: 'Kattanam – St. Thomas Hospital, Kattanam, Kayamkulam, Alappuzha, Kerala',
    status: 'Consultations Open',
    mapLink: 'https://maps.google.com/?q=St+Thomas+Hospital+Kattanam',
    placeholderTag: 'Aleppy (Alappuzha) Branch',
    imageSrc: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  }
];

const ContactSection = ({ isStandalonePage = false, onNavigateBack }) => {
  return (
    <section className={`contact-locations-section ${isStandalonePage ? 'standalone-page' : ''} relative`}>
      {/* Background Soft Mint Depth Layer */}
      <div className="contact-bg-glow" aria-hidden="true" />

      {isStandalonePage && (
        <div className="container back-btn-container">
          <button className="contact-back-btn" onClick={onNavigateBack} aria-label="Back to Home">
            <ArrowLeft size={14} className="back-btn-arrow" />
            <span>BACK TO HOME</span>
          </button>
        </div>
      )}

      <div className="container contact-container">
        
        {/* Section Header */}
        <header className="contact-header">
          <div className="contact-eyebrow-badge">
            <span>NEOVITA FERTILITY CARE</span>
          </div>
          
          <h1 className="contact-title">
            Find Your <span className="highlight-emerald-text">Care Centre</span>
          </h1>
          
          <p className="contact-subtitle">
            Expert fertility care, closer to home.
          </p>
        </header>

        {/* Office Cards Grid with Sharp Architectural Panels */}
        <div className="contact-cards-grid">
          {officeLocations.map((office) => (
            <div className="contact-office-card" id={office.id} key={office.id}>
              
              {/* Sharp Edge Top Accent Line */}
              <div className="card-top-accent"></div>

              {/* Dedicated Image Holder Space - Sharp Edge */}
              <div className="card-image-holder">
                {office.imageSrc ? (
                  <img src={office.imageSrc} alt={office.title} className="office-card-img" />
                ) : (
                  <div className="image-placeholder-fallback">
                    <ImageIcon size={32} className="placeholder-icon" />
                    <span>Location Preview</span>
                  </div>
                )}
                
                {/* Vignette Shadow for Premium Contrast */}
                <div className="card-image-vignette"></div>

                {/* Sharp Branch Badge */}
                <div className="office-branch-tag">
                  <span className="tag-pulse-square"></span>
                  <span>{office.placeholderTag}</span>
                </div>
              </div>

              {/* Card Content Body - Sharp Edge Architectural Panel */}
              <div className="card-body-content">
                
                {/* Meta Header with Category & Availability */}
                <div className="card-meta-row">
                  <span className="card-meta-category">{office.badge}</span>
                  <div className="card-status-pill">
                    <span className="status-dot"></span>
                    <span>{office.status}</span>
                  </div>
                </div>

                {/* Office Title */}
                <h3 className="office-card-title">{office.title}</h3>

                {/* Sharp-Edged Address Panel */}
                <div className="office-address-panel">
                  <div className="address-icon-box">
                    <MapPin size={17} className="address-panel-pin" />
                  </div>
                  <div className="address-text-block">
                    <span className="address-label">Location & Address</span>
                    <p className="office-card-address">{office.address}</p>
                  </div>
                </div>

                {/* Sharp Action Button: Get Directions */}
                <div className="office-card-actions">
                  <a 
                    href={office.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-get-directions"
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                    <ArrowUpRight size={14} className="action-arrow-icon" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
