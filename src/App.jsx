import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { AuthModal } from './components/auth/AuthModal';
import { PasswordResetModal } from './components/auth/PasswordResetModal';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import SmsOptIn from './components/SmsOptIn';
import PaymentConfirmation from './components/PaymentConfirmation';

export default function App() {
  const [isTerritoryModalOpen, setIsTerritoryModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');

  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/blog' || path.startsWith('/blog/') || hash === '#blog') {
        return 'blog';
      }
      if (path === '/privacy' || path.startsWith('/privacy/') || hash === '#privacy') {
        return 'privacy';
      }
      if (path === '/terms' || path.startsWith('/terms/') || hash === '#terms') {
        return 'terms';
      }
      if (path === '/sms-opt-in' || path.startsWith('/sms-opt-in/') || path === '/opt-in' || hash === '#sms-opt-in') {
        return 'sms-opt-in';
      }
      if (path === '/checkout/success' || path.startsWith('/checkout/success') || path === '/success' || path === '/order-confirmation' || hash === '#success' || hash === '#checkout-success') {
        return 'payment-confirmation';
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
      } else if (path === '/privacy' || path.startsWith('/privacy/') || hash === '#privacy') {
        setCurrentView('privacy');
      } else if (path === '/terms' || path.startsWith('/terms/') || hash === '#terms') {
        setCurrentView('terms');
      } else if (path === '/sms-opt-in' || path.startsWith('/sms-opt-in/') || path === '/opt-in' || hash === '#sms-opt-in') {
        setCurrentView('sms-opt-in');
      } else if (path === '/checkout/success' || path.startsWith('/checkout/success') || path === '/success' || path === '/order-confirmation' || hash === '#success' || hash === '#checkout-success') {
        setCurrentView('payment-confirmation');
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

  const navigateToSmsOptIn = () => {
    setCurrentView('sms-opt-in');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/sms-opt-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToPrivacy = () => {
    setCurrentView('privacy');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToTerms = () => {
    setCurrentView('terms');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/terms');
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

  const handleOpenAuthModal = (tab = 'login') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-fresh-black text-slate-100 flex flex-col font-sans selection:bg-fresh-orange selection:text-white">
        
        {currentView === 'payment-confirmation' ? (
          /* Post-Checkout Payment Confirmation & Lead Setup View */
          <PaymentConfirmation onNavigateHome={navigateToHome} />
        ) : currentView === 'blog' ? (
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
              onNavigateToPrivacy={navigateToPrivacy}
              onNavigateToTerms={navigateToTerms}
            />
          </>
        ) : currentView === 'privacy' ? (
          /* Privacy Policy View (Zoho Voice & 10DLC Compliance) */
          <>
            <PrivacyPolicy 
              onNavigateHome={navigateToHome}
              onOpenTerritoryModal={handleOpenTerritoryModal}
            />
            <Footer 
              onOpenTerritoryModal={handleOpenTerritoryModal} 
              onNavigateToBlog={navigateToBlog}
              onNavigateHome={navigateToHome}
              onNavigateToPrivacy={navigateToPrivacy}
              onNavigateToTerms={navigateToTerms}
            />
          </>
        ) : currentView === 'sms-opt-in' ? (
          /* Dedicated SMS Opt-In & Verification View (10DLC & TCPA Flow) */
          <>
            <SmsOptIn 
              onNavigateHome={navigateToHome}
              onNavigateToPrivacy={navigateToPrivacy}
              onNavigateToTerms={navigateToTerms}
            />
            <Footer 
              onOpenTerritoryModal={handleOpenTerritoryModal} 
              onNavigateToBlog={navigateToBlog}
              onNavigateHome={navigateToHome}
              onNavigateToPrivacy={navigateToPrivacy}
              onNavigateToTerms={navigateToTerms}
              onNavigateToSmsOptIn={navigateToSmsOptIn}
            />
          </>
        ) : currentView === 'terms' ? (
          /* Terms of Service & SMS View (TCPA & CTIA Compliance) */
          <>
            <TermsOfService 
              onNavigateHome={navigateToHome}
              onOpenTerritoryModal={handleOpenTerritoryModal}
              onNavigateToPrivacy={navigateToPrivacy}
            />
            <Footer 
              onOpenTerritoryModal={handleOpenTerritoryModal} 
              onNavigateToBlog={navigateToBlog}
              onNavigateHome={navigateToHome}
              onNavigateToPrivacy={navigateToPrivacy}
              onNavigateToTerms={navigateToTerms}
              onNavigateToSmsOptIn={navigateToSmsOptIn}
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
              onNavigateToSmsOptIn={navigateToSmsOptIn}
              onOpenAuthModal={handleOpenAuthModal}
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
              <PricingTiers 
                onOpenTerritoryModal={handleOpenTerritoryModal} 
                onNavigateToPrivacy={navigateToPrivacy}
                onNavigateToTerms={navigateToTerms}
                onNavigateToSmsOptIn={navigateToSmsOptIn}
              />

              {/* FAQ Section */}
              <FaqSection onOpenTerritoryModal={handleOpenTerritoryModal} />
            </main>

            {/* Footer */}
            <Footer 
              onOpenTerritoryModal={handleOpenTerritoryModal} 
              onNavigateToBlog={navigateToBlog}
              onNavigateHome={navigateToHome}
              onNavigateToPrivacy={navigateToPrivacy}
              onNavigateToTerms={navigateToTerms}
              onNavigateToSmsOptIn={navigateToSmsOptIn}
            />
          </>
        )}

        {/* Interactive Territory Intake & Email Workflow Modal */}
        <TerritoryCheckerModal
          isOpen={isTerritoryModalOpen}
          onClose={handleCloseTerritoryModal}
          initialData={modalInitialData}
          onNavigateToPrivacy={navigateToPrivacy}
          onNavigateToTerms={navigateToTerms}
          onNavigateToSmsOptIn={navigateToSmsOptIn}
        />

        {/* Enterprise Auth Modal (Login / Sign Up / Magic Link) */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={handleCloseAuthModal}
          initialTab={authModalTab}
        />

        {/* Password Reset Modal */}
        <PasswordResetModal />
      </div>
    </AuthProvider>
  );
}
