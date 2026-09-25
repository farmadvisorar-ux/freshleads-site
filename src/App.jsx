import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadDossierAudio from './components/LeadDossierAudio';
import QualityEngine from './components/QualityEngine';
import ConsistencyFormula from './components/ConsistencyFormula';
import HowItWorks from './components/HowItWorks';
import RoiCalculator from './components/RoiCalculator';
import PricingTiers from './components/PricingTiers';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TerritoryCheckerModal from './components/TerritoryCheckerModal';

export default function App() {
  const [isTerritoryModalOpen, setIsTerritoryModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenTerritoryModal = (data = {}) => {
    setModalInitialData(data);
    setIsTerritoryModalOpen(true);
  };

  const handleCloseTerritoryModal = () => {
    setIsTerritoryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-fresh-black text-slate-100 flex flex-col font-sans selection:bg-fresh-orange selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenTerritoryModal={handleOpenTerritoryModal} />

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

        {/* Interactive Appointment Revenue & ROI Calculator */}
        <RoiCalculator onOpenTerritoryModal={handleOpenTerritoryModal} />

        {/* Pricing Tiers & Appointment Packages */}
        <PricingTiers onOpenTerritoryModal={handleOpenTerritoryModal} />

        {/* FAQ Section */}
        <FaqSection onOpenTerritoryModal={handleOpenTerritoryModal} />
      </main>

      {/* Footer */}
      <Footer onOpenTerritoryModal={handleOpenTerritoryModal} />

      {/* Interactive Territory Intake & Email Workflow Modal */}
      <TerritoryCheckerModal
        isOpen={isTerritoryModalOpen}
        onClose={handleCloseTerritoryModal}
        initialData={modalInitialData}
      />
    </div>
  );
}
