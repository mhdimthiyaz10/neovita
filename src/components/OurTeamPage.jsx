import React from 'react';
import { ArrowLeft, Sparkles, Microchip, Beaker, HeartPulse } from 'lucide-react';
import { InteractivePhotoStack } from '@/components/ui/photo-stack';
import './OurTeamPage.css';

const teamPhotoItems = [
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

const OurTeamPage = ({ onNavigateBack }) => {
  return (
    <div className="our-team-page">
      {/* Back Navigation Bar */}
      {onNavigateBack && (
        <div className="our-team-top-bar">
          <div className="container">
            <button className="our-team-back-btn" onClick={onNavigateBack}>
              <ArrowLeft size={16} /> Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="our-team-main-content">
        
        {/* Page Hero Header */}
        <header className="team-hero-header">
          <div className="team-hero-badge">
            <Sparkles size={13} className="text-[#853BC0]" />
            <span>World-Class Fertility Specialists</span>
          </div>
          <h1 className="team-hero-title">
            World-Class Medical Expertise, Devoted to <span className="accent-violet">Your Miracle</span>
          </h1>
          <p className="team-hero-subtitle">
            At Neovita, pioneering reproductive science is guided by profound compassion. Meet the distinguished physicians, embryologists, specialized nurses, and patient coordinators dedicated to turning your hope into new life.
          </p>
        </header>

        {/* Section 1: Clinical Leadership & Directors */}
        <section className="team-photo-stack-section">
          <div className="team-section-badge">
            <Sparkles size={13} className="text-[#853BC0]" />
            <span>CLINICAL LEADERSHIP & DIRECTORS</span>
          </div>
          
          <InteractivePhotoStack
            items={teamPhotoItems}
            className="my-2"
          />
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
