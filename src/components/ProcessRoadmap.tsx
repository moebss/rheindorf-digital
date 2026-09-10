import React from 'react';
import { Search, PenTool, Terminal, Rocket, Check } from 'lucide-react';

export default function ProcessRoadmap() {
  const steps = [
    {
      num: '01',
      title: 'Audit & System-Architektur',
      timeframe: 'Woche 1',
      desc: 'Wir analysieren Ihre Positionierung, Zielgruppe und bestehende Schnittstellen. Wo verlieren Sie Anfragen? Welche manuellen Arbeitsschritte kosten Ihr Team täglich wertvolle Stunden?',
      deliverables: ['Prozess-Mapping & Engpassanalyse', 'Content- & Informationsarchitektur', 'Technologie- & API-Stack Blueprint']
    },
    {
      num: '02',
      title: 'Design-System & Prototyping',
      timeframe: 'Woche 2',
      desc: 'Wir entwickeln eine minimalistische, hochkarätige Designsprache in Figma. Typografie, Abstände und visuelle Hierarchie werden millimetergenau auf Ihre Markenidentität kalibriert.',
      deliverables: ['Interaktiver Klick-Prototyp', 'Figma Design-System & Token-Library', 'Conversion- & Intake-Flow-Design']
    },
    {
      num: '03',
      title: 'Code & Pipeline-Engineering',
      timeframe: 'Woche 3',
      desc: 'Handcodierte Umsetzung mit modernem React, Tailwind und TypeScript. Parallel binden wir n8n-Workflows, Webhooks und CRM-Pipelines an, damit das System ab Tag 1 autonom arbeitet.',
      deliverables: ['100/100 Lighthouse Performance Code', 'End-to-End Automatisierungs-Pipelines', 'Strikte Zero-Cookie DSGVO-Architektur']
    },
    {
      num: '04',
      title: 'Launch & Autonomie',
      timeframe: 'Woche 4',
      desc: 'Staging-Prüfung, finale Domain-Aufschaltung und Live-Schaltung aller Daten-Pipelines. Sie erhalten ein schlüsselfertiges System, das ohne teure Agentur-Wartungsverträge autark läuft.',
      deliverables: ['Production Deployment & DNS Sync', 'Dokumentiertes System-Dashboard', 'Volle Code- & Datenhoheit bei Ihnen']
    }
  ];

  return (
    <section id="methode" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
            [ DER PROZESS ]
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
            Vorhersehbar. Transparent. In 4 Wochen live.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Keine monatelangen Meetings ohne Ergebnis. Ein klar strukturierter Sprint vom ersten Gespräch bis zum schlüsselfertigen System.
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
