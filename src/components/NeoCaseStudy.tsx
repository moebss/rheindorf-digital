import React from 'react';
import { ArrowUpRight, CheckCircle2, Globe, Sparkles, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import smokyHeroImg from '../images/smoky_headshop.jpg';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

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
    <section id="portfolio" className="border-b border-white/[0.07] bg-[#09090b] text-white py-20 sm:py-28 relative overflow-hidden">
      
      {/* Luxury Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.08)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Referenz &bull; 100% Echtes Live-Projekt</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white leading-tight">
              Smoky Head&amp;Shisha Shop <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
                Kerpen-Horrem.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Keine erfundenen Mockups, sondern eine echte, live überprüfbare Plattform: Wie ein handcodiertes React-Frontend, Local SEO und Vorbestell-Workflows ein lokales Ladenlokal digitalisieren.
          </p>
        </div>

        {/* 3 Core Highlight Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 font-mono">
          <div className="p-4 rounded-2xl bg-[#111114] border border-white/10">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">&lt; 0.35s FCP</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase mt-1">100/100 PageSpeed</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#111114] border border-white/10">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">Top #1</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase mt-1">Google Maps Kerpen</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#111114] border border-white/10">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">100% DSGVO</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase mt-1">§ 5 DDG &amp; Jugendschutz</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#111114] border border-white/10">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">Zero Plugins</div>
            <div className="text-[10px] sm:text-xs text-zinc-400 uppercase mt-1">Reiner React 19 Code</div>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="rounded-3xl border border-white/10 bg-[#111114] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Visual: Browser Mockup */}
          <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 bg-[#0d0d10] border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#09090b] shadow-2xl relative group">
              
              {/* Browser Window Header */}
              <div className="px-4 py-3 bg-[#16161a] border-b border-white/10 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 truncate max-w-[240px]">
                  <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>smoky-headshop.de</span>
                </div>
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Öffnen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Real Project Image with Zoom */}
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                <img
                  src={smokyHeroImg}
                  alt="Smoky Head&Shisha Shop Horrem"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Floating Location Pill */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#09090b]/90 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Bahnhofstraße 20, 50169 Kerpen</span>
                </div>
              </div>
            </div>

            {/* Architecture Pipeline */}
            <div className="p-4 rounded-xl bg-[#09090b] border border-white/10">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verdrahtete System-Architektur:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {blueprint.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-medium">
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
                onClick={playSuccessSound}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer group"
              >
                <span>Live-Plattform ansehen</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-emerald-400" />
              </a>

              <span className="text-[11px] font-mono text-zinc-500 text-center sm:text-right">
                Status: Erfolgreich live &amp; rankend
              </span>
            </div>
          </div>

          {/* Right Details: Challenge, Solution, Measurable Result */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 bg-[#111114]">
            <div>
              <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-widest block mb-2">
                Handel &bull; Lokales Ladenlokal
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Digitale Vor-Ort-Präsenz mit System.
              </h3>
            </div>

            <div className="space-y-4 text-xs font-sans">
              
              {/* Challenge */}
              <div className="p-4 rounded-xl bg-[#09090b] border border-white/5 space-y-1">
                <span className="font-mono font-bold text-rose-400 uppercase block text-[10px] tracking-wider">
                  Ausgangssituation &amp; Herausforderung:
                </span>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Das Ladenlokal an der Bahnhofstraße 20 in Kerpen-Horrem verfügte über keine eigene Homepage. Lokale Suchanfragen liefen ins Leere, und wiederkehrende Sortiments- und Verfügbarkeitsfragen banden im Geschäftsbetrieb viel Zeit.
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-[#09090b] border border-white/5 space-y-1">
                <span className="font-mono font-bold text-emerald-400 uppercase block text-[10px] tracking-wider">
                  Architektur &amp; Lösung:
                </span>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Entwicklung einer blitzschnellen React 19 Web-Plattform im edlen Dark-Smoke-Design. Vollständige Schema.org Integration für Google Maps, interaktiver Produktkatalog für Shishas, Vapes &amp; Zubehör sowie Vorbestell-Workflows zur Entlastung des Personals.
                </p>
              </div>

              {/* Result */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/25 space-y-1">
                <span className="font-mono font-bold text-emerald-300 uppercase block text-[10px] tracking-wider">
                  Messbares Ergebnis:
                </span>
                <p className="text-white text-xs leading-relaxed font-semibold">
                  100/100 PageSpeed-Score auf Mobilgeräten (&lt; 0.35s Ladezeit), Platz #1 bei Google für lokale Suchanfragen in Kerpen &amp; Erftkreis und reibungslose Kundenabwicklung vor Ort.
                </p>
              </div>

            </div>

            {/* Next Case Prompt */}
            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <div className="text-xs font-sans text-zinc-400 leading-relaxed">
                <strong className="text-white">Transparenz vor Agentur-Fassade:</strong> Ich präsentiere hier nur echte, verifizierbare Kundenarbeiten. Bereit, dass dein Unternehmen das nächste Flagship-Projekt wird?
              </div>
              <button
                onClick={() => {
                  playSuccessSound();
                  onOpenContact();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>15-Min. Audit für dein Projekt anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
