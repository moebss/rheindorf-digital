import React, { useState } from 'react';
import MinimalNavbar from './components/MinimalNavbar';
import MinimalHero from './components/MinimalHero';
import TechBenchmark from './components/TechBenchmark';
import DualOffering from './components/DualOffering';
import ComparisonMatrix from './components/ComparisonMatrix';
import NeoCaseStudy from './components/NeoCaseStudy';
import RoiCalculator from './components/RoiCalculator';
import Testimonials from './components/Testimonials';
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
        
        {/* 2. Typographic Hero with Symbiosis Positioning & 15-Min Audit */}
        <MinimalHero onOpenContact={scrollToContact} />

        {/* 3. Google Lighthouse & Speed Benchmark (< 0.4s FCP vs 3.8s WP) */}
        <TechBenchmark />

        {/* 4. Automation & Performance Impact Cockpit (ROI Diagnostic) */}
        <RoiCalculator onOpenContact={scrollToContact} />

        {/* 5. The Dual Offering: Webdesign & Automation */}
        <DualOffering onOpenContact={scrollToContact} />

        {/* 6. Comparison Matrix: Rheindorf Standard vs. 08/15 Agentur */}
        <ComparisonMatrix onOpenContact={scrollToContact} />

        {/* 7. Real Proof: Interactive Case Studies with Live Results (AZ Badmanufaktur, Alyas, etc.) */}
        <NeoCaseStudy onOpenContact={scrollToContact} />

        {/* 8. Client Reviews & Social Proof */}
        <Testimonials />

        {/* 9. Realistic 4-Step Process Roadmap */}
        <ProcessRoadmap />

        {/* 10. Low-Friction 15-Min. Audit & Direct Contact */}
        <MinimalInquiry />

      </main>

      {/* 11. Editorial Minimalist Footer */}
      <MinimalFooter
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* 12. Mobile Sticky Action Bar (Direct Call, WhatsApp, Inquiry) */}
      <StickyCTA onOpenContact={scrollToContact} />

      {/* Legal Modals (§ 5 DDG & DSGVO) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
