import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wie lange dauert die Umsetzung eines Projekts?',
      a: 'In der Regel steht dein erster interaktiver Klick-Prototyp innerhalb von 7 Tagen im Browser. Der vollständige Go-Live erfolgt nach maximal 14 bis 21 Tagen. Durch den direkten Draht zu mir entfallen wochenlange Agentur-Schleifen.'
    },
    {
      q: 'Gibt es versteckte Folgekosten oder Abos?',
      a: 'Nein, zu 100% nicht. Ich arbeite ausschließlich mit transparenten Festpreisen. Der gesamte Quellcode und alle Inhalte gehören nach Projektabschluss vollständig dir. Es gibt keinen Vendor-Lock-in.'
    },
    {
      q: 'Ab welchem Budget starten Projekte?',
      a: 'Onepages starten ab 490 €, vollwertige mehrseitige Firmen-Websites ab ca. 890 € und Workflows/Automation ab 390 €. Im unverbindlichen Erstgespräch klären wir deinen genauen Bedarf und du bekommst ein verbindliches Festpreis-Angebot – ohne Überraschungen.'
    },
    {
      q: 'Was muss ich als Kunde vorbereiten? Was ist, wenn ich keine Texte habe?',
      a: 'Du musst keine fertigen Texte liefern! Wenn du Notizen, ein Logo oder alte Unterlagen hast, reicht das völlig. Wir besprechen dein Angebot in 30 Minuten und ich formuliere verständliche, überzeugende Texte für dich. Bei Bedarf erstelle ich auch passende visuelle Assets.'
    },
    {
      q: 'Kannst du eine bestehende, alte Website modernisieren?',
      a: 'Ja. Wir übernehmen bestehende Texte, Bilder, Domains und gewonnene Google-Rankings und überführen sie in eine saubere, blitzschnelle Architektur. Das Ergebnis: sofortige Ladezeiten und mehr Kundenanfragen – ohne Ranking-Verlust.'
    },
    {
      q: 'Wie funktioniert die Prozess-Automatisierung?',
      a: 'Ich analysiere deine aktuellen Software-Tools. Über schlanke Workflow-Pipelines werden wiederkehrende manuelle Schritte (Lead-Intake, Belegablage, Terminsynchronisation) lautlos und fehlerfrei automatisiert. Du merkst es vor allem daran, dass Aufgaben einfach erledigt sind – ohne dass jemand tippen musste.'
    },
    {
      q: 'Ist die Website DSGVO-konform?',
      a: 'Ja, kompromisslos. Alle Schriftarten werden lokal gehostet – kein Google-Fonts-Ping in die USA. Ich verzichte auf invasive Tracking-Cookies, wodurch deine Besucher kein nerviges Cookie-Banner wegklicken müssen.'
    },
    {
      q: 'Mit wem arbeite ich zusammen?',
      a: 'Ausschließlich mit mir persönlich. Von der ersten Analyse bis zum finalen Go-Live hast du einen direkten Draht zum ausführenden Senior-Entwickler – kein Projektmanager-Pingpong.'
    },
    {
      q: 'Was passiert nach dem Launch?',
      a: 'Ich biete optionale monatliche Pflegepakete (ab 29 €/Monat) für Updates, Sicherheits-Checks und Monitoring an. Du kannst die Website aber auch komplett eigenständig betreiben – der gesamte Code gehört dir.'
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#fbf9f5] border-t border-[#e7e3d8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
            FAQ &bull; Transparenz
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
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
                className="border-b border-[#e7e3d8] last:border-0"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 transition-colors group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className={`font-sans font-medium text-base transition-colors ${
                    isOpen ? 'text-emerald-800 font-semibold' : 'text-stone-900 group-hover:text-emerald-700'
                  }`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-all duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-emerald-700' : 'text-stone-400 group-hover:text-stone-600'
                  }`} />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    className="pb-5 font-sans text-sm text-stone-600 leading-relaxed animate-in fade-in duration-200"
                  >
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
