import React from 'react';
import { Check, X, Sparkles, Zap, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';

interface ComparisonMatrixProps {
  onOpenContact: () => void;
}

export default function ComparisonMatrix({ onOpenContact }: ComparisonMatrixProps) {
  const comparisons = [
    {
      num: '[01]',
      criterion: 'Technologie & Ladezeit',
      traditional: 'Schwere WordPress-Themes mit 30+ Plugins (3.5 – 6s Ladezeit, hohe Absprungrate auf Smartphones).',
      rheindorf: 'Handcodiertes React 19 & Tailwind 4 (< 0.4s FCP Ladezeit, 100/100 Google Lighthouse Score).',
      highlight: true
    },
    {
      num: '[02]',
      criterion: '24/7 Erreichbarkeit & KI',
      traditional: 'Keine KI. Wenn du auf der Baustelle oder im Kundentermin bist, springt der AB an – der Kunde ruft sofort die Konkurrenz an.',
      rheindorf: '24/7 KI-Telefon- & WhatsApp-Assistent: Nimmt Anrufe ab, qualifiziert den Schaden & bucht Termine direkt ein.',
      highlight: true
    },
    {
      num: '[03]',
      criterion: 'Umsetzungs-Geschwindigkeit',
      traditional: '8 bis 16 Wochen endlose Abstimmungsschleifen, Junior-Zwischenstufen und verpasste Deadlines.',
      rheindorf: 'Erster Klick-Prototyp in 7 Tagen im echten Browser. Vollständiger Launch in 14 Tagen garantiert.',
      highlight: false
    },
    {
      num: '[04]',
      criterion: 'Preise & Kostenstruktur',
      traditional: 'Intransparente Agentur-Stundensätze, teure Nachberechnungen und lebenslange monatliche Knebelverträge.',
      rheindorf: '100% Festpreis-Garantie ohne versteckte Kosten. Volles Eigentum an Code & Inhalten.',
      highlight: false
    },
    {
      num: '[05]',
      criterion: 'Datenschutz & Rechtssicherheit',
      traditional: 'US-Hosting, abmahngefährdete Google Fonts und unvollständige Rechtstexte.',
      rheindorf: '100% DSGVO-konform, deutsche Server, lokale Webfonts & geprüfte Rechtstexte nach § 5 DDG.',
      highlight: false
    }
  ];

  return (
    <section id="vergleich" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden border-t border-white/10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Sticky Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Sticky Headline & Studio Overview) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="lg:sticky lg:top-32 space-y-6">
              
              <div className="luxury-pill">
                <Sparkles className="w-3.5 h-3.5" />
                <span>// Der Qualitäts-Standard</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                Der Rheindorf Standard vs. <br />
                <span className="text-slate-400">08/15 Agenturen.</span>
              </h2>

              <p className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
                Warum zukunftsorientierte Handwerker & Dienstleister in Köln & NRW auf maßgeschneiderte Headless-Architektur und KI-Voice setzen, statt sich mit veralteten Baukästen abspeisen zu lassen.
              </p>

              <div className="p-6 rounded-3xl bg-[#070D1B] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    ✓
                  </div>
                  <span className="font-display font-bold text-white text-sm">Direkter Inhaber-Kontakt</span>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Keine Junior-Projektmanager oder Support-Warteschlangen. Du sprichst direkt mit dem leitenden Entwickler.
                </p>
              </div>

              <button
                onClick={onOpenContact}
                className="luxury-btn-primary w-full sm:w-auto text-xs"
              >
                <span>Jetzt Potenzialanalyse anfordern</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>
          </div>

          {/* Right Column (Comparison Cards) */}
          <div className="lg:col-span-7 space-y-6">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className={`luxury-card p-6 sm:p-8 ${
                  item.highlight ? 'border-emerald-500/30' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400">{item.num} Kriterium</span>
                  {item.highlight && (
                    <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Umsatzentscheidend
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-6">
                  {item.criterion}
                </h3>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Traditional Agency */}
                  <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-rose-400 font-bold block mb-1">08/15 WordPress-Agentur:</span>
                      <p className="text-slate-400 leading-relaxed">{item.traditional}</p>
                    </div>
                  </div>

                  {/* Rheindorf Digital */}
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-emerald-400 font-bold block mb-1">Rheindorf Digital Standard:</span>
                      <p className="text-slate-100 font-medium leading-relaxed">{item.rheindorf}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
