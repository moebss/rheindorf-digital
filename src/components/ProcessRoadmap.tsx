import React from 'react';
import { Check, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProcessRoadmap() {
  const steps = [
    {
      num: '01',
      title: 'Kennenlernen & Festpreis',
      timeframe: 'Tag 1–3',
      subline: '20 Min. Direktgespräch',
      desc: 'Wir telefonieren unverbindlich. Wir klären, was du brauchst (Website, Schnittstellen oder beides) und du bekommst ein klares Festpreis-Angebot ohne Nachverhandeln.',
      deliverables: ['Verständnis für deinen Betrieb', 'Kein Fachchinesisch', 'Verbindlicher Festpreis']
    },
    {
      num: '02',
      title: 'Entwurf & Texte',
      timeframe: 'Woche 1',
      subline: 'Klick-Entwurf im Browser',
      desc: 'Ich erstelle die Struktur, formuliere die Texte und baue den ersten Klick-Entwurf direkt im Browser. Du siehst sofort auf deinem Handy, wie deine Seite wirkt.',
      deliverables: ['Erster Entwurf live im Browser', 'Texte fertig ausformuliert', 'Direktes Feedback 1:1']
    },
    {
      num: '03',
      title: 'Umsetzung & Anbindung',
      timeframe: 'Woche 2–3',
      subline: 'Handgemachter Code & Abläufe',
      desc: 'Ich programmiere deine Seite von Grund auf sauber durch und richte deine Schnittstellen ein (WhatsApp-Meldungen, Terminkalender, sichere Formulare).',
      deliverables: ['Blitzschnelle Ladezeit (< 0.4s)', 'Formulare & WhatsApp getestet', '100% DSGVO ohne Cookie-Zwang']
    },
    {
      num: '04',
      title: 'Go-Live & Schlüsselübergabe',
      timeframe: 'Woche 4',
      subline: 'Schlüsselfertig online',
      desc: 'Deine Seite geht auf deiner Wunsch-Domain online. Du bekommst alle Zugänge, den vollen Quellcode und bist zu 100% unabhängig. Wenn gewünscht, übernehme ich auch die Pflege.',
      deliverables: ['Schlüsselfertig online', 'Volles Eigentum am Code', 'Optionale laufende Betreuung']
    }
  ];

  return (
    <section id="ablauf" className="py-20 sm:py-28 border-b border-stone-900/[0.08] bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Zusammenarbeit &bull; 4-Wochen-Fahrplan</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 leading-tight">
              Klarer Ablauf. Keine Hängepartie.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Vom ersten Telefonat bis zur fertigen Website – ohne Agentur-Umwege, ohne endlose Meetings und ohne wochenlanges Warten.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s) => (
              <div 
                key={s.num}
                className="rounded-3xl border border-stone-900/[0.08] bg-white p-6 sm:p-7 flex flex-col justify-between group hover:border-emerald-400 hover:shadow-[0_12px_30px_rgba(28,25,23,0.05)] transition-all duration-300 shadow-xs relative"
              >
                <div>
                  {/* Step Header with Clean Space Mono Timeframe */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-900/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center">
                        {s.num}
                      </div>
                      <span className="text-xs font-mono font-bold text-stone-900">
                        {s.timeframe}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                      {s.subline}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-display font-bold text-stone-900 tracking-tight">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-stone-900/[0.08] space-y-2">
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
