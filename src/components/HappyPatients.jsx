import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import './HappyPatients.css';

const testimonialPages = [
  // Page 1 (Exact match from the provided screenshot)
  [
    {
      id: 1,
      text: "I had a wonderful experience at Neovita. It was my first visit, and Dr. Anju made me feel completely at ease. She listened patiently, understood my concerns, and provided a clear solution with compassionate care.",
      author: "GREESHMA GR",
      role: "Patient",
      location: "Kollam, Kerala",
      rating: 5,
      isFeatured: false
    },
    {
      id: 2,
      text: "We wholeheartedly recommend Neovita fertility center to anyone facing infertility challenges. Our journey here was smooth and stress-free. The entire team was efficient, focused, and incredibly kind.",
      author: "VINOTH KUMAR",
      role: "Happy Parent",
      location: "Kochi, Kerala",
      rating: 5,
      isFeatured: true // Active middle card with purple highlight border
    },
    {
      id: 3,
      text: "I recently visited Neovita Fertility Centre and had a wonderfully positive experience. Dr. Anju Madhavan was incredibly friendly and supportive, taking the time to listen and explain everything clearly.",
      author: "ATHIRA MONOHARAN",
      role: "Patient",
      location: "Alappuzha, Kerala",
      rating: 5,
      isFeatured: false
    }
  ],
  // Page 2
  [
    {
      id: 4,
      text: "Neovita IVF Centre has truly been a blessing for us. Their dedicated team of experts provided personalized care throughout our IVF journey, and we are now proud parents thanks to their expertise and unwavering support.",
      author: "DIONA VINOD",
      role: "Happy Parent",
      location: "Kollam, Kerala",
      rating: 5,
      isFeatured: false
    },
    {
      id: 5,
      text: "Choosing Neovita IVF Centre was the best decision we made. From the initial consultation to the successful outcome, their professionalism and commitment to excellence shone through every step of the process.",
      author: "ROBIN RAJU",
      role: "Happy Parent",
      location: "Trivandrum, Kerala",
      rating: 5,
      isFeatured: true
    },
    {
      id: 6,
      text: "We cannot thank Neovita IVF Centre enough for their exceptional care and expertise. Their team went above and beyond to ensure our comfort and confidence throughout the entire IVF procedure.",
      author: "JACKSON JAMES",
      role: "Happy Parent",
      location: "Kottayam, Kerala",
      rating: 5,
      isFeatured: false
    }
  ],
  // Page 3
  [
    {
      id: 7,
      text: "The doctors are very good, professional, and genuinely nice — they really take time to listen and explain everything clearly. All the staff are friendly, making every visit feel comfortable and stress-free.",
      author: "JESSICA ATIENZA",
      role: "International Patient",
      location: "Philippines",
      rating: 5,
      isFeatured: false
    },
    {
      id: 8,
      text: "The best Fertility centre in Kerala. All the procedures are well cleared beyond any doubt. The emotional support, timely guidance, and friendly nature above all an affordable price attract everyone to Neovita.",
      author: "JIMMY AKKATTUCST",
      role: "Happy Parent",
      location: "Thrissur, Kerala",
      rating: 5,
      isFeatured: true
    },
    {
      id: 9,
      text: "We had an excellent experience at Neovita Hospital. All the staff were professional, kind, and attentive. The doctor took the time to explain everything clearly. I would highly recommend this hospital to anyone.",
      author: "KANCHI KANCHI",
      role: "Patient",
      location: "Kollam, Kerala",
      rating: 5,
      isFeatured: false
    }
  ]
];

const HappyPatients = ({ isStandalonePage = false, onNavigateBack }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto rotation every 7 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % testimonialPages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index) => {
    setCurrentPage(index);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? testimonialPages.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % testimonialPages.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonials = testimonialPages[currentPage];

  return (
    <section className={`happy-patients-section ${isStandalonePage ? 'standalone-page' : ''}`}>
      
      {/* Decorative Floral SVGs & Background Elements matching screenshot */}
      <div className="bg-decor-flower-top-left" aria-hidden="true">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Soft natural petal shapes */}
          <path d="M0,0 C60,40 120,30 140,0 C120,80 70,120 0,140 Z" fill="#F4EDE4" opacity="0.85" />
          <path d="M0,40 C90,70 140,110 160,180 C110,160 50,130 0,110 Z" fill="#EFE5D9" opacity="0.75" />
          <path d="M40,0 C80,50 110,100 120,160 C70,130 40,80 0,60 Z" fill="#E8DDD0" opacity="0.6" />
        </svg>
      </div>

      <div className="bg-decor-lineart-top-right" aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fine botanical leaf outline drawing */}
          <path d="M220,10 C160,40 130,90 140,170 M140,170 C110,130 70,100 10,90 M140,170 C180,130 200,80 210,30" stroke="#CBB4DD" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
          <path d="M190,40 C170,20 150,25 140,35 C145,55 165,65 190,40 Z" stroke="#B89BCE" strokeWidth="1.2" fill="none" opacity="0.5"/>
          <path d="M160,80 C140,65 125,70 120,80 C125,95 140,105 160,80 Z" stroke="#B89BCE" strokeWidth="1.2" fill="none" opacity="0.5"/>
          <path d="M110,120 C95,110 80,115 75,125 C82,138 98,142 110,120 Z" stroke="#B89BCE" strokeWidth="1.2" fill="none" opacity="0.5"/>
        </svg>
      </div>

      <div className="bg-decor-wave-bottom" aria-hidden="true">
        <svg width="100%" height="160" viewBox="0 0 1440 160" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160 C320,120 420,150 720,130 C1020,110 1200,140 1440,90 L1440,160 L0,160 Z" fill="#EFE8F5" opacity="0.75" />
          <path d="M0,160 C400,100 680,140 960,110 C1240,80 1360,130 1440,120 L1440,160 L0,160 Z" fill="#E5D9ED" opacity="0.85" />
        </svg>
      </div>

      <div className="happy-patients-container">

        {isStandalonePage && (
          <button 
            className="standalone-back-btn" 
            onClick={onNavigateBack}
            aria-label="Back to home page"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
        )}

        {/* Section Header with Eyebrow lines */}
        <div className="happy-patients-header">
          <div className="eyebrow-container">
            <span className="eyebrow-line"></span>
            <span className="happy-patients-eyebrow">TESTIMONIALS</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="happy-patients-title">
            Our Happy <span className="title-italic-purple">Patients</span>
          </h2>
          <p className="happy-patients-subtitle">
            Real stories. Genuine smiles. Hear from our patients about their journey with Neovita Fertility Centre.
          </p>
        </div>

        {/* Carousel Content Container with Side Nav Arrows */}
        <div className="happy-patients-carousel-wrapper">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={handlePrev} 
            aria-label="Previous Testimonials"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="happy-patients-cards-grid">
            {currentTestimonials.map((item, index) => {
              // Index 1 (middle card) gets featured active outline highlight by default
              const isMiddleFeatured = item.isFeatured || index === 1;

              return (
                <div 
                  className={`patient-card ${isMiddleFeatured ? 'patient-card-featured' : ''}`} 
                  key={item.id}
                >
                  
                  {/* Top Row: Star Rating & Purple Quote Icon */}
                  <div className="card-top-row">
                    <div className="star-rating-group">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} className="star-icon" fill="#FFB400" color="#FFB400" />
                      ))}
                    </div>
                    <Quote size={26} className="card-quote-icon" />
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="patient-card-text">{item.text}</p>

                  {/* Card Footer: Author & Location Details */}
                  <div className="patient-card-author-box">
                    <h4 className="patient-card-author">{item.author}</h4>
                    <div className="patient-card-details">
                      <span className="patient-role">{item.role}</span>
                      <span className="role-dot">&bull;</span>
                      <span className="patient-location">{item.location}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={handleNext} 
            aria-label="Next Testimonials"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Pagination Dots at Bottom */}
        <div className="happy-patients-pagination">
          {testimonialPages.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${currentPage === index ? 'active-dot' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HappyPatients;

