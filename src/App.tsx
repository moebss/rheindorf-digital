import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ProcessSteps from './components/ProcessSteps';
import Portfolio from './components/Portfolio';
import AiVoiceDemo from './components/AiVoiceDemo';
import ServiceTabs from './components/ServiceTabs';
import ComparisonMatrix from './components/ComparisonMatrix';
import RoiCalculator from './components/RoiCalculator';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import TechBenchmark from './components/TechBenchmark';
import CostEstimator from './components/CostEstimator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
    <div className="min-h-screen bg-[#04060A] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 pb-16 sm:pb-0 overflow-x-hidden">
      
      {/* 1. Header Navbar (Plexify Standard) */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 2. Hero Section with Interactive Case Study Switcher */}
        <Hero onOpenContact={scrollToContact} />

        {/* 3. Tech & Trust Strip (Numbers Counter + Continuous Marquee) */}
        <TrustStrip />

        {/* 4. The 4-Step Work Process [1], [2], [3], [4] */}
        <ProcessSteps onOpenContact={scrollToContact} />

        {/* 5. Live Portfolio Showcase (Plexify Card Stacking) */}
        <Portfolio onOpenContact={scrollToContact} />

        {/* 6. Live Interactive Voice AI Studio Terminal */}
        <AiVoiceDemo />

        {/* 7. Service Packages & 4 Capabilities */}
        <ServiceTabs onOpenContact={scrollToContact} />

        {/* 8. Comparison Tear-Down: Rheindorf Standard vs Traditional Agencies (Sticky Pinned Split) */}
        <ComparisonMatrix onOpenContact={scrollToContact} />

        {/* 9. Interactive "Verpasster Umsatz" ROI Calculator */}
        <RoiCalculator onOpenContact={scrollToContact} />

        {/* 10. Interactive Before/After Transformation Slider */}
        <BeforeAfterSlider />

        {/* 11. Performance & Lighthouse 100 Benchmark */}
        <TechBenchmark />

        {/* 12. Interactive 60-Second Project Cost Estimator */}
        <CostEstimator onOpenContact={scrollToContact} />

        {/* 13. Local Business Testimonials & Social Proof */}
        <Testimonials />

        {/* 14. FAQ Sektion */}
        <FAQ />

        {/* 15. Direct High-Converting Contact with DSGVO Trigger */}
        <Contact onOpenDatenschutz={() => setLegalModal('datenschutz')} />
      </main>

      {/* 16. Structured Curved Studio Footer with Back-To-Top */}
      <Footer
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* 17. Mobile Sticky Action Bar */}
      <StickyCTA onOpenContact={scrollToContact} />

      {/* Legal Modals (§ 5 DDG & DSGVO) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
