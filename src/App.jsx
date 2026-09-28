import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadDossierAudio from './components/LeadDossierAudio';
import QualityEngine from './components/QualityEngine';
import ConsistencyFormula from './components/ConsistencyFormula';
import HowItWorks from './components/HowItWorks';
import PricingTiers from './components/PricingTiers';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TerritoryCheckerModal from './components/TerritoryCheckerModal';
import Blog from './components/Blog';

export default function App() {
  const [isTerritoryModalOpen, setIsTerritoryModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/blog' || path.startsWith('/blog/') || hash === '#blog') {
        return 'blog';
      }
    }
    return 'home';
  });

  // Listen to browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/blog' || path.startsWith('/blog/') || hash === '#blog') {
        setCurrentView('blog');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateToBlog = () => {
    setCurrentView('blog');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    setCurrentView('home');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenTerritoryModal = (data = {}) => {
    setModalInitialData(data);
    setIsTerritoryModalOpen(true);
  };

  const handleCloseTerritoryModal = () => {
    setIsTerritoryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-fresh-black text-slate-100 flex flex-col font-sans selection:bg-fresh-orange selection:text-white">
      
      {currentView === 'blog' ? (
        /* Blog View */
        <>
          <Blog 
            onNavigateHome={navigateToHome} 
            onOpenTerritoryModal={handleOpenTerritoryModal} 
          />
          <Footer 
            onOpenTerritoryModal={handleOpenTerritoryModal} 
            onNavigateToBlog={navigateToBlog}
            onNavigateHome={navigateToHome}
          />
        </>
      ) : (
        /* Home Landing Page View */
        <>
          {/* Sticky Navigation */}
          <Navbar 
            onOpenTerritoryModal={handleOpenTerritoryModal} 
            onNavigateToBlog={navigateToBlog}
            onNavigateHome={navigateToHome}
          />

          {/* Main Content Sections */}
          <main className="flex-grow">
            {/* Hero Section with Live Lead Dossier preview */}
            <Hero onOpenTerritoryModal={handleOpenTerritoryModal} />

            {/* Interactive Audio Player & Setter Call Dossiers */}
            <LeadDossierAudio onOpenTerritoryModal={handleOpenTerritoryModal} />

            {/* The 5-Point Quality Engine & Replacement Policy */}
            <QualityEngine onOpenTerritoryModal={handleOpenTerritoryModal} />

            {/* The Consistency Formula - 30+ Roofers Scaled */}
            <ConsistencyFormula onOpenTerritoryModal={handleOpenTerritoryModal} />

            {/* How It Works - Storm Radar to Closed Claim */}
            <HowItWorks onOpenTerritoryModal={handleOpenTerritoryModal} />

            {/* Pricing Tiers & Appointment Packages */}
            <PricingTiers onOpenTerritoryModal={handleOpenTerritoryModal} />

            {/* FAQ Section */}
            <FaqSection onOpenTerritoryModal={handleOpenTerritoryModal} />
          </main>

          {/* Footer */}
          <Footer 
            onOpenTerritoryModal={handleOpenTerritoryModal} 
            onNavigateToBlog={navigateToBlog}
            onNavigateHome={navigateToHome}
          />
        </>
      )}

      {/* Interactive Territory Intake & Email Workflow Modal */}
      <TerritoryCheckerModal
        isOpen={isTerritoryModalOpen}
        onClose={handleCloseTerritoryModal}
        initialData={modalInitialData}
      />
    </div>
  );
}
