import React, { useState, useEffect, useRef } from 'react';
import { Users, Monitor, TestTube, Activity, Stethoscope, Syringe, Zap, Dna, ArrowRight } from 'lucide-react';
import './Treatments.css';

const topCards = [
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    eyebrow: 'INITIAL ASSESSMENT',
    title: 'Evaluation of Infertile Couple',
    description: 'Infertile couple evaluations entail thorough assessments of medical histories, physical exams, lab tests, and diagnostics to pinpoint causes and plan treatments.',
    page: 'evaluation-infertility'
  },
  {
    icon: <Monitor size={28} strokeWidth={1.5} />,
    eyebrow: 'MONITORING',
    title: 'Follicular Monitoring',
    description: 'Follicular monitoring tracks ovarian follicle development using ultrasound and hormone tests to optimize fertility treatments.',
    page: 'follicular-monitoring'
  },
  {
    icon: <TestTube size={28} strokeWidth={1.5} />,
    eyebrow: 'ANALYSIS',
    title: 'Semen Analysis',
    description: 'Semen analysis assesses the quality and quantity of sperm in a sample to evaluate male fertility potential.',
    page: 'semen-analysis'
  }
];

const bottomCards = [
  {
    icon: <Activity size={24} strokeWidth={1.5} />,
    eyebrow: 'INTRA UTERINE',
    title: 'Intra Uterine Insemination',
    description: "Intrauterine insemination involves placing carefully prepared sperm directly into the uterus during the woman's fertile window to enhance the chances of conception.",
    page: 'iui'
  },
  {
    icon: <Stethoscope size={24} strokeWidth={1.5} />,
    eyebrow: 'IVF',
    title: 'In Vitro Fertilization',
    description: 'In vitro fertilization (IVF) involves fertilizing eggs with sperm in a lab before transferring resulting embryos to the uterus for pregnancy.',
    page: 'ivf-icsi'
  },
  {
    icon: <Syringe size={24} strokeWidth={1.5} />,
    eyebrow: 'ICSI',
    title: 'Intracytoplasmic Sperm Injection',
    description: 'Intracytoplasmic sperm injection (ICSI) is a fertility procedure where a single sperm is injected directly into an egg to facilitate fertilization in cases of male infertility or previous IVF failure.',
    page: 'ivf-icsi'
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    eyebrow: 'LASER HATCHING',
    title: 'Laser Assisted Hatching',
    description: "Laser-assisted hatching uses a laser to create an opening in the embryo's outer shell to aid implantation.",
    page: 'laser-assisted-hatching'
  },
  {
    icon: <Dna size={24} strokeWidth={1.5} />,
    eyebrow: 'GENETIC SCREENING',
    title: 'Pre-implantation genetic screening and diagnosis (PGS/PGD)',
    description: 'Pre-implantation genetic screening and diagnosis (PGS/PGD) tests embryos for genetic abnormalities before transfer, reducing the risk of inherited conditions.',
    page: 'pgs-pgd'
  }
];

const Treatments = ({ onNavigate }) => {
  const trackRef = useRef(null);
  const [placedCount, setPlacedCount] = useState(0);
  const [isShifted, setIsShifted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (!desktop) {
        setPlacedCount(8);
        setIsShifted(false);
      }
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const scrolled = -rect.top;

      // 150px initial buffer before card 1 starts
      if (scrolled < 150) {
        setPlacedCount(0);
        setIsShifted(false);
      } else if (scrolled < 450) {
        // Card 1: Evaluation of Infertile Couple
        setPlacedCount(1);
        setIsShifted(false);
      } else if (scrolled < 750) {
        // Card 2: Follicular Monitoring
        setPlacedCount(2);
        setIsShifted(false);
      } else if (scrolled < 1050) {
        // Card 3: Semen Analysis is reached!
        setPlacedCount(3);
        setIsShifted(false);
      } else {
        // After reaching Semen Analysis, next scrolling moves the page down MORE
        setIsShifted(true);

        if (scrolled < 1450) {
          // Transition zone: page moves down more so remaining 5 cards are fully centered
          setPlacedCount(3);
        } else {
          // Remaining 5 cards enter one by one into the bottom row fully
          const bottomCardIndex = Math.min(5, Math.floor((scrolled - 1450) / 320) + 1);
          setPlacedCount(3 + bottomCardIndex);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <div className="treatments-pinned-track" ref={trackRef}>
      <div className="treatments-sticky-frame">
        <section className="treatments-section">
          <div className={`treatments-stage ${isShifted ? 'stage-shifted' : ''}`}>
            <div className="container treatments-container">
              <div className="treatments-header">
                <div className="treatments-eyebrow">
                  <span className="eyebrow-line"></span>
                  <span>OUR FERTILITY SERVICES</span>
                  {isDesktop && (
                    <span className="services-counter-badge">
                      {placedCount}/8 Services
                    </span>
                  )}
                  <span className="eyebrow-line"></span>
                </div>
                <h2 className="treatments-heading">
                  Advanced <span className="highlight-purple-gradient">Fertility Care</span>
                </h2>
                <p className="treatments-description">
                  Cutting-edge technology, expert care and personalised treatment plans<br className="hidden md:block" /> to help you build the family you dream of.
                </p>
              </div>
            
            {/* Top Grid: 3 Cards (indices 0, 1, 2) */}
            <div className="treatments-grid-top">
              {topCards.map((card, index) => {
                const cardIndex = index; // 0, 1, 2
                const isPlaced = !isDesktop || placedCount >= (cardIndex + 1);
                const isJustArrived = isDesktop && placedCount === (cardIndex + 1);

                return (
                  <div 
                    className={`treatment-card top-card ${isPlaced ? 'card-placed' : 'card-waiting'} ${isJustArrived ? 'just-arrived' : ''}`}
                    key={index}
                    onClick={() => card.page && onNavigate && onNavigate(card.page)}
                    style={{ cursor: card.page ? 'pointer' : 'default' }}
                  >
                    <div className="treatment-icon-wrapper-large">
                      {card.icon}
                    </div>
                    <div className="treatment-content">
                      <div className="card-eyebrow">{card.eyebrow}</div>
                      <h3 className="treatment-title">{card.title}</h3>
                      <p className="treatment-desc">{card.description}</p>
                      <button 
                        className="btn-learn-more"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (card.page && onNavigate) onNavigate(card.page);
                        }}
                      >
                        Learn more <ArrowRight size={14} className="btn-arrow" />
                      </button>
                    </div>
                    <div className="card-leaf-decoration"></div>
                  </div>
                );
              })}
            </div>

            {/* Sub-heading for Bottom Grid that smoothly fades in when shifted */}
            <div className={`bottom-grid-subhead ${isShifted ? 'subhead-visible' : ''}`}>
              <span className="subhead-pill">SPECIALIZED PROCEDURES & ART TREATMENTS</span>
            </div>

            {/* Bottom Grid: 5 Cards (indices 3, 4, 5, 6, 7) */}
            <div className="treatments-grid-bottom">
              {bottomCards.map((card, index) => {
                const cardIndex = 3 + index; // 3, 4, 5, 6, 7
                const isPlaced = !isDesktop || placedCount >= (cardIndex + 1);
                const isJustArrived = isDesktop && placedCount === (cardIndex + 1);

                return (
                  <div 
                    className={`treatment-card bottom-card ${isPlaced ? 'card-placed' : 'card-waiting'} ${isJustArrived ? 'just-arrived' : ''}`}
                    key={index}
                    onClick={() => card.page && onNavigate && onNavigate(card.page)}
                    style={{ cursor: card.page ? 'pointer' : 'default' }}
                  >
                    <div className="treatment-icon-wrapper-small">
                      {card.icon}
                    </div>
                    <div className="treatment-content">
                      <div className="card-eyebrow">{card.eyebrow}</div>
                      <h3 className="treatment-title">{card.title}</h3>
                      <p className="treatment-desc">{card.description}</p>
                      <button 
                        className="btn-learn-more"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (card.page && onNavigate) onNavigate(card.page);
                        }}
                      >
                        Learn more <ArrowRight size={14} className="btn-arrow" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Treatments;
