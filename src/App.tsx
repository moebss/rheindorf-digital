import React, { useState } from 'react';
import NeoHeader from './components/NeoHeader';
import NeoHero from './components/NeoHero';
import NeoSelectedWorks from './components/NeoSelectedWorks';
import NeoSkills from './components/NeoSkills';
import NeoCaseStudy from './components/NeoCaseStudy';
import CreativeLab from './components/CreativeLab';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import AiVoiceDemo from './components/AiVoiceDemo';
import CostEstimator from './components/CostEstimator';
import RoiCalculator from './components/RoiCalculator';
import TechBenchmark from './components/TechBenchmark';
import ComparisonMatrix from './components/ComparisonMatrix';
import FAQ from './components/FAQ';
import NeoFooter from './components/NeoFooter';
import StickyCTA from './components/StickyCTA';
import LegalModals from './components/LegalModals';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>('nawrath-bad');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCaseStudy = (id: string) => {
    setSelectedCaseStudyId(id);
    const el = document.getElementById('case-study');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 flex flex-col font-sans selection:bg-[#D4FF00] selection:text-black pb-16 sm:pb-0 overflow-x-hidden">
      
      {/* 0. Contextual Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Main Neo-Brutalist Poster Architecture */}
      <main className="flex-grow">
        
        {/* 1. Giant Poster Header: PORTFOLIO */}
        <NeoHeader onOpenContact={scrollToContact} />

        {/* 2. Neo Hero: Alexander Rheindorf + Geometric Cutout Portrait */}
        <NeoHero onOpenContact={scrollToContact} />

        {/* 3. Selected Works: 3-Card Grid + View All */}
        <NeoSelectedWorks
          onOpenContact={scrollToContact}
          onSelectCaseStudy={handleSelectCaseStudy}
        />

        {/* 4. Skills I Use: Acid Lime & Cobalt Blue Chip Matrix */}
        <NeoSkills />

        {/* 5. Spotlight Case Study: The Challenge / Solution / Result Breakdown */}
        <NeoCaseStudy
          onOpenContact={scrollToContact}
          selectedId={selectedCaseStudyId}
        />

        {/* 6. The Creative Studio Lab & Live Theme Playground */}
        <CreativeLab onOpenContact={scrollToContact} />

        {/* 7. Interactive Before / After Transformation Slider */}
        <BeforeAfterSlider />

        {/* 8. Live 24/7 AI Voice Phone Assistant Studio */}
        <AiVoiceDemo />

        {/* 9. Performance & Lighthouse 100 Benchmark */}
        <TechBenchmark />

        {/* 10. Interactive 60s Project & Budget Estimator */}
        <CostEstimator onOpenContact={scrollToContact} />

        {/* 11. Comparison Matrix: Rheindorf vs Traditional Agencies */}
        <ComparisonMatrix onOpenContact={scrollToContact} />

        {/* 12. FAQ Accordion */}
        <FAQ />

      </main>

      {/* 13. High-Impact Neo-Brutalist Footer with Geometric Arches */}
      <NeoFooter
        onOpenImpressum={() => setLegalModal('impressum')}
        onOpenDatenschutz={() => setLegalModal('datenschutz')}
      />

      {/* 14. Mobile Sticky Thumb Action Bar */}
      <StickyCTA onOpenContact={scrollToContact} />

      {/* Legal Modals (§ 5 DDG & DSGVO) */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
