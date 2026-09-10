import React from 'react';
import { Check } from 'lucide-react';

export default function ProcessRoadmap() {
  const steps = [
    {
      num: '01',
      title: 'Erstgespräch & Vorprüfung',
      timeframe: 'Tag 1–3',
      desc: 'Wir sprechen 20–30 Minuten via Videocall oder Telefon. Wir klären, was du brauchst, welche Tools du nutzt und wo Automatisierung Sinn macht.',
      deliverables: ['Anforderungs-Check', 'Konkrete Machbarkeitsprüfung', 'Transparenter Festpreis']
    },
    {
      num: '02',
      title: 'Design & Prototyp',
      timeframe: 'Woche 1',
      desc: 'Ich erstelle einen klaren, reduzierten Entwurf. Keine endlosen Schleifen, sondern ein abgestimmtes Layout, das du direkt im Browser begutachten kannst.',
      deliverables: ['Interaktiver Layout-Entwurf', 'Struktur der Inhaltsblöcke', 'Festlegung der Formulardaten']
    },
    {
      num: '03',
      title: 'Code & Automation',
      timeframe: 'Woche 2–3',
      desc: 'Umsetzung mit modernem React und Tailwind. Parallel richte ich die n8n-Workflows ein, damit Formulareingaben fehlerfrei in deinen Zieltools landen.',
      deliverables: ['Handgeschriebenes Frontend', 'Verdrahtete Webhook-Pipelines', 'DSGVO-Basiskonfiguration']
    },
    {
      num: '04',
      title: 'Launch & Übergabe',
      timeframe: 'Woche 4',
      desc: 'Finale Prüfung aller Abläufe, Live-Schaltung auf deiner Domain und Übergabe des vollständigen Codes. Du hast ab Tag 1 die volle Kontrolle.',
      deliverables: ['Live-Schaltung auf deiner Domain', 'Git-Repository-Zugang', 'Kurze Video-Einweisung']
    }
  ];

  return (
    <section id="ablauf" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
            [ DER ABLAUF ]
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
            Klarer Ablauf. Keine Hängepartie.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            In 4 Schritten von der Idee zur fertigen Website mit funktionierenden Prozessen.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div 
              key={s.num}
              className="rounded-2xl border border-white/[0.08] bg-[#111114] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    {s.timeframe}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-sans font-semibold text-white tracking-tight">
                  {s.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  Ergebnis:
                </span>
                {s.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-300 font-sans">
                    <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
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
