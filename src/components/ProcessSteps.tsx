import React from 'react';
import { Sparkles, ArrowRight, Code2, Bot, Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProcessStepsProps {
  onOpenContact: () => void;
}

export default function ProcessSteps({ onOpenContact }: ProcessStepsProps) {
  const steps = [
    {
      num: '[01]',
      day: 'Tag 1',
      title: '15-Min. Potenzial-Audit',
      desc: 'Wir analysieren deinen Betrieb, deine Wettbewerber im Raum Köln/NRW und deine profitabelsten Dienstleistungen.',
      highlight: '100% Unverbindlich'
    },
    {
      num: '[02]',
      day: 'Tag 2 – 7',
      title: 'High-End Prototyping',
      desc: 'Wir entwickeln deinen individuellen Klick-Prototyp im echten Live-Browser mit handcodierter React-Performance.',
      highlight: 'Live Klick-Test'
    },
    {
      num: '[03]',
      day: 'Tag 8 – 12',
      title: 'KI-Voice & Automation',
      desc: 'Einrichtung deines 24/7 KI-Telefonassistenten mit Anruf-Routing, Kalenderabgleich und automatischer Lead-Zusammenfassung.',
      highlight: '24/7 Erreichbarkeit'
    },
    {
      num: '[04]',
      day: 'Tag 14',
      title: 'Go-Live & Dominanz',
      desc: 'Vollständiger Rollout mit Google Maps 3-Pack Schema.org JSON-LD, DSGVO-Test, SSL & Quellcode-Übergabe.',
      highlight: '100% Dein Eigentum'
    }
  ];

  return (
    <section id="prozess" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="luxury-pill">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Der Rheindorf 4-Schritte-Standard</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Von der Idee zur <br />
            <span className="text-emerald-400">digitalen Marktführerschaft.</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Keine wochenlangen Agentur-Schleifen. Wir liefern deinen interaktiven Prototyp in 7 Tagen und schalten dein System nach 14 Tagen live.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="luxury-card p-8 flex flex-col justify-between space-y-6 relative group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono font-black text-2xl text-emerald-400">{step.num}</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                    {step.day}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mt-5 mb-2.5">
                  {step.title}
                </h3>

                <p className="font-mono text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenContact}
            className="luxury-btn-primary text-xs"
          >
            <span>Jetzt unverbindliches Potenzial-Audit starten</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
