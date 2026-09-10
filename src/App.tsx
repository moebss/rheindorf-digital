import React, { useState } from 'react';
import MinimalNavbar from './components/MinimalNavbar';
import MinimalHero from './components/MinimalHero';
import DualOffering from './components/DualOffering';
import InteractiveProcessVisualizer from './components/InteractiveProcessVisualizer';
import PhilosophyManifesto from './components/PhilosophyManifesto';
import ProcessRoadmap from './components/ProcessRoadmap';
import MinimalInquiry from './components/MinimalInquiry';
import MinimalFooter from './components/MinimalFooter';
import StickyCTA from './components/StickyCTA';
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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-zinc-950 overflow-x-hidden pb-16 sm:pb-0">
      
      {/* 1. Minimal Navigation Bar */}
      <MinimalNavbar onOpenContact={scrollToContact} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        
        {/* 2. Typographic Hero with Positioning Statement & Real Guarantees */}
        <MinimalHero onOpenContact={scrollToContact} />

        {/* 3. The Dual Offering: Webdesign & Automation (What I build / What I don't build) */}
        <DualOffering onOpenContact={scrollToContact} />

        {/* 4. Signature Interactive Workflow Simulator (React + n8n + Webhooks) */}
        <InteractiveProcessVisualizer />

        {/* 5. Four Honest Principles for Solid Software */}
        <PhilosophyManifesto />

        {/* 6. Realistic 4-Step Process Roadmap */}
        <ProcessRoadmap />

        {/* 7. Frictionless Scope-Based Inquiry & Direct Contact */}
        <MinimalInquiry />

      </main>

      {/* 8. Editorial Minimalist Footer */}
      <MinimalFooter
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* 9. Mobile Sticky Action Bar (Direct Call, WhatsApp, Inquiry) */}
      <StickyCTA onOpenContact={scrollToContact} />

      {/* Legal Modals (§ 5 DDG & DSGVO) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
