import React from 'react';
import { Zap, ShieldCheck, Cpu, Trophy, Star, ArrowUpRight } from 'lucide-react';

export default function TrustStrip() {
  const metrics = [
    {
      num: '100%',
      label: 'Google PageSpeed Score',
      desc: 'Maximale Bewertung in Performance, SEO, Best Practices & Accessibility.',
    },
    {
      num: '24/7',
      label: 'KI-Anrufannahme',
      desc: 'Kein verlorener Notdienst- oder Neukundenanruf – auch nachts & am Wochenende.',
    },
    {
      num: '0.4s',
      label: 'Ladezeit (FCP)',
      desc: 'Sub-Sekunden Auslieferung statt träger WordPress-Ladebalken.',
    },
    {
      num: '+340%',
      label: 'Lead-Steigerung',
      desc: 'Durch interaktive Kalkulatoren & messerscharfe Conversion-Architektur.',
    },
  ];

  const marqueeItems = [
    'HIGH-END WEBDESIGN',
    '24/7 KI-TELEFONASSISTENTEN',
    'HEADLESS REACT & TAILWIND',
    'LOCAL SEO & GOOGLE MAPS 3-PACK',
    'INTERAKTIVE BAD- & PREISRECHNER',
    'ZERO WORDPRESS OVERHEAD',
    'KÖLN · KERPEN · ERFTKREIS · NRW',
    'HIGH-END WEBDESIGN',
    '24/7 KI-TELEFONASSISTENTEN',
    'HEADLESS REACT & TAILWIND',
    'LOCAL SEO & GOOGLE MAPS 3-PACK',
  ];

  return (
    <section className="py-16 sm:py-24 border-y border-white/10 bg-[#060910] relative overflow-hidden">
      
      {/* 1. Large Metrics Numbers Grid (Plexify Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-2">
              // Metriken & Performance-Garantie
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Zahlen, die Marktführer schaffen.
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Wir messen unseren Erfolg nicht an Design-Awards, sondern an echten Kundenanfragen, Sekunden Ladezeit und automatisierten Prozessen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="plexify-card p-6 sm:p-8 bg-[#090D18]/90 border-white/10 hover:border-emerald-500/30 group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-500">[{`0${idx + 1}`}]</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              </div>

              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                {item.num}
              </div>

              <div className="font-display font-bold text-base sm:text-lg text-slate-200 mb-2">
                {item.label}
              </div>

              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* 2. Continuous Sleek Marquee Text Trail (Plexify Style) */}
      <div className="w-full overflow-hidden py-4 bg-[#04060A] border-y border-white/5">
        <div className="animate-ticker flex items-center gap-6">
          {marqueeItems.concat(marqueeItems).map((text, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              <span className={`px-5 py-2 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                i % 3 === 0 
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                  : i % 3 === 1 
                  ? 'bg-white text-slate-950' 
                  : 'bg-[#0F1626] border border-white/15 text-slate-200'
              }`}>
                {text}
              </span>
              <span className="text-slate-600 font-mono text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
