import React from 'react';
import { ArrowLeft, Sparkles, Microchip, Beaker } from 'lucide-react';
import { InteractivePhotoStack } from '@/components/ui/photo-stack';
import './OurTeamPage.css';

const teamPhotoItems = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Sarah Anuns",
  },
  {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Michael Chen",
  },
  {
    src: "https://images.unsplash.com/photo-1594824813572-c2c31e98d9ed?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Elena Rostova",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Marcus Vance",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Ananya Sharma",
  },
];

const embryologyPhotoItems = [
  {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    name: "Dr. James Miller",
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Clara Bennett",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    name: "Dr. David Kim",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Priya Nair",
  },
  {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Robert Vance",
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
        
        {/* Section 1: Senior Medical Specialists Photo Stack */}
        <section className="team-photo-stack-section">
          <div className="container flex flex-col items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold uppercase tracking-widest mb-4 border border-purple-100">
              <Sparkles size={14} /> Meet Our Experts
            </div>
            
            <InteractivePhotoStack
              items={teamPhotoItems}
              title={
                <span className="text-3xl md:text-4xl font-serif font-medium text-slate-900">
                  Our Dedicated <span className="italic text-purple-700">Specialists</span>
                </span>
              }
              className="my-6"
            />
            
            <p className="text-slate-500 text-sm md:text-base max-w-lg text-center mt-2">
              Hover over the card stack to expand portraits, click any card to bring a specialist to the front.
            </p>
          </div>
        </section>

        {/* Section 2: Clinical & Lab Embryologists Photo Stack */}
        <section className="team-photo-stack-section border-t border-slate-200/60 pt-16">
          <div className="container flex flex-col items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-4 border border-emerald-100">
              <Beaker size={14} /> EMBRYOLOGY & LAB TEAM
            </div>
            
            <InteractivePhotoStack
              items={embryologyPhotoItems}
              title={
                <span className="text-3xl md:text-4xl font-serif font-medium text-slate-900">
                  Clinical & Lab <span className="italic text-emerald-700">Embryologists</span>
                </span>
              }
              className="my-6"
            />
            
            <p className="text-slate-500 text-sm md:text-base max-w-lg text-center mt-2">
              Our certified embryology and IVF lab directors leading state-of-the-art reproductive science.
            </p>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default OurTeamPage;
