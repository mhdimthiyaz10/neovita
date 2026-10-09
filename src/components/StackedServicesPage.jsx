import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './StackedServicesPage.css';

const sectionsData = [
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

const StackedServicesPage = ({ onNavigateBack, onNavigate, onBookConsultation }) => {
  return (
    <div className="stacked-page">
      {/* Fixed Header Bar */}
      <div className="stacked-top-header">
        <button className="stacked-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={16} /> Return to Home
        </button>
        <div className="stacked-header-title">WHY CHOOSE US — OUR SERVICES STACK</div>
        <button className="stacked-book-btn" onClick={onBookConsultation}>
          Book Consultation <ArrowRight size={14} />
        </button>
      </div>

      {/* STACKED STICKY OVERLAPPING CARDS WRAPPER */}
      <div className="stacked-wrapper">
        {sectionsData.map((section, index) => {
          return (
            <section 
              className="stacked-card" 
              key={index} 
              style={{ zIndex: index + 1, backgroundColor: section.bgColor || '#F8F8F6' }}
            >
              <div className="stacked-card-content">
                
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
                      if (onNavigate) onNavigate('home', section.ctaHref);
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

              {/* Bottom Subtle Stack Indicator Bar */}
              <div className="stacked-card-footer">
                <span>SECTION {section.number} / 04</span>
                <span>NEOVITA FERTILITY PRESERVATION & CLINICAL CARE</span>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default StackedServicesPage;
