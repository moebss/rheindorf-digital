import React from 'react';
import { ArrowUpRight, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import heroPortrait from '../images/hero_rheindorf.jpg';

interface MinimalHeroProps {
  onOpenContact: () => void;
}

export default function MinimalHero({ onOpenContact }: MinimalHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#fbf9f5]">
      {/* Subtle Warm Emerald Ambient Depth */}
      <div 
        aria-hidden="true"
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-emerald-500/[0.07] rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-800 font-medium mb-6 sm:mb-8 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.7)]" />
              <span>Webdesign &amp; Prozesse • Kerpen, Köln &amp; Rheinland</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-[-0.04em] text-stone-900 leading-[1.08] text-balance">
              Websites, die Kunden gewinnen.{' '}
              <span className="text-emerald-800">
                Workflows, die dir Stunden sparen.
              </span>
            </h1>

            <p className="mt-4 sm:mt-8 text-base sm:text-xl text-stone-600 font-sans leading-relaxed max-w-2xl text-pretty">
              Ich baue blitzschnelle Websites und automatisiere manuelle Büroabläufe für Handwerksbetriebe, Praxen, Fachbetriebe und Dienstleister. Persönliche 1:1-Betreuung vom Senior-Entwickler – ohne Agentur-Overhead.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(4,120,87,0.25)] hover:shadow-[0_6px_25px_rgba(4,120,87,0.35)] min-h-[44px] cursor-pointer"
              >
                <span>Projekt unverbindlich anfragen</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="#rechner"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-stone-900/[0.08] bg-white hover:bg-[#f5f2eb] text-stone-800 hover:text-emerald-800 font-sans text-sm font-medium transition-all min-h-[44px] shadow-xs"
              >
                <span>Preisfinder &amp; Rechner ansehen ↓</span>
              </a>
            </div>

            {/* Anxiety-Relief Assurance Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-sans text-stone-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Keine Texte parat? Ich formuliere für dich</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Bestehende Seite? Relaunch ohne Google-Verlust</span>
              </span>
              <a 
                href="#website-check" 
                className="text-emerald-700 hover:text-emerald-800 font-medium underline underline-offset-4"
              >
                Kostenlosen Website-Check starten →
              </a>
            </div>

            {/* Live Trust & Tech Ticker */}
            <div className="mt-10 pt-8 border-t border-stone-900/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-1 min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono tracking-tight text-stone-900 flex items-center gap-1.5 flex-wrap">
                  <span>&lt; 0.4s</span>
                  <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">100/100</span>
                </div>
                <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Ladezeit &bull; Top-Score</div>
              </div>

              <div className="space-y-1 min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono tracking-tight text-emerald-700">Workflows</div>
                <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Voll automatisiert</div>
              </div>

              <div className="space-y-1 min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono tracking-tight text-stone-900">100% DSGVO</div>
                <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">&sect; 5 DDG Konform</div>
              </div>

              <div className="space-y-1 min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono tracking-tight text-emerald-700">1:1 Senior</div>
                <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Ohne Wasserkopf</div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-stone-900/[0.08] bg-white p-4 sm:p-5 hover:border-emerald-300 transition-all shadow-[0_10px_35px_rgba(28,25,23,0.04)]">
              {/* Natural Portrait Frame without intrusive overlay */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-900/[0.08]">
                <img 
                  src={heroPortrait} 
                  alt="Alexander Rheindorf" 
                  className="w-full h-full object-cover object-[center_55%] scale-[1.25] origin-[50%_42%] transition-transform duration-500"
                />
              </div>

              {/* Clean Caption Below Photo */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-stone-900 font-sans">Alexander Rheindorf</div>
                    <div className="text-xs font-mono text-emerald-700 font-medium">Inhaber &bull; Entwickler</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Aktiv &bull; Frei</span>
                  </span>
                </div>

                <div className="pt-3 border-t border-stone-900/[0.08] space-y-1">
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    „In 2 bis 3 Wochen zur schlüsselfertigen Website – 100 % DSGVO-konform, blitzschnell und ohne versteckte Folgekosten.“
                  </p>
                  <div className="text-[11px] font-mono text-stone-500 pt-0.5">
                    50&deg;53' N, 6&deg;42' E &bull; Kerpen / K&ouml;ln
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
