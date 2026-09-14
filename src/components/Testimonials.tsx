import React from 'react';
import { Star, Quote, CheckCircle2, Building2, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      num: '[01]',
      name: 'Marco & Elena',
      role: 'Inhaber, The Burning Bandit Kerpen',
      text: 'Alexander hat unser Tattoo-Studio online komplett neu aufgestellt. Der Transformations-Slider und der Style-Rechner bringen uns wöchentlich messbar mehr Terminanfragen von echten Tattoo-Liebhabern.',
      rating: 5,
      branch: 'Tattoo & Craft Brand'
    },
    {
      num: '[02]',
      name: 'Alyas',
      role: 'Inhaber, Alyas Barbershop Horrem',
      text: 'Die Seite sieht extrem stark aus und lädt blitzschnell auf jedem Handy. Unsere Kunden lieben die 1-Klick Terminbuchung und das hochklassige Gentleman-Design.',
      rating: 5,
      branch: 'Herrensalon & Barbershop'
    },
    {
      num: '[03]',
      name: 'Mai & Team',
      role: 'Geschäftsleitung, The Nails Shop Horrem',
      text: 'Das warme, elegante Design und die Google Maps Optimierung haben uns dauerhaft auf Platz #1 im Erftkreis gebracht. Wir sind planbar Wochen im Voraus ausgebucht.',
      rating: 5,
      branch: 'Boutique Nagelstudio'
    }
  ];

  return (
    <section id="kundenstimmen" className="py-20 sm:py-32 bg-[#09090b] border-t border-white/[0.07] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="luxury-pill mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kundenstimmen &amp; Feedback</span>
          </div>

          <h2 className="font-sans font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Was Inhaber über <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              Rheindorf Digital
            </span> sagen.
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Echte Erfahrungen von Betrieben und Unternehmen, die mit maßgeschneiderten Systemen online messbar gewachsen sind.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="luxury-card p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 space-y-8"
            >
              <div className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400">{rev.num} Review</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="font-mono text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  „{rev.text}“
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-base">{rev.name}</h4>
                  <span className="text-xs font-mono text-slate-400 block mt-0.5">{rev.role}</span>
                </div>

                <span className="text-[10px] font-mono bg-white/5 text-emerald-400 border border-white/10 px-3 py-1 rounded-full font-bold">
                  {rev.branch}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
