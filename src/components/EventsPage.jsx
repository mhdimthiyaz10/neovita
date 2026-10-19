import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ImageGallery } from '@/components/ui/image-gallery';
import './EventsPage.css';

const EventsPage = ({ onNavigateBack }) => {
  return (
    <div className="events-page">
      {/* Top Back Navigation */}
      {onNavigateBack && (
        <div className="events-top-bar">
          <div className="container">
            <button className="events-back-btn" onClick={onNavigateBack}>
              <ArrowLeft size={16} /> Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Pure Image Placeholder Gallery */}
      <main className="events-main-gallery">
        <ImageGallery />
      </main>
    </div>
  );
};

export default EventsPage;
