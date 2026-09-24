import React, { useState } from 'react';
import MinimalNavbar from './components/MinimalNavbar';
import MinimalHero from './components/MinimalHero';
import DualOffering from './components/DualOffering';
import NeoCaseStudy from './components/NeoCaseStudy';
import InteractiveProcessVisualizer from './components/InteractiveProcessVisualizer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-zinc-950 overflow-x-hidden">
      
      {/* Navigation */}
      <MinimalNavbar onOpenContact={scrollToContact} />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <MinimalHero onOpenContact={scrollToContact} />

        {/* Dual Offering */}
        <DualOffering onOpenContact={scrollToContact} />

        {/* Case Studies */}
        <NeoCaseStudy onOpenContact={scrollToContact} />

        {/* Process Visualizer */}
        <InteractiveProcessVisualizer />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Inquiry */}
        <MinimalInquiry />

      </main>

      {/* Footer */}
      <MinimalFooter
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* Legal Modals */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
