import React from 'react';
import { Layers, ShieldCheck, Cpu } from 'lucide-react';

export default function PhilosophyManifesto() {
  const theses = [
    {
      index: '01',
      title: 'Form folgt Funktion.',
      desc: 'Ästhetik ohne messbaren Nutzen ist bloße Dekoration. Jedes Interface muss Vertrauen stiften, Haltung beweisen und Reibung im Kopf des Nutzers auflösen. Reduktion ist kein Stilmittel, sondern das Fundament von Klarheit.',
      tag: 'Usability & Haltung'
    },
    {
      index: '02',
      title: 'Code ohne Altlasten.',
      desc: 'Keine trägen Page-Builder, keine 40 WordPress-Plugins und keine Sicherheitslücken. Handcodierte React- und TypeScript-Architektur garantiert weltweite Ladezeiten unter 300ms und kompromisslose Langlebigkeit.',
      tag: 'Engineering Exzellenz'
    },
    {
      index: '03',
      title: 'Das hybride Nervensystem.',
      desc: 'Eine Website ohne automatisierte Backend-Pipelines ist nur eine tote Broschüre. Wir verknüpfen Frontend-Exzellenz mit intelligenter n8n-, CRM- und API-Orchestrierung. Leads werden vollautomatisch qualifiziert, synchronisiert und vorbereitet.',
      tag: 'System-Synergie'
    }
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
            [ DAS MANIFEST ]
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-white">
            Drei Grundsätze für digitale Wertschöpfung.
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-sans leading-relaxed">
            Warum die meisten Web-Relaunches scheitern und wie moderne Unternehmen mit schlanker Technologie den Markt dominieren.
          </p>
        </div>

        {/* Theses Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {theses.map((thesis) => (
            <div 
              key={thesis.index}
              className="group relative p-8 rounded-2xl border border-white/[0.08] bg-[#111114] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-emerald-400 transition-colors">
                    {thesis.index}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-2 py-0.5 rounded border border-white/5 bg-white/[0.02]">
                    {thesis.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-sans font-semibold text-white tracking-tight">
                  {thesis.title}
                </h3>

                <p className="mt-4 text-sm text-zinc-400 font-sans leading-relaxed">
                  {thesis.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>Rheindorf Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
