import React, { useState, useEffect, useRef } from 'react';
import './TeamShowcaseSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'DR. SARAH ANUNS',
    role: 'Senior Fertility Specialist & Gynecologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'DR. MICHAEL CHEN',
    role: 'Chief Embryologist & IVF Director',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'DR. ELENA ROSTOVA',
    role: 'Reproductive Endocrinologist',
    image: 'https://images.unsplash.com/photo-1594824813572-c2c31e98d9ed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'DR. MARCUS VANCE',
    role: 'Andrology & Male Fertility Lead',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'DR. ANANYA SHARMA',
    role: 'Clinical Genetics & PGS Specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'DR. JAMES MILLER',
    role: 'Senior Consultant - Reproductive Medicine',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'DR. CLARA BENNETT',
    role: 'Fertility Preservation & Cryo Specialist',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'DR. DAVID KIM',
    role: 'Laparoscopic Surgeon & IVF Specialist',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
  }
];

// Repeat 4x to ensure smooth infinite seamless marquee loop
const extendedMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

const TeamShowcaseSection = () => {
  const [scrollX, setScrollX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeMember, setActiveMember] = useState(teamMembers[0]);
  const [activeX, setActiveX] = useState(0);

  const cardRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Width of each portrait column + spacing
  const ITEM_WIDTH = 220; // 180px width + 40px gap
  const TOTAL_LOOP_WIDTH = teamMembers.length * ITEM_WIDTH;

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPaused) {
        setScrollX((prev) => {
          const next = prev + (delta * 0.045); // Smooth constant velocity
          return next >= TOTAL_LOOP_WIDTH ? next - TOTAL_LOOP_WIDTH : next;
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, TOTAL_LOOP_WIDTH]);

  // Calculate center member & red cursor position relative to card container width
  useEffect(() => {
    if (!cardRef.current) return;
    const cardWidth = cardRef.current.clientWidth;
    const cardCenterX = cardWidth / 2;

    let closestIdx = 0;
    let minDiff = Infinity;
    let calculatedActiveX = cardCenterX;

    extendedMembers.forEach((member, index) => {
      // Position of this item center relative to card left
      const itemLeft = (index * ITEM_WIDTH) - scrollX + 40; // padding offset
      const itemCenterX = itemLeft + 90; // 90px = half of 180px portrait width
      const diff = Math.abs(itemCenterX - cardCenterX);

      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = index % teamMembers.length;
        calculatedActiveX = itemCenterX;
      }
    });

    setActiveMember(teamMembers[closestIdx]);
    setActiveX(calculatedActiveX);
  }, [scrollX]);

  return (
    <section className="team-showcase-section">
      <div className="team-showcase-container">
        
        {/* Section Header */}
        <div className="team-showcase-header">
          <div className="team-eyebrow">
            <span className="eyebrow-line"></span>
            OUR EXPERT MEDICAL TEAM
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="team-main-title">
            Compassionate Care by Certified Specialists
          </h2>
        </div>

        {/* Stationary Centered White Card */}
        <div 
          className="team-card-wrapper" 
          ref={cardRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Active Floating Member Name/Title Label Above Head */}
          {activeMember && (
            <div 
              className="active-member-label-pill" 
              style={{ transform: `translateX(${activeX}px) translateX(-50%)` }}
            >
              <span className="label-name">{activeMember.name}</span>
              <span className="label-role">{activeMember.role}</span>
            </div>
          )}

          {/* Red Highlight Circle Cursor surrounding active head */}
          <div 
            className="red-cursor-ring"
            style={{ transform: `translateX(${activeX}px) translateX(-50%)` }}
          />

          {/* Sliding Track of Portraits */}
          <div 
            className="team-portraits-track"
            style={{ transform: `translateX(${-scrollX}px)` }}
          >
            {extendedMembers.map((member, index) => {
              const isCurrentActive = activeMember && activeMember.id === member.id;

              return (
                <div 
                  className={`team-portrait-card ${isCurrentActive ? 'is-active' : ''}`} 
                  key={`${member.id}-${index}`}
                >
                  <div className="portrait-img-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="portrait-img" 
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamShowcaseSection;
