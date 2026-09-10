import React from 'react';
import { Check } from 'lucide-react';

export default function ProcessRoadmap() {
  const steps = [
    {
      num: '01',
      title: 'Scope & Bedarfsanalyse',
      timeframe: 'Tag 1–3',
      desc: 'Wir sprechen 20–30 Minuten via Videocall oder Telefon. Wir definieren den konkreten Schwerpunkt: Reines Webdesign, interne Prozess-Automation oder beides kombiniert.',
      deliverables: ['Präzise Zieldefinition', 'Technische Machbarkeitsprüfung', 'Transparenter Festpreis']
    },
    {
      num: '02',
      title: 'Konzeption & Architektur',
      timeframe: 'Woche 1',
      desc: 'Bei Webdesign: Struktur, Typografie und interaktiver Entwurf im Browser. Bei Prozessen: Mapping der Datenfelder und APIs zwischen deinen bestehenden Tools.',
      deliverables: ['Layout- oder Workflow-Konzept', 'Definition aller Schnittstellen', 'Direktes Feedback ohne Schleifen']
    },
    {
      num: '03',
      title: 'Umsetzung & Setup',
      timeframe: 'Woche 2–3',
      desc: 'Bei Webdesign: Kompromisslos schneller React- und Tailwind-Code. Bei Prozessen: Aufbau und Testen der n8n-Workflows, Webhooks und Benachrichtigungen.',
      deliverables: ['Saubere Code-Basis / n8n-Nodes', 'Umfassende Praxistests', 'DSGVO-konforme Datenwege']
    },
    {
      num: '04',
      title: 'Go-Live, Übergabe & Wartung',
      timeframe: 'Woche 4',
      desc: 'Live-Schaltung auf deiner Domain bzw. Aktivierung der Pipelines im Produktivbetrieb. Vollständige Übergabe aller Zugänge plus optionaler monatlicher Wartungsservice.',
      deliverables: ['Produktivbetrieb ab Tag 1', 'Volle Kontrolle & alle Zugänge', 'Optionale monatliche Betreuung']
    }
  ];

  return (
    <section id="ablauf" className="py-20 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
            [ DER ABLAUF ]
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
            Klarer Ablauf. Keine Hängepartie.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Ob neue Website, interne Prozess-Automation oder das kombinierte Gesamtpaket: In 4 Phasen vom ersten Gespräch bis zum reibungslosen Produktivbetrieb.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div 
              key={s.num}
              className="rounded-2xl border border-white/[0.08] bg-[#111114] p-5 sm:p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-950/20">
                    {s.timeframe}
                  </span>
                </div>

                <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-sans font-semibold text-white tracking-tight">
                  {s.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  Ergebnis:
                </span>
                {s.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-300 font-sans">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
