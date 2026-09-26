import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageCircle, ArrowLeft, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import './FAQPage.css';

const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'ivf', label: 'IVF & Treatments' },
  { id: 'care', label: 'Cost & Patient Care' },
  { id: 'general', label: 'General & Facility' },
  { id: 'international', label: 'International Patients' }
];

const faqData = [
  {
    id: 1,
    category: 'general',
    question: "What makes Neovita Fertility Centre the preferred choice in Kerala?",
    answer: "Neovita Fertility Centre combines state-of-the-art in-house embryology laboratories, compassionate patient-centric care, and exceptional success rates. Established in Kollam by passionate fertility professionals, we deliver world-class care upholding highest ethics and morality."
  },
  {
    id: 2,
    category: 'general',
    question: "Where is Neovita Fertility Centre located?",
    answer: "We are conveniently located near Guru Mandiram, Ayathil Junction in Kollam, Kerala. Our central location makes us easily accessible for patients across Kerala as well as international visitors."
  },
  {
    id: 3,
    category: 'ivf',
    question: "What is the success rate of IVF treatments at Neovita?",
    answer: "Our clinical success rates rank among the highest in the region. By utilizing advanced embryo culture incubators, ICSI technology, and personalized treatment protocols customized for each couple, we maximize the probability of a healthy pregnancy."
  },
  {
    id: 4,
    category: 'ivf',
    question: "How long does a complete IVF cycle take?",
    answer: "A standard IVF cycle typically spans about 3 to 4 weeks, starting from controlled ovarian stimulation, egg retrieval, fertilization in our advanced lab, and ending with embryo transfer. Our specialists guide you at every step."
  },
  {
    id: 5,
    category: 'ivf',
    question: "Are ICSI, IUI, and Blastocyst Culture performed in-house?",
    answer: "Yes! Our fully equipped in-house laboratory performs ICSI (Intracytoplasmic Sperm Injection), IUI (Intrauterine Insemination), extended Blastocyst culture, Laser-Assisted Hatching, and Cryopreservation under strict quality standards."
  },
  {
    id: 6,
    category: 'care',
    question: "Is fertility treatment at Neovita affordable?",
    answer: "Yes. Founded with the mission to offer scientifically advanced fertility treatments at accessible costs, we maintain transparent, clear pricing packages with no hidden charges or unexpected fees."
  },
  {
    id: 7,
    category: 'care',
    question: "What emotional and medical support is provided during treatment?",
    answer: "We treat every couple like our only clients. Our team, led by Dr. Anju Madhavan and senior specialists, offers dedicated emotional support, 24/7 helpline guidance, and compassionate one-on-one attention throughout your journey."
  },
  {
    id: 8,
    category: 'international',
    question: "Do you offer guidance for international patients?",
    answer: "Yes! We regularly welcome international patients (including from the Philippines, Gulf countries, and Europe). We offer online tele-consultations, customized travel timeline planning, local stay assistance, and dedicated coordination."
  },
  {
    id: 9,
    category: 'general',
    question: "How do I book an initial consultation with the specialist?",
    answer: "Booking is simple! You can click the 'Book Consultation' button on our website, call our patient helpline directly, or send us a message on WhatsApp. Our patient relations desk will assist you right away."
  }
];

const FAQPage = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(1);
  const [feedback, setFeedback] = useState({});

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleFeedback = (id, isHelpful) => {
    setFeedback(prev => ({ ...prev, [id]: isHelpful }));
  };

  return (
    <div className="faq-page-wrapper">
      {/* Hero Header */}
      <section className="faq-hero-section">
        <div className="faq-hero-glow"></div>
        <div className="container faq-hero-container">
          <div className="faq-hero-badge">
            <Sparkles size={16} /> FAQ & Knowledge Base
          </div>
          <h1 className="faq-hero-title">
            Frequently Asked <span className="highlight-purple">Questions</span>
          </h1>
          <p className="faq-hero-subtitle">
            Everything you need to know about your fertility journey, treatments, lab technologies, and patient care at Neovita.
          </p>

          {/* Search Bar */}
          <div className="faq-search-wrapper">
            <Search size={20} className="faq-search-icon" />
            <input 
              type="text" 
              className="faq-search-input"
              placeholder="Search your questions (e.g. success rate, IVF duration, cost)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="faq-search-clear" onClick={() => setSearchQuery('')}>Clear</button>
            )}
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="faq-main-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="faq-categories">
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                className={`faq-cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="faq-accordion-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className={`faq-card ${isOpen ? 'open' : ''}`}
                  >
                    <div 
                      className="faq-question-bar"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div className="faq-question-left">
                        <span className="faq-q-icon"><HelpCircle size={20} /></span>
                        <h3 className="faq-question-text">{faq.question}</h3>
                      </div>
                      <div className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>

                    {isOpen && (
                      <div className="faq-answer-body">
                        <p className="faq-answer-text">{faq.answer}</p>
                        
                        {/* Helpfulness Feedback */}
                        <div className="faq-feedback-bar">
                          <span>Was this answer helpful?</span>
                          {feedback[faq.id] !== undefined ? (
                            <span className="feedback-thankyou">
                              <CheckCircle2 size={16} /> Thank you for your feedback!
                            </span>
                          ) : (
                            <div className="feedback-buttons">
                              <button onClick={() => handleFeedback(faq.id, true)}>👍 Yes</button>
                              <button onClick={() => handleFeedback(faq.id, false)}>👎 No</button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="faq-empty-state">
                <HelpCircle size={48} className="empty-icon" />
                <h3>No questions found matching "{searchQuery}"</h3>
                <p>Try searching with different keywords or browse our categories above.</p>
                <button className="faq-reset-btn" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                  Reset Search
                </button>
              </div>
            )}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="faq-cta-banner">
            <div className="cta-left">
              <div className="cta-icon-badge">
                <MessageCircle size={28} />
              </div>
              <div>
                <h3 className="cta-title">Still have questions?</h3>
                <p className="cta-desc">Our dedicated medical care team is available to answer all your queries and support your dream.</p>
              </div>
            </div>
            <div className="cta-actions">
              <button className="cta-btn-primary" onClick={() => onNavigate('home')}>
                <PhoneCall size={18} /> Book Free Consultation
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQPage;
