import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time (e.g., waiting for video frames)
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = '';
      }, 500); // 500ms fade out duration
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`loader-overlay ${fading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <img src="/logo.png" alt="Neovita Logo" className="loader-logo" />
        <div className="loader-tagline">FERTILITY FOR TOMORROW</div>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
