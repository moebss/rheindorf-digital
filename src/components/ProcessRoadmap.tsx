import React from 'react';
import { Check } from 'lucide-react';

export default function ProcessRoadmap() {
  const steps = [
    {
      num: '01',
      title: 'Bedarf & Festpreis',
      timeframe: 'Tag 1–3',
      desc: 'Wir sprechen 20–30 Minuten via Telefon oder Video. Wir klären dein Ziel (Webseite, Schnittstellen oder beides) und du erhältst ein verbindliches Festpreis-Angebot.',
      deliverables: ['Präzise Zieldefinition', 'Technische Prüfung', 'Verbindlicher Festpreis']
    },
    {
      num: '02',
      title: 'Konzept & Klick-Entwurf',
      timeframe: 'Woche 1',
      desc: 'Bei Webdesign: Struktur, Texte und erster interaktiver Entwurf direkt im Browser. Bei Prozessen: Mapping deiner Felder und Schnittstellen zwischen deinen Tools.',
      deliverables: ['Layout- oder Workflow-Konzept', 'Texte & Struktur geklärt', 'Direktes Feedback ohne Schleifen']
    },
    {
      num: '03',
      title: 'Umsetzung & Schnittstellen',
      timeframe: 'Woche 2–3',
      desc: 'Programmierung der blitzschnellen React- & Tailwind-Seiten oder Einrichtung der n8n-Workflows, Webhooks und automatischen E-Mail-/WhatsApp-Meldungen.',
      deliverables: ['Saubere Code-Basis', 'Umfassende Praxistests', '100% DSGVO-Konformität']
    },
    {
      num: '04',
      title: 'Go-Live & Übergabe',
      timeframe: 'Woche 4',
      desc: 'Live-Schaltung auf deiner Wunsch-Domain bzw. Produktivstart der Pipelines. Vollständige Übergabe aller Zugänge plus optionaler monatlicher Wartungsservice.',
      deliverables: ['Produktivbetrieb ab Tag 1', 'Volle Kontrolle & alle Zugänge', 'Optionale laufende Betreuung']
    }
  ];

  return (
    <section id="ablauf" className="py-20 sm:py-32 border-b border-[#e7e3d8] bg-[#fbf9f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
            4-Schritte Roadmap
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-display font-bold tracking-tight text-stone-900">
            Klarer Ablauf. Keine Hängepartie.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Ob neue Website, interne Prozess-Automation oder das kombinierte Gesamtpaket: In 4 Phasen vom ersten Gespräch bis zum reibungslosen Produktivbetrieb.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div 
              key={s.num}
              className="rounded-2xl border border-[#e7e3d8] bg-white p-5 sm:p-8 flex flex-col justify-between group hover:border-emerald-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-all duration-300 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#e7e3d8]">
                  <span className="font-mono text-sm font-bold text-emerald-700">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 bg-emerald-50 font-semibold">
                    {s.timeframe}
                  </span>
                </div>

                <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-display font-bold text-stone-900 tracking-tight">
                  {s.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-[#e7e3d8] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-2 font-semibold">
                  Ergebnis:
                </span>
                {s.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-stone-700 font-sans">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
