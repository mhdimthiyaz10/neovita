import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { RadialBackground } from '@/components/ui/light-theme-tailwind-css-background-snippet';
import './ContactSection.css';

const officeLocations = [
  {
    id: 'kollam',
    title: 'Office Address - Kollam',
    address: 'KMC 32/2463, 205, First Floor of A. R. Arcade, Ayathil, Kallumthazham P. O., Kollam – 691021',
    phone: '+91 94000 00000',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    mapLink: 'https://maps.google.com/?q=Neovita+Fertility+Centre+Kollam',
    placeholderTag: 'Kollam Clinic Branch',
    imageSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trivandrum',
    title: 'Office Address - Trivandrum',
    address: 'Surgery clinic and speciality hospital, starlane road, varkala, Trivandrum',
    phone: '+91 94000 00000',
    hours: 'Mon - Sat: 9:00 AM - 5:00 PM',
    mapLink: 'https://maps.google.com/?q=Trivandrum+Varkala+Clinic',
    placeholderTag: 'Trivandrum Branch',
    imageSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aleppy',
    title: 'Office Address - Aleppy',
    address: 'Kattanam – St. Thomas Hospital, Kattanam, Kayamkulam, Alappuzha',
    phone: '+91 94000 00000',
    hours: 'Mon - Sat: 9:30 AM - 5:30 PM',
    mapLink: 'https://maps.google.com/?q=St+Thomas+Hospital+Kattanam',
    placeholderTag: 'Aleppy (Alappuzha) Branch',
    imageSrc: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  }
];

const ContactSection = ({ isStandalonePage = false, onNavigateBack, onBookConsultation }) => {
  return (
    <section className={`contact-locations-section ${isStandalonePage ? 'standalone-page' : ''} relative overflow-hidden`}>
      <RadialBackground />

      
      {isStandalonePage && (
        <div className="container back-btn-container">
          <button className="contact-back-btn" onClick={onNavigateBack}>
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>
      )}

      <div className="container contact-container">
        
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-eyebrow">
            <span className="eyebrow-line"></span>
            OUR CLINIC LOCATIONS
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="contact-title">
            Visit Our <span className="highlight-green-text">Clinics</span>
          </h2>
          <p className="contact-subtitle">
            We are accessible across major hubs in Kerala. Reach out to our fertility specialists at any of our clinic addresses below.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="contact-cards-grid">
          {officeLocations.map((office) => (
            <div className="contact-office-card" id={office.id} key={office.id}>
              
              {/* Dedicated Image Holder Space */}
              <div className="card-image-holder">
                {office.imageSrc ? (
                  <img src={office.imageSrc} alt={office.title} className="office-card-img" />
                ) : (
                  <div className="image-placeholder-fallback">
                    <ImageIcon size={36} className="placeholder-icon" />
                    <span>Image Holder Space</span>
                  </div>
                )}
                
                {/* Branch Badge */}
                <div className="office-branch-tag">
                  <MapPin size={13} /> {office.placeholderTag}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="card-body-content">
                
                {/* Location Icon & Title Row */}
                <div className="location-icon-wrapper">
                  <MapPin size={26} className="location-pin-icon" />
                </div>

                <h3 className="office-card-title">{office.title}</h3>

                <p className="office-card-address">{office.address}</p>

                {/* Additional Action Bar */}
                <div className="office-card-actions">
                  <a 
                    href={office.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-get-directions"
                  >
                    <Navigation size={14} /> Get Directions
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
