import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Beaker, HeartPulse } from 'lucide-react';
import { InteractivePhotoStack } from '@/components/ui/photo-stack';
import './OurTeamPage.css';

const priorityLeadershipItems = [
  {
    src: "/team/dr_anju_madhavan.png",
    name: "Dr Anju Madhavan",
    role: "Clinical Director, Senior Gynaecologist & Infertility Specialist, Laproscopic Surgeon",
    experience: "MBBS, MS, DGO, MRCOG- UK, Fellowship In Reproductive Medicine",
  },
  {
    src: "/team/dr_antony_tobin.png",
    name: "Dr Antony Tobin Thomas",
    role: "Scientific Director and Chief Embryologist",
    experience: "MSc Clinical Embryology (KMC, Manipal)",
  },
];

const remainingLeadershipItems = [
  {
    src: "/team/ms_greeshma_v_john.png",
    name: "Ms Greeshma V John",
    role: "Embryologist",
    experience: "Clinical Embryology",
  },
];

const embryologyPhotoItems = [
  {
    src: "/team/mrs_shalu_thomas.png",
    name: "Mrs. Shalu Thomas",
    role: "IVF Nurse",
  },
  {
    src: "/team/mrs_bindhu_joseph.png",
    name: "Mrs. Bindhu Joseph",
    role: "IVF Nurse",
  },
  {
    src: "/team/mr_jeeva_viswanathan.png",
    name: "Mr. Jeeva Viswanathan",
    role: "Clinic Manager – Operations & Promotions",
  },
  {
    src: "/team/ms_hajara_beevi.png",
    name: "Ms. Hajara Beevi B.",
    role: "Andrology Technician",
  },
];

const patientCarePhotoItems = [
  {
    src: "/team/mrs_aleesha_s.png",
    name: "Mrs. Aleesha S.",
    role: "Pharmacist",
  },
  {
    src: "/team/ms_jishna_jayakumar.png",
    name: "Ms. Jishna Jayakumar",
    role: "Receptionist",
  },
  {
    src: "/team/mrs_shalini_v.png",
    name: "Mrs. Shalini V.",
    role: "Janitor",
  },
];

const OurTeamPage = ({ onNavigateBack: _onNavigateBack }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.08 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="our-team-page">
      {/* Main Content */}
      <main className="our-team-main-content">
        
        {/* Page Hero Header */}
        <motion.header
          className="team-hero-header"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Luminous Ambient Glow */}
          <div className="hero-ambient-glow" aria-hidden="true" />

          {/* Eyebrow Badge */}
          <motion.div
            className="team-hero-badge"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles size={13} className="text-[#853BC0]" />
            <span>CLINICAL EXCELLENCE & CARE</span>
          </motion.div>

          {/* Concise High-Impact Heading */}
          <motion.h1
            className="team-hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet Our <span className="hero-gradient-text">Specialists</span>
          </motion.h1>
        </motion.header>

        {/* Section 1: Clinical Leadership & Directors */}
        <section ref={sectionRef} className="team-leadership-section">
          <motion.div
            className="team-section-badge"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles size={13} className="text-[#853BC0]" />
            <span>CLINICAL LEADERSHIP & DIRECTORS</span>
          </motion.div>
          
          {/* Upper Tier: 2 Priority Leadership Cards Sweeping In From Two Different Sides */}
          <div className="leadership-priority-grid">
            {priorityLeadershipItems.map((item, index) => {
              const isLeftCard = index === 0; // Dr Anju (Left side) vs Dr Antony (Right side)
              const offsetDistance = isMobile ? 130 : 230;

              return (
                <motion.div
                  key={item.name}
                  className="leadership-card leadership-card--priority"
                  initial={{
                    opacity: 0,
                    x: isLeftCard ? -offsetDistance : offsetDistance,
                    y: 20,
                    scale: 0.91,
                    rotate: isLeftCard ? -3.5 : 3.5,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          scale: 1,
                          rotate: 0,
                        }
                      : {
                          opacity: 0,
                          x: isLeftCard ? -offsetDistance : offsetDistance,
                          y: 20,
                          scale: 0.91,
                          rotate: isLeftCard ? -3.5 : 3.5,
                        }
                  }
                  transition={{
                    duration: 1.1,
                    delay: isLeftCard ? 0.32 : 0.48,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25, ease: 'easeOut' },
                  }}
                >
                  <div className="leadership-photo-frame">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="leadership-photo"
                    />
                  </div>
                  <div className="leadership-info">
                    <h3 className="leadership-name">{item.name}</h3>
                    {item.role && (
                      <p className="leadership-role">{item.role}</p>
                    )}
                    {item.experience && (
                      <p className="leadership-experience">{item.experience}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Lower Tier: Remaining 1 Specialist Card (Entering from Bottom) */}
          <div className="leadership-subordinate-grid">
            {remainingLeadershipItems.map((item) => (
              <motion.div
                key={item.name}
                className="leadership-card leadership-card--subordinate"
                initial={{
                  opacity: 0,
                  y: 95,
                  scale: 0.92,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        y: 95,
                        scale: 0.92,
                      }
                }
                transition={{
                  duration: 1.05,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
              >
                <div className="leadership-photo-frame">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="leadership-photo"
                  />
                </div>
                <div className="leadership-info">
                  <h3 className="leadership-name">{item.name}</h3>
                  {item.role && (
                    <p className="leadership-role">{item.role}</p>
                  )}
                  {item.experience && (
                    <p className="leadership-experience">{item.experience}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Minimal Divider */}
        <div className="team-section-divider" />

        {/* Section 2: Clinical Operations & IVF Nursing */}
        <section className="team-photo-stack-section">
          <div className="team-section-badge">
            <Beaker size={13} className="text-[#853BC0]" />
            <span>CLINICAL OPERATIONS & IVF NURSING</span>
          </div>
          
          <InteractivePhotoStack
            items={embryologyPhotoItems}
            className="my-2"
          />
        </section>

        {/* Minimal Divider */}
        <div className="team-section-divider" />

        {/* Section 3: Patient Care & Hospital Support */}
        <section className="team-photo-stack-section">
          <div className="team-section-badge">
            <HeartPulse size={13} className="text-[#853BC0]" />
            <span>PATIENT CARE & HOSPITAL SUPPORT</span>
          </div>
          
          <InteractivePhotoStack
            items={patientCarePhotoItems}
            className="my-2"
          />
        </section>
        
      </main>
    </div>
  );
};

export default OurTeamPage;
