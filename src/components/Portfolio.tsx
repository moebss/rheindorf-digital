import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowUpRight, Zap, Star, ShieldCheck, MapPin } from 'lucide-react';

import nawrathImg from '../images/media_1786374893160.png';
import alyasImg from '../images/media_1786244838088.png';
import banditImg from '../images/media_1786244763224.png';
import nailsImg from '../images/media_1786372914462.png';

interface PortfolioProps {
  onOpenContact: () => void;
}

export default function Portfolio({ onOpenContact }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'nawrath-bad',
      num: '[01]',
      category: 'handwerk',
      categoryLabel: 'Handwerk & Badmanufaktur',
      year: '2026',
      title: 'AZ Heizung & Badmanufaktur Nawrath',
      location: 'Köln & Rhein-Erft-Kreis',
      impact: '+340% qualifizierte Komplettbad-Anfragen',
      desc: 'High-End Badsanierungs- & Heizungsplattform mit 3-Sekunden Notdienst-Routing, interaktivem 3D-Kostenrechner und Google Maps Local SEO Dominanz (#1 im 3-Pack).',
      stats: '100/100 PageSpeed · 0.38s FCP',
      tags: ['Badsanierungs-Rechner', '3-Sek. Notdienst Routing', 'Local SEO #1', 'Headless React'],
      liveUrl: 'https://moebss.github.io/az-heizung-sanitaer/',
      img: nawrathImg,
    },
    {
      id: 'alyas-barber',
      num: '[02]',
      category: 'beauty',
      categoryLabel: 'Barbershop & Herrensalon',
      year: '2026',
      title: 'Alyas Barbershop Horrem',
      location: 'Kerpen-Horrem · Bahnhofstraße 14',
      impact: '120+ automatisierte Termine / Monat',
      desc: 'Dark Luxury Experience mit maßgeschneiderter Typografie, integriertem Style-Kalkulator und vollautomatisierter WhatsApp- & Kalender-Terminbuchung.',
      stats: '4.9 ★ Google Top-Rank #1',
      tags: ['Cinematic Hero', 'WhatsApp Bot', 'Local SEO 3-Pack', 'Zero No-Shows'],
      liveUrl: 'https://moebss.github.io/alyas-barbershop-horrem/',
      img: alyasImg,
    },
    {
      id: 'burning-bandit',
      num: '[03]',
      category: 'gastro',
      categoryLabel: 'Tattoo, Burger & Craft Brand',
      year: '2026',
      title: 'The Burning Bandit Independent Ink',
      location: 'Kerpen-Horrem · Hauptstraße 231',
      impact: '+180% Neukunden & Terminanfragen',
      desc: 'Dark Craft Studio-Atmosphäre mit interaktivem Vorher/Nachher Transformations-Slider, Resident Artist Showcase und transparentem 3-Schritt Preiskalkulator.',
      stats: '4.8 ★ bei 160+ Reviews',
      tags: ['Transformations-Slider', 'Artist Showcase', 'Next-Gen UI', '100% DSGVO'],
      liveUrl: 'https://moebss.github.io/the-burning-bandit-kerpen/',
      img: banditImg,
    },
    {
      id: 'nails-shop',
      num: '[04]',
      category: 'beauty',
      categoryLabel: 'Boutique Nagelstudio & Spa',
      year: '2026',
      title: 'The Nails Shop Horrem',
      location: 'Kerpen-Horrem · Hauptstraße 18',
      impact: 'Planbar 3 Wochen im Voraus ausgebucht',
      desc: 'Sinnliches Studio-Design in Leinen & Warm Rosé mit Babyboomer-Slider, Google-Maps-Optimierung und WhatsApp-Express Buchungs-Funnel.',
      stats: '4.9 ★ bei 100+ Reviews',
      tags: ['Spa Ästhetik', 'Babyboomer Slider', 'WhatsApp Express', '0.3s Speed'],
      liveUrl: 'https://moebss.github.io/the-nails-shop-horrem/',
      img: nailsImg,
    },
  ];

  const categories = [
    { id: 'all', label: 'Alle Showcase-Projekte' },
    { id: 'handwerk', label: 'Handwerk & Badsanierung' },
    { id: 'beauty', label: 'Salons & Barber' },
    { id: 'gastro', label: 'Tattoo & Craft' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projekte" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            <div className="luxury-pill">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// Live Client Showcase</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]">
              OUR INNOVATIVE <br />
              <span className="text-emerald-400">LOCAL PROJECTS.</span>
            </h2>

            <p className="text-xs sm:text-sm font-mono text-slate-300">
              Echte Kundenbetriebe im Raum Köln & NRW. Keine austauschbaren Standard-Templates, sondern maßgeschneiderte High-Conversion-Architektur.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-white text-slate-950 shadow-xl'
                    : 'bg-[#070D1B] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card Stacking Vertical List */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="luxury-card p-6 sm:p-10 group transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Large Visual Browser Frame */}
                <div className="lg:col-span-7 overflow-hidden rounded-3xl bg-[#030712] border border-white/15 relative shadow-2xl">
                  
                  {/* Browser Shell Top Bar */}
                  <div className="px-4 py-3 bg-[#0D1527] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="text-[10px] font-mono text-slate-400 ml-2 truncate max-w-[220px]">
                        {proj.liveUrl}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE PRODUCTION
                    </span>
                  </div>

                  {/* Screenshot with Zoom on Card Hover */}
                  <div className="relative h-72 sm:h-96 md:h-[420px] overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70" />

                    {/* Floating Live Impact Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                      <div className="bg-[#030712]/90 backdrop-blur-md border border-emerald-500/40 px-4 py-2 rounded-2xl shadow-xl">
                        <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 fill-current" />
                          <span>{proj.impact}</span>
                        </span>
                      </div>

                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-2xl bg-white text-slate-950 hover:bg-emerald-400 transition-colors shadow-2xl"
                        title="Live-Website im neuen Tab öffnen"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>

                {/* Right Editorial Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider">
                        {proj.categoryLabel}
                      </span>
                      <span className="text-slate-500">{proj.year}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-emerald-400 transition-colors leading-tight">
                      {proj.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{proj.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-3 py-1 rounded-xl bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action & Stats Row */}
                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <div className="text-xs font-mono text-slate-400">
                      <span className="text-slate-500 block text-[10px]">BENCHMARK:</span>
                      <span className="text-white font-bold">{proj.stats}</span>
                    </div>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="luxury-btn-primary text-xs py-2.5 px-5 !shadow-none"
                    >
                      <span>Live ansehen</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Trigger */}
        <div className="text-center pt-8">
          <p className="font-mono text-xs text-slate-400 mb-4">
            Möchtest du eine vergleichbare High-End Präsenz für deinen Betrieb?
          </p>
          <button
            onClick={onOpenContact}
            className="luxury-btn-primary"
          >
            <span>Projekt unverbindlich anfragen</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
