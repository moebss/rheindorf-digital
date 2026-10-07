import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PhilosophyManifesto() {
  const principles = [
    {
      index: '01',
      tag: 'Klarheit',
      title: 'Klartext statt Klickibunti.',
      desc: 'Keine wirren Effekte, die von deinem Angebot ablenken. Wenn ein Kunde auf deine Website kommt, muss er in 3 Sekunden verstehen, was du tust – und mit einem Klick anrufen oder per WhatsApp schreiben können.'
    },
    {
      index: '02',
      tag: 'Stabilität',
      title: 'Handgeschriebener Code statt Plugin-Friedhof.',
      desc: 'Kein überladenes WordPress mit 40 Plugins, das nach jedem Update abstürzt oder Sicherheitslücken aufreißt. Sauberer, handgeschriebener Code lädt in 0.3 Sekunden, läuft jahrelang stabil und verursacht null Pflicht-Abo-Kosten.'
    },
    {
      index: '03',
      tag: 'Entlastung',
      title: 'Automatisieren statt Zettelwirtschaft.',
      desc: 'Wenn ein Kunde ein Formular ausfüllt, soll die Benachrichtigung sofort auf deinem Smartphone landen und die Daten im System sein. Du musst abends nicht mehr stundenlang Mails abtippen oder Termine manuell nachtragen.'
    },
    {
      index: '04',
      tag: 'Verlässlichkeit',
      title: 'Fester Partner vor Ort im Rheinland.',
      desc: 'Ich sitze in Kerpen bei Köln und bin greifbar. Kein Agentur-Wasserkopf, keine wechselnden Junioren, keine anonymen Ticket-Systeme. Du hast meine direkte Handynummer und sprichst immer mit dem Menschen, der deinen Code schreibt.'
    }
  ];

  return (
    <section id="prinzipien" className="py-20 sm:py-28 border-b border-stone-900/[0.08] bg-[#f8f5ee] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial 2-Column Split: Breaking the Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Haltung &bull; Mein Versprechen</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-stone-900 leading-[1.12] text-balance">
              Software muss deinen Betrieb entlasten – nicht beschäftigen.
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed pt-2">
              Keine künstlichen Buzzwords, keine Marketing-Floskeln. Ich baue Lösungen für Inhaber, die keine Zeit für Technik-Theater haben, sondern zuverlässige Werkzeuge wollen.
            </p>

            <div className="pt-4 border-t border-stone-900/[0.08]">
              <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>1:1 Senior-Verantwortung &bull; Kerpen / Rheinland</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Thesis Stream (No Box-Jail) */}
          <div className="lg:col-span-7 divide-y divide-stone-900/[0.08] border-y border-stone-900/[0.08]">
            {principles.map((p) => (
              <div 
                key={p.index}
                className="py-8 sm:py-10 first:pt-4 last:pb-4 group transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                      [{p.index}]
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                      {p.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-stone-400 group-hover:text-emerald-700 transition-colors">
                    Fokus &bull; Praxis
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
