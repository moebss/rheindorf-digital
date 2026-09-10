import React, { useState } from 'react';
import MinimalNavbar from './components/MinimalNavbar';
import MinimalHero from './components/MinimalHero';
import PhilosophyManifesto from './components/PhilosophyManifesto';
import DualOffering from './components/DualOffering';
import InteractiveProcessVisualizer from './components/InteractiveProcessVisualizer';
import CuratedWorks from './components/CuratedWorks';
import ProcessRoadmap from './components/ProcessRoadmap';
import MinimalInquiry from './components/MinimalInquiry';
import MinimalFooter from './components/MinimalFooter';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* 1. Minimal Navigation Bar */}
      <MinimalNavbar onOpenContact={scrollToContact} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        
        {/* 2. Typographic Hero with Positioning Statement & Baseline Metrics */}
        <MinimalHero onOpenContact={scrollToContact} />

        {/* 3. The 3 Core Theses / Anti-Bloat Philosophy */}
        <PhilosophyManifesto />

        {/* 4. The Dual Offering: Webdesign & Intelligent Processes */}
        <DualOffering onOpenContact={scrollToContact} />

        {/* 5. Signature Interactive Flow Visualizer (Frontend + Backend Synergy) */}
        <InteractiveProcessVisualizer />

        {/* 6. Selected Curated Works with Hard Metrics */}
        <CuratedWorks onOpenContact={scrollToContact} />

        {/* 7. 4-Week Sprint Roadmap & Method */}
        <ProcessRoadmap />

        {/* 8. Frictionless Scope-Based Inquiry & Direct Contact */}
        <MinimalInquiry />

      </main>

      {/* 9. Editorial Minimalist Footer */}
      <MinimalFooter
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* Legal Modals (§ 5 DDG & DSGVO) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
