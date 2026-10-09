import React from 'react';
import { ArrowLeft } from 'lucide-react';
import TeamShowcaseSection from './TeamShowcaseSection';
import './OurTeamPage.css';

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

      {/* Main Team Showcase Animation Section */}
      <main className="our-team-main-content">
        <TeamShowcaseSection />
      </main>
    </div>
  );
};

export default OurTeamPage;
