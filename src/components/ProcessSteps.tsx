import React from 'react';
import { Search, PenTool, Bot, TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react';

interface ProcessStepsProps {
  onOpenContact?: () => void;
}

export default function ProcessSteps({ onOpenContact }: ProcessStepsProps) {
  const steps = [
    {
      num: '[1]',
      title: '15-Min. Potenzial-Audit',
      subtitle: 'Analyse & Hebel-Identifikation',
      desc: 'Wir prüfen deine aktuelle Website, Ladezeiten, Google-Maps-Sichtbarkeit und errechnen deinen verpassten Umsatz durch unbeantwortete Anrufe.',
      icon: Search,
      badge: 'Schritt 1',
    },
    {
      num: '[2]',
      title: 'High-End Prototyping',
      subtitle: 'Maßgeschneidert in 7 Tagen',
      desc: 'Keine PDF-Konzepte. Du erhältst einen voll interaktiven, hochmodernen Klick-Prototyp im echten Browser – exakt auf deine Zielgruppe im Raum Köln/NRW abgestimmt.',
      icon: PenTool,
      badge: 'Schritt 2',
    },
    {
      num: '[3]',
      title: 'KI-Voice & Deployment',
      subtitle: '24/7 Anruf-Assistent & Headless Build',
      desc: 'Wir trainieren deinen KI-Telefonassistenten auf deine Preise & Notdienste, binden WhatsApp & Kalender an und deployen dein Web-System mit 100/100 PageSpeed.',
      icon: Bot,
      badge: 'Schritt 3',
    },
    {
      num: '[4]',
      title: 'Dominante Marktführerschaft',
      subtitle: 'Automatisierte Neukundengewinnung',
      desc: 'Dein Betrieb gewinnt planbar lukrative Aufträge, während du auf der Baustelle oder im Kundentermin bist. 100% Eigentum ohne monatliche Knebel-Abos.',
      icon: TrendingUp,
      badge: 'Schritt 4',
    },
  ];

  return (
    <section id="prozess" className="py-24 sm:py-32 bg-[#04060A] relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Plexify Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="plexify-pill text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4">
            <span>// Der 4-Schritte-Standard</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
            Explore Our Work Process
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Von der ersten Potenzialanalyse bis zum schlüsselfertigen High-End Web- & KI-System – schnell, transparent, ohne Agentur-Blabla.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="plexify-card p-8 bg-[#080C14]/90 border-white/10 hover:border-emerald-500/40 flex flex-col justify-between group relative min-h-[380px]"
            >
              {/* Top Step Pill & Number */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-black text-4xl sm:text-5xl text-white group-hover:text-emerald-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block font-bold">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs font-mono text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Subtle Milestone Indicator */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-slate-500 font-mono text-[11px]">
                <span>Phase 0{idx + 1}</span>
                <span className="group-hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Track CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#090D18] border border-white/12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white">
              Bereit, deinen Betrieb auf das nächste Level zu heben?
            </h4>
            <p className="font-mono text-xs text-slate-400">
              Kostenlose 15-Minuten-Analyse für Betriebe im Raum Köln, Kerpen & Erftkreis.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="group shrink-0 plexify-btn plexify-btn-primary"
          >
            <span>Jetzt Potenzial prüfen</span>
            <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-slate-950 group-hover:text-emerald-400 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
