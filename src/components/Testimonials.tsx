import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck, Sparkles, ArrowUpRight, Zap } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="kundenstimmen" className="py-20 sm:py-28 bg-[#09090b] border-t border-white/[0.07] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-[11px] font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.08)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verifiziertes Feedback &bull; Echte Partnerschaft</span>
          </div>

          <h2 className="font-sans font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Echte Resultate. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              Direkt aus der Praxis.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Keine gekauften Fake-Reviews oder erfundenen Logos. Ich stehe für messbare Ergebnisse und transparente Zusammenarbeit auf Augenhöhe.
          </p>
        </div>

        {/* 2-Column High-Trust Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Card: Verified Client Review (Smoky Headshop) */}
          <div className="lg:col-span-7 luxury-card p-6 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden border border-emerald-500/20 bg-gradient-to-b from-[#111114] to-[#0d0d10]">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">Verifizierte Referenz</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-mono font-bold text-white ml-1">5.0</span>
                </div>
              </div>

              <div className="relative pt-2">
                <Quote className="w-8 h-8 text-emerald-500/20 absolute -top-2 -left-1 -z-10" />
                <p className="font-sans text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                  „Alexander hat unseren Webauftritt für das Ladenlokal in Horrem von Grund auf neu gebaut. Die Seite lädt blitzschnell auf jedem Smartphone, sieht extrem hochwertig aus und wir werden im Erftkreis endlich ganz oben bei Google gefunden. Schnelle Abstimmung, direkte Umsetzung — genau so muss professionelle Zusammenarbeit laufen.“
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-sans font-bold text-white text-base">Smoky Head&amp;Shisha Shop</h4>
                <span className="text-xs font-mono text-zinc-400 block mt-0.5">Bahnhofstraße 20, 50169 Kerpen-Horrem</span>
              </div>

              <a
                href="https://smoky-headshop.de/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors w-fit"
              >
                <span>smoky-headshop.de</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Card: Partner Commitment & Next Project */}
          <div className="lg:col-span-5 luxury-card p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-[#111114]">
            
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Senior-Garantie</span>
              </span>

              <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white tracking-tight">
                Dein Projekt als nächste Referenz?
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Ich nehme pro Quartal nur eine begrenzte Anzahl an neuen Aufträgen an. Das garantiert dir meine persönliche Aufmerksamkeit ohne Agentur-Wasserkopf, schnelle Abstimmungen und einen Go-Live innerhalb von 14 Tagen.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direkter WhatsApp-Draht zu Alexander</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Eigentum an Quellcode &amp; Daten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verbindliche Festpreis-Garantie</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="#kontakt"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>15-Min. Audit sichern</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
