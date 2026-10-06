import React from 'react';
import { Check, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProcessRoadmap() {
  const steps = [
    {
      num: '01',
      title: 'Kennenlernen & Festpreis',
      timeframe: 'Tag 1–3',
      subline: '20–30 Min. Telefonat',
      desc: 'Wir telefonieren ganz unverbindlich. Wir klären, was du brauchst (neue Website, Schnittstellen oder beides) und du bekommst ein klares Festpreis-Angebot ohne Nachverhandeln.',
      deliverables: ['Echtes Verständnis für deinen Betrieb', 'Kein Fachchinesisch', 'Verbindlicher Festpreis']
    },
    {
      num: '02',
      title: 'Entwurf & Texte',
      timeframe: 'Woche 1',
      subline: 'Klick-Entwurf im Browser',
      desc: 'Ich erstelle die Struktur, formuliere die Texte und baue den ersten Klick-Entwurf direkt im Browser. Du siehst sofort, wie deine Seite auf dem Smartphone wirkt.',
      deliverables: ['Erster Entwurf live im Browser', 'Texte fertig ausformuliert', 'Direktes Feedback 1:1']
    },
    {
      num: '03',
      title: 'Umsetzung & Feinschliff',
      timeframe: 'Woche 2–3',
      subline: 'React 19 & n8n Workflows',
      desc: 'Ich programmiere deine Seite mit modernstem React-Code oder richte deine automatischen n8n-Workflows ein (WhatsApp-Meldungen, Terminkalender, CRM-Einträge).',
      deliverables: ['Blitzschneller Code (< 0.4s)', 'Schnittstellen & Formulare getestet', '100% DSGVO ohne Cookie-Banner']
    },
    {
      num: '04',
      title: 'Go-Live & Übergabe',
      timeframe: 'Woche 4',
      subline: 'Schlüsselfertig online',
      desc: 'Deine Seite geht auf deiner Wunsch-Domain online. Du bekommst alle Zugänge, den vollen Quellcode und bist zu 100% unabhängig. Wenn gewünscht, übernehme ich auch die Pflege.',
      deliverables: ['Online ab Tag 1', 'Volles Eigentum am Code', 'Optionale laufende Betreuung']
    }
  ];

  return (
    <section id="ablauf" className="py-24 sm:py-32 border-b border-[#e7e3d8] bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
              Zusammenarbeit &bull; Schritt für Schritt
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 leading-tight">
              Klarer Ablauf. Keine Hängepartie.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Vom ersten Telefonat bis zur fertigen Website – ohne Agentur-Umwege, ohne endlose Meetings und ohne wochenlanges Warten.
          </p>
        </div>

        {/* Timeline Pipeline Ribbon on Desktop */}
        <div className="relative mt-8">
          
          {/* Subtle Horizontal Connecting Pipeline Line for Desktop */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 border-t-2 border-dashed border-[#dcd7cb] z-0" 
          />

          {/* Connected Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s, idx) => (
              <div 
                key={s.num}
                className="rounded-2xl border border-[#e7e3d8] bg-white p-6 sm:p-7 flex flex-col justify-between group hover:border-emerald-400 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 shadow-xs relative"
              >
                <div>
                  {/* Step Header with Node Pill */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                        {s.num}
                      </div>
                      <span className="text-xs font-mono font-semibold text-stone-800">
                        {s.timeframe}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 bg-emerald-50 font-semibold">
                      Phase {idx + 1}
                    </span>
                  </div>

                  {/* Subline Tag */}
                  <div className="mt-4 text-[11px] font-mono text-emerald-700 font-medium">
                    {s.subline}
                  </div>

                  <h3 className="mt-1.5 text-base sm:text-lg font-display font-bold text-stone-900 tracking-tight">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-stone-200/80 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-1 font-semibold">
                    Ergebnis:
                  </span>
                  {s.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Reassurance Footer Bar */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl border border-[#e7e3d8] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm text-stone-700 font-sans">
              <span className="font-semibold text-stone-900">Termingarantie:</span> Wir legen den Fertigstellungstermin im ersten Telefonat fest. Kein Aufschieben, kein Hängenlassen.
            </div>
          </div>
          <a
            href="#kontakt"
            className="shrink-0 text-xs sm:text-sm font-mono font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Projekt anfragen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
