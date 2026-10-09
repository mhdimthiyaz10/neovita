import React from 'react';
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
  return (
    <section className="treatments-section">
      <div className="container">
        <div className="treatments-header">
          <div className="treatments-eyebrow">
            <span className="eyebrow-line"></span>
            OUR FERTILITY SERVICES
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="treatments-heading">
            Advanced <span className="highlight-purple-gradient">Fertility Care</span>
          </h2>
          <p className="treatments-description">
            Cutting-edge technology, expert care and personalised treatment plans<br className="hidden md:block" /> to help you build the family you dream of.
          </p>
        </div>
        
        <div className="treatments-grid-top">
          {topCards.map((card, index) => (
            <div 
              className="treatment-card top-card" 
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
          ))}
        </div>

        <div className="treatments-grid-bottom">
          {bottomCards.map((card, index) => (
            <div 
              className="treatment-card bottom-card" 
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
                <div className="spacer"></div>
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default Treatments;
