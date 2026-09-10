import React from 'react';

export default function PhilosophyManifesto() {
  const principles = [
    {
      index: '01',
      title: 'Form folgt Funktion.',
      desc: 'Keine visuellen Spielereien, die vom Inhalt ablenken. Gute Gestaltung schafft sofortiges Vertrauen und sorgt dafür, dass Besucher ohne Reibung Kontakt aufnehmen.',
      tag: 'Klarheit'
    },
    {
      index: '02',
      title: 'Code statt Plugin-Friedhof.',
      desc: 'Kein überladenes WordPress, keine 40 Plugins mit Sicherheitslücken. Handgeschriebener Code lädt blitzschnell und funktioniert auch nach Jahren noch zuverlässig.',
      tag: 'Handwerk'
    },
    {
      index: '03',
      title: 'Automation statt Copy-Paste.',
      desc: 'Wiederkehrende Datenübertragungen zwischen CRM, E-Mail, Buchhaltung und Tools gehören automatisiert. Software soll deinen Alltag entlasten — verlässlich, lautlos und ohne manuelle Fleißarbeit.',
      tag: 'Effizienz'
    },
    {
      index: '04',
      title: 'Verlässliche Partnerschaft & Wartung.',
      desc: 'Nach dem Projektstart lasse ich dich nicht allein. Ob monatliche Pflege deiner Website oder laufendes Monitoring und Ausbau deiner n8n-Workflows: Ich halte deine Systeme dauerhaft stabil.',
      tag: 'Service'
    }
  ];

  return (
    <section id="prinzipien" className="py-20 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
            [ PRINZIPIEN ]
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-white">
            Vier Grundsätze für solide Software.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Wie ich arbeite, worauf ich achte und warum ich viele typische Agentur-Methoden bewusst verwerfe.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {principles.map((p) => (
            <div 
              key={p.index}
              className="p-5 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#111114] flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-semibold text-emerald-400">
                    {p.index}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-950/20">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-sans font-semibold text-white tracking-tight">
                  {p.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
