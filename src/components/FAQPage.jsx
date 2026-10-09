import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, HelpCircle, PhoneCall, Calendar, MessageCircle, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import './FAQPage.css';

const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & IVF' },
  { id: 'treatment', label: 'Treatments & Care' },
  { id: 'success', label: 'Success Rates' },
  { id: 'international', label: 'International Patients' },
  { id: 'costs', label: 'Costs & Consultation' },
];

const faqData = [
  {
    id: 1,
    category: 'general',
    categoryLabel: 'General & IVF',
    question: "What is IVF and how does the treatment process work at Neovita?",
    answer: "In Vitro Fertilization (IVF) is a specialized procedure where eggs are retrieved from the ovaries and fertilized with sperm in our state-of-the-art laboratory. At Neovita, the process begins with personalized ovulation stimulation, followed by precise egg retrieval, fertilization, embryo culture in our advanced incubator systems, and finally gentle embryo transfer into the uterus."
  },
  {
    id: 2,
    category: 'general',
    categoryLabel: 'General & IVF',
    question: "When should a couple consider consulting a fertility specialist?",
    answer: "We recommend consulting a fertility doctor if you have been trying to conceive naturally for 12 months (or 6 months if the female partner is over 35 years old). Early consultation helps identify any underlying issues promptly and provides peace of mind with tailored guidance."
  },
  {
    id: 3,
    category: 'success',
    categoryLabel: 'Success Rates',
    question: "What are Neovita's IVF success rates?",
    answer: "Neovita Fertility Centre maintains world-class success rates that rival top global fertility centers. Our individualized treatment protocols, advanced blastocyst culture, embryo freezing, and experienced embryology team allow us to achieve high pregnancy rates across various age groups and complex cases."
  },
  {
    id: 4,
    category: 'treatment',
    categoryLabel: 'Treatments & Care',
    question: "How long does a typical IVF cycle take from start to finish?",
    answer: "A single IVF cycle usually takes around 3 to 4 weeks from the start of ovarian stimulation to the embryo transfer. However, diagnostic workups prior to the cycle may take 1 to 2 weeks, and frozen embryo transfers (FET) may follow a personalized timeline for optimal uterine readiness."
  },
  {
    id: 5,
    category: 'treatment',
    categoryLabel: 'Treatments & Care',
    question: "Is IVF treatment painful or uncomfortable?",
    answer: "Most steps of IVF involve minimal discomfort. Ovarian stimulation involves mild self-administered injections. The egg retrieval procedure is performed under light sedation so you won't feel pain. Embryo transfer is quick and painless, similar to a routine pap smear."
  },
  {
    id: 6,
    category: 'international',
    categoryLabel: 'International Patients',
    question: "What dedicated services are provided for international patients?",
    answer: "We offer end-to-end concierge support for overseas patients, including online video consultations before travel, medical visa assistance, airport pickups, localized accommodation recommendations near Kollam/Ayathil Junction, translation support, and prioritized appointment scheduling to minimize stay duration."
  },
  {
    id: 7,
    category: 'costs',
    categoryLabel: 'Costs & Consultation',
    question: "How transparent and affordable are treatment costs at Neovita?",
    answer: "Neovita was founded with the core mission of providing world-class fertility treatments at ethical and affordable prices. We provide complete financial transparency before starting any treatment with no hidden fees or surprise charges. Customized installment options and package details are discussed during initial consultation."
  },
  {
    id: 8,
    category: 'treatment',
    categoryLabel: 'Treatments & Care',
    question: "What male fertility treatments are offered at Neovita?",
    answer: "We offer comprehensive male fertility solutions including advanced semen analysis, sperm DNA fragmentation testing, ICSI (Intracytoplasmic Sperm Injection), IMSI, TESA/PESA surgical sperm retrieval, and specialized lifestyle/medication regimens for sperm quality enhancement."
  },
  {
    id: 9,
    category: 'general',
    categoryLabel: 'General & IVF',
    question: "What is egg freezing (fertility preservation) and who is it for?",
    answer: "Egg freezing allows women to preserve their mature eggs for future use. It is ideal for career-focused women, individuals planning to delay pregnancy, or patients undergoing medical treatments (such as chemotherapy) that could affect future fertility."
  },
  {
    id: 10,
    category: 'costs',
    categoryLabel: 'Costs & Consultation',
    question: "Can I schedule a virtual video consultation before visiting the clinic?",
    answer: "Yes! You can schedule an online video consultation with Dr. Anju Madhavan and our senior fertility team from the comfort of your home. We review your medical history, reports, and answer initial questions to prepare a preliminary roadmap before your physical clinic visit."
  }
];

const FaqPage = ({ onNavigateBack, onBookConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqId, setOpenFaqId] = useState(1); // Default open first item

  const toggleFaq = (id) => {
    setOpenFaqId(prevId => (prevId === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="faq-page-wrapper">
      {/* Hero Header Section */}
      <section className="faq-hero-section">
        <div className="container">
          <div className="faq-hero-top">
            <button className="faq-back-btn" onClick={onNavigateBack}>
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </button>
            <div className="faq-badge">
              <Sparkles size={16} />
              <span>HELP & KNOWLEDGE BASE</span>
            </div>
          </div>

          <h1 className="faq-hero-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h1>
          <p className="faq-hero-subtitle">
            Have questions about fertility treatments, IVF cycles, success rates, or visiting Neovita?<br/>
            We have compiled clear, reassuring answers to guide you with complete confidence.
          </p>

          {/* Search Box */}
          <div className="faq-search-box">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search for answers (e.g. IVF duration, success rates, costs)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="faq-search-input"
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className="faq-content-section">
        <div className="container">
          
          {/* Category Tabs */}
          <div className="faq-tabs-container">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                className={`faq-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
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
                const isOpen = openFaqId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className={`faq-card ${isOpen ? 'open' : ''}`}
                  >
                    <button 
                      className="faq-card-header" 
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-question-meta">
                        <span className="faq-category-tag">{faq.categoryLabel}</span>
                        <h3 className="faq-question-text">{faq.question}</h3>
                      </div>
                      <div className={`faq-chevron-icon ${isOpen ? 'rotated' : ''}`}>
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                          }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="faq-card-body-wrapper"
                        >
                          <div className="faq-card-body">
                            <p className="faq-answer-text">{faq.answer}</p>
                            <div className="faq-answer-footer">
                              <span className="trust-verified">
                                <CheckCircle2 size={16} color="#8339b6" /> Medically reviewed by Neovita Care Team
                              </span>
                              <button className="faq-ask-more-link" onClick={onBookConsultation}>
                                Speak to a specialist &rarr;
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="faq-empty-state">
                <HelpCircle size={48} className="empty-icon" />
                <h3>No matching questions found</h3>
                <p>Try refining your search terms or browse across all categories.</p>
                <button className="reset-search-btn" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Still Have Questions Banner */}
          <div className="faq-cta-banner">
            <div className="cta-banner-content">
              <h2 className="cta-title">Still Have Questions?</h2>
              <p className="cta-description">
                Our compassionate fertility counselors and doctors are here to listen, guide, and support you every step of the way.
              </p>
            </div>
            <div className="cta-banner-actions">
              <button className="cta-btn primary-cta" onClick={onBookConsultation}>
                <Calendar size={18} />
                <span>Book Consultation</span>
              </button>
              <a href="tel:+919447000000" className="cta-btn secondary-cta">
                <PhoneCall size={18} />
                <span>Call +91 9447 000 000</span>
              </a>
              <a href="https://wa.me/919447000000" target="_blank" rel="noreferrer" className="cta-btn whatsapp-cta">
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FaqPage;
