import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';
import './FollicularMonitoringPage.css';

const FollicularMonitoringPage = ({ onNavigateBack, onBookConsultation }) => {
  return (
    <div className="follicular-page">

      {/* Back Navigation Bar */}
      <div className="container follicular-back-container">
        <button className="follicular-back-btn" onClick={onNavigateBack}>
          <ArrowLeft size={15} /> Return to Home
        </button>
      </div>

      {/* SECTION 1 — MAIN HERO CONTENT (Exact Reference Image Graphic & Paragraphs) */}
      <section className="follicular-hero-section">
        <div className="container">
          <div className="follicular-hero-grid">

            {/* LEFT: Exact Ultrasound Doctor Organic Graphic */}
            <div className="follicular-hero-left">
              <div className="follicular-image-wrapper">
                <img 
                  src="/follicular_monitoring_hero.png" 
                  alt="Fertility doctor performing transvaginal follicular monitoring ultrasound examination" 
                  className="follicular-reference-img"
                />
              </div>
            </div>

            {/* RIGHT: Editorial Content with Cormorant Garamond Font Standard */}
            <div className="follicular-hero-right">
              
              {/* Eyebrow */}
              <div className="follicular-philosophy-eyebrow">
                <span>OUR PHILOSOPHY</span>
                <span className="eyebrow-line-right"></span>
              </div>

              {/* Headline */}
              <h1 className="follicular-headline">
                Follicular Monitoring
              </h1>

              {/* Exact Paragraph Structure */}
              <div className="follicular-body-content">
                <p>
                  Follicular monitoring is a series of ultra sound scans done by transvaginal route, starting from the second or third day of the menstrual cycle.
                </p>

                <p>
                  This is an integral part of infertility evaluation and treatment.
                </p>

                <p>
                  Baseline scan done on the second or third day of the periods gives an idea about the number of follicles which indicates the fertility potential of the lady.
                </p>

                <p>
                  This also guides the doctor to plan the treatment with regard to the type and dose of medications to be used.
                </p>

                <p>
                  Following up the follicle in the next few days help to predict the day of ovulation as well as the status of the uterine lining in preparedness for the pregnancy.
                </p>

                <p>
                  In treatment cycles it helps to adjust the dose of the medicines being used and also to decide on the timings of procedures like Intrauterine insemination or egg pick up in IVF.
                </p>
              </div>

              <div className="follicular-hero-cta-wrap">
                <button className="btn-editorial-purple" onClick={onBookConsultation}>
                  <span>Book Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Organic Bottom Wave Curves */}
      <div className="follicular-bottom-wave-left"></div>
      <div className="follicular-bottom-wave-right"></div>

    </div>
  );
};

export default FollicularMonitoringPage;
