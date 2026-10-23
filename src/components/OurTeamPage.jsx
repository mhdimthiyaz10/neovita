import React, { useState } from 'react';
import './OurTeamPage.css';

const allTeamMembers = [
  {
    id: 1,
    name: "Dr Anju Madhavan",
    role: "Clinical Director & Senior Gynaecologist",
    experience: "MBBS, MS, DGO, MRCOG- UK, Fellowship In Reproductive Medicine",
    src: "/team/dr_anju_madhavan.png",
    isPriority: true,
  },
  {
    id: 2,
    name: "Dr Antony Tobin Thomas",
    role: "Scientific Director & Chief Embryologist",
    experience: "MSc Clinical Embryology (KMC, Manipal)",
    src: "/team/dr_antony_tobin.png",
    isPriority: true,
  },
  {
    id: 3,
    name: "Ms Greeshma V John",
    role: "Embryologist & ART Specialist",
    experience: "Clinical Embryology Specialist",
    src: "/team/ms_greeshma_v_john.png",
  },
  {
    id: 4,
    name: "Mrs. Shalu Thomas",
    role: "Senior IVF Nurse",
    experience: "Clinical Operations & Patient Care",
    src: "/team/mrs_shalu_thomas.png",
  },
  {
    id: 5,
    name: "Mrs. Bindhu Joseph",
    role: "Senior IVF Nurse",
    experience: "Clinical Operations & Patient Care",
    src: "/team/mrs_bindhu_joseph.png",
  },
  {
    id: 6,
    name: "Mr. Jeeva Viswanathan",
    role: "Clinic Manager",
    experience: "Operations & Promotions",
    src: "/team/mr_jeeva_viswanathan.png",
  },
  {
    id: 7,
    name: "Ms. Hajara Beevi B.",
    role: "Andrology Technician",
    experience: "Diagnostic & Andrology Lab",
    src: "/team/ms_hajara_beevi.png",
  },
  {
    id: 8,
    name: "Mrs. Aleesha S.",
    role: "Registered Pharmacist",
    experience: "Clinical Pharmacy & Medication Care",
    src: "/team/mrs_aleesha_s.png",
  },
  {
    id: 9,
    name: "Ms. Jishna Jayakumar",
    role: "Receptionist",
    experience: "Front Desk & Patient Relations",
    src: "/team/ms_jishna_jayakumar.png",
  },
  {
    id: 10,
    name: "Mrs. Shalini V.",
    role: "Hospital Support",
    experience: "Patient Care & Sanitation",
    src: "/team/mrs_shalini_v.png",
  },
];

// Duplicate list 3 times to guarantee a truly seamless continuous right-to-left loop
const extendedMembersList = [...allTeamMembers, ...allTeamMembers, ...allTeamMembers];

const OurTeamPage = ({ onNavigateBack: _onNavigateBack }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="our-team-page">
      {/* Spacious Section with Page Heading at the Top & Flowing Cards Below */}
      <section className="team-flow-section">
        {/* Luminous Ambient Glow */}
        <div className="hero-ambient-glow" aria-hidden="true" />

        {/* Page Heading Set at the Top */}
        <header className="team-page-header">
          <h1 className="team-hero-title team-scroll-hero-title">
            Meet Our <span className="hero-gradient-text">Specialists</span>
          </h1>

          <p className="team-flow-subtitle">
            Our dedicated team of doctors, embryologists & healthcare specialists
          </p>
        </header>

        {/* Carousel Stream: Flowing from Right to Left through the Center */}
        <div 
          className="team-flow-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 2400);
          }}
        >
          <div className={`team-flow-track ${isPaused ? 'paused' : ''}`}>
            {extendedMembersList.map((member, index) => (
              <div 
                key={`${member.id}-${index}`} 
                className={`specialist-scroll-card specialist-flow-card ${
                  member.isPriority ? 'specialist-flow-card--priority' : ''
                }`}
                tabIndex={0}
              >
                {member.isPriority && <div className="specialist-card-top-bar" />}
                <div className="specialist-photo-frame">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="specialist-photo"
                    loading="lazy"
                  />
                </div>
                <div className="specialist-info">
                  <h3 className="specialist-name">{member.name}</h3>
                  <p className="specialist-role">{member.role}</p>
                  {member.experience && (
                    <p className="specialist-experience">{member.experience}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
