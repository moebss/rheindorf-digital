import React, { useState, useEffect } from 'react';
import MinimalNavbar from './components/MinimalNavbar';
import MinimalHero from './components/MinimalHero';
import DualOffering from './components/DualOffering';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import WebsiteAuditChecker from './components/WebsiteAuditChecker';
import PhilosophyManifesto from './components/PhilosophyManifesto';
import NeoCaseStudy from './components/NeoCaseStudy';
import RoiCalculator from './components/RoiCalculator';
import InteractiveProcessVisualizer from './components/InteractiveProcessVisualizer';
import ProcessRoadmap from './components/ProcessRoadmap';
import FAQ from './components/FAQ';
import MinimalInquiry from './components/MinimalInquiry';
import MinimalFooter from './components/MinimalFooter';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);
  const [inquiryPrefill, setInquiryPrefill] = useState<{ scope?: string; message?: string }>({});

  // URL Hash support for direct legal links (#impressum, #datenschutz)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#impressum') {
        setLegalModal('impressum');
      } else if (hash === '#datenschutz') {
        setLegalModal('datenschutz');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleCloseModal = () => {
    setLegalModal(null);
    if (window.location.hash === '#impressum' || window.location.hash === '#datenschutz') {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const scrollToContact = (scope?: string, message?: string) => {
    if (scope || message) {
      setInquiryPrefill({ scope, message });
    }
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-stone-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <MinimalNavbar onOpenContact={() => scrollToContact()} />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <MinimalHero onOpenContact={() => scrollToContact()} />

        {/* 2. Dual Offering (Webdesign vs. Automation) */}
        <DualOffering onOpenContact={() => scrollToContact()} />

        {/* 3. Before vs. After Reality Check (WordPress vs. Handcrafted Code) */}
        <BeforeAfterComparison />

        {/* 4. Real Verified Case Study & Branch Demos */}
        <NeoCaseStudy onOpenContact={() => scrollToContact()} />

        {/* 5. Website Audit & Speed Check (Lead Magnet) */}
        <WebsiteAuditChecker />

        {/* 6. Interactive Process & Pipeline Visualizer (Automation Proof) */}
        <InteractiveProcessVisualizer onOpenContact={() => scrollToContact('automation', 'Ich möchte meine internen Workflows und Schnittstellen automatisieren.')} />

        {/* 7. ROI, Price Configurator & Impact Calculator */}
        <RoiCalculator onOpenContact={scrollToContact} />

        {/* 8. Philosophy & Core Principles (Craftsman Stance) */}
        <PhilosophyManifesto />

        {/* 9. Collaboration Roadmap (4-Week Schedule) */}
        <ProcessRoadmap />

        {/* 10. FAQ Section */}
        <FAQ />

        {/* 11. Inquiry / Direct Contact */}
        <MinimalInquiry prefill={inquiryPrefill} />

      </main>

      {/* Footer */}
      <MinimalFooter
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* Legal Modals */}
      <LegalModals type={legalModal} onClose={handleCloseModal} />

    </div>
  );
}
