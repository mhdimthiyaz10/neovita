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
import HappyPatients from './components/HappyPatients';
import ContactSection from './components/ContactSection';
import InternationalPatientPage from './components/InternationalPatientPage';
import PreConceptionalPage from './components/PreConceptionalPage';
import EvaluationInfertilityPage from './components/EvaluationInfertilityPage';
import FollicularMonitoringPage from './components/FollicularMonitoringPage';
import SemenAnalysisPage from './components/SemenAnalysisPage';
import IuiPage from './components/IuiPage';
import IvfIcsiPage from './components/IvfIcsiPage';
import LaserAssistedHatchingPage from './components/LaserAssistedHatchingPage';
import EmbryoFreezingPage from './components/EmbryoFreezingPage';
import EggSpermEmbryoFreezingPage from './components/EggSpermEmbryoFreezingPage';
import FertilityPreservationPage from './components/FertilityPreservationPage';
import StackedServicesPage from './components/StackedServicesPage';
import PgsPgdPage from './components/PgsPgdPage';
import OurTeamPage from './components/OurTeamPage';

function App() {
  const [framesLoaded, setFramesLoaded] = useState(false);
  const [activePage, setActivePage] = useState('home'); // 'home' | 'about' | 'faq' | 'happy-patients' | 'contact' | 'international' | 'pre-conceptional' | 'evaluation-infertility' | 'follicular-monitoring' | 'semen-analysis' | 'iui' | 'ivf-icsi' | 'laser-assisted-hatching' | 'embryo-freezing' | 'egg-sperm-embryo-freezing' | 'pgs-pgd'


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

    if (targetHref && targetHref.startsWith('#') && targetHref !== '#') {
      setTimeout(() => {
        const element = document.querySelector(targetHref);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  };

  const handleBookConsultation = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <div id="treatments"><Treatments onNavigate={handleNavigate} /></div>
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

        {activePage === 'our-team' && (
          <OurTeamPage 
            onNavigateBack={() => handleNavigate('home')} 
          />
        )}

        {activePage === 'happy-patients' && (
          <HappyPatients 
            isStandalonePage={true} 
            onNavigateBack={() => handleNavigate('home')} 
          />
        )}

        {activePage === 'faq' && (
          <FaqPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'contact' && (
          <ContactSection 
            isStandalonePage={true} 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'international' && (
          <InternationalPatientPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'pre-conceptional' && (
          <PreConceptionalPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'evaluation-infertility' && (
          <EvaluationInfertilityPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'follicular-monitoring' && (
          <FollicularMonitoringPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'semen-analysis' && (
          <SemenAnalysisPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'iui' && (
          <IuiPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'ivf-icsi' && (
          <IvfIcsiPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'laser-assisted-hatching' && (
          <LaserAssistedHatchingPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {activePage === 'embryo-freezing' && (
          <EmbryoFreezingPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {(activePage === 'egg-sperm-embryo-freezing' || activePage === 'fertility-preservation') && (
          <FertilityPreservationPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'pgs-pgd' && (
          <PgsPgdPage 
            onNavigateBack={() => handleNavigate('home')} 
            onBookConsultation={handleBookConsultation} 
          />
        )}

        {(activePage === 'stacked-services' || activePage === 'why-choose-us') && (
          <StackedServicesPage 
            onNavigateBack={() => handleNavigate('home')} 
            onNavigate={handleNavigate}
            onBookConsultation={handleBookConsultation} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
