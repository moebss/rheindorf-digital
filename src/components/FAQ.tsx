import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wie lange dauert die Umsetzung eines Projekts?',
      a: 'In der Regel steht dein erster interaktiver Klick-Prototyp innerhalb von 7 Tagen im Browser. Der vollständige Go-Live erfolgt nach maximal 14 Tagen. Durch den direkten Draht entfallen wochenlange Agentur-Schleifen.'
    },
    {
      q: 'Gibt es versteckte Folgekosten oder Abos?',
      a: 'Nein, zu 100% nicht. Wir arbeiten ausschließlich mit transparenten Festpreisen. Der gesamte Quellcode und alle Inhalte gehören nach Projektabschluss vollständig dir. Es gibt keinen Vendor-Lock-in.'
    },
    {
      q: 'Wie funktioniert die Prozess-Automatisierung?',
      a: 'Ich analysiere deine aktuellen Software-Tools. Über schlanke Workflow-Pipelines und REST-APIs werden wiederkehrende manuelle Schritte (Lead-Intake, Belegablage, Terminsynchronisation) lautlos und fehlerfrei automatisiert.'
    },
    {
      q: 'Ist die Web-Plattform DSGVO-konform?',
      a: 'Ja, kompromisslos. Alle Webfonts werden lokal auf deutschen Servern gehostet. Wir verzichten auf invasive Tracking-Cookies, wodurch deine Besucher kein Cookie-Banner wegklicken müssen.'
    },
    {
      q: 'Können Sie eine bestehende Seite modernisieren?',
      a: 'Ja. Wir übernehmen bestehende Texte, Bilder und Rankings und überführen sie in eine moderne Architektur. Das Ergebnis: extrem schnelle Ladezeiten und spürbar höhere Conversion-Raten.'
    },
    {
      q: 'Mit wem arbeite ich zusammen?',
      a: 'Ausschließlich mit mir persönlich. Von der ersten Architekturanalyse bis zum finalen Go-Live hast du einen direkten Draht zum ausführenden Senior-Entwickler.'
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#09090b] border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">FAQ &bull; Transparenz</span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Häufige Fragen.
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-white/[0.06] last:border-0"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 transition-colors group cursor-pointer"
                >
                  <span className={`font-sans font-medium text-base transition-colors ${
                    isOpen ? 'text-emerald-300' : 'text-white group-hover:text-emerald-200'
                  }`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'
                  }`} />
                </button>

                {isOpen && (
                  <div className="pb-5 font-sans text-sm text-zinc-400 leading-relaxed animate-in fade-in duration-200">
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
