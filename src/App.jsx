import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Treatments from './components/Treatments';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQPage from './components/FAQPage';
import AboutUsPage from './components/AboutUsPage';

function App() {
  const [framesLoaded, setFramesLoaded] = useState(false);
  const [currentView, setCurrentView] = useState('home');

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

  return (
    <div className="app">
      <Loader framesLoaded={framesLoaded} />
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      {currentView === 'about' ? (
        <AboutUsPage onNavigate={setCurrentView} />
      ) : currentView === 'faq' ? (
        <FAQPage onNavigate={setCurrentView} />
      ) : (
        <main>
          <Hero onFramesLoaded={() => setFramesLoaded(true)} />
          <AboutUs />
          <Treatments />
          <Features />
          <Testimonials />
        </main>
      )}
    </div>
  );
}

export default App;
