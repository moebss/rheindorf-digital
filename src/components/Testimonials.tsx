import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="kundenstimmen" className="py-24 sm:py-32 bg-[#f5f2eb]/60 border-t border-[#e7e3d8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
            Stimmen &bull; 100% Real
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Was Kunden sagen.
          </h2>

          <p className="font-sans text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Keine gekauften Fake-Reviews oder erfundenen Logos. Ich stehe für messbare Ergebnisse und transparente Zusammenarbeit auf Augenhöhe.
          </p>
        </div>

        {/* 2-Column High-Trust Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Card: Verified Client Review */}
          <div className="lg:col-span-7 rounded-2xl border border-[#e7e3d8] bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-emerald-300 transition-all shadow-xs">
            <p className="text-base sm:text-lg font-sans text-stone-700 leading-relaxed italic">
              "Kunden finden uns jetzt sofort über Google Maps, und die meisten Fragen klären sich über die Website von selbst. Alles lädt blitzschnell auf jedem Handy, sieht extrem hochwertig aus und wir stehen im Erftkreis ganz oben. Die Zusammenarbeit war unkompliziert und direkt — so soll das laufen."
            </p>

            <div className="pt-6 border-t border-[#e7e3d8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-sans font-semibold text-stone-900 text-sm">Alexander K. (Inhaber)</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-700" />
                    <span>Verifiziert</span>
                  </span>
                </div>
                <div className="font-sans text-stone-500 text-sm mt-0.5">Smoky Head&amp;Shisha Shop • Kerpen-Horrem</div>
              </div>

              <a
                href="https://smoky-headshop.de/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 hover:text-emerald-800 font-semibold transition-colors w-fit"
              >
                <span>smoky-headshop.de</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Card: Next Project */}
          <div className="lg:col-span-5 rounded-2xl border border-[#ded7c8] bg-[#f8f5ee] p-6 sm:p-8 flex flex-col justify-center space-y-6 hover:border-emerald-300 transition-all shadow-xs">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold w-fit block">
                Nächstes Quartal
              </span>
              <h3 className="font-display font-bold text-xl text-stone-900">
                Dein Projekt als nächste Referenz?
              </h3>

              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Ich nehme pro Quartal nur eine begrenzte Anzahl an neuen Projekten an. Das garantiert persönliche Aufmerksamkeit, schnelle Abstimmungen und messbare Ergebnisse ohne Agentur-Wasserkopf.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#kontakt"
                className="inline-flex justify-center items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-[0_2px_10px_rgba(4,120,87,0.25)] hover:shadow-[0_4px_15px_rgba(4,120,87,0.35)] w-full sm:w-auto text-center"
              >
                <span>Projekt anfragen</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
