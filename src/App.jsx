import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Treatments from './components/Treatments';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FaqPage from './components/FaqPage';
import AboutUsPage from './components/AboutUsPage';

function App() {
  const [framesLoaded, setFramesLoaded] = useState(false);
  const [activePage, setActivePage] = useState('home'); // 'home' | 'about' | 'faq'

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (page, targetHref) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'home' && targetHref && targetHref.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(targetHref);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleBookConsultation = () => {
    const contactElement = document.querySelector('#testimonials') || document.querySelector('footer');
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Loader framesLoaded={framesLoaded} />
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        onBookConsultation={handleBookConsultation} 
      />
      <main>
        {activePage === 'home' && (
          <>
            <Hero onFramesLoaded={() => setFramesLoaded(true)} />
            <div id="about"><AboutUs /></div>
            <div id="treatments"><Treatments /></div>
            <div id="features"><Features /></div>
            <div id="testimonials"><Testimonials /></div>
          </>
        )}

        {activePage === 'about' && (
          <AboutUsPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'faq' && (
          <FaqPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
