import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ArrowUpRight, Sparkles, Phone, Mail, User, ShieldCheck, MessageSquare } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [step, setStep] = useState(1);
  const [projectFocus, setProjectFocus] = useState<string>('website');
  const [companySize, setCompanySize] = useState<string>('team');
  const [extraFeatures, setExtraFeatures] = useState<string>('seo');

  // Estimate Calculation
  const calculateEstimate = () => {
    let base = 1490;
    if (projectFocus === 'ki') base = 1890;
    if (projectFocus === 'bundle') base = 2890;

    let sizeMultiplier = 1.0;
    if (companySize === 'solo') sizeMultiplier = 0.85;
    if (companySize === 'enterprise') sizeMultiplier = 1.35;

    let featureAdd = 0;
    if (extraFeatures === 'seo') featureAdd = 450;
    if (extraFeatures === 'showcase') featureAdd = 650;

    const total = Math.round(base * sizeMultiplier + featureAdd);
    const low = Math.round(total * 0.95);
    const high = Math.round(total * 1.08);

    return { 
      low: low.toLocaleString('de-DE'), 
      high: high.toLocaleString('de-DE'),
      totalVal: total
    };
  };

  const estimate = calculateEstimate();

  const getWhatsAppLink = () => {
    const text = `Hallo Alexander! Ich habe den Projekt-Rechner auf rheindorf.digital ausgefüllt:%0A- Fokus: ${projectFocus}%0A- Betrieb: ${companySize}%0A- Zusatzfunktion: ${extraFeatures}%0A- Geschätzter Richtwert: ${estimate.low} € - ${estimate.high} €.%0A%0ABitte melde dich bei mir für ein kurzes Erstgespräch!`;
    return `https://wa.me/4916096351750?text=${text}`;
  };

  return (
    <section id="kalkulator" className="py-24 sm:py-32 bg-[#030712] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="luxury-pill mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>// Sofortiger Projekt-Kalkulator</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Projekt-Kosten in <br />
            <span className="text-emerald-400">60 Sekunden</span> schätzen.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-300">
            Wähle deine Anforderungen für eine transparente Richtwert-Kalkulation inklusive 100% Festpreisgarantie.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="luxury-card p-6 sm:p-10 shadow-2xl">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-between gap-2 mb-8 pb-6 border-b border-white/10">
            {[
              { num: 1, label: 'Projektart' },
              { num: 2, label: 'Betriebsgröße' },
              { num: 3, label: 'Zusatz-Tools' },
              { num: 4, label: 'Ergebnis' }
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`flex items-center gap-2 font-mono text-xs font-bold transition-colors cursor-pointer ${
                  step === s.num
                    ? 'text-emerald-400'
                    : step > s.num
                    ? 'text-slate-300'
                    : 'text-slate-600'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step === s.num
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : step > s.num
                      ? 'bg-[#0D1527] text-emerald-400 border border-emerald-500/30'
                      : 'bg-[#030712] text-slate-600 border border-white/10'
                  }`}
                >
                  {s.num}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          {/* STEP 1: Project Focus */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Schritt 1: Was ist das Hauptziel deines Projekts?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'website',
                    title: 'High-End Webdesign',
                    sub: 'Handcodierte React-Website speziell für lokale Neukunden-Anfragen',
                    tag: 'Bestseller'
                  },
                  {
                    id: 'ki',
                    title: '24/7 KI-Voice Telefonist',
                    sub: 'Smarte Sprach-KI für automatische Anruf- & Terminannahme auf der Baustelle',
                    tag: 'Voice AI'
                  },
                  {
                    id: 'bundle',
                    title: 'Komplettpaket (Web + KI)',
                    sub: 'Vollständiger High-End Webauftritt + intelligenter 24/7 KI-Assistent',
                    tag: 'Empfehlung'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setProjectFocus(item.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      projectFocus === item.id
                        ? 'bg-[#0D1527] border-emerald-500 ring-1 ring-emerald-500 shadow-xl'
                        : 'bg-[#030712] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full inline-block mb-2 border border-emerald-500/20">
                        {item.tag}
                      </span>
                      <h4 className="font-display font-bold text-base text-white mb-1.5">{item.title}</h4>
                      <p className="font-mono text-xs text-slate-300 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="luxury-btn-primary text-xs"
                >
                  <span>Weiter zu Schritt 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Company Size */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Schritt 2: Für welchen Betrieb ist das System gedacht?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'solo',
                    title: 'Einzelunternehmer & Meister',
                    sub: '1–2 Personen (z.B. selbstständiger Handwerker, Studio-Inhaber)'
                  },
                  {
                    id: 'team',
                    title: 'Lokales KMU / Meisterbetrieb',
                    sub: '3–15 Mitarbeiter mit festem Team & wachsendem Kundenstamm'
                  },
                  {
                    id: 'enterprise',
                    title: 'Größerer Betrieb & Filialen',
                    sub: '15+ Mitarbeiter mit mehreren Standorten oder Spezialgewerken'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setCompanySize(item.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      companySize === item.id
                        ? 'bg-[#0D1527] border-emerald-500 ring-1 ring-emerald-500 shadow-xl'
                        : 'bg-[#030712] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-display font-bold text-base text-white mb-1.5">{item.title}</h4>
                      <p className="font-mono text-xs text-slate-300 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="luxury-btn-secondary text-xs"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="luxury-btn-primary text-xs"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Extra Features */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Schritt 3: Welche Zusatz-Tools wünschst du dir?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'none',
                    title: 'Standard High-End Setup',
                    sub: 'Inklusive Mobile-First, DSGVO, SSL & modernstem Headless-Stack'
                  },
                  {
                    id: 'seo',
                    title: 'Local SEO & Google Maps Turbo',
                    sub: 'Schema.org JSON-LD & regionale Keyword-Optimierung für Köln/NRW'
                  },
                  {
                    id: 'showcase',
                    title: 'Interaktiver Kunden-Rechner',
                    sub: 'Individueller Kostenkalkulator oder Vorher/Nachher-Slider als Lead-Magnet'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setExtraFeatures(item.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      extraFeatures === item.id
                        ? 'bg-[#0D1527] border-emerald-500 ring-1 ring-emerald-500 shadow-xl'
                        : 'bg-[#030712] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-display font-bold text-base text-white mb-1.5">{item.title}</h4>
                      <p className="font-mono text-xs text-slate-300 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="luxury-btn-secondary text-xs"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="luxury-btn-primary text-xs"
                >
                  <span>Ergebnis Berechnen</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Live Result & Actions */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in">
              
              <div className="text-center bg-[#030712] border border-emerald-500/40 p-8 rounded-3xl space-y-3 shadow-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Geschätzter Richtwert (Pauschal / Einmalig)
                </span>
                
                <div className="font-display font-black text-4xl sm:text-6xl text-white">
                  {estimate.low} € – {estimate.high} €
                </div>
                
                <p className="text-xs font-mono text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Inklusive 100% Festpreisgarantie, 14 Tagen Umsetzungszeit, Responsive Design, SSL & Quellcode-Übergabe.
                </p>
              </div>

              {/* Direct Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kalkulation per WhatsApp senden</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="luxury-btn-primary text-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Unverbindliches Erstgespräch anfragen</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Kalkulation von vorne beginnen
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
