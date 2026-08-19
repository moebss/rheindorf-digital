import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Zap, CheckCircle2, Phone, MessageSquare, Play, Flame } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

import nawrathImg from '../images/media_1786374893160.png';
import alyasImg from '../images/media_1786244838088.png';
import banditImg from '../images/media_1786244763224.png';
import nailsImg from '../images/media_1786372914462.png';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [activeTab, setActiveTab] = useState(0);

  const showcases = [
    {
      title: 'AZ Heizung & Badmanufaktur Nawrath',
      category: 'SHK Meisterbetrieb · Kerpen & Köln',
      image: nawrathImg,
      metric: '+280% Anfragen',
      metricLabel: 'inkl. Bad-Budgetrechner & 24/7 Notdienst-Routing',
      url: 'https://moebss.github.io/az-heizung-sanitaer/'
    },
    {
      title: 'Alyas Barbershop Horrem',
      category: 'Gentlemen Salon · Kerpen-Horrem',
      image: alyasImg,
      metric: '0.3s Ladezeit',
      metricLabel: '1-Klick WhatsApp & Online-Terminbuchung ohne No-Shows',
      url: 'https://moebss.github.io/alyas-barbershop-horrem/'
    },
    {
      title: 'The Burning Bandit Tattoo Studio',
      category: 'High-End Tattoo & Craft · Kerpen',
      image: banditImg,
      metric: '+420% Ersttermine',
      metricLabel: 'mit interaktivem Cover-Up Slider & Artist Wall',
      url: 'https://moebss.github.io/the-burning-bandit-kerpen/'
    },
    {
      title: 'The Nails Shop Horrem',
      category: 'Boutique Nagelstudio · Horrem',
      image: nailsImg,
      metric: 'Top #1 Google Maps',
      metricLabel: 'für Studio-Suchanfragen im Rhein-Erft-Kreis',
      url: 'https://moebss.github.io/the-nails-shop-horrem/'
    }
  ];

  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-32 overflow-hidden bg-[#030712]">
      
      {/* 60fps Interactive Constellation Canvas */}
      <HeroCanvas />

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Live Availability Badge */}
        <div className="text-center mb-6">
          <div className="luxury-pill inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
            <span>Verfügbar für Q3 / Q4 2026 Projekte · Köln / Kerpen & Remote</span>
          </div>
        </div>

        {/* Big Impact Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10 space-y-4">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.03]">
            Empower Your Brand with <br className="hidden sm:inline" />
            <span className="inline-block px-5 py-1.5 rounded-full bg-emerald-500 text-slate-950 my-1.5 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              Next-Gen Web & KI
            </span>{' '}
            <br className="hidden sm:inline" />
            für Marktführer.
          </h1>

          <p className="font-mono text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            Wir bauen maßgeschneiderte, handcodierte React-Websites und 24/7 KI-Telefonassistenten für Premium-Betriebe in Köln, Kerpen und NRW. 100% Festpreisgarantie, &lt; 0.4s Ladezeit & DSGVO-sicher.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => {
              playSuccessSound();
              onOpenContact();
            }}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className="luxury-btn-primary w-full sm:w-auto text-sm px-8 py-4"
          >
            <span>Kostenloses Erstgespräch anfragen</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/4916096351750?text=Hallo%20Alexander!%20Ich%20habe%20Interesse%20an%20einem%20Projekt."
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className="luxury-btn-secondary w-full sm:w-auto text-sm px-8 py-4 flex items-center justify-center gap-2 text-[#25D366] hover:text-white"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Express-Kontakt</span>
          </a>
        </div>

        {/* Interactive Showcase Switcher Card */}
        <div
          data-cursor="view"
          className="luxury-card p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl relative overflow-hidden group"
        >
          
          {/* Tab Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-white/10 no-scrollbar">
            {showcases.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  playClickSound();
                }}
                onMouseEnter={playHoverSound}
                data-cursor="pointer"
                className={`font-mono text-xs font-bold px-4 py-2.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-emerald-500 text-slate-950 shadow-lg scale-[1.02]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                [0{idx + 1}] {sc.title.split(' ')[0]} {sc.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>

          {/* Active Case Study Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screenshot Frame */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-[#030712] relative">
              <img
                src={showcases[activeTab].image}
                alt={showcases[activeTab].title}
                className="w-full h-[260px] sm:h-[340px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Floating Speed Badge */}
              <div className="absolute top-4 left-4 luxury-pill bg-black/85 backdrop-blur-md border-emerald-500/40 text-emerald-400 shadow-xl">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Google PageSpeed: 100/100 · 0.38s FCP</span>
              </div>
            </div>

            {/* Spec Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  {showcases[activeTab].category}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {showcases[activeTab].title}
                </h3>
              </div>

              {/* Metric Callout */}
              <div className="p-4 rounded-2xl bg-[#030712] border border-emerald-500/30 space-y-1">
                <div className="font-display font-black text-3xl text-emerald-400">
                  {showcases[activeTab].metric}
                </div>
                <div className="font-mono text-xs text-slate-300">
                  {showcases[activeTab].metricLabel}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={showcases[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playSuccessSound}
                  onMouseEnter={playHoverSound}
                  data-cursor="pointer"
                  className="luxury-btn-primary w-full text-xs"
                >
                  <span>Live Projekt im Browser testen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
