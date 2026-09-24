import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="kundenstimmen" className="py-24 sm:py-32 bg-[#09090b] border-t border-white/[0.04] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Stimmen</span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Was Kunden sagen.
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Keine gekauften Fake-Reviews oder erfundenen Logos. Ich stehe für messbare Ergebnisse und transparente Zusammenarbeit auf Augenhöhe.
          </p>
        </div>

        {/* 2-Column High-Trust Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Card: Verified Client Review */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.06] bg-[#111113] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:bg-[#18181b] transition-colors">
            <p className="text-base sm:text-lg font-sans text-zinc-300 leading-relaxed italic">
              "Alexander hat unseren Webauftritt für das Ladenlokal in Horrem von Grund auf neu gebaut. Die Seite lädt blitzschnell auf jedem Smartphone, sieht extrem hochwertig aus und wir werden im Erftkreis endlich ganz oben bei Google gefunden. Schnelle Abstimmung, direkte Umsetzung — genau so muss professionelle Zusammenarbeit laufen."
            </p>

            <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-sans font-medium text-white text-sm">Alexander (Inhaber)</div>
                <div className="font-sans text-zinc-500 text-sm">Smoky Head&amp;Shisha Shop</div>
              </div>

              <a
                href="https://smoky-headshop.de/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-sans text-zinc-400 hover:text-white transition-colors w-fit"
              >
                <span>smoky-headshop.de</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Card: Next Project */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.06] bg-[#111113] p-6 sm:p-8 flex flex-col justify-center space-y-6 hover:bg-[#18181b] transition-colors">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-white">
                Dein Projekt als nächste Referenz?
              </h3>

              <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                Ich nehme pro Quartal nur eine begrenzte Anzahl an neuen Aufträgen an. Das garantiert persönliche Aufmerksamkeit, schnelle Abstimmungen und messbare Ergebnisse ohne Agentur-Wasserkopf.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#kontakt"
                className="inline-flex justify-center bg-white text-zinc-950 hover:bg-zinc-200 font-sans font-medium text-sm px-5 py-2.5 rounded-lg transition-colors w-full sm:w-auto text-center"
              >
                Projekt anfragen
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
