import React from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Zap, Cpu, Sparkles } from 'lucide-react';
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
    <section className="relative pt-32 sm:pt-40 pb-20 md:pb-28 border-b border-white/[0.07] overflow-hidden">
      {/* Background ambient lighting - subtle, non-intrusive */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Monospace System Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 text-[11px] font-mono tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Studio für Interfaces & Automation</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-500">Köln / NRW & Remote</span>
        </div>

        {/* Hero Grid: Typography on Left, Portrait / Signal Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 flex flex-col">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-semibold tracking-[-0.035em] text-white leading-[1.08] text-balance">
              High-End Webdesign &amp; automatisierte Prozesse.
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 font-sans leading-relaxed max-w-2xl text-pretty">
              Wir entwickeln kompromisslos schnelle digitale Flagships und verbinden sie mit intelligenten Backend-Pipelines. Kein Agentur-Wasserkopf, kein WordPress-Ballast — sondern millimetergenauer Code, der planbar Kunden gewinnt und Routinearbeit eliminiert.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-all cursor-pointer active:scale-[0.98] shadow-sm"
              >
                <span>Projekt anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToArchitecture}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/15 bg-white/[0.02] text-zinc-300 font-mono text-xs uppercase tracking-wider font-medium hover:bg-white/[0.06] hover:border-white/25 transition-all cursor-pointer"
              >
                <span>System-Architektur</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Minimalist Profile / Craft Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#111114] p-5 shadow-2xl">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                <img 
                  src={heroPortrait} 
                  alt="Alexander Rheindorf" 
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-[#09090b]/90 backdrop-blur-md border border-white/10">
                  <div>
                    <div className="text-xs font-semibold text-white font-sans">Alexander Rheindorf</div>
                    <div className="text-[10px] font-mono text-zinc-400">Founder &amp; Principal Architect</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Quick Philosophy Quote */}
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col gap-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  Leitgedanke
                </div>
                <p className="text-xs text-zinc-300 font-sans italic leading-normal">
                  „Design stiftet Vertrauen. Prozesse schaffen operative Freiheit.“
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Architectural Baseline Benchmarks */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-white tracking-tight">
              &lt; 0.3s
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
              Global First Contentful Paint
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-white tracking-tight">
              100/100
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
              Lighthouse Performance
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-emerald-400 tracking-tight">
              -80%
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
              Manuelle Routinearbeit
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-white tracking-tight">
              0-Cookie
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
              DSGVO by Architecture
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
