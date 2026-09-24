import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';
import smokyHeroImg from '../images/smoky_headshop.jpg';

interface NeoCaseStudyProps {
  onOpenContact: () => void;
}

export default function NeoCaseStudy({ onOpenContact }: NeoCaseStudyProps) {
  const liveUrl = 'https://smoky-headshop.de/';
  const blueprint = [
    'React 19 Frontend',
    'Schema.org LocalBusiness',
    'Digitaler Produktkatalog',
    'Vorbestell-Workflow'
  ];

  return (
    <section id="portfolio" className="border-b border-white/[0.04] bg-[#09090b] text-white py-24 sm:py-32 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">Referenz &bull; Echte Praxis</span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
              Smoky Head&amp;Shisha Shop.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Keine erfundenen Agentur-Logos, sondern ein echtes, live überprüfbares Kundenprojekt: Wie ein handcodiertes React-Frontend, Local SEO und Vorbestell-Workflows ein lokales Ladenlokal digitalisieren.
          </p>
        </div>

        {/* 4 Core Highlight Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 font-mono">
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.06)]">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">&lt; 0.35s FCP</div>
            <div className="text-[10px] sm:text-xs text-emerald-300/80 uppercase mt-1 font-semibold">100/100 PageSpeed</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#111113] border border-white/[0.08]">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Top #1</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase mt-1">Google Maps Kerpen</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#111113] border border-white/[0.08]">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">100% DSGVO</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase mt-1">&sect; 5 DDG &amp; Jugendschutz</div>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/25">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">Zero Plugins</div>
            <div className="text-[10px] sm:text-xs text-emerald-300/80 uppercase mt-1 font-semibold">Reiner React 19 Code</div>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Visual: Browser Mockup */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111113] relative group">
              
              {/* Real Project Image with Zoom */}
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                <img
                  src={smokyHeroImg}
                  alt="Smoky Head&Shisha Shop Horrem"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Floating Location Pill */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#09090b]/90 backdrop-blur-md border border-white/[0.06] text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  <span>Bahnhofstraße 20, 50169 Kerpen</span>
                </div>
              </div>
            </div>

            {/* Architecture Pipeline */}
            <div className="p-4 rounded-xl bg-[#111113] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-zinc-400" />
                <span>Verdrahtete System-Architektur:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {blueprint.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300 font-medium">
                      {step}
                    </span>
                    {idx < blueprint.length - 1 && (
                      <span className="text-zinc-600 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.1] text-zinc-300 hover:text-white hover:bg-white/[0.04] font-sans font-medium text-sm transition-colors cursor-pointer group min-h-[44px]"
              >
                <span>Live-Plattform öffnen</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-[11px] font-mono text-zinc-500 text-center sm:text-right">
                Status: Live &amp; Top #1 Google Maps
              </span>
            </div>
          </div>

          {/* Right Details: Challenge, Solution, Measurable Result */}
          <div className="lg:col-span-5 bg-[#111113] border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 h-full">
            <div>
              <span className="text-xs font-mono text-zinc-500 block mb-2">
                Handel &bull; Lokales Ladenlokal
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Digitale Vor-Ort-Präsenz mit System.
              </h3>
            </div>

            <div className="space-y-4 text-xs font-sans">
              
              {/* Challenge */}
              <div className="bg-[#0a0a0c] rounded-xl p-4 border border-white/[0.04] space-y-1">
                <span className="text-xs font-mono uppercase text-zinc-500 block tracking-wider">
                  Ausgangssituation:
                </span>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Das Ladenlokal an der Bahnhofstraße 20 in Kerpen-Horrem verfügte über keine eigene Homepage. Lokale Suchanfragen liefen ins Leere, und wiederkehrende Sortiments- und Verfügbarkeitsfragen banden im Geschäftsbetrieb viel Zeit.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#0a0a0c] rounded-xl p-4 border border-white/[0.04] space-y-1">
                <span className="text-xs font-mono uppercase text-zinc-500 block tracking-wider">
                  Lösung:
                </span>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Entwicklung einer blitzschnellen React 19 Web-Plattform im edlen Dark-Smoke-Design. Vollständige Schema.org Integration für Google Maps, interaktiver Produktkatalog für Shishas, Vapes &amp; Zubehör sowie Vorbestell-Workflows zur Entlastung des Personals.
                </p>
              </div>

              {/* Result */}
              <div className="bg-emerald-950/20 rounded-xl p-4 border border-emerald-500/30 space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold block tracking-wider">
                  Messbares Ergebnis:
                </span>
                <p className="text-white text-xs leading-relaxed font-medium">
                  100/100 PageSpeed-Score auf Mobilgeräten (&lt; 0.35s Ladezeit), Platz #1 bei Google für lokale Suchanfragen in Kerpen &amp; Erftkreis und reibungslose Kundenabwicklung vor Ort.
                </p>
              </div>

            </div>

            {/* Next Case Prompt */}
            <div className="pt-4 border-t border-white/[0.04] space-y-4 mt-auto">
              <div className="text-xs font-sans text-zinc-300 leading-relaxed">
                <strong className="text-white">100% Echte Arbeit:</strong> Ich zeige hier keine Dummy-Logos. Smoky Headshop ist echt, live und nachprüfbar. Du bekommst meine volle Senior-Aufmerksamkeit als mein nächstes Vorzeige-Projekt.
              </div>
              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-sans font-semibold text-sm px-5 py-2.5 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] cursor-pointer min-h-[44px]"
              >
                <span>Projekt als nächste Referenz anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
