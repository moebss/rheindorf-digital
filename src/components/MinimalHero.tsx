import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroPortrait from '../images/hero_rheindorf.jpg';

interface MinimalHeroProps {
  onOpenContact: () => void;
}

export default function MinimalHero({ onOpenContact }: MinimalHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Subtle Ambient Emerald Depth */}
      <div 
        aria-hidden="true"
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-emerald-500/[0.09] rounded-full blur-[130px] pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Webdesign &amp; Automation • Köln &amp; Remote</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-[-0.04em] text-white leading-[1.08] text-balance">
              High-Performance Frontends.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Nahtlos verdrahtet mit Backend-Infrastruktur.
              </span>
            </h1>

            <p className="mt-4 sm:mt-8 text-base sm:text-xl text-zinc-300 font-sans leading-relaxed max-w-2xl text-pretty">
              Ich baue moderne Web-Plattformen und automatisiere zeitraubende Geschäftsprozesse mit n8n. Direkt vom Senior-Entwickler aus Köln – ohne Agentur-Overhead.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-sans text-sm font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] min-h-[44px] cursor-pointer"
              >
                <span>Projekt anfragen</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-950" />
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-white/[0.08] bg-[#111113] p-5 sm:p-6 hover:border-emerald-500/30 transition-colors shadow-2xl">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.06]">
                <img 
                  src={heroPortrait} 
                  alt="Alexander Rheindorf" 
                  className="w-full h-full object-cover object-[center_18%]"
                />
                
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2.5 rounded-lg bg-[#09090b]/90 backdrop-blur-md border border-white/10">
                  <div>
                    <div className="text-xs font-semibold text-white font-sans">Alexander Rheindorf</div>
                    <div className="text-[10px] font-mono text-emerald-400">Webdesign &amp; Automation</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  „Kein Agentur-Wasserkopf: Ich baue moderne Web-Plattformen für deinen Auftritt und automatisiere interne Arbeitsabläufe in deinen Systemen.“
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-semibold">Verfügbar für neue Projekte</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
