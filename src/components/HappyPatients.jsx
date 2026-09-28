import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './HappyPatients.css';

const testimonialPages = [
  // Page 1 (Exact match from the provided screenshot)
  [
    {
      id: 1,
      text: "Neovita IVF Centre has truly been a blessing for us. Their dedicated team of experts provided personalized care throughout our IVF journey, and we are now proud parents thanks to their expertise and unwavering support",
      author: "Diona Vinod",
      role: "Happy Parent",
      rating: 5,
      location: "Kollam, Kerala"
    },
    {
      id: 2,
      text: "Choosing Neovita IVF Centre was the best decision we made. From the initial consultation to the successful outcome, their professionalism and commitment to excellence shone through every step of the process, making our dreams of having a family a reality",
      author: "Robin Raju",
      role: "Happy Parent",
      rating: 5,
      location: "Trivandrum, Kerala"
    },
    {
      id: 3,
      text: "We cannot thank Neovita IVF Centre enough for their exceptional care and expertise. Their team went above and beyond to ensure our comfort and confidence throughout the entire IVF procedure, resulting in the joyful arrival of our precious little one",
      author: "Jackson James",
      role: "Happy Parent",
      rating: 5,
      location: "Kottayam, Kerala"
    }
  ],
  // Page 2
  [
    {
      id: 4,
      text: "I had a wonderful experience at Neovita. It was my first visit, and Dr. Anju made me feel completely at ease. She listened patiently, understood my concerns, and provided a clear solution with compassionate care.",
      author: "Greeshma GR",
      role: "Patient",
      rating: 5,
      location: "Kollam, Kerala"
    },
    {
      id: 5,
      text: "We wholeheartedly recommend Neovita fertility center to anyone facing infertility challenges. Our journey here was smooth and stress-free. The entire team was efficient, focused, and incredibly kind.",
      author: "Vinoth Kumar",
      role: "Happy Parent",
      rating: 5,
      location: "Kochi, Kerala"
    },
    {
      id: 6,
      text: "I recently visited Neovita Fertility Centre and had a wonderfully positive experience. Dr. Anju Madhavan was incredibly friendly and supportive, taking the time to listen and explain everything clearly.",
      author: "Athira Monoharan",
      role: "Patient",
      rating: 5,
      location: "Alappuzha, Kerala"
    }
  ],
  // Page 3
  [
    {
      id: 7,
      text: "The doctors are very good, professional, and genuinely nice — they really take time to listen and explain everything clearly. All the staff are friendly, making every visit feel comfortable and stress-free.",
      author: "Jessica Atienza",
      role: "International Patient",
      rating: 5,
      location: "Philippines"
    },
    {
      id: 8,
      text: "The best Fertility centre in Kerala. All the procedures are well cleared beyond any doubt. The emotional support, timely guidance, and friendly nature above all an affordable price attract everyone to Neovita.",
      author: "Jimmy Akkattucst",
      role: "Happy Parent",
      rating: 5,
      location: "Thrissur, Kerala"
    },
    {
      id: 9,
      text: "We had an excellent experience at Neovita Hospital. All the staff were professional, kind, and attentive. The doctor took the time to explain everything clearly. I would highly recommend this hospital to anyone.",
      author: "Kanchi Kanchi",
      role: "Patient",
      rating: 5,
      location: "Kollam, Kerala"
    }
  ]
];

const HappyPatients = () => {
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
    <section className="happy-patients-section">
      <div className="happy-patients-container">
        
        {/* Section Header */}
        <div className="happy-patients-header">
          <span className="happy-patients-eyebrow">Testimonial</span>
          <h2 className="happy-patients-title">Our Happy Patients</h2>
        </div>

        {/* Carousel Content Container with Side Arrows for Desktop */}
        <div className="happy-patients-carousel-wrapper">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={handlePrev} 
            aria-label="Previous Testimonials"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="happy-patients-cards-grid">
            {currentTestimonials.map((item) => (
              <div className="patient-card" key={item.id}>
                
                {/* Premium Star Rating & Quote Badge */}
                <div className="card-top-row">
                  <div className="star-rating-group">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="star-icon" fill="#ffb400" color="#ffb400" />
                    ))}
                  </div>
                  <Quote size={24} className="card-quote-icon" />
                </div>

                {/* Main Body Text */}
                <p className="patient-card-text">{item.text}</p>

                {/* Card Footer: Author Name & Role */}
                <div className="patient-card-author-box">
                  <h4 className="patient-card-author">{item.author}</h4>
                  <div className="patient-card-details">
                    <span className="patient-role">{item.role}</span>
                    <span className="role-dot">&bull;</span>
                    <span className="patient-location">{item.location}</span>
                  </div>
                </div>

              </div>
            ))}
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
