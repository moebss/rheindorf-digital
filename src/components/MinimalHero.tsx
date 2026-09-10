import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import heroPortrait from '../images/hero_rheindorf.jpg';

interface MinimalHeroProps {
  onOpenContact: () => void;
}

export default function MinimalHero({ onOpenContact }: MinimalHeroProps) {
  const scrollToArchitecture = () => {
    const el = document.getElementById('architektur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-40 pb-16 sm:pb-24 border-b border-white/[0.07] overflow-hidden">
      
      {/* Luxury Ambient Emerald Diffusion Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[850px] h-[280px] sm:h-[420px] bg-gradient-to-b from-emerald-500/14 via-emerald-600/6 to-transparent blur-[80px] sm:blur-[130px] pointer-events-none rounded-full" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Monospace System Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-[11px] font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-[0_0_15px_rgba(16,185,129,0.08)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Entwickler &amp; Designer</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">Köln / Kerpen &amp; Remote</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 flex flex-col">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-semibold tracking-[-0.035em] text-white leading-[1.1] text-balance">
              Websites &amp; automatisierte Prozesse.
            </h1>

            <p className="mt-4 sm:mt-8 text-base sm:text-xl text-zinc-300 font-sans leading-relaxed max-w-2xl text-pretty">
              Ich baue schnelle Websites und automatisiere die Abläufe dahinter. Designer und Programmierer in einer Person — ohne Agentur-Wasserkopf, ohne 40 WordPress-Plugins und ohne Stille-Post-Management.
            </p>

            {/* CTAs with Mobile Optimization */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all cursor-pointer min-h-[48px]"
              >
                <span>Projekt anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToArchitecture}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-emerald-500/30 text-zinc-200 font-mono text-xs uppercase tracking-wider font-medium active:scale-[0.98] transition-all cursor-pointer min-h-[48px]"
              >
                <span>System-Architektur</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-white/10 bg-[#111114] p-4 sm:p-5 shadow-2xl hover:border-emerald-500/30 transition-colors">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                <img 
                  src={heroPortrait} 
                  alt="Alexander Rheindorf" 
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 rounded-lg bg-[#09090b]/90 backdrop-blur-md border border-white/10">
                  <div>
                    <div className="text-xs font-semibold text-white font-sans">Alexander Rheindorf</div>
                    <div className="text-[10px] font-mono text-emerald-400">Webdesign &amp; Automation</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/[0.08]">
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  „Eine Website bringt wenig, wenn Anfragen im Postfach verstauben. Ich verbinde sauberes Design mit automatisierten Abläufen.“
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Honest Baseline Guarantees */}
        <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
            <div className="text-xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              &lt; 0.5s
            </div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mt-1">
              Ladezeit Mobil &amp; Desktop
            </div>
          </div>

          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
            <div className="text-xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              100%
            </div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mt-1">
              Dein Code (Volle Rechte &amp; Git)
            </div>
          </div>

          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
            <div className="text-xl sm:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
              1:1
            </div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mt-1">
              Direktkontakt zum Entwickler
            </div>
          </div>

          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
            <div className="text-xl sm:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
              DSGVO
            </div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mt-1">
              Ohne Cookie-Banner-Zwang
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
