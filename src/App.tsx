import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import CreativeLab from './components/CreativeLab';
import ProcessSteps from './components/ProcessSteps';
import Portfolio from './components/Portfolio';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import AiVoiceDemo from './components/AiVoiceDemo';
import ServiceTabs from './components/ServiceTabs';
import ComparisonMatrix from './components/ComparisonMatrix';
import RoiCalculator from './components/RoiCalculator';
import TechBenchmark from './components/TechBenchmark';
import CostEstimator from './components/CostEstimator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LegalModals from './components/LegalModals';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 pb-16 sm:pb-0 overflow-x-hidden">
      
      {/* 0. Magnetic Interactive Custom Cursor */}
      <CustomCursor />

      {/* 1. Header Navbar with Sound FX & Lab Link */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 2. Hero Section with 60fps Canvas & Interactive Switcher */}
        <Hero onOpenContact={scrollToContact} />

        {/* 3. Tech & Trust Strip (Continuous Marquee & Metrics) */}
        <TrustStrip />

        {/* 4. The Creative Studio Lab (Interactive Playground & Token Sandbox) */}
        <CreativeLab onOpenContact={scrollToContact} />

        {/* 5. The 4-Step Work Process [1], [2], [3], [4] */}
        <ProcessSteps onOpenContact={scrollToContact} />

        {/* 6. Live Portfolio Showcase with Deep-Dive Case Study Modals */}
        <Portfolio onOpenContact={scrollToContact} />

        {/* 7. Interactive Before/After Transformation Slider */}
        <BeforeAfterSlider />

        {/* 8. Live Interactive Voice AI Studio Terminal */}
        <AiVoiceDemo />

        {/* 9. Service Packages & Capabilities */}
        <ServiceTabs onOpenContact={scrollToContact} />

        {/* 10. Comparison Tear-Down: Rheindorf Standard vs Traditional Agencies */}
        <ComparisonMatrix onOpenContact={scrollToContact} />

        {/* 11. Interactive "Verpasster Umsatz" ROI Calculator */}
        <RoiCalculator onOpenContact={scrollToContact} />

        {/* 12. Performance & Lighthouse 100 Benchmark */}
        <TechBenchmark />

        {/* 13. Interactive 60-Second Project Cost Estimator */}
        <CostEstimator onOpenContact={scrollToContact} />

        {/* 14. Local Business Testimonials & Social Proof */}
        <Testimonials />

        {/* 15. FAQ Sektion */}
        <FAQ />

        {/* 16. Direct High-Converting Contact with DSGVO Trigger */}
        <Contact onOpenDatenschutz={() => setLegalModal('datenschutz')} />
      </main>

      {/* 17. Structured Curved Studio Footer */}
      <Footer
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* 18. Mobile Sticky Action Bar */}
      <StickyCTA onOpenContact={scrollToContact} />

      {/* Legal Modals (§ 5 DDG & DSGVO) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
