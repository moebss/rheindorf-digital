import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      num: '[01]',
      q: 'Wie lange dauert die Umsetzung eines High-End Webauftritts?',
      a: 'In der Regel steht dein erster interaktiver Klick-Prototyp innerhalb von 7 Tagen im echten Browser. Der vollständige Go-Live erfolgt nach maximal 14 Tagen. Durch den direkten Draht zum Inhaber Alexander Rheindorf entfallen wochenlange Agentur-Schleifen.'
    },
    {
      num: '[02]',
      q: 'Gibt es versteckte monatliche Kosten oder Knebelverträge?',
      a: 'Nein, niemals. Wir arbeiten mit 100% Festpreisgarantie. Der gesamte React-Quellcode und alle Inhalte gehören nach Projektabschluss vollständig dir. Optionale Wartungs- & Highspeed-Hosting-Pakete sind monatlich flexibel kündbar.'
    },
    {
      num: '[03]',
      q: 'Wie funktioniert der 24/7 KI-Telefonassistent genau?',
      a: 'Der KI-Telefonassistent wird mit den exakten Daten deines Betriebs (Öffnungszeiten, Vorlaufzeiten, Stundensätze, Notfall-Routing) trainiert. Ruft ein Kunde an, wenn du auf der Baustelle oder im Feierabend bist, nimmt die KI den Anruf entgegen, qualifiziert das Anliegen und bucht Termine direkt in deinen Kalender.'
    },
    {
      num: '[04]',
      q: 'Ist die Website zu 100% DSGVO-konform und abmahnsicher?',
      a: 'Ja, absolut. Wir hosten alle Schriftarten lokal in Deutschland, binden keine Drittanbieter-Tracker ohne Einwilligung ein und integrieren ein geprüftes Impressum nach dem neuen Digitale-Dienste-Gesetz (§ 5 DDG).'
    },
    {
      num: '[05]',
      q: 'Können Sie auch bestehende WordPress-Seiten modernisieren (Relaunch)?',
      a: 'Ja. Wir übernehmen deine bestehenden Texte, Bilder und Domains und überführen sie in eine blitzschnelle Headless-React-Architektur mit < 0.4s Ladezeit und messbar höheren Google-Rankings.'
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#030712] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="luxury-pill mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Häufig gestellte Fragen</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Transparenz & Details.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-300">
            Alles, was du über Ablauf, Festpreise und moderne Web- & KI-Technologie wissen musst.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="luxury-card overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-emerald-400">{faq.num}</span>
                    <span className="font-display font-bold text-lg sm:text-xl text-white">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-500 text-slate-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
