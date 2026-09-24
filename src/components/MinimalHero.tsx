import React from 'react';
import heroPortrait from '../images/hero_rheindorf.jpg';

interface MinimalHeroProps {
  onOpenContact: () => void;
}

export default function MinimalHero({ onOpenContact }: MinimalHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 flex flex-col">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6 sm:mb-8">
              Webdesign & Automation • Köln
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-[-0.04em] text-white leading-[1.08] text-balance">
              High-Performance Frontends. <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">Nahtlos verdrahtet mit Backend-Infrastruktur.</span>
            </h1>

            <p className="mt-4 sm:mt-8 text-base sm:text-xl text-zinc-400 font-sans leading-relaxed max-w-2xl text-pretty">
              Ich baue schnelle Web-Plattformen und automatisiere Geschäftsprozesse. Direkt vom Senior-Entwickler – ohne Agentur-Overhead.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-sans text-sm font-medium transition-colors min-h-[44px]"
              >
                <span>Projekt anfragen</span>
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-white/[0.06] bg-[#111113] p-6 sm:p-8 hover:bg-[#18181b] transition-colors">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.06]">
                <img 
                  src={heroPortrait} 
                  alt="Alexander Rheindorf" 
                  className="w-full h-full object-cover object-[center_18%]"
                />
                
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 rounded-lg bg-[#111113] border border-white/[0.06]">
                  <div>
                    <div className="text-xs font-medium text-white font-sans">Alexander Rheindorf</div>
                    <div className="text-[10px] font-mono text-zinc-400">Webdesign & Automation</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                  „Kein Agentur-Wasserkopf: Ich baue moderne Web-Plattformen für deinen Auftritt und automatisiere interne Arbeitsabläufe in deinen Systemen.“
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Verfügbar für Q3/Q4 Projekte</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
