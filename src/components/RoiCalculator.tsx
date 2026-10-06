import React, { useState } from 'react';
import { 
  GitBranch, 
  Gauge, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  Euro, 
  TrendingDown, 
  Zap,
  Users,
  Check,
  ShieldCheck,
  SlidersHorizontal
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: (scope?: string, message?: string) => void;
}

export default function RoiCalculator({ onOpenContact }: RoiCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'pricing' | 'automation' | 'web'>('pricing');

  // Tab 1: Pricing Configurator State
  const [projectType, setProjectType] = useState<'onepage' | 'business' | 'relaunch' | 'custom'>('business');
  const [pageCount, setPageCount] = useState<'1' | '3-5' | '6-10' | '10+'>('3-5');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['form', 'seo']);
  const [maintenancePlan, setMaintenancePlan] = useState<'none' | 'basis' | 'sorglos'>('basis');

  const projectTypes = {
    onepage: { name: 'Onepage / Landingpage', base: 1490, desc: 'Fokussierte Einzelseite für schnellen Einstieg' },
    business: { name: 'Unternehmenswebsite', base: 2490, desc: 'Mehrseitiger Firmenauftritt mit klarer Struktur' },
    relaunch: { name: 'Relaunch & Speed-Upgrade', base: 1990, desc: 'Bestehende WordPress/Wix-Seite ablösen' },
    custom: { name: 'Plattform & n8n-Automation', base: 3890, desc: 'Web-Plattform + automatisierte Backend-Pipelines' }
  };

  const pageCountOptions = {
    '1': { label: '1 Seite', price: 0 },
    '3-5': { label: '3–5 Seiten', price: 400 },
    '6-10': { label: '6–10 Seiten', price: 800 },
    '10+': { label: '10+ Seiten', price: 1400 }
  };

  const featureOptions = [
    { id: 'form', label: 'Digitale Vorqualifizierung / Anfrageformular', price: 250, desc: 'Filtert unvollständige Anfragen aus' },
    { id: 'automation', label: 'n8n Workflow-Pipeline (WhatsApp/CRM)', price: 450, desc: 'Sofortige Lead-Meldung & CRM-Eintrag' },
    { id: 'booking', label: 'Online-Terminbuchung (Cal.com)', price: 290, desc: 'Kunden buchen direkt freie Termine' },
    { id: 'seo', label: 'Local-SEO & Schema.org Google-Maps-Optimierung', price: 350, desc: 'Top-Platzierung im Erftkreis/Köln' },
    { id: 'catalog', label: 'Produktkatalog / Speisekarte', price: 550, desc: 'Interaktive Übersicht ohne langes Suchen' }
  ];

  const maintenanceOptions = {
    none: { label: 'Keine laufenden Kosten', pricePerMonth: 0, desc: 'Code & Hosting gehören zu 100% dir' },
    basis: { label: 'Basis-Monitoring & Updates', pricePerMonth: 49, desc: 'Sicherheits-Checks, SSL & Server-Monitoring' },
    sorglos: { label: 'Rundum-Sorglos-Pflege', pricePerMonth: 99, desc: 'Laufende Pflege, Textänderungen & Prio-Support' }
  };

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculatedBase = projectTypes[projectType].base;
  const calculatedPagePrice = pageCountOptions[pageCount].price;
  const calculatedFeaturesPrice = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find(f => f.id === fId);
    return acc + (feat ? feat.price : 0);
  }, 0);
  const calculatedTotalOneTime = calculatedBase + (projectType === 'onepage' ? 0 : calculatedPagePrice) + calculatedFeaturesPrice;
  const calculatedMonthly = maintenanceOptions[maintenancePlan].pricePerMonth;

  // Tab 2: Automation Tab State
  const [teamSize, setTeamSize] = useState<number>(3);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  const weeklyHoursWasted = teamSize * manualHoursPerWeek;
  const monthlyHoursWasted = Math.round(weeklyHoursWasted * 4.33);
  const yearlyWastedCost = Math.round(monthlyHoursWasted * 12 * hourlyRate);
  const potentialSavingsYearly = Math.round(yearlyWastedCost * 0.85);

  // Tab 3: Web Performance Tab State
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(1200);
  const [loadTimeSeconds, setLoadTimeSeconds] = useState<number>(4.2);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(850);

  const bouncePenaltyPercent = Math.min(65, Math.max(5, Math.round((loadTimeSeconds - 0.5) * 12)));
  const lostLeadsMonthly = Math.round((monthlyVisitors * (bouncePenaltyPercent / 100)) * 0.03);
  const lostRevenueYearly = Math.round(lostLeadsMonthly * avgCustomerValue * 12);

  return (
    <section id="rechner" className="py-20 sm:py-32 border-b border-[#e7e3d8] bg-[#fbf9f5] relative overflow-hidden">
      
      {/* Warm Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparenz &bull; Kalkulator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 leading-tight">
            Transparente Kosten &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700">
              echtes Einsparpotenzial.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-stone-600 font-sans leading-relaxed max-w-2xl mx-auto">
            Keine versteckten Agentur-Knebelverträge oder unklare Stundensätze. Wähle dein Vorhaben oder berechne deinen wirtschaftlichen ROI in Echtzeit.
          </p>
        </div>

        {/* 3-Tab Switcher */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="p-1.5 rounded-2xl bg-stone-200/70 border border-[#e7e3d8] flex flex-wrap justify-center gap-1.5">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                activeTab === 'pricing'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
              <span>1. Projekt-Preisfinder</span>
            </button>

            <button
              onClick={() => setActiveTab('automation')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                activeTab === 'automation'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <GitBranch className="w-4 h-4 text-emerald-700" />
              <span>2. Prozess-ROI (Zeitersparnis)</span>
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                activeTab === 'web'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Gauge className="w-4 h-4 text-emerald-700" />
              <span>3. Website-Speed &amp; Conversion</span>
            </button>
          </div>
        </div>

        {/* Active Tab Content Card */}
        <div className="rounded-3xl border border-[#e7e3d8] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
          
          {/* TAB 1: PROJEKT-PREISFINDER */}
          {activeTab === 'pricing' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* 1. Projektart */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-stone-600 block mb-3 font-semibold">
                    1. Projekt-Basis auswählen
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(Object.keys(projectTypes) as Array<keyof typeof projectTypes>).map((key) => {
                      const item = projectTypes[key];
                      const isSelected = projectType === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setProjectType(key)}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-50/70 text-stone-900 shadow-xs'
                              : 'border-[#e7e3d8] bg-[#fbf9f5] text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-sans font-semibold text-xs text-stone-900">{item.name}</span>
                            <span className="font-mono text-xs text-emerald-800 font-bold">ab {item.base} €</span>
                          </div>
                          <div className="text-[11px] text-stone-500 mt-1">{item.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Seitenumfang (nur wenn nicht Onepage) */}
                {projectType !== 'onepage' && (
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-stone-600 block mb-3 font-semibold">
                      2. Geplanter Seitenumfang
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(Object.keys(pageCountOptions) as Array<keyof typeof pageCountOptions>).map((key) => {
                        const opt = pageCountOptions[key];
                        const isSelected = pageCount === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setPageCount(key)}
                            className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'border-emerald-500 bg-emerald-50 text-stone-900 font-semibold'
                                : 'border-[#e7e3d8] bg-[#fbf9f5] text-stone-700 hover:border-stone-300'
                            }`}
                          >
                            <div className="font-sans font-semibold text-xs">{opt.label}</div>
                            <div className="font-mono text-[11px] text-emerald-800 mt-0.5 font-bold">
                              {opt.price === 0 ? 'Inklusive' : `+${opt.price} €`}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Smarte Zusatz-Module */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-stone-600 block mb-3 font-semibold">
                    3. Smarte Module &amp; Features (Mehrfachauswahl)
                  </label>
                  <div className="space-y-2">
                    {featureOptions.map((feat) => {
                      const isSelected = selectedFeatures.includes(feat.id);
                      return (
                        <div
                          key={feat.id}
                          onClick={() => toggleFeature(feat.id)}
                          className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            isSelected
                              ? 'border-emerald-400 bg-emerald-50/70 text-stone-900 shadow-xs'
                              : 'border-[#e7e3d8] bg-[#fbf9f5] text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded flex items-center justify-center border text-white ${
                              isSelected ? 'bg-emerald-600 border-emerald-600' : 'border-stone-300 bg-white'
                            }`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-xs font-sans font-semibold text-stone-900">{feat.label}</div>
                              <div className="text-[11px] text-stone-500">{feat.desc}</div>
                            </div>
                          </div>
                          <span className="font-mono text-xs text-emerald-800 font-bold shrink-0 ml-3">
                            +{feat.price} €
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Wartung & Betreuung */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-stone-600 block mb-3 font-semibold">
                    4. Nach dem Launch: Wartung &amp; Pflege
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {(Object.keys(maintenanceOptions) as Array<keyof typeof maintenanceOptions>).map((key) => {
                      const opt = maintenanceOptions[key];
                      const isSelected = maintenancePlan === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setMaintenancePlan(key)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-50 text-stone-900 shadow-xs'
                              : 'border-[#e7e3d8] bg-[#fbf9f5] text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <div className="font-sans font-semibold text-xs text-stone-900">{opt.label}</div>
                          <div className="font-mono text-xs text-emerald-800 font-bold mt-0.5">
                            {opt.pricePerMonth === 0 ? '0 € / Monat' : `${opt.pricePerMonth} € / Monat`}
                          </div>
                          <div className="text-[10px] text-stone-500 mt-1">{opt.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Summary & Sticky Price Card */}
              <div className="lg:col-span-5 bg-[#f5f2eb] border border-[#e7e3d8] rounded-2xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-28 shadow-xs">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                    Kalkulierter Richtwert
                  </span>
                  <div className="text-3xl sm:text-5xl font-mono font-bold text-stone-900 tracking-tight">
                    {calculatedTotalOneTime.toLocaleString('de-DE')} €
                  </div>
                  <div className="text-xs font-mono text-stone-600 mt-1">
                    Transparenter Festpreis (Netto)
                    {calculatedMonthly > 0 && ` + ${calculatedMonthly} € / Monat`}
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-2 pt-4 border-t border-[#e7e3d8] text-xs font-sans">
                  <div className="flex justify-between text-stone-700">
                    <span>Basis: {projectTypes[projectType].name}</span>
                    <span className="font-mono font-medium text-stone-900">{calculatedBase} €</span>
                  </div>

                  {projectType !== 'onepage' && (
                    <div className="flex justify-between text-stone-700">
                      <span>Umfang: {pageCountOptions[pageCount].label}</span>
                      <span className="font-mono font-medium text-stone-900">+{calculatedPagePrice} €</span>
                    </div>
                  )}

                  {selectedFeatures.length > 0 && (
                    <div className="flex justify-between text-stone-700">
                      <span>{selectedFeatures.length} Zusatzmodule</span>
                      <span className="font-mono font-medium text-stone-900">+{calculatedFeaturesPrice} €</span>
                    </div>
                  )}

                  <div className="flex justify-between text-stone-700 pt-2 border-t border-[#e7e3d8]">
                    <span>Betreuung:</span>
                    <span className="font-mono text-emerald-800 font-bold">
                      {maintenanceOptions[maintenancePlan].pricePerMonth === 0 ? 'Kein Abo (0 €)' : `${maintenanceOptions[maintenancePlan].pricePerMonth} €/Monat`}
                    </span>
                  </div>
                </div>

                {/* Guaranteed Deliverables */}
                <div className="p-3.5 rounded-xl bg-white border border-[#e7e3d8] space-y-1.5 text-xs font-sans text-stone-700 shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-700" />
                    <span>Im Festpreis immer enthalten:</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    100% DSGVO-konform ohne Cookie-Banner, blitzschneller React-Code, Mobil-Optimierung und persönliche 1:1-Betreuung vom Senior-Entwickler.
                  </p>
                </div>

                {/* CTA with prefill */}
                <button
                  onClick={() => {
                    const featureNames = selectedFeatures.map(fId => featureOptions.find(f => f.id === fId)?.label).filter(Boolean).join(', ');
                    const message = `Projekt-Kalkulation:\n• Typ: ${projectTypes[projectType].name}\n• Umfang: ${projectType === 'onepage' ? '1 Seite' : pageCountOptions[pageCount].label}\n• Module: ${featureNames || 'Keine'}\n• Betreuung: ${maintenanceOptions[maintenancePlan].label}\n\nKalkulierter Richtwert: ${calculatedTotalOneTime.toLocaleString('de-DE')} € einmalig + ${calculatedMonthly} €/Monat.`;
                    onOpenContact('full-system', message);
                  }}
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm transition-all shadow-[0_4px_15px_rgba(4,120,87,0.25)] hover:shadow-[0_6px_20px_rgba(4,120,87,0.35)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Diese Konfiguration anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-stone-500 text-center font-sans">
                  Unverbindliche Orientierung. Verbindliches Festpreis-Angebot nach kurzem Erstgespräch.
                </p>

              </div>

            </div>
          )}

          {/* TAB 2: AUTOMATION IMPACT */}
          {activeTab === 'automation' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Sliders Left Column */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Slider 1: Team Size */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-emerald-700" />
                      Teammitglieder mit Büro- / Datenaufgaben
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {teamSize} {teamSize === 1 ? 'Person' : 'Personen'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span>1 Person</span>
                    <span>10 Personen</span>
                    <span>20 Personen</span>
                  </div>
                </div>

                {/* Slider 2: Hours per Week */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      Manuelle Fleißarbeit pro Person / Woche
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {manualHoursPerWeek} Std. / Woche
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={manualHoursPerWeek}
                    onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span>1 Std. (minimal)</span>
                    <span>12 Std.</span>
                    <span>25 Std. (massiver Engpass)</span>
                  </div>
                </div>

                {/* Slider 3: Hourly Rate */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                      <Euro className="w-3.5 h-3.5 text-emerald-700" />
                      Durchschnittlicher interner Stundensatz
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {hourlyRate} € / Std.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="120"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span>25 €</span>
                    <span>70 €</span>
                    <span>120 €</span>
                  </div>
                </div>

              </div>

              {/* Results Right Column */}
              <div className="lg:col-span-5 bg-[#f5f2eb] border border-[#e7e3d8] rounded-2xl p-6 sm:p-8 text-center space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-600 flex items-center justify-center gap-1.5 font-semibold">
                    <TrendingDown className="w-4 h-4 text-rose-600" />
                    <span>Aktueller Verlust durch manuelle Arbeit</span>
                  </span>
                  
                  <div className="text-3xl sm:text-5xl font-mono font-bold text-stone-900 tracking-tight">
                    ~ {monthlyHoursWasted} Std.
                  </div>
                  <span className="text-xs font-mono text-stone-500 block">
                    pro Monat an repetitive Fleißarbeit verloren
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-emerald-200 text-left space-y-1 shadow-xs">
                  <span className="text-[11px] font-mono uppercase text-emerald-800 font-bold block">
                    Dein jährliches Einsparpotenzial:
                  </span>
                  <div className="text-2xl font-mono font-bold text-emerald-700">
                    ca. {potentialSavingsYearly.toLocaleString('de-DE')} € / Jahr
                  </div>
                  <p className="text-xs text-stone-600 font-sans mt-1">
                    durch saubere n8n-Workflows &amp; automatisierte Schnittstellen.
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact(
                    'automation',
                    `ROI-Diagnose Automatisierung: Ersparnis ca. ${potentialSavingsYearly.toLocaleString('de-DE')} € / Jahr (~${monthlyHoursWasted} Std./Monat bei ${teamSize} Personen).`
                  )}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md shadow-emerald-700/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Ersparnis sichern &amp; anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

              </div>

            </div>
          )}

          {/* TAB 3: SPEED & CONVERSION IMPACT */}
          {activeTab === 'web' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Sliders Left Column */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Slider 1: Monthly Visitors */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-emerald-700" />
                      Monatliche Besucher auf der Website
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {monthlyVisitors.toLocaleString('de-DE')} Besucher
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="10000"
                    step="100"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span>200</span>
                    <span>5.000</span>
                    <span>10.000+</span>
                  </div>
                </div>

                {/* Slider 2: Load Time */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      Aktuelle Ladezeit auf Smartphones
                    </label>
                    <span className={`font-mono text-sm sm:text-base font-bold px-3 py-1 rounded-lg border ${
                      loadTimeSeconds > 3 
                        ? 'text-rose-700 bg-rose-50 border-rose-200' 
                        : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                    }`}>
                      {loadTimeSeconds}s Ladezeit
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="8.0"
                    step="0.1"
                    value={loadTimeSeconds}
                    onChange={(e) => setLoadTimeSeconds(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span className="text-emerald-700">&lt; 0.5s (Rheindorf Standard)</span>
                    <span className="text-stone-500">3.0s</span>
                    <span className="text-rose-700">8.0s (Typisches WordPress)</span>
                  </div>
                </div>

                {/* Slider 3: Customer Value */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                      <Euro className="w-3.5 h-3.5 text-emerald-700" />
                      Durchschnittlicher Auftragswert (Customer Value)
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {avgCustomerValue.toLocaleString('de-DE')} €
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={avgCustomerValue}
                    onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span>100 €</span>
                    <span>2.500 €</span>
                    <span>5.000 €</span>
                  </div>
                </div>

              </div>

              {/* Results Right Column */}
              <div className="lg:col-span-5 bg-[#f5f2eb] border border-[#e7e3d8] rounded-2xl p-6 sm:p-8 text-center space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-600 flex items-center justify-center gap-1.5 font-semibold">
                    <Zap className="w-4 h-4 text-rose-600" />
                    <span>Verlorene Neukunden-Anfragen</span>
                  </span>
                  
                  <div className="text-3xl sm:text-5xl font-mono font-bold text-stone-900 tracking-tight">
                    ~ {lostLeadsMonthly * 12} Leads
                  </div>
                  <span className="text-xs font-mono text-stone-500 block">
                    pro Jahr verloren durch Ladehemmung (~{bouncePenaltyPercent}% Absprung)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-rose-200 text-left space-y-1 shadow-xs">
                  <span className="text-[11px] font-mono uppercase text-rose-700 font-bold block">
                    Geschätzter entgangener Jahresumsatz:
                  </span>
                  <div className="text-2xl font-mono font-bold text-rose-600">
                    ca. {lostRevenueYearly.toLocaleString('de-DE')} € / Jahr
                  </div>
                  <p className="text-xs text-stone-600 font-sans mt-1">
                    Umsatz, der heute unbemerkt zu Wettbewerbern abwandert.
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact(
                    'webdesign',
                    `ROI-Diagnose Web-Performance: Entgangener Umsatz ca. ${lostRevenueYearly.toLocaleString('de-DE')} € / Jahr durch ${loadTimeSeconds}s Ladezeit (~${lostLeadsMonthly * 12} verlorene Leads/Jahr).`
                  )}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md shadow-emerald-700/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Website-Speed-Audit anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
