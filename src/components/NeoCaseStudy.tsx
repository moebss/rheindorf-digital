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
    <section id="portfolio" className="border-b border-[#e7e3d8] bg-[#f5f2eb]/60 py-24 sm:py-32 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
              Referenz &bull; Echte Praxis
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-stone-900 leading-tight">
              Smoky Head&amp;Shisha Shop.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Keine erfundenen Agentur-Logos, sondern ein echtes, live überprüfbares Kundenprojekt: Wie ein handcodiertes React-Frontend, Local SEO und Vorbestell-Workflows ein lokales Ladenlokal digitalisieren.
          </p>
        </div>

        {/* 4 Core Highlight Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 font-mono">
          <div className="p-4 rounded-2xl bg-white border border-[#e7e3d8] shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-emerald-700 tracking-tight">&lt; 0.35s</div>
            <div className="text-[10px] sm:text-xs text-stone-600 uppercase mt-1 font-semibold">100/100 Google Score</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#e7e3d8] shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">Top #1</div>
            <div className="text-[10px] sm:text-xs text-stone-500 uppercase mt-1">Google Maps Kerpen</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#e7e3d8] shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">100% DSGVO</div>
            <div className="text-[10px] sm:text-xs text-stone-500 uppercase mt-1">&sect; 5 DDG &amp; Jugendschutz</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#e7e3d8] shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-emerald-700 tracking-tight">Wartungsfrei</div>
            <div className="text-[10px] sm:text-xs text-stone-600 uppercase mt-1 font-semibold">Keine Plugin-Abstürze</div>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Visual: Browser Mockup */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#e7e3d8] bg-white relative group shadow-sm">
              
              {/* Real Project Image with Zoom */}
              <div className="relative overflow-hidden aspect-[16/10] bg-stone-900">
                <img
                  src={smokyHeroImg}
                  alt="Smoky Head&Shisha Shop Horrem"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Floating Location Pill */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#e7e3d8] text-xs font-mono text-stone-800 flex items-center gap-2 shadow-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Bahnhofstraße 20, 50169 Kerpen</span>
                </div>
              </div>
            </div>

            {/* Architecture Pipeline */}
            <div className="p-4 rounded-xl bg-white border border-[#e7e3d8] shadow-xs">
              <div className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verdrahtete System-Architektur:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {blueprint.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded bg-[#fbf9f5] border border-[#e7e3d8] text-stone-800 font-medium">
                      {step}
                    </span>
                    {idx < blueprint.length - 1 && (
                      <span className="text-stone-400 font-bold">→</span>
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
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#e7e3d8] bg-white text-stone-800 hover:text-emerald-800 hover:bg-[#fbf9f5] font-sans font-medium text-sm transition-colors cursor-pointer group min-h-[44px] shadow-xs"
              >
                <span>Live-Plattform öffnen</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-[11px] font-mono text-stone-500 text-center sm:text-right font-medium">
                Status: Live &amp; Top #1 Google Maps
              </span>
            </div>
          </div>

          {/* Right Details: Challenge, Solution, Measurable Result */}
          <div className="lg:col-span-5 bg-white border border-[#e7e3d8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 h-full shadow-xs">
            <div>
              <span className="text-xs font-mono text-stone-500 block mb-2 font-medium">
                Handel &bull; Lokales Ladenlokal
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Digitale Vor-Ort-Präsenz mit System.
              </h3>
            </div>

            <div className="space-y-4 text-xs font-sans">
              
              {/* Challenge */}
              <div className="bg-[#fbf9f5] rounded-xl p-4 border border-[#e7e3d8] space-y-1">
                <span className="text-xs font-mono uppercase text-stone-500 block tracking-wider font-semibold">
                  Ausgangssituation:
                </span>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Das Ladenlokal an der Bahnhofstraße 20 in Kerpen-Horrem verfügte über keine eigene Homepage. Lokale Suchanfragen liefen ins Leere, und wiederkehrende Sortiments- und Verfügbarkeitsfragen banden im Geschäftsbetrieb viel Zeit.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#fbf9f5] rounded-xl p-4 border border-[#e7e3d8] space-y-1">
                <span className="text-xs font-mono uppercase text-stone-500 block tracking-wider font-semibold">
                  Lösung:
                </span>
                <p className="text-stone-700 text-xs leading-relaxed">
                  Entwicklung einer blitzschnellen React 19 Web-Plattform im edlen Dark-Smoke-Design. Vollständige Schema.org Integration für Google Maps, interaktiver Produktkatalog für Shishas, Vapes &amp; Zubehör sowie Vorbestell-Workflows zur Entlastung des Personals.
                </p>
              </div>

              {/* Result */}
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-800 font-bold block tracking-wider">
                  Messbares Ergebnis:
                </span>
                <p className="text-stone-900 text-xs leading-relaxed font-medium">
                  100/100 PageSpeed-Score auf Mobilgeräten (&lt; 0.35s Ladezeit), Platz #1 bei Google für lokale Suchanfragen in Kerpen &amp; Erftkreis und spürbare Zeitersparnis bei Kundenanfragen vor Ort.
                </p>
              </div>

            </div>

            {/* Next Case Prompt */}
            <div className="pt-4 border-t border-[#e7e3d8] space-y-4 mt-auto">
              <div className="text-xs font-sans text-stone-600 leading-relaxed">
                <strong className="text-stone-900">100% Echte Arbeit:</strong> Ich zeige hier keine Dummy-Logos. Smoky Headshop ist echt, live und nachprüfbar. Du bekommst meine volle Senior-Aufmerksamkeit als mein nächstes Vorzeige-Projekt.
              </div>
              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm px-5 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(4,120,87,0.25)] hover:shadow-[0_6px_20px_rgba(4,120,87,0.35)] cursor-pointer min-h-[44px]"
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
